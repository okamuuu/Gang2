require 'spec_helper'

describe package('groonga', '4.0.1') do
    it { should be_installed.with_version('4.0.1')  }
end
