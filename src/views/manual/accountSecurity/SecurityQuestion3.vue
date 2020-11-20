<template>
  <div class="markDown-body">
        <h2>为什么密保重置失败</h2>
        <p>可能原因如下：</p>
        <ol class="list-style-decimal">
            <li marker="1">重置密保过程中，两次输入问题答案不一致。</li>
            <li marker="2">重置密保过程中，输入问题答案有重复。</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SecurityQuestion3',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
