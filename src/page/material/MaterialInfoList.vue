<template>
  <div class="body">
    <!-- 搜索导航栏卡片 -->
    <MaterialInfoSearchNaviCard>
    </MaterialInfoSearchNaviCard>

    <!-- 搜索结果展示卡片 -->
    <MaterialInfoSearchDisplayCard>
    </MaterialInfoSearchDisplayCard>
    
  </div>
</template>



<script>
  import MaterialInfoSearchNaviCard from '@/components/MaterialInfoListComponents/MaterialInfoSearchNaviCard';
  import MaterialInfoSearchDisplayCard from '@/components/MaterialInfoListComponents/MaterialInfoSearchDisplayCard';
  
  export default{
    name:"MaterialInfoList",
    components:{
      MaterialInfoSearchNaviCard,
      MaterialInfoSearchDisplayCard,
    },
    data(){
      return{
        value:''
      }
    }
  }
</script>





