<template>
  <div class="component component-portfolio ">
    <img class="portfolio_img" src="img/insta_img.jpg" @click="clickInsta">
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  methods: {
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    }
  }
}
</script>