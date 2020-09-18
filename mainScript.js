const link = document.getElementById("link");
const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','_'];

function changeLink(){
    let url = 'https://www.youtube.com/watch?v=';
    for(var i = 0; i <= 11; i++){
        let random = Math.floor(Math.random() * allLetters.length);
        url += allLetters[random];
        console.log(url);
    }
    link.innerHTML = url;
}