export type optionType = {
  name: string
  country: string
  lat: number
  lon: number
}

export type forecastType = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        pressure: number
        humidity: number
        temp: number
        temp_min: number
        temp_max: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}
