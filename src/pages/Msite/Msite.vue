<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="'谷歌'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="bannerArr.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(items,index) in bannerArr" :key="index">
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(item,index) in items.one"
              :key="index"
            >
              <div class="food_container">
                <img :src="item.image" />
              </div>
              <span>{{item.title}}</span>
            </a>
          </div>
        </div>
      </div>
       <img src="./images/msite_back.svg" alt="back" v-else>
      <!-- <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/9.jpg" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/10.jpg" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/11.jpg" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/12.jpg" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/13.jpg" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/14.jpg" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg" />
            </div>
            <span>土豪推荐</span>
          </a>
      </div>-->
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list :list="getHomePageContentArr"></shop-list>
    </div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import ShopList from "../../components/ShopList/ShopList.vue";
// import Swiper from '../../../static/css/swiper.css'
// import { reqFoodCategorys } from "../../api";
export default {
  data() {
    return {
      bannerArr: [],
      getHomePageContentArr: [],

      fromData: {
        pageSize: 10,
        pangeIndex: 1,
      },
    };
  },
  mounted() {
    // 创建一个swiper实例对象，来实现轮播
    new Swiper(".swiper-container", {
      //    direction: 'vertical',
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination",
      },
    });

    this.getBanner();
    this.getHomePageContent();
  },

  // created() {
  //   reqFoodCategorys().then((res) => {
  //     if (res.data.code == 0) {
  //       this.getHomePageContentArr = res.data.data.category;
  //     }
  //   })
  // },

  methods: {
    // getHomePageContent 列表接口名
    getHomePageContent() {
       this.$ajax.get("/api/getHomePageContent",{
         params: this.fromData,
         headers: {
            //请求头
            "Cache-Control": "no-cache",
          },
       })
        .then((res) => {
          if (res.data.code == 0) {
            this.getHomePageContentArr = res.data.data.category;
          }
        })
    },
    // 请求轮播图数据
    getBanner() {
      this.$ajax
        .get("/api/getBanner", {
          headers: {
            //请求头
            "Cache-Control": "no-cache",
          },
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.bannerArr = res.data.data.banner;
          }
          // console.log('获取的数据：',this.bannerArr)
        })
    },
  },
  components: {
    HeaderTop,
    ShopList,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

&.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>