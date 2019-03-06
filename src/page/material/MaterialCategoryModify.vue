<template>
  <div class="body">
    <!-- 总布局 -->
    <el-row :gutter="20" class="row-outest">
      <!-- 导航栏总布局 -->
      <el-col class="col-outest" :span="4">
        <!-- 导航栏操作按钮栏 -->
        <el-row :gutter="0" class="navi-operation">
          <el-tooltip content="添加" placement="top">
            <el-button type="primary" circle icon="el-icon-circle-plus-outline"></el-button>
          </el-tooltip>
          <el-tooltip content="删除" placement="top">
            <el-button type="danger" circle icon="el-icon-delete"></el-button>
          </el-tooltip>
        </el-row>

        <!-- 树形导航栏 -->
        <el-row :gutter="0" class="navigation-tree">
          <CategoryModifyNaviTree class="el-menu-navi-tree"></CategoryModifyNaviTree>
        </el-row>
      </el-col>

      <!-- 信息栏总布局 -->
      <el-col class="col-outest" :span="20">
        <!-- 基本信息卡 -->
        <el-row :gutter="0" class="baseinfo-card">
          <CategoryModifyBasicInfoCard></CategoryModifyBasicInfoCard>
        </el-row>

        <!-- 分类详细信息卡 -->
        <el-row :gutter="0" class="classification-detail-card">
          <CategoryModifyDetailInfoCard></CategoryModifyDetailInfoCard>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="less" scoped>
.body {
  height: 800px;

  .row-outest {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    .col-outest {
      height: 100%;
      min-height: 36px;

      /* 导航操作栏样式 */
      .navi-operation {
        display: flex;
        align-items: center;
        width: 100%;
        height: 8%;
        overflow: hidden;
        background: #c2c1c1;
        justify-content: space-around;
      }

      /* 树形导航栏样式 */
      .navigation-tree {
        width: 100%;
        height: 80%;
        //background: #c59a9d;

        .el-menu-navi-tree {
          width: 100%;
        }
      }

      /* 基本信息卡 */
      .baseInfo-card {
        width: 100%;
        height: 100%;
        min-height: 100px;
        //background: #0bc52a
      }

      /* 分类详细信息卡 */
      .classification-detail-card {
        width: 100%;
        min-height: 400px;
        top: 8px;
        //background: #83079c
      }
    }
  }
}
</style>

<script>
/* 导入子部件 */
import CategoryModifyNaviTree from "@/components/MaterialCategoryModifyComponents/CategoryModifyNaviTree";
import CategoryModifyBasicInfoCard from "@/components/MaterialCategoryModifyComponents/CategoryModifyBasicInfoCard";
import CategoryModifyDetailInfoCard from "@/components/MaterialCategoryModifyComponents/CategoryModifyDetailInfoCard";

export default {
  name: "MaterialCategoryModify",

  components: {
    CategoryModifyNaviTree,
    CategoryModifyBasicInfoCard,
    CategoryModifyDetailInfoCard
  }
};
</script>
