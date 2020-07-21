// import Portfolio from '../src/components/Portfolio.vue'
import firebase from 'firebase'

/**
 * 포트폴리오 Plugin 
 */
export default {
    install(Vue){
        var db = firebase.firestore();

        /**
         * 포트폴리오 리스트 값 가져오기
         * 
         * @param req list index 값
         */
        Vue.prototype.$getPortfolioList = function(req){
            console.log('여기는 들어왔는가')
            db.collection('portfolio').doc(req.query.portfolioKey).get().then((doc) => {
                var childData = doc.data();
                console.log('childData : ', childData)

                childData = [
                    {
                        portfolioKey: req.query.portfolioKey,
                        title: "안녕하세요.",
                        description: "설명쪽이에요ㅎㅎ",
                        img: [
                            "img/main01.jpg",
                            "img/main02.jpg"
                        ]
                    },
                    {
                        portfolioKey: req.query.portfolioKey,
                        title: "안녕하세요.",
                        description: "설명쪽이에요ㅎㅎ",
                        img: [
                            "img/main01.jpg",
                            "img/main02.jpg"
                        ]
                    },
                    {
                        portfolioKey: req.query.portfolioKey,
                        title: "안녕하세요.",
                        description: "설명쪽이에요ㅎㅎ",
                        img: [
                            "img/main01.jpg",
                            "img/main02.jpg"
                        ]
                    },
                    {
                        portfolioKey: req.query.portfolioKey,
                        title: "안녕하세요.",
                        description: "설명쪽이에요ㅎㅎ",
                        img: [
                            "img/main01.jpg",
                            "img/main02.jpg"
                        ]
                    }
                ];

                return childData
            })
        }

        Vue.prototype.$postPortfolio = function(req){
            var postData = req.body;
            if(!postData.portfolioKey){
                var newDoc = db.collection('portfolio').doc();
                postData.portfolioKey = newDoc.id;
                newDoc.set(postData);
            }
            else{
                var updateDoc = db.collection('portfolio').doc(postData.portfolioKey);
                updateDoc.update(postData);
            }
            // return `portfolio/detail/${res.doc.id}`
            // res.redirect(`portfolio/detail/${res.doc.id}`)
        }
    }
}