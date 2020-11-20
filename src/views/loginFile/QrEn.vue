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
      <p>Scan using <span>Mi Store</span> app</p>
      <p>Go to Settings > Mi Account on your Mi Phone to sign in using a QR code</p>
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
