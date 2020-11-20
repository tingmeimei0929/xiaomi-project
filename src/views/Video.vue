<template>
   <div>
    <ul class="box-list ">
        <li v-for="(item,index) in appliancesList" :key="index"  @click="toDetail">
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
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=200&h=200&f=webp&q=90">
                </div>
                <h3 class="title">小米壁画电视 65英寸 </h3>
                <p class="price">6999起</p>
            </a>
            <a href="#">
                <div class="more">
                    <p>浏览更多</p>
                    <small>电视影音</small>
                    <i class="el-icon-right"></i>
                </div>
            </a>
        </li>
    </ul>
   </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      appliancesList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米电视4C 32英寸 ',
          desc: '高清液晶屏，人工智能系统',
          newPrice: '849',
          oldPrice: '899'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '全面屏电视 55英寸E55X',
          desc: '潮流全面屏设计',
          newPrice: '2088',
          oldPrice: '2099'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米电视4A 70英寸',
          desc: '大屏更享受',
          newPrice: '3299',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米电视4C 43英寸',
          desc: 'FHD全高清屏，钢琴烤漆',
          newPrice: '1299',
          oldPrice: '1399'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=400&h=400',
          title: '小米电视4S 75英寸',
          desc: '4K HDR，人工智能语音',
          newPrice: '4299',
          oldPrice: '5999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米全面屏电视65英寸 E65C',
          desc: '震撼大屏，时尚全面屏',
          newPrice: '2699',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米全面屏电视E32C',
          desc: '全面屏设计，人工智能系统',
          newPrice: '888',
          oldPrice: '899'
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
