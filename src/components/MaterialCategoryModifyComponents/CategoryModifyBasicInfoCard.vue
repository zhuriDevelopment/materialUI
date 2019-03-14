<template>
  <!-- 基本信息导航栏卡片 -->
  <el-card class="box-card">
    <el-row :gutter="10">
      <el-col :span="21">
        <el-row :gutter="10">
          <!-- 第一列 -->
          <el-col :span="12">
            <!-- 文字+输入框的组合 -->
            <div class="bar">
              <div class="title">分类编码：</div>
              <el-input v-model="params.code" class="barSelector" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
          <!-- 第二列 -->
          <el-col :span="12">
            <div class="bar">
              <div class="title">分类名称：</div>
              <el-input v-model="params.name" class="barSelector" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 15px;" :gutter="10">
          <!-- 第三列 -->
          <el-col :span="12">
            <div class="bar">
              <div class="title">物料类别：</div>
              <el-select class="barSelector" v-model="params.type" placeholder="请选择">
                <el-option
                  v-for="item in options.typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="3">
        <!-- 保存按钮 -->
        <div class="buttonSpan">
          <el-button type="primary" class="buttons" @click="saveCurrentTab">保存当前</el-button>
          <el-button type="success" class="buttons" @click="saveAllTab">保存所有</el-button>
        </div>

      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title {
      font-size: 14px;
      min-width: 70px;
      overflow: hidden;
      text-align: center;
      margin: 5px;
    }
    .barSelector {
      width: 100%;
    }
  }
  .buttonSpan {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .buttons {
      margin-left: 10px;
      margin-bottom: 10px;
      width: 100%;
    }
  }
}
</style>

