var express = require('express');
var router = express.Router();
var firebase = require('firebase');
// var dateFormat = require('dateformat');

var firebaseConfig = {
    apiKey: "AIzaSyAjpqPbyJjeuk-2nqZGrWdok4Ku01l42gQ",
    authDomain: "space-transfer-f3904.firebaseapp.com",
    databaseURL: "https://space-transfer-f3904.firebaseio.com",
    projectId: "space-transfer-f3904",
    storageBucket: "space-transfer-f3904.appspot.com",
    messagingSenderId: "586031903519",
    appId: "1:586031903519:web:a55c29bc96ff893e28f62a",
    measurementId: "G-YHEKWQWY4N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore()

  router.get('/portfolio/detail', function(req){
      db.collection('portfolio').doc(req.query.portfolioKey).get().then((doc) => {
          var childData = doc.data();
          console.log('childData : ', childData)
      })
  });

  router.post('/portfolioAdd', function(req, res){
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
      res.redirect(`portfolio/detail/${res.doc.id}`)
  });


//   var db = firebase.database().ref()
//   var portfolioKey = db.child('portfolio').push().key;
//   console.log('Firebase db', portfolioKey);
  
//   var portfolioData = {
//     title: "글 제목 02",
//     img: [
//       "img/main01.jpg",
//       "img/main02.jpg"
//     ]
//   };
//   var updates = {};
//   updates['/portfolio/' + portfolioKey] = portfolioData
  
//   firebase.database().ref().update(updates)
//   console.log('data', updates)