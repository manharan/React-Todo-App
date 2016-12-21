
var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: { path: __dirname, filename: './public/bundle.js' },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/Main.jsx',
      TodoForm: 'app/components/TodoForm.jsx',
      Nav: 'app/components/Nav.jsx',
      About:'app/components/About.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
