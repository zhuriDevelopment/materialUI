<template>
<!-- 物料财务信息卡 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="100">
      <!--财务类别-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >财务类别:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row :gutter="100">
      <!--财务类别-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >记账本位币:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 会计科目 -->
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >会计科目:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 增值税代码 -->
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >增值税代码:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 存货计价方法 -->
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >存货计价方法:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 成本计算方法 -->
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >成本计算方法:</div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 开票类型 -->
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              开票类型:
            </div>
            <el-select  class="combine-selector" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card{
    .input-combine{
      display: flex;

      .content-font{
        font-family:"PingFang SC";
        text-align: left;
        font-size: 18px;
        margin: 5px;
        min-width: 90px;
        overflow: hidden;
      }

      .combine-selector{
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
    name:"MaterialFinanceCard",
  }
</script>
