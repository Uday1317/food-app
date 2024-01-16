import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user');
    console.log('User from localStorage:', user); // Add this line for logging
    
    if (user) {
      const token = JSON.parse(user).token;
      console.log('Request Headers:', config.headers);

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
