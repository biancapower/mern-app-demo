const express = require('express');
const server = express();

const PORT = 7000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
