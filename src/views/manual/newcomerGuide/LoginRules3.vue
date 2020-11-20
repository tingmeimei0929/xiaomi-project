<template>
  <div class="markDown-body">
        <h2>账号登录异常的原因</h2>
        <p>账号登录异常原因如下：</p>
        <ol class="list-style-decimal">
            <li marker="1">网络问题：请你检查网络是否处于未连接/不可用状态。</li>
            <li marker="2">操作频繁：因多次输入密码错误，账号被暂时冻结。你可以等待1小时后重试。</li>
            <li marker="3">违规操作：涉嫌法广告贴等违规操作，账号被暂时冻结。你可以等待一段时间后重试或联系客服（400-100-5678）。  </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'LoginRules3',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
