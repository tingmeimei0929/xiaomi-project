<template>
  <div class="tool-bar">
    <a>
      <div class="img-icon">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
             class="static">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
             class="hover">
      </div>
      <div class="qr-content">
        <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png">
        <p>
          扫码领取新人百元礼包
        </p>
      </div>
    </a>
    <a>
      <div class="img-icon">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
             class="static">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
             class="hover"
             @click="personal">
      </div>
      <div @click="personal"
           class="text">个人中心</div>
    </a>
    <a>
      <div class="img-icon">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"
             class="static">
        <img data-v-9533281e=""
             src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"
             class="hover"
             @click="personal">
      </div>
      <div @click="personal"
           class="text">售后服务</div>
    </a>
    <a>
      <div class="img-icon">
        <img src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"
             class="static">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
             class="hover"
             @click="personal">
      </div>
      <div @click="personal"
           class="text">人工客服</div>
    </a>
    <a>
      <div class="img-icon">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"
             class="static">
        <img data-v-9533281e=""
             src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
             class="hover"
             @click="cart">
      </div>
      <div class="text"
           @click="cart">购物车</div>
    </a>
    <a class="return-icon"
       href="#"
       v-show="goTop">
      <div class="img-icon">
        <img src="//i1.mifile.cn/f/i/2018/home/totop.png"
             class="static">
        <img src="//i1.mifile.cn/f/i/2018/home/totop_hover.png"
             class="hover">
      </div>
      <div class="text return-top"><a href=".header">回顶部</a></div>
      <el-backtop target=".header" :visibility-height="400"></el-backtop>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      goTop: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    personal () {
      this.$router.push({
        path: '/Login'
      })
    },
    cart () {
      this.$router.push({
        path: '/Cart'
      })
    }
    // handleScroll () {
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   if (this.scrollTop > 349) {
    //     this.goTop = true
    //   } else {
    //     this.goTop = false
    //   }
    // }
  },
  destroyed () {
    window.removeEventListener('scroll', this.showScroll)
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/toolbar.scss");
</style>
