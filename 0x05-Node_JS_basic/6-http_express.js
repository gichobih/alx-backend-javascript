const express = require('express');

const app = express();
const PORT = 1245;

// Define the route for "/"
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app for use in tests or other modules
module.exports = app;
