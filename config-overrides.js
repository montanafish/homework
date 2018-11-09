const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#000000",
      "@layout-body-background": "#f6f7f8 !important",
      "@layout-header-background": "#ffffff !important",
      "@layout-sider-background": "#f6f7f8 !important",
      "@layout-footer-background": "#ffffff !important",
      "@layout-header-height": "54px !important",
      "@font-family":
        '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Lucida Grande", "メイリオ", Verdana, "ＭＳ Ｐゴシック", sans-serif !important'
    },
    javascriptEnabled: true
  })(config, env);

  return config;
};
