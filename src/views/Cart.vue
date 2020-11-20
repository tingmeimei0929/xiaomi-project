<template>
  <div>
    <header class="cart-header">
      <div class="container">
        <div class="nav-logo">
          <a href="https://www.mi.com/index.html"
             class="logo"></a>
        </div>
        <h3>我的购物车</h3>
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        <div class="header-right">
          <a href="javascript:void(0)"
             @click="login">登录</a>
          <a>|</a>
          <a href="javascript:void(0)"
             @click="signUp">注册</a>
        </div>
      </div>
    </header>
    <div class="cart-main">
        <div class="container">
            <!--  v-if="getShoppingCart.length>0" -->
            <div class="cart-top" >
                <ul>
                    <!-- 购物车表头 -->
                    <li class="first">
                        <div class="col pro-check">
                            <el-checkbox v-model="isAllCheck">全选</el-checkbox>
                        </div>
                        <div class="col pro-img"></div>
                        <div class="col pro-name">商品名称</div>
                        <div class="col pro-price">单价</div>
                        <div class="col pro-num">数量</div>
                        <div class="col pro-total">小计</div>
                        <div class="col pro-hidden"></div>
                        <div class="col pro-action">操作</div>
                    </li>
                    <!-- 购物车列表 -->
                    <li class="product-list" v-for="(item,index) in getShoppingCart" :key="item.id">
                        <div class="col pro-check">
                            <el-checkbox :value="item.check" @check="checkChange($event,index)"></el-checkbox>
                        </div>
                        <div class="col pro-img">
                            <router-link :to="{
                                path: '/goods/details',
                                query: {productID}
                            }">
                                <img :src="$target + item.productImg" />
                            </router-link>
                        </div>
                        <div class="col pro-name">
                            <router-link
                                :to="{path: '/goods/deatils', query: {productID: item.productID}}">
                                {{ item.productName }}
                            </router-link>
                        </div>
                        <div class="col pro-price">{{ item.price }}元</div>
                        <div class="col pro-num">
                            <el-input-number
                                size="small"
                                :value="item.num"
                                @change="handleChange($event, index, item.productID)"
                                :min="1"
                                :max="item.maxNum">
                            </el-input-number>
                        </div>
                        <div class="col pro-total pro-total-in">{{ item.price*item.num }}元</div>
                        <div class="col pro-hidden"></div>
                        <div class="col pro-action">
                            <el-popover placement="right">
                                <p>确定删除吗？</p>
                                <div style="text-align: right;margin: 10px 0 0">
                                    <el-button
                                        type="primary"
                                        size="mini"
                                        @click="deleteItem($event, item.id, item.productID)">确定
                                    </el-button>
                                </div>
                                <i class="el-icon-error" slot="reference" style="font-size: 18px"></i>
                            </el-popover>
                        </div>
                    </li>
                </ul>
                <!-- 购物车底部导航条 -->
                <div class="cart-bar">
                    <div class="cart-car-left">
                        <span class="continue">
                            <router-link to="/goods">继续购物</router-link>
                        </span>
                        <span class="cart-total">共
                            <span class="cart-total-num">{{ getNum }}</span>件商品，已选择
                            <span class="cart-total-num">{{ getCheckNum }}</span>件
                        </span>
                    </div>
                    <div class="cart-bar-right">
                        <span>
                            <span class="total-price-title">合计：</span>
                            <span class="total-price"><span class="number">{{ getTotalPrice }}</span>元</span>
                        </span>
                        <!-- <router-link :to="getCheckNum > 0 ? '/confirmOrder' : ''">
                            <div :class="getCheckNum > 0 ? 'btn-primary' : 'btn-primary-disabled'" >
                                去结算
                            </div>
                        </router-link> -->
                        <a href="#">去结算</a>
                    </div>
                </div>
            </div>
            <!-- 购物车为空的时候显示的内容 -->
            <!-- <div v-else class="cart-empty">
                <div class="empty">
                    <h2>您的购物车还是空的！</h2>
                    <p>快去购物吧！</p>
                </div>
            </div> -->
            <div class="cart-bottom">
                <h2>
                    <span>买购物车中商品的人还买了</span>
                </h2>
                <div class="productList">
                    <ul>
                        <li v-for="(item, index) in recommendProduct" :key="index">
                            <div class="thumb">
                                <img v-lazy="item.imgSrc">
                            </div>
                            <p class="content-title">{{ item.name }}</p>
                            <p class="price">{{ item.price }}元</p>
                            <p class="tips">{{ item.tips}}</p>
                            <p class="btn" :disabled="dis" @click="addShoppingCart">加入购物车</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <navFooter></navFooter>
  </div>
</template>

