// Action types
const TOGGLE_OPEN_WEATHER = "TOGGLE_OPEN_WEATHER";
const SET_PLACE = "SET_PLACE";
const SET_WEATHER = "SET_WEATHER";

const initialState = {
  isWeatherOpen: false,
  place: {
    city: '',
    country: ''
  },
  weather: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN_WEATHER:
      return {
        ...state,
        isWeatherOpen: !state.isWeatherOpen,
      };
    case SET_PLACE:
      return {
        ...state,
        place: action.place
      };
    case SET_WEATHER:
      return {
        ...state,
        weather: action.weather,
      };
    default:
      return state;
  }
};

// Action creators
export const toggleOpenWeather = () => {
  return {
    type: TOGGLE_OPEN_WEATHER
  }
}
export const setPlace = (place) => {
  return {
    type: SET_PLACE,
    place
  }
}
const setWeather = (weather) => {
  return {
    type: SET_WEATHER,
    weather
  }
}

//Thunks
