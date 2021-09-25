<template>
  <div id="nav">
    <el-affix>
      <el-menu class="el-menu-demo" mode="horizontal" text-color="#919398" active-text-color="#919398"
               :default-active="defaultActive" :router="true">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="4">
            <el-menu-item index="home">
                <i class="el-icon-house"> Home</i>
            </el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="newslist">
              <i class="el-icon-news"> News</i>
            </el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="gamelist">
              <i class="el-icon-s-platform"> 作品一覧</i>
            </el-menu-item>
          </el-col>
          <el-col :span="4">
            <div>
              <el-menu-item index="blog" >
                <i class="el-icon-chat-round"> Blog</i>
              </el-menu-item>
            </div>
          </el-col>
          <el-col :span="4">
            <el-menu-item>

              <i class="el-icon-link" @click="goTwitter"> Twitter</i>
            </el-menu-item>
          </el-col>
        </el-row>
      </el-menu>
    </el-affix>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
    };
  },
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  },
  methods: {
    goTwitter() {
      window.location.href = "https://twitter.com/hcunovelgame"

    }
  }
}
</script>

<style scoped>
.el-menu-item [class^=el-icon-] {
  font-size: 24px;
}

i {
  font-size: 24px;

}

#nav {
  /*font-size: 50px;*/
  /*height: 10vh;*/
  /*position: ;*/
  /*z-index: 1000;*/
  /*opacity: 1;*/
}
</style>
