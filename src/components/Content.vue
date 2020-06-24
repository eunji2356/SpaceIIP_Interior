<template>
  <div class="component component-content layout-table">
    <div class="main_img01" @click="clickAbout">
      <img class="main_img" src="img/main01.jpg">
      <p class="main_txt">ABOUT US</p>
    </div>

    <div class="main_img02" @click="clickPortfolio">
      <img class="main_img" src="img/main02.jpg">
      <p class="main_txt">PORTFOLIO</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  methods: {
    clickAbout(){
      this.$router.push({ path: '/aboutUs' })
    },
    clickPortfolio(){
      this.$router.push({ path: '/portfolio' })
    }
  }
}
</script>