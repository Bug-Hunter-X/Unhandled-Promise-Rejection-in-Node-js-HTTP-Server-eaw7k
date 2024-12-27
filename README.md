# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common issue in Node.js applications: unhandled promise rejections.  The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation which might fail.  If the operation fails, the promise rejection is not handled properly, which can lead to silent failures or crashes in production.

The `bugSolution.js` file provides a solution by properly handling the potential rejection using `.catch()` to prevent this issue.