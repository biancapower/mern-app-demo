const express = require('express');
const server = express();

server.use([
  require('./routes/loadCounter'),
  // can add more routes here
]);

const PORT = 7000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
