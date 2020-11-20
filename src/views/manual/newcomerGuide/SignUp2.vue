<template>
  <div class="markDown-body">
        <h2>已被他人注册过小米帐号的手机号，如何注册新帐号</h2>
        <p>已被他人注册过小米帐号的手机号被称为
            <a href="#">二次号</a>
        </p>
        <ol class="list-style-decimal">
            <li marker="1">如果系统判定你的手机号是二次号，则会用此手机号直接注册新的帐号。</li>
            <li marker="2">如果系统判定你的手机号疑似二次号，则会询问你，该手机号对应的小米帐号（头像和昵称）是否为你本人帐号。
                <ul class="list-style-circle">
                    <li>若是本人的帐号，则点击【是我的，去登录】，则正常登录，确保手机号和小米帐号为你本人所属。</li>
                    <li>若不是本人的帐号，则点击【不是我的，去注册】，重新注册新小米帐号与此手机号关联。系统会自动绑定该手机号为帐号的<a href="#">安全手机</a></li>
                </ul>
             </li>
            <li marker="3">如果系统判定你的手机号不是二次号，则会直接登录原帐号。  </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SignUp2',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/scss/codeRules.scss');
</style>
