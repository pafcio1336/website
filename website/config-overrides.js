const path = require("path");

module.exports = function override(config, env) {
  // Dodaj obsługę plików SCSS
  const oneOfRule = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  );
  if (oneOfRule) {
    oneOfRule.oneOf.unshift({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
  }

  // Dodaj obsługę importowania plików SCSS bez bezwzględnej ścieżki
  config.resolve.modules.push(path.resolve("./src"));

  return config;
};
