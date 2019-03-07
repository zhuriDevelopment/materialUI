<template>
  <!-- 物料销售类属性卡片 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!-- 销售计划价格 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售计划价格：</div>
            <el-input class="combine-selector" v-model="planPrice" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!-- 计价货币 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">计价货币：</div>
            <el-select class="combine-selector" v-model="currency" placeholder="请选择">
              <el-option
                v-for="item in options.currencyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <!-- 是否售价控制 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否售价控制：</div>
            <el-switch
              class="combine-selector"
              v-model="isPriceCtr"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
      <!-- 销售价格策略 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售价格策略：</div>
            <el-input class="combine-selector" v-model="priceStrategy" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row :gutter="20">
      <!--售价下限率-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">售价下限率：</div>
            <el-input class="combine-selector" v-model="priceLowerLimitRate" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--销售成本科目-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售成本科目：</div>
            <el-input class="combine-selector" v-model="costSubject" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第四行 -->
    <el-row :gutter="20">
      <!--默认客户-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认客户：</div>
            <el-input class="combine-selector" v-model="defaultClient" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--销售地-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售地：</div>
            <el-input class="combine-selector" v-model="location" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第五行 -->
    <el-row :gutter="20">
      <!--默认业务员-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认业务员：</div>
            <el-input class="combine-selector" v-model="defaultSalesman" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认销售单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认销售单位：</div>
            <el-select class="combine-selector" v-model="defaultUnit" placeholder="请选择">
              <el-option
                v-for="item in options.defaultUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  min-width: 900px;

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
  .single-button {
    font-family: "PingFang SC";
    text-align: center;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
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
  name: "MaterialSalePropCard",
  data() {
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
      }
    }
  },
  computed: {
    // 销售计划价格
    planPrice: {
      get() {
        return this.$store.getters['salesprop/planPrice'];
      },
      set(value) {
        this.$store.commit('salesprop/plan-price', value);
      }
    },
    // 计价货币
    currency: {
      get() {
        return this.$store.getters['salesprop/currency'];
      },
      set(value) {
        this.$store.commit('salesprop/currency', value);
      }
    },
    // 是否售价控制
    isPriceCtr: {
      get() {
        return this.$store.getters['salesprop/isPriceCtr'];
      },
      set(value) {
        this.$store.commit('salesprop/is-price-ctr', value);
      }
    },
    // 销售价格策略
    priceStrategy: {
      get() {
        return this.$store.getters['salesprop/priceStrategy'];
      },
      set(value) {
        this.$store.commit('salesprop/price-stra', value);
      }
    },
    // 售价下限率
    priceLowerLimitRate: {
      get() {
        return this.$store.getters['salesprop/priceLowerLimitRate'];
      },
      set(value) {
        this.$store.commit('salesprop/pri-lower-limit-rate', value);
      }
    },
    // 销售成本科目
    costSubject: {
      get() {
        return this.$store.getters['salesprop/costSubject'];
      },
      set(value) {
        this.$store.commit('salesprop/cost-sub', value);
      }
    },
    // 默认客户
    defaultClient: {
      get() {
        return this.$store.getters['salesprop/defaultClient'];
      },
      set(value) {
        this.$store.commit('salesprop/default-client', value);
      }
    },
    // 销售地
    location: {
      get() {
        return this.$store.getters['salesprop/location'];
      },
      set(value) {
        this.$store.commit('salesprop/location', value);
      }
    },
    // 默认业务员
    defaultSalesman: {
      get() {
        return this.$store.getters['salesprop/defaultSalesman'];
      },
      set(value) {
        this.$store.commit('salesprop/default-salesman', value);
      }
    },
    // 默认销售单位
    defaultUnit: {
      get() {
        return this.$store.getters['salesprop/defaultUnit'];
      },
      set(value) {
        this.$store.commit('salesprop/default-unit', value);
      }
    },
  }
};
</script>
