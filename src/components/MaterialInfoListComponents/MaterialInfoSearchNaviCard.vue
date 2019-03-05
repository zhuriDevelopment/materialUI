<template>
  <!-- 搜索导航栏卡片 -->
  <el-card class="box-card">
    <!-- 一行的布局 -->
    <el-row :gutter="20" type="flex">
      <!-- 物料分类输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
            物料分类:
          </div>
          <el-select class="searchNaviSelector" v-model="searchMaterialCategory" placeholder="请选择">
            <el-option
            v-for="item in materialCategInfo"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>

      <!-- 物料名称输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
          物料名称:
          </div>
          <el-input v-model="searchMaterialName" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

      <!-- SKU编码输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
            SKU编码:
          </div>
          <el-input v-model="searchMaterialSKUCode" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

       
      <el-col :span="6" class="buttonCol">
        <!-- 高级搜索按钮 -->
        <el-button  plain @click="advancedSearchButtonClick">
          高级搜索
        </el-button>
        
        <!-- 搜索按钮 -->
        <el-button type="primary"  icon="el-icon-search" @click="searchClick()">
          搜索
        </el-button>

        <!-- 新建物料按钮 -->
        <el-button type="primary" icon="el-icon-plus">
          新建物料
        </el-button>
      </el-col>
    </el-row>
    
    <!-- 高级搜索信息项 -->
    <el-row :gutter="20" type="flex" v-show="advSrchItmShw">
      <!-- 时间输入框 -->
      <el-col :span="6">
        <div class="searchNavi" v-show="advSrchItmShw">
          <div class="title">
            时间:
          </div>
  
          <el-date-picker
          v-model="searchDate"
          type="date"
          placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-col>

      <!-- SPU编码输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
          SPU编码:
          </div>
          <el-input v-model="searchSPUCode" placeholder="请输入内容"></el-input>
        </div>
      </el-col>

      <!-- 设计图号输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
            设计图号:
          </div>
          <el-input v-model="searchDesignNumber" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" v-show="advSrchItmShw">
      <!-- 设计版本输入框 -->
      <el-col :span="6">
        <div class="searchNavi">
          <div class="title">
            设计版本:
          </div>
          <el-select class="searchNaviSelector" v-model="searchDesignVersion" placeholder="请选择">
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
        <div class="searchNavi">
          <div class="title">
            来源:
          </div>
          <el-input v-model="searchSource" placeholder="请输入内容"></el-input>
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

    .searchNavi{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      // min-width: 50%;

      .title {
        font-size: 14px;
        min-width: 90px;
        text-align: center;
        margin: 5px;
      }

      .barSelector{
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
        /* 高级搜索相关部件是否显示的变量 */
        advSrchItmShw: false,

        /* 搜索栏选择框显示的选择信息 */
        materialCategInfo : MaterialInfoSearchNaviCardAPIs.getMaterialCategInfo(),
        materialDesignVersionInfo : '',

        /* 搜索栏各输入框的值保存变量 */
        searchMaterialCategory : '',
        searchMaterialName : '',
        searchMaterialSKUCode : '',
        searchDate : '',
        searchSPUCode : '',
        searchDesignNumber : '',
        searchDesignVersion : '',
        searchSource : ''
      }
    },

    methods:{
      advancedSearchButtonClick() {
        this.advSrchItmShw = !this.advSrchItmShw;
        console.log("activeNames");
      }
    }
  }
</script>
