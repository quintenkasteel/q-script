import path, { join } from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import expressStaticGzip from "express-static-gzip";
import bodyParser from 'body-parser';


const app = express()
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('*.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript');
    res.sendFile(join(DIST_DIR , `${req.url}.br`));
  } else if (req.header('Accept-Encoding').includes('gz')) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    res.sendFile(join(DIST_DIR , `${req.url}.gz`));
  } else {
    res.sendFile(join(DIST_DIR , 'main.js'));
  }
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
