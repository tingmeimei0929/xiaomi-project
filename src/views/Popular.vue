<template>
   <div>
    <ul class="box-list ">
        <li v-for="(item,index) in appliancesList" :key="index" @click="toDetail">
            <a>
                <div class="thumb">
                    <img :src="item.imgSrc" style="width:160px;height:160px;">
                </div>
                <h3 class="content-title">{{ item.title }}</h3>
                <p class="desc">{{ item.desc }}</p>
                <p class="price">{{ item.newPrice }}元起<span>{{ item.oldPrice }}元</span></p>
            </a>
        </li>
        <li class="last-child">
            <a href="#">
                <div class="figure-img">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=200&h=200&f=webp&q=90">
                </div>
                <h3 class="title">Air 13.3" 2019款 </h3>
                <p class="price">5699起</p>
            </a>
            <a href="#">
                <div class="more">
                    <p>浏览更多</p>
                    <small>热门</small>
                    <i class="el-icon-right"></i>
                </div>
            </a>
        </li>
    </ul>
   </div>
</template>

<script>
export default {
  name: 'Popular',
  data () {
    return {
      appliancesList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi 红米电视 70英寸 ',
          desc: '70英寸震撼巨屏，4K画质，细腻如真',
          newPrice: '3199',
          oldPrice: '3799'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米全面屏电视E32C',
          desc: '全面屏设计，人工智能系统',
          newPrice: '888',
          oldPrice: '899'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米全面屏电视E55A',
          desc: '全面屏设计，人工智能语音',
          newPrice: '2088',
          oldPrice: '2099'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=400&h=400',
          title: '米家空调',
          desc: '出众静音，快速制冷热',
          newPrice: '1499',
          oldPrice: '1799'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '米家互联网洗烘一体机 Pro 10kg',
          desc: '智能洗烘，省心省力',
          newPrice: '2999',
          oldPrice: '3299'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi全自动波轮洗衣机1A 8kg',
          desc: '一键操作，父母都爱用',
          newPrice: '799',
          oldPrice: '899'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '15.6" 四核i7 16G 独显 512G',
          desc: '全面均衡的国民轻薄本',
          newPrice: '4899',
          oldPrice: ''
        }
      ]
    }
  },
  methods: {
    toDetail () {
      this.$router.push({
        path: '/Details'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
</style>
