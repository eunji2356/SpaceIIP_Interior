<template>
  <div class="component component-admin">
    <textarea class="title" type="text" v-model="title"/>
    <textarea class="description" type="text" v-model="description"/>
    <button @click="addBtn">추가하기</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return {
            title: '',
            description: '',
            img: []
        }
    },
    methods: {
        addBtn(){
            console.log('title :', this.title)
            console.log('description : ', this.description)
            
            this.img = [
                "img/main01.jpg",
                "img/main02.jpg",
                "img/main01.jpg",
                "img/main02.jpg",
            ];

            firebase.firestore()
            .collection("portfolio")
            .add({
                title: this.title,
                description: this.description,
                img: this.img
            })
            .then(function(){
                console.log(">>>> saved!!! 저장 !!");
            })
            .catch(function(error){
                console.error(">>>> ERROR :", error)
            });
        }
    }
}
</script>

<style scoped>
.title, .description{
    width: 100%;
    margin-bottom: 1rem;
}
</style>