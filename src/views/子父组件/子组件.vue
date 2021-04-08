<template>
    <div class="bb">
        <p>这是子组件:<span v-text="fu"></span></p>
        <button @click="children">向父组件传值</button>
    </div>
</template>

<script>
export default {
  components:{},
  props:{
      fu:{
          type:String,
      }
  },
  data(){
    return {
        names:"这是子组件",
    }
  },
  watch:{},
  computed:{},
  methods:{
    children(){
        this.$emit("zi",this.names);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
    .bb{
        background-color: red;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>