class keyReplace {
  planKeyReplaceArr = function(oldkey, newkey, dict, array) {
    let resultArray = Object.assign([], array);
    for (let element in resultArray) {
      let oldValue = resultArray[element][oldkey];
      let newValue = '';
      for (let index in dict) {
        if (dict[index]['value'] === oldValue) {
          newValue = dict[index]['label'];
          break;
        }
      }
      resultArray[element][newkey] = newValue;
    }
    return resultArray;
  }
}

export default new keyReplace();