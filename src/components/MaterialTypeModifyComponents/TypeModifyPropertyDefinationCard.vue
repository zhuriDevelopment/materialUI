<template>
  <el-card class="box-card">
    <!-- 物料属性定义表 -->
    <!-- 一行一列布局 -->
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="grid-content">
          <!-- 表格 -->
          <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">

            <!-- 各列 -->
            <el-table-column
            type="index"
            label="序号"
            width="50">
            </el-table-column>

            <el-table-column
            property="date"
            label="属性类别"
            width="150">
              <template slot-scope="scope">
                <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>

            <el-table-column
            property="name"
            label="属性标识"
            width="150">true
              <template slot-scope="scope">
                <el-input
                placeholder="请输入内容"
                v-model="input1"
                :disabled="false">
                </el-input>
              </template>
            </el-table-column>

            <el-table-column
            property="name"
            label="属性名"
            width="150">true
              <template slot-scope="scope">
                <el-input
                placeholder="请输入内容"
                v-model="input1"
                :disabled="false">
                </el-input>
              </template>
            </el-table-column>

            <el-table-column
            property="name"
            label="取值范围类型"
            width="150">true
              <template slot-scope="scope">
                <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>

            <el-table-column
            property="name"
            label="取值范围"
            width="150">true
              <template slot-scope="scope">
                <el-input
                placeholder="请输入内容"
                v-model="input1"
                :disabled="false">
                </el-input>
              </template>
            </el-table-column>

            <el-table-column
            property="name"
            label="排序号"
            width="150">
              <template slot-scope="scope" style="display:flex;">
                <el-button type="primary" icon="el-icon-sort-up"></el-button>
                <el-button type="primary" icon="el-icon-sort-down"></el-button>
              </template>
            </el-table-column>

            <el-table-column
            fixed="right"
            width="150"
            label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">添加</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card{
     min-width: 500px;

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
      
    .combine-selector{
      width: 100%;
    }
  }
</style>

<script>
  export default {
    name:"TypeModifyPropertyDefinationCard",
    data() {
      return {
        tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
        }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
        }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null,
        input:'',
        value3: true,
      }
    },
  }
</script>
