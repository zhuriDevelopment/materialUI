<template>
  <!-- 搜索信息展示栏卡 -->
  <el-card class="box-card">
  <!-- 取消选择按钮 -->
    <div style="margin-bottom: 20px">
      <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deleteSelection()">删除所选</el-button>
    </div>

    <!-- 信息展示的表格 -->
    <!-- //? :row-class-name="tableRowClassName" -->
    <el-table
      border
      ref="multipleTable"
      :data="baseInfoData"
      tooltip-effect="dark"
      style="width: 100%">

      <!-- 各列 -->
      <el-table-column
        type="selection"
        width="55"
        fixed>
      </el-table-column>

      <el-table-column
        prop="spuCode"
        label="SPU编码"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="spuName"
        label="SPU名称"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="materialCat"
        label="物料分类"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designCode"
        label="设计图号"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designVersion"
        label="设计版本"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="source"
        label="来源"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="defaultUnit"
        label="默认计量单位"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="description"
        label="描述"
        min-width="240">
      </el-table-column>

      <el-table-column
        prop="note"
        label="备注"
        min-width="240">
      </el-table-column>

      <el-table-column
        label="操作"
        min-width="150"
        show-overflow-tooltip
        fixed="right">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small">查看</el-button> -->
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    margin-left: 20px;
  }
</style>

<script>
  import CommonApi from '@/api/commonApis';
  export default {
    name:"MaterialInfoSearchDisplayCard",
    data(){
      return {
      }
    },
    computed: {
      baseInfoData() {
        return this.$store.getters['infolist/baseInfoData'];
      }
    },
    methods: {
      /* 取消选择按钮的响应函数 */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleEdit(row) {
        var param = {
          spuCode: row.spuCode,
          isNew: false,
        };
        this.$store.commit('infolist/list-cur-info', param);
        this.$router.push({ path:'/material/infomodify'})
      },
      handleDelete(row) {
        var that = this;
        console.log(`row = `, row);
        that.$axios
          .delete(`${window.$config.HOST}/materialmanagement/deleteInfoBySpuCode`, {
            params: {
              spuCode: row.spuCode,
            },
          })
          .then(response => {
            console.log(`response`, response);
            let fail = false;
            let msg = '更新成功！';
            if (response.data !== 1) {
              fail = true;
              msg = '删除物料信息时出错！';
            }
            if (response.data === 1) {
              that.$store.dispatch('infolist/getAllBaseInfoData', {
                axios: that.$axios,
                main: that,
              });
            }
            that.$message({
              showClose: true,
              message: msg,
              type: fail === false ? 'success' : 'error',
            });
          })
          .catch(error => {
            CommonApi.handleError(error, that, "在删除物料信息的时候发生错误，错误为：");
          });
      },
      deleteSelection(rows) {
        var that = this;
        var rowList = that.$refs.multipleTable.store.states.selection;
        var spuCodeList = [];
        for (let ele in rowList) {
          spuCodeList.push(rowList[ele]['spuCode']);
        }
        console.log(`spuCodeList`, spuCodeList);
        that.$axios
          .delete(`${window.$config.HOST}/materialmanagement/deleteInfoBySpuCodes`, {
            params: {
              spuCodes: spuCodeList,
            },
            paramsSerializer: CommonApi.paramsSerializer
          })
          .then(response => {
            console.log(`response`, response);
            let fail = false;
            let msg = '更新成功！';
            if (response.data !== 1) {
              fail = true;
              msg = '删除物料信息时出错！';
            }
            if (response.data === 1) {
              that.$store.dispatch('infolist/getAllBaseInfoData', {
                axios: that.$axios,
                main: that,
              });
            }
            that.$message({
              showClose: true,
              message: msg,
              type: fail === false ? 'success' : 'error',
            });
          })
          .catch(error => {
            CommonApi.handleError(error, that, "在删除物料信息的时候发生错误，错误为：");
          });
      }
    },
  }
</script>
