<template>
    <div>
        <div class="aa">
            <p>首页</p>
            <p>活动</p>
            <p>新闻</p>
            <p>动态</p>
            <p>个人中心</p>
        </div>
    <router-view/>
    </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
    .aa{
        margin: 0 auto;
        background-color:rgb(221, 114, 231);
        display: flex;
        width: 80%;
        justify-content: space-around;
    }
</style>