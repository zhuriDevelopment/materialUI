<template>
  <!-- 物料采购信息卡 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!--物料置购类型-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">物料制购类型：</div>
            <el-select class="combine-selector" v-model="matPurchaseType" placeholder="请选择">
              <el-option
                v-for="item in options.matPurchaseTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!--ABC分类-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">ABC分类：</div>
            <el-input class="combine-selector" v-model="abcType" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <!--循环盘点编码-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">循环盘点编码：</div>
            <el-input class="combine-selector" v-model="cycleCountCode" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--是否批次管理-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否批次管理：</div>
            <el-switch
              class="combine-selector"
              v-model="isBatchManage"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row :gutter="20">
      <!--是否单件管理-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否单件管理：</div>
            <el-switch
              class="combine-selector"
              v-model="isSingleManage"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
      <!--是否进价控制-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否进价控制：</div>
            <el-switch
              class="combine-selector"
              v-model="isPurchasePriceCtr"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第四行 -->
    <el-row :gutter="20">
      <!--默认供应商-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认供应商：</div>
            <el-input class="combine-selector" v-model="defaultSupplier" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认采购部门-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认采购部门：</div>
            <el-input class="combine-selector" v-model="defaultPurchaseDept" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第五行 -->
    <el-row :gutter="20">
      <!--默认仓库-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认仓库：</div>
            <el-input class="combine-selector" v-model="defaultWarehouse" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认采购单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认采购单位：</div>
            <el-input class="combine-selector" v-model="defaultPurchaseCompany" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第六行 -->
    <el-row :gutter="20">
      <!--默认库存单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认库存单位：</div>
            <el-select class="combine-selector" v-model="defaultStoreUnit" placeholder="请选择">
              <el-option
                v-for="item in options.defaultStoreUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!--默认库位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认库位：</div>
            <el-input class="combine-selector" v-model="defaultStoreLocation" placeholder="请输入内容"></el-input>
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
  name: "MaterialPurchaseAndStorePropCard",
  data() {
    return {
      // 部分采购和库存属性需要的选项
      options: {
        // 物料置购类型选项
        matPurchaseTypeOptions: [
          {
            label: '自制件',
            value: '0',
          },
          {
            label: '采购件',
            value: '1',
          },
        ],
        // 默认库存单位选项
        defaultStoreUnitOptions: [
          {
            label: '米',
            value: '0',
          },
          {
            label: '匹',
            value: '1',
          },
        ]
      },
    }
  },
  computed: {
    // 物料制购类型
    matPurchaseType: {
      get() {
        return this.$store.getters['purandstoreprop/matPurchaseType'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/mat-pur-type', value);
      }
    },
    // ABC分类
    abcType: {
      get() {
        return this.$store.getters['purandstoreprop/abcType'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/abc-type', value);
      }
    },
    // 循环盘点编码
    cycleCountCode: {
      get() {
        return this.$store.getters['purandstoreprop/cycleCountCode'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/cycle-count-code', value);
      }
    },
    // 是否批次管理
    isBatchManage: {
      get() {
        return this.$store.getters['purandstoreprop/isBatchManage'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/is-batch-manage', value);
      }
    },
    // 是否单件管理
    isSingleManage: {
      get() {
        return this.$store.getters['purandstoreprop/isSingleManage'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/is-single-manage', value);
      }
    },
    // 是否进价控制
    isPurchasePriceCtr: {
      get() {
        return this.$store.getters['purandstoreprop/isPurchasePriceCtr'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/is-pur-price-ctr', value);
      }
    },
    // 默认供应商
    defaultSupplier: {
      get() {
        return this.$store.getters['purandstoreprop/defaultSupplier'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-supplier', value);
      }
    },
    // 默认采购部门
    defaultPurchaseDept: {
      get() {
        return this.$store.getters['purandstoreprop/defaultPurchaseDept'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-pur-dept', value);
      }
    },
    // 默认仓库
    defaultWarehouse: {
      get() {
        return this.$store.getters['purandstoreprop/defaultWarehouse'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-warehouse', value);
      }
    },
    // 默认采购单位
    defaultPurchaseCompany: {
      get() {
        return this.$store.getters['purandstoreprop/defaultPurchaseCompany'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-pur-company', value);
      }
    },
    // 默认库存单位
    defaultStoreUnit: {
      get() {
        return this.$store.getters['purandstoreprop/defaultStoreUnit'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-store-unit', value);
      }
    },
    // 默认库位
    defaultStoreLocation: {
      get() {
        return this.$store.getters['purandstoreprop/defaultStoreLocation'];
      },
      set(value) {
        this.$store.commit('purandstoreprop/default-store-location', value);
      }
    },
  },
};
</script>
