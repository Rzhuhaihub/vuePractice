<template>
  <div class="mainpage">
  <el-card class="box-card">
      <div slot="header">
      <span>在线设备</span>
      <el-button style="float: right; padding: 3px 0" type="text">更多<i class="el-icon-d-arrow-right el-icon--right"></i></el-button>
      </div>
     <div class="grid-content-father">
        <div class="grid-content1" v-for="(item,index) in tableData" :key="index">
             <div style="display:flex;justifty-content:center;align-items:center">
                 <el-button type="warning" icon="el-icon-star-off" circle></el-button>
             </div>
             <div>
                 <p>{{item.name}}</p>
                 <p>后级模式:{{item.content}}</p>   
            </div>  
        </div>
</div>
</el-card>

<el-card class="card-content">
    <div slot="header">
      <span>今日任务</span>
      <el-button style="float: right; padding: 3px 0" type="text">更多<i class="el-icon-d-arrow-right el-icon--right"></i></el-button>
    </div>
    <el-container>
      <el-header>
        <el-row :gutter="22">
         <el-col :span="3"><div>任务名称</div></el-col>
         <el-col :span="3"><div>任务时间</div></el-col>
         <el-col :span="3"><div>目前状态</div></el-col>
         <el-col :span="5"><div>任务详情</div></el-col>
         <el-col :span="3"><div>执行任务</div></el-col>
         <el-col :span="5"><div>任务分组信息</div></el-col>
      </el-row>
      </el-header>
      <el-main style="padding:0;height:620px;over-flow:auto">
         <el-row :gutter="22" v-for="(item,index) in tableData2" :key="index">
         <el-col :span="3"><div class="task-content">{{item.name}}</div></el-col>
         <el-col :span="3"><div class="task-content">{{item.time}}</div></el-col>
         <el-col :span="3"><div class="task-content">{{item.state}}</div></el-col>
         <el-col :span="5"><div class="task-content">{{item.content}}</div></el-col>
         <el-col :span="3"><div class="task-content"><el-button type="primary" icon="el-icon-caret-right" circle></el-button></div></el-col>
         <el-col :span="5"><div class="task-content">{{item.control}}</div></el-col>
      </el-row>
      </el-main>
    </el-container>
</el-card>
  </div>
</template>

<script>
 export default {
    name:'MainPage',
    data() {
      const data1 = {
        name: '设备一',
        content: '蓝牙'
      };
      const data2 = {
        name:'任务一',
        time:'09:00:00',
        state:'在线',
        content:'任务详情一',
        control:'分组一，分组2'
      }
      return {
        tableData: Array(5).fill(data1),
        tableData2:Array(20).fill(data2)
      }
    }
  };
</script>

<style scoped>
.mainpage {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
  .grid-content-father{
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
  }
  .grid-content1 {
    border-radius: 4px;
    background: #d3dce6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
    display: flex;
  }
.box-card{
  margin-bottom: 20px
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
  .task-content {
     display: block;
     overflow: hidden;
     word-break:keep-all; 
     white-space:nowrap;
     text-overflow:ellipsis 
  }

</style>

