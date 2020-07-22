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

export const weatherAPI = {
  query: (city) => {
    return axios.get("api/weather?city="+city);
  },
  test: (city) => {
    return axios.get("api/weather/test?city="+city);
  }
}