// eslint-disable-next-line no-undef
module.exports = function config(api) {
  api.cache(true);
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/plugin-syntax-flow"];

  return {
    presets,
    plugins,
  };
};
