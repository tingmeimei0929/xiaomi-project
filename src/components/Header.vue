<template>
  <div class="header">
        <div class="img-nav">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2a9e6db5e3c5374301827435d8595c6.jpg?w=5120&h=240">
        </div>
        <div class="topbar-nav">
            <ul class="topbar-list">
                    <li v-for="(item,index) in topbarInfo" :key="index"><a :href="item.href">{{ item.name }}</a><span class="sep">|</span></li>
            </ul>
            <ul class="topbar-info">
            <li v-if="username">{{ username }}</li>
            <!-- @click="dialogVisible = true"  -->
            <li v-if="!username">
                <router-link to="/Login">登录 <span class="sep">|</span></router-link>
            </li>
            <li @click="signUp" v-if="!username">注册 <span class="sep">|</span></li>
            <li>消息通知</li>
            <li v-if="username">我的订单</li>
            <li class="cartLi"
                @click="cart">
                <i class="icon iconfont el-icon-aligouwuchekong"></i>购物车<span>{{cartCount}}</span>
            </li>
            </ul>
            <!-- <el-dialog title="小米商城用户协议"
                    :visible.sync="dialogVisible" width="800" style="padding: 20px">
                    <div>
                        <h2 class="floatRight">版本日期:2018年12月18日</h2>
                        <p>《小米商城用户协议》（一下简称“本协议”）是您（或称“用户”，指注册、登录
                            使用、浏览器小米商城的个人或组织）与小米科技有限责任公司（平台运营主体）及其关联公司（包括但不限于小米通讯技术有限公司，一下简称“小米”）及其合作单位（包括但不限于第三方商家）之间关于小米商城网站（域名为www.mi.com，简称本网站）与小米产品、程序及服务所订立的协议。小米和合作单位分别就您在本网站接受服务的过程中享受的权利和承担的义务，与您的签订本协议，并独立向您承担责任，互补承担保证、连带或共同责任等。</p>
                        <p class="font-weight">小米再次特别提醒用户认真阅读，充分理解--本协议中个条款。您对本协议的接受即自愿接受全部条款的约束，请您务必谨慎阅读、成份理解个条款内容，特别是免除或者限制责任的条款、法律使用和争议解决条款，由此类条款将以加粗的形式提示您注意。如您同意本协议并完成全部注册程序，即表示您已充分阅读、理解并接受本协议的全部内容，并与小米达成一致，成为小米商城平台用户。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。</p>
                        <h3>一、协议范围</h3>
                        <h4>1.1 【主题范围】</h4>
                        <p>小米商城平台运营主体为小米科技有限责任公司，自营商品的销售主体以小米商城网站页面公示的证件信息为准（包括但不限于小米通讯技术有限公司）。<span clas="font-weight">本协议下，小米商城平台运营主体可能根据平台业务调整而发生变更，变更后的小米商城平台运营主体与您共同履行本协议并向您提供服务，小米商城平台运营主体的变更不会影响您本协议下的权益。</span></p>
                        <h4>1.2【协议补充】</h4>
                        <p>小米隐私政策（http://www.mi.com/about/new-privacy）、小米账号使用均为本协议不可分割的一部分，与本协议具有同等法律效力。</p>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = fasle" >不同意</el-button>
                        <el-button type="primary" @click="dialogVisible = false" v-on:click="login">同意</el-button>
                    </span>
            </el-dialog> -->
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      dialogVisible: false,
      topbarInfo: [
        { href: 'https://www.mi.com/index.html', name: '小米商城' },
        { href: 'https://home.miui.com/', name: 'MIUI' },
        { href: 'https://iot.mi.com', name: 'loT' },
        { href: 'https://i.mi.com', name: '云服务' },
        { href: 'https://jr.mi.com/?from=micom', name: '金融' },
        { href: 'https://youpin.mi.com/', name: '有品' },
        { href: 'https://xiaoai.mi.com/', name: '小爱开放平台' },
        { href: 'https://qiye.mi.com/', name: '企业团购' },
        { href: 'https://www.mi.com/aptitude/list?id=41', name: '资质证照' },
        { href: 'https://www.mi.com/aptitude/list', name: '协议规则' },
        { href: 'https://www.mi.com/appdownload', name: '下载app' },
        { href: 'javascript:;', name: 'Select Location' }]
    }
  },
  computed: {
    ...mapState(['username', 'cartCount'])
  },
  filters: {
    currency (val) {
      if (!val) {
        return '¥' + val.toFixed(2) + '元'
      }
    }
  },
  mounted () {
    this.getProuductList()
    const params = this.$router.params
    if (params && params.from === 'login') {
      this.getCartCount()
    }
  },
  methods: {
    signUp () {
      this.$router.push({
        path: '/Registered',
        name: 'Registered'
      })
    },
    cart () {
      this.$router.push({
        path: '/Cart',
        name: 'Cart'
      })
    },
    getProuductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        //   Math.max(res.list, 6)
        if (res.list.length >= 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    getCartCount () {
      this.axios.get('/carts/product/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/header.scss";
</style>
