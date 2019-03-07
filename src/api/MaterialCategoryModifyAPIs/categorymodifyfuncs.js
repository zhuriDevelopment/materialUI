class CategoryModifyFuncs {
  handleBaseInfos = (baseInfos) => {
    for (var element in baseInfos) {
      var valueRangeOri = JSON.parse(baseInfos[element].valueRange);
      var valueRangeType = valueRangeOri.type;
      var valueRange = valueRangeOri.content;
      delete baseInfos[element].valueRange;
      baseInfos[element]["valueRange"] = valueRange;
      baseInfos[element]["valueRangeType"] = valueRangeType;
    }
    return baseInfos;
  };
}

export default new CategoryModifyFuncs();
