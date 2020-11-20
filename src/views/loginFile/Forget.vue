<template>
  <div class="wrapper">
    <div class="header">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h2 class="header-title">重置密码</h2>
      <el-form class="form-row">
        <h4>请输入注册的邮箱地址、手机号码或小米账号</h4>
        <div class="inputBox">
          <input type="text"
                 placeholder="邮箱/手机号码/小米账号">
        </div>
        <div class="small">
          <i class="el-icon-alibaocuo"></i>
          <span class="errorPrompt">{{errorMsg}}</span>
        </div>
        <p>用户输入手机号码时请正确选择区域前缀。如: 台湾： +8869******，香港: +8526****** <a @click="selcetCountry">选择国家码</a></p>

        <button>下一步</button>
      </el-form>
    </div>
    <div class="footer">
      <ul>
        <li @click="simple"><a class="font-type">简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">常见问题</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隐私设置</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>

    <div class="select-box"
         v-show="showSelect">
            <div class="select-country">
                <div class="header-text">请选择地区代码
                <a @click="closeBox"></a>
                </div>
                <div class="regbox-select">
                    <div class="select-block">
                        <div class="block-main"
                            @click.stop="showCountry">
                        中国(+86)</div>
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
                <button @click="submitBox">确定</button>
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
      errorMsg: '请输入账号',
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
        path: '/Login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/forget.scss");
</style>
