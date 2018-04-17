<template>
<div style="deviceControl">
       <div class="deviceItem" v-for="(item,index) in tableData" :key="index">
           <div class="deviceItem_top">
               <span class="spanWidth">{{item.name}}</span>
               <el-tooltip :content="item.value" placement="top">
                <el-switch
                             v-model="item.value"
                             active-color="#13ce66"
                             inactive-color="#ff4949"
                             active-value="忙碌"
                             inactive-value="在线"
                             @change="openAndClose(item)"
                             >
                 </el-switch>
                </el-tooltip>
           </div>
           <div class="deviceItem_top">
                <span class="spanWidth">后级模式：蓝牙</span>
                <span class="el-switch__core spanTag" :class="[(item.valueId == 2) ? spanTag1 : spanTag2]">
                      {{tableText[item.valueId]}}
                </span>
          </div>   
       </div>
 </div> 
</template>

<script>
export default {
   name:'deviceControl',
   data(){
       return{
             tableData:[
                 {name:"一号机",model:"蓝牙",value:"忙碌",isactive:true,valueId:1},
                 {name:"一号机",model:"蓝牙",value:"在线",isactive:true,valueId:2},
                 {name:"一号机",model:"蓝牙",value:"故障",isactive:true,valueId:3}
             ],
             tableText:{1:"忙碌",2:"在线",3:"故障"},
             spanTag1:'spanTag1',
             spanTag2:'spanTag2'
       }
   },
   methods:{
       openAndClose(data){
           if(data.valueId === 1){
               data.valueId = 2;
           }else if(data.valueId === 2){
              data.valueId = 1;
           }else{
               data.valueId = 3;
               const h = this.$createElement;
                 this.$notify({
                 title: '警告',
                 type: 'warning',
                 message: h('i', { style: 'color: teal'}, '设备故障')
                });
           }
       }
   }
}
</script>

<style scoped>
   .deviceControl{
      width:100%;
      height:100%;
  }
  .deviceItem{
      background: white;
      width: 260px;
      height: 100px;
      border-radius: 4px;
      display: inline-flex;
      flex-direction: column;
      margin: 10px
  }
  .deviceItem_top{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex:1
  }
.spanWidth{
    width: 160px;
    font-size: 14px
}
.spanTag{
 width: 40px; 
 text-align: center;
 font-size: 12px;
 color:#333;
}
.spanTag1{
 border-color: rgb(19, 206, 102); 
 background-color: rgb(19, 206, 102);
}
.spanTag2{
  border-color: rgba(230,162,60);
 background-color: rgba(230,162,60);
}
.spanTag3{
border-color: rgba(230,162,60,.2);
 background-color:rgba(230,162,60,.2);
}

</style>
