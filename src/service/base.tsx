// 前端发送请求给后端的逻辑部分
import axios from 'axios';

const ERR_OK = 0;
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://aesthetic'
    : 'http://rap2api.taobao.org/app/mock/280998/';

axios.defaults.baseURL = baseURL;

// 暴露一个封装axios get请求的get函数
export function get(url, params) {
  return axios
    .get(url, {
      params
    })
    .then(res => {
      const serverData = res.data;
      // 后端返回数据serverData的code === ERR_OK(0)表示成功
      console.info(serverData);
      if (serverData.code === ERR_OK) {
        return serverData.result;
      }
    })
    .catch(e => {
      console.log(e);
    });
}

// 暴露一个封装axios post请求的post函数
export function post(url, params) {
  return axios
    .post(url, {
      params
    })
    .then(res => {
      const serverData = res.data;
      if (serverData.code === ERR_OK) {
        return serverData.result;
      }
    })
    .catch(e => {
      console.log(e);
    });
}
