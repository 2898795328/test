<template>
  <div>
    <div class="aa">
      <p>使用全局$修改样式</p>
    </div>
    <div class="bb">
      <p>使用方法定义样式</p>
    </div>
    <div class="cc">
        <p>使用继承</p>
        <div class="dd">
            <p>嵌套</p>
        </div>
    </div>
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
<style lang="stylus" scoped>
$common_background = red;
$common_fontsize = 30 px;

.aa {
  background-color: $common_background;
  font-size: $common_fontsize;
}

aa() {
  background-color: black;
  color: white;
  font-size: 30px;
}

.bb{
    // 调用方法
    aa();
}
.cc{
    @extend .aa;
    .dd{
        @extend .bb;
        padding:5px;
    }
}
</style>