function helloUser1() {
    let userName = prompt("Введите Ваше имя:");
    alert(`Привет ${userName}`);
}

function helloUser2() {
    let userName = document.getElementById("userName").value;
    document.getElementById("result").innerText = `Привет ${userName}`;
    document.getElementById("userName").value = "";
}

function send() {
    let message = document.getElementById("chatText").value;
    let li1 = document.createElement('li');
    li1.innerHTML = message;
    li1.className = "msg";
    document.getElementById("chatResult").prepend(li1);
    console.log(message);
    document.getElementById("chatText").value = "";
}

helloUser1();