<template>
  <div class="component component-portfolio-detail">
    <div class="detail-top">
      <p>제목</p>
    </div>
    <p>설명</p>
    <div class="detail-img" v-for="(image, index) in list" v-bind:key="`detail-image-${index}`">
      <img class="detail-img-index" :src="list[index]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioDetail',
  data(){
    return{
      list: [
        "/img/main02.jpg",
        "/img/main01.jpg",
        "/img/main02.jpg",
        "/img/main01.jpg",
        "/img/insta_img.jpg"
      ]
    }
  },
  methods: {

  },
  created() {
      console.log('>>> 포트폴리오키: ', this.$route.params.portfolioKey)
  }
}
</script>

<style scoped>
.detail-img-index{
  width: 100%;
  margin-top: 1rem;
}
</style>