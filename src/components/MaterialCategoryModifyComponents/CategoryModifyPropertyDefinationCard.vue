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
            :data="matDefs"
            highlight-current-row
            style="width: 100%"
          >
            <template slot="empty">
              还没有数据，是否需要<el-button type="text" @click="handleAdd">添加</el-button>一下？
            </template>
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
                <el-input placeholder="请输入内容" v-model="scope.row.label"></el-input>
              </template>
            </el-table-column>
            <el-table-column property="name" label="属性名" min-width="150">true
              <template slot-scope="scope">
                <el-input placeholder="请输入内容" v-model="scope.row.name"></el-input>
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
                  <el-input placeholder="请输入最小值" v-model="scope.row.valueRange.min"></el-input>
                  <span style="margin-left: 10px; margin-right: 10px;">到</span>
                  <el-input placeholder="请输入最大值" v-model="scope.row.valueRange.max"></el-input>
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
                <el-button type="text" icon="el-icon-sort-up" @click="handleSortUp(scope.row)"></el-button>
                <el-button type="text" icon="el-icon-sort-down" @click="handleSortDown(scope.row)"></el-button>
              </template>
            </el-table-column>
            <el-table-column fixed="right" width="150" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleAdd">添加</el-button>
                <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
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
export default {
  name: "CategoryModifyPropertyDefinationCard",
  data() {
    return {
      // 表格用到的选项
      options: {
        // 属性类别选项
        typeOptions: [
          {
            label: '关键属性',
            value: 1,
          },
          {
            label: '非关键属性',
            value: 2,
          },
          {
            label: '批号属性',
            value: 3,
          },
          {
            label: '规格属性',
            value: 4,
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
    // 处理表格添加的函数
    handleAdd () {
      var that = this;
      var emptyElement = {
        type: 1,
        label: '样例标签',
        name: '样例名字',
        valueRangeType: 0,
        // 取值范围
        valueRange: '',
        // 排序号
        sort: 0,
      };
      var newArray = that.matDefs;
      emptyElement.sort = newArray.length;
      newArray.push(emptyElement);
      that.matDefs = Object.assign([], newArray);
    },
    // 处理表格删除的函数
    handleDelete (row) {
      var that = this;
      // 根据sort来处理删除
      var newArray = [];
      for (let element in that.matDefs) {
        if (that.matDefs[element].sort !== row.sort) {
          newArray.push(that.matDefs[element]);
        }
      }
      that.matDefs = Object.assign([], newArray);
    },
    // 处理sort上升的函数
    handleSortUp (row) {
      var that = this;
      var newArray = Object.assign([], that.matDefs);
      var curIndex = row.sort;
      if (curIndex > 0 && newArray.length > 1) {
        // 不是第一行
        var tmp = Object.assign({}, newArray[curIndex]);
        newArray[curIndex] = newArray[curIndex - 1];
        newArray[curIndex - 1] = tmp;
        newArray[curIndex].sort = curIndex;
        newArray[curIndex - 1].sort = curIndex - 1;
        that.matDefs = Object.assign([], newArray);
      }
    },
    // 处理sort下降的函数
    handleSortDown (row) {
      var that = this;
      var newArray = Object.assign([], that.matDefs);
      var curIndex = row.sort;
      if (curIndex < newArray.length - 1 && newArray.length > 1) {
        // 不是最后一行
        var tmp = Object.assign({}, newArray[curIndex]);
        newArray[curIndex] = newArray[curIndex + 1];
        newArray[curIndex + 1] = tmp;
        newArray[curIndex].sort = curIndex;
        newArray[curIndex + 1].sort = curIndex + 1;
        that.matDefs = Object.assign([], newArray);
      }
    },
  },
  mounted() {},
  computed: {
    matDefs: {
      get() {
        var that = this;
        return that.$store.getters['categorymodify/basePropList'];
      },
      set(value) {
        var that = this;
        that.$store.commit('categorymodify/cat-base-prop', value);
      }
    }
  }
};
</script>
