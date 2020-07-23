<template>
  <div class="component component-portfolio ">
    <div class="content-list"
      v-for="(content, contentIndex) in portfolioList"
      v-bind:key="`content-list-${contentIndex}`"
      @click="onClickItem()">

        <img class="content-list-item-img" :src="portfolioList[contentIndex].img[0]">
        <p class="content-list-item-title">{{ portfolioList[contentIndex].title }}</p>
    </div>

    <img class="portfolio_img" src="img/insta_img.jpg" @click="clickInsta">
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Portfolio',
  data(){
    return{
      portfolioList: []
    }
  },
  methods: {
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    },
    onClickItem(){
      // this.$router.push({ path: `/portfolio/detail/${portfolioKey}` })
    }
  },
  created(){
    var _this = this
    firebase.firestore().collection("portfolio").get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        var title = doc.data().title;
        var description = doc.data().description;
        var img = doc.data().img;

        _this.portfolioList.push(
          {
            'title': title, 
            'description': description, 
            'img': img
          }
        )
      })
    })
    .catch(function(error){
      console.log("Error : ",error);
    })

    console.log("portfolioList : ", _this.portfolioList);
  }
}
</script>