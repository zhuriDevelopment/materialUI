<template>
  <div class="body">
    <!-- 总布局 -->
    <el-row :gutter="0" class="row-outest">
      <!-- 导航栏总布局 -->
      <el-col class="col-outest" :span="3">
        <!-- 导航栏操作按钮栏 -->
        <el-row :gutter="0" class="navi-operation">
          <el-button type="primary" class="navi-ope-button">添加</el-button>
          <el-button type="danger" class="navi-ope-button">删除</el-button>
        </el-row>

        <!-- 树形导航栏 -->
        <el-row :gutter="0" class="navigation-tree">
          <TypeModifyNaviTree class="el-menu-navi-tree">
          </TypeModifyNaviTree>
        </el-row>
     </el-col>

      <!-- 信息栏总布局 -->
      <el-col class="col-outest" :span="20">
        <!-- 基本信息卡 -->
        <el-row :gutter="0" class="baseinfo-card">
          <TypeModifyBasicInfoCard >
          </TypeModifyBasicInfoCard>
        </el-row>

        <!-- 分类详细信息卡 -->
        <el-row :gutter="0" class="classification-detail-card">
          <TypeModifyDetailInfoCard>
          </TypeModifyDetailInfoCard>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="less" scoped>
  .body{
    height: 800px;

    .row-outest {
      padding: 10px 0;
      //background-color: #0d0d0e;
      height: 100%;
      .col-outest {
        margin: 5px 5px 5px 20px;
        //background: #d3dce6;
        height: 100%;
        min-height: 36px;

        /* 导航操作栏样式 */
        .navi-operation{
          display: flex;
          align-items: center;
          width: 100%;
          height: 10%;
          overflow: hidden;
          background: #c2c1c1;
          .navi-ope-button{
            width: 35%;
            position: relative;
            left: 15%;
            overflow: hidden;
          }
        }
        /* 树形导航栏样式 */
        .navigation-tree{
          width: 100%;
          height: 80%;
          //background: #c59a9d;

          .el-menu-navi-tree{
            width: 100%;
          }
        }

        /* 基本信息卡 */
        .baseInfo-card{
          width:100%;
          height: 100%;
          min-height: 100px;
          //background: #0bc52a
        }

        /* 分类详细信息卡 */
        .classification-detail-card{
          width:100%;
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
  import TypeModifyNaviTree from '@/components/MaterialTypeModifyComponents/TypeModifyNaviTree';
  import TypeModifyBasicInfoCard from '@/components/MaterialTypeModifyComponents/TypeModifyBasicInfoCard';
  import TypeModifyDetailInfoCard from '@/components/MaterialTypeModifyComponents/TypeModifyDetailInfoCard';

  export default {
    name:"MaterialTypeModify",
    
    components:{
      TypeModifyNaviTree,
      TypeModifyBasicInfoCard,
      TypeModifyDetailInfoCard,
    }
  }
</script>
