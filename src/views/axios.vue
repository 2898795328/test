<template>
  <div>
    <p>这是axios页面</p>
    <button @click="fnGetData">数据请求</button>
    <div v-for="(item, index) in arr" :key="index">
      <!-- <p>{{ item.floor_title.image_src}}</p> -->
        <!-- <p>{{ item.floor_title.name }}</p> -->
          <img :src="item.floor_title.image_src" alt="" />

          <!-- <div v-for="(item,index) in list" :key="index"> -->
          <div class="aa">
            <div class="bb">
              <p class="font_size">{{ item.product_list[0].name }}</p>
              <p class="font_size">{{ item.product_list[1].name }}</p>
              <p class="font_size">{{ item.product_list[2].name }}</p>
              <p class="font_size">{{ item.product_list[3].name }}</p>
              <p class="font_size">{{ item.product_list[4].name }}</p>
            </div>
            <div class="cc">
              <img :src="item.product_list[0].image_src" alt="" class="img" />
              <img :src="item.product_list[1].image_src" alt="" class="img" />
              <img :src="item.product_list[2].image_src" alt="" class="img" />
              <img :src="item.product_list[3].image_src" alt="" class="img" />
              <img :src="item.product_list[4].image_src" alt="" class="img" />
            </div>
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
      arr: "",
      list: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnGetData() {
      this.$http({
        // url >> 请求地址
        // dataType >> 请求成功后，后台返回的格式
        // method >>数据请求的方式
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
        dataType: "json",
        method: "GET",
        data: {},
      })
        .then((succeed) => {
          //   console.log(succeed.data.message);
          this.arr = succeed.data.message;
          this.list = succeed.data.message;
          console.log(this.list);
          // alert(succeed.data.meta.msg);
        })
        .catch((err) => {
          console.log(err);
          alert("请求失败！！！！！！！");
        });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
$font_size = 10px;
$img = 100px;

img {
//   margin-right: 10px;
//   font-size: $font_size;
}

.img {
  width: $img;
}

display() {
 margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top 10px;
}

.aa {
  display();
  flex-direction: column;
  width 80%;
//   background-color blue;
  .bb {
    display();
    width 100%;
    justify-content: space-around;
    // background-color red;
  }

  .cc {
    display();
    width:100%;
    justify-content: space-around;

  }
}
</style>