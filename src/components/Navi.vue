<template>
  <div class="component component-navi">
    <div>
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

        <div class="nav_menu" @click="clickHamburgerBtn">
          <img class="hamburger_btn" src="img/hamburger.png">
        </div>

        <ul v-if="isMenuClick" class="nav_menu toggle">
          <li><a id="toggle_sns" href="https://www.instagram.com/space_iip36.5_official/">Instargram</a></li>
          <li><a id="toggle_sns" href="https://blog.naver.com/iip365">blog</a></li>
        </ul>

        <ul v-if="isMenuClick" class="nav_menu toggle">
          <li id="toggle_page" @click="clickAbout">ABOUT US</li>
          <li id="toggle_page" @click="clickPortfolio">PORTFOLIO</li>
          <li id="toggle_page" @click="clickProcess">PROCESS</li>
          <li><a id="toggle_page" href="https://form.office.naver.com/form/responseView.cmd?formkey=NGFiMjRjMzktMGZmNy00M2FkLWE5YTQtODE2MGIwYmQ4YmYx&sourceId=urlshare">CONTACT</a></li>
        </ul>

      </nav>
    </div>
  

    <hr class="nav_line" size="2" noshade>
  </div>
</template>

<script>
export default {
  name: 'Navi',
  data(){
    return{
      isMenuClick: false
    }
  },
  methods:{
    clickBrand(){
      this.isMenuClick = false;
      this.$router.push({ path: '/' })
    },
    clickAbout(){
      this.isMenuClick = false;
      this.$router.push({ path: '/aboutUs' })
    },
    clickPortfolio(){
      this.isMenuClick = false;
      this.$router.push({ path: '/portfolio' })
    },
    clickProcess(){
      this.isMenuClick = false;
      this.$router.push({ path: '/process' })
    },
    clickHamburgerBtn(){
      this.isMenuClick = !this.isMenuClick;
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
.hamburger_btn{
  width: 1.8rem;
  min-width: 1.8rem;
  margin: 0.5rem;
}
.toggle{
  margin-right: 2rem;
  margin-bottom: 0.6rem;
}
.nav_menu {
  display: none;
}
.nav_horizon {
  display: block;
}

@media (max-width:800px){
  .nav_horizon {
    display: none;
  }

  .nav_menu {
    display: block;
    text-align: right;
    font-family: 'Noto Sans KR'; 
    font-size: 0.5rem;
  }
}
</style>
