<template>
<!-- 类型修改中侧边导航栏 -->
    <el-tree 
        :data="data" 
        :props="defaultProps" 
        @node-click="handleNodeClick"
        class="navi-tree"
        default-expand-all="true">

    </el-tree>
</template>

<style lang="less" scoped>
     .navi-tree{
         font-size: 100px;
     }
</style>


<script>
    export default {
        name:"TypeModifyNaviTree",
        data() {
            return {
                data: [
                    {
                        label: '物料分类',

                        children: [{
                            label: '原料',
                            children: [{
                                label: '面料'
                            },{
                                label:'辅料'
                            }],
                        },
                        {
                                label:'包装材料',
                                children: [{
                                label: '包装材料1'
                            },{
                                label:'包装材料2'
                            }]
                        },
                        {
                                label:'成品',
                                children: [{
                                label: '成品1'
                            },{
                                label:'成品2'
                            }]
                        }]
                    }, 
                    {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                            label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                            label: '三级 2-2-1'
                            }]
                        }]
                    }, 
                    {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                        label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                        label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>
