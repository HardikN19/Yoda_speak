var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error){
    console.log("error occured!!");
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


btnTranslate.addEventListener("click",function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    })
    .catch(errorHandler)
})