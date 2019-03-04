<template>
<!-- 物料采购信息卡 -->
    <el-card class="box-card">
        <!-- 第一行 -->
        <el-row :gutter="100">
            <!--物料置购类型-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >物料置购类型:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--ABC分类-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >ABC分类:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--循环盘点编码-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >循环盘点编码:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>
    
        <!-- 第二行 -->
        <el-row :gutter="100">
            <!--是否批次管理-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >是否批次管理:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--是否单件管理-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >是否单件管理:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--是否进价控制-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >是否进价控制:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>
    
        <!-- 第三行 -->
        <el-row :gutter="100">
            <!--默认供应商-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认供应商:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--默认采购部门-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认采购部门:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--默认仓库-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认仓库:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row :gutter="100">
            <!--默认采购单位-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认采购单位:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--默认库存单位-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认库存单位:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!--默认库位-->
            <el-col :span="7">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认库位:</div>
                        <el-select  class="combine-selector" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<style>
    .box-card{
        min-width: 900px;
    }
</style>

<style lang="less" scoped>
    .input-combine{
        display: flex;

        .content-font{
            font-family:"PingFang SC";
            text-align: left;
            font-size: 18px;
            margin: 5px;
            min-width: 130px;
            overflow: hidden;
        }

        .combine-selector{
            width: 100%;
        }
    }
    .single-button{
        font-family:"PingFang SC";
        text-align: center;
        font-size: 20px;
        margin: 5px;
        min-width: 100px;
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
  
 </style>



<script>
    export default {
        name:"MaterialPurchaseAndStorePropCard",
    }
</script>
