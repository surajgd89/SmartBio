const express = require('express');
require('dotenv').config();
const users = require('./data/users.json');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/SmartBio/users', (req, res) => {
   const userId = req.query.userId;
   if (userId) {
      const user = users.find(user => user.userId === userId);
      if (user) {
         res.json(user);
      } else {
         res.status(404).json({ error: 'User not found' });
      }
   } else {
      res.json(users);
   }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

