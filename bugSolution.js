const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    })
    .catch(error => {
      console.error('Error:', error); // Log the error for debugging
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    // Simulate a network request or database operation
    setTimeout(() => {
      // Simulate an error
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 100);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});