<template>
     <div class="nav">
        <div class="nav-row">
            <div class="nav-logo">
              <a href="https://www.mi.com/index.html"
                 class="logo"></a>
            </div>
            <ul class="nav-list">
              <li class="nav-title">{{ context }}</li>
              <li v-for="(item, index) in sorts"
                  :key="index"
                  class="nav-link"><a class="cont">{{ item.defaults }}</a>
                <div class="link-list">
                  <ul class="item-children">
                    <li v-for="(list, index) in item.children" :key="index">
                        <a href="">
                            <div class="item-img"><img :src="list.imgSrc"
                                alt="" style="width: 160px; height: 110px;"></div>
                            <div class="item-title">{{ list.title }}</div>
                            <div class="item-price">{{ list.newPrice }}元起</div>
                        </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-menu"><a href="https://www.mi.com/service/">服务</a></li>
              <li class="nav-menu"><a href="http://www.xiaomi.cn/">社区</a></li>
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
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      context: '全部商品分类',
      sorts: [
        {
          defaults: '小米手机',
          children: [
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=320&h=220',
              title: '小米10',
              newPrice: '3799'
            },
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=320&h=220',
              title: '小米10 至尊版',
              newPrice: '5799'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米10 青春版 5G',
              newPrice: '1899'
            },
            {
              imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=320&h=220',
              title: '小米CC9e',
              newPrice: '1299'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米MIX Alpha',
              newPrice: '19999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米10 Pro',
              newPrice: '4999'
            }
          ]
        },
        {
          defaults: 'Redmi红米',
          children: [
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              title: 'Redmi K30 至尊版',
              newPrice: '1999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              title: 'Redmi 9A',
              newPrice: '599'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d037b19b924fdf15b1cc9e671d6628fe.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              title: 'Redmi K30 Pro ',
              newPrice: '2999',
              oldPrice: '3699'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              title: 'Redmi K30 Pro 变焦版',
              newPrice: '3399',
              oldPrice: '3999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              title: 'Redmi 9A',
              newPrice: '599',
              oldPrice: '799'
            }
          ]
        },
        {
          defaults: '电视',
          children: [
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米透明电视',
              newPrice: '49999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米电视 大师 65英寸OLED',
              newPrice: '12999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi 智能电视 MAX 98',
              newPrice: '19999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米电视4A 60英寸',
              newPrice: '2399'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi 智能电视 X55',
              newPrice: '2299'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi 红米电视 70英寸 R70A',
              newPrice: '3199'
            }
          ]
        },
        {
          defaults: '笔记本',
          children: [
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfdd3b985b4a9da58a1f5a861c5895f.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi G 游戏本',
              newPrice: ''
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e6c9a677acbb3b0c75d4d0d83e8a695.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'RedmiBook 16',
              newPrice: '4499'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e27b3211230c2b8c21c0ef4efcbc17bc.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'RedmiBook 14 Ⅱ',
              newPrice: '3999'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&w=320&h=220',
              title: 'Pro 15.6" 2020款',
              newPrice: '5799'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/682027c81244d5244d72990cc8b5341f.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'RedmiBook Air 13',
              newPrice: '4699'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f0f2175b9a6d4fdb0f0eeb843398044.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '显示器',
              newPrice: '2199'
            }
          ]
        },
        {
          defaults: '家店',
          children: [
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '米家互联网空调C1（一级能效）',
              newPrice: '2099'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&w=320&h=220',
              title: '米家互联网空调（一级能效）',
              newPrice: '2099'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=320&h=220',
              title: 'Redmi全自动波轮洗衣机1A',
              newPrice: '799'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=320&h=220',
              title: '米家互联网洗烘一体机10kg',
              newPrice: '1999'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              title: '米家风冷对开门冰箱 483L',
              newPrice: '2299'
            }
          ]
        },
        {
          defaults: '路由器',
          children: [
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/54de949334c3d794a6ca55b76e4bb379.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi路由器 AX6',
              newPrice: '399'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/681a92d3e5f03a109558396c99f6a4df.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi路由器 AX5',
              newPrice: '249'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/27da43294889d049a111e5ff2cdfafe7.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米路由器 AX1800',
              newPrice: '329'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米AIoT路由器AX3600',
              newPrice: '599'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi路由器AC2100',
              newPrice: '169'
            },
            {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: '小米路由器AC2100',
              newPrice: '199'
            }
          ]
        },
        {
          defaults: '智能硬件',
          children: [
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=320&h=220',
              title: '小米米家智能摄像机云台版',
              newPrice: '179'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=320&h=220',
              title: '小米小爱老师',
              newPrice: '499'
            },
            {
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=320&h=220',
              title: '小米米家智能门锁',
              newPrice: '1299'
            }, {
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dccc32d8e36685485fa89e0f2a580975.png?thumb=1&w=320&h=220&f=webp&q=90',
              title: 'Redmi小爱触屏音箱 8',
              newPrice: '349'
            }
          ]
        }
      ],
      inputDate: [{ name: '小米10', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: 'Redmi Note 8', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米CC9', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '黑鲨游戏手机', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米电视', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米笔记本', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '路由器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小爱音箱', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '净水器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/banner.scss");
</style>
