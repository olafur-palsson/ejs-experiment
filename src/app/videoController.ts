import moment from 'moment'
interface Video {
  id: number
  title: string
  description: string
  created: number
  duration: number
  poster: string
  fromNow: string
  video: string
  related: number[]
}

interface Category {
  title: string
  videos: number[]
}

class VideoController {
  async getOne (id): Promise<Video | void> {
    const videos = await this.getVideos()
    return videos.find(video => video.id == id)
  }

  async getVideos (): Promise<Video[]> {
    const data = require('./videos.json')
    return data.videos.map(video => {
      return {
        ...video,
        fromNow: moment(video.created).fromNow()
      }
    })
  }

  async getCategories (): Promise<Category[]> {
    const data = require('./videos.json')
    return data.categories
  }
}

export const videoController = new VideoController()
