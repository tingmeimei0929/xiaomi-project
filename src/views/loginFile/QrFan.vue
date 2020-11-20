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
      <p>使用<span>小米商城APP</span>掃一掃</p>
      <p>小米手機可打開「設置」>「小米帳號」掃碼登入</p>
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
