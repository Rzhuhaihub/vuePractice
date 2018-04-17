<template>
<div style="width:100%;height:100%;background: white">
    <div style="height:50px;padding-top:25px">
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/fileComponent' }">课堂音频文件</el-breadcrumb-item>
        <el-breadcrumb-item>课程列表</el-breadcrumb-item>
</el-breadcrumb>
    </div>
   <div class="showClassFile">
        <div shadow="hover" v-for="(item,index) in classData" :key="index" class="el-card">
           <div class="cardItem"> 
             <div class="cardLeft">
                 <el-button type="warning" icon="el-icon-star-off" circle></el-button>
             </div>
             <div class="cardRight">
                 <p class="cardRight-content">{{item.name}}</p>
                 <p class="cardRight-content">{{item.time}}</p>  
            </div>
           </div>   
        </div>
   </div>
</div> 
</template>

<script>
export default {
    name:'showClassFile',
    data(){
     return{
          classData:[
              {name:'线性代数',time:'09:00:00'},
              {name:'线性代数',time:'09:00:00'},
              {name:'线性代数',time:'09:00:00'},
              {name:'线性代数',time:'09:00:00'},
              {name:'线性代数',time:'09:00:00'},
          ]
     }
    },

}
</script>

<style scoped>
   .showClassFile{
     height:100%;
     width:100%;
     display: flex; 
     flex-wrap: wrap;
   }
 .el-card{
    margin: 10px;
    width: 200px;
    height: 200px;
    padding: 0px;
}

.el-card__body{
   padding: 0px;
}
.cardItem{
    height: 100%;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.cardLeft{
   flex: 1.3;
   width:100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
.cardRight{
   flex:1;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column
}
.cardRight-content{
color: #505458;
margin: 0;
}
</style>
