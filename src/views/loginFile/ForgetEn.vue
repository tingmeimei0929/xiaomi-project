<template>
  <div class="wrapper">
    <div class="header">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h2 class="header-title">Reset password </h2>
      <el-form class="form-row">
        <h4>Enter email or phone</h4>
        <div class="inputBox">
          <input type="text"
                 placeholder="Email or phone number">
        </div>
        <div class="small">
          <i class="el-icon-alibaocuo"></i>
          <span class="errorPrompt">{{errorMsg}}</span>
        </div>
        <p>
        Add country code for phone numbers outside of Mainland China (e.g. Hong Kong "+852 5555 5555")
        <a @click="selcetCountry">Look up country code</a></p>

        <button>Next</button>
      </el-form>
    </div>
    <div class="footer">
      <ul>
        <li @click="simple"><a>简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a class="font-type">English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">常见问题</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隐私设置</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>

    <div class="select-box"
         v-show="showSelect">
      <div class="select-country">
        <div class="header-text">Select a country code
          <a @click="closeBox"></a>
        </div>
        <div class="regbox-select">
          <div class="select-block">
            <div class="block-main"
                 @click.stop="showCountry">
              China(+86)‎</div>
            <div class="block-aside"
                 @click="hideCountry"></div>
          </div>
          <div class="country-list"
               v-show="country">
            <p>11</p>
            <p>11</p>
            <p>11</p>
            <p>11</p>
            <p>11</p>
            <p>11</p>

          </div>
        </div>
        <button @click="submitBox">ok</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Forget',
  data () {
    return {
      country: false,
      errorMsg: 'Enter your email address or phone number',
      showSelect: false
    }
  },
  methods: {
    showCountry () {
      this.country = !this.country
    },
    selcetCountry () {
      this.showSelect = !this.showSelect
    },
    closeBox () {
      this.showSelect = !this.showSelect
    },
    submitBox () {
      this.showSelect = !this.showSelect
    },
    hideCountry () {
      this.country = false
    },
    handleOtherClick (e) {
      console.log(e.target)
      if (e.target.className !== 'block-main') {
        this.country = false
        this.phoneNum = false
      }
    },
    complex () {
      this.$router.push({
        path: '/ForgetFan'
      })
    },
    foreign () {
      this.$router.push({
        path: '/ForgetEn'
      })
    },
    simple () {
      this.$router.push({
        path: '/Forget'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/forget.scss");
</style>
