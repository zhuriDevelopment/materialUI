<template>
  <!-- 物料计划类属性卡片 -->
  <el-card>
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!--是否独立需求-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否独立需求：</div>
            <el-switch
              class="combine-selector"
              v-model="params.isIndependenceNeed"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
      <!--订货提前期-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">订货提前期（天）：</div>
            <el-input class="combine-selector" v-model="params.orderLeadTime" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <!--补货政策-->
      <el-col :span="12">
        <div class="grid-content">
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
        </div>
      </el-col>
      <!--补货周期-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">补货周期（天）：</div>
            <el-input class="combine-selector" v-model="params.replenishCycle" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row :gutter="20">
      <!--最大库存量-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">最大库存量：</div>
            <el-input class="combine-selector" v-model="params.maxInventory" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--安全库存量-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">安全库存量：</div>
            <el-input class="combine-selector" v-model="params.safeInventory" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第四行 -->
    <el-row :gutter="20">
      <!--订货批量-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">订货批量：</div>
            <el-input class="combine-selector" v-model="params.orderQuantity" :disabled="true" placeholder="请输入内容"></el-input>
          </div>
          </div>
        </div>
      </el-col>
      <!--批量政策-->
      <el-col :span="12">
        <div class="grid-content">
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
        </div>
      </el-col>
    </el-row>
    <!-- 第五行 -->
    <el-row :gutter="20">
      <!--批量周期-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">批量周期（天）：</div>
            <el-input class="combine-selector" v-model="params.batchCycle" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认计划单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认计划单位：</div>
            <el-input class="combine-selector" v-model="params.defaultPlanUnit" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>

  </el-card>
</template>

<style lang="less" scoped>
.input-combine {
  display: flex;
  align-items: center;

  .content-font {
    font-family: "PingFang SC";
    text-align: left;
    font-size: 14px;
    margin: 5px;
    min-width: 130px;
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
</style>

<script>
export default {
  name: "MaterialPlanPropCard",
  data() {
    return {
      // 销售属性数据
      params: {
        // 是否独立需求
        isIndependenceNeed: true,
        // 订货提前期
        orderLeadTime: '100',
        // 补货政策
        replenishPolicy: '0',
        // 补货周期
        replenishCycle: '10',
        // 最大库存量
        maxInventory: '20',
        // 安全库存量
        safeInventory: '20',
        // 订货批量 = 最大库存量 - 安全库存量
        orderQuantity: '0',
        // 批量政策
        batchPolicy: '0',
        // 批量周期
        batchCycle: '20',
        // 默认计划单位
        defaultPlanUnit: '天',
      },
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
    }
  },
  methods: {
    getMaxInventory () {
      const that = this;
      var maxInventory = that.params.maxInventory;
      if (maxInventory == null || maxInventory === '') {
        maxInventory = 0;
      }
      return maxInventory;
    },
    getSafeInventory () {
      const that = this;
      var safeInventory = that.params.safeInventory;
      if (safeInventory == null || safeInventory === '') {
        safeInventory = 0;
      }
      return safeInventory;
    }
  },
  watch: {
    'params.maxInventory': {
      handler (newValue, oldValue) {
        const that = this;
        var maxInventory = that.getMaxInventory();
        var safeInventory = that.getSafeInventory();
        that.params.orderQuantity = (maxInventory - safeInventory).toString();
      },
      immediate: true,
    },
    'params.safeInventory': {
      handler (newValue, oldValue) {
        const that = this;
        var maxInventory = that.getMaxInventory();
        var safeInventory = that.getSafeInventory();
        that.params.orderQuantity = (maxInventory - safeInventory).toString();
      },
      immediate: true,
    },
  }
};
</script>
