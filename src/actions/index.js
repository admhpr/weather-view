import axios from 'axios';
import {
    API_KEY
} from '../config';
const key = API_KEY,
      BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${BASE_URL}&q=${city},us`,
          request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}