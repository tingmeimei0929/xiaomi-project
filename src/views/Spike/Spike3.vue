<template>
  <div class="spike-list">
    <div class="container">
      <ul>
        <li v-for="(item,index) in spikeList" :key="index">
          <a>
            <img :src="item.imgSrc">
            <div class="information">
              <h2 class="name">{{ item.name }}</h2>
              <p class="desc">{{ item.desc }}</p>
              <p class="price">{{ item.newPrice }}元<span>{{ item.oldPrice }}元</span></p>
              <button class="btn red">登录后抢购</button>
              <div v-if="start">
                <button class="btn green">提醒我</button>
                <span>已有8人设置提醒</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="notice">
        <p>*小米秒杀活动规则：</p>
        <p>1.秒杀商品是否参加活动、最终秒杀成功的商品，以订单结算页显示为准，活动包括但不限于优惠卷、赠品、满减、满赠等；</p>
        <p>2.秒杀商品数量有限，活动以下单支付成功为准，请加入购物车尽快下单支付；</p>
        <p>3.秒杀价不含运费，最终以订单结算页价格为准；</p>
        <p>4.订单中商品的数量、颜色、型号等，以订单结算也为准。<br>温馨提示：因可能存在系统缓存、页面更新导致价格变动异常等不确定情况出现，如您发现活动商品标价或促销信息有异常，请您立即联系小米客服，以便我们及时补正。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spike3',
  data () {
    return {
      spikeList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/87c61128d303d124f3782f6dc4ea2fd3.jpg',
          name: '小米有线耳机（K歌版） 白色',
          desc: '我的私人KTV',
          newPrice: '149.00',
          oldPrice: '169'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d957df2e61eda2da42c4a650a9a8372.jpg',
          name: '小米笔记本Air 12.5" 2019款 8代M3 4G 128G 金色',
          desc: '像杂志一样随身携带',
          newPrice: '3299.00',
          oldPrice: '3599'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adbb766892dca73ae8619e55e0064a2c.jpg',
          name: '小米无线鼠标 Lite 黑色',
          desc: '简约设计，轻盈握感',
          newPrice: '29.00',
          oldPrice: '39'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aaa8d4ef708e89f9063819a04a629c2d.jpg',
          name: '小米真无线蓝牙耳机 Air 2 白色',
          desc: '智能真无线，轻松舒适戴',
          newPrice: '299',
          oldPrice: '399'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3ad464ede7f171010e14013166e0da4.jpg',
          name: '小米移动电源3 10000mAh超级闪充版（50W）​ 黑色',
          desc: '大容量，超级闪充',
          newPrice: '179.00',
          oldPrice: '249'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae6da8c695c4472efa597bb447e96831.jpg',
          name: '智能积木 越野四驱车 白色',
          desc: '搭建快乐，操控激情',
          newPrice: '499.00',
          oldPrice: '699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bda032b6377e16a67ac7900f8f2b536.jpg',
          name: '最生活毛巾·Air（10条装） 白色+素蓝',
          desc: '给生活一条好毛巾',
          newPrice: '99.00',
          oldPrice: '169'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg',
          name: 'RedmiBook 13 i5 8G 512G SSD MX250 2G 银',
          desc: '让高性能全面展现',
          newPrice: '3999.00',
          oldPrice: '4799'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adbb766892dca73ae8619e55e0064a2c.jpg',
          name: '小米无线鼠标 Lite 黑色',
          desc: '简约设计，轻盈握感',
          newPrice: '29.00',
          oldPrice: '39'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aaa8d4ef708e89f9063819a04a629c2d.jpg',
          name: '小米真无线蓝牙耳机 Air 2 白色',
          desc: '智能真无线，轻松舒适戴',
          newPrice: '299',
          oldPrice: '399'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3ad464ede7f171010e14013166e0da4.jpg',
          name: '小米移动电源3 10000mAh超级闪充版（50W）​ 黑色',
          desc: '大容量，超级闪充',
          newPrice: '179.00',
          oldPrice: '249'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae6da8c695c4472efa597bb447e96831.jpg',
          name: '智能积木 越野四驱车 白色',
          desc: '搭建快乐，操控激情',
          newPrice: '499.00',
          oldPrice: '699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bda032b6377e16a67ac7900f8f2b536.jpg',
          name: '最生活毛巾·Air（10条装） 白色+素蓝',
          desc: '给生活一条好毛巾',
          newPrice: '99.00',
          oldPrice: '169'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/spike.scss");
</style>
