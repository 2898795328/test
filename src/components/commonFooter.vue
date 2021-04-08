<template>
  <div>
    <div class="footer">
      <p>首页</p>
      <p>个人中心</p>
      <p>联系</p>
      <p>关于</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.footer {
  margin: 0 auto;
  background-color: black;
  color: white;
  display: flex;
  width: 80%;
  justify-content: space-around;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>