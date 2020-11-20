<template>
  <div class="login-type">
    <div class="qr-img"
         id="qr-img"
         source="https://c3.account.xiaomi.com/longPolling/login?ticket=DA04705a0742-77d5-457d-93b1-4d2c0221df07&dc=c3&_qrsize=180">
      <img width="180"
           height="180"
           src="../../assets/image/qr.png">
    </div>
    <div class="custom">
      <p>使用<span>小米商城APP</span>扫一扫</p>
      <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qr',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/login.scss");
</style>
