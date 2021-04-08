<template>
  <div>
    <div class="aa">
      <p>这是commonHeader的子组件</p>
      <p>about组件</p>
    </div>
    <as/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import foot from '../components/commonFooter.vue';
export default {
  components: {
    as:foot
  },
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
.aa {
  margin:0 auto;
  width: 80%;
  /* height: 40px; */
  background-color: black;
  color: wheat;
  text-align: center;
  /* position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px; */
}
</style>