const express = require('express');
const router = express.Router();
const fs = require("fs");

async function search_definition(word){
    var txt;
    
    var test;
    word = word.toLowerCase();
    console.log(word);
    const result = new Promise((resolve,reject)=> fs.readFile( "./public/data/art_dictionary_js.txt", (error, data) => {
        if(error) {
            reject("load fail");
        }
        txt = data.toString();
        JSON.parse(txt,function (key, value) {
          var skey = key.toLowerCase();
          if (skey == word) {
            console.log(value);
            test = key;
            resolve(value);
          }
          
    })
      if (test == undefined){
        resolve();
      }
    }))
    //console.log(result);
    return result;
}

router.get('/',function(req, res, next) {
    var searchthis = req.query['word'];
    //console.log(searchthis);
    if (searchthis == "" || searchthis == undefined)
    {res.render('search',{word:"Please enter a word",define:""});}
    else{
    search_definition(searchthis).then(
      def => {
        console.log(def + "1");
        if (def == undefined){
          searchthis = searchthis + " is not included in the dictionary"
        }
        res.render('search',{word:searchthis,define:def});
      }
    )
}
  });

router.post('/',function(req, res, next) {
    res.render('search');
  });


router.get('/apple',function(req, res, next) {
    res.render('index', { title: 'Apple', explaination:'苹果'});
  });
module.exports = router;


