<template>
  <div class="component component-portfolio ">
    <div class="content-list"
      v-for="(content, contentIndex) in $store.state.list"
      v-bind:key="`content-list-${contentIndex}`"
      @click="onClickItem(contentIndex)">

        <img class="content-list-item-img" :src="$store.state.list[contentIndex].img">
        <p class="content-list-item-title">{{ $store.state.list[contentIndex].title }}</p>
    </div>

    <img class="portfolio_img" src="img/insta_img.jpg" @click="clickInsta">
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  methods: {
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    },
    onClickItem(portfolioKey){
      this.$router.push({ path: `/portfolio/detail/${portfolioKey}` })
    }
  }
}
</script>