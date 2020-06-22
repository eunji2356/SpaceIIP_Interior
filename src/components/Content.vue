<template>
  <div>
    <p id="title">空 間 移 入</p>
    <p id="sub">移入 36.5 STUDIO OFFICIAL BLOG</p>
    <div class="menu">
      <div>ABOUT</div> | 
      <div>PORTFOLIO</div> | 
      <div>INTERIOP</div> | 
      <div>HISTORY</div> | 
      <div>LOCATION</div>
    </div>
    <img src="img/home_background.png" />
    <div id="test">Content</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#title{
  text-align: center;
  font-size: 3rem;
  margin-top: 6%;
}
#sub{
  text-align: center;
  margin-top: 2%;
  color: gray;
  font-size: 1.2rem;
}
img{
  width: 100%;
  margin-top: 2%;
}
#test{
  height: 1000px;
}
.menu{
  margin-top: 8%;
  text-align: center;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu > div{
  font-size: 0.8rem;
  color: black;
  padding: 2%;
}
</style>