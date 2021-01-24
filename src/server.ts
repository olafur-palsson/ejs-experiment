import { uiApp } from './ui/ui'
import express from 'express'
import * as path from 'path'
import logger from 'morgan'



const PORT = 3000

const startServer = (): express.Express => {
  const app = express();
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', uiApp);
  app.use('/assets', express.static('public'));

  // On-error
  app.use((err, req, res, next) => {
    res
      .status(500)
      .send(err.stack)
    next()
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })


  return app
}

export {
  startServer
}

