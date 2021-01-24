interface Video {
  id: number
  title: string
  description: string
  created: number
  duration: number
  poster: string
  video: string
  "related": number[]
}

class VideoController {
  async getVideos (): Promise<Video[]> {
    const data = require('./videos.json')
    return data.videos
  }
}

export const videoController = new VideoController()

