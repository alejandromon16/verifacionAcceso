// // @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
// const config = {}

// module.exports = withBlitz(config)


const withImages = require("next-images");
const path = require("path");

const config = withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
});

module.exports = withBlitz(config);