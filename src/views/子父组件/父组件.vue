<template>
    <div class="aa">
        <!-- <p>这是父组件:</p> -->
        <p>这是父组件：<span>{{zi}}</span></p>
        <!-- 使用父组件传值 -->
        <children :fu="name" @zi="go"/>
    </div>
</template>

<script>
import zi from "./子组件";
export default {
  components:{
    children:zi,
  },
  props:{},
  data(){
    return {
       name:"这是父组件",
       zi:"",
    }
  },
  watch:{},
  computed:{},
  methods:{
    go(val){
        this.zi=val;
        console.log(this.zi);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
    .aa{
        margin:0 auto;
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        color:whitesmoke;
    }
</style>