import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

export default {
  register(body) {
    return axios.post('http://localhost:4000//api/v1/register', body, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.data);
  }
}