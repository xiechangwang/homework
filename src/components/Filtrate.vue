<template>
  <div class="filtrate">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="开始时间" class="items">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="截止时间" class="items">
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="items">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
      name:'filtrate',
      data(){
          return{
            value1:'',
            value2:''
          }
      },
    methods: {
      onSubmit() {
        let ts=this;
        let setDate,endDate;
        if(ts.value1!=""){
          setDate=ts.value1.getFullYear()+"-"+ts.value1.getMonth()+1+"-"+ts.value1.getDate();
        }
        if(ts.value2!=""){
          endDate=ts.value2.getFullYear()+"-"+ts.value2.getMonth()+1+"-"+ts.value2.getDate();
        }
        ts.$emit("transfeDate",[setDate,endDate])
      }
    }
  }
</script>
<style scoped>
  .items:first-child{
    margin-left: 10px;
  }
  .items{
    margin-bottom: 10px !important;
    margin-top: 10px;
  }
</style>
