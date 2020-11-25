<template>
  <div class="wrapper">
    <div class="layout-main">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h4 class="layout-title">注册小米账号</h4>
      <el-form class="layout-table" :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="regbox">
            <el-form-item class="account" prop="newUserName">
                <el-input type="text"
                        placeholder="邮箱/手机号码/小米ID"
                        name="username" v-model="ruleForm.newUserName">
                </el-input>
            </el-form-item>
            <el-form-item class="account last" prop="newPassword">
                <el-input type="password"
                        placeholder="密码"
                            name="password"
                        id="password" v-model="ruleForm.newPassword">
                </el-input>
            </el-form-item>
            <el-button class="btn" @click="submitForm">立即注册</el-button>
        </div>
        <div class="privacy_box">
          <p>已阅读并同意：小米<a>用户协议</a>和<a>隐私政策</a></p>
        </div>
      </el-form>
    </div>
    <div class="layout-bottom">
      <ul>
        <li @click="simple"><a class="font-type">简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">常见问题</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>
  </div>
</template>

<script>
import SIdentify from '../../components/SIdentify'
export default {
  name: 'Registered',
  data () {
    //   用户名的校验方法
    let newUserName = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('请输入账号'))
        }
        // 用户名以字母开头，长度在5-16之前，允许字母数字下划线
        const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('用户名不正确'))
        }
    }
    return {
      ruleForm: {
          newUserName: '',
          newPassword: ''
      },
      rules: {
        newUserName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { validator: newUserName, trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
            message: '密码不正确',
            trigger: 'blur'
          },
          { validator: newPassword, trigger: "blur" }
        ]
      }
    }
  },
  components: {
    SIdentify
  },
  methods: {
    complex () {
      this.$router.push({
        path: '/RegisteredFan'
      })
    },
    foreign () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    },
    simple () {
      this.$router.push({
        path: '/Registered'
      })
    },
    submitForm() {
        this.$refs.ruleForm.validate(valid => {
            if (valid) {
                let data = {'userName': this.ruleForm.newUserName, 'userPassword': this.ruleForm.newPassword}
                this.axios.post('/api/wddjnn/user/register', data).then((res) => {
                    console.log(res)
                    console.log(data)
                    if (res.data.code === 200) {
                        this.$notify({
                            title: '注册成功'
                        })
                        this.userName = ''
                        this.userPassword = ''
                        this.$router.push({
                            path: '/Login'
                        })
                    } else {
                        this.$notify({
                            title: '注册失败',
                            message: '该用户名已存在～'
                        })
                    }
                })
            }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/registered.scss");
</style>
<style lang="scss">
.regbox-select{
    &.el-select{
      display: initial;
    }
}
.countryCode{
    float: left;
}
</style>
