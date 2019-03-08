<template>
  <!-- 物料销售类属性卡片 -->
  <el-card class="box-card">
    <el-form :model="params" ref="params" label-width="120px" label-position="left" :rules="rules" status-icon>
      <!-- 第一行 -->
      <el-row :gutter="20">
        <!-- 销售计划价格 -->
        <el-col :span="12">
          <el-form-item label="销售计划价格：" prop="planPrice">
            <el-input class="combine-selector" v-model="params.planPrice" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">销售计划价格：</div>
              <el-input class="combine-selector" v-model="params.planPrice" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!-- 计价货币 -->
        <el-col :span="12">
          <el-form-item label="计价货币：">
            <el-select class="combine-selector" v-model="params.currency" placeholder="请选择">
              <el-option
                v-for="item in options.currencyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">计价货币：</div>
              <el-select class="combine-selector" v-model="params.currency" placeholder="请选择">
                <el-option
                  v-for="item in options.currencyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20">
        <!-- 是否售价控制 -->
        <el-col :span="12">
          <el-form-item label="是否售价控制：">
            <el-switch
              class="combine-selector"
              v-model="params.isPriceCtr"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">是否售价控制：</div>
              <el-switch
                class="combine-selector"
                v-model="params.isPriceCtr"
                active-text="是"
                inactive-text="否">
              </el-switch>
            </div>
          </div> -->
        </el-col>
        <!-- 销售价格策略 -->
        <el-col :span="12">
          <el-form-item label="销售价格策略：">
            <el-input class="combine-selector" v-model="params.priceStrategy" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">销售价格策略：</div>
              <el-input class="combine-selector" v-model="params.priceStrategy" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row :gutter="20">
        <!--售价下限率-->
        <el-col :span="12">
          <el-form-item label="销价下限率：" prop="priceLowerLimitRate">
            <el-input class="combine-selector" v-model="params.priceLowerLimitRate" placeholder="请输入内容">
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">售价下限率：</div>
              <el-input class="combine-selector" v-model="params.priceLowerLimitRate" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--销售成本科目-->
        <el-col :span="12">
          <el-form-item label="销售成本科目：">
            <el-input class="combine-selector" v-model="params.costSubject" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">销售成本科目：</div>
              <el-input class="combine-selector" v-model="params.costSubject" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第四行 -->
      <el-row :gutter="20">
        <!--默认客户-->
        <el-col :span="12">
          <el-form-item label="默认客户：">
            <el-input class="combine-selector" v-model="params.defaultClient" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认客户：</div>
              <el-input class="combine-selector" v-model="params.defaultClient" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--销售地-->
        <el-col :span="12">
          <el-form-item label="销售地：">
            <el-input class="combine-selector" v-model="params.location" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">销售地：</div>
              <el-input class="combine-selector" v-model="params.location" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第五行 -->
      <el-row :gutter="20">
        <!--默认业务员-->
        <el-col :span="12">
          <el-form-item label="默认业务员：">
            <el-input class="combine-selector" v-model="params.defaultSalesman" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认业务员：</div>
              <el-input class="combine-selector" v-model="params.defaultSalesman" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--默认销售单位-->
        <el-col :span="12">
          <el-form-item label="默认销售单位：">
            <el-select class="combine-selector" v-model="params.defaultUnit" placeholder="请选择">
              <el-option
                v-for="item in options.defaultUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认销售单位：</div>
              <el-select class="combine-selector" v-model="params.defaultUnit" placeholder="请选择">
                <el-option
                  v-for="item in options.defaultUnitOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
      </el-row>
    </el-form>


  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  min-width: 900px;
  .combine-selector {
    width: 100%;
  }

  .single-button {
    font-family: "PingFang SC";
    text-align: center;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
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
  name: "MaterialSalePropCard",
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
      // 部分销售属性需要的选项
      options: {
        // 计价货币选项
        currencyOptions: [
          {
            label: '人民币',
            value: '0',
          },
          {
            label: '美元',
            value: '1',
          }
        ],
        // 默认销售单位选项
        defaultUnitOptions: [
          {
            label: '米',
            value: '0',
          },
          {
            label: '匹',
            value: '1',
          },
          {
            label: '箱',
            value: '2',
          }
        ]
      },
      // 表单的规则
      rules: {
        planPrice: [
          { required: true, message: '请输入销售计划价格', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        priceLowerLimitRate: [
          { required: true, message: '请输入售价下限率', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
      },
    }
  },
  computed: {
    params: {
      get() {
        return this.$store.getters['salesprop/salesInfos'];
      },
      set(value) {
        this.$store.commit('salesprop/sales', value);
      }
    }
    // // 销售计划价格
    // planPrice: {
    //   get() {
    //     return this.$store.getters['salesprop/planPrice'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/plan-price', value);
    //   }
    // },
    // // 计价货币
    // currency: {
    //   get() {
    //     return this.$store.getters['salesprop/currency'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/currency', value);
    //   }
    // },
    // // 是否售价控制
    // isPriceCtr: {
    //   get() {
    //     return this.$store.getters['salesprop/isPriceCtr'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/is-price-ctr', value);
    //   }
    // },
    // // 销售价格策略
    // priceStrategy: {
    //   get() {
    //     return this.$store.getters['salesprop/priceStrategy'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/price-stra', value);
    //   }
    // },
    // // 售价下限率
    // priceLowerLimitRate: {
    //   get() {
    //     return this.$store.getters['salesprop/priceLowerLimitRate'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/pri-lower-limit-rate', value);
    //   }
    // },
    // // 销售成本科目
    // costSubject: {
    //   get() {
    //     return this.$store.getters['salesprop/costSubject'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/cost-sub', value);
    //   }
    // },
    // // 默认客户
    // defaultClient: {
    //   get() {
    //     return this.$store.getters['salesprop/defaultClient'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/default-client', value);
    //   }
    // },
    // // 销售地
    // location: {
    //   get() {
    //     return this.$store.getters['salesprop/location'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/location', value);
    //   }
    // },
    // // 默认业务员
    // defaultSalesman: {
    //   get() {
    //     return this.$store.getters['salesprop/defaultSalesman'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/default-salesman', value);
    //   }
    // },
    // // 默认销售单位
    // defaultUnit: {
    //   get() {
    //     return this.$store.getters['salesprop/defaultUnit'];
    //   },
    //   set(value) {
    //     this.$store.commit('salesprop/default-unit', value);
    //   }
    // },
  }
};
</script>
