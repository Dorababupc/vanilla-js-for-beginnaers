var btntranslate= document.querySelector('#btn-translate');
var txtarea=document.querySelector('#txt-area');
btntranslate.addEventListener("click",function clickEventHandler(){
    console.log(txtarea.value);
})