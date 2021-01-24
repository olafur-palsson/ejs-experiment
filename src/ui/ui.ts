import express from 'express'
import ejs from 'ejs'
import { videoController } from '../app/videoController'
import { render } from './loadFile'

const uiApp = express();

/* GET home page. */
uiApp.get('/', async (request, response) => {
  const videos = await videoController.getVideos()

  console.log(videos)
  response
    .status(200)
    .set('content-type', 'text/html')
    .send(render('index.ejs', {
      title: 'Videoleiga',
      videos
    }))
})


export {
  uiApp
}

