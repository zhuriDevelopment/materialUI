<template>
  <!-- 搜索导航栏卡片 -->
  <el-card class="box-card">
    <el-form :model="searchParams" ref="baseInfos" label-width="90px" label-position="right" status-icon>
      <el-row :gutter="10">
        <!-- 选项部分 -->
        <el-col :span="16">
          <!-- 第一行 -->
          <el-row :gutter="10">
            <!-- 物料分类输入框 -->
            <el-col :span="8">
              <el-form-item label="物料分类：" prop="catetory" :class="[advSearchShow ? '' : 'last-form-item']">
                <!-- <el-select class="barSelector" filterable v-model="searchParams.materialCatId" placeholder="请选择">
                  <el-option
                  v-for="item in catOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select> -->
                <el-cascader
                  :options="catOptions"
                  expand-trigger="hover"
                  v-model="searchParams.materialCatIds">
                </el-cascader>
              </el-form-item>
            </el-col>
            <!-- 物料名称输入框 -->
            <el-col :span="8">
              <el-form-item label="物料名称：" prop="catetory" :class="[advSearchShow ? '' : 'last-form-item']">
                <el-input class="barSelector" v-model="searchParams.materialName" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>
            <!-- SKU编码输入框 -->
            <el-col :span="8">
              <el-form-item label="SKU编码：" :class="[advSearchShow ? '' : 'last-form-item']">
                <el-input class="barSelector" v-model="searchParams.skuCode" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <!-- 高级搜索信息项 -->
          <el-row :gutter="10" v-show="advSearchShow">
            <!-- 时间输入框 -->
            <el-col :span="16">
              <el-form-item label="时间：">
                <el-date-picker
                  class="barSelector"
                  v-model="searchParams.timeRange"
                  type="daterange"
                  align="right"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>

            <!-- SPU编码输入框 -->
            <el-col :span="8">
              <el-form-item label="SPU编码：">
                <el-input class="barSelector" v-model="searchParams.spuCode" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="10" v-show="advSearchShow">
            <!-- 设计图号输入框 -->
            <el-col :span="8">
              <el-form-item label="设计图号：" :class="[advSearchShow ? 'last-form-item' : '']">
                <el-input class="barSelector" v-model="searchParams.designCode" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>

            <!-- 设计版本输入框 -->
            <el-col :span="8">
              <el-form-item label="设计版本：" :class="[advSearchShow ? 'last-form-item' : '']">
                <el-input class="barSelector" v-model="searchParams.designVersion" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>

            <!-- 来源输入框 -->
            <el-col :span="8">
              <el-form-item label="来源：" :class="[advSearchShow ? 'last-form-item' : '']">
                <el-input class="barSelector" v-model="searchParams.source" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <!-- 按钮部分 -->
        <el-col :span="8">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-button class="col-button" type="primary" @click="searchClick">搜索</el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="col-button" type="info" @click="advancedSearchButtonClick">高级搜索</el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="col-button" type="success" @click="createNewMaterial">新建物料</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    margin-bottom: 20px;
    margin-left: 20px;
    .barSelector{
      width: 100%;
    }
  }
  .last-form-item {
    margin-bottom: 0px;
  }
  .col-button {
    width: 100%;
  }
</style>

<script>
import CommonApi from '@/api/commonApis';
export default {
  name:"MaterialInfoSearchNaviCard",
  data() {
    return {
      advSearchShow: false,
      searchParams: {
        materialCatIds: [],
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
  mounted() {
    var that = this;
    that.loadAllCatOptions();
  },
  methods:{
    deleteEmptyChildren(data) {
      var that = this;
      // console.log(`data = `, data);
      delete data.value;
      data["value"] = data["id"];
      delete data.id;
      if (data.children.length === 0) {
        delete data.children;
      } else {
        for (let idx in data.children) {
          that.deleteEmptyChildren(data.children[idx]);
        }
      }
    },
    loadAllCatOptions() {
      var that = this;
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getMaterialCategory`)
        .then(response => {
          that.deleteEmptyChildren(response.data[0]);
          that.$store.commit('baseinfo/cat-opt-arr', response.data);
        })
        .catch(error => {
          CommonApi.handleError(error, that, "在获取所有物料分类信息的时候发生错误，错误为：");
        })
    },
    advancedSearchButtonClick() {
      this.advSearchShow = !this.advSearchShow;
    },
    searchClick () {
      var that = this;
      // console.log(`searchParams`, this.searchParams);
      var params = {};
      for (let key in this.searchParams) {
        let value = this.searchParams[key];
        // console.log(`key`, key, `value`, value);
        if (value !== null && value != '') {
          if (key === 'timeRange') {
            params["startDate"] = this.searchParams[key][0];
            params["endDate"] = this.searchParams[key][1];
          } else if (key === 'materialCatIds') {
            let curCatId = this.searchParams[key];
            if (curCatId.length > 0) {
              params['materialCatId'] = curCatId[curCatId.length - 1];
            } else {
              params['materialCatId'] = null;
            }
          } else {
            params[key] = value;
          }
        }
      }
      console.log(`params`, params);
      that.$store.dispatch('infolist/getBaseInfoDataWithParams', {
        axios: that.$axios,
        main: that,
        param: params,
      });
    },
    createNewMaterial() {
      var param = {
        spuCode: '',
        isNew: true,
      };
      this.$store.commit('infolist/list-cur-info', param);
      this.$router.push({ path:'/material/infomodify'})
    }
  },
  computed: {
    // 物料分类选项
    catOptions() {
      return this.$store.getters['baseinfo/catOptions'];
    },
  }
}
</script>
