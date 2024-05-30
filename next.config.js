const path = require("path");

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/images",
              outputPath: "static/images",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      }
    );

    return config;
  },
  images: {
    disableStaticImages: true,
  },
};
