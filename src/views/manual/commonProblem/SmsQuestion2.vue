<template>
    <div class="markDown-body">
        <h2>为什么收不到验证邮件</h2>
        <ol class="list-style-decimal">
            <li marker="1">请确认邮箱是否设置垃圾邮件自动过滤，可进入垃圾箱查找含“小米账号”发送的邮件。</li>
            <li marker="2">请确认小米账号的邮件地址是否被列入黑名单；可将“小米账号”的邮件地址：account-service@xiaomi.com从黑名单中移除。  </li>
            <li marker="3">请确认绑定安全邮箱是否为可用状态，若绑定邮箱已注销停用，请查询<a href="#">如何更换安全邮箱</a>。  </li>
            <li marker="4">以上原因均未出现，可能是“小米账号”的邮件地址被企业邮件服务器拦截，请联系企业邮箱管理员。 </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SmsQuestion2',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
