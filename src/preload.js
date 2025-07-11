const { contextBridge } = require('electron');

// Expose simple APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Add your APIs here
  platform: process.platform
});
