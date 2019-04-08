<template>
  <el-card class="boxcard">
    <el-tabs v-model="viewname" @tab-click="handleTabClick" class="cardTab">
      <el-tab-pane label="品牌信息管理" name="first" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <div class="containerHeaderDiv1">
              <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
              <el-button type="success" @click="handleEditInfoClick()">编辑信息</el-button>
              <el-button type="danger">删除信息</el-button>
              <div class="containerHeaderDiv2">
                <el-button type="primary">搜索品牌</el-button>
                <el-input v-model="searchInput" class="input" placeholder="请输入品牌名称"></el-input>
                <span class="inputTag">品牌名称:</span>
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
              label="品牌名称"
              width="240"
              prop="name">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
              prop="abbr"
              label="品牌简称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="description"
              label="品牌描述"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="owner"
              label="所属客户"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="danger" @click="toggleSelection()">取消选择</el-button>
          </div>
          </el-main>
        </el-container>
      </el-tab-pane>

      <el-tab-pane label="新增品牌信息" name="second" v-if="newCardShowFlag">
        <el-card>
          <div class="inputCombine">
            <span class="inputTag">品牌名称:</span>
            <el-input v-model="newInfoName" class="input" placeholder="请输入品牌名称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">品牌简称:</span>
            <el-input v-model="newInfoAbbr" class="input" placeholder="请输入品牌简称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">所属客户:</span>
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
            <span class="inputTag">品牌描述:</span>
            <el-input
              class="inputArea"
              type="textarea"
              :rows="4"
              placeholder="请输入品牌描述"
              v-model="newInfoDescription">
            </el-input>
          </div>
          <div class="secondButtonDiv">
            <el-button type="success" class="save" @click="handleNewSaveClick()">保存</el-button>
            <el-button type="danger" class="cancel" @click="handleNewCancelClick()">取消</el-button>
          </div>
        </el-card>
      </el-tab-pane>

      <el-tab-pane label="编辑品牌信息" name="third" v-if="editCardShowFlag">
        <el-card>
          <div class="inputCombine">
            <span class="inputTag">品牌名称:</span>
            <el-input v-model="editInfoName" class="input" placeholder="请输入品牌名称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">品牌简称:</span>
            <el-input v-model="editInfoAbbr" class="input" placeholder="请输入品牌简称"></el-input>
          </div>
          <div class="inputCombine">
            <span class="inputTag">所属客户:</span>
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
            <span class="inputTag">品牌描述:</span>
            <el-input
              class="inputArea"
              type="textarea"
              :rows="4"
              placeholder="请输入品牌描述"
              v-model="editInfoDescription">
            </el-input>
          </div>
          <div class="secondButtonDiv">
            <el-button type="success" @click="handleEditSaveClick()" class="save">保存</el-button>
            <el-button type="danger" @click="handleEditCancelClick()" class="cancel">取消</el-button>
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
        tableData: [
          {
            name: 'nike',
            abbr: 'nk',
            description: '知名品牌',
            owner:'中国耐克公司'
          },{
            name: 'addidas',
            abbr: 'ad',
            description: '次级品牌',
            owner:'中国阿迪公司'
          },{
            name: 'newbalance',
            abbr: 'nb',
            description: '国际品牌',
            owner:'中国新百伦公司'
          },{
            name: '阿赛克斯',
            abbr: 'asics',
            description: '日本品牌',
            owner:'日本阿赛克斯公司'
          },],
          selectionData: [{
            value: '选项1',
            label: '中国耐克公司'
          }, {
            value: '选项2',
            label: '中国阿迪公司'
          }, {
            value: '选项3',
            label: '日本阿赛克斯公司'
          }, {
            value: '选项4',
            label: '中国新百伦公司'
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

        newCardShowFlag:false,
        editCardShowFlag: false,
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
        this.newCardShowFlag = true;
        this.viewname = 'second';
        console.log(this.viewname);
      },
      handleEditInfoClick(){
        if(this.multipleSelection.length === 0){
          alert("请选择一个品牌信息!");
          return;
        }
        if(this.multipleSelection.length > 1){
          alert("只能选择一个信息进行编辑!");
          return;
        }
        this.editCardShowFlag = true;
        console.log(this.multipleSelection[0]);
        this.editInfoName = this.multipleSelection[0].name;
        this.editInfoAbbr = this.multipleSelection[0].abbr;
        this.editInfoOwner = this.multipleSelection[0].owner;
        this.editInfoDescription = this.multipleSelection[0].description;
        this.viewname = 'third';
      },
      handleNewSaveClick(){
        this.newCardShowFlag = false;
        this.viewname = "first";
        return;
      },
      handleNewCancelClick(){
         this.newCardShowFlag = false;
        this.viewname = "first";
        return;
      },
      handleEditSaveClick(){
        this.editCardShowFlag = false;
        this.viewname = "first";
        return;
      },
      handleEditCancelClick(){
        this.editCardShowFlag = false;
        this.viewname = "first";
        return;
      },
    }
  };
</script>