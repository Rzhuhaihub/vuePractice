<template>
    <div class="taskEditContent">
        <span class="title">编辑任务</span>
         <el-form  :model="form" label-width="80px">
             <el-form-item>
               <el-row :gutter="28">  
                 <el-col :span="11">
                        <p>任务名称</p>
                        <el-input v-model="form.name"></el-input>
                   </el-col>
                  <el-col class="line" :span="6"></el-col>
                  <el-col :span="11">
                       <p>优先级别</p>
                       <el-input v-model="form.name"></el-input>
                  </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row :gutter="28">  
                   <el-col :span="11">
                        <p>任务时间</p>
                         <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                   </el-col>
                  <el-col class="line" :span="6"></el-col>
                  <el-col :span="11">
                       <p>执行周期</p>
                       <el-dropdown @command="handleCommand" style="display:block">
                         <el-button style="width:100%;text-align:right">
                             {{form.mhItem}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item command="指定日期">指定日期</el-dropdown-item>
                              <el-dropdown-item command="工作日">工作日</el-dropdown-item>
                        </el-dropdown-menu>
                       </el-dropdown>
                  </el-col>
                </el-row> 
            </el-form-item>
            <el-form-item  v-show="form.mhItem === '指定日期'">
                       <el-row :gutter="28">    
                         <el-col :span="4" :offset="18">
                             <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date1" style="width: 100%;"></el-time-picker>
                        </el-col>
                       </el-row>
            </el-form-item>
            <el-form-item  v-show="form.mhItem === '工作日'">
                 <el-col :span="12" :offset="11">
                         <el-checkbox-group v-model="form.checkboxGroup" size="medium">
                             <el-checkbox v-for="dateItem in form.dates" :label="dateItem" :key="dateItem">{{dateItem}}</el-checkbox>
                         </el-checkbox-group>
                 </el-col>
            </el-form-item>
            <el-form-item>
                 <el-select v-model="form.value" placeholder="请选择">
                 <el-option
                     v-for="item in form.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
    </el-option>
  </el-select>
            </el-form-item>
      
            <el-form-item>
              <el-row>
                <el-col :span='7'>名称</el-col>
                <el-col :span='7'>自动开</el-col>
                <el-col :span='7'>自动关</el-col>
              </el-row>
              <el-row v-for="(dataItem,index) in form.tableData" :key="index">
                <el-col :span='7'>{{dataItem.name}}</el-col>
                <el-col :span='7'>
                    <el-switch
                        v-model="form.tableData[index].autoOpen" @change="handleClickO(dataItem)">
                    </el-switch>
                </el-col>
                <el-col :span='7'>
                    <el-switch
                          v-model="form.tableData[index].autoClose" @change="handleClickC(dataItem)">
                    </el-switch>
                </el-col>
              </el-row>
            </el-form-item> 
         </el-form>
    </div>
</template>

<script>
const dateOptions = ['周一', '周二', '周三', '周四','周五','周六','周日'];
export default {
   name:'taskEdit',
   data(){
       return{
        form:{
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          mhItem:'工作日',
          dates: dateOptions,
          checkboxGroup:['周一'],
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
         tableData:[
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
              {name:"lala",autoOpen:true,autoClose:true},
          ]
          },
       }
   },
   methods:{
     handleCommand(command) {
         this.form.mhItem = command;
      },
    handleClickO(data){
         this.$message((data.autoOpen)? "开":"关");
    },
    handleClickC(data){
        this.$message((data.autoClose)? "开":"关");
    }
   }
}
</script>

<style lang='scss' scoped>

  .taskEditContent{
      background:white;
      border-radius:4px;
     p{
       margin: 0;  
     }
      .title{
          color: #6f7479;
      }

     
    
  }

 
</style>


