<template>
  <div class="component component-portfolio-detail">
    <div class="detail-top">
      <p>{{ $route.params.title}}</p>
    </div>
    <p>{{ $route.params.description}}</p>
    <!-- <div class="detail-img" v-for="(image, index) in list" v-bind:key="`detail-image-${index}`">
      <img class="detail-img-index" :src="list[index]">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'PortfolioDetail',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
    }
  },
  methods: {

  },
  created() {
    console.log('>>> title', this.$route.params.title)
      // console.log('>>> 포트폴리오키: ', this.$route.params.portfolioKey)
  }
}
</script>

<style scoped>
.detail-img-index{
  width: 100%;
  margin-top: 1rem;
}
</style>