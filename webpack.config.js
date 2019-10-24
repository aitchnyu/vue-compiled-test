const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode === 'development'
  
  return {
    devtool: isDevelopmentMode ? "cheap-eval-source-map" : 'source-map',
    mode: argv.mode,
    watch: isDevelopmentMode,
    entry: {
      "something": "./app/js/something.js"
    },
    output: {
      filename: "./build/[name].js"
    },
  
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}
