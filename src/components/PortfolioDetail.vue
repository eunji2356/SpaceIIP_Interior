<template>
  <div class="component component-portfolio-detail">
    <div class="detail-top">
      <span class="title">{{ title }}</span>
      <span class="list" @click="clickList">목록</span>
    </div>

    <div v-html="description" class="detail-description"></div>

    <div class="detail-img" v-for="(image, index) in img" v-bind:key="`detail-image-${index}`">
      <img class="detail-img-index" :src="img[index]">
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'PortfolioDetail',
  props:{
    
  },
  data(){
    return{
      title: "",
      description: "",
      img: []
    }
  },
  created() {
    this.loadDB();
  },
  methods: {
    loadDB(){
      var pk = location.href.substring(location.href.lastIndexOf("/") + 1);
      firebase.firestore().collection("portfolio").doc(pk).get()
      .then(doc => {
        this.title = doc.data().title;
        this.description = doc.data().description;
        this.img = doc.data().img;

        this.setImageUrl()
      })
      .catch(function(error){
        console.log("Error : ",error);
      })
    },
    async setImageUrl() {
      for ( let index = 0, portfolioSize = this.img.length; index < portfolioSize; index++ ) {
        this.loadStorageImageUrl(index, this.img[index])
      }
    },
    loadStorageImageUrl(index, imageName) {
      let storageRef = firebase.storage().ref()
      storageRef.child(imageName).getDownloadURL().then(url => {
        this.$set(this.img, index, url)
      })
    },
    clickList(){
      this.$router.push({path: `/portfolio`});
    }
  }
}
</script>

<style scoped>
.detail-img-index{
  width: 100%;
  margin-top: 1rem;
}
.detail-top{
  font-size: 0.6rem;
  font-family: 'Noto Sans KR';
  color: #727171;
  display: flex;
}
.detail-top > .title{
  display: inline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex-grow: 1;
}
.detail-top > .list{
  flex-grow: 0;
  white-space: nowrap;
  margin-left: 0.8rem;
}
.detail-description{
  margin-top: 2.8rem;
  margin-bottom: 1.2rem;
  font-size: 0.7rem;
  font-family: 'Noto Sans KR';
  color: #727171;
}
</style>