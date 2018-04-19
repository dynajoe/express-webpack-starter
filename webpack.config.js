const Webpack = require('webpack')
const path = require('path')
const ServePath = '/assets/'
const _ = require('lodash')

const DEVELOPMENT = process.env.NODE_ENV !== 'production'

function OnlyIn(test, thing) {
   if (test) return thing
}

module.exports = {
   entry: _.compact([OnlyIn(DEVELOPMENT, 'webpack-hot-middleware/client'), './src/client/scripts/main.ts']),
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.elmproj$/,
            loaders: ['elm-hot-loader', 'elm-webpack-project-loader'],
         },
      ],

      noParse: /\.elmproj$/,
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.elmproj'],
   },
   plugins: [new Webpack.HotModuleReplacementPlugin()],
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: ServePath,
   },
}
