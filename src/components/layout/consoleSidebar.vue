<style lang="less">
.console-sidebar {
  .el-submenu__title {
    font-size: 12px;
    height: 46px;
    line-height: 46px;
  }
  .el-submenu {
    background: #37424f;
    border-bottom: 1px solid #414d5c;
  }
  .el-submenu__icon-arrow {
    right: 40px;
    margin-top: -4px;
  }
  .el-icon-message {
    font-size: 12px;
  }
  .el-menu-item {
    font-size: 12px;
    height: 42px;
    line-height: 42px;
    &.is-active {
      border-right: none;
      color: #fff;
      background: #0099cc !important;
      &:hover {
        background: #0099cc !important;
      }
    }
  }
}
</style>
<style scoped lang="less">
.console-sidebar {
  position: fixed;
  top: 50px;
  bottom: 0px;
  background-color: #293038;
  z-index: 102;
  overflow-x: hidden;
  overflow-y: auto;
  height: auto;
  width: 180px;
  .sidebar-content {
    width: 200px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #293038;
    .sidebar-fold {
      height: 30px;
      width: 140px;
      background: #394555;
      color: #aeb9c2;
      text-align: left;
      padding: 0 20px;
      line-height: 30px !important;
      user-select: none;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
    }
  }
}
</style>
<template>
  <div class="console-sidebar">
    <el-menu
      :unique-opened='true'
      :router='true'
      :default-active="defaultActive"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="sidebar-content">
      <div class="sidebar-fold">版本1.0.0</div>
      <el-menu-item index="/quick">
        <i class="el-icon-message"></i>
        快速入门
      </el-menu-item>
      <el-submenu index="material">
        <template slot="title">
          <i class="el-icon-message"></i>
          基本信息
        </template>
        <el-menu-item index="/material/infolist"><i class="el-icon-document"></i>物料信息列表</el-menu-item>
        <!-- <el-menu-item index="/material/infomodify"><i class="el-icon-document"></i>物料信息修改</el-menu-item> -->
        <el-menu-item index="/material/categorymodify"><i class="el-icon-document"></i>物料分类信息修改</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    components: {
    },
    computed: {
      defaultActive: function() {
        const that = this;
        return (
          (that.$route.meta && that.$route.meta.activePath) || this.$route.path
        );
      }
    }
  };
</script>
