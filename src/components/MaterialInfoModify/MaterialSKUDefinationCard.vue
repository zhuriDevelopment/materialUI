<template>
<!-- SKU定义表格 -->
    <!--SKU定义的展示编辑表格-->
    <el-card class="box-card">
        <el-table
        border="true"
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
            <!--索引列-->
            <el-table-column
            label="序号"
            type="index"
            width="50"
            >
            </el-table-column>

            <!--第一列-->
            <el-table-column
            prop="date"
            label="SKU编码"
            width="120">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template>
            </el-table-column>

            <!--第二列-->
            <el-table-column
            label="SKU名称"
            width="120">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template>
            </el-table-column>

            <!--第三列-->
            <el-table-column
            prop="name"
            label="物料编码">
                <template slot-scope="scope">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </template>
            </el-table-column>

            <!--第四列-->
            <el-table-column
            prop="name"
            label="计量单位">
                <template slot-scope="scope">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </template>
            </el-table-column>

            <!--第五列-->
            <el-table-column
            prop="name"
            label="条形码">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template>
            </el-table-column>

            <!--第六列-->
            <el-table-column
            prop="name"
            label="采购价格">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template>
            </el-table-column>

            <!--第七列-->
            <el-table-column
            prop="name"
            label="销售价格">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template><a href=""></a>
            </el-table-column>

            <!--第七列-->
            <el-table-column
            prop="name"
            label="备注">
                <template slot-scope="scope">
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        :disabled="false">
                        </el-input>
                </template><a href=""></a>
            </el-table-column>

            <!--操作栏列-->
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column> 
        </el-table>
    </el-card>
</template>

<style lang="less" scoped>
    .box-card{
        min-width: 900px;
    }
</style>


<script>
export default {
    name:"MaterialSKUDefinationCard",
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }],
            input:'',
            currentRow: null
        }
    },
}
</script>
