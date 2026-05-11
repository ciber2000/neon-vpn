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

};function showInfo(){

const info =
document.getElementById("vpnInfo");

if(info.style.display === "block"){

info.style.display = "none";

}else{

info.style.display = "block";

}

}
const { ipcRenderer } = require('electron')

function connectVPN(){

ipcRenderer.send('connect-vpn')

}

function disconnectVPN(){

ipcRenderer.send('disconnect-vpn')

}
