const { app, BrowserWindow, ipcMain } = require('electron')
const { exec } = require('child_process')

function createWindow(){

const win = new BrowserWindow({

width:1500,
height:950,

webPreferences:{
nodeIntegration:true,
contextIsolation:false
}

})

win.loadFile('index.html')

ipcMain.on('connect-vpn', () => {

exec('warp-cli connect')

})

ipcMain.on('disconnect-vpn', () => {

exec('warp-cli disconnect')

})

}

app.whenReady().then(createWindow)
