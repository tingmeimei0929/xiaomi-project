<template>
  <div class="container">
    </router-view>
    <div class="top">
      <a href="https://www.mi.com/index.html"
         class="logo"></a>
    </div>
    <div class="middle">
      <div class="type">
        <div class="login-title">
          <router-link to="/Login/"
                       class="user">账号登录</router-link>
          <span></span>
          <router-link to="/Login/Qr"
                       class="linkColor">扫码登录</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li @click="simple"><a class="font-type">简体</a><i class="icon iconfont el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="icon iconfont el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="icon iconfont el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">常见问题</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隐私设置</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  mounted: function() {
    console.log("hhhhhh")
  },
  methods: {
    complex () {
      this.$router.push({
        path: '/LoginFan'
      })
    },
    foreign () {
      this.$router.push({
        path: '/LoginEn'
      })
    },
    simple () {
      this.$router.push({
        path: '/Login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/login.scss");
</style>
