export default interface Anime {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  approved: true
  titles: [
    {
      type: string
      title: string
    }
  ]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: [string]
  type: string
  source: string
  episodes: number
  status: string
  airing: true
  aired: {
    from: string
    to: string
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
      string: string
    }
  }
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  licensors: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  studios: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  genres: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  explicit_genres: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  themes: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  demographics: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  watched_episodes: number
  favorite: boolean
  tbr: boolean
}

export let intialize: Anime = {
  mal_id: 0,
  url: '',
  images: {
    jpg: {
      image_url: '',
      small_image_url: '',
      large_image_url: ''
    },
    webp: {
      image_url: '',
      small_image_url: '',
      large_image_url: ''
    }
  },
  trailer: {
    youtube_id: '',
    url: '',
    embed_url: ''
  },
  approved: true,
  titles: [
    {
      type: '',
      title: ''
    }
  ],
  title: '',
  title_english: '',
  title_japanese: '',
  title_synonyms: [''],
  type: '',
  source: '',
  episodes: 0,
  status: '',
  airing: true,
  aired: {
    from: '',
    to: '',
    prop: {
      from: {
        day: 0,
        month: 0,
        year: 0
      },
      to: {
        day: 0,
        month: 0,
        year: 0
      },
      string: ''
    }
  },
  duration: '',
  rating: '',
  score: 0,
  scored_by: 0,
  rank: 0,
  popularity: 0,
  members: 0,
  favorites: 0,
  synopsis: '',
  background: '',
  season: '',
  year: 0,
  broadcast: {
    day: '',
    time: '',
    timezone: '',
    string: ''
  },
  producers: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  licensors: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  studios: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  genres: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  explicit_genres: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  themes: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  demographics: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: ''
    }
  ],
  watched_episodes: 0,
  favorite: false,
  tbr: false
}
