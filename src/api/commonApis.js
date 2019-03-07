import qs from 'qs';

class commonApis {
  // 通用的处理axios错误的函数
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
  // 从给定字典的key转化成value
  keyToValue = (dict, keys) => {
    var result = [];
    for (var keyIndex in keys) {
      for (var key in dict) {
        if (key === keys[keyIndex]) {
          result.push(dict[key]);
          break;
        }
      }
    }
    return result;
  };
  // 从给定字典的value转化成key
  valueToKey = (dict, values) => {
    var result = [];
    for (var valueIndex in values) {
      for (var key in dict) {
        if (dict[key] === values[valueIndex]) {
          result.push(key);
          break;
        }
      }
    }
    return result;
  };
  // 从给定字典中提取出key或者value数组，type=0为key数组，type=1为value数组
  getArrOfKeyOrValue = (dict, type) => {
    var result = [];
    for (var key in dict) {
      if (type == 0) {
        result.push(key);
      } else {
        result.push(dict[key]);
      }
    }
    return result;
  };
}

export default new commonApis();
