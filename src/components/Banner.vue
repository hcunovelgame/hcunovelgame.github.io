<template>
  <div id="banner">
<!--    <el-carousel>-->
<!--      <el-carousel-item v-for="item in imgList" :key="item">-->
<!--        <el-image-->
<!--            style="height: 100%"-->
<!--            :src="item"-->
<!--            fit="cover">-->
<!--        </el-image>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
    <el-carousel :interval="4000" type="card"  indicator-position="none" >
      <el-carousel-item v-for="item in imgList" :key="item">
<!--        <h3 class="medium">{{ item }}</h3>-->
        <el-image :src="hpImgPath+item" style="height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getBanners,hpImgPath} from "../utils/api";

export default {
  name: "Banner",
  data: function () {

    return {
      hpImgPath,
      imgList: [
        // "https://w.wallhaven.cc/full/z8/wallhaven-z8mq8y.jpg",
        // "https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg",
        "https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936",
        "https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936",
        "https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936",
        // "https://w.wallhaven.cc/full/6q/wallhaven-6qlv6q.jpg",
      ]
    };
  },
  methods: {
    async initData() {
      const res = await getBanners();
      this.imgList = [];
      console.log("banner::", res)
      if (res.status === 200) {
        res.data.imgList.forEach(item => {
          this.imgList.push(item);
        });
      console.log("img:::",this.imgList);
      }
    },
  },
  created() {
    this.initData();
  }
}
</script>

<style scoped>
#banner{
  /*margin: 0 15vw 0 15vw;*/
  /*z-index: -1;*/
}
.el-carousel {
  height: 30vw;
}

.el-carousel__item {
  height: 30vw;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
