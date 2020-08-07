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

        <label v-if="isDrag" class="admin-drag-tip">★★★ 파일명을 드래그하여 이미지 순서를 변경해보세요 ★★★</label>

        <draggable 
        :list="imageUrl"
        :move="checkMove"
        @start="dragging=true"
        @end="dragging=false">
            <div v-for="(item, index) in imageUrl.length" v-bind:key="`admin-file-${index}`" >
                <label class="admin-drag-item">{{ `${imageUrl[index].substring(imageUrl[index].lastIndexOf("/")+1)}` }}</label>
            </div>
        </draggable>

      <button class="btn_add" @click="addBtn">추가하기</button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import firebase from 'firebase'

export default {
    components: {
        draggable
    },
    data(){
        return {
            title: '',
            description: '',
            imageUrl: [],
            imageFile: [],
            isDrag: false
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
            this.imageFile = [];
            this.imageUrl = [];
            this.isDrag = false;

            const files = e.target.files;
            if (files.length !== 0) {
                for(var i = 0; i < files.length; i++){
                    this.imageFile[i] = files[i];
                    this.imageUrl[i] = `portfolio/${files[i].name}`;
                }

                if(this.imageUrl.length != 0){
                    this.isDrag = true;
                }
            }
        },
        addBtn(){
            //Firebase Storage 파일 추가 ( 파일 추가 )
            var count = 0;
            for(var i = 0; i < this.imageFile.length; i++){
                var storageRef = firebase.storage().ref(`portfolio/${this.imageFile[i].name}`)
                storageRef.put(this.imageFile[i]).then(snapshot => {
                    console.log('upload file success!!!  ', snapshot.metadata.name);
                    count++;

                    if(count === this.imageFile.length){
                        alert('업로드가 완료되었습니다 !');
                        location.reload(true);
                    }
                })
            }

            //pk 값 선언
            var _pk = this.uuidv4();

            //Firebase Cloud FireStore 실시간 디비 사용 ( 데이터 추가 )
            firebase.firestore().collection("portfolio").doc(_pk).set({
                pk: _pk,
                title: this.title,
                description: this.description.replace(/(\n|\r\n)/g, '<br/>'),
                img: this.imageUrl,
                date: Date()              
            })
            .then(function(){
                console.log(">>>> saved!!! 저장 !!");
            })
            .catch(function(error){
                console.error(">>>> ERROR :", error)
            });
        },
        checkMove: function(e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
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
.admin-drag-tip{
    font-family: 'Noto Sans KR'; 
    font-size: 0.8rem;
}
.admin-drag-item{
    font-family: 'Noto Sans KR'; color: #595757; 
}
</style>