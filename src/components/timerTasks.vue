<template>
<div class="timerTasks">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
           <span>方案名称</span>
           <el-button　v-show="!isShow" style="float:right;padding:3px 0" type="text" @click="addItem">添加</el-button>
           <el-button　v-show="isShow" style="float:right;padding:3px 0" type="text">保存</el-button>
        </div>
        <div v-show="isShow" style="display:flex;justifty-content:space-between">
            <el-input v-model="input" placeholder="请输入内容"  clearable></el-input>
            <el-button style="float:right;padding:3px 0" type="text" @click="cancel">取消</el-button>
        </div>
        <div　class="tasksContent">
          <el-checkbox v-for="o in objes" :label="o" :key="o"  class="checkboxStyle">{{o}}</el-checkbox>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <el-container>
            <el-header>
                <span style="line-height:50px">任务列表</span>
                <el-button type="primary" icon="el-icon-plus" style="float:right">添加</el-button>
            </el-header>
            <el-main>
<el-row :gutter="22">
  <el-col :span="2"><div class="grid-content">#</div></el-col>
  <el-col :span="4"><div class="grid-content">时间</div></el-col>
  <el-col :span="6"><div class="grid-content">任务内容及名称</div></el-col>
  <el-col :span="6"><div class="grid-content">控制区域</div></el-col>
  <el-col :span="4"><div class="grid-content">操作</div></el-col>
</el-row>
<el-row :gutter="22" v-for="(item, index) in todayData" :key="index">
  <hr/>
  <el-col :span="2"><div class="grid-content">{{index}}</div></el-col>
  <el-col :span="4"><div class="grid-content">{{item.time}}</div></el-col>
  <el-col :span="6"><div class="grid-content">{{item.content}}</div></el-col>
  <el-col :span="6"><div class="grid-content">{{item.control}}</div></el-col>
  <el-col :span="4"><div class="grid-content"><el-button type="primary" icon="el-icon-caret-right" circle></el-button>
   <el-button type="primary" icon="el-icon-edit" circle></el-button> 
      </div></el-col>
</el-row>
            </el-main>
    </el-container>
      
    </el-card>
 </div>
</template>

<script>
export default {
  name:'timerTasks',
  data(){
      const objesArray1=['上海','北京','广州','扬州','南京'] 
      return {
　　　　　　　objesArray:[],
            objes: objesArray1,
            isShow:false,
            input:'默认方案',
           todayData:[
                {time:'15:11:00',
                 content:'任务一',
                 control:'分组1分组1分组1分组1分组1分组1分组1分组1分组1组1分组1分组1分组1分组1分组1分组1分组1'},
                 {time:'15:11:00',
                 content:'任务一',
                 control:'分组1'},
                 {time:'15:11:00',
                 content:'任务一',
                 control:'分组1'},
            ]
      }
  },
  computed:{

  },
  methods:{
      addItem(){
　　　　　　this.isShow = !this.isShow;
      },
      cancel(){
        this.isShow = !this.isShow;
      }
  }
}
</script>

<style  scoped>
  .timerTasks{
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: row;
  }
  .text {
    font-size: 14px;
  }
  .itemCheckbox{
    display: flex;
     flex:1
  }
  .tasksContent{
    display: flex;
    flex-direction: column;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 200px;
  }
  .box-card-content{
    width: calc(100% - 200px);
    margin-left: 50px
  }
  .checkboxStyle{
     margin-left:5px;
     height:50px;
  }
  .grid-content {
     display: block;
     overflow: hidden;
     word-break:keep-all; 
     white-space:nowrap;
     text-overflow:ellipsis 
  }
  .el-row {
     color: #505458;
  }
  .el-row:hover{
      color: #70b6f9;
  }
  .el-col {
     height: 50px;
     display:flex;
     align-items: center;
     justify-content: center;
  }
</style>
