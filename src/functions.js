const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

const buttonMin = document.getElementById('buttonMin');
const buttonClose = document.getElementById('buttonClose');

buttonMin.addEventListener('click', () => {
ipc.send('minimizeApp');
});

buttonClose.addEventListener('click', () => {
ipc.send('closeApp');
});