const { contextBridge, ipcRenderer} = require("electron");

// onClick={() => window.api.save(state)} a implementer
contextBridge.exposeInMainWorld("api", {
  minimize: () => {
      
      ipcRenderer.send("minimize");
    },
  maximize: () => {
      
      ipcRenderer.send("maximize");
    },
    save: (state) => {
      console.log(state);
      ipcRenderer.send("save", state);
    },
    print: (content) => {
      console.log(content);
      ipcRenderer.send("print", content);
    },
  });


