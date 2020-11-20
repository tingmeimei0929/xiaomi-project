<template>
   <div  class="context">
        <div class="container">
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
                        slot="button-prev" style="margin-left:0"></div>
                    <!-- 下一页 -->
                    <div class="swiper-button-next"
                        slot="button-next" style="margin-right:300px"></div>
                    <!-- 分页 -->
                    <div class="swiper-pagination"
                        slot="pagination"></div>
                </swiper>
                <div class="category-item">
                    <div class="category-top">
                    <img src="https://i1.mifile.cn/f/i/17/qiye/icon_face.png">
                    <div class="top-right">
                        <h2>您好，欢迎回来</h2>
                        <p>登录企业账户开始采购<i class="el-icon-aliqianjinxiayige"></i></p>
                    </div>
                    </div>
                    <div class="category-bottom">
                    <h3>企业专属特权</h3>
                    <ul>
                        <li>
                        <div class="img img1"></div>
                        <div class="bottom-right">
                            <h2>专属价格</h2>
                            <p>精选货品，专属优惠</p>
                        </div>
                        </li>
                        <li>
                        <div class="img img2"></div>
                        <div class="bottom-right">
                            <h2>自主开票</h2>
                            <p>全场商品，增票开具</p>
                        </div>
                        </li>
                        <li>
                        <div class="img img3"></div>
                        <div class="bottom-right">
                            <h2>便捷支付</h2>
                            <p>对公转账，票款一致</p>
                        </div>
                        </li>
                        <li>
                        <div class="img img4"></div>
                        <div class="bottom-right">
                            <h2>专业售后</h2>
                            <p>小米直供，售后无忧</p>
                        </div>
                        </li>
                    </ul>
                    <p class="rule">更多会员管理规则，请点击<i class="el-icon-aliqianjinxiayige"></i></p>
                    </div>
                </div>
            </div>
            <div class="home-row">
                <ul class="home-img">
                    <li><a href="http://www.mi.com/redminote8"><img src="//i8.mifile.cn/v1/a1/79d1c803-9579-65f9-0692-da3f22d0e6f3.jpg"></a></li>
                    <li><a href="https://item.mi.com/product/10000203.html?selected=10000203"><img src="//i8.mifile.cn/v1/a1/6fbc14b8-aa4c-c49e-de33-d8efb0fcc484.jpg"></a></li>
                    <li><a href="https://www.mi.com/shouhuan4/"><img src="//i8.mifile.cn/v1/a1/392b66d8-7793-295b-1181-b70030b121e8.jpg"></a></li>
                    <li><a href="https://www.mi.com/shouhuan4/"><img src="//i8.mifile.cn/v1/a1/6ab7bfd2-22cc-3007-dd90-eea69497f607.png"></a></li>
                </ul>
            </div>
        </div>
        <div class="commodity">
            <div class="home-brick" v-for="(item, index) in detailList" :key="index">
                <h2>{{ item.title }} <a class="all" href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></h2>
                <ul class="box-main">
                    <li v-for="(context, index) in item.children" :key="index">
                        <div class="thumb">
                        <img v-lazy="context.imgSrc">
                        </div>
                        <p class="content-title">{{ context.name }}</p>
                        <p class="desc">{{ context.desc }}</p>
                        <div class="btn-primary" @click="dialogVisible = true">登录企业账户开始采购</div>
                        <el-dialog :visible.sync="dialogVisible" >
                            <div>
                                <h2>开通企业账户</h2>
                                <p>24小时内完成审核(工作日)，遇法定节假日顺延</p>
                                <el-form :model="form">
                                    <el-form-item label="公司信息">
                                        <el-input v-model="name" placeholder="公司名称(审核通过后不可修改，用于增票开具)"></el-input>
                                        <el-input v-model="code" placeholder="统一社会信用代码"></el-input>
                                        <el-upload action="上传营业执照" list-type="picture-card" :auto-upload="false">
                                            <i slot="default" class="el-icon-plus"></i>
                                            <div slot="file" slot-scope="{file}">
                                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                                <span class="el-upload-list__item-actions">
                                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                                        <i class="el-icon-zoom-in"></i>
                                                    </span>
                                                    <span v-if="!disabled" class="el-upload-list_item-delete"  @click="handleDownload(file)">
                                                        <i class="el-icon-download"></i>
                                                    </span>
                                                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                                        <i class="el-icon-delete"></i>
                                                    </span>
                                                </span>
                                            </div>
                                        </el-upload>
                                        <!-- <el-dialog :visible.sync="dialogVisible">
                                            <img width="100%" :src="dialogImageUrl" alt="">
                                        </el-dialog> -->
                                    </el-form-item>
                                    <el-form-item label="采购联系信息">
                                        <el-input v-model="phone"  placeholder="手机号码"></el-input>
                                        <el-input v-model="email"  placeholder="电子邮箱"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="dialogvisible = false">申请开通</el-button>
                                </div>
                            </div>
                        </el-dialog>
                    </li>
                </ul>
            </div>
            <div class="process">
                <div class="container">
                    <h2>采购流程</h2>
                    <p>采购仅需4步，2个工作日内完成审核，到账后5个工作日内发货</p>
                    <div class="step">
                    </div>
                </div>
                <a href="#">小米企业购会员管理规则，请点击></a>
            </div>
        </div>
   </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../../assets/swiper/css/swiper.css'
