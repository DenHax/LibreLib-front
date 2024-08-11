{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:
let
  pkgs-stable = import inputs.nixpkgs-stable { system = pkgs.stdenv.system; };
in
{
  env.GREET = "devenv";

  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    package = pkgs-stable.nodejs_22;
    npm.enable = true;
    pnpm = {
      enable = true;
    };
    yarn.enable = false;
  };

  pre-commit.hooks = {
    prettier = {
      enable = true;
    };

    eslint = {
      enable = true;
    };
  };

  scripts.hello.exec = # bash
    ''
      echo hello from $GREET
    '';

  enterShell = # bash
    ''
      echo "Frontend for LibreLib"
      node --version
      pnpm --version
    '';

  enterTest = # bash
    ''
      echo "Running tests"
      git --version | grep --color=auto "${pkgs.git.version}"
    '';
}
