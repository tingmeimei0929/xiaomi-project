<template>
    <el-container>
        <el-header class="header">
            <div class="meta">
                <img src="data:image/png;base64,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">
                <h3>小米账号使用手册</h3>
            </div>
            <div class="search">
                <input type="text" placeholder="搜索遇到的问题">
                <span><button class="btn">搜索</button></span>
            </div>
        </el-header>
        <el-container class="body">
            <el-aside class="leftMenu">
                <el-menu :default-openeds="['3','3-2']" :default-active="$route.path" class="el-menu-vertical-demo"
                        @select="handleSelect" :unique-opened="true" active-text-color="#ff6700" :collapse="isCollapse">
                    <el-submenu :index="item.id + ''" v-for="item in leftMenu.menuList" :key="item.id">
                        <template slot="title">{{item.authName}}</template>
                        <el-submenu :index="item1.id + ''" v-for="item1 in item.children" :key="item1.id" >
                            <template slot="title">{{item1.secondName}}</template>
                            <el-menu-item  v-for="items in item1.children" :key="items.id" :index="items.url">{{items.thirdName}}</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <!-- <el-submenu index="1">
                        <template slot="title">简介</template>
                        <el-menu-item index="1-1">什么是小米账号</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">新人指南</template>
                        <el-submenu index="2-1">
                            <template slot="title" class="levelTitle">注册</template>
                            <el-menu-item index="/SignUp1">如何注册小米账号</el-menu-item>
                            <el-menu-item index="/SignUp2">已被他人注册过小米账号的手机号，如何注册新账号</el-menu-item>
                            <el-menu-item index="/SignUp3">什么是二次号</el-menu-item>
                            <el-menu-item index="/SignUp4">能否合并微信和手机号注册的两个账号</el-menu-item>
                            <el-menu-item index="/SignUp5">一个手机号可以注册绑定几个小米账号</el-menu-item>
                            <el-menu-item index="/SignUp6">什么是物联网卡</el-menu-item>
                            <el-menu-item index="/SignUp7">为何物联网不能注册小米账号和设置安全手机</el-menu-item>
                        </el-submenu>
                            <el-submenu index="2-2">
                            <template slot="title" class="levelTitle">登录</template>
                            <el-menu-item index="/LoginRules1">如何登录小米账号</el-menu-item>
                            <el-menu-item index="/LoginRules2">如何用微信登录小米账号</el-menu-item>
                            <el-menu-item index="/LoginRules3">账号登录异常的原因</el-menu-item>
                            <el-menu-item index="/LoginRules4">如何查看账号下登录的小米设备</el-menu-item>
                            <el-menu-item index="/LoginRules5">账号长期不登录，会自动注销吗</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                            <template slot="title" class="levelTitle">退出登录</template>
                            <el-menu-item index="/QuitRules">如何退出小米账号</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-4">
                            <template slot="title" class="levelTitle">注销</template>
                                <el-menu-item index="/Logout1">如何注销小米账号</el-menu-item>
                            <el-menu-item index="/Logout2">为什么账号无法注销</el-menu-item>
                            <el-menu-item index="/Logout3">忘记密码，如何注销小米账号</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-5">
                            <template slot="title" class="levelTitle">申诉</template>
                            <el-menu-item index="/Appeal1">如何进行小米账号申诉</el-menu-item>
                            <el-menu-item index="/Appeal2">如何处理申诉单号丢失问题</el-menu-item>
                            <el-menu-item index="/Appeal3">申诉单的定义和作用</el-menu-item>
                            <el-menu-item index="/Appeal4">账号申诉审核周期</el-menu-item>
                            <el-menu-item index="/Appeal5">申诉请求未通过的原因</el-menu-item>
                            <el-menu-item index="/Appeal6">什么情况下要发起账号申诉</el-menu-item>
                            <el-menu-item index="/Appeal7">什么是申诉解锁，如何进行申诉解锁</el-menu-item>
                            <el-menu-item index="/Appeal8">已申诉账号能否再次发起申诉，最多申诉几次</el-menu-item>
                            <el-menu-item index="/Appeal9">为什么账号不能发起申诉</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">常见问题</template>
                        <el-submenu index="3-1">
                            <template slot="title">密码</template>
                                <el-menu-item index="/PasswordRules1">如何重置账号密码</el-menu-item>
                            <el-menu-item index="/PasswordRules2">如何处理修改密码后，提示登录异常</el-menu-item>
                            <el-menu-item index="/PasswordRules3">忘记密码且无安全手机、邮箱、密保，如何登录小米账号</el-menu-item>
                        </el-submenu>
                            <el-submenu index="3-2">
                            <template slot="title">短信和邮箱验证码</template>
                            <el-menu-item index="/SmsQuestion1">为什么收不到短信验证码</el-menu-item>
                            <el-menu-item index="/SmsQuestion2">为什么收不到验证邮件</el-menu-item>
                            <el-menu-item index="/SmsQuestion3">为什么提示短信频次达到上限</el-menu-item>
                            <el-menu-item index="/SmsQuestion4">发送验证码短信数量到达上限后，为什么时间可再次发送</el-menu-item>
                            <el-menu-item index="/SmsQuestion5">为什么短信验证码收到后无法使用</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-3">
                            <template slot="title">绑定解绑第三方账号</template>
                            <el-menu-item index="/ThirdParty1">如何查询账号绑定的第三方信息</el-menu-item>
                            <el-menu-item index="/ThirdParty2">为什么账号违法绑定微信、QQ、微博</el-menu-item>
                            <el-menu-item index="/ThirdParty3">如何解绑微信、QQ、微博账号</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">账号安全</template>
                        <el-submenu index="4-1">
                            <template slot="title">安全手机和邮箱</template>
                            <el-menu-item index="/SecurePhone1">安全手机定义和作用</el-menu-item>
                            <el-menu-item index="/SecurePhone2">如何解绑手机号和邮箱</el-menu-item>
                            <el-menu-item index="/SecurePhone3">如何处理账号被绑定他人手机号/邮箱的问题</el-menu-item>
                            <el-menu-item index="/SecurePhone4">安全邮箱的定义和作用</el-menu-item>
                            <el-menu-item index="/SecurePhone5">如何更换安全手机</el-menu-item>
                            <el-menu-item index="/SecurePhone6">如何更换安全邮箱</el-menu-item>
                            <el-menu-item index="/SecurePhone7">如何将手机号换绑到另一账号</el-menu-item>
                            <el-menu-item index="/SecurePhone8">如何处理绑定邮箱停用问题</el-menu-item>
                            <el-menu-item index="/SecurePhone9">为什么账号无法绑定手机和邮箱</el-menu-item>
                        </el-submenu>
                            <el-submenu index="4-2">
                            <template slot="title">密保问题</template>
                            <el-menu-item index="/SecurityQuestion1">密保的定义和作用</el-menu-item>
                            <el-menu-item index="/SecurityQuestion2">如何重置密保</el-menu-item>
                            <el-menu-item index="/SecurityQuestion3">为什么密保重置失败</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4-3">
                            <template slot="title">丢失被盗或换机</template>
                            <el-menu-item index="/Lost1">如何找回被盗账号</el-menu-item>
                            <el-menu-item index="/Lost2">小米手机丢失、遗弃、赠与要注意哪些问题</el-menu-item>
                        </el-submenu>
                         <el-submenu index="4-5">
                            <template slot="title">安全验证</template>
                            <el-menu-item index="4-5-1">小米账号有哪些安全验证方式</el-menu-item>
                            <el-menu-item index="4-5-2">为什么要验证图片验证码</el-menu-item>
                            <el-menu-item index="4-5-3">什么是小米账号安全令牌，有什么作用</el-menu-item>
                            <el-menu-item index="4-5-4">为什么在登录中输入账号密码后，还需验证手机号</el-menu-item>
                        </el-submenu>
                         <el-submenu index="4-6">
                            <template slot="title">冻结解冻</template>
                            <el-menu-item index="4-6-1">如何冻结解冻账号</el-menu-item>
                            <el-menu-item index="4-6-2">为什么账号被自动冻结</el-menu-item>
                            <el-menu-item index="4-6-3">为什么账号会被封禁</el-menu-item>
                            <el-menu-item index="4-6-4">什么情况下要冻结账号</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">其他</template>
                        <el-menu-item index="5-1">小米云服务的注册手机号已停用，能否继续登录云服务</el-menu-item>
                        <el-menu-item index="5-2">为什么系统提示查找手机等服务激活失败</el-menu-item>
                        <el-menu-item index="5-3">为什么提示激活短信接受失败</el-menu-item>
                        <el-menu-item index="5-4">为什么更换SIM卡，提示重新激活服务</el-menu-item>
                        <el-menu-item index="5-5">为什么激活服务要发送短信</el-menu-item>
                        <el-menu-item index="5-6">为什么小米账号绑定了两个手机号</el-menu-item>
                        <el-menu-item index="5-7">为什么米聊中绑定的手机号，小米账号中未显示</el-menu-item>
                        <el-menu-item index="5-8">为什么提示游戏账号有问题</el-menu-item>
                        <el-menu-item index="5-9">为什么账号无法登录小米论坛</el-menu-item>
                        <el-menu-item index="5-10">账号注销后，之前购买的云服务等权益，会被他人重新注册后盗用吗</el-menu-item>
                        <el-menu-item index="5-11">什么是查找手机无网络定位服务</el-menu-item>
                        <el-menu-item index="5-12">什么是免费网络短信服务</el-menu-item>
                        <el-menu-item index="5-13">什么是通话记录同步短信同步服务</el-menu-item>
                    </el-submenu>

                    -->
                </el-menu>
            </el-aside>
            <el-main class="rightContent">
                <router-view></router-view>
                <div class="common-question">
                    <span>{{ prompt }}</span>
                    <el-button @click="yes" v-show="isShow">是</el-button>
                    <el-button @click="no" v-show="isShow">否</el-button>
                </div>
                <div class="footer">
                    <ul class="pagination" v-if="totalPage > 0">
                        <li class="prevBtn">
                            <a href="javascript:void(0)" v-show="currentPage > 1 && showPrev" @click="setPage('currentPage - 1')"><i class="el-icon-alichangyongicon-"></i>上一页</a>
                            <span>xxx</span>
                        </li>
                        <li class="nextBtn">
                            <a href="javascript:void(0)" v-show="currentPage < totalPage && showNext" v-on:click="setPage('currentPage + 1')">下一页<i class="el-icon-alijiantou"></i></a>
                            <span>xxx</span>
                        </li>
                    </ul>
                    <div class="horizontal-divider"></div>
                    <div class="law-section">
                        <div class="links">
                            <a href="https://privacy.mi.com/miaccount/zh_CN">隐私政策</a>
                            <a href="https://static.account.xiaomi.com/html/agreement/user/zh_CN_undefined.html">用户协议</a>
                        </div>
                        <div class="bottom">
                            <div class="reserve">©2020 MIUI . All rights reserved 京ICP备10046444号 京公网安备1101080212535</div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'CodeRules',
  data () {
    return {
      value: false,
      current: 1,
      allpage: 13,
      prompt: '有帮助吗？',
      isShow: true,
      currentPage: 0,
      leftMenu: {
        isCollapse: false,
        menuList: [
          {
            authName: '简介',
            children: [{
              children: [
                { thirdName: '什么是小米账号', url: './accountName' }
              ]
            }]
          },
          {
            authName: '新人指南',
            children: [{
              secondName: '注册',
              children: [
                { thirdName: '如何注册小米账号', url: './newcomerGuide/SignUp1' },
                { thirdName: '已被他人注册过小米账号的手机号，如何注册新账号', url: './newcomerGuide/SignUp2' },
                { thirdName: '什么是二次号', url: './newcomerGuide/SignUp3' },
                { thirdName: '能否合并微信和手机号注册的两个账号', url: './newcomerGuide/SignUp4' },
                { thirdName: '一个手机号可以注册绑定几个小米账号', url: './newcomerGuide/SignUp5' },
                { thirdName: '什么是物联网卡', url: './newcomerGuide/SignUp6' },
                { thirdName: '为何物联网卡不能注册小米账号和设置安全手机', url: './newcomerGuide/SignUp7' }
              ]
            },
            {
              secondName: '登录',
              children: [
                { thirdName: '如何登录小米账号', url: './newcomerGuide/LoginRules1' },
                { thirdName: '如何用微信登录小米账号', url: './newcomerGuide/LoginRules2' },
                { thirdName: '账号登录异常的原因', url: './newcomerGuide/LoginRules3' },
                { thirdName: '如何查看账号下登录的小米设备', url: './newcomerGuide/LoginRules4' },
                { thirdName: '账号长期不登录，会自动注销吗', url: './newcomerGuide/LoginRules5' }
              ]
            },
            {
              secondName: '退出登录',
              children: [
                { thirdName: '如何退出小米账号', url: './newcomerGuide/QuitRules' }
              ]
            },
            {
              secondName: '注销',
              children: [
                { thirdName: '如何注销小米账号', url: './newcomerGuide/Logout1' },
                { thirdName: '为什么账号无法注销', url: './newcomerGuide/Logout2' },
                { thirdName: '忘记密码，如何注销小米账号', url: './newcomerGuide/Logout3' }
              ]
            },
            {
              secondName: '申诉',
              children: [
                { thirdName: '如何进行小米账号申诉', url: './newcomerGuide/Appeal1' },
                { thirdName: '如何处理申诉单号丢失问题', url: './newcomerGuide/Appeal2' },
                { thirdName: '申诉单的定义和作用', url: './newcomerGuide/Appeal3' },
                { thirdName: '账号申诉审核周期', url: './newcomerGuide/Appeal4' },
                { thirdName: '什么情况下要发起账号申诉', url: './newcomerGuide/Appeal5' },
                { thirdName: '什么是申诉解锁，如何进行申诉解锁', url: './newcomerGuide/Appeal6' },
                { thirdName: '已申诉账号能否再次发起申诉，最多申诉几次', url: './newcomerGuide/Appeal7' },
                { thirdName: '为什么账号不能申诉通知', url: './newcomerGuide/Appeal8' },
                { thirdName: '如何进行申诉解锁', url: './newcomerGuide/Appeal9' }
              ]
            }]
          },
          {
            authName: '常见问题',
            children: [{
              secondName: '密码',
              children: [
                { thirdName: '如何重置小米账号', url: './commonProblem/PasswordRules1' },
                { thirdName: '如何处理修改密码后，提示登录异常', url: './commonProblem/PasswordRules2' },
                { thirdName: '忘记密码且无安全手机、邮箱、密保，如何登录小米账号', url: './commonProblem/PasswordRules3' }
              ]
            },
            {
              secondName: '短信和邮箱验证码',
              children: [
                { thirdName: '为什么收不到短信验证码', url: './commonProblem/SmsQuestion1' },
                { thirdName: '为什么收不到验证邮箱', url: './commonProblem/SmsQuestion2' },
                { thirdName: '为什么提示短信频次达到上限', url: './commonProblem/SmsQuestion3' },
                { thirdName: '发送验证码短信数量到达上限后，什么时间可再次发送', url: './commonProblem/SmsQuestion4' },
                { thirdName: '为什么短信验证码收到后无法使用', url: './commonProblem/SmsQuestion5' }
              ]
            },
            {
              secondName: '绑定解绑第三方账号',
              children: [
                { thirdName: '如何查询账号绑定的第三方账号信息', url: './commonProblem/ThirdParty1' },
                { thirdName: '为什么账号无法绑定微信、QQ、微博', url: './commonProblem/ThirdParty2' },
                { thirdName: '如何解绑微信、QQ、微博账号', url: './commonProblem/ThirdParty3' }
              ]
            }]
          },
          {
            authName: '账号安全',
            children: [{
              secondName: '安全手机和邮箱',
              children: [
                { thirdName: '安全手机定义和作用', url: './accountSecurity/SecurePhone1' },
                { thirdName: '如何解绑手机号和邮箱', url: './accountSecurity/SecurePhone2' },
                { thirdName: '如何处理账号被绑定他人手机号/邮箱的问题', url: './accountSecurity/SecurePhone3' },
                { thirdName: '安全邮箱的定义和作用', url: './accountSecurity/SecurePhone4' },
                { thirdName: '如何更换安全手机', url: './accountSecurity/SecurePhone5' },
                { thirdName: '如何更换安全邮箱', url: './accountSecurity/SecurePhone6' },
                { thirdName: '如何将手机号换绑到另一账号', url: './accountSecurity/SecurePhone7' },
                { thirdName: '如何处理绑定邮箱停用问题', url: './accountSecurity/SecurePhone8' },
                { thirdName: '为什么账号无法绑定手机和邮箱', url: './accountSecurity/SecurePhone9' }
              ]
            },
            {
              secondName: '密保问题',
              children: [
                { thirdName: '密保的定义的作用', url: './accountSecurity/SecurityQuestion1' },
                { thirdName: '如何重置密保', url: './accountSecurity/SecurityQuestion2' },
                { thirdName: '为什么密保重置失败', url: './accountSecurity/SecurityQuestion3' }
              ]
            },
            {
              secondName: '丢失被盗或换机',
              children: [
                { thirdName: '如何找回被盗账号', url: './accountSecurity/Lost1' },
                { thirdName: '小米手机丢失、遗弃、赠与要注意哪些问题', url: './accountSecurity/Lost2' }
              ]
            },
            {
              secondName: '安全验证',
              children: [
                { thirdName: '小米账号有哪些安全验证方式' },
                { thirdName: '为什么要验证图片验证码' },
                { thirdName: '什么事小米账号安全令牌，有什么作用' },
                { thirdName: '为什么在登录中输入账号密码后，还需要验证手机号' }
              ]
            },
            {
              secondName: '冻结解冻',
              children: [
                { thirdName: '如何冻结解冻账号' },
                { thirdName: '为什么账号被自动冻结' },
                { thirdName: '为什么账号会被封禁' },
                { thirdName: '什么情况下要冻结账号' }
              ]
            }]
          },
          {
            authName: '其他',
            children: [{
              children: [
                { thirdName: '小米云服务的注册手机号已停用，能否继续登录云服务' },
                { thirdName: '为什么系统提示查找手机等服务激活失败' },
                { thirdName: '为什么提示激活短信接受失败' },
                { thirdName: '为什么更换SIM卡，提示重新激活服务' },
                { thirdName: '为什么激活服务要发送短信' },
                { thirdName: '为什么小米账号绑定了两个手机号' },
                { thirdName: '为什么米聊中绑定的手机号，小米账号中未显示' },
                { thirdName: '为什么账号无法绑定微信、QQ、微博' },
                { thirdName: '为什么提示游戏账号有问题' },
                { thirdName: '为什么账号无法登录小米论坛' },
                { thirdName: '账号注销后，之前购买的云服务等权益，会被他人重新注册后盗用吗' },
                { thirdName: '什么是查找手机无网络定位服务' }
              ]
            }]
          }
        ]
      }

    }
  },
  props: {
    totalPage: { // 总页数
      type: Number,
      default: 1,
      required: true
    },
    showPrev: { // 是否显示“上一页”
      type: Boolean,
      default: true
    },
    showNext: { // 是否显示“下一页”
      type: Boolean,
      default: true
    }
  },
  created () { // 初始化时currentPage赋值
    this.currentPage = this.initPage
  },
  methods: {
    yes () {
      this.prompt = '感谢您的反馈'
      this.isShow = false
    },
    no () {
      this.prompt = '感谢您的反馈'
      this.isShow = false
    },
    setPage (page) {
      if (page < 1) {
        page = 1
      }
      if (page > this.totalPage) {
        page = this.totalPage
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../assets/scss/codeRules.scss');
</style>
<style lang="scss">
 .el-menu .el-submenu >.el-submenu__title{
    width: inherit;
    text-align: left !important;
    font-weight: 700;
    height:40px;
    line-height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    text-overflow: ellipsis;

    &.levelTitle{
        font-weight:normal !important;
    }
}
.el-menu-item-group__title{
    font-size: 14px !important;
    text-align: left !important;
    color: rgba(0,0,0,.8) !important;
    cursor: pointer;
}
.el-submenu .el-menu-item {
    word-wrap:break-all !important;
    height:40px;
    line-height: 40px;
    text-align: left !important;
    color: rgba(0,0,0,.8) !important;
    cursor: pointer;
    width: calc(100% + 1px);
}
.el-menu .el-submenu >.el-submenu__title:hover{
   color: #ff6700 !important;
   background: #fff !important;
}
.el-menu.el-submenu >.el-menu-item.is-active{
    color: #ff6700 !important;
    background: #fff4e6 !important;
}
</style>
