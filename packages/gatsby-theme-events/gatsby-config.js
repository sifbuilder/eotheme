
module.exports = function ({ contentPath = "data", basePath = "/" }) {
  let res = {
    plugins: [
      "gatsby-plugin-theme-ui",      
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath,
        },
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: "Event",
        },
      },
    ],
  }
  return res
}
