<template>
  <!-- 物料计划类属性卡片 -->
  <el-card>
    <el-form :model="params" ref="params" label-width="150px" label-position="left" :rules="rules" status-icon>
      <!-- 第一行 -->
      <el-row :gutter="20">
        <!--是否独立需求-->
        <el-col :span="12">
          <el-form-item label="是否独立需求：">
            <el-switch
              class="combine-selector"
              v-model="params.isIndependenceNeed"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">是否独立需求：</div>
              <el-switch
                class="combine-selector"
                v-model="params.isIndependenceNeed"
                active-text="是"
                inactive-text="否">
              </el-switch>
            </div>
          </div> -->
        </el-col>
        <!--订货提前期-->
        <el-col :span="12">
          <el-form-item label="订货提前期（天）：" prop="orderLeadTime">
            <el-input class="combine-selector" v-model="params.orderLeadTime" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">订货提前期（天）：</div>
              <el-input class="combine-selector" v-model="params.orderLeadTime" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20">
        <!--补货政策-->
        <el-col :span="12">
          <el-form-item label="补货政策：">
            <el-select class="combine-selector" v-model="params.replenishPolicy" placeholder="请选择">
              <el-option
                v-for="item in options.replenichPolicyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">补货政策：</div>
              <el-select class="combine-selector" v-model="params.replenishPolicy" placeholder="请选择">
                <el-option
                  v-for="item in options.replenichPolicyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
        <!--补货周期-->
        <el-col :span="12">
          <el-form-item label="补货周期（天）：" prop="replenishCycle">
            <el-input class="combine-selector" v-model="params.replenishCycle" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">补货周期（天）：</div>
              <el-input class="combine-selector" v-model="params.replenishCycle" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row :gutter="20">
        <!--最大库存量-->
        <el-col :span="12">
          <el-form-item label="最大库存量：" prop="maxInventory">
            <el-input class="combine-selector" v-model="maxInventory" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">最大库存量：</div>
              <el-input class="combine-selector" v-model="maxInventory" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--安全库存量-->
        <el-col :span="12">
          <el-form-item label="安全库存量：" prop="safeInventory">
            <el-input class="combine-selector" v-model="safeInventory" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">安全库存量：</div>
              <el-input class="combine-selector" v-model="safeInventory" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第四行 -->
      <el-row :gutter="20">
        <!--订货批量-->
        <el-col :span="12">
          <el-form-item label="订货批量：">
            <el-input class="combine-selector" v-model="orderQuantity" :disabled="true" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">订货批量：</div>
              <el-input class="combine-selector" v-model="orderQuantity" :disabled="true" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--批量政策-->
        <el-col :span="12">
          <el-form-item label="批量政策：">
            <el-select class="combine-selector" v-model="params.batchPolicy" placeholder="请选择">
              <el-option
                v-for="item in options.batchPolicyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">批量政策：</div>
              <el-select class="combine-selector" v-model="params.batchPolicy" placeholder="请选择">
                <el-option
                  v-for="item in options.batchPolicyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第五行 -->
      <el-row :gutter="20">
        <!--批量周期-->
        <el-col :span="12">
          <el-form-item label="批量周期（天）：" prop="batchCycle">
            <el-input class="combine-selector" v-model="params.batchCycle" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">批量周期（天）：</div>
              <el-input class="combine-selector" v-model="params.batchCycle" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--默认计划单位-->
        <el-col :span="12">
          <el-form-item label="默认计划单位：">
            <el-input class="combine-selector" v-model="params.defaultPlanUnit" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认计划单位：</div>
              <el-input class="combine-selector" v-model="params.defaultPlanUnit" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
    </el-form>
    

  </el-card>
</template>

<style lang="less" scoped>
.combine-selector {
  width: 100%;
}
// .input-combine {
//   display: flex;
//   align-items: center;

