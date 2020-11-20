<template>
  <div class="markDown-body">
        <h2>为什么账号无法绑定手机和邮箱</h2>
        <ol class="list-style-decimal">
            <li marker="1">无法绑定手机号，可能原因如下：
                <ul class="list-style-circle">
                    <li>手机欠费停机收不到验证码，请及时充缴话费。</li>
                    <li>网络异常，情=请确认网络状态是否正确。</li>
                    <li>手机号已绑定其他小米账号，请解绑后重绑。</li>
                    <li>手机号对应的国家码错误，请填写正确国家码。</li>
                </ul>
            </li>
            <li marker="2">无法绑定邮箱，可能原因如下：
                <ul class="list-style-circle">
                    <li>邮箱输入错误，请填写正确邮箱。</li>
                    <li>输入邮箱已被绑定，请解绑后重绑。</li>
                    <li>网络异常，请确认网络状态是否正常。</li>
                </ul>
             </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SecurePhone9',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
