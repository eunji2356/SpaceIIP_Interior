import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        img: 'img/main01.jpg',
        title: "글 제목 1 "
      },
      {
        img: 'img/main02.jpg',
        title: "글 제목 2"
      },
      {
        img: 'img/main01.jpg',
        title: "글 제목 3"
      },
      {
        img: 'img/main02.jpg',
        title: "글 제목 4"
      },
      {
        img: 'img/main01.jpg',
        title: "글 제목 5"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
