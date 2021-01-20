var btnMain = document.querySelector("#btn-Main")
var txtarea = document.querySelector("#text-area")
var result = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/shakespeare.json"

function translate(text){
    return url + "?" + "text=" + text
}

function error1(error){
    console.log("Error Detected!",error)
    alert("Please try after some time!!!")
}

function clickHandler() {
    var input = txtarea.value;
    fetch(translate(input))
    .then(response => response.json())
    .then(json => {var finalText = json.contents.translated
        result.innerText = finalText;
    })
    .catch(error1)

};

btnMain.addEventListener("click", clickHandler)