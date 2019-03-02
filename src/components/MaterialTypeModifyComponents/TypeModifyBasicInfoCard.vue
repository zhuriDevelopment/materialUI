<template>
    <!-- 基本信息导航栏卡片 -->
    <el-card class="box-card">
        <!-- 两行布局 -->
            <!-- 第一行 -->
        <el-row :gutter="50">
            <el-col :span="4">
                <div class="title1">
                        基本信息
                </div>
            </el-col>
        </el-row>

        <!-- 第二行 -->
        <el-row :gutter="50">
            <!-- 第一列 -->
            <el-col :span="6">
                <!-- 文字+输入框的组合 -->
                <div class="bar">
                    <div class="title">
                        分类编码:
                    </div>
                    <el-select class="barSelector" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>

            <!-- 第二列 -->
            <el-col :span="6">
                <div class="bar">
                    <div class="title">
                    分类名称:
                    </div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>

            <!-- 第三列 -->
            <el-col :span="6">
                <div class="bar">
                    <div class="title">
                        物料类别:
                    </div>
                    <el-select class="barSelector" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>

            <!-- 保存按钮 -->
            <el-button type="primary" icon="el-icon-plus">
                保存
            </el-button>
        </el-row>
    </el-card>
</template>

<style lang="less" scoped>
    .box-card { 
        .title1{
                font-size: 18px;
                min-width: 90px;
                text-align: left;
                margin: 5px;
            }       
        .bar{
            display: flex;
            flex-direction: row;
            align-items: center;
            min-width: 50%;

            
            .title {
                font-size: 18px;
                min-width: 90px;
                text-align: center;
                margin: 5px;
            }

            .barSelector{
                min-width: 60%;
            }
        }
    } 
</style>

<script>
    export default {
        name:"TypeModifyBasicInfoCard"
    }
</script>