<script>
import CategoryModify from "@/api/MaterialCategoryModifyAPIs/categorymodify";
import CtrPropFunc from "@/api/ctrprop";
export default {
  name: "CategoryModifyBasicInfoCard",
  data() {
    return {
      options: {
        // 物料类别选项
        typeOptions: [
          {
            label: '无类别',
            value: 0,
          },
          {
            label: '原材料',
            value: 1,
          },
          {
            label: '半成品',
            value: 2,
          },
          {
            label: '成品',
            value: 3,
          },
          {
            label: '设备',
            value: 4,
          },
        ],
      }
    }
  },
  computed: {
    params: {
      get() {
        var that = this;
        return that.$store.getters['categorymodify/catInfo'];
      },
      set(value) {
        var that = this;
        that.$store.commit('categorymodify/cat-info', value);
      }
    }
  },
  methods: {
    // 提交函数
    submitResult (submitRes) {
      var that = this;
      console.log(`submitRes`, submitRes);
      that.$axios
        .put(`${window.$config.HOST}/materialmanagement/updateMaterialInfoWithCatCodeAndCatName`, submitRes)
        .then(response => {
          console.log(`response`, response);
          let fail = false;
          let msg = '更新成功！';
          if (response.data.errCode === -1) {
            fail = true;
            msg = "不存在对应物料分类信息！";
          } else {
            if (response.data.errCodeInBaseProp === 0) {
              fail = true;
              msg = "更新基本属性出错！";
            } else if (response.data.errCodeInCtrProp === 0) {
              fail = true;
              msg = "更新控制属性出错！";
            }
          }
          that.$message({
            showClose: true,
            message: msg,
            type: fail === false ? 'success' : 'error',
          });
        })
        .catch(error => {
          console.log(`error`, error);
        })
    },
    checkData(flag) {
      var that = this;
      var curTab = that.$store.getters['categorymodify/curTab'];
      if (flag === 'all' || (flag === 'cur' && curTab === 'basePropDefs')) {
        var basePropList = that.$store.getters['categorymodify/basePropList'];
        console.log(`basePropList`, basePropList);
        if (basePropList.length > 0) {
          for (let idx in basePropList) {
            let curBaseProp = Object.assign({}, basePropList[idx]);
            console.log(`idx`, curBaseProp);
            if (curBaseProp['valueRangeType'] === 1) {
              let reg = /^[0-9]*$/;
              let minStr = reg.test(curBaseProp['valueRange']['min']);
              let maxStr = reg.test(curBaseProp['valueRange']['max']);
              console.log(minStr, maxStr);
              if (minStr !== true || maxStr !== true) {
                that.$message({
                  message: '最大最小值框中只允许数字！',
                  type: 'error',
                  showClose: true,
                });
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    // 保存当前
    saveCurrentTab () {
      var that = this;
      if (!that.checkData('cur')) return;
      var submitRes = {};
      // 添加基本信息
      var catInfo = that.$store.getters['categorymodify/catInfo'];
      submitRes["id"] = catInfo.id;
      submitRes["catCode"] = catInfo.code;
      submitRes["catName"] = catInfo.name;
      submitRes["type"] = catInfo.type;
      console.log(`catInfo`, catInfo);
      // 获取目前的tab名以确定该提交那个选项卡的数据
      var curTab = that.$store.getters['categorymodify/curTab'];
      if (curTab !== 'basePropDefs') {
        submitRes["ctrProps"] = [];
      }
      switch (curTab) {
        // 物料属性定义
        case 'basePropDefs':
          var basePropList = that.$store.getters['categorymodify/basePropList'];
          basePropList = CategoryModify.collectBaseInfos(basePropList);
          // console.log(`basePropList`, basePropList);
          submitRes["baseProps"] = basePropList;
          break;
        // 采购和库存属性
        case 'purchaseAndStore':
          var purchaseAndStoreInfos = CtrPropFunc.collectCtrPropsWithType(
            that.$store.getters['purandstoreprop/purchaseAndStoreInfos'],
            5);
          // console.log(`purchaseAndStoreInfos`, purchaseAndStoreInfos);
          submitRes["ctrProps"].push(purchaseAndStoreInfos);
          break;
        // 计划属性
        case 'plan':
          var planInfos = CtrPropFunc.collectCtrPropsWithType(
            that.$store.getters['planprop/planInfos'],
            6);
          // console.log(`planInfos`, planInfos);
          submitRes["ctrProps"].push(planInfos);
          break;
        // 销售属性
        case 'sales':
          var salesInfos = CtrPropFunc.collectCtrPropsWithType(
            that.$store.getters['salesprop/salesInfos'],
            7);
          // console.log(`salesInfos`, salesInfos);
          submitRes["ctrProps"].push(salesInfos);
          break;
        // 质量属性
        case 'quality':
          var qualifyInfos = CtrPropFunc.collectCtrPropsWithType(
            that.$store.getters['qualityprop/qualifyInfos'],
            8);
          // console.log(`qualifyInfos`, qualifyInfos);
          submitRes["ctrProps"].push(qualifyInfos);
          break;
        // 财务属性
        case 'finance':
          var financeInfos = CtrPropFunc.collectCtrPropsWithType(
            that.$store.getters['financeprop/financeInfos'],
            9);
          // console.log(`financeInfos`, financeInfos);
          submitRes["ctrProps"].push(financeInfos);
          break;
        default:
          break;
      }
      that.submitResult(submitRes);
    },
    // 保存所有
    saveAllTab () {
      var that = this;
      if (!that.checkData('all')) return;
      var submitRes = {};
      // 添加基本信息
      var catInfo = that.$store.getters['categorymodify/catInfo'];
      submitRes["id"] = catInfo.id;
      submitRes["catCode"] = catInfo.code;
      submitRes["catName"] = catInfo.name;
      submitRes["type"] = catInfo.type;
      console.log(`catInfo`, catInfo);
      submitRes["ctrProps"] = [];
      var basePropList = that.$store.getters['categorymodify/basePropList'];
      basePropList = CategoryModify.collectBaseInfos(basePropList);
      // 逐个tab数据收集
      console.log(`basePropList`, basePropList);
      submitRes["baseProps"] = basePropList;
      var purchaseAndStoreInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['purandstoreprop/purchaseAndStoreInfos'],
        5);
      console.log(`purchaseAndStoreInfos`, purchaseAndStoreInfos);
      submitRes["ctrProps"].push(purchaseAndStoreInfos);
      var planInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['planprop/planInfos'],
        6);
      console.log(`planInfos`, planInfos);
      submitRes["ctrProps"].push(planInfos);
      var salesInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['salesprop/salesInfos'],
        7);
      console.log(`salesInfos`, salesInfos);
      submitRes["ctrProps"].push(salesInfos);
      var qualifyInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['qualityprop/qualifyInfos'],
        8);
      console.log(`qualifyInfos`, qualifyInfos);
      submitRes["ctrProps"].push(qualifyInfos);
      var financeInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['financeprop/financeInfos'],
        9);
      console.log(`financeInfos`, financeInfos);
      submitRes["ctrProps"].push(financeInfos);
      that.submitResult(submitRes);
    },
  },
};
</script>
