<template>
  <!-- 物料质量类属性卡 -->
  <el-card class="box-card">
    <el-form :model="params" ref="params" label-width="135px" label-position="left" :rules="rules" status-icon>
      <!-- 第一行 -->
      <el-row :gutter="20">
        <!--检验方式-->
        <el-col :span="24">
          <el-form-item label="检验方式：">
            <el-radio class="single-radio" v-model="params.testMethod" label="0">不检验</el-radio>
            <el-radio class="single-radio" v-model="params.testMethod" label="1">抽样检验</el-radio>
            <el-radio class="single-radio" v-model="params.testMethod" label="2">全样检验</el-radio>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">检验方式：</div>
              <el-radio class="single-radio" v-model="params.testMethod" label="0">不检验</el-radio>
              <el-radio class="single-radio" v-model="params.testMethod" label="1">抽样检验</el-radio>
              <el-radio class="single-radio" v-model="params.testMethod" label="2">全样检验</el-radio>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20">
        <!--检验水准-->
        <el-col :span="12">
          <el-form-item label="检验水准：">
            <el-select class="combine-selector" v-model="params.testLevel" placeholder="请选择">
              <el-option
                v-for="item in options.testLevelOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">检验水准：</div>
              <el-select class="combine-selector" v-model="params.testLevel" placeholder="请选择">
                <el-option
                  v-for="item in options.testLevelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
        <!--检验程度-->
        <el-col :span="12">
          <el-form-item label="检验程度：">
            <el-select class="combine-selector" v-model="params.testDegree" placeholder="请选择">
              <el-option
                v-for="item in options.testDegreeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">检验程度：</div>
              <el-select class="combine-selector" v-model="params.testDegree" placeholder="请选择">
                <el-option
                  v-for="item in options.testDegreeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row :gutter="20">
        <!--默认检验部门-->
        <el-col :span="12">
          <el-form-item label="默认检验部门：">
            <el-select class="combine-selector" v-model="params.defaultTestDep" placeholder="请选择">
              <el-option
                v-for="item in options.defaultTestDepOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认检验部门：</div>
              <el-select class="combine-selector" v-model="params.defaultTestDep" placeholder="请选择">
                <el-option
                  v-for="item in options.defaultTestDepOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div> -->
        </el-col>
        <!--检验工时(时)-->
        <el-col :span="12">
          <el-form-item label="检验工时（时）：" prop="testHour">
            <el-input class="combine-selector" v-model="params.testHour" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">检验工时（时）：</div>
              <el-input class="combine-selector" v-model="params.testHour" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第四行 -->
      <el-row :gutter="20">
        <!--存储期限(天)-->
        <el-col :span="12">
          <el-form-item label="存储期限（天）：" prop="storageLimit">
            <el-input class="combine-selector" v-model="params.storageLimit" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">存储期限（天）：</div>
              <el-input class="combine-selector" v-model="params.testHour" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
        <!--默认检验员-->
        <el-col :span="12">
          <el-form-item label="默认检验员：">
            <el-input class="combine-selector" v-model="params.defaultTester" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content">
            <div class="input-combine">
              <div class="content-font">默认检验员：</div>
              <el-input class="combine-selector" v-model="params.defaultTester" placeholder="请输入内容"></el-input>
            </div>
          </div> -->
        </el-col>
      </el-row>
      <!-- 第五行 -->
      <el-row :gutter="20">
        <!--检验工时(时)-->
        <el-col :span="24">
          <el-form-item label="检验标准文件：">
            <el-input class="combine-selector" v-model="params.testStandFile" placeholder="请输入内容"></el-input>
          </el-form-item>
          <!-- <div class="grid-content upload-grid">
            <div class="input-combine">
              <div class="content-font">检验标准文件：</div>
              <el-upload
                class="upload-element"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
                :disabled="true"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button
                  style="margin-left: 10px;"
                  size="small"
                  type="success"
                  @click="submitUpload"
                >上传到服务器</el-button>
              </el-upload>
            </div>
          </div> -->
        </el-col>
      </el-row>
    </el-form>
    
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  min-width: 900px;
  .combine-selector {
    width: 100%;
  }

  .single-button {
    font-family: "PingFang SC";
    text-align: center;
    font-size: 18px;
    margin: 5px;
    min-width: 90px;
    overflow: hidden;
  }

  .single-radio {
    font-size: 18px;
    min-width: 90px;
    overflow: hidden;
    margin: 5px;
    text-align: center;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .upload-grid {
    height: 200px;
  }
  .upload-element {
    padding-left: 5px;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "MaterialQualityCard",
  data() {
    let validNumber = (rule, value, callback) => {
      let reg = /^[0-9]*$/;
      if (!reg.test(value)) {
        callback(new Error('此空必须输入数字！'));
      }else{
        callback();
      }
    };
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      // 部分质量属性需要的选项
      options: {
        // 检验水准选项
        testLevelOptions: [
          {
            label: '一般检验水准',
            value: '0',
          },
          {
            label: '特殊检验水准',
            value: '1',
          },
        ],
        // 检验程度选项
        testDegreeOptions: [
          {
            label: '减量',
            value: '0',
          },
          {
            label: '正常',
            value: '1',
          },
          {
            label: '严格',
            value: '2',
          },
        ],
        // 默认检验部门选项
        defaultTestDepOptions: [
          {
            label: '生产部',
            value: '0',
          },
          {
            label: '采购部',
            value: '1',
          },
          {
            label: '销售部',
            value: '2',
          },
        ]
      },
      // 表单的规则
      rules: {
        testHour: [
          { required: true, message: '请输入检验工时', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
        storageLimit: [
          { required: true, message: '请输入存储期限', trigger: 'change' },
          { validator: validNumber, trigger: 'change' },
        ],
      },
    };
  },
  methods: {},
  computed: {
    params: {
      get() {
        return this.$store.getters['qualityprop/qualifyInfos'];
      },
      set(value) {
        this.$store.commit('qualityprop/quality', value);
      }
    }
    // // 检验方法
    // testMethod: {
    //   get() {
    //     return this.$store.getters['qualityprop/testMethod'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/test-method', value);
    //   }
    // },
    // // 检验水准
    // testLevel: {
    //   get() {
    //     return this.$store.getters['qualityprop/testLevel'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/test-lvl', value);
    //   }
    // },
    // // 检验程度
    // testDegree: {
    //   get() {
    //     return this.$store.getters['qualityprop/testDegree'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/test-degree', value);
    //   }
    // },
    // // 默认检验部门
    // defaultTestDep: {
    //   get() {
    //     return this.$store.getters['qualityprop/defaultTestDep'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/default-test-dep', value);
    //   }
    // },
    // // 检验工时
    // testHour: {
    //   get() {
    //     return this.$store.getters['qualityprop/testHour'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/test-hour', value);
    //   }
    // },
    // // 存储期限
    // storageLimit: {
    //   get() {
    //     return this.$store.getters['qualityprop/storageLimit'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/storage-limit', value);
    //   }
    // },
    // // 默认检验员
    // defaultTester: {
    //   get() {
    //     return this.$store.getters['qualityprop/defaultTester'];
    //   },
    //   set(value) {
    //     this.$store.commit('qualityprop/default-tester', value);
    //   }
    // },
  }
};
</script>