//   .content-font {
//     font-family: "PingFang SC";
//     text-align: left;
//     font-size: 14px;
//     margin: 5px;
//     min-width: 130px;
//     overflow: hidden;
//   }

//   .combine-selector {
//     width: 100%;
//   }
// }

.single-button {
  font-family: "PingFang SC";
  text-align: center;
  font-size: 18px;
  margin: 5px;
  min-width: 90px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<script>
export default {
  name: "MaterialPlanPropCard",
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
      // 部分计划属性需要的选项
      options: {
        // 补货政策选项
        replenichPolicyOptions: [
          {
            label: '按订货点补货',
            value: '0',
          },
          {
            label: '按需求补货',
            value: '1',
          }
        ],
        // 批量政策选项
        batchPolicyOptions: [
          {
            label: '直接批量法',
            value: '0',
          },
          {
            label: '固定批量法',
            value: '1',
          },
          {
            label: '固定周期法',
            value: '2',
          },
          {
            label: '最大批量法',
            value: '3',
          },
          {
            label: '最小批量法',
            value: '4',
          },
          {
            label: '倍数批量法',
            value: '5',
          },
          {
            label: '经济批量法',
            value: '6',
          },
        ],
      },
      // 表单的规则
      rules: {
        orderLeadTime: [
          { required: true, message: '请输入订货提前期', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        replenishCycle: [
          { required: true, message: '请输入补货周期', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        maxInventory: [
          { required: true, message: '请输入最大库存量', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        safeInventory: [
          { required: true, message: '请输入安全库存量', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        batchCycle: [
          { required: true, message: '请输入批量周期', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
      },
    }
  },
  computed: {
    params: {
      get() {
        return this.$store.getters['planprop/planInfos'];
      },
      set(value) {
        this.$store.commit('planprop/plans', value);
      }
    },
    // // 是否独立需求
    // isIndependenceNeed: {
    //   get() {
    //     return this.$store.getters['planprop/isIndependenceNeed'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/is-indep-need', value);
    //   }
    // },
    // // 订货提前期
    // orderLeadTime: {
    //   get() {
    //     return this.$store.getters['planprop/orderLeadTime'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/order-lead-time', value);
    //   }
    // },
    // // 补货政策
    // replenishPolicy: {
    //   get() {
    //     return this.$store.getters['planprop/replenishPolicy'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/repl-policy', value);
    //   }
    // },
    // // 补货周期
    // replenishCycle: {
    //   get() {
    //     return this.$store.getters['planprop/replenishCycle'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/repl-cycle', value);
    //   }
    // },
    // 最大库存量
    maxInventory: {
      get() {
        return this.$store.getters['planprop/maxInventory'];
      },
      set(value) {
        this.$store.dispatch('planprop/updateOrderQuantity', {
          url: 'max-inv',
          value: value,
        });
      }
    },
    // 安全库存量
    safeInventory: {
      get() {
        return this.$store.getters['planprop/safeInventory'];
      },
      set(value) {
        this.$store.dispatch('planprop/updateOrderQuantity', {
          url: 'safe-inv',
          value: value,
        });
      }
    },
    // 订货批量 = 最大库存量 - 安全库存量
    orderQuantity: {
      get() {
        return this.$store.getters['planprop/orderQuantity'];
      },
    },
    // // 批量政策
    // batchPolicy: {
    //   get() {
    //     return this.$store.getters['planprop/batchPolicy'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/batch-policy', value);
    //   }
    // },
    // // 批量周期
    // batchCycle: {
    //   get() {
    //     return this.$store.getters['planprop/batchCycle'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/batch-cycle', value);
    //   }
    // },
    // // 默认计划单位
    // defaultPlanUnit: {
    //   get() {
    //     return this.$store.getters['planprop/defaultPlanUnit'];
    //   },
    //   set(value) {
    //     this.$store.commit('planprop/default-plan-unit', value);
    //   }
    // },
  },
};
</script>
