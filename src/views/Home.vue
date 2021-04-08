<template>
  <div>
    <p>这是首页</p>
    <as />
    <router-link :to="{ name: 'test', params: { stu: students } }">
      <button>使用name + params传值</button>
    </router-link>
    <!-- <header/> -->
    <router-link to="about">
      <button>跳转到about</button>
    </router-link>
    <!-- 传值到孙组件 -->
    <router-link :to="{ path: '/grandson', query: { grand: sun } }">
      <button>跳转到孙组件</button>
    </router-link>
    <!-- 动态跳转 -->
    <button @click="dynamic">跳转到动态页面</button><br />
    <button @click="parent">父组件</button>
    <button @click="preprocessor">预处理器</button>
    <router-link to="axios">
      <button>跳转到axios</button>
    </router-link>
    <router-view />
  </div>
</template>

<script>
import header from "../components/commonHeader.vue";
export default {
  components: {
    as: header,
  },
  props: {},
  data() {
    return {
      students: [
        { name: "程先生", age: 18 },
        { name: "阿彪", age: 20 },
        { name: "阿星", age: 17 },
      ],
      sun: [
        { name: "程先生", age: 18 },
        { name: "阿彪", age: 20 },
        { name: "阿星", age: 17 },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    dynamic() {
      this.$router.push({ path: "/dynamic" });
    },
    parent() {
      this.$router.push({ path: "/parent" });
    },
    preprocessor() {
      this.$router.push({ path: "/preprocessor" });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped></style>