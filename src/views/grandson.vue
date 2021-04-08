<template>
  <div>
    <h3>这是common Header的孙组件</h3>
    <div class="grand">
      <div v-for="(item,index) in gra" :key="index">
        <p>名字：{{item.name}}</p>
        <p>年龄:{{item.age}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      gra: null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    grand() {
      this.gra = this.$route.query.grand;
      console.log(this.gra);
    },
  },
  created() {
    this.grand();
  },
  mounted() {},
};
</script>
<style scoped>
.grand {
  font-size: 5px;
}
</style>