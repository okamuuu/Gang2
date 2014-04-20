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
sudo rpm -ivh htt:p//packages.groonga.org/centos/groonga-release-1.1.0-1.noarch.rpm
sudo yum makecache
sudo yum install -y groonga
    EOC
end

