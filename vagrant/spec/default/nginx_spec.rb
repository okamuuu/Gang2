require 'spec_helper'

describe package('nginx', '1.4.7') do
    it { should be_installed.with_version('1.4.7')  }
end

describe service('nginx') do
  it { should be_enabled   }
  it { should be_running   }
end

describe port(80) do
  it { should be_listening }
end

describe file('/etc/nginx/nginx.conf') do
  it { should be_file }
#  its(:content) { should match /user  nginx/ }
end
