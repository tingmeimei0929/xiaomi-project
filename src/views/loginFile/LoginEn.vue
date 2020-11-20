<template>
  <div class="container">
    <div class="top">
      <a href="https://www.mi.com/index.html"
         class="logo"></a>
    </div>
    <div class="middle">
      <div class="type">
        <div class="login-title">
          <router-link to="/LoginEn/"
                       class="user">Sign in</router-link>
          <span></span>
          <router-link to="/LoginEn/QrEn"
                       class="linkColor">Scan QR code</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li @click="simple"><a>简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a class="font-type">English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">FAQ</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">Privacy Policy</a></li>
      </ul>
      <p>Xiaomi Inc., All rights reserved - Beijing ICP - 10046444 - <img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">Beijing Public Security ICP-11010802020134 - Beijing ICP licence No. - 110507</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginEn',
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
