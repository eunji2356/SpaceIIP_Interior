<template>
  <div class="home">
    <div class="side-container"></div>
    <div class="main-container">
      <Navi></Navi>
      <Content></Content>
    </div>
    <div class="side-container"></div>
  </div>
</template>

<script>
import Navi from "../components/Navi";
// import ScrollNavi from "../components/ScrollNavi";
import Content from "../components/Content"
// import Bottom from "../components/Bottom"

export default {
  components: {
    Navi,
    // ScrollNavi
    Content
    // Bottom
  }
}
</script>

<style scoped>
.main-container{
  width: 80%;
  margin: 0 auto;
}
</style>