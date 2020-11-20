<template>
   <el-form class="login-type"  :rules="rules" :model="ruleForm" ref="ruleForm">
    <el-form-item class="account" prop="account">
      <el-input type="text"
             placeholder="Email/Phone/Mi Account"
             name="username"
             id="userName"
             v-model="ruleForm.account">
    </el-input>
    </el-form-item>
    <el-form-item class="account last" prop="password">
      <el-input type="password"
             placeholder="password"
             name="password"
             id="password"
             v-model="ruleForm.password">
     </el-input>
    </el-form-item>
    <!-- <div class="small"
         v-show="prompt">
      <i class="el-icon-alibaocuo"></i>
      <span class="errorPrompt">{{errorMsg}}</span>
    </div> -->
    <el-button type="primary" class="button"  @click="submitForm('ruleForm')">Sign in</el-button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="smscode">Sign in with SMS</a></div>
        <div class="other-login-type">
          <a @click="signup">Create account</a>
          <span>|</span>
          <a @click="forget">Forgot password?</a>
        </div>
      </div>
      <fieldset>
        <legend>More options</legend>
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
  name: 'AccountEn',
  data () {
    // <!--验证账号-->
    const account = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Enter your email address or phone number'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Enter your password'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: 'Enter your email address or phone number', trigger: 'blur' },
          {
            pattern: /^(?!(\d+)$)[a-zA-Z\d_]{4,20}$/,
            message: '账号长度4-20，可包括数字、字母、下划线',
            trigger: 'blur'
          }
        //   {
        //     pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        //     message: '请输入有效的邮箱账号',
        //     trigger: 'blur'
        //   },
        //   {
        //     pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        //     message: '请输入正确的11位手机号码',
        //     trigger: 'blur'
        //   },
        //   { validator: account, trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Enter your password', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
            message: 'The account ID or password you entered is incorrect.',
            trigger: 'blur'
          },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signup () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    },
    forget () {
      this.$router.push({
        path: '/ForgetEn'
      })
    },
    smscode () {
      this.$router.push({
        path: '/LoginEn/SMSEn'
      })
    },
    // <!--提交登录-->
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('登录成功！')
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
