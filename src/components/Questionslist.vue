<template>
  <div class="questionsMain">
    <my_filtrate @transfeDate="getDate"></my_filtrate>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="题目"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="答案">
      </el-table-column>
    </el-table>
    <my_pagination :page="page_size" @transferPage="getPage"></my_pagination>
  </div>
</template>

<script>
  import my_filtrate from './Filtrate.vue';
  import my_pagination from './Pagination.vue';
export default {
  name: 'questions',
  data () {
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
      page_size:149,  //总共数量
      pageIndexs:1,   //当前页数
      pageSizes:10,   //每页条数
      s_date:'',    //开始时间
      e_date:''     //结束时间
    }
  },
  created(){
      let ts=this;
      this.listInitialize(ts.pageIndexs,ts.s_date,ts.e_date);
  },
  methods:{
      //获取当前页数
      getPage(pages){
        let ts=this;
        ts.pageIndex=pages;
        ts.$options.methods.listInitialize(ts.pageIndexs,ts.s_date,ts.e_date);
      },
      //获取日期
      getDate(date){
         let ts=this;
         ts.s_date=date[0];
         ts.e_date=date[1];
         ts.$options.methods.listInitialize(ts.pageIndexs,ts.s_date,ts.e_date);
      },
      //列表渲染
      listInitialize(page,s_date,e_date){
          let datas=this.$qs.stringify({
            pageIndex:page,
            pageSize:10,
            startDate:s_date,
            endDate:e_date
          });
         let url=this.HOST+'/paper/paperListToAdmin';
          console.log(url);
//          this.$axios({
//            methods:'post',
//            url:url,
//            data:datas
//          })
//            .then(msg=>{
//              console.log(msg)
//           })
//            .catch(err=>{
//               console.log(err);
//            })
          this.$axios.post(url,datas)
            .then(msg=>{
              console.log(msg)
           })
            .catch(err=>{
               console.log(err);
            })


      }
  },
  components:{
    my_pagination,
    my_filtrate
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
