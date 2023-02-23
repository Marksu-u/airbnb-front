import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';
require('dotenv').config();

const authService = {
  register: async (formData) => {
    try {
      const res = await axios.post(`${process.env.API_URL}/register`, formData);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  login: async (formData) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, formData);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default authService;
