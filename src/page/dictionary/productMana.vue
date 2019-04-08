<template>
  <el-card class="boxcard">
    <el-tabs v-model="viewname" @tab-click="handleTabClick" class="cardTab">
      <el-tab-pane label="产品信息管理" name="first" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <div class="containerHeaderDiv1">
              <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
              <el-button type="success" @click="handleEditInfoClick()">编辑信息</el-button>
              <el-button type="danger">删除信息</el-button>
              <div class="containerHeaderDiv2">
                <el-button type="primary">搜索产品</el-button>
                <el-input v-model="searchInput" class="input" placeholder="请输入产品编号"></el-input>
                <span class="inputTag">产品编号:</span>
              </div>
            </div>
            <hr />
          </el-header>

          <el-main clas="containerMain">
            <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="产品编号"
              width="240"
              prop="name">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
              prop="abbr"
              label="产品名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="description"
              label="产品描述"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="owner"
              label="产品部门"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="danger" @click="toggleSelection()">取消选择</el-button>
          </div>
          </el-main>
        </el-container>
      </el-tab-pane>

      <el-tab-pane label="新增产品信息" name="second">
        <el-card>
          <div class="inputCombine">
            <span class="inputTag">产品编号:</span>
            <el-input v-model="newInfoName" class="input" placeholder="请输入产品编号"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品名称:</span>
            <el-input v-model="newInfoAbbr" class="input" placeholder="请输入产品名称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品部门:</span>
              <el-select v-model="newInfoOwner" placeholder="请选择" class="inputSelector">
                <el-option
                  v-for="item in selectionData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品描述:</span>
            <el-input
              class="inputArea"
              type="textarea"
              :rows="4"
              placeholder="请输入产品描述"
              v-model="newInfoDescription">
            </el-input>
          </div>
          <div class="secondButtonDiv">
            <el-button type="success" class="save">保存</el-button>
            <el-button type="danger" class="cancel">取消</el-button>
          </div>
        </el-card>
      </el-tab-pane>

      <el-tab-pane label="编辑产品信息" name="third">
        <el-card>
          <div class="inputCombine">
            <span class="inputTag">产品编号:</span>
            <el-input v-model="editInfoName" class="input" placeholder="请输入产品编号"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品名称:</span>
            <el-input v-model="editInfoAbbr" class="input" placeholder="请输入产品名称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品部门:</span>
            <el-select v-model="editInfoOwner" placeholder="请选择" class="inputSelector">
              <el-option
                v-for="item in selectionData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputCombine">
            <span class="inputTag">产品描述:</span>
            <el-input
              class="inputArea"
              type="textarea"
              :rows="4"
              placeholder="请输入产品描述"
              v-model="editInfoDescription">
            </el-input>
          </div>
          <div class="secondButtonDiv">
            <el-button type="success" class="save">保存</el-button>
            <el-button type="danger" class="cancel">取消</el-button>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<style lang="less" scoped>
  .containerHeaderDiv1{
    display: flex;
    flex-direction: row;
    width: 100%;
    // background: black;
    .containerHeaderDiv2{
      position: relative;
      left: 300px;
      // margin-right: 100px;
      // background: white;
      display: flex;
      flex-direction: row-reverse;
      min-width: 500px;
      .input{
        min-width: 200px;
        max-width: 400px;
      }
      .inputTag{
        font-size: 18px;
        line-height: 40px;
        min-width: 90px;
      }
    }
  }

  .inputCombine{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    min-width: 250px;
    max-width: 500px;
    .inputTag{
      font-size: 18px;
      line-height: 40px;
      min-width: 90px;
    }
  }

  .secondButtonDiv{
    margin-top: 20px;
    min-width: 250px;
    max-width: 500px;
    // background: black;
    .save{
      margin-left: 68%;
    }
  }
  
</style>


<script>
  export default {
    data() {
      return {
        viewname: 'first',
        searchInput: '',
        tableData: [{
          name: '中国耐克公司',
          abbr: 'nk',
          description: '知名产品',
          owner:'业务组1'
        },{
          name: '中国阿迪公司',
          abbr: 'ad',
          description: '次级产品',
          owner:'业务组2'
        },{
          name: '中国新百伦公司',
          abbr: 'nb',
          description: '国际产品',
          owner:'业务组3'
        },{
          name: '日本阿赛克斯公司',
          abbr: 'asics',
          description: '日本产品',
          owner:'业务组4'
        },],
        selectionData: [{
          value: '选项1',
          label: '业务组1'
        }, {
          value: '选项2',
          label: '业务组2'
        }, {
          value: '选项3',
          label: '业务组3'
        }, {
          value: '选项4',
          label: '业务组4'
        },],
        multipleSelection: [],
        editInfoDescription:'',
        editInfoName:'',
        editInfoAbbr:'',
        editInfoOwner:'',

        newInfoOwner:'',
        newInfoDescription:'',
        newInfoName:'',
        newInfoAbbr:'',
      };
    },
    // computed:{
    //   viewname: 'first',
    // },
    methods: {
      handleTabClick(tab, event) {
        console.log(tab, event);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleNewInfoClick(){
        this.viewname = 'second';
        console.log(this.viewname);
      },
      handleEditInfoClick(){
        if(this.multipleSelection.length === 0){
          alert("请选择一个产品信息!");
          return;
        }
        if(this.multipleSelection.length > 1){
          alert("只能选择一个信息进行编辑!");
          return;
        }
        console.log(this.multipleSelection[0]);
        this.editInfoName = this.multipleSelection[0].name;
        this.editInfoAbbr = this.multipleSelection[0].abbr;
        this.editInfoOwner = this.multipleSelection[0].owner;
        this.editInfoDescription = this.multipleSelection[0].description;
        this.viewname = 'third';
      }
    }
  };
</script>