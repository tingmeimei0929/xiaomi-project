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
            <h4 class="regbox-title">国家/地区</h4>
            <el-form-item prop="country" >
                <el-select v-model="ruleForm.country"  placeholder="中国"  class="regbox-select">
                    <el-option-group v-for="group in countryOptions"
                                :key="group.label"
                                :label="group.label"
                                style="padding-left: 10px;margin-bottom: 6px;line-height: 30px;color: #ef5b00 !important;">
                        <el-option v-for="country in group.options"
                                    :key="country.value"
                                    :label="country.label"
                                    :value="country.value"
                                style="padding: 0 10px;line-height: 39px;clear: both;overflow: hidden;color: #000;border-bottom: 1px solid #e0e0e0;cursor:pointer">
                        </el-option>
                    </el-option-group>
                </el-select>
            </el-form-item>
            <div class="small">成功注册账号后，国家/地区将不能被修改</div>
            <h4 class="regbox-title">手机号码</h4>
            <div class="regbox-select" >
                <el-form-item prop="countryCode" class="countryCode">
                    <el-select class="block-main" v-model="ruleForm.countryCode">
                        <el-option-group v-for="itemGroup in phoneOptions"
                                :key="itemGroup.label"
                                :label="itemGroup.label"
                                style="padding-left: 10px;margin-bottom: 6px;line-height: 30px;color: #ef5b00 !important;">
                            <el-option v-for="countryCode in itemGroup.options"
                                        :key="countryCode.value"
                                        :label="countryCode.label"
                                        :value="countryCode.value">
                                <span style="float:left">{{countryCode.value}}</span>
                                <span style="float:right;color:#9d9d9d;font-size:12px">{{countryCode.label}}</span>
                            </el-option>
                        </el-option-group>
                    </el-select>
                 </el-form-item>
                <el-form-item class="aside-phone" prop="tel">
                    <el-input type="text"
                            v-model="ruleForm.tel"
                            placeholder="请输入手机号码">
                    </el-input>
                </el-form-item>
            </div>
            <h4 class="regbox-title">图形验证码</h4>
            <el-form-item prop="verifyCode" >
                <el-input placeholder="图片验证码"
                          type="text"
                          v-model="ruleForm.verifyCode"
                          class="identifyInput">
                </el-input>
                <div @click="refreshCode" class="identifyCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
            </el-form-item>
            <el-button class="btn" @click="submitForm('ruleForm')">立即注册</el-button>
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
    // <!--验证手机号是否合法-->
    const checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else {
        const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的11位手机号码'))
        }
      }
    }
    // 验证图片验证码
    const checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入图片验证码'))
      } else if (value !== this.identifyCode) {
        console.log('checkCode:', value)
        callback(new Error('图片验证码错误！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        tel: '',
        country: '',
        countryCode: '',
        imageVerification: '',
        verifyCode: ''
      },
      rules: {
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入图片验证码', trigger: 'blur' },
          { validator: checkCode, trigger: 'blur' }
        ]
      },
      countryOptions: [
        {
          label: 'A',
          options: [
            {
              value: 'Afghanistan',
              label: '阿富汗'
            },
            {
              value: 'Albania',
              label: '阿尔巴尼亚'
            },
            {
              value: 'Algeria',
              label: '阿尔及利亚'
            },
            {
              value: 'American Samoa',
              label: '美属萨摩亚'
            },
            {
              value: 'Andorra',
              label: '安道尔'
            },
            {
              value: 'Angola',
              label: '安哥拉'
            },
            {
              value: 'Anguilla',
              label: '安圭拉'
            },
            {
              value: 'Antarctica',
              label: '南极洲'
            }
          ]
        },
        {
          label: 'B',
          options: [
            {
              value: 'Bahamas',
              label: '巴哈马'
            },
            {
              value: 'Bahrain',
              label: '巴林'
            },
            {
              value: 'Bangladesh',
              label: '孟加拉国'
            },
            {
              value: 'Barbados',
              label: '巴巴多斯'
            },
            {
              value: 'Belarus',
              label: '白俄罗斯'
            },
            {
              value: 'Belgium',
              label: '比利时'
            },
            {
              value: 'Bhutan',
              label: '不丹'
            },
            {
              value: 'Bolivia',
              label: '玻利维亚'
            }
          ]
        },
        {
          label: 'C',
          options: [
            {
              value: 'China',
              label: '中国'
            },
            {
              value: 'Cambodia',
              label: '柬埔寨'
            },
            {
              value: 'Cameroon',
              label: '喀麦隆'
            },
            {
              value: 'Canada',
              label: '加拿大'
            },
            {
              value: 'Central Africa',
              label: '中非'
            }
          ]
        },
        {
          label: 'D',
          options: [
            {
              value: 'Denmark',
              label: '丹麦'
            },
            {
              value: 'Dolnik',
              label: '多尔尼克'
            },
            {
              value: 'Bukit',
              label: '布吉提'
            },
            {
              value: 'Dominica',
              label: '多米尼加'
            }
          ]
        },
        {
          label: 'E',
          options: [
            {
              value: 'Ecuador',
              label: '厄瓜尔多'
            },
            {
              value: 'Egypt',
              label: '埃及'
            },
            {
              value: 'quatorial Guinea',
              label: '赤道几内亚'
            },
            {
              value: 'Ethiopia',
              label: '埃塞俄比亚'
            },
            {
              value: 'Eritrea',
              label: '厄立特里亚'
            }
          ]
        }
      ],
      phoneOptions: [
        {
          label: 'A',
          options: [
            {
              label: '+93',
              value: '阿富汗'
            },
            {
              label: '+335',
              value: '阿尔巴尼亚'
            },
            {
              label: '+213',
              value: '阿尔及利亚'
            },
            {
              label: '+1',
              value: '美属萨摩亚'
            },
            {
              label: '+376',
              value: '安道尔'
            },
            {
              label: '+244',
              value: '安哥拉'
            },
            {
              label: '+1',
              value: '安圭拉'
            },
            {
              label: '+672',
              value: '南极洲'
            }
          ]
        },
        {
          label: 'B',
          options: [
            {
              label: '+1',
              value: '巴哈马'
            },
            {
              label: '+973',
              value: '巴林'
            },
            {
              label: '+880',
              value: '孟加拉国'
            },
            {
              label: '+1',
              value: '巴巴多斯'
            },
            {
              label: '+375',
              value: '白俄罗斯'
            },
            {
              label: '+32',
              value: '比利时'
            },
            {
              label: '+975',
              value: '不丹'
            },
            {
              label: '+591',
              value: '玻利维亚'
            }
          ]
        },
        {
          label: 'C',
          options: [
            {
              label: '+86',
              value: '中国'
            },
            {
              label: '+855',
              value: '柬埔寨'
            },
            {
              label: '+237',
              value: '喀麦隆'
            },
            {
              label: '+1',
              value: '加拿大'
            },
            {
              label: '+236',
              value: '中非'
            }
          ]
        },
        {
          label: 'D',
          options: [
            {
              label: '+45',
              value: '丹麦'
            },
            {
              label: '+1',
              value: '多尔尼克'
            },
            {
              label: '+253',
              value: '布吉提'
            },
            {
              label: '+1',
              value: '多米尼加'
            }
          ]
        },
        {
          label: 'E',
          options: [
            {
              label: '+593',
              value: '厄瓜尔多'
            },
            {
              label: '+20',
              value: '埃及'
            },
            {
              label: '+240',
              value: '赤道几内亚'
            },
            {
              label: '+251',
              value: '埃塞俄比亚'
            },
            {
              label: '+291',
              value: '厄立特里亚'
            }
          ]
        }
      ],
      identifyCodes: '1234567890abcdefggijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ',
      identifyCode: ''
    }
  },
  components: {
    SIdentify
  },
  mounted () {
    //   验证码初始化
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
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
    // 生成随机数
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 5)
    },
    // 生成四位随机验证码
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
    // <!--提交登录-->
    //  submitForm() {
    //      this.$refs.ruleForm.validator(valid => {
    //          if (valid) {
    //              this.$store.dispatch('Registered', this.ruleForm).then(res => {
    //                  this.$router.push({path: '/'})
    //              })
    //          }
    //      })
    // }
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.logining = true
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
