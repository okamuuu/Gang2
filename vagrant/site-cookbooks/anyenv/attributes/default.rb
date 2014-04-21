default[:user] = {
  name: "vagrant",
  home: "/home/vagrant"
};

default[:anyenv] = {
  "ruby"    => {
    versions:   %w{1.9.3-p545},
    global:     "1.9.3-p545"
  },

  "node"    => {
    versions:  %w{v0.10.26},
    global:    "v0.10.26"
  }
};
