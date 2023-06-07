const ADD = "ADD";

const initialState = {
  coord: {},
  weather: [],
  base: "",
  main: {},
  visibility: 0,
  wind: {},
  clouds: {},
  dt: 0,
  sys: {},
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return action.data;
    default:
      return state;
  }
};

export const weatherDataCreator = (data) => {
  return {
    type: ADD,
    data,
  };
};

// {
//   "coord": {
//       "lon": -99.2333,
//       "lat": 25.7
//   },
//   "weather": [
//       {
//           "id": 802,
//           "main": "Clouds",
//           "description": "scattered clouds",
//           "icon": "03d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 31.5,
//       "feels_like": 32.26,
//       "temp_min": 31.5,
//       "temp_max": 31.5,
//       "pressure": 1008,
//       "humidity": 44,
//       "sea_level": 1008,
//       "grnd_level": 992
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 5.61,
//       "deg": 83,
//       "gust": 7.43
//   },
//   "clouds": {
//       "all": 31
//   },
//   "dt": 1686099374,
//   "sys": {
//       "country": "MX",
//       "sunrise": 1686051919,
//       "sunset": 1686101169
//   },
//   "timezone": -21600,
//   "id": 3530839,
//   "name": "China",
//   "cod": 200
// }
