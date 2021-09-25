<template>
  <div class="home">
    <Nav></Nav>
    <banner/>
    <div id="home_content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div id="home_news">
            <News></News>
          </div>
        </el-col>
        <el-col :span="8">
          <div id="home_other">
            <Twitter></Twitter>
          </div>
        </el-col>
      </el-row>
      <div>
        <Divider></Divider>
        <Games></Games>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Twitter from "../components/Twitter";
import News from "../components/News";
import Divider from "../components/Divider";
import Games from "../components/Games";
export default {
  name: 'Home',
  components: {
    Games,
    Divider,
    News,
    Twitter,
    Banner,
    Nav
  }
}
</script>

<style>
#home_other {
  /*height: 50vh;*/
  /*background-color: deepskyblue;*/
}

#home_news {
  /*height: 50vh;*/
  /*background-color: #2c3e50;*/
}

#home_content {
  width: 70vw;
  height: 50vh;
  margin: 5vh 15vw 0 15vw;
  /*background-color: #42b983;*/
}

body {
  margin: 0px;
}

</style>
