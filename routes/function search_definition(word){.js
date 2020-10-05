const fs = require("fs");

export default function search_definition(word){
    var txt;
    fs.readFile( "../public/data/art_dictionary_js.txt.txt", (error, data) => {
        if(error) {
            throw error;
        }
        txt = data.toString();
    });
    var obj = JSON.parse(txt);
    return obj;

}

