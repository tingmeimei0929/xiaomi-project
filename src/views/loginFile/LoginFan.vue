<template>
  <div class="container">
    <div class="top">
      <a href="https://www.mi.com/index.html"
         class="logo"></a>
    </div>
    <div class="middle">
      <div class="type">
        <div class="login-title">
          <router-link to="/LoginFan/"
                       class="user">帳號登入</router-link>
          <span></span>
          <router-link to="/LoginFan/QrFan"
                       class="linkColor">二維碼登入</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li @click="simple"><a>简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a class="font-type">繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">常見問題</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隱私政策</a></li>
      </ul>
      <p>小米公司版權所有-京ICP備10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公網安備11010802020134號-京ICP證110507號</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginFan',
  data () {
    return {
      username: '',
      password: ''
    }
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
    },
    signup () {
      this.$router.push({
        path: '/Registered'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/login.scss");
</style>
