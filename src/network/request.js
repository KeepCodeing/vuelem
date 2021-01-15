import axios from 'axios'

export default function (config) {
  const instance = axios.create({
    baseURL: '/',
    timeout: 5000
  });

  instance.interceptors.request.use(config => config, err => err);

  instance.interceptors.response.use(res => res.data, err => err);

  return instance(config);
}
