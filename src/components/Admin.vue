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

      <button class="btn_add" @click="addBtn">추가하기</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return {
            title: '',
            description: '',
            imageUrl: [],
            imageFile: [],
            imageName: []
        }
    },
    methods: {
        uuidv4(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        selectFile(e){
            const files = e.target.files;
            if (files.length !== 0) {
                console.log(">>>>> files length", files.length)
                for(var i = 0; i < files.length; i++){
                    this.imageName[i] = files[i].name;
                    if (this.imageName[i].lastIndexOf(".") <= 0) {
                        return;
                    }
                    this.imageFile[i] = files[i];
                    this.imageUrl[i] = `portfolio/${files[i].name}`;
                }
            }
            else {
                this.imageName = [];
                this.imageFile = [];
                this.imageUrl = [];
            }
        },
        addBtn(){
            //Firebase Storage 파일 추가 ( 파일 추가 )
            for(var i = 0; i < this.imageName.length; i++){
                var storageRef = firebase.storage().ref(`portfolio/${this.imageFile[i].name}`)
                storageRef.put(this.imageFile[i]).then(snapshot => {
                    console.log('upload file success!!!  ', snapshot);
                })
            }

            //pk 값 선언
            var _pk = this.uuidv4();

            //Firebase Cloud FireStore 실시간 디비 사용 ( 데이터 추가 )
            firebase.firestore().collection("portfolio").doc(_pk).set({
                pk: _pk,
                title: this.title,
                description: this.description,
                img: this.imageUrl                
            }).then(function(){
                console.log(">>>> saved!!! 저장 !!");
            }).catch(function(error){
                console.error(">>>> ERROR :", error)
            });
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