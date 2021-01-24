import express from 'express'
import ejs from 'ejs'
import { videoController } from '../app/videoController'
import { render } from './render'

const uiApp = express();

/* GET home page. */
uiApp.get('/', async (request, response) => {
  const videos = await videoController.getVideos()
  const categories = await videoController.getCategories()

  console.log(videos)
  response
    .status(200)
    .set('content-type', 'text/html')
    .send(render('index.ejs', {
      title: 'Videoleiga',
      videos,
      categories
    }))
})


uiApp.get('/:id', async (request, response) => {
  const id = request.params.id
  const video = await videoController.getOne(id)
  if (!video) {
    response
      .status(404)
      .set('content-type', 'text/html')
      .send(render('components/404/404.ejs'))
  } else {
    response
      .status(200)
      .set('content-type', 'text/html')
      .send(render('components/player/player.ejs', {
        video
      }))
  }
})

export {
  uiApp
}

