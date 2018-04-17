<template>
  <div class="hello">
  <el-container>
  <el-header>
    <div class="headerLeft">
       <a class="logoToBack">江苏中协</a>
    </div>
    <div class="headerRight">
           <p class="date">{{ date }}</p> 
           <p class="time">{{ time }}</p> 
    </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
    <el-upload
     class="avatar-uploader"
     action="https://jsonplaceholder.typicode.com/posts/"
     :show-file-list="false"
     :on-success="handleAvatarSuccess"
     :before-upload="beforeAvatarUpload">
     <img v-if="imageUrl" :src="imageUrl" class="avatar">
     <i v-else class="el-icon-plus avatar-uploader-icon"></i>
   </el-upload>
   <ul>
     <li class="title">1</li>
     <li class="title">2</li>
     <li class="title">3</li>
     <li class="title">4</li>
     <li class="title">5</li>
     <li class="title">6</li>
   </ul>
    </el-aside>
    <el-main>
      <task-edit></task-edit>
    </el-main>
  </el-container>
</el-container>
        
  </div>
</template>

<script>
import taskEdit from './taskEdit'
var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; 
export default {
  name: 'HelloWorld',
  data () {
    return {
        time: '', 
        date: '' ,
        imageUrl: ''
    }
  },
  methods:{
   updateTime(){ 
    var cd = new Date(); 
    this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2); 
    this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]; 
   },
   zeroPadding(num, digit) { 
    var zero = ''; 
    for(var i = 0; i < digit; i++) { 
        zero += '0'; 
    } 
    return (zero + num).slice(-digit); 
     } ,
   handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
   beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
   handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
   handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  components:{
    taskEdit
  },
  mounted(){
        this.$nextTick(function(){
          setInterval(this.updateTime, 1000);
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  width: 100%;
}
  .el-header{
    background-color:white;
  }
  
  .headerLeft{
    float: left;
    font-size: 20px;
    color: #70b6f9;
    height: 100%;
    width: 250px;
    text-align: center;
  }
  .headerRight{
    float: right;
    margin-right: 40px;
    color: #70b6f9;
    height: 100%;
  }
  .date{
    font-size: 18px;
     float: left;
     text-align: center;
  }
  .time{
    font-size: 20px;
     float: right;
    text-align: center;
  }
  .logoToBack{
    float: left;
    height: 100%;
    font-size: 20px;
    color: #70b6f9;
    font-weight: 700;
    width: 250px;
    text-align: center;
    line-height: 90px
  }
  .el-aside {
    background-color:white;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .title{
    height: 44px;
    width: 100%
  }
</style>
