<template>
<!-- 物料基础信息卡片 -->
	<el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="100">
      <!--SPU编号输入-->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >SPU编号：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!--SPU名称输入-->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >SPU名称：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!--SPU物料类型选择-->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >物料类型：</div>
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
      <!-- 物料分类选择 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >物料分类：</div>
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

      <!-- 来源选择 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >来源：</div>
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
      <!-- 用途输入 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >用途：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row :gutter="100">
      <!-- 设计图号输入 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >设计图号：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!-- 设计版次输入 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >设计版次：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!-- 助记码输入 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >助记码：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <!-- 规格描述输入 -->
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >规格描述：</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!-- 多规格描述按钮 -->
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-switch
            class="switch-button"
            v-model="value3"
            active-text="单规格描述"
            inactive-text="多规格描述">
          </el-switch>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="100">
      <!-- 备注输入 -->
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >备注：</div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--分割线-->
    <hr />

    <el-row :gutter="100">
      <!-- 默认计量单位选择 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >默认计量单位：</div>
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

    <!-- 辅助计量单位表 -->
    <el-row :gutter="30">
      <el-col :span="2.5">
        <div class="grid-content bg-purple">
          <div class="input-combine">
            <div class="content-font" >
              辅助计量单位：
            </div>
          </div>
        </div>
      </el-col>

      <!-- 辅助计量单位表 -->
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">

            <el-table-column
            type="index"
            label="序号"
            width="50">
            </el-table-column>

            <el-table-column
            property="date"
            label="计量单位"
            width="120">
            </el-table-column>

            <el-table-column
            property="name"
            label="换算系数"
            width="120">true
            </el-table-column>

            <el-table-column
            property="name"
            label="排序号"
            width="150">
              <template slot-scope="scope" style="display:flex;">
                <el-button type="primary" icon="el-icon-sort-up"></el-button>
                <el-button type="primary" icon="el-icon-sort-down"></el-button>
              </template>
            </el-table-column>

            <el-table-column
            fixed="right"
            label="操作">
              <div slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
	</el-card>
</template>

<style lang="less" scoped>
	.box-card{
		min-width: 950px;
		.input-combine{
			display: flex;

			.content-font{
				font-family:"PingFang SC";
				text-align: left;
				font-size: 18px;
				margin: 5px;
				min-width: 140px;
				overflow: hidden;
			}

			.combine-selector{
				width: 100%;
			}
		}
		.single-button{
			font-family:"PingFang SC";
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

		.switch-button{
      font-size: 18px;
      min-width: 90px;
			align-content: center;
			margin: 5px;
		}
	}
 </style>

<script>
	export default {
		name: "MaterialBaseInfoCard",
		 
		data() {
			return {
				tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
				}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
				}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
				}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
				}],
				currentRow: null,
				input:'',
				value3: true,
			}
		},

		methods: {
			setCurrent(row) {
				this.$refs.singleTable.setCurrentRow(row);
			},
			handleCurrentChange(val) {
				this.currentRow = val;
			}
		}
	}
</script>
