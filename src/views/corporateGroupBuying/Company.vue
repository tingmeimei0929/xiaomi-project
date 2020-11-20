<template>
  <div>
    <navHeader></navHeader>
    <div class="companyMain">
        <div class="nav"
            :class="headerFixed?'isFixed': ''">
            <div class="nav-row">
                <div class="nav-logo">
                    <a href="https://www.mi.com/index.html"
                        class="logo"></a>
                </div>
                <ul class="nav-list">
                    <li class="nav-title" style="width:initial;margin:-5px 0 0 -20px;color:#ff6700;font-weight:bold;font-size:20px;">{{ context }}</li>
                    <li v-for="(item,index) in defaults"
                        :key="index"
                        class="nav-link">
                        <router-link  :to="item.path" class="cont" >{{ item.name }}</router-link>
                    </li>
                </ul>
                <div class="search">
                    <div class="result-list">
                        <!--  -->
                        <input type="text"
                                name="slider" >
                        <ul class="searchList">
                        <li v-for="(item,index) in inputDate"
                            :key="index"><a :href="item.href">{{item.name}}</a></li>
                        </ul>
                    </div>
                    <button type="primary"
                            class="btn"><i class="el-icon-alichaxun"></i></button>
                </div>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
    <div class="footer">
        <div class="list-service">
            <div class="container">
                <a href="https://weibo.com/xiaomishangcheng">
                    <i class="el-icon-aliweibo2"></i>
                    新浪微博
                </a>
                <a href="javascript:void(0);">
                    <i class="el-icon-alixiaomi" ></i>
                    官方微信
                </a>
                <a href="javascript:void(0);">
                    <i class="el-icon-alishizhong big"></i>
                    企业购在线客服
                </a>
                <a href="javascript:void(0);" class="last">
                    <i class="el-icon-ali3 small"></i>
                    400-100-5678转人工
                </a>
            </div>
        </div>
        <div class="info-text">
            <div class="container">
                <div class="nav-logo">
                    <a href="https://www.mi.com/index.html"
                        class="logo"></a>
                </div>
                <div class="info-list">
                    <div class="sites">
                        <a href="#">小米商城</a><span class="sep">|</span>
                        <a href="#">MIUI</a><span class="sep">|</span>
                        <a href="#">米家</a><span class="sep">|</span>
                        <a href="#">米聊</a><span class="sep">|</span>
                        <a href="#">多看</a><span class="sep">|</span>
                        <a href="#">游戏</a><span class="sep">|</span>
                        <a href="#">路由器</a><span class="sep">|</span>
                        <a href="#">米粉卡</a><span class="sep">|</span>
                        <a href="#">政企服务</a><span class="sep">|</span>
                        <a href="#">小米天猫店</a><span class="sep">|</span>
                        <a href="#">隐私政策</a><span class="sep">|</span>
                        <a href="#">商城用户协议</a><span class="sep">|</span>
                        <a href="#">账号协议</a><span class="sep">|</span>
                        <a href="#">问题反馈</a><span class="sep">|</span>
                        <a href="#">廉正举报</a><span class="sep">|</span>
                        <a href="#">诚信合规</a>
                    </div>
                    <p>©mi.com京ICP证110507号 京ICP备10046444号 京公网安备1101082020134号 京网文[2017]1530-131号</p>
                    <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证（京）-非经营性-2014-0090 营业执照 医疗器械公告</p>
                    <p>增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证</p>
                    <p>违法和不良信息举报电话：185-0130-1238 只是产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                    <div class="info-links">
                        <a href="//privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&lang=zh-cn">
                            <img src="https://i1.mifile.cn/f/i/17/site/truste.png">
                        </a>
                        <a href="//search.szfw.org/cert/l/CX20120926001783002010">
                            <img src="https://s01.mifile.cn/i/v-logo-2.png" alt="诚信网站">
                        </a>
                        <a href="https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082">
                            <img src="https://s01.mifile.cn/i/v-logo-1.png" alt="可信网站">
                        </a>
                        <a href="http://www.315online.com.cn/member/315140007.html">
                            <img src="https://s01.mifile.cn/i/v-logo-3.png" alt="网上交易保障中心">
                        </a>
                        <a href="https://www.mi.com/service/buy/commitment/">
                            <img src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png" alt="诚信经营 放心消费">
                        </a>
                        <a href="https://webcert.cnmstl.net/cert/grade?sn=3af21034e35011eab3ea00163e068ceb">
                            <img src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png" alt="">
                            <img src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/3c2791ca090de29dd753fd5eaf442bad.png" alt="">
                        </a>
                    </div>
                    <div class="slogn">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../components/Header.vue'
export default {
  name: 'Company',
  data () {
    return {
      context: '企业购',
      defaults: [
        { name: '新品 ▪ 礼品卡', path: 'newProduct' },
        { name: '手机 ▪ 平板', path: 'newPhone' },
        { name: '笔记本', path: 'newBook' },
        { name: '家店', path: 'newAppliances' },
        { name: '智能 ▪ 路由器', path: 'newRouter' },
        { name: '耳机 ▪ 音箱', path: 'newHeadset' },
        { name: '生活 ▪ 儿童', path: 'newLife' },
        { name: '配件 ▪ 车品', path: 'newAccessories' }
      ],
      inputDate: ['小米10', 'Redmi Note 8', '小米CC9', '黑鲨游戏手机', '小米电视', '小米笔记本', '路由器', '小爱音箱', '净水器'],
      isShow: false,
      showList: false,
      categoryList: '',
      headerFixed: ''
    }
  },
  components: {
    navHeader

  },
  methods: {
    handleScroll () {
      // 得倒页面滚动的距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      // 当滚动超过240时，实现吸顶效果
      if (scrollTop > 240) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    },
    showCommdity () {
      this.$router.push({
        path: '/Commodity'
      })
    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
    this.countdown()
    // handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // 同时在destroyed回调中移除监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/navbar.scss");
@import url("../../assets/scss/company.scss");
.isFixed {
    position: fixed;
    width: 100%;
    height: 100px;
    margin: 0 auto;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }
</style>
