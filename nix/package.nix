{
  lib,
  stdenv,
  hugo,
  theme, # the Hugo theme passed in from the flake
}:

stdenv.mkDerivation {
  name = "qgis-uc-website";

  src = lib.cleanSourceWith {
    src = ../.;
    filter = (
      path: type:
      (builtins.all (x: x != baseNameOf path) [
        ".git"
        ".github"
        "flake.nix"
        "flake.lock"
        "package.nix"
        "result"
      ])
    );
  };

  buildInputs = [ hugo ];

  # Populate the theme directory before building
  preBuild = ''
    mkdir -p themes/qgis-website-theme
    ln -s ${theme}/. themes/qgis-website-theme/
  '';

  buildPhase = ''
    hugo --config config.toml,config/config.prod.toml
  '';

  installPhase = ''
    mkdir -p $out
    cp -r public_prod/* $out/
  '';

  meta = with lib; {
    description = "A built QGIS UC website";
    license = licenses.mit;
  };
}
