<template>
  <!-- 搜索导航栏卡片 -->
  <el-card class="box-card">
    <!-- 一行的布局 -->
    <el-row :gutter="20" type="flex">
      <!-- 物料分类输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            物料分类:
          </div>
          <el-cascader
            expand-trigger="hover"
            :options="materialCategInfo"
            v-model="searchParams.materialCategory"
            >
          </el-cascader>

          <!-- <el-select class="searchBarSelector" v-model="searchParams.materialCategory" placeholder="请选择">
            <el-option
            v-for="item in materialCategInfo"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select> -->
        </div>
      </el-col>

      <!-- 物料名称输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
          物料名称:
          </div>
          <el-input v-model="searchParams.materialName" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

      <!-- SKU编码输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            SKU编码:
          </div>
          <el-input v-model="searchParams.skuCode" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

      <el-col :span="6" class="buttonCol">
        <!-- 高级搜索按钮 -->
        <el-button  plain @click="advancedSearchButtonClick">
          高级搜索
        </el-button>
        
        <!-- 搜索按钮 -->
        <el-button type="primary"  icon="el-icon-search" @click="searchClick">
          搜索
        </el-button>

        <!-- 新建物料按钮 -->
        <el-button type="primary" icon="el-icon-plus" @click="createMaterailClick">
          新建物料
        </el-button>
      </el-col>
    </el-row>
    
    <!-- 高级搜索信息项 -->
    <el-row :gutter="20" type="flex" v-show="advSearchShow">
      <!-- 时间输入框 -->
      <el-col :span="6">
        <div class="searchBar" v-show="advSearchShow">
          <div class="title">
            起始时间:
          </div>
            <el-date-picker
              v-model="timeRange1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
        </div>
      </el-col>

      <!-- 时间输入框 -->
      <el-col :span="6">
        <div class="searchBar" v-show="advSearchShow">
          <div class="title">
            终止时间:
          </div>
            <el-date-picker
              v-model="timeRange2"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
        </div>
      </el-col>

      <!-- SPU编码输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            SPU编码:
          </div>
          <el-input v-model="searchParams.spuCode" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" v-show="advSearchShow">
      <!-- 设计图号输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            设计图号:
          </div>
          <el-input v-model="searchParams.designCode" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

      <!-- 设计版本输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            设计版本:
          </div>
          <el-select class="searchBarSelector" v-model="searchParams.designVersion" placeholder="请选择">
            <el-option
            v-for="item in materialDesignVersionInfo"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>

      <!-- 来源输入框 -->
      <el-col :span="6">
        <div class="searchBar">
          <div class="title">
            来源:
          </div>
          <el-input v-model="searchParams.source" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row> 
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    width: 100%;
    min-width: 900px;
    margin: 1% 1%;
    
    .el-row{
      margin: 10px ;
      .buttonCol{
        display: flex;
      }
    }

    .searchBar{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      // min-width: 50%;

      .title {
        font-size: 14px;
        min-width: 90px;
        text-align: left;
        margin: 5px;
      }

      .searchBarSelector{
        width: 100%;
      }
    }
  } 
</style>

<script>
  import MaterialInfoSearchNaviCardAPIs from '@/api/MaterialInfoListAPIs/MaterialInfoSearchNaviCardAPIs';

  export default {
    name:"MaterialInfoSearchNaviCard",

    data() {
      return {
        /* 物料分类 选择器显示信息 */
        materialCategInfo : MaterialInfoSearchNaviCardAPIs.getMaterialCategInfo(),
        materialDesignVersionInfo : MaterialInfoSearchNaviCardAPIs.getDesignVersionInfo(),

        /* 高级搜索相关组件是否显示 */
        advSearchShow: false,

        /* 时间 */
        timeRange1: '',
        timeRange2: '',

        /* 搜索输入 */
        searchParams: {
          materialCategory: '',
          materialName: '',
          skuCode: '',
          timeRange: '',
          spuCode: '',
          designCode: '',
          designVersion: '',
          source: '',
        },
      }
    },

    methods:{
      /* 高级搜索按钮点击响应函数 */
      advancedSearchButtonClick() {
        this.advSearchShow = !this.advSearchShow;
      },

      /* 搜索按钮点击响应函数 */
      searchClick () {
        /* print to conslole */
        for(var key in this.searchParams){
          console.log(key + this.searchParams[key]);
        }
        this.searchParams.timeRange = this.timeRange2 - this.timeRange1;
        /* this.searchInputs = this.searchParams; */

        var retArr = [];
        /* 搜索API--getBaseInfo */
        this.$axios
          .post(`http://202.120.1.66:8080/materialmanagement/getBaseInfo`, this.searchParams)
          .then(response => {
            console.log("getBaseInfo received.");
            let basedata = response.data['result']['baseResult'];
            let catdata = response.data['result']['catResult'];
            let unitdata = response.data['result']['unitResult'];
          
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
            }

            /* 将搜索结果写入到store中的 displayMaterialInfo中*/
            this.displayMaterialInfo = retArr;
          })
          .catch(error => {
            // console.log(`searchWithParams error: `, error);
          });
      },

      createMaterailClick(){
          //
      }
    },

    computed:{
      /* 搜索的输入变量 */
      /* searchInputs : {
        get(){
          return this.$store.getters['infolist/searchInputs'];
        },
        set(value){
          this.$store.commit('infolist/searchInputs-update',value);
        }
      }, */

      /* 表格展示信息变量 */
      displayMaterialInfo: {
        get(){
          return this.$store.getters['infolist/displayMaterialInfo'];
        },
        set(newValue){
          this.$store.commit('infolist/displayMaterialInfo-update',value);
        }
      },
    }
  }
</script>
