<template>
  <div>
      <h1>这是动态页面</h1>
      <div class="aa">{{time}}</div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      time:5,
      number:null,
    }
  },
  watch:{},
  computed:{},
  methods:{
    aa(){
      this.number=setInterval(() => {
        this.time--;
        console.log(this.time);
        if(this.time==0){
          clearInterval(this.number);
          this.$router.go(-1);
        }
      }, 1000);
    }
  },
  created(){
    this.aa();
  },
  mounted(){}
}
</script>
<style scoped>
  .aa{
    margin:0 auto;
    width:50px;
    height:50px;
    background-color:black;
    color:whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>