const connectBtn =
document.querySelector(".connect-btn");

const circle =
document.querySelector(".circle");

let connected = false;

connectBtn.onclick = ()=>{

connected = !connected;

if(connected){

circle.innerHTML = "CONNECTED";
connectBtn.innerHTML = "DISCONNECT";

}else{

circle.innerHTML = "CONNECT";
connectBtn.innerHTML = "CONNECT";

}

};