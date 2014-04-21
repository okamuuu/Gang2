#
# Cookbook Name:: anyenv
# Recipe:: default
#
# copied from https://github.com/koba04/cookbooks-anyenv/blob/master/recipes/default.rb
#
bash "install epel repo" do
    code <<-EOC
rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
sudo yum makecache
    EOC
    not_if do File.exists?("/etc/yum.repos.d/epel.repo")
    end
end

bash "install development tools" do
    code <<-EOC
yum -y groupinstall "Development Tools"
    EOC
end


%w{
  make
  openssl-devel 
  readline-devel 
  zlib-devel 
  curl-devel 
  libyaml-devel
  git
}.each do |pkgname|
  package "#{pkgname}" do
    action :install
  end
end

bash "install anyenv" do

    user node[:user][:name]
    cwd  node[:user][:home]
    environment "HOME" => node[:user][:home]

    code <<-EOC
git clone https://github.com/riywo/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(anyenv init -)"' >> ~/.bash_profile
exec $SHELL -l
    EOC
    not_if { File.exist?("#{node[:user][:home]}/.anyenv") }
end

%w{ndenv rbenv}.each do |install_env|
  bash install_env do
    user node[:user][:name]
    cwd node[:user][:home]
    environment "HOME" => node[:user][:home]

    code <<-EOC
      export PATH="$HOME/.anyenv/bin:$PATH"
      eval "$(anyenv init -)"
      anyenv install #{install_env}
    EOC
    not_if { File.exist?("#{node[:user][:home]}/.anyenv/envs/#{install_env}") }
  end
end

anyenv_map = {
  "ruby" =>   "rbenv",
  "node" =>   "ndenv"
}
anyenv_map.keys.each do |program|
  anyenv = node[:anyenv]
  next unless anyenv.key?(program)
  anyenv[program][:versions].each do |version|
    install_script = <<-EOC
      export PATH="$HOME/.anyenv/bin:$PATH"
      eval "$(anyenv init -)"
      #{anyenv_map[program]} install #{version};
    EOC

    # set global
    install_script << "#{anyenv_map[program]} global #{version};" if version == anyenv[program][:global]

    bash "#{program} - #{version}" do
      user node[:user][:name]
      cwd node[:user][:home]
      environment "HOME" => node[:user][:home]
      code install_script
      not_if { File.exist?("#{node[:user][:home]}/.anyenv/envs/#{anyenv_map[program]}/versions/#{version}") }
    end
  end
end
