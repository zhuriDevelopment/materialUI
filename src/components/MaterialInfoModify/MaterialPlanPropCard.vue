<template>
<!-- 物料计划类属性卡片 -->
  <el-card>
    <!-- 第一行 -->
    <el-row :gutter="100">
      <!--是否独立需求-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              是否独立需求：
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
      <!--订货提前期-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              订货提前期(天)：
            </div>
            <el-input v-model="input" placeholder="请输入内容" >
            </el-input>
          </div>
        </div>
      </el-col>
      <!--补货政策-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              补货政策：
            </div>
            <el-select class="combine-selector" v-model="value" placeholder="请选择">
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
      <!--补货周期-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              补货周期(天)：
            </div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row :gutter="100">
      <!--最大库存量-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              最大库存量：
            </div>
            <el-input v-model="input" placeholder="请输入内容" >
            </el-input>
          </div>
          <div class="input-combine">
            <div class="content-font" >

            </div>
            <el-input v-model="input" placeholder="请输入内容" >

            </el-input>
          </div>
        </div>
      </el-col>
      <!--安全库存量-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              安全库存量：
              </div>
            <el-input v-model="input" placeholder="请输入内容" >

            </el-input>
          </div>
        </div>
      </el-col>
      <!--订货批量-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              订货批量：
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
      <!--批量政策-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              批量政策：
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

    <!-- 第三行 -->
    <el-row :gutter="100">
      <!--批量周期-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              批量周期(天)：
            </div>
            <el-input v-model="input" placeholder="请输入内容" >

            </el-input>
          </div>
        </div>
      </el-col>
      <!--默认计划单位-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >
              默认计划单位：
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
  .input-combine{
    display: flex;

    .content-font{
      font-family:"PingFang SC";
      text-align: left;
      font-size: 18px;
      margin: 5px;
      min-width: 140px;
      overflow: hidden;
    }

    .combine-selector{
      width: 100%;
    }
  }

  .single-button{
    font-family:"PingFang SC";
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
    name:"MaterialPlanPropCard",
  }
</script>
