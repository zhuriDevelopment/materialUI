class materialInfoSearchNaviCardAPIs{

    /* 回传物料分类选择器 显示信息的函数 */
    getMaterialCategInfo = function(){
      return  [{
          value: 'A',
          label: '类型A'
        }, {
          value: 'B',
          label: '类型B'
        }, {
          value: 'C',
          label: '类型C'
        }, {
          vvalue: 'D',
          label: '类型D'
        }, {
          value: 'E',
          label: '类型E'
        }];
    }

    /* 回传物料设计版本选择器 显示信息的函数 */
    getMaterialDesignVersionInfo = function(){
      return [{
          value: 'DV-A',
          label: '版本A'
        }, {
          value: 'DV-B',
          label: '版本b'
        }, {
          value: 'DV-c',
          label: '版本C'
        }, {
          value: 'DV-A',
          label: '版本A'
        }, {
          value: 'DV-A',
          label: '版本A'
      }];
    }
}

export default new materialInfoSearchNaviCardAPIs();