import qs from 'qs';

class commonApis {
  handleError = function (error, main, message) {
    if (error && error.response) {
      console.log("error.response.data", error.response.data);
      console.log("error.response.status", error.response.status);
      console.log("error.response.headers", error.response.headers);
      main.$message.error(message + error.status);
    } else {
      console.log(`error.request`, error.request);
      console.log("error.message", error.message);
      main.$message.error("在获取物料分类信息的过程中发生错误，错误为：" + error.message);
    }
    console.log(`error.config`, error.config);
  };
  paramsSerializer = params => {
    return qs.stringify(params, { indices: false })
  };
}

export default new commonApis();
