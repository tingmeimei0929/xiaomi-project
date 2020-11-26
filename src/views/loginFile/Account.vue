<template>
  <el-form class="login-type" status-icon :rules="rules" :model="ruleForm" ref="ruleForm" :visible.sync="isLogin">
    <el-form-item class="account" prop="username">
      <el-input type="text"
             placeholder="邮箱/手机号码/小米ID"
             name="username"
             id="username" v-model="ruleForm.username">
    </el-input>
    </el-form-item>
    <el-form-item class="account last" prop="password">
      <el-input type="password"
             placeholder="密码"
                name="password"
             id="password" v-model="ruleForm.password">
      </el-input>
    </el-form-item>
    <el-button type="primary"
                class="button"
                @click="submitForm">登录</el-button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="smscode">手机短信登录/注册</a></div>
        <div class="other-login-type">
          <a @click="signup">立即注册</a>
          <span>|</span>
          <a @click="forget">忘记密码?</a>
        </div>
      </div>
      <fieldset>
        <legend>其他登入方式</legend>
      </fieldset>
      <div class="other-type">
        <a href="/pass/sns/login/auth?appid=100284651&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-qq"><i class="icon iconfont el-icon-aliQQ"></i></a>
        <a href="/pass/sns/login/auth?appid=2996826273&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-weibo"><i class="icon iconfont el-icon-aliweibo"></i></a>
        <a href="/pass/sns/login/auth?appid=wxxmzh&scope=snsapi_login&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-zhifubao"><i class="icon iconfont el-icon-alizhifubao1"></i></a>
        <a href="/pass/sns/login/auth?appid=2088011127562160&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
           class="btn-weixin"><i class="icon iconfont el-icon-aliweixin2"></i></a>

      </div>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Account',
  data () {
    // <!--验证账号-->
    const username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        //   用户名以字母开头，长度在5-16之间，允许字母数字下划线
        const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('用户名不正确'))
        }
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
            message: '密码不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    //   获取vuex中的showLogin,控制登录组件是否显示
    isLogin: {
        get() {
            return this.$store.getters.getShowLogin
        },
        set(val) {
            this.$refs["ruleForm"].resetFields()
            this.$setShowLogin(val)
        }
    }
  },
  methods: {
    ...mapActions(['setUser', 'setShowLogin']),
    submitForm () {
      // 通过element自定义表单校验规则，校验用户输入的用户信息
      this.$refs.ruleForm.validate(valid => {
        //   如果通过校验开始登录
        if (valid) {
          this.axios.post('/api/wddjnn/user//login', {
            userName: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(res => {
            if (res.data.code === 200 && res.data.result === true) {
              // 登录信息存到本地
              let user = JSON.stringify(res.data.userName)
              localStorage.setItem("user", user)
              console.log(user)
              // 登录信息存到vuex
              this.setUser(res.data.user)
              this.$notify({
                message: '登录成功'
              })
              this.$router.push({ path: "/" });
            } else {
              // 清空输入框的校验状态
              this.$refs['ruleForm'].resetFields()
              this.$notify({
                message: '登录失败'
              })
            }
          }).catch(err => {
              return Promise.reject(err)
            })
        } else{
            return false
         }
      })
    },
    signup () {
      this.$router.push({
        path: '/Registered'
      })
    },
    forget () {
      this.$router.push({
        path: '/Forget'
      })
    },
    smscode () {
      this.$router.push({
        path: '/Login/SMS'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/login.scss");
</style>
