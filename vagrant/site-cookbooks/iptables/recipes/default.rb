#
# Cookbook Name:: iptables
# Recipe:: default
#
# Copyright 2014, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
service "iptables" do
  supports :status => true, :restart => true, :reload => true
  action [:disable, :start]
end

