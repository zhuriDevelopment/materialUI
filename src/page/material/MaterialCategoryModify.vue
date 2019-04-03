<template>
  <div class="body">
    <!-- 总布局 -->
    <el-row :gutter="20" class="row-outest">
      <!-- 导航栏总布局 -->
      <el-col class="col-outest" :span="4">
        <!-- 导航栏操作按钮栏 -->
        <el-row :gutter="0" class="navi-operation">
          <el-tooltip content="添加" placement="top">
            <el-button type="primary" circle icon="el-icon-circle-plus-outline" :disabled="buttonFunc" @click="handleAdd"></el-button>
          </el-tooltip>
          <el-tooltip content="删除" placement="top">
            <el-button type="danger" circle icon="el-icon-delete" :disabled="buttonFunc" @click="handleDelete"></el-button>
          </el-tooltip>
        </el-row>

        <!-- 树形导航栏 -->
        <el-row :gutter="0" class="navigation-tree">
          <CategoryModifyNaviTree class="el-menu-navi-tree"></CategoryModifyNaviTree>
        </el-row>
      </el-col>

      <!-- 信息栏总布局 -->
      <el-col class="col-outest" :span="20">
        <!-- 基本信息卡 -->
        <el-row :gutter="0" class="baseinfo-card">
          <CategoryModifyBasicInfoCard></CategoryModifyBasicInfoCard>
        </el-row>

        <!-- 分类详细信息卡 -->
        <el-row :gutter="0" class="classification-detail-card">
          <CategoryModifyDetailInfoCard></CategoryModifyDetailInfoCard>
        </el-row>
      </el-col>
    </el-row>

    <el-dialog title="新增物料分类" :visible.sync="dialogVisible" modal-append-to-body append-to-body>
      <el-form :model="newType" ref="newType" label-width="120px" label-position="left" :rules="rules" status-icon>
        <el-form-item label="物料分类编码" prop="code">
          <el-input v-model="newType.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="物料分类名称" prop="name">
          <el-input v-model="newType.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="物料分类类别" prop="type">
          <el-select v-model="newType.type" placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="createNewCategory">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<style lang="less" scoped>
.body {
  height: 800px;
  margin-left: 20px;
  margin-right: 10px;
  .row-outest {
    height: 100%;
    .col-outest {
      height: 100%;
      min-height: 36px;

      /* 导航操作栏样式 */
      .navi-operation {
        display: flex;
        align-items: center;
        // width: 100%;
        height: 8%;
        overflow: hidden;
        background: #c2c1c1;
        justify-content: space-around;
      }

      /* 树形导航栏样式 */
      .navigation-tree {
        // width: 100%;
        // height: 80%;
        //background: #c59a9d;

        .el-menu-navi-tree {
          width: 100%;
        }
      }

      /* 基本信息卡 */
      .baseInfo-card {
        // width: 100%;
        height: 100%;
        min-height: 100px;
        //background: #0bc52a
      }

      /* 分类详细信息卡 */
      .classification-detail-card {
        // width: 100%;
        min-height: 400px;
        top: 8px;
        //background: #83079c
      }
    }
  }
}
</style>

<script>
/* 导入子部件 */
import CategoryModifyNaviTree from "@/components/MaterialCategoryModifyComponents/CategoryModifyNaviTree";
import CategoryModifyBasicInfoCard from "@/components/MaterialCategoryModifyComponents/CategoryModifyBasicInfoCard";
import CategoryModifyDetailInfoCard from "@/components/MaterialCategoryModifyComponents/CategoryModifyDetailInfoCard";
import CommonApis from "@/api/commonApis";
import CtrPropFunc from "@/api/ctrprop";

