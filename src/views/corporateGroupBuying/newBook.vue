<template>
    <div class="context dark-theme">
        <div class="breadcrumb">
            <a href="../Popular.vue">首页</a>
            <span class="sep">></span>
            <a href="#" @click="toHome">企业购</a>
            <span class="sep">></span>
            <span>笔记本产品列表</span>
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
  name: 'newBook',
  data () {
    return {
      detailList: [
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/b1cf9dd4-fc55-4a79-b001-b7ea5f1bb614!200x200.jpg',
          name: '12.5"小米笔记本Air ',
          desc: '12.5"小米笔记本Air '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8d97cb7f-2d41-cab4-9cd0-f4c2171f1a6e!200x200.jpg',
          name: '小米笔记本15.6" 2019款 独显版',
          desc: '小米笔记本15.6" 2019款 独显版'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7e0a6709-90db-03d4-26d4-c2d914a57fc0!200x200.jpg',
          name: 'Air 13.3" 2019款',
          desc: 'Air 13.3" 2019款'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/a9c7fd86-4971-5d79-1de8-169729df9d3e!200x200.jpg',
          name: '小米笔记本Air 12.5',
          desc: '小米笔记本Air 12.5'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d78909bb-432b-5d4f-2c1d-c7671524fe54!200x200.jpg',
          name: '小米笔记本Pro 15.6" GTX版',
          desc: '小米笔记本Pro 15.6" GTX版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 Ⅱ 锐龙版',
          desc: 'RedmiBook 14 Ⅱ 锐龙版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰',
          desc: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16',
          desc: 'RedmiBook 16'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d9f17458-7a5b-5782-f716-408a92eae8cd!200x200.jpg',
          name: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银',
          desc: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573354088.50166004.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米无线鼠标 Lite 黑色',
          desc: '小米无线鼠标 Lite 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590547529.25156020.png?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi显示器1A 23.8英寸 黑色',
          desc: 'Redmi显示器1A 23.8英寸 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587889153.95461345.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色',
          desc: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/069b6d40-e487-69a2-c4f1-419b49510cef!200x200.jpg',
          name: 'RedmiBook 14 锐龙版 ',
          desc: 'RedmiBook 14 锐龙版 '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/b1cf9dd4-fc55-4a79-b001-b7ea5f1bb614!200x200.jpg',
          name: '12.5"小米笔记本Air ',
          desc: '12.5"小米笔记本Air '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8d97cb7f-2d41-cab4-9cd0-f4c2171f1a6e!200x200.jpg',
          name: '小米笔记本15.6" 2019款 独显版',
          desc: '小米笔记本15.6" 2019款 独显版'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7e0a6709-90db-03d4-26d4-c2d914a57fc0!200x200.jpg',
          name: 'Air 13.3" 2019款',
          desc: 'Air 13.3" 2019款'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/a9c7fd86-4971-5d79-1de8-169729df9d3e!200x200.jpg',
          name: '小米笔记本Air 12.5',
          desc: '小米笔记本Air 12.5'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d78909bb-432b-5d4f-2c1d-c7671524fe54!200x200.jpg',
          name: '小米笔记本Pro 15.6" GTX版',
          desc: '小米笔记本Pro 15.6" GTX版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 Ⅱ 锐龙版',
          desc: 'RedmiBook 14 Ⅱ 锐龙版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰',
          desc: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16',
          desc: 'RedmiBook 16'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d9f17458-7a5b-5782-f716-408a92eae8cd!200x200.jpg',
          name: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银',
          desc: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573354088.50166004.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米无线鼠标 Lite 黑色',
          desc: '小米无线鼠标 Lite 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590547529.25156020.png?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi显示器1A 23.8英寸 黑色',
          desc: 'Redmi显示器1A 23.8英寸 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587889153.95461345.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色',
          desc: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/069b6d40-e487-69a2-c4f1-419b49510cef!200x200.jpg',
          name: 'RedmiBook 14 锐龙版 ',
          desc: 'RedmiBook 14 锐龙版 '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/b1cf9dd4-fc55-4a79-b001-b7ea5f1bb614!200x200.jpg',
          name: '12.5"小米笔记本Air ',
          desc: '12.5"小米笔记本Air '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8d97cb7f-2d41-cab4-9cd0-f4c2171f1a6e!200x200.jpg',
          name: '小米笔记本15.6" 2019款 独显版',
          desc: '小米笔记本15.6" 2019款 独显版'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7e0a6709-90db-03d4-26d4-c2d914a57fc0!200x200.jpg',
          name: 'Air 13.3" 2019款',
          desc: 'Air 13.3" 2019款'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/a9c7fd86-4971-5d79-1de8-169729df9d3e!200x200.jpg',
          name: '小米笔记本Air 12.5',
          desc: '小米笔记本Air 12.5'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d78909bb-432b-5d4f-2c1d-c7671524fe54!200x200.jpg',
          name: '小米笔记本Pro 15.6" GTX版',
          desc: '小米笔记本Pro 15.6" GTX版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 Ⅱ 锐龙版',
          desc: 'RedmiBook 14 Ⅱ 锐龙版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰',
          desc: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16',
          desc: 'RedmiBook 16'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d9f17458-7a5b-5782-f716-408a92eae8cd!200x200.jpg',
          name: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银',
          desc: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573354088.50166004.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米无线鼠标 Lite 黑色',
          desc: '小米无线鼠标 Lite 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590547529.25156020.png?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi显示器1A 23.8英寸 黑色',
          desc: 'Redmi显示器1A 23.8英寸 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587889153.95461345.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色',
          desc: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/069b6d40-e487-69a2-c4f1-419b49510cef!200x200.jpg',
          name: 'RedmiBook 14 锐龙版 ',
          desc: 'RedmiBook 14 锐龙版 '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/b1cf9dd4-fc55-4a79-b001-b7ea5f1bb614!200x200.jpg',
          name: '12.5"小米笔记本Air ',
          desc: '12.5"小米笔记本Air '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8d97cb7f-2d41-cab4-9cd0-f4c2171f1a6e!200x200.jpg',
          name: '小米笔记本15.6" 2019款 独显版',
          desc: '小米笔记本15.6" 2019款 独显版'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7e0a6709-90db-03d4-26d4-c2d914a57fc0!200x200.jpg',
          name: 'Air 13.3" 2019款',
          desc: 'Air 13.3" 2019款'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/a9c7fd86-4971-5d79-1de8-169729df9d3e!200x200.jpg',
          name: '小米笔记本Air 12.5',
          desc: '小米笔记本Air 12.5'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d78909bb-432b-5d4f-2c1d-c7671524fe54!200x200.jpg',
          name: '小米笔记本Pro 15.6" GTX版',
          desc: '小米笔记本Pro 15.6" GTX版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 Ⅱ 锐龙版',
          desc: 'RedmiBook 14 Ⅱ 锐龙版'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰',
          desc: 'RedmiBook 16 锐龙版 R7/16G/512G SATA/ 100% sRGB/灰'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 16',
          desc: 'RedmiBook 16'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/d9f17458-7a5b-5782-f716-408a92eae8cd!200x200.jpg',
          name: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银',
          desc: 'RedmiBook 14 增强版 I5/8G/1T PCIe/MX250 2G 银'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573354088.50166004.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米无线鼠标 Lite 黑色',
          desc: '小米无线鼠标 Lite 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590547529.25156020.png?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi显示器1A 23.8英寸 黑色',
          desc: 'Redmi显示器1A 23.8英寸 黑色'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587889153.95461345.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色',
          desc: 'RedmiBook 14 增强版 I7/16G/512G SATA/MX250 银色'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/069b6d40-e487-69a2-c4f1-419b49510cef!200x200.jpg',
          name: 'RedmiBook 14 锐龙版 ',
          desc: 'RedmiBook 14 锐龙版 '
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
