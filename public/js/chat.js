// Chatサーバに接続
const URL = "";
const socket = io.connect(URL); 

function sendMessage() {
    // console.log('send message!!')
    var message = document.getElementById('message').value;
    console.log(message);
}