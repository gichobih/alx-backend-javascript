const http = require('http');

const PORT = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end(responseText);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
