<template>
  <div class="component component-portfolio ">
    <div class="content-list"
      v-for="(content, contentIndex) in $getPortfolioList11"
      v-bind:key="`content-list-${contentIndex}`"
      @click="onClickItem()">

        <img class="content-list-item-img" :src="$getPortfolioList[contentIndex].img[0]">
        <p class="content-list-item-title">{{ $getPortfolioList[contentIndex].title }}</p>
    </div>

    <img class="portfolio_img" src="img/insta_img.jpg" @click="clickInsta">
  </div>
</template>

<script>
// import firebase from 'firebase'

export default {
  name: 'Portfolio',
  methods: {
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    },
    onClickItem(){
    

      // this.$router.push({ path: `/portfolio/detail/${portfolioKey}` })
    }
  },
  created(){
    // this.$getPortfolioList11 = 
  }
}
</script>