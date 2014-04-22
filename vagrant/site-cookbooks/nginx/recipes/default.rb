#
# Cookbook Name:: nginx
# Recipe:: default
#
# Copyright 2014, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
bash "install nginx" do
    code <<-EOC
sudo rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    EOC
    not_if do File.exists?("/etc/yum.repos.d/nginx.repo") 
    end
end

package "nginx" do
  action :install
end

service "nginx" do
  supports :status => true, :restart => true, :reload => true
  action [:enable, :start]
end

template "nginx.conf" do
        path "/etc/nginx/conf.d/default.conf"
        source "default.conf.erb"
        owner "root"
        group "root"
        mode 0644
        notifies :reload,'service[nginx]'
end
