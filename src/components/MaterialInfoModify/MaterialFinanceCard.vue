<template>
  <!-- 物料财务信息卡 -->
  <el-card class="box-card">
    <el-form :model="params" ref="params" label-width="110px" label-position="left" :rules="rules" status-icon>
      <!-- 第一行 -->
      <el-row :gutter="20">
        <!-- 财务类别 -->
        <el-col :span="12">
          <el-form-item label="财务类别：">
            <el-select class="combine-selector" v-model="params.typeId" placeholder="请选择">
                <el-option
                  v-for="item in options.typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
          </el-form-item>
        </el-col>
        <!-- 记账本位币 -->
        <el-col :span="12">
          <el-form-item label="记账本位币：" prop="recordCurrency">
            <el-input class="combine-selector" v-model="params.recordCurrency" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20">
        <!-- 会计科目 -->
        <el-col :span="12">
          <el-form-item label="会计科目：" prop="accountName">
            <el-input class="combine-selector" v-model="params.accountName" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <!-- 增值税代码 -->
        <el-col :span="12">
          <el-form-item label="增值税代码：" prop="vatCode">
            <el-input class="combine-selector" v-model="params.vatCode" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row :gutter="20">
        <!-- 存货计价方法 -->
        <el-col :span="12">
          <el-form-item label="存货计价方法：">
            <el-select class="combine-selector" v-model="params.invCostMethod" placeholder="请选择">
              <el-option
                v-for="item in options.invCostMethodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 成本计算方法 -->
        <el-col :span="12">
          <el-form-item label="成本计算方法：">
            <el-select class="combine-selector" v-model="params.costingMethod" placeholder="请选择">
              <el-option
                v-for="item in options.costingMethodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第四行 -->
      <el-row :gutter="20">
        <!-- 开票类型 -->
        <el-col :span="12">
          <el-form-item label="开票类型：">
            <el-select class="combine-selector" v-model="params.billingType" placeholder="请选择">
              <el-option
                v-for="item in options.billingTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  .combine-selector {
    width: 100%;
  }
  .input-combine {
    display: flex;
    align-items: center;

    .content-font {
      font-family: "PingFang SC";
      text-align: left;
      font-size: 14px;
      margin: 5px;
      min-width: 100px;
      overflow: hidden;
    }

    .combine-selector {
      width: 100%;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
<script>
export default {
  name: "MaterialFinanceCard",
  data() {
    let validNumber = (rule, value, callback) => {
      let reg = /^[0-9]*$/;
      if (!reg.test(value)) {
        callback(new Error('此空必须输入数字！'));
      }else{
        callback();
      }
    };
    return {
      // 部分财务属性需要的选项
      options: {
        // 财务类别选项
        typeOptions: [
          {
            label: '私有类别',
            value: '0',
          },
          {
            label: '共有类别',
            value: '1',
          }
        ],
        // 存货计价方法选项
        invCostMethodOptions: [
          {
            label: '先进先出法',
            value: '0',
          },
          {
            label: '月末一次加权平均法',
            value: '1',
          },
          {
            label: '个别计价法',
            value: '2',
          },
          {
            label: '移动加权平均法',
            value: '3',
          },
        ],
        // 成本计算方法选项
        costingMethodOptions: [
          {
            label: '分步法',
            value: '0',
          },
          {
            label: '分类法',
            value: '1',
          },
          {
            label: '分批法',
            value: '2',
          },
          {
            label: '品种法',
            value: '3',
          },
          {
            label: '​ABC成本法',
            value: '4',
          },
        ],
        // 开票类型选项
        billingTypeOptions: [
          {
            label: '增值税专用发票',
            value: '0',
          },
          {
            label: '普通发票',
            value: '1',
          },
          {
            label: '专业发票',
            value: '2',
          },
        ]
      },
      // 表单的规则
      rules: {
        recordCurrency: [
          { required: true, message: '请输入记账本位币', trigger: 'change' }
        ],
        accountName: [
          { required: true, message: '请输入会计科目', trigger: 'change' }
        ],
        vatCode: [
          { required: true, message: '请输入增值税代码', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ]
      },
    }
  },
  computed: {
    params: {
      get() {
        return this.$store.getters['financeprop/financeInfos'];
      },
      set(value) {
        this.$store.commit('financeprop/finance', value);
      }
    }
  }
  // computed: {
  //   // 财务类别
  //   typeId: {
  //     get() {
  //       return this.$store.getters['financeprop/typeId'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/type-id', value);
  //     }
  //   },
  //   // 记账本位币
  //   recordCurrency: {
  //     get() {
  //       return this.$store.getters['financeprop/recordCurrency'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/record-cur', value);
  //     }
  //   },
  //   // 会计科目
  //   accountName: {
  //     get() {
  //       return this.$store.getters['financeprop/accountName'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/account-name', value);
  //     }
  //   },
  //   // 增值税代码
  //   vatCode: {
  //     get() {
  //       return this.$store.getters['financeprop/vatCode'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/vat-code', value);
  //     }
  //   },
  //   // 存货计价方法
  //   invCostMethod: {
  //     get() {
  //       return this.$store.getters['financeprop/invCostMethod'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/inv-cost-method', value);
  //     }
  //   },
  //   // 成本计算方法
  //   costingMethod: {
  //     get() {
  //       return this.$store.getters['financeprop/costingMethod'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/costing-method', value);
  //     }
  //   },
  //   // 开票类型
  //   billingType: {
  //     get() {
  //       return this.$store.getters['financeprop/billingType'];
  //     },
  //     set(value) {
  //       this.$store.commit('financeprop/billing-type', value);
  //     }
  //   },
  // }
};
</script>
