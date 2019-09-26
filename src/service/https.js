import axios from 'axios';

// 设置baseURL
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://192.168.6.166:8080';
}

// 设置默认的请求超时时间
axios.defaults.timeout = 60000;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return Promise.reject(error);
  },
);

export function Fetch(ajaxOptions = {}, name = '') {
  // 默认post
  ajaxOptions.method = ajaxOptions.method || 'post';
  return new Promise((resolve, reject) => {
    axios(ajaxOptions)
      .then(response => {
        if (response.data.code !== 200) {
          reject(response.data);
        } else {
          if (typeof response.data.data === 'string') {
            response.data.data = JSON.parse(response.data.data);
          }
          resolve(response.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
