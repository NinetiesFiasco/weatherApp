import axios from 'axios';

export const tstAPI = {
  getTST: () => {
    return axios.get("api/tst");
  }
}

export const arrayAPI = {
  sort: (array) => {
    return axios.post("api/sort",{array});
  }
}