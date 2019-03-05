<template>
<!-- 附件管理卡片 -->
  <el-card>
    <div class="content-font">
      物料描述文件上传
    </div>

    <!-- 文件上传按钮 -->
    <el-upload
      class="attached-upload"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
        <!-- 选取文件按钮 -->
        <el-button slot="trigger" size="large" type="primary">
          选取文件
        </el-button>
        
        <!-- 上传按钮 -->
        <el-button style="margin-left: 10px;" size="large" type="success" @click="submitUpload">
          上传到服务器
        </el-button>
      <div slot="tip" class="el-upload__tip">注意：只能上传xxxxxx文件，且不超过500kb</div>
    </el-upload>
  </el-card>
</template>

<style lang="less" scoped>
  .attached-upload{
    margin: 2%;
  }
  .el-upload__tip{
    font-size: small;
  }
  .content-font{
    font-family:"PingFang SC";
    text-align: left;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
  }
</style>


<script>
export default {
  name:"MaterialAttachedManagementCard",
  data()  {
    return {
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