export default {
  name: 'NewList',
  data () {
    return {
      swiperInfo: [
        {
          icon: {
            backgroundImage: 'url(//i8.mifile.cn/v1/a1/a34c5f94-ee51-385f-d955-5389bf70f90c!1226x460.jpg)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: './Login.vue'
        },
        {
          icon: {
            backgroundImage: 'url(//i8.mifile.cn/v1/a1/a5b313f3-44e3-bdf8-066e-449cd0a9758c!1226x460.jpg)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: './Login.vue'
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
      detailList: [
        {
          title: '新品 ▪ 礼品卡',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
              name: '小米10 Pro 全网通版',
              desc: '小米10 Pro 全网通版 '
            },
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591779698.42084692.jpg?f=webp&thumb=1&w=200&h=200',
              name: '小米手环 5',
              desc: '小米手环 5'
            },
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591780204.23966403.jpg?f=webp&thumb=1&w=200&h=200',
              name: '小米手环5 NFC版 黑色',
              desc: '小米手环5 NFC版 黑色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
              name: '小米10 全网通版 8GB+256GB ',
              desc: '小米10 全网通版 8GB+256GB '
            },
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596709637.85662673.jpg?f=webp&thumb=1&w=200&h=200',
              name: '米家电动精修螺丝刀 灰色',
              desc: '米家电动精修螺丝刀 灰色'
            }
          ]
        },
        {
          title: '手机 ▪ 平板',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg',
              name: 'Redmi K30 5G',
              desc: 'Redmi K30 5G'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/8e9ede5e-d0d8-4fff-fe88-37a86264d1fe!200x200.jpg',
              name: 'Redmi 10X 5G 6GB+ 128GB',
              desc: 'Redmi 10X 5G 6GB+ 128GB'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/41ad1b6a-e1ae-7a5b-d270-3daab9be70ae!200x200.jpg',
              name: 'Redmi Note 8 4GB+64GB 皓月白',
              desc: 'Redmi Note 8 4GB+64GB 皓月白'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
              name: '小米10 12GB+256GB',
              desc: '小米10 12GB+256GB'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/449dde08-fac9-9326-ce0f-36bb97767848!200x200.png',
              name: 'Redmi Note 8 Pro',
              desc: 'Redmi Note 8 Pro'
            }
          ]
        },
        {
          title: '笔记本',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/b1cf9dd4-fc55-4a79-b001-b7ea5f1bb614!200x200.jpg',
              name: '12.5"小米笔记本Air ',
              desc: '12.5"小米笔记本Air '
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/8d97cb7f-2d41-cab4-9cd0-f4c2171f1a6e!200x200.jpg',
              name: '小米笔记本15.6" 2019款 独显版',
              desc: '小米笔记本15.6" 2019款 独显版'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/7e0a6709-90db-03d4-26d4-c2d914a57fc0!200x200.jpg',
              name: 'Air 13.3" 2019款',
              desc: 'Air 13.3" 2019款'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/a9c7fd86-4971-5d79-1de8-169729df9d3e!200x200.jpg',
              name: '小米笔记本Air 12.5',
              desc: '小米笔记本Air 12.5'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/d78909bb-432b-5d4f-2c1d-c7671524fe54!200x200.jpg',
              name: '小米笔记本Pro 15.6" GTX版',
              desc: '小米笔记本Pro 15.6" GTX版'
            }
          ]
        },
        {
          title: '家电',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/63b5e6d4-10d1-bd2e-2938-89c486d22e81!200x200.jpg',
              name: '米家电饭煲C1',
              desc: '米家电饭煲C1 5L 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/4782292c-c10c-1bac-4aab-09847faa887a!200x200.jpg',
              name: '米家小饭煲 白色',
              desc: '米家小饭煲 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/1ed419f6-4d99-bcef-a06f-164a76e768b4!200x200.jpg',
              name: '米家电磁炉',
              desc: '米家电磁炉'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/171b61fe-3fc3-cacd-c013-70c67edc4874!200x200.jpg',
              name: '米家破壁料理机',
              desc: '米家破壁料理机'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/6b433c35-3e9c-5751-a221-ede015fdd90b!200x200.jpg',
              name: '米家空气净化器3',
              desc: '米家空气净化器3'
            }
          ]
        },
        {
          title: '智能 ▪ 路由器',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/aec0696a-d23f-4128-a252-1912a47642ca!200x200.jpg',
              name: '小米多看电纸书',
              desc: '小米多看电纸书'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/a5b08835-7ef9-bf25-2c6e-831bf2c3280b!200x200.jpg',
              name: '小米米家照片打印机 白色',
              desc: '小米米家照片打印机 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/0aca9e3d-ae10-430d-e2b9-07e86d208c33!200x200.jpg',
              name: '小米手表 标准版  科技银',
              desc: '小米手表 标准版  科技银'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/62ea416d-17cc-ee09-4de2-5ab4afe4a81b!200x200.png',
              name: '小米手环4 NFC版 黑色',
              desc: '小米手环4 NFC版 黑色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/321b57e1-8f43-b723-45d9-3c4ddf1c67df!200x200.jpg',
              name: '米家走步机',
              desc: '米家走步机'
            }
          ]
        },
        {
          title: '耳机 ▪ 音箱',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/a64b3461-d64f-d3fc-b98a-e7ee37a613c5!200x200.jpg',
              name: '小米小爱音箱 Play版',
              desc: '小米小爱音箱 Play版'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/2594f01b-fdc1-d122-9153-ddf0f9c5a510!200x200.jpg',
              name: '小米真无线蓝牙耳机Air2 SE 白色',
              desc: '小米真无线蓝牙耳机Air2 SE 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/e8d7abbe-75af-dd6f-e128-48f1989b0edb!200x200.jpg',
              name: '小米小爱触屏音箱',
              desc: '小米小爱触屏音箱'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/8073a362-89ce-e0da-ad5a-e87b727c4e2c!200x200.jpg',
              name: '小米小爱智能闹钟',
              desc: '小米小爱智能闹钟'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/a4c2d641-72f8-3c55-ff6e-38c9f7502279!200x200.jpg',
              name: '小米小爱音箱HD',
              desc: '小米小爱音箱HD'
            }
          ]
        },
        {
          title: '生活 ▪ 儿童',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/c347ae62-c9dc-1bc8-b9c2-d6d5ed254de3!200x200.png',
              name: '小米小背包',
              desc: '小米小背包'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/87becfcd-0cce-2c35-5944-faa53c1664aa!200x200.jpg',
              name: '米家电水壶1A 白色',
              desc: '米家电水壶1A 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/c4f956f9-b62d-57b4-b576-f79b102ad378!200x200.jpg',
              name: '米家电动剃须刀S500C',
              desc: '米家电动剃须刀S500C'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/ac7ddefe-c5d6-7292-2ff4-89913a800cc3!200x200.jpg',
              name: '聚热快，受热匀 / 食品级不沾涂层',
              desc: '聚热快，受热匀 / 食品级不沾涂层'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/7f32f4e5-c54a-e1cd-108d-dfca40555fb3!200x200.jpg',
              name: '米家自动香氛机套装 白色',
              desc: '米家自动香氛机套装 白色'
            }
          ]
        },
        {
          title: '配件 ▪ 车品',
          children: [
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/0706da79-8db7-51d2-38e7-4533e5dcb91b!200x200.jpg',
              name: '小米净水器1A反渗透滤芯（400G） 白色',
              desc: '小米净水器1A反渗透滤芯（400G） 白色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/6d7c5928-e4c9-4585-6f6f-620bdc616551!200x200.jpg',
              name: '米家空气净化器滤芯 除甲醛增强版S1 绿色',
              desc: '米家空气净化器滤芯 除甲醛增强版S1 绿色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/0a1fb7b2-5dbc-9ebb-feb6-f6e33c784203!200x200.jpg',
              name: '小米蓝牙语音遥控器 单机',
              desc: '小米蓝牙语音遥控器 单机'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/1dd259fb-d6f9-fadd-ec82-f22f0f6d0aa5!200x200.jpg',
              name: '小米无线车充 黑色',
              desc: '小米无线车充 黑色'
            },
            {
              imgSrc: 'https://i8.mifile.cn/v1/a1/e8c1635c-a9dd-c2bc-d4d5-fd54ec708810!200x200.jpg',
              name: '小米 Type-C to AUDIO转接线',
              desc: '小米 Type-C to AUDIO转接线'
            }
          ]
        }
      ],
      form: {
        name: '',
        code: '',
        phone: '',
        email: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  components: {
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
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/company.scss");
</style>
