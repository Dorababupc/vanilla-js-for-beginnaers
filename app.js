var btntranslate= document.querySelector('#btn-translate');
var txtarea=document.querySelector('#txt-area');
var output=document.querySelector('#output');
var input=txtarea.value;
var baseURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function makeURL(input){
    console.log(baseURL+"?"+"text="+"input");
    return baseURL+"?"+"text="+"input";
}
function errorHandler(error){
    console.log("error occured ",error);
}
btntranslate.addEventListener("click",function clickHandler(){
    fetch(makeURL(input))
      .then(response => response.json())
      .then(json => console.log(json.contents.translated))
      .catch(errorHandler)
})
