#
# Cookbook Name:: groonga
# Recipe:: default
#
# Copyright 2014, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
bash "install groonga" do
    code <<-EOC
sudo rpm -ivh http://packages.groonga.org/centos/groonga-release-1.1.0-1.noarch.rpm
sudo yum makecache
    EOC
    not_if do File.exists?("/etc/yum.repos.d/groonga.repo")
    end
        
end

package 'groonga' do
    action :install
end

