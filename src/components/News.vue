<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="item in newsList" :key="item" :timestamp=item.time placement="top" size="large">
        <el-card>
          <el-row :gutter="100">
            <el-col :span="4">
              <el-image
                  style="width: 100px; height: 100px"
                  :src="hpImgPath + item.img"
                  fit="cover">
              </el-image>
            </el-col>
            <el-col :span="20">
              <h4>{{ item.title }}</h4>
              <p>{{ item.contents }}</p>
            </el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import {getNews, hpImgPath} from "../utils/api";

export default {
  name: "News",
  data: function () {
    return {
      hpImgPath,
      newsList: []

    };
  },
  methods: {
    async initData() {
      this.newsList = []
      const res = await getNews();
      if (res.status === 200) {
        console.log(res);

        res.data.forEach(item=>{
          // console.log(item)
          this.newsList.push(item)
        })
        console.log(this.newsList)
      }
    },
  },
  created() {
    this.initData();
  }

}
</script>

<style scoped>
.el-timeline-item {
  text-align: left;
}
</style>
