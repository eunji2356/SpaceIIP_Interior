<template>
  <div class="bottom">
      <div id="logo">
        <img src="img/lib.png" />
      </div>
      <div class="description">
        <p id="title">공간이입 인테리어</p>
        <p id="tag">#인테리어  #견적문의  #아파트  #상가</p>
        <p id="tag">#리모델링  #디자인  #홈스타일링</p>
        <p id="addr">A : 233, Sagajeong-ro, Dongdaemun-gu, Seoul, Republic of Korea</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom{
  width: 100%;
  opacity: 0.6;
  background-color: black;
  display: flex;
  justify-content: start;
  align-items: center;
}
#logo{
  width: 250px;
  height: 100%;
  position: relative;
  background-color: white;
  padding-left: 16%;
  padding-right: 2%;
}
#logo > img {
  width: 100%;
  height: auto;
}
#title{
  font-size: 30px;
  margin-bottom: 2%;
}
#tag{
  font-size: 16px;
  margin-top: 1%;
}
#addr{
  font-size: 17px;
  margin-top: 5%;
}
.description{
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
  margin-left: 4%;
  flex-direction: column;
  justify-content: center;
}
.description > p {
  color: white;
}
</style>