<template>
<div style="width:100%;height:100%;background:white">
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">上</el-radio-button>
    <el-radio-button label="right">右</el-radio-button>
    <el-radio-button label="bottom">下</el-radio-button>
    <el-radio-button label="left">左</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 100%;">
    <el-tab-pane v-for="(data,index) in tableData" :key="index" :label="data.name">
        <file-Content :myclass="data.id"></file-Content>
      </el-tab-pane>
  </el-tabs>
</div> 
</template>

<script>
import fileContent from './fileContent';
export default {
    name:'fileComponent',
    data(){
        return {
             tabPosition: 'top',
             tableData:[
               {name:"一年级",id:1},
               {name:"二年级",id:2},
               {name:"三年级",id:3},
               {name:"四年级",id:4},
               {name:"五年级",id:5},
               {name:"六年级",id:6},
             ]
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{fileContent},
}
</script>

<style scoped>
  .content{
    width:100%;
    height:calc(100% - 75px);
  }
</style>
