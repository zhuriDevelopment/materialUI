import axios from 'axios';

class materialInfoSearchNaviCardAPIs{
    /* 物料分类选择器显示信息 */
    getMaterialCategInfo = function(){
      var retDict = [];
      /* get请求 */
      axios.get(`http://202.120.1.66:8080/materialmanagement/getMaterialCategory`)
          .then((response) => {
            console.log("getMaterialCategory received.");
            retDict.push(response.data);            
          })
          .catch(error => {
            // console.log(`error in initing tree`, error);
          });
          return retDict;          
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