<template>
    <div class="markDown-body">
        <h2>为什么账号无法注销</h2>
        <p>由于一下原因，暂时无法注销你的账号。</p>
        <ol class="list-style-decimal">
            <li marker="1">存在未关闭查找手机的设备，<a href="#"> 请点击关闭设备</a>。 </li>
            <li marker="2">存在未清除实名信息。请到小米支付进行实名解绑或者联系人工客服400-100-5678.  </li>
            <li marker="3">未绑定手机号或邮箱。需要设置（<a href="#">安全手机</a>或<a href="#">安全邮箱</a>）等任一种安全验证方式后菜可以注销账号。  </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'Logout2',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
