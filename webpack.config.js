module.exports = {
  entry: './app/app.jsx',
  output: { path: __dirname, filename: './public/bundle.js' },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/Main.jsx',
      TodoForm: 'app/components/TodoForm.jsx'
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
