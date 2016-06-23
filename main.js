const electron = require('electron');
const zmq = require('zmq');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 1024,
        width: 768
    });
    mainWindow.loadURL('file://' + __dirname + '/public/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const sock = zmq.socket('sub');
    sock.connect('tcp://127.0.0.1:5581');
    sock.subscribe('');

    const webContents = mainWindow.webContents;
    sock.on('message', (msg) => {
        webContents.send('msg_arrive', JSON.parse(msg));
    });
});
