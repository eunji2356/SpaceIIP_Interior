<template>
  <div class="component component-portfolio ">
    <div class="content-list"
      v-for="(content, contentIndex) in portfolioList"
      v-bind:key="`content-list-${contentIndex}`"
      @click="onClickItem(contentIndex)">

        <img class="content-list-item-img" :src="portfolioList[contentIndex].storageUrl">
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
  created() {
    this.loadDB()
  },
  methods: {
    loadDB() {
      firebase.firestore().collection("portfolio").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var title = doc.data().title;
          var description = doc.data().description;
          var img = doc.data().img;
          var pk = doc.data().pk;

          this.portfolioList.push(
            {
              'title': title, 
              'description': description, 
              'img': img,
              'pk': pk
            }
          )
        })
        this.setImageUrl()
      })
      .catch(function(error){
        console.log("Error : ",error);
      })
    },
    async setImageUrl() {
      for ( let index = 0, portfolioSize = this.portfolioList.length; index < portfolioSize; index++ ) {
        let portfolio = this.portfolioList[index]
        this.loadStorageImageUrl(index, portfolio.img[0])
      }
    },
    loadStorageImageUrl(index, imageName) {
      let storageRef = firebase.storage().ref()
      storageRef.child(imageName).getDownloadURL().then(url => {
        this.$set(this.portfolioList[index], 'storageUrl', url)
      })
    },
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    },
    onClickItem(contentIndex){
      var portfolioKey = this.portfolioList[contentIndex].pk;
      this.$router.push({path: `/portfolio/detail/${portfolioKey}`});
    }
  },
}
</script>