<template>
  <div class="component component-admin">
      <span>제목</span>
      <textarea class="add title" type="text" v-model="title"/>
      
      <span>설명</span>
      <textarea class="add description" type="text" v-model="description"/>

      <div class="add img">
        <span>이미지 추가</span>
        <input class="btn_upload" @change="selectFile" type="file" name="files" multiple>
      </div>
      <span>{{this.imageName}}</span>

      <button class="btn_add" @click="addBtn">추가하기</button>
  </div>
</template>

<script>
import firebase from 'firebase'
// import storage from 'firebase/storage' 

export default {
    data(){
        return {
            title: '',
            description: '',
            img: [],
            imageUrl: [],
            imageFile: [],
            imageName: []
        }
    },
    methods: {
        selectFile(e){
            const files = e.target.files;
            if (files.length !== 0) {
                for(var i = 0; i < files.length; i++){
                    this.imageName[i] = files[i].name;
                    console.log("imageName", this.imageName[i])
                    if (this.imageName[i].lastIndexOf(".") <= 0) {
                        console.log("return?????")
                        return;
                    }

                    const fr = new FileReader();
                    fr.readAsDataURL(files[i]);
                    fr.addEventListener("load", () => {
                        this.imageUrl[i] = fr.result;
                        // console.log("@@@@ imageUrl", this.imageUrl);
                        this.imageFile[i] = files[i];
                        console.log("@@@@ imageFile", this.imageFile);
                    });
                }
            }
            else {
                console.log("여기로???")
                this.imageName = [];
                this.imageFile = [];
                this.imageUrl = [];
            }
        },
        addBtn(){
            console.log('title :', this.title)
            console.log('description : ', this.description)
            
            // this.img = [
            //     "img/main02.jpg",
            //     "img/main01.jpg",
            //     "img/main02.jpg",
            //     "img/main01.jpg",
            // ];

            for(var i; i < this.imageName.length; i++){
                firebase.storage.ref('images/' + this.imageName[i]).put(this.imageFile[i])
            }

            // firebase.firestore()
            // .collection("portfolio")
            // .add({
            //     title: this.title,
            //     description: this.description,
            //     img: this.imageName
            // })
            // .then(function(){
            //     console.log(">>>> saved!!! 저장 !!");
            // })
            // .catch(function(error){
            //     console.error(">>>> ERROR :", error)
            // });
        }
    }
}
</script>

<style scoped>
.add{
    width: 100%;
    margin-bottom: 1rem;
}
.btn_upload{
    margin-left: 1rem;
    margin-right: 1rem;
}
.btn_add{
    margin-top: 3rem;
    width: 100%;
}
</style>