<template>
  <div class="component component-portfolio-detail">

  </div>
</template>

<script>
export default {
  name: 'PortfolioDetail',
  methods: {

  },
  created() {
      console.log('>>> 포트폴리오키: ', this.$route.params.portfolioKey)
  }
}
</script>