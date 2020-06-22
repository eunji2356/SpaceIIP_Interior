<template>
  <div class="home">
    <!-- <Navi></Navi> -->
    <!-- <ScrollNavi></ScrollNavi> -->
    <Content></Content>
    <Bottom></Bottom>
  </div>
</template>

<script>
// import Navi from "../components/Navi";
// import ScrollNavi from "../components/ScrollNavi";
import Content from "../components/Content"
import Bottom from "../components/Bottom"

export default {
  components: {
    // Navi,
    // ScrollNavi
    Content,
    Bottom
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%ㄹ;
}
</style>