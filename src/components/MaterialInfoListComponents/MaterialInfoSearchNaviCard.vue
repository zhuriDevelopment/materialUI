<template>
    <!-- 搜索导航栏卡片 -->
    <el-card class="box-card">
        <!-- 一行的布局 -->
        <el-row :gutter="20">
            <!-- 物料分类输入框 -->
            <el-col :span="6">
                <div class="bar">
                    <div class="title">
                        物料分类:
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

            <!-- 物料编码输入框 -->
            <el-col :span="6">
                <div class="bar">
                    <div class="title">
                    物料编码:
                    </div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>

            <!-- 助记码输入框 -->
            <el-col :span="6">
                <div class="bar">
                    <div class="title">
                        助记码:
                    </div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>

            <!-- 高级搜索按钮 -->
            <el-button type="primary" plain  icon="el-icon-search">高级搜索</el-button>
            <!-- 搜索按钮 -->
            <el-button type="primary"  icon="el-icon-search">搜索</el-button>

            <!-- 新建物料按钮 -->
            <el-button type="primary" icon="el-icon-plus">
                新建物料
            </el-button>
        </el-row>
    </el-card>
</template>

<style lang="less" scoped>
    .box-card {
        width: 100%;
        min-width: 50%;
        margin: 1% 1%;
        
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
        name:"MaterialInfoSearchNaviCard"
    }
</script>
