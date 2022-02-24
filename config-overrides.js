const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
  }),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css",
  })
);
