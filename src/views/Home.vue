<template>
  <div class="home">
    <div></div>

    <div class="main-container">
      <Navi />
      <router-view />
      <Bottom />
    </div>

    <div></div>
  </div>
</template>

<script>
import Navi from "../components/Navi";
import Bottom from "../components/Bottom"

export default {
  components: {
    Navi,
    Bottom
  }
}
</script>

<style scoped>
.main-container{
  width: 60%;
  margin: 0 auto;
}
</style>