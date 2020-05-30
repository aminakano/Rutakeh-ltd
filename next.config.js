const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
process.env.NODE_ENV = "production";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
  assetPrefix: isProd ? "https://rutakeh.com/test/" : "",
};
module.exports = withImages();
module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[path][name].[ext]"
          }
        }
      });

      return config;
    }
  })
);