<script>
import navFooter from '../components/Footer'
import { mapActions } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      recommendProduct: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '小米巨能写中性笔10支装',
          price: '9.99',
          tips: '112.7万人好评'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a2889874bdd0d3565f0dbf7bcc56abc1.jpg?thumb=1&w=360&h=360',
          name: '黑鲨游戏 Type-C 耳机',
          price: '99',
          tips: '4330人好评'
        },
        {
          imgSrc: '//i8.mifile.cn/b2c-mimall-media/64de04b0cb774f0b33ed4a00df0f9c3c!360x360.jpg',
          name: '手机USB micro 数据线  ',
          price: '9.9',
          tips: '44.1万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4edbcaa6ce1e36a121ad63ff460c7d8d.png?thumb=1&w=360&h=360&f=webp&q=90',
          name: '小米手环4 NFC版',
          price: '179',
          tips: '51.2万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07390d2d89220f2e3f06710360ec1077.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '米家压力IH电饭煲1S 3L',
          price: '1099',
          tips: '1.6万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/27a4c031437fd27d2063977a4c1650c3.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '小爱老师 4G版',
          price: '999',
          tips: '2.7万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/634566706d943d710f61debe31ea566b.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '米家破壁料理机',
          price: '599',
          tips: '5.4万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/39ab0576f66275a0ce9793a628976c8f.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '米家防蓝光护目镜 Pro',
          price: '149',
          tips: '6.8万人好评'
        },
        {
          imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c5854c18a9078a2b1809dbee6b7dbd8.jpg?thumb=1&w=360&h=360',
          name: '变频 | 米家互联网空调 1.5匹',
          price: '2699',
          tips: '49.5万人好评'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecf96d63d48c90af6867bdd673df7284.jpg?thumb=1&w=360&h=360&f=webp&q=90',
          name: '照片打印机彩色相纸',
          price: '59',
          tips: '13.7万人好评'
        }
      ]
    }
  },
  components: {
    navFooter
  },
  computed: {
    isAllCheck: {
      get () {
        return this.$store.getters.getIsAllCheck
      },
      set (val) {
        this.checkAll(val)
      }

    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/LoginEn'
      })
    },
    signUp () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    },
    ...mapActions(['unShiftShoppingCart', 'addShoppingCartNum']),
    // 加入购物车
    addShoppingCart () {
      // 判断是否登录，没有登录则显示登录组建
      if (!this.$store.getters.getUser) {
        this.$store.dispatch('setShowLogin', true)
      }
      //    向后端发起请求，把商品信息插入数据库的购物车表
      this.$axiso.post('/api/user/shoppingCart/addShoppingCart', {
        user_id: this.$store.getters.getUser.user_id,
        product_id: this.productID
      }).then(res => {
        switch (res.data.code) {
          case '001':
            // 新加入购物车成功
            this.unshiftShoppingCart(res.data.shoppingCartData[0])
            this.notifySucceed(res.data.msg)
            break
          case '002':
            // 该商品已经在购物车，数量+1
            this.addShoppingCartNum(this.productID)
            this.notifySucceed(res.data.msg)
            break
          case '003':
            // 商品数量达到限购数量
            this.dis = true
            this.notifyError(res.data.msg)
            break
          case '004':
            // 没有登录
            this.notifyError(res.data.msg)
        }
      }).catch(err => {
        return Promise.reject(err)
      })
    },
    // 向后端发起删除购物车的数据库信息请求
    deleteItem (e, id, productID) {
      this.$axios.post('/api/user/shoppingCart/deleteShoppingCart', {
        user_id: this.$store.getters.getUser.user_id,
        product_id: productID
      }).then(res => {
        switch (res.data.code) {
          case '001':
            // 删除成功
            // 更新vuex状态
            this.deleteShoppingCart(id)
            // 提示删除成功信息
            this.notifySucceed(res.data.msg)
            break
          default:
            //   提示删除失败信息
            this.notifyError(res.data.msg)
        }
      }).catch(err => {
        return Promise.reject(err)
      })
    },
    // 修改商品数量的时候调用该函数
    handleChange (currentValue, key, productID) {
      // 当修改数量时，默认勾选
      this.updateShoppingCart({ key: key, prop: 'check', val: true })
      //   向后端发起修改购物车商品数量的请求
      this.$axios.post('/api/user/shoppingCart/updateShoppingCart', {
        user_id: this.$store.getters.getUser.user_id,
        product_id: productID,
        num: currentValue
      }).then(res => {
        switch (res.data.code) {
          case '001':
            //   001代表修改成功
            // 更新vuex状态
            this.updateShoppingCart({
              key: key,
              prop: 'num',
              val: currentValue
            })
            //  提示修改成功信息
            this.notifySucceed(res.data.msg)
            break
          default:
            //   提示修改失败信息
            this.notifyError(res.data.msg)
        }
      }).catch(err => {
        return Promise.reject(err)
      })
    },
    checkChange (val, key) {
      // 更新vuex中购物车商品是否勾选的状态
      this.updateShoppingCart({ key: key, prop: 'check', val: val })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/cart.scss");
</style>
<style>
.el-checkbox__inner{
    width: 18px !important;
    height: 18px !important;
}
.el-checkbox__inner:hover {
    background-color: #ff6700 !important;
    color: #ff6700 !important;
    border-color: #ff6700 !important;
}

</style>
