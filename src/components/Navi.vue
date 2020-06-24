<template>
  <div class="component component-navi">
    <nav>
      <ul class="brand" @click="clickBrand">
        <li id="brand_en">SPACE IIP INTERIOR</li>
        <li id="brand_kr">空 間 移 入</li>
      </ul>
      
      <ul class="nav_horizon">
        <li><a id="move_sns" href="https://www.instagram.com/space_iip36.5_official/">Instargram</a></li>
        <li><a id="move_sns" href="https://blog.naver.com/iip365">blog</a></li>
      </ul>

      <ul class="nav_horizon">
        <li id="move_page" @click="clickAbout">ABOUT US</li>
        <li id="move_page" @click="clickPortfolio">PORTFOLIO</li>
        <li id="move_page" @click="clickProcess">PROCESS</li>
        <li><a id="move_page" href="https://form.office.naver.com/form/responseView.cmd?formkey=NGFiMjRjMzktMGZmNy00M2FkLWE5YTQtODE2MGIwYmQ4YmYx&sourceId=urlshare">CONTACT</a></li>
      </ul>
    </nav>
    <hr class="nav_line" size="2" noshade>
  </div>
</template>

<script>
export default {
  name: 'Navi',
  methods:{
    clickBrand(){
      this.$router.push({ path: '/' })
    },
    clickAbout(){
      this.$router.push({ path: '/aboutUs' })
    },
    clickPortfolio(){
      this.$router.push({ path: '/portfolio' })
    },
    clickProcess(){
      this.$router.push({ path: '/process' })
    }
  }
}
</script>

<style scoped>
nav{
  margin-top: 2rem; 
}
ul{ 
	margin-bottom: 0px; 
}
</style>
