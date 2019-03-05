<template>
<!-- 物料质量类属性卡 -->
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!--检验方式-->
      <el-col :span="24">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >检验方式:</div>
            <el-radio class="single-radio" v-model="radio" label="1">不检验</el-radio>
            <el-radio class="single-radio" v-model="radio" label="2">抽样检验</el-radio>
            <el-radio class="single-radio" v-model="radio" label="3">全样检验</el-radio>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row :gutter="100">
      <!--检验水准-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >检验水准:</div>
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
      <!--检验程度-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >检验程度:</div>
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
      <!--默认检验部门-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >默认检验部门:</div>
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
      <!--检验工时(时)-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >检验工时(时):</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!--存储期限(天)-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >存储期限(天):</div>
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
          </div>
        </div>
      </el-col>
      <!--默认检验员-->
      <el-col :span="6">
        <div class="grid-content">
          <div class="input-combine">
            <div class="content-font" >默认检验员:</div>
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
      <!--检验工时(时)-->
      <el-col :span="10">
        <div class="grid-content upload-grid">
          <div class="input-combine">
            <div class="content-font" >检验标准文件:</div>
            <!-- <el-input v-model="input" placeholder="请输入内容" ></el-input> -->
            <el-upload
            class="upload-element"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">
                选取文件
              </el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">
                上传到服务器
              </el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
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
      height:100%;

      .content-font{
        font-family:"PingFang SC";
        text-align: left;
        font-size: 18px;
        margin: 5px;
        min-width: 90px;
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

    .single-radio{
      font-size:18px;
      min-width: 90px;
      overflow: hidden;
      margin: 5px;
      text-align: center;
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
  
    .upload-grid{
      height: 200px;
    }
    .upload-element{
      padding-left:5px;
      align-items: center;
    }
  }
 </style>

<script>
  export default {
    name:"MaterialQualityCard",
    data () {
      return {
        radio: '1',
        fileList: [{
          name: 'food.jpeg', 
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
