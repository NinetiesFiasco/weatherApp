import axios from 'axios';

export const timeAPI = {
  get: () => {
    return axios.get("api/now");
  }
}

export const arrayAPI = {
  sort: (array) => {
    return axios.post("api/sort",{array});
  }
}

const weatherAPIKey = "9d74f0b698218875eb5fecff78941eb6";

export const weatherAPI = {  
  query: (city) => {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+weatherAPIKey);
  }
}