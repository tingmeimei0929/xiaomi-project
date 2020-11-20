<template>
    <div class="context dark-theme">
        <div class="breadcrumb">
            <a href="../Popular.vue">首页</a>
            <span class="sep">></span>
            <a href="#" @click="toHome">企业购</a>
            <span class="sep">></span>
            <span>新品 ▪ 礼品卡产品列表</span>
        </div>
        <div class="productList">
            <ul>
                <li v-for="(item, index) in detailList" :key="index">
                    <div class="thumb">
                        <img v-lazy="item.imgSrc">
                    </div>
                    <p class="content-title">{{ item.name }}</p>
                    <p class="desc">{{ item.desc }}</p>
                    <div class="btn-primary" @click="dialogVisible = true">登录企业账户开始采购</div>
                    <el-dialog :visible.sync="dialogVisible" >
                        <div>
                            <h2>开通企业账户</h2>
                            <p>24小时内完成审核(工作日)，遇法定节假日顺延</p>
                            <el-form :model="form">
                                <el-form-item label="公司信息">
                                    <el-input v-model="name" placeholder="公司名称(审核通过后不可修改，用于增票开具)"></el-input>
                                    <el-input v-model="code" placeholder="统一社会信用代码"></el-input>
                                    <el-upload action="上传营业执照" list-type="picture-card" :auto-upload="false">
                                        <i slot="default" class="el-icon-plus"></i>
                                        <div slot="file" slot-scope="{file}">
                                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                            <span class="el-upload-list__item-actions">
                                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                                    <i class="el-icon-zoom-in"></i>
                                                </span>
                                                <span v-if="!disabled" class="el-upload-list_item-delete"  @click="handleDownload(file)">
                                                    <i class="el-icon-download"></i>
                                                </span>
                                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                                    <i class="el-icon-delete"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </el-upload>
                                    <!-- <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog> -->
                                </el-form-item>
                                <el-form-item label="采购联系信息">
                                    <el-input v-model="phone"  placeholder="手机号码"></el-input>
                                    <el-input v-model="email"  placeholder="电子邮箱"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button type="primary" @click="dialogvisible = false">申请开通</el-button>
                            </div>
                        </div>
                    </el-dialog>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'newProduct',
  data () {
    return {
      detailList: [
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
          name: '小米10 Pro 全网通版 ',
          desc: '小米10 Pro 全网通版 '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
          name: '小米10 全网通版 8GB+256GB ',
          desc: '小米10 全网通版 8GB+256GB '
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591779698.42084692.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米手环 5',
          desc: '小米手环 5'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591779698.42084692.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米手环5 NFC版',
          desc: '小米手环5 NFC版 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596709637.85662673.jpg?f=webp&thumb=1&w=200&h=200',
          name: '米家电动精修螺丝刀',
          desc: '米家电动精修螺丝刀 灰色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583396453.67216261.jpg?f=webp&thumb=1&w=200&h=200',
          name: '智能门铃2 黑色',
          desc: '智能门铃2 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?f=webp&thumb=1&w=200&h=200',
          name: '悦米YM人体工学椅',
          desc: '悦米YM人体工学椅'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/e4063b7f-74d4-226b-85e5-92c154ed8f48!200x200.jpg',
          name: '小米米家对讲机2',
          desc: '小米米家对讲机2'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/67103985-040d-c3f1-aded-e088e976b0de!200x200.jpg',
          name: '小米礼品卡（电子卡）200元',
          desc: '电子卡无需寄运，即买即用'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/206545b1-0d77-7fe5-977b-1ff5ee3b5fb3!200x200.jpg',
          name: '小米礼品卡（电子卡）500元',
          desc: '电子卡无需寄运，即买即用'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/bd9a786c-23b8-8374-5fdc-a05b6c6188d7!200x200.jpg',
          name: '小米小背包  20L',
          desc: '小米小背包  20L'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1578989481.23294722.jpg?f=webp&thumb=1&w=200&h=200',
          name: '米家电子体温计 白色',
          desc: '米家电子体温计 白色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581411694.79656473.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米无线充蓝牙音箱 白色',
          desc: '小米无线充蓝牙音箱 白色'
        }
      ]
    }
  },
  methods: {
    toHome () {
      this.$router.push({
        path: '/Company/NewList'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/company.scss");
</style>
