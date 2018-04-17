<template>
   <div style="background:white;width:100%;height:100%;border-radius:4px">
     <el-container>
            <el-header>
                <span style="line-height:50px">今日任务</span>
                <el-button type="primary" icon="el-icon-edit" circle style="float:right"></el-button>
            </el-header>
            <el-main>
<el-row :gutter="22">
  <el-col :span="2"><div class="grid-content bg-purple">#</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">时间</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">任务内容及名称</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">控制区域</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">操作</div></el-col>
</el-row>
<el-row :gutter="22" v-for="(item, index) in todayData" :key="index">
  <hr/>
  <el-col :span="2"><div class="grid-content bg-purple">{{index}}</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">{{item.time}}</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">{{item.content}}</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">{{item.control}}</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-caret-right" circle></el-button>
   <el-button type="primary" icon="el-icon-edit" circle></el-button> 
      </div></el-col>
</el-row>
            </el-main>
    </el-container>
  </div>  
</template>

<script>
export default {
    name:'todayTasks',
    data(){
        return {
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
    }
}
</script>

<style lang="scss" scoped>

  .el-row {
     color: #505458;
    &:last-child {
      margin-bottom: 0;
    }
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
  .grid-content {
     display: block;
     overflow: hidden;
     word-break:keep-all; 
     white-space:nowrap;
     text-overflow:ellipsis 
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
