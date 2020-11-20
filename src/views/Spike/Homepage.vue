<template>
    <div>
        <navHeader></navHeader>
        <main class="spikeMain">
            <navBanner></navBanner>
            <div class="spike-title">
                <h1>小米秒杀</h1>
                <ul class="navbar"
                :class="headerFixed?'isFixed': ''">
                    <li>
                        <router-link to="/Homepage/Spike1">
                        <em class="time">10:00</em>
                        <div class="caption">
                            <div class="timerTop">抢购中</div>
                            <div class="timer">
                            距结束<span class="timerInter">{{hours}}:{{minute}}:{{seconds}}</span>
                            </div>
                        </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Homepage/Spike2">
                        <em class="time">14:00</em>
                        <span class="caption">即将开始</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Homepage/Spike3">
                        <em class="time">20:00</em>
                        <span class="caption">即将开始</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Homepage/Spike4">
                        <em class="time">22:00</em>
                        <span class="caption">即将开始</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                        <em class="time"></em>
                        <span class="caption"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </main>
        <navFooter></navFooter>
    </div>
</template>

<script>
import navBanner from '../../components/Banner.vue'
import navHeader from '../../components/Header'
import navFooter from '../../components/Footer'
export default {
  name: 'Homepage',
  data () {
    return {
      context: '全部商品分类',
      headerFixed: '',
      inputDate: ['小米10', 'Redmi Note 8', '小米CC9', '黑鲨游戏手机', '小米电视', '小米笔记本', '路由器', '小爱音箱', '净水器'],
      isShow: false,
      showList: false,
      day: 0,
      hours: 0,
      minute: 0,
      seconds: 0
    }
  },
  components: {
    navHeader,
    navFooter,
    navBanner
  },
  mounted: function () {
    this.countdown()
    // handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // 得倒页面滚动的距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      // 当滚动超过240时，实现吸顶效果
      if (scrollTop > 360) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    },
    countdown: function () {
      const end = Date.parse(new Date('2020-11-10 16:00:00'))
      const now = Date.parse(new Date())
      // 做判断当倒计时结束时都为0
      if (now >= end) {
        this.day = '00'
        this.hours = '00'
        this.minute = '00'
        this.seconds = '00'
        return
      }
      const msec = end - now
      const day = parseInt(msec / 1000 / 60 / 60 / 24)
      const hours = parseInt(msec / 1000 / 60 / 60 % 24)
      const minute = parseInt(msec / 1000 / 60 % 60)
      const seconds = parseInt(msec / 1000 % 60)
      this.day = day
      this.hours = hours > 9 ? hours : '0' + hours
      this.minute = minute > 9 ? minute : '0' + minute
      this.seconds = seconds > 9 ? seconds : '0' + seconds
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  },
  destroyed () {
    // 同时在destroyed回调中移除监听
    window.removeEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    clearTimeout(this.countdown)
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/spike.scss");
</style>
