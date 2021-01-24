import { uiApp } from './ui/ui'
import express from 'express'
import * as path from 'path'
import logger from 'morgan'


var app = express();

const PORT = 3000

const startServer = () => {
// view engine setup
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', uiApp);

// error handler
  app.use(function(err, req, res, next) {
    res
      .status(500)
      .send(err.stack)
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })


  return app
}

export {
  startServer
}

