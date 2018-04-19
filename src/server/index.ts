const Webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('../../webpack.config')
const Express = require('Express')

const app = Express()
const compiler = Webpack(WebpackConfig)

app.use(
   WebpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: WebpackConfig.output.publicPath,
   })
)

app.use(WebpackHotMiddleware(compiler))

app.listen(3000, () => console.log('Listening on port 3000'))
