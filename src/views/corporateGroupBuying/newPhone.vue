<template>
    <div class="context dark-theme">
        <div class="breadcrumb">
            <a href="../Popular.vue">首页</a>
            <span class="sep">></span>
            <a href="#" @click="toHome">企业购</a>
            <span class="sep">></span>
            <span>手机 ▪ 平板产品列表</span>
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
            <el-pagination ref="pager"
                           @size-change="sizeChangeHandle"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           :page-count.sync="pageCount"
                           :total="total"
                           layout="prev,pager,next,jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: 'newPhone',
  data () {
    return {
      pageIndex: 1, // 初始页
      pageSize: 200, // 每页的数据
      total: 0,
      productList: [],
      pageCount: 4,
      detailList: [
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg',
          name: 'Redmi K30 5G',
          desc: 'Redmi K30 5G'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8e9ede5e-d0d8-4fff-fe88-37a86264d1fe!200x200.jpg',
          name: 'Redmi 10X 5G 6GB+ 128GB',
          desc: 'Redmi 10X 5G 6GB+ 128GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/41ad1b6a-e1ae-7a5b-d270-3daab9be70ae!200x200.jpg',
          name: 'Redmi Note 8 4GB+64GB 皓月白',
          desc: 'Redmi Note 8 4GB+64GB 皓月白'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
          name: '小米10 12GB+256GB',
          desc: '小米10 12GB+256GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/449dde08-fac9-9326-ce0f-36bb97767848!200x200.png',
          name: 'Redmi Note 8 Pro',
          desc: 'Redmi Note 8 Pro'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7ca8d447-15b2-21dd-f9b6-426c85ad109a!200x200.jpg',
          name: 'Redmi 8',
          desc: 'Redmi 8'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371765.93854821.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi 10X 4G 6GB+128GB ',
          desc: 'Redmi 10X 4G 6GB+128GB '
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590565091.62939621.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'K30pro',
          desc: 'K30PRO'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882053.33827103.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi K30 5G 6GB+128GB',
          desc: 'Redmi K30 5G 6GB+128GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587873760.97133493.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米10青春版 8GB+256GB',
          desc: '小米10青春版 8GB+256GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945960.00664304.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'K30 Pro 8GB+128GB',
          desc: 'K30 Pro 8GB+128GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584946022.16048616.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi K30 Pro 8GB+128GB',
          desc: 'Redmi K30 Pro 8GB+128GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/2d375567-823e-fa1f-c9a0-8b89ce6f4726!200x200.jpg',
          name: 'Redmi K30 8GB+256GB',
          desc: 'Redmi K30 8GB+256GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8629b6c2-dcb1-11f7-70f3-bab898a30c47!200x200.jpg',
          name: 'Redmi Note 8 6GB+64GB',
          desc: 'Redmi Note 8 6GB+64GB 星云紫'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/b81dc3e4-ed9a-84de-3332-7212e5f89d9c!200x200.jpg',
          name: 'Redmi 8A 4GB+64GB 深海蓝',
          desc: 'Redmi 8A 4GB+64GB 深海蓝 64GB '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/a30bf841-25b6-5587-4082-63900518b8eb!200x200.jpg',
          name: 'Redmi Note 8 ',
          desc: 'Redmi Note 8 '
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/9ef23689-e64c-a32b-cd10-7fca1cc5600a!200x200.jpg',
          name: 'Redmi 7A',
          desc: '4000mAh超长续航 / 骁龙8核处理器 / 标配10W快充 / AI人脸解锁 / 大字体，大音量，无线收音机 / 整机生活防泼溅 / 极简模式，亲情守护'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/624043f5-f28a-b8c9-e50d-fbe49e78de5d!200x200.jpg',
          name: 'Redmi Note 8 4GB+64GB',
          desc: 'Redmi Note 8 4GB+64GB 梦幻蓝'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/8e9ede5e-d0d8-4fff-fe88-37a86264d1fe!200x200.jpg',
          name: 'Redmi 10X 5G 6GB+ 128GB',
          desc: 'Redmi 10X 5G 6GB+ 128GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/41ad1b6a-e1ae-7a5b-d270-3daab9be70ae!200x200.jpg',
          name: 'Redmi Note 8 4GB+64GB 皓月白',
          desc: 'Redmi Note 8 4GB+64GB 皓月白'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/605f5478-ba63-30aa-807c-d9f47de367e1!200x200.jpg',
          name: '小米10 12GB+256GB',
          desc: '小米10 12GB+256GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/449dde08-fac9-9326-ce0f-36bb97767848!200x200.png',
          name: 'Redmi Note 8 Pro',
          desc: 'Redmi Note 8 Pro'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/7ca8d447-15b2-21dd-f9b6-426c85ad109a!200x200.jpg',
          name: 'Redmi 8',
          desc: 'Redmi 8'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371765.93854821.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi 10X 4G 6GB+128GB ',
          desc: 'Redmi 10X 4G 6GB+128GB '
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590565091.62939621.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'K30pro',
          desc: 'K30PRO'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882053.33827103.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi K30 5G 6GB+128GB',
          desc: 'Redmi K30 5G 6GB+128GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587873760.97133493.jpg?f=webp&thumb=1&w=200&h=200',
          name: '小米10青春版 8GB+256GB',
          desc: '小米10青春版 8GB+256GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945960.00664304.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'K30 Pro 8GB+128GB',
          desc: 'K30 Pro 8GB+128GB'
        },
        {
          imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584946022.16048616.jpg?f=webp&thumb=1&w=200&h=200',
          name: 'Redmi K30 Pro 8GB+128GB',
          desc: 'Redmi K30 Pro 8GB+128GB'
        },
        {
          imgSrc: 'https://i8.mifile.cn/v1/a1/2d375567-823e-fa1f-c9a0-8b89ce6f4726!200x200.jpg',
          name: 'Redmi K30 8GB+256GB',
          desc: 'Redmi K30 8GB+256GB'
        }
      ]
    }
  },
  //   created () {
  //     $.ajax({
  //       url: 'url地址/1', // 后边的1是页数/默认获取第一页
  //       type: 'get',
  //       dataType: 'json',
  //       success: (res) => {
  //         //   console.log('文档:', res)
  //         this.productList = res.data
  //         this.total = res.total
  //         // console.log("this.productList:", this.productList)
  //       }
  //     })
  //   }
  methods: {
    toHome () {
      this.$router.push({
        path: '/Company/NewList'
      })
    }
  }
  //     // 初始页currentPage，初始每页数据数pagesize和数据data
  //     handleSizeChange: function (size) {
  //       this.pageSize = size
  //       // console.log(this.pageSize) //每页下拉显示数据
  //     },
  //     handleCurrentChange: function (currentPage) {
  //       this.currentPage = currentPage
  //       console.log(this.currentPage) // 点击第几页
  //       $.ajax({
  //         url: 'url' + currentPage, // 加传过来的页数获取数据
  //         type: 'get',
  //         dataType: 'json',
  //         success: (res) => {
  //           this.productList = res.data
  //           // console.log("this.productList:",this.productLsit)
  //         },
  //         error: function () {

//         }
//       })
//     }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/scss/company.scss");
</style>