export default {
  name: "MaterialCategoryModify",
  components: {
    CategoryModifyNaviTree,
    CategoryModifyBasicInfoCard,
    CategoryModifyDetailInfoCard
  },
  data() {
    return {
      dialogVisible: false,
      // 新增物料分类信息
      newType: {
        code: '',
        name: '',
        type: 0,
      },
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
      // 表单的规则
      rules: {
        code: [
          { required: true, message: '请输入物料分类编码', trigger: 'change' },
        ],
        name: [
          { required: true, message: '请输入物料分类名称', trigger: 'change' },
        ],
        type: [
          { required: true, message: '请选择物料类别', trigger: 'change' },
        ],
      },
    }
  },
  computed: {
    buttonFunc: {
      get() {
        return this.$store.getters['categorymodify/hasClickedTree'];
      },
      set(value) {
        this.$store.commit('categorymodify/cat-clicked-tree', value);
      }
    }
  },
  mounted() {
    this.$store.dispatch('clearAllInfoInType');
    this.buttonFunc = true;
  },
  methods: {
    handleAdd () {
      this.dialogVisible = true;
    },
    refreshCatTree () {
      var that = this;
      var url = `${window.$config.HOST}/materialmanagement/getMaterialCategory`;
      that.$store.dispatch("categorymodify/getCatTree", {
        url: url,
        axios: that.$axios,
        type: "cat-tree",
        main: that
      });
    },
    handleDelete () {
      var that = this;
      var catInfo = that.$store.getters['categorymodify/catInfo'];
      var params = {
        id: catInfo.id,
        name: catInfo.name,
        code: catInfo.code,
        parentId: catInfo.parentId,
      };
      that.$axios
        .post(`${window.$config.HOST}/materialmanagement/deleteMaterialCategory`, params)
        .then(response => {
          let status = response.data;
          var msg = '删除成功！';
          var failed = false;
          if (status === -1) {
            msg = '删除物料分类信息请求不合法！';
            failed = true;
          } else if (status === 0) {
            msg = '删除物料分类信息失败！';
            failed = true;
          } else if (status === -2) {
            msg = "待删除的物料分类信息在数据库中有重复！";
            failed = true;
          } else if (status === -3) {
            msg = "待删除的物料分类信息在数据库中不存在！";
            failed = true;
          }
          that.$message({
            message: msg,
            showClose: true,
            type: failed === false ? 'success' : 'error',
          });
          that.refreshCatTree();
        })
        .catch(error => {
          CommonApis.handleError(error, that, '在删除物料分类的过程中发生错误，错误为：');
          that.refreshCatTree();
        })
    },
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
          that.refreshCatTree();
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
    // 对于新加的分类，新增一套控制信息
    addNewCtrPropWithNewType () {
      var that = this;
      var submitRes = {};
      var catInfo = that.$store.getters['categorymodify/catInfo'];
      submitRes["id"] = catInfo.id;
      submitRes["catCode"] = that.newType.code;
      submitRes["catName"] = that.newType.name;
      submitRes["type"] = that.newType.type;
      submitRes["ctrProps"] = [];
      var purchaseAndStoreInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['purandstoreprop/defaultPurchaseAndStoreInfos'],
        5);
      submitRes["ctrProps"].push(purchaseAndStoreInfos);
      var planInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['planprop/defaultPlanInfos'],
        6);
      submitRes["ctrProps"].push(planInfos);
      var salesInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['salesprop/defaultSalesInfos'],
        7);
      submitRes["ctrProps"].push(salesInfos);
      var qualifyInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['qualityprop/defaultQualifyInfos'],
        8);
      submitRes["ctrProps"].push(qualifyInfos);
      var financeInfos = CtrPropFunc.collectCtrPropsWithType(
        that.$store.getters['financeprop/defaultFinanceInfos'],
        9);
      submitRes["ctrProps"].push(financeInfos);
      that.submitResult(submitRes);
    },
    createNewCategory () {
      var that = this;
      that.$refs["newType"].validate((valid) => {
        if (valid) {
          var param = {
            code: that.newType.code,
            name: that.newType.name,
            type: that.newType.type,
            parentId: that.$store.getters['categorymodify/catInfo'].id,
          };
          that.$axios
            .post(`${window.$config.HOST}/materialmanagement/addMaterialCategory`, param)
            .then(response => {
              var respCode = response.data;
              var msg = '新增成功！';
              var failed = false;
              if (respCode === -2) {
                msg = '物料分类当前已有编码相同的记录！';
                failed = true;
              } else if (respCode === -3) {
                msg = '父物料分类信息不存在！';
                failed = true;
              } else if (respCode === -4) {
                msg = '物料分类当前已有名称相同的记录！';
                failed = true;
              } else if (respCode === 0) {
                msg = '新增失败！';
                failed = true;
              }
              // 只有当成功了之后才进行新增控制信息
              if (failed === false) {
                that.addNewCtrPropWithNewType();
              } else {
                that.$message({
                  message: msg,
                  showClose: true,
                  type: failed === false ? 'success' : 'error',
                });
              }
              that.dialogVisible = false;
            })
            .catch(error => {
              CommonApis.handleError(error, that, '在创建新物料分类的过程中发生错误，错误为：');
              that.refreshCatTree();
            })
        } else {
          that.$message.error("请输入正确的参数！");
          return false;
        }
      });
    },
  }
};
</script>
