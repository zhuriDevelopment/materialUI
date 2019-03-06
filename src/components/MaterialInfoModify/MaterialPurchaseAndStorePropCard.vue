<template>
  <!-- 物料采购信息卡 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!--物料置购类型-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">物料置购类型：</div>
            <el-select class="combine-selector" v-model="params.matPurchaseType" placeholder="请选择">
              <el-option
                v-for="item in options.matPurchaseTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!--ABC分类-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">ABC分类：</div>
            <el-input class="combine-selector" v-model="params.abcType" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <!--循环盘点编码-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">循环盘点编码：</div>
            <el-input class="combine-selector" v-model="params.cycleCountCode" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--是否批次管理-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否批次管理：</div>
            <el-switch
              class="combine-selector"
              v-model="params.isBatchManage"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row :gutter="20">
      <!--是否单件管理-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否单件管理：</div>
            <el-switch
              class="combine-selector"
              v-model="params.isSingleManage"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
      <!--是否进价控制-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">是否进价控制：</div>
            <el-switch
              class="combine-selector"
              v-model="params.isPurchasePriceCtr"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第四行 -->
    <el-row :gutter="20">
      <!--默认供应商-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认供应商：</div>
            <el-input class="combine-selector" v-model="params.defaultSupplier" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认采购部门-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认采购部门：</div>
            <el-input class="combine-selector" v-model="params.defaultPurchaseDept" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第五行 -->
    <el-row :gutter="20">
      <!--默认仓库-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认仓库：</div>
            <el-input class="combine-selector" v-model="params.defaultWarehouse" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <!--默认采购单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认采购单位：</div>
            <el-input class="combine-selector" v-model="params.defaultPurchaseCompany" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第六行 -->
    <el-row :gutter="20">
      <!--默认库存单位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认库存单位：</div>
            <el-select class="combine-selector" v-model="params.defaultStoreUnit" placeholder="请选择">
              <el-option
                v-for="item in options.defaultStoreUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!--默认库位-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font">默认库位：</div>
            <el-input class="combine-selector" v-model="params.defaultStoreLocation" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  min-width: 900px;

  .input-combine {
    display: flex;
    align-items: center;

    .content-font {
      font-family: "PingFang SC";
      text-align: left;
      font-size: 14px;
      margin: 5px;
      min-width: 100px;
      overflow: hidden;
    }

    .combine-selector {
      width: 100%;
    }
  }
  .single-button {
    font-family: "PingFang SC";
    text-align: center;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>

<script>
export default {
  name: "MaterialPurchaseAndStorePropCard",
  data() {
    return {
      // 采购和库存属性数据
      params: {
        // 物料置购类型
        matPurchaseType: '0',
        // ABC分类
        abcType: 'A',
        // 循环盘点编码
        cycleCountCode: '1001',
        // 是否批次管理
        isBatchManage: true,
        // 是否单件管理
        isSingleManage: true,
        // 是否进价控制
        isPurchasePriceCtr: true,
        // 默认供应商
        defaultSupplier: '李宁',
        // 默认采购部门
        defaultPurchaseDept: '采购一部',
        // 默认仓库
        defaultWarehouse: '苏州一仓库',
        // 默认采购单位
        defaultPurchaseCompany: '江阴布料厂',
        // 默认库存单位
        defaultStoreUnit: '米',
        // 默认库位
        defaultStoreLocation: '库位一',
      },
      // 部分采购和库存属性需要的选项
      options: {
        // 物料置购类型选项
        matPurchaseTypeOptions: [
          {
            label: '自制件',
            value: 0,
          },
          {
            label: '采购件',
            value: 1,
          },
        ],
        // 默认库存单位选项
        defaultStoreUnitOptions: [
          {
            label: '米',
            value: '0',
          },
          {
            label: '匹',
            value: '1',
          },
        ]
      },
    }
  }
};
</script>
