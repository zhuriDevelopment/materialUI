<template>
  <!-- 物料财务信息卡 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!-- 财务类别 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">财务类别：</div>
            <el-select class="combine-selector" v-model="params.typeId" placeholder="请选择">
              <el-option
                v-for="item in options.typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!-- 记账本位币 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">记账本位币：</div>
            <el-input class="combine-selector" v-model="params.recordCurrency" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <!-- 会计科目 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">会计科目：</div>
            <el-input class="combine-selector" v-model="params.accountName" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!-- 增值税代码 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">增值税代码：</div>
            <el-input class="combine-selector" v-model="params.vatCode" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row :gutter="20">
      <!-- 存货计价方法 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">存货计价方法：</div>
            <el-select class="combine-selector" v-model="params.invCostMethod" placeholder="请选择">
              <el-option
                v-for="item in options.invCostMethodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!-- 成本计算方法 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">成本计算方法：</div>
            <el-select class="combine-selector" v-model="params.costingMethod" placeholder="请选择">
              <el-option
                v-for="item in options.costingMethodOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第四行 -->
    <el-row :gutter="20">
      <!-- 开票类型 -->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">开票类型：</div>
            <el-select class="combine-selector" v-model="params.billingType" placeholder="请选择">
              <el-option
                v-for="item in options.billingTypeOptions"
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
  name: "MaterialFinanceCard",
  data() {
    return {
      // 财务属性数据
      params: {
        // 财务类别
        typeId: 0,
        // 记账本位币
        recordCurrency: '人民币',
        // 会计科目
        accountName: '资产类',
        // 增值税代码
        vatCode: '1001',
        // 存货计价方法
        invCostMethod: 0,
        // 成本计算方法
        costingMethod: 0,
        // 开票类型
        billingType: 0,
      },
      // 部分财务属性需要的选项
      options: {
        // 财务类别选项
        typeOptions: [
          {
            label: '私有类别',
            value: 0,
          },
          {
            label: '共有类别',
            value: 1,
          }
        ],
        // 存货计价方法选项
        invCostMethodOptions: [
          {
            label: '先进先出法',
            value: 0,
          },
          {
            label: '月末一次加权平均法',
            value: 1,
          },
          {
            label: '个别计价法',
            value: 2,
          },
          {
            label: '移动加权平均法',
            value: 3,
          },
        ],
        // 成本计算方法选项
        costingMethodOptions: [
          {
            label: '分步法',
            value: 0,
          },
          {
            label: '分类法',
            value: 1,
          },
          {
            label: '分批法',
            value: 2,
          },
          {
            label: '品种法',
            value: 3,
          },
          {
            label: '​ABC成本法',
            value: 4,
          },
        ],
        // 开票类型选项
        billingTypeOptions: [
          {
            label: '增值税专用发票',
            value: 0,
          },
          {
            label: '普通发票',
            value: 1,
          },
          {
            label: '专业发票',
            value: 2,
          },
        ]
      },
    }
  },
};
</script>
