const SiteMapPlugin = require('sitemap-webpack-plugin').default;

const paths = ['/home', '/random', '/detail/:id', '/categories/:ingredient'];

module.exports = {
  configureWebpack: {
    plugins: [
      new SiteMapPlugin('http://192.168.178.20:8080/', paths),
    ],
  },
};
