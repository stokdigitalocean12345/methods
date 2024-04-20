// execute.js

const { spawn } = require('child_process');

const executeCommand = (command) => {
  const child = spawn(command, { shell: true });

  child.on('exit', (code, signal) => {
    if (code === 0) {
      console.log(`Command '${command}' executed successfully.`);
    } else {
      console.error(`Error executing command '${command}'. Code: ${code}, Signal: ${signal}`);
    }
  });

  child.on('error', (err) => {
    console.error(`Error executing command '${command}':`, err);
  });
};

module.exports = executeCommand;
