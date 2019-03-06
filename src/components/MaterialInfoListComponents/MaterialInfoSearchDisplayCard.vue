<template>
  <!-- 搜索信息展示栏卡 -->
  <el-card class="box-card">
  <!-- 取消选择按钮 -->
    <div style="margin-bottom: 20px">
      <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
      <el-button type="danger" icon="el-icon-delete">删除所选</el-button>
    </div>

    <!-- 信息展示的表格 -->
    <!-- //? :row-class-name="tableRowClassName" -->
    <el-table
      border
      ref="multipleTable"
      :data="displayMaterialInfo"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <!-- 各列 -->
      <el-table-column
        type="selection"
        width="55"
        fixed>
      </el-table-column>

      <el-table-column
        prop="spuCode"
        label="SPU编码"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="spuName"
        label="SPU名称"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="materialCatId"
        label="物料分类"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designCode"
        label="设计图号"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designVersion"
        label="设计版本"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="source"
        label="来源"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="defaultUnitId"
        label="默认计量单位"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="description"
        label="描述"
        min-width="240">
      </el-table-column>

      <el-table-column
        prop="note"
        label="备注"
        min-width="240">
      </el-table-column>

      <el-table-column
        label="操作"
        min-width="150"
        show-overflow-tooltip
        fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <!-- 页跳转组件 -->
      <el-pagination
        background
        layout="prev, pager, next, sizes, total, jumper"
        :total="pageResultSum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        @size-change="handleSizeChange">
      </el-pagination>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    width: 100%;
    min-width: 50%;
    margin: 1% 1%;
    .block{
      margin: 20px;
      display: flex; 
      flex-direction: row; 
      padding: 0 15px; 
      align-items: center;
      justify-content: flex-end;
    }
  } 
</style>

<script>
  export default {
    name:"MaterialInfoSearchDisplayCard",
    data(){
      return {
        initLoadFlag: true,
        currentRow: null,
        pageResultSum: 0,
        pageSize: 10,
      }
    },

    methods: {
      /* 取消选择按钮的响应函数 */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange (selection) {},
      handleSizeChange (val) {
        //this.pageSize = val;
      }
    },

    computed:{
      /* 表格展示信息变量 */
      displayMaterialInfo: {
        get(){
          var retArr = [];
          /* 判断是否是初始加载 */
          if(this.initLoadFlag){
            /* 初始化时getAllBaseInfo */
            this.initLoadFlag = false;
            /* getAllBaseInfo API */
            this.$axios.get(`http://202.120.1.66:8080/materialmanagement/getAllBaseInfo`)
              .then((response) => {
                /* log */
                console.log("getAllBaseInfo received.");
                let basedata = response.data['result']['baseResult'];
                let catdata = response.data['result']['catResult'];
                let unitdata = response.data['result']['unitResult'];
              
                this.pageResultSum = basedata.length;
                for (let i = 0; i < basedata.length; ++i) {
                  let tmpvalue = {};
                  tmpvalue["spuCode"] = basedata[i]["spuCode"];
                  tmpvalue["spuName"] = basedata[i]["spuName"];
                  tmpvalue["materialCatId"] = catdata[i]["name"];
                  tmpvalue["description"] = basedata[i]["description"];
                  tmpvalue["designCode"] = basedata[i]["designCode"];
                  tmpvalue["designVersion"] = basedata[i]["designVersion"];
                  tmpvalue["source"] = basedata[i]["source"];
                  tmpvalue["defaultUnitId"] = unitdata[i]["name"];
                  tmpvalue["note"] = basedata[i]["note"];
                  retArr.push(tmpvalue);
                  console.log(tmpvalue);
                  /* this.pageNumberString = "共搜索出" + basedata.length + "条数据"; */
                }
              })
              .catch(error => {
                // console.log(`error in initing tree`, error);
              });
          }else{
            /* 否则就加载搜索设置的数据 */
            retArr = this.$store.getters['infolist/displayMaterialInfo'];
            this.pageResultSum = retArr.length;
          }
          return retArr;
        }
      }
    }
  }
</script>
