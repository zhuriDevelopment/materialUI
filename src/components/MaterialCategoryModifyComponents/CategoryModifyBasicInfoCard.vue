<template>
  <!-- 基本信息导航栏卡片 -->
  <el-card class="box-card">
    <el-row :gutter="10">
      <el-col :span="21">
        <el-row :gutter="10">
          <!-- 第一列 -->
          <el-col :span="12">
            <!-- 文字+输入框的组合 -->
            <div class="bar">
              <div class="title">分类编码：</div>
              <el-input v-model="params.code" class="barSelector" placeholder="请输入内容"></el-input>
            </div>
          </el-col>

          <!-- 第二列 -->
          <el-col :span="12">
            <div class="bar">
              <div class="title">分类名称：</div>
              <el-input v-model="params.name" class="barSelector" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 15px;" :gutter="10">
          <!-- 第三列 -->
          <el-col :span="12">
            <div class="bar">
              <div class="title">物料类别：</div>
              <el-select class="barSelector" v-model="params.type" placeholder="请选择">
                <el-option
                  v-for="item in options.typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="3">
        <!-- 保存按钮 -->
        <el-button type="primary" icon="el-icon-plus">保存</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title {
      font-size: 14px;
      min-width: 70px;
      overflow: hidden;
      text-align: center;
      margin: 5px;
    }
    .barSelector {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  name: "CategoryModifyBasicInfoCard",
  data() {
    return {
      options: {
        // 物料类别选项
        typeOptions: [
          {
            label: '无类别',
            value: 0,
          },
          {
            label: '原材料',
            value: 1,
          },
          {
            label: '半成品',
            value: 2,
          },
          {
            label: '成品',
            value: 3,
          },
          {
            label: '设备',
            value: 4,
          },
        ],
      }
    }
  },
  computed: {
    params: {
      get() {
        var that = this;
        return that.$store.getters['categorymodify/catInfo'];
      },
      set(value) {
        var that = this;
        that.$store.commit('categorymodify/cat-info', value);
      }
    }
  }
};
</script>
