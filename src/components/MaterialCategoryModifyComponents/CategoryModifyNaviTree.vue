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
import CategoryModify from "@/api/MaterialCategoryModifyAPIs/categorymodify";
import CommonApi from "@/api/commonApis";
export default {
  name: "CategoryModifyNaviTree",
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    // 获取物料信息的函数
    getMaterialInfos() {
      var that = this;
      var code = that.$store.getters['categorymodify/catInfo'].code;
      var name = that.$store.getters['categorymodify/catInfo'].name;
      var typeArr = [5, 6, 7, 8, 9, 11];
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getMaterialInfoWithCatCodeAndCatName`,
          {
            params: {
              code: code,
              name: name,
              typeArr: typeArr,
            },
            paramsSerializer: CommonApi.paramsSerializer
          }
        )
        .then(response => {
          console.log(`getMaterialInfos response`, response);
          var responseData = response.data;
          CategoryModify.handleAllInfos(responseData, that.$store);
        })
        .catch(error => {
          CommonApi.handleError(error, that, "在获取所有物料信息的过程中发生错误，错误为：");
        })
    },
    // 树结构节点的单击函数
    handleNodeClick(data, node, self) {
      var that = this;
      this.$store.dispatch('clearAllInfoInType');
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getMaterialCategoryInfosWithId`,
          {
            params: {
              id: data.id,
            },
          }
        )
        .then(response => {
          let catInfo = response.data[0];
          // delete catInfo.parentId;
          that.$store.dispatch('clearAllInfoInType');
          that.$store.commit('categorymodify/cat-info', catInfo);
          that.getMaterialInfos();
          that.$message({
            message: '获取物料分类信息成功！',
            showClose: true,
            type: 'success'
          });
          that.$store.commit('categorymodify/cat-clicked-tree', false);
        })
        .catch(error => {
          CommonApi.handleError(error, that, "在获取物料分类信息的过程中发生错误，错误为：");
        });
    }
  },
  mounted() {
    var that = this;
    var url = `${window.$config.HOST}/materialmanagement/getMaterialCategory`;
    that.$store.dispatch("categorymodify/getCatTree", {
      url: url,
      axios: that.$axios,
      type: "cat-tree",
      main: that
    });
  },
  computed: {
    catTree: {
      get() {
        var that = this;
        return that.$store.getters["categorymodify/categoryTree"];
      },
      set(value) {
        var that = this;
        that.$store.commit("categorymodify/cat-tree", value);
      }
    }
  }
};
</script>
