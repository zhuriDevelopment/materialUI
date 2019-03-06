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
            style="width: 100%"
          >
            <!-- 各列 -->
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column property="type" label="属性类别" min-width="150">
              <template slot-scope="scope">
                <el-select class="combine-selector" v-model="scope.row.type" placeholder="请选择">
                  <el-option
                    v-for="item in options.typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column property="label" label="属性标签" min-width="150">true
              <template slot-scope="scope">
                <el-input placeholder="请输入内容" v-model="scope.label"></el-input>
              </template>
            </el-table-column>
            <el-table-column property="name" label="属性名" min-width="150">true
              <template slot-scope="scope">
                <el-input placeholder="请输入内容" v-model="scope.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column property="valueRangeType" label="取值范围类型" min-width="150">true
              <template slot-scope="scope">
                <el-select class="combine-selector" v-model="scope.row.valueRangeType" placeholder="请选择" @change="handleSelectChange(scope)">
                  <el-option
                    v-for="item in options.valueRangeTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column property="valueRange" label="取值范围" min-width="300">true
              <template slot-scope="scope">
                <div v-if="scope.row.valueRangeType == 1" style="display: flex; justify-content: space-between; align-items: center">
                  <el-input placeholder="请输入最大值" v-model="scope.row.valueRange.max"></el-input>
                  <span style="margin-left: 10px; margin-right: 10px;">到</span>
                  <el-input placeholder="请输入最小值" v-model="scope.row.valueRange.min"></el-input>
                </div>
                <div v-if="scope.row.valueRangeType == 2">
                  <el-input placeholder="请输入可选范围，以逗号分割，中英文均可" v-model="scope.row.valueRange"></el-input>
                </div>
                <div v-if="scope.row.valueRangeType == 3">
                  <el-input placeholder="请输入可选范围，以逗号分割，中英文均可" v-model="scope.row.valueRange"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="sort" label="排序号" min-width="90">
              <template slot-scope="scope">
                <el-button type="text" icon="el-icon-sort-up"></el-button>
                <el-button type="text" icon="el-icon-sort-down"></el-button>
              </template>
            </el-table-column>
            <el-table-column fixed="right" width="150" label="操作">
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
.box-card {
  min-width: 500px;
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .combine-selector {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "CategoryModifyPropertyDefinationCard",
  data() {
    return {
      /*
        表格数据
        其中valueRangeType与valueRange包装成一个json提交
        类似：
        valueRange: {
          type: '${type}',
          content: '${content}',
        }
        type对应valueRangeType，content对应valueRange
        采用JSON.stringfy进行提交
        需要对valueRange是单选和多选的情况进行分割。
        从数据库中解析同理。
      */
      tableData: [
        {
          // 属性类别
          type: 1,
          // 属性标签
          label: '标签一',
          // 属性名
          name: '属性一',
          // 取值范围类型
          valueRangeType: 1,
          // 取值范围
          valueRange: {
            min: 10,
            max: 20,
          },
          // 排序号
          sort: 0,
        },
        {
          type: 1,
          label: '标签一',
          name: '属性一',
          valueRangeType: 2,
          valueRange: '',
          sort: 1,
        },
        {
          type: 1,
          label: '标签一',
          name: '属性一',
          valueRangeType: 3,
          valueRange: '',
          sort: 2,
        },
      ],
      // 表格用到的选项
      options: {
        // 属性类别选项
        typeOptions: [
          {
            label: '关键属性',
            value: 0,
          },
          {
            label: '非关键属性',
            value: 1,
          },
          {
            label: '批号属性',
            value: 2,
          },
          {
            label: '规格属性',
            value: 3,
          },
        ],
        // 取值范围类型选项
        valueRangeTypeOptions: [
          {
            label: '任意文本',
            value: 0,
          },
          {
            label: '最大最小值',
            value: 1,
          },
          {
            label: '指定范围单选',
            value: 2,
          },
          {
            label: '指定范围多选',
            value: 3,
          },
        ],

      },
      currentRow: null,
      input: "",
      value3: true
    };
  },
  methods: {
    // 监视表格select变化的函数
    handleSelectChange(selection) {
      if (selection.row.valueRangeType == 1) {
        selection.row.valueRange = {
          min: 0,
          max: 0,
        };
      } else {
        selection.row.valueRange = '';
      }
    },
  },
  mounted() {},
};
</script>
