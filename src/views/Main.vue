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
                            <img :src="list.imgSrc"
                                alt="">
                            <span class="text">{{ list.title }}</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
            <!--小米秒杀分类 -->
            <div class="home-row">
                <div class="home-left">
                    <ul class="home-ul .clearfix">
                    <li @click="spikeBtn"><a href="#"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48">小米秒杀</a></li>
                    <li class="li-after"
                        @click="companyBtn"><a href="#"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48">企业团购</a></li>
                    <li class="li-after"><a href="https://www.mi.com/order/fcode"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48">F码通道</a></li>
                    </ul>
                    <ul class="home-ul clearfix">
                    <li><a href="https://www.mi.com/mimobile/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48">米粉卡</a></li>
                    <li class="li-after"><a href="https://huanxin.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48">以旧换新</a></li>
                    <li class="li-after"><a href="https://recharge.10046.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48">话费充值</a></li>
                    </ul>
                </div>
                <ul class="home-right">
                    <li><a href="http://www.mi.com/redminote8"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340"></a></li>
                    <li><a href="https://item.mi.com/product/10000203.html?selected=10000203"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"></a></li>
                    <li><a href="https://www.mi.com/shouhuan4/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"></a></li>
                </ul>
            </div>
            <!-- 主要内容 -->
            <div class="cont">
                <!-- 小米闪购 -->
                <div class="flash-sale row">
                    <div class="flash-title">
                        <h2>小米闪购</h2>
                        <!-- 上一页 -->
                        <div class="swiper-button-prev btn"
                            slot="button-prev"></div>
                        <!-- 下一页 -->
                        <div class="swiper-button-next btn"
                            slot="button-next"></div>
                    </div>
                    <div class="flash-container">
                        <div class="flash-timer">
                            <h3>14:00场</h3>
                            <img src="../assets/image/falsh.jpg">
                            <h2 class="prompt">距离结束还有</h2>
                            <div class="timer">
                            <div class="timeruning">{{ hours }}</div>
                            <div class="icon">:</div>
                            <div class="timeruning">{{ minute }}</div>
                            <div class="icon">:</div>
                            <div class="timeruning">{{ seconds }}</div>
                            </div>
                        </div>
                        <div class="flash-swiper">
                            <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
                                <swiper-slide v-for="item in swiperList" :key="item">
                                    <div v-for="(list,index) in item.children" :key="index">
                                        <a class="carousel">
                                            <div class="thumb">
                                                <img v-lazy="list.imgSrc" style="width:160px;height:160px;">
                                            </div>
                                            <h3 class="content-title">{{ list.title }}</h3>
                                            <p class="desc">{{ list.desc }}</p>
                                            <p class="price">{{ list.newPrice }}元<span>{{ list.oldPrice }}元</span></p>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <!-- 展示图-->
                <div class="home-banner row">
                    <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f2a7ec142ffc00b6f279549ebee0af7.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
                </div>
                <!-- 手机 -->
                <div class="home-brick row">
                    <div class="brick-title">
                        <h2>手机</h2>
                        <div class="all"><span @click="seeMore">查看全部<i class="icon iconfont el-icon-aliqianjinxiayige"></i></span></div>
                    </div>
                    <div class="brick-box">
                        <div class="box-minor">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=468&h=1228&f=webp&q=90">
                        </div>
                        <div class="box-main">
                            <ul class="box-list ">
                                <li v-for="(item,index) in phoneList" :key="index">
                                    <a>
                                        <div class="thumb">
                                            <img v-lazy="item.imgSrc" style="width:160px;height:160px;">
                                        </div>
                                        <h3 class="content-title">{{ item.title }}</h3>
                                        <p class="desc">{{ item.desc }}</p>
                                        <p class="price">{{ item.newPrice }}元起<span v-if="showPrice" class="oldPrice">{{ item.oldPrice }}元</span></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 展示图 -->
                <div class="home-banner row">
                    <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
                </div>
                 <!-- 家电 -->
                 <div class="home-brick row">
                    <div class="brick-title">
                        <h2>家电</h2>
                        <ul class="all">
                             <router-link to="/Popular" class="all-li">热门</router-link>
                             <router-link to="/Video" class="all-li">电视影音</router-link>
                        </ul>
                    </div>
                    <div class="brick-box">
                        <ul class="box-minor">
                            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=468&h=600&f=webp&q=90"></li>
                            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86567ac179a32fa9af05f89a45e57cbe.jpg?thumb=1&w=468&h=600&f=webp&q=90"></li>
                        </ul>
                        <div class="box-main">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>

                  <!-- 展示图 -->
                  <div class="home-banner row">
                    <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
                 </div>

                <!-- 视频 -->
                <div class="video-brick row ">
                    <div class="video-title">
                        <h2>视频</h2>
                        <div class="all"><span href="#">查看全部<i class="el-icon-aliqianjinxiayige"></i></span></div>
                    </div>
                    <div class="video-box">
                        <ul>
                            <li v-for="(item,index) in videoList" :key="index">
                                <div class="video-img">
                                    <img v-lazy="item.imgSrc">
                                    <button @click="dialogVisible = true"><i class="el-icon-caret-right"></i></button>
                                </div>
                                <h3 class="video-title">{{ item.title }}</h3>
                                <p class="video-desc">{{ item.desc }}</p>

                                 <el-dialog :visible.sync="dialogVisible"
                                        :befor-close="handleClose"
                                        :title="item.title">
                                    <video-player   class="video-player vjs-custom-skin"
                                                    ref="videoPlayer"
                                                  :options="playerOptions"
                                                  :playsinline="true"
                                                  @play="onPlayerPlay($event)"
                                                  @pause="onPlayerPause($event)">
                                    </video-player>
                                </el-dialog>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <navToolBar></navToolBar>
    <navFooter></navFooter>
  </div>
