const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";
console.log(isProd)

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/index" },
  }),
  assetPrefix: isProd ? "http://rutakeh.com/public_html/test" : "",
  publicRuntimeConfig: {
    staticFolder: `/`,
  },
  // webpack: (config) => {
  //   config.output.publicPath = `/test${config.output.publicPath}`;
  //   return config;
  // },
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

