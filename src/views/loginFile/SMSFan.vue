<template>
  <el-form class="login-type" :rules="rules" :model="ruleForm" ref="ruleForm">
    <el-form-item  class="smsPush" prop="tel" >
      <div class="number">+86</div>
      <div class="phoneInput" >
        <el-input type="text"
               placeholder="手機號碼"
               name="tel"
               id="tel" v-model="ruleForm.tel">
        </el-input>
      </div>
    </el-form-item>
    <el-form-item class="smsPush last"  prop="smscode">
        <el-input type="text"
               placeholder="短信驗證碼"
               name="smscode"
               class="smsInput "
               id="smscode" v-model="ruleForm.smscode">
        </el-input>
        <div class="smsBtn" >
            <a @click="countDown" :class="{disabled: !this.canClick}" >{{ content }}</a>
        </div>
    </el-form-item>
    <!-- <div class="small"
         v-show="prompt">
      <i class="el-icon-alibaocuo"></i>
      <span class="errorPrompt">{{errorMsg}}</span>
    </div> -->
    <el-button class="button" @click="submitForm('ruleForm')">立即登入/注冊</el-button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="usercode">用戶名密碼登入</a></div>
        <div class="other-login-type">
          <a @click="code">收不到驗證碼？</a>
        </div>
      </div>
      <fieldset>
        <legend>其他登入方式</legend>
      </fieldset>
      <div class="other-type">
        <a href="/pass/sns/login/auth?appid=100284651&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-qq"><i class="el-icon-aliQQ"></i></a>
        <a href="/pass/sns/login/auth?appid=2996826273&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-weibo"><i class="el-icon-aliweibo"></i></a>
        <a href="/pass/sns/login/auth?appid=wxxmzh&scope=snsapi_login&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-zhifubao"><i class="el-icon-alizhifubao1"></i></a>
        <a href="/pass/sns/login/auth?appid=2088011127562160&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-weixin"><i class="el-icon-aliweixin2"></i></a>
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'SMSFan',
  data () {
    // <!--验证手机号是否合法-->
    const checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請輸入手機號'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手機號格式不正確'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    const checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請輸入簡訊驗證碼'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        tel: '',
        smscode: ''
      },
      rules: {
        tel: [
          { required: true, message: '請輸入手機號', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ],
        smscode: [
          { required: true, message: '請輸入簡訊驗證碼', trigger: 'blur' },
          { validator: checkSmscode, trigger: 'blur' }
        ]
      },
      content: '獲取驗證碼',
      flag: true,
      totalTime: 60,
      canclick: true
    }
  },
  methods: {
    usercode () {
      this.$router.push({
        path: '/Login/Account'
      })
    },
    code () {
      this.$router.push({
        path: '/CodeRules'
      })
    },
    countDown () {
      if (!this.canclick) {
        return
      }
      this.canclick = false
      this.content = '重新發送(' + this.totalTime + ')'
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = '重新發送(' + this.totalTime + ')'
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.content = '獲取驗證碼'
          this.totalTime = 60
          this.canclick = true
        }
      }, 1000)
    },
    // 验证手机号
    checkMobile (str) {
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (reg.test(str)) {
        return true
      } else {
        return false
      }
    },
    // <!--提交登录-->
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          setTimeout(() => {
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
          }, 400)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/login.scss");
</style>
