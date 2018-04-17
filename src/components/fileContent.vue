<template>
   <div class="file-content">
        <el-card shadow="hover" v-for="(item,index) in classData" :key="index">
           <div class="cardItem" @click="gotoView"> 
             <div class="cardLeft">
                 <el-button type="warning" icon="el-icon-star-off" circle></el-button>
             </div>
             <div class="cardRight">
                 <p class="cardRight-content">{{myclass}}{{item.name}}</p> 
            </div>
           </div>   
        </el-card>
   </div>
</template>

<script>
export default {
    name:'fileContent',
    props:['myclass'],
    data(){
       return{
           classData:[
               {name:"年级一班"},{name:"年级二班"},{name:"年级三班"},{name:"年级四班"},
               {name:"年级五班"},{name:"年级六班"},{name:"年级七班"},{name:"年级八班"},
               {name:"年级九班"},{name:"年级十班"},{name:"年级十一班"},{name:"年级十二班"},
           ]
       }
    },
     methods:{
        gotoView(){
            console.log("lalalalal")
          this.$router.push({path:'/showClassFile'});
        },
    }

}
</script>

<style scoped>
.file-content{
     height:100%;
     width:100%;
     display: flex; 
     flex-wrap: wrap;
}
.el-card{
    margin: 10px;
    width: 200px;
    height: 100px;
}

.el-card__body{
   padding: 0;
}
.cardItem{
    height: 100%;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}
.cardLeft{
   flex: 1;
}
.cardRight{
   flex:1;
}
.cardRight-content{
display:-webkit-box; 
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical; 
overflow: hidden;
color: #505458;
}
</style>
