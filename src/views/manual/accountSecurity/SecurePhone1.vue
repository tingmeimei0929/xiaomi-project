<template>
  <div class="markDown-body">
        <h2>安全手机的定义</h2>
        <ol class="list-style-decimal">
            <li marker="1">在小米账号绑定的手机号码称为安全手机，可用于登录账号、重置密码。</li>
            <li marker="2">可查看<a href="#">如何更换安全手机</a>。</li>
        </ol>
        <h2>安全手机的作用</h2>
        <ol class="list-style-decimal">
            <li marker="1">手机号可用于登录账号：
                 <ul class="list-style-circle">
                    <li>有密码登录：使用手机号+密码登录账号。</li>
                    <li>无密码登录：使用手机号+短信验证码快速登录。</li>
                </ul>
            </li>
            <li marker="2">可用于提升账号安全：当账号有异常登录时，会进行安全手机验证，用于防止账号被盗。</li>
            <li marker="3">可用于找回密码：可通过安全手机设置新密码。</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SecurePhone1',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
