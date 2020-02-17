const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  env: {
    siteTitle: "SUSH-i Game",
    siteDescript: "Daily Gamer",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});
