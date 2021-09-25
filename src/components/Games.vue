<template>
  <el-row>
    <el-col :span="4" v-for="(game,index) in gamesList" :key="game" :offset="index > 0 ? 2 : 0" >
      <el-card :body-style="{ padding: '0px' }" shadow="always">
        <a :href="game.url">
          <el-image :src="hpImgPath + game.head_img "
                    :fit="cover" class="image"
          />
        </a>

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {getGames,hpImgPath} from "../utils/api";

export default {
  name: "Games",
  data: function () {
    return {
      hpImgPath,
      gamesList: [],
    }
  },
  methods: {
    async initData() {
      const res = await getGames();
      this.gamesList = [];
      if (res.status === 200) {
        res.data.forEach(item=> {
          this.gamesList.push(item);
        })
        // this.gamesList =
        console.log("GAMES::",res)
      }
    }
  },
  created() {
    this.initData();
  }
}

</script>

<style scoped>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");


.image {
  /*width: 100%;*/
  /*display: block;*/
  width: 288px; height: 288px
}

</style>
