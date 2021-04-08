<template>
    <div class="aa">
        <p>这是新页面</p>
        <!-- <button @click="aa">使用name+params接收</button> -->
        <div v-for="(item,index) in stud" :key="index">
        <p>姓名：{{item.name}}</p>
        <p>性别：{{item.age}}</p>
    <!-- <router-view/> -->
      </div>
    </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      stud:null,
    }
  },
  watch:{},
  computed:{},
  methods:{
      aa(){
        this.stud=this.$route.params.stu;
        console.log(this.stud);
      }
  },
  // created  >>  当这个页面加载的时候，最先去执行created里面的内容
  // 一般情况  created里面用来在页面跳转的时候就执行某个方法刷新数据
  created(){
    this.aa();
  },
  mounted(){}
}
</script>
<style scoped>
.aa{
  width:80%;
  background-color:red;
  position: fixed;
  left:50%;
  transform: translateX(-50%);
  text-align:center;
  font-size:0.1px;
}
</style>