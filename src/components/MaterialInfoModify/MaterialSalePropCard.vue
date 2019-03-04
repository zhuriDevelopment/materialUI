<template>
<!-- 物料销售类属性卡片 -->
    <el-card class="box-card">
        <!-- 第一行 -->
        <el-row :gutter="100">
            <!--销售计划价格-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >销售计划价格:</div>
                        <el-input v-model="input" placeholder="请输入内容" ></el-input>
                    </div>
                </div>
            </el-col>
            <!--计价货币-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >计价货币:</div>
                            <el-input v-model="input" placeholder="请输入内容" ></el-input>
                    </div>
                </div>
            </el-col>
            <!--是否售价控制-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >是否售价控制:</div>
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
            <!--销售价格策略-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >销售价格策略:</div>
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
            <!--售价下限率-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >售价下限率:</div>
                        <el-input v-model="input" placeholder="请输入内容" ></el-input>
                    </div>
                </div>
            </el-col>
            <!--销售成本科目-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >销售成本科目:</div>
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
            <!--默认客户-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认客户:</div>
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
            <!--销售地-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >销售地:</div>
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
            <!--默认业务员-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认业务员:</div>
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
            <!--默认销售单位-->
            <el-col :span="6">
                <div class="grid-content">
                    <div class="input-combine">
                        <div class="content-font" >默认销售单位:</div>
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

<style lang="less" scoped>
    .box-card{
        min-width: 900px;

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
  
    }


 </style>

<script>
    export default {
        name:"MaterialSalePropCard",
    }
</script>
