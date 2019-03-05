class materialInfoSearchNaviCardAPIs{

    /* 物料分类选择器显示信息 */
    getMaterialCategInfo = function(){
        return  [{
            value: '分类1',
            label: '分类1'
          }, {
            value: '分类2',
            label: '分类2'
          }, {
            value: '分类3',
            label: '分类3'
          }, {
            value: '分类4',
            label: '分类4'
          }, {
            value: '分类5',
            label: '分类5'
          }];
    }
 
    /* 设计版本选择器显示信息 */
    getDesignVersionInfo = function(){
      return  [{
          value: '版本1',
          label: '版本1'
        }, {
          value: '版本2',
          label: '版本2'
        }, {
          value: '版本3',
          label: '版本3'
        }, {
          value: '版本4',
          label: '版本4'
        }, {
          value: '版本5',
          label: '版本5'
        }];
  }
}

export default new materialInfoSearchNaviCardAPIs();