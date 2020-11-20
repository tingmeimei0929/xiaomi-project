<template>
    <div class="markDown-body">
        <h2>为什么短信验证码收到后无法使用</h2>
        <ol class="list-style-decimal">
            <li marker="1">收到短信验证码已过期。  </li>
            <li marker="2">接受多条短信验证码，请输入最新验证码。  </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SmsQuestion5',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
