const { app, BrowserWindow, webContents, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

const isDev = require("electron-is-dev");
let win;
let printer;
let splash;

function createWindow() {
  // Create the browser window.
  const splash = new BrowserWindow({
    icon: path.join(__dirname, "logo512.png"),
    width: 295,
    height: 295,
    titleBarStyle: "hidden",
    // transparent: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    show: false,
  });

  win = new BrowserWindow({
    width: 1200,
    height: 600,
    show: false,
    icon: path.join(__dirname, "logo512.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      // contextIsolation: true,
      // enableRemoteModule: true,
      // webSecurity:false
    },
  });
  printer = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "printer.js"),
    },
  });

  // and load the index.html of the app.
  // win.loadFile(`${path.join(__dirname, 'index.html')}`);
  splash.loadURL(`file://${path.join(__dirname, "splash.html")}`);

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `${path.join("file://", __dirname, "../build/index.html")}`
  );
  printer.loadURL(`${path.join("file://", __dirname, "printer.html")}`);

  splash.once("ready-to-show", () => {
    splash.center();
    splash.show();
  });

  win.webContents.on("did-finish-load", (e) => {});
  win.on("ready-to-show", () => {
    setTimeout(() => {
      win.show();
      splash.close();
    }, 3000);
  });
  // Open the DevTools.
  if (isDev) {
    // win.webContents.openDevTools({ mode: 'detach' });
    win.webContents.openDevTools();
    printer.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("minimize", (e) => {
  win.minimize();
});
ipcMain.on("maximize", (e) => {
  // win.restore()
  win.isMaximized() ? win.restore() : win.maximize();
});
ipcMain.on("save", (e, arg) => {
  let filePath = "./src/data/data_.json";
  let data = JSON.stringify(arg);
  // const filePath = `${app.getPath("appData")}/data.json`;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err, "file write error");
      return;
    }
    console.log("file write success", `${arg}`);
  });

  // console.log(arg);
  // app.quit();
});

ipcMain.on("print", (e, content) => {
  printer.webContents.send("print", content);
});

ipcMain.on("print-minute", (e) => {
  printer.webContents.print({}, (success, failureReason) => {
    if (!success) console.log(failureReason);

    console.log("Print Initiate");
  });
});

// Use default printing options
// worker.webContents.printToPDF({}).then((data) {
//     fs.writeFile(pdfPath, data, function (error) {
//         if (error) {
//             throw error
//         }
//         shell.openItem(pdfPath)
//         event.sender.send('wrote-pdf', pdfPath)
//     })
// }).catch((error) => {
//    throw error;
// })
