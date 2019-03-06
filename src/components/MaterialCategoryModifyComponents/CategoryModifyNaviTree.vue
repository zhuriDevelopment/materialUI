<template>
  <!-- 类型修改中侧边导航栏 -->
  <el-tree
    :data="catTree"
    :props="defaultProps"
    @node-click="handleNodeClick"
    class="navi-tree"
    default-expand-all
  ></el-tree>
</template>

<style lang="less" scoped>
.navi-tree {
  font-size: 100px;
}
</style>


<script>
  import categoryTree from '@/api/MaterialCategoryModifyAPIs/categoryTree';
  export default {
    name:"CategoryModifyNaviTree",
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    mounted() {
      var that = this;
      var url = `${window.$config.HOST}/materialmanagement/getMaterialCategory`;
      that.$store.dispatch('categorymodify/getCatTree', {
        url: url,
        axios: that.$axios,
        type: 'cat-tree',
        main: that,
      });
    },
    computed: {
      catTree: {
        get() {
          var that = this;
          return that.$store.getters['categorymodify/categoryTree'];
        },
        set(value) {
          var that = this;
          that.$store.commit('categorymodify/cat-tree', value);
        }
      }
    },
  }
</script>
