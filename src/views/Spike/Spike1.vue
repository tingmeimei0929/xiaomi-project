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
  name: 'Spike1',
  data () {
    return {
      spikeList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15a38b6b0e563ff8e52f7ff582b0b06e.jpg',
          name: '小米记事本 3本装（1黑1灰1蓝）',
          desc: '舒写本心',
          newPrice: '12.00',
          oldPrice: '24.9'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adbb766892dca73ae8619e55e0064a2c.jpg',
          name: '小米无线鼠标 Lite 黑色',
          desc: '简约设计，轻盈握感',
          newPrice: '29.00',
          oldPrice: '39'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f4150566d5b9143261e738da817c166.jpg',
          name: '圈厨多功能涮烤锅 黑色火锅盘',
          desc: '深浅双盘多用途',
          newPrice: '299.00',
          oldPrice: '399'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a714c996352f94cbde6747cd6392c041.jpg',
          name: '米家电动螺丝刀',
          desc: '专利一体化无绳设计，轻松开工',
          newPrice: '169.00',
          oldPrice: '199'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/88caa88b73ca4aaeb5f5b1c6609574cc.jpg',
          name: '米家扫地机器人',
          desc: '智商高，扫得干净扫得快',
          newPrice: '1399.00',
          oldPrice: '1699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg',
          name: 'RedmiBook 13 锐龙版 R5 16G 512G  SSD 集显 月光银',
          desc: '全面屏高性能轻薄本',
          newPrice: '3599.00',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15a38b6b0e563ff8e52f7ff582b0b06e.jpg',
          name: '小米记事本 3本装（1黑1灰1蓝）',
          desc: '舒写本心',
          newPrice: '12.00',
          oldPrice: '24.9'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adbb766892dca73ae8619e55e0064a2c.jpg',
          name: '小米无线鼠标 Lite 黑色',
          desc: '简约设计，轻盈握感',
          newPrice: '29.00',
          oldPrice: '39'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f4150566d5b9143261e738da817c166.jpg',
          name: '圈厨多功能涮烤锅 黑色火锅盘',
          desc: '深浅双盘多用途',
          newPrice: '299.00',
          oldPrice: '399'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a714c996352f94cbde6747cd6392c041.jpg',
          name: '米家电动螺丝刀',
          desc: '专利一体化无绳设计，轻松开工',
          newPrice: '169.00',
          oldPrice: '199'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/88caa88b73ca4aaeb5f5b1c6609574cc.jpg',
          name: '米家扫地机器人',
          desc: '智商高，扫得干净扫得快',
          newPrice: '1399.00',
          oldPrice: '1699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg',
          name: 'RedmiBook 13 锐龙版 R5 16G 512G  SSD 集显 月光银',
          desc: '全面屏高性能轻薄本',
          newPrice: '3599.00',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a714c996352f94cbde6747cd6392c041.jpg',
          name: '米家电动螺丝刀',
          desc: '专利一体化无绳设计，轻松开工',
          newPrice: '169.00',
          oldPrice: '199'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/88caa88b73ca4aaeb5f5b1c6609574cc.jpg',
          name: '米家扫地机器人',
          desc: '智商高，扫得干净扫得快',
          newPrice: '1399.00',
          oldPrice: '1699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg',
          name: 'RedmiBook 13 锐龙版 R5 16G 512G  SSD 集显 月光银',
          desc: '全面屏高性能轻薄本',
          newPrice: '3599.00',
          oldPrice: '3999'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/spike.scss");
</style>
