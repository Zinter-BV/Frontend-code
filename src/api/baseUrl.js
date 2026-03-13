// import axios from "axios";

// const api = axios.create({
//   baseURL: 'https://involved-birgit-zinter-cb767b47.koyeb.app/api/',
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(config => {
//   const token = sessionStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: 'https://involved-birgit-zinter-cb767b47.koyeb.app/api/',
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization header automatically
api.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Optional: response interceptor to throw 401 as error
api.interceptors.response.use(
  response => response, // pass through if 2xx
  error => {
    if (error.response?.status === 401) {
      // You can customize the message here
      return Promise.reject(new Error("You don't have access to this page"));
    }
    return Promise.reject(error);
  }
);

export default api;