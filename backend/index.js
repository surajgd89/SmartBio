const express = require('express');
require('dotenv').config();
const users = require('./data/UserDataJSON.json');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get('/SmartBio/users', (req, res) => {
   res.json(users);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});



