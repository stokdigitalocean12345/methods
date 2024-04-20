// processManager.js

let currentProcess = null;

const execute = require("./execute");

const manageProcess = (data, callback) => {
  const { processName, command } = data;

  if (command) {
    // Eksekusi perintah jika ada
    execute(command);
    currentProcess = processName;
    callback({ message: `Command '${command}' executed successfully.` });
  } else if (processName && currentProcess === processName) {
    // Hentikan proses jika hanya ada nama proses dan sesuai dengan proses yang sedang berjalan
    currentProcess = null;
    callback({ message: `Process '${processName}' stopped successfully.` });
  } else {
    callback({ error: 'Invalid request.' });
  }
};

module.exports = manageProcess;
