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
            <el-input class="combine-selector" v-model="params.planPrice" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!-- 计价货币 -->
      <el-col :span="12">
        <div class="grid-content">
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
              v-model="params.isPriceCtr"
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
            <el-input class="combine-selector" v-model="params.priceStrategy" placeholder="请输入内容"></el-input>
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
            <el-input class="combine-selector" v-model="params.priceLowerLimitRate" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--销售成本科目-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售成本科目：</div>
            <el-input class="combine-selector" v-model="params.costSubject" placeholder="请输入内容"></el-input>
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
            <el-input class="combine-selector" v-model="params.defaultClient" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--销售地-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">销售地：</div>
            <el-input class="combine-selector" v-model="params.location" placeholder="请输入内容"></el-input>
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
            <el-input class="combine-selector" v-model="params.defaultSalesman" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认销售单位-->
      <el-col :span="12">
        <div class="grid-content">
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
      // 销售属性数据
      params: {
        // 销售计划价格
        planPrice: '10',
        // 计价货币
        currency: '0',
        // 是否售价控制
        isPriceCtr: false,
        // 销售价格策略
        priceStrategy: "保守策略",
        // 售价下限率
        priceLowerLimitRate: "25%",
        // 销售成本科目
        costSubject: "科目一",
        // 默认客户
        defaultClient: "波司登",
        // 销售地
        location: "中国",
        // 默认业务员
        defaultSalesman: "张三",
        // 默认销售单位
        defaultUnit: '0',
      },
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
};
</script>
