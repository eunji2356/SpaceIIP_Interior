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
        console.log('@@@@  ', querySnapshot)
        querySnapshot.forEach(doc => {
          console.log('>>>>   ', doc.data())
          var title = doc.data().title;
          var description = doc.data().description;
          var img = doc.data().img;

          this.portfolioList.push(
            {
              'title': title, 
              'description': description, 
              'img': img
            }
          )
        })

        this.setImageUrl()
      })
      .catch(function(error){
        console.log("Error : ",error);
      })

      console.log("portfolioList : ", this.portfolioList);
    },
    async setImageUrl() {
      for ( let index = 0, portfolioSize = this.portfolioList.length; index < portfolioSize; index++ ) {
        let portfolio = this.portfolioList[index]
        this.loadStorageImageUrl(index, portfolio.img[0])
      }
    },
    loadStorageImageUrl(index, imageName) {
      console.log('이미지 로드')

      let storageRef = firebase.storage().ref()
      storageRef.child(imageName).getDownloadURL().then(url => {
        console.log('>>>> ', index, ' : ', url)
        this.$set(this.portfolioList[index], 'storageUrl', url)
      })
      // .catch(){
        //기본 이미지 세팅       
      // }
    },
    clickInsta(){
      location.replace('https://www.instagram.com/space_iip36.5_official/')
    },
    onClickItem(contentIndex){
      this.$router.push({path: `/portfolio/detail/${this.portfolioList[contentIndex]}`})
    }
  },
}
</script>