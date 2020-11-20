<template>
   <div>
       <div class="promo">
           <div class="promo-big">
                <a>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64958bf7296a1c054a78ce29c629e731.jpg">
                </a>
            </div>
             <div class="promo-big banner">
                <a>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b13a0f242d83c42a76f8a6accdd967ed.jpg">
                </a>
            </div>
       </div>
       <div class="promo-main">
           <ul>
               <li v-for="(item,index) in phoneList" :key="index" class="item-all">
                   <a href="#"><img :src="item.imgSrc"></a>
                   <div class="item-con">
                       <div class="title">{{ item.title }}</div>
                       <div class="desc">{{ item.desc }}</div>
                       <div class="price">¥{{ item.newPrice }}起<span class="price-span" v-show="showOldPrice">¥{{ item.oldPrice }}起</span></div>
                       <button>立即购买</button>
                   </div>
               </li>
           </ul>
             <div class="banner">
                <a>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ea9cd91a8716a54b7a20f09b7c33936.jpg">
                </a>
            </div>
            <ul>
               <li class="item-all">
                   <a href="#"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/90585539f66ccd4356aeac6e7bbb5dad.jpg?w=1708&h=868"></a>
                   <div class="item-con">
                       <div class="title"> Redmi K30 Pro</div>
                       <div class="desc">双模5G，骁龙865，弹出全面屏，6400万高清四摄</div>
                       <div class="price">¥2999起<span class="price-span">¥3699起</span></div>
                       <button>立即购买</button>
                   </div>
               </li>
               <li class="item-all">
                   <a href="#"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b33b75a39248b5195c41c9a16bce9fb.jpg?w=1708&h=868"></a>
                   <div class="item-con">
                       <div class="title">Redmi K30 Pro 变焦版</div>
                       <div class="desc">双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄</div>
                       <div class="price">¥3333起</div>
                       <button>立即购买</button>
                   </div>
               </li>
           </ul>
            <div class="banner">
                <a>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de4619fd1d58fe0e95ca45a97beef33d.jpg">
                </a>
            </div>
            <ul>
               <li class="item-all">
                   <a href="#"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3433802597b7991dc20c58a26c6ac39.jpg?w=1708&h=868"></a>
                   <div class="item-con">
                       <div class="title"> 腾讯黑鲨3S</div>
                       <div class="desc">骁龙865处理器，120Hz刷新率</div>
                       <div class="price">¥3999起</div>
                       <button>立即购买</button>
                   </div>
               </li>
               <li class="item-all">
                   <a href="#"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30d1d37e94c51aab95dd1333495b506f.jpg?w=1708&h=868"></a>
                   <div class="item-con">
                       <div class="title">Redmi 9A</div>
                       <div class="desc">5000mAh长循环大电量，6.53"超大护眼屏幕，大音量扬声器</div>
                       <div class="price">¥599起</div>
                       <button>立即购买</button>
                   </div>
               </li>
           </ul>
           <!-- 两个li并排 -->
            <ul  class="left-ul">
               <li v-for="(item,index) in leftList" :key="index" class="item-left">
                   <a href="#"><img :src="item.imgSrc"></a>
                       <div class="title">{{ item.title }}</div>
                       <div class="desc">{{ item.desc }}</div>
                       <div class="price">¥{{ item.newPrice }}起<span class="price-span">¥{{ item.oldPrice }}起</span></div>
                       <button>立即购买</button>
               </li>
           </ul>
             <ul>
               <li class="item-all">
                   <a href="#"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf04420ea9369fc76add20e1973d8515.jpg?w=1708&h=868"></a>
                   <div class="item-con">
                       <div class="title"> Redmi 7A</div>
                       <div class="desc">骁龙8核处理器，4000mAh超长续航</div>
                       <div class="price">¥549起<span class="price-span">¥799起</span></div>
                       <button>立即购买</button>
                   </div>
               </li>

           </ul>
       </div>
   </div>
</template>

<script>
export default {
  name: 'PhoneDetails',
  data () {
    return {
      showOldPrice: false,
      phoneList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3804da7bbd3aa029bc00b970b61227a.jpg?w=1708&h=868',
          title: '小米10至尊纪念版',
          desc: '120X 变焦 / 120W秒充 / 120Hz屏幕',
          newPrice: '5299'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/40921d66d65484bc7e54187fbbe1615a.jpg?w=1708&h=868',
          title: 'Redmi K30 至尊纪念版',
          desc: '120Hz弹出全面屏，天玑1000+旗舰处理器,索尼6400万四摄',
          newPrice: '1999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2649d981a5cadffe29dfeaa10c3d1d0.jpg?w=1708&h=868',
          title: ' 小米10 ',
          desc: '骁龙865处理器/1亿像素8K电影相机',
          newPrice: '3799',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae7416968dce19f7f8c617d776f21366.jpg?w=1708&h=868',
          title: '小米10 Pro',
          desc: '骁龙865处理器 / 50倍数字变焦',
          newPrice: '4999'
        }
      ],
      leftList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61466261e8001f3f18991f6abff46ccf.jpg?w=1212&h=716',
          title: 'Redmi K30 4G',
          desc: '120Hz流速屏，全速热爱',
          newPrice: '1399',
          oldPrice: '1699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6ea8d70aa2ebeabd41d5596b3498768.jpg?w=1212&h=716',
          title: 'Redmi K30 5G',
          desc: '双模5G，120Hz流速屏',
          newPrice: '1599',
          oldPrice: '2299'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a99bc6d6d5743a186950f235cca930e.jpg?w=1212&h=716',
          title: 'Redmi Note 8 Pro',
          desc: '6400万全场景四摄',
          newPrice: '1099',
          oldPrice: '1399'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/465ea7594d174311d85ba9b58b4c7137.jpg?w=1212&h=716',
          title: 'Redmi Note 8',
          desc: '千元4800万四摄',
          newPrice: '899',
          oldPrice: '999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/52843ff7a32a371751366bdafddfd446.jpg?w=1212&h=716',
          title: 'Redmi 8',
          desc: '5000mAh超长续航',
          newPrice: '799',
          oldPrice: '999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57c4c1fbbee7dc25b0698231b96462e5.jpg?w=1212&h=716',
          title: 'Redmi 8A',
          desc: '5000mAh超长续航',
          newPrice: '699',
          oldPrice: '799'
        }
      ]
    }
  },
  methods: {
    init () {
      const price = document.getElementsByClassName('price-span')
      if (this.price.value !== '') {
        this.showOldPrice = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/phoneDetails.scss');
</style>
