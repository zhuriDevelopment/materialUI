<template>
  <div class="body">
    <!-- 搜索导航栏卡片 -->
    <MaterialInfoSearchNaviCard>
    </MaterialInfoSearchNaviCard>

    <!-- 搜索结果展示卡片 -->
    <MaterialInfoSearchDisplayCard>
    </MaterialInfoSearchDisplayCard>

    <!-- 搜索结果统计卡片 -->
    <MaterialInfoSearchBottomCard>
    </MaterialInfoSearchBottomCard>
  </div>
</template>

<style lang="less" scoped>
.body {
  margin-right: 10px;
}
</style>

<script>
  import MaterialInfoSearchNaviCard from '@/components/MaterialInfoListComponents/MaterialInfoSearchNaviCard';
  import MaterialInfoSearchDisplayCard from '@/components/MaterialInfoListComponents/MaterialInfoSearchDisplayCard';
  import MaterialInfoSearchBottomCard from '@/components/MaterialInfoListComponents/MaterialInfoSearchBottomCard';

  export default{
    name:"MaterialInfoList",
    components:{
      MaterialInfoSearchNaviCard,
      MaterialInfoSearchDisplayCard,
      MaterialInfoSearchBottomCard
    },
    data(){
      return{
        value:''
      }
    },
    mounted() {
      var that = this;
      that.$store.dispatch('infolist/getAllBaseInfoData', {
        axios: that.$axios,
        main: that,
      });
    }
  }
</script>





