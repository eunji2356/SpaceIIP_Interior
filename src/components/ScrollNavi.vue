<template>
  <div class="ScrollNavi">
    <Navi :type="1" />
  </div>
</template>

<script>
import Navi from "./Navi";
export default {
  name:"ScrollNavi",
  components: {
    Navi
  }
}
</script>
<style scoped>
.ScrollNavi {
  position: fixed;
  top:50px;
  left: 0;
  width: 100%;
}
</style>
