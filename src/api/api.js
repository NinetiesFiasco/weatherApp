import axios from 'axios';

export const tstAPI = {
  getTST: () => {
    return axios.get("api/tst");
  }
}