</template>

<script>
import navBanner from '../components/Banner'
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import navToolBar from '../components/ToolBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: 'Main',
  data () {
    return {
      index: 0,
      day: 0,
      hours: 0,
      minute: 0,
      seconds: 0,
      showPrice: true,
      playerOptions: {
        height: '495',
        width: document.documentElement.clientWidth,
        fluid: true, // 当 true时，video.js player将拥有流体大小。换句话说，他将按比例缩放以适应其容器
        sources: [{
          type: 'rtmp/mp4',
          src: [
            { videoUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4' },
            { videoUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4' },
            { videoUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4' },
            { videoUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4' }
          ]
        }],
        techOrder: ['flash'],
        autoplay: false, // 如果为true,浏览器准备好时开始回放
        controls: true
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
      ],
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
      timer: '',
      seq: 0,
      videoList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=592&h=360&f=webp&q=90',
          title: 'Redmi 10X系列发布会',
          desc: 'Redmi 10X系列发布会'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=592&h=360&f=webp&q=90',
          title: '小米10 青春版 发布会',
          desc: ''
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=592&h=360&f=webp&q=90',
          title: '小米10 8K手机拍大片',
          desc: ''
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=592&h=360&f=webp&q=90',
          title: '小米10发布会',
          desc: ''

        }
      ],
      phoneList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10 至尊版',
          desc: '120X 变焦/120W秒充/120Hz屏幕',
          newPrice: '5299'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 至尊版',
          desc: '120Hz弹出全面屏，天玑1000+旗舰处理器',
          newPrice: '1999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: ' 腾讯黑鲨3S ',
          desc: '骁龙865处理器，120Hz刷新率',
          newPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi 9A',
          desc: '5000mAh长循环大电量，6.53"超大护眼屏幕',
          newPrice: '599'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          newPrice: '1899',
          oldPrice: '2099'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10',
          desc: '骁龙865/1亿像素相机',
          newPrice: '3799',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d037b19b924fdf15b1cc9e671d6628fe.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 Pro ',
          desc: '双模5G，骁龙865，弹出全面屏',
          newPrice: '2999',
          oldPrice: '3699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 Pro 变焦版',
          desc: '双模5G，骁龙865，弹出全面屏',
          newPrice: '3399',
          oldPrice: '3999'
        }
      ],
      swiperList: [
        {
          index: 1,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589007010.44868979.jpg?thumb=1&w=400&h=400',
              title: 'Pinlo迷你三明治机 白色',
              desc: '小巧身材，一机多用',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595587776.42591074.jpg?thumb=1&w=400&h=400',
              title: 'bebird智能可视采耳棒M9 Pro',
              desc: '智能可视采耳棒M9 Pro ',
              newPrice: '109',
              oldPrice: '169'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596278100.54031929.jpg?thumb=1&w=400&h=400',
              title: '阿卡亮片彩色变色龙 中号',
              desc: '阿卡亮片彩色变色龙',
              newPrice: '69.9',
              oldPrice: '49.9'
            }
          ]
        },
        {
          index: 2,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551344035.40192886.jpg?thumb=1&w=400&h=400',
              title: '小米有线耳机（K歌版） 白色',
              desc: '我的私人KTV',
              newPrice: '149',
              oldPrice: '169'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3ef708836a62d29aa71598e5d54352c.png?thumb=1&w=400&h=400&f=webp&q=90',
              title: '米家手持无线吸尘器充电挂座 白色',
              desc: '充电收纳二合一',
              newPrice: '9.9',
              oldPrice: '99'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552868299.27348967.jpg?thumb=1&w=400&h=400',
              title: 'Redmi全自动波轮洗衣机 1A 8kg 白色',
              desc: '一键操作，父母都爱用',
              newPrice: '799',
              oldPrice: '899'
            }
          ]
        },
        {
          index: 3,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555486031.585971.jpg?thumb=1&w=400&h=400',
              title: '小米净水器600G 白色',
              desc: '600加仑通量，流速更快',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596279772.59022925.jpg?thumb=1&w=400&h=400',
              title: '绿粉亮片龙特雷摩尔 常规号',
              desc: '绿粉亮片龙特雷摩尔',
              newPrice: '49',
              oldPrice: '79.9'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            }
          ]
        }
      ],
      dialogVisible: false
    }
  },
  components: {
    navHeader,
    navFooter,
    navToolBar,
    Swiper,
    SwiperSlide,
    navBanner
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  mounted: function () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
    this.countdown()
  },
  watch: {
    //   更改视频源videoUrl从弹出框组件传值
    videoUrl: function (val) {
      if (val !== '') {
        this.$ref.VideoPlayer.player.src(val)
      }
    },
    // 弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值
    state: function (val) {
      if (val) {
        this.$ref.videoPlayer.player.pause()
      }
    }

  },
  methods: {
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
    },
    onPlayerPlay (player) {

    },
    onPlayerPause (player) {

    },
    playerStateChanged (player) {

    },
    details () {
      this.$router.push({
        path: '/Homepage'
      })
    },
    spikeBtn () {
      this.$router.push({
        path: '/Homepage'
      })
    },
    companyBtn () {
      this.$router.push({
        path: '/Company'
      })
    },
    seeMore () {
      this.$router.push({
        path: '/PhoneDetails'
      })
    }
  },
  beforeDestroy () {
    clearTimeout(this.countdown)
    clearTimeout(this.timer)
  }

}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
.el-dialog{
    width: 880px;
    height: 495px;
    background-color: #fff;
    margin-top: 15vh;
    padding: 20px 0 0 20px;
    margin:initial;
    text-align: start !important;
    font-size: 14px;
}
</style>
