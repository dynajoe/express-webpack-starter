const Webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('../../webpack.config')
const Express = require('Express')
const Path = require('path')

const app = Express()

const compiler = Webpack(WebpackConfig)

app.set('view engine', 'pug')

app.set('views', Path.join(__dirname, './views'))

app.use(
   WebpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: WebpackConfig.output.publicPath,
   })
)

app.use(WebpackHotMiddleware(compiler))

app.get('/', (req: any, res: any) => {
   res.render('index')
})

app.listen(3000, () => console.log('Listening on port 3000'))
