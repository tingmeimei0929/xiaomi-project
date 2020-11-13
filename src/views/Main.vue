<template>
    <div>
        <navHeader></navHeader>
        <main class="main">
            <navBanner></navBanner>
            <div class="container">
                 <!-- 轮播图 -->
                <div class="swiper-row">
                    <swiper :options="swiperOption"
                            ref="mySwiper"
                            class="swiper-container">
                        <swiper-slide v-for="(item,index) in swiperInfo"
                                    :key="index"
                                    :style="item.icon">
                        <a :href="item.href"></a>
                        </swiper-slide>
                        <!-- 上一页 -->
                        <div class="swiper-button-prev"
                            slot="button-prev"></div>
                        <!-- 下一页 -->
                        <div class="swiper-button-next"
                            slot="button-next"></div>
                        <!-- 分页 -->
                        <div class="swiper-pagination"
                            slot="pagination"></div>
                    </swiper>
                    <!-- 左侧导航条 -->
                    <ul class="category-item">
                        <li v-for="(item, index) in categoryList" :key='index'>
                        <div class="main-menu"><a>{{ item.name }}<i class="el-icon-aliqianjinxiayige"></i></a></div>
                        <div class="sub-menu" >
                            <ul class="item-list" v-for="(num,index) in item.ulIndex" :key="index">
                            <li v-for="(list,index) in num.children" :key="index">
                                <a href="#">
                                <img v-lazy="list.imgSrc"
                                    alt="">
                                <span class="text">{{ list.title }}</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <navFooter></navFooter>
        </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import navBanner from '../components/Banner'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: 'Main',
  data () {
    return {
      swiperInfo: [
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7c2a3fec92ad95435f8ab8d8407db6c.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e882fcbdcafc352dde03c741836399b.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/400f15aedf3b2981c462e8811e88d384.jpg?w=2452&h=920)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f306ce6727f8166fd97730c5876bfadc.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5bc9a947319a1d7424cb209c632b7d.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        }
      ],
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        loop: true,
        initialSlide: 0,
        autoplay: true,
        speed: 800,

        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }

      },
      categoryList: [
        {
          name: '手机 电话卡',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 至尊纪念版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5aad5f708998e76742d75d7c6b1394c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 Pro'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 青春版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '腾讯黑鲨游戏手机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=80&h=80',
                  title: '小米云服务'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 至尊纪念版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5aad5f708998e76742d75d7c6b1394c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 Pro'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 青春版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '腾讯黑鲨游戏手机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=80&h=80',
                  title: '小米云服务'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 至尊纪念版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5aad5f708998e76742d75d7c6b1394c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 Pro'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 青春版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '腾讯黑鲨游戏手机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=80&h=80',
                  title: '小米云服务'
                }
              ]
            },
            {
              index: '4',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 至尊纪念版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5aad5f708998e76742d75d7c6b1394c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 Pro'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米10 青春版'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '腾讯黑鲨游戏手机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=80&h=80',
                  title: '小米云服务'
                }
              ]
            }
          ]
        },
        {
          name: '电视 盒子',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米透明电视'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视 大师 65英寸OLED'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 X65'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 X55'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 MAX 98'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 55英寸'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 65英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 75英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 55英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 65英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 75英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c6f98e59f3e78eb5d959bbcff081562.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 红米电视 70英寸'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米透明电视'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视 大师 65英寸OLED'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 X65'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 X55'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 智能电视 MAX 98'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 55英寸'
                }
              ]
            },
            {
              index: '4',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 65英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 75英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 55英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 65英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米电视5 Pro 75英寸'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c6f98e59f3e78eb5d959bbcff081562.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi 红米电视 70英寸'
                }
              ]
            }
          ]
        },
        {
          name: '笔记本 显示器 平板',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi G 游戏本'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook Air 13'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 16'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e00ef74cd7162b290f0395c09d220719.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 14'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米笔记本Pro 15.6"'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 13'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi G 游戏本'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook Air 13'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 16'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e00ef74cd7162b290f0395c09d220719.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 14'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米笔记本Pro 15.6"'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 13'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi G 游戏本'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook Air 13'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 16'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e00ef74cd7162b290f0395c09d220719.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 14'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米笔记本Pro 15.6"'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'RedmiBook 13'
                }
              ]
            }
          ]
        },
        {
          name: '家电 插线板',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '冰箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
                  title: '立式空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
                  title: '壁挂空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
                  title: '滚筒洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
                  title: 'Redmi全自动波轮洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
                  title: '净水器'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '冰箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
                  title: '立式空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
                  title: '壁挂空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
                  title: '滚筒洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
                  title: 'Redmi全自动波轮洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
                  title: '净水器'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '冰箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
                  title: '立式空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
                  title: '壁挂空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
                  title: '滚筒洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
                  title: 'Redmi全自动波轮洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
                  title: '净水器'
                }
              ]
            },
            {
              index: '4',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '冰箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
                  title: '立式空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
                  title: '壁挂空调'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
                  title: '滚筒洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
                  title: 'Redmi全自动波轮洗衣机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
                  title: '净水器'
                }
              ]
            }
          ]
        },
        {
          name: '出行 穿戴',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5NFC'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png?thumb=1&w=80&h=80',
                  title: '手环手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&w=80&h=80',
                  title: 'VR'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
                  title: '平衡车'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5NFC'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png?thumb=1&w=80&h=80',
                  title: '手环手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&w=80&h=80',
                  title: 'VR'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
                  title: '平衡车'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5NFC'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '手环5'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png?thumb=1&w=80&h=80',
                  title: '手环手表'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&w=80&h=80',
                  title: 'VR'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
                  title: '平衡车'
                }
              ]
            }
          ]
        },
        {
          name: '智能 路由器',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
                  title: '打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机墨水'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米路由器'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '智能家庭'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=80&h=80',
                  title: '对讲机'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
                  title: '打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机墨水'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米路由器'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '智能家庭'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=80&h=80',
                  title: '对讲机'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
                  title: '打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '喷墨打印机墨水'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米路由器'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '智能家庭'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=80&h=80',
                  title: '对讲机'
                }
              ]
            }
          ]
        },
        {
          name: '电源 配件',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '移动电源'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=80&h=80',
                  title: '数据线'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&w=80&h=80',
                  title: '车充'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '充电器'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=80&h=80',
                  title: '电池'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=80&h=80',
                  title: '自拍杆'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '移动电源'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=80&h=80',
                  title: '数据线'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&w=80&h=80',
                  title: '车充'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '充电器'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=80&h=80',
                  title: '电池'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=80&h=80',
                  title: '自拍杆'
                }
              ]
            }
          ]
        },
        {
          name: '健康 儿童',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=80&h=80',
                  title: '洗手机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '修剪器'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
                  title: '剃须刀'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
                  title: '牙刷'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
                  title: '吹风机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=80&h=80',
                  title: '体重秤'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=80&h=80',
                  title: '洗手机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '修剪器'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
                  title: '剃须刀'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
                  title: '牙刷'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
                  title: '吹风机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=80&h=80',
                  title: '体重秤'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=80&h=80',
                  title: '洗手机'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '修剪器'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
                  title: '剃须刀'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
                  title: '牙刷'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
                  title: '吹风机'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=80&h=80',
                  title: '体重秤'
                }
              ]
            }
          ]
        },
        {
          name: '耳机 音箱',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f682874f18012d3e46c097d48f054c3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱音箱 Art'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱触屏音箱Pro 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi小爱触屏音箱 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '音箱 Pro '
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米小爱音箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=80&h=80',
                  title: '小米小爱音箱 Play'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f682874f18012d3e46c097d48f054c3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱音箱 Art'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱触屏音箱Pro 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi小爱触屏音箱 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '音箱 Pro '
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米小爱音箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=80&h=80',
                  title: '小米小爱音箱 Play'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f682874f18012d3e46c097d48f054c3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱音箱 Art'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小爱触屏音箱Pro 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: 'Redmi小爱触屏音箱 8'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '音箱 Pro '
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小米小爱音箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=80&h=80',
                  title: '小米小爱音箱 Play'
                }
              ]
            }
          ]
        },
        {
          name: '生活 箱包',
          ulIndex: [
            {
              index: '1',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小背包'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=80&h=80',
                  title: '双肩包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '胸包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '旅行箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
                  title: '运动鞋'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=80&h=80',
                  title: '眼镜'
                }
              ]
            },
            {
              index: '2',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小背包'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=80&h=80',
                  title: '双肩包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '胸包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '旅行箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
                  title: '运动鞋'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=80&h=80',
                  title: '眼镜'
                }
              ]
            },
            {
              index: '3',
              children: [
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '小背包'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=80&h=80',
                  title: '双肩包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '胸包'
                },
                {
                  imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
                  title: '旅行箱'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
                  title: '运动鞋'
                },
                {
                  imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=80&h=80',
                  title: '眼镜'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    navHeader,
    navFooter,
    navBanner,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted: function () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
