<template>
  <!-- 物料基础信息卡片 -->
  <el-card class="box-card">
    <el-form :model="baseInfos" ref="baseInfos" label-width="100px" label-position="left" :rules="rulesBaseInfo" status-icon>
      <!-- 第一行 -->
      <el-row :gutter="10">
        <!--SPU编号输入-->
        <el-col :span="8">
          <el-form-item label="SPU编号：" prop="spuCode">
            <el-input v-model="baseInfos.spuCode" class="combine-selector" placeholder="请输入内容" :disabled="!isNew"></el-input>
          </el-form-item>
        </el-col>

        <!--SPU名称输入-->
        <el-col :span="8">
          <el-form-item label="SPU名称：" prop="spuName">
            <el-input v-model="baseInfos.spuName" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>

        <!--SPU物料类型选择-->
        <el-col :span="8">
          <el-form-item label="物料类型：">
            <el-select class="combine-selector" v-model="baseInfos.type" placeholder="请选择">
              <el-option
                v-for="item in options.typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row :gutter="10">
        <!-- 物料分类选择 -->
        <el-col :span="8">
          <el-form-item label="物料分类：" prop="materialCatId">
            <el-select class="combine-selector" v-model="baseInfos.materialCatId" placeholder="请选择">
              <el-option
                v-for="item in catOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 来源选择 -->
        <!-- <el-col :span="8">
          <el-form-item label="来源：">
            <el-input v-model="baseInfos.source" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col> -->
        <!-- 用途输入 -->
        <el-col :span="8">
          <el-form-item label="用途：">
            <el-input v-model="baseInfos.usage" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 第三行 -->
      <el-row :gutter="10">
        <!-- 设计图号输入 -->
        <el-col :span="8">
          <el-form-item label="设计图号：">
            <el-input v-model="baseInfos.designCode" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <!-- 设计版次输入 -->
        <el-col :span="8">
          <el-form-item label="设计版次：">
            <el-input v-model="baseInfos.designVersion" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <!-- 助记码输入 -->
        <el-col :span="8">
          <el-form-item label="助记码：">
            <el-input v-model="baseInfos.mnemonic" class="combine-selector" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 第四行 -->
      <el-row :gutter="10">
        <!-- 物料描述输入 -->
        <el-col :span="24">
          <el-form-item label="物料描述：">
            <el-input class="combine-selector" v-model="baseInfos.description" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 第五行 -->
      <el-row :gutter="10">
        <!-- 备注输入 -->
        <el-col :span="24">
          <el-form-item label="备注：">
            <el-input
              class="combine-selector"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="baseInfos.note"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!--分割线-->
    <hr>

    <el-form :model="units" ref="units" label-width="120px" label-position="left" :rules="rulesUnits" style="margin-top: 20px">

      <el-row :gutter="10">
        <!-- 默认计量单位选择 -->
        <el-col :span="8">
          <el-form-item label="默认计量单位：" prop="defaultUnitId">
            <el-select class="combine-selector" v-model="units.defaultUnitId" placeholder="请选择">
              <el-option
                v-for="item in unitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

        </el-col>
      </el-row>

      <!-- 辅助计量单位表 -->
      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item label="辅助计量单位：">
            <el-table
              border
              :data="units.unitLists"
              highlight-current-row
              style="width: 100%"
              stripe
            >
              <el-table-column type="index" label="序号" width="70"></el-table-column>
              <el-table-column prop="unitId" label="计量单位" min-width="150">
                <template slot-scope="scope">
                  <el-select class="combine-selector" v-model="scope.row.unitId" placeholder="请选择">
                    <el-option
                      v-for="item in unitOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column property="conversionFactor" label="换算系数" min-width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.conversionFactor" class="combine-selector" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column property="sort" label="排序号" width="150">
                <template style="display:flex;">
                  <el-button type="text" icon="el-icon-sort-up"></el-button>
                  <el-button type="text" icon="el-icon-sort-down"></el-button>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <div slot-scope="scope">
                  <el-button @click="handleAdd" type="text" size="small">添加</el-button>
                  <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                </div>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>

      </el-row>
    </el-form>

  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  min-width: 950px;
  .combine-selector {
    width: 100%;
  }

  .single-button {
    font-family: "PingFang SC";
    text-align: center;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .switch-button {
    font-size: 18px;
    min-width: 90px;
    align-content: center;
    margin: 5px;
  }
}
</style>

<script>
import CommonApi from "@/api/commonApis";
export default {
  name: "MaterialBaseInfoCard",
  data() {
    return {
      // 物料基本信息规则
      rulesBaseInfo: {
        spuCode: [
          { required: true, message: '请输入spu编码', trigger: 'change' }
        ],
        spuName: [
          { required: true, message: '请输入spu名称', trigger: 'change' }
        ],
        materialCatId: [
          { required: true, message: '请选择物料分类', trigger: 'blur' }
        ]
      },
      // 计量单位规则
      rulesUnits: {
        defaultUnitId: [
          { required: true, message: '请选择默认计量单位', trigger: 'blur' }
        ]
      },
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
      },
    };
  },
  computed: {
    // 物料分类选项
    catOptions() {
      return this.$store.getters['baseinfo/catOptions'];
    },
    // 计量单位选项
    unitOptions() {
      return this.$store.getters['baseinfo/unitOptions'];
    },
    baseInfos: {
      get() {
        return this.$store.getters['baseinfo/baseInfos'];
      },
      set(value) {
        this.$store.commit('baseinfo/baseInfos');
      }
    },
    units: {
      get() {
        return this.$store.getters['unit/units'];
      },
      set(value) {
        this.$store.commit('unit/unit-info');
      }
    },
    isNew() {
      console.log(`get isNew!`);
      return this.$store.getters['infolist/curBaseInfo'].isNew;
    }
  },
  methods: {
    handleAdd() {
      var unitLists = Object.assign([], this.$store.getters['unit/unitLists']);
      var param = {
        unitId: 1,
        conversionFactor: 0,
        sort: unitLists.length + 1,
      }
      unitLists.push(param);
      this.$store.commit('unit/unit-arr', unitLists);
    },
    handleDelete(row) {
      var unitLists = Object.assign([], this.$store.getters['unit/unitLists']);
      var targetList = [];
      for (let idx in unitLists) {
        if (unitLists[idx]["sort"] != row.sort) {
          targetList.push(unitLists[idx]);
        }
      }
      let i = 1;
      for (let idx in targetList) {
        targetList[idx]["sort"] = i;
        i++;
      }
      this.$store.commit('unit/unit-arr', targetList);
    },
  }
};
</script>
