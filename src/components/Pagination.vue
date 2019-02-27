<template>
  <div class="pages">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="page"
      @current-change="presentPage"
      class="pageBox"
    >
    </el-pagination>
  </div>
</template>
<script>
  export default{
      name:'pages',
      props:['page'],
      data(){
          return{

          }
      },
      methods:{
        presentPage(p_num){
            let ts=this;
            ts.$emit('transferPage',p_num);
        }
      }
  }
</script>
<style scoped>
  .pageBox{
    text-align: right;
    margin-right: 50px;
    margin-top: 10px;
  }
</style>
