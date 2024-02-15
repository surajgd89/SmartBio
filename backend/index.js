const express = require('express');
require('dotenv').config();
const users = require('./data/users.json');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());




//GET SINGLE USER
app.get('/users/:id', (req, res) => {
   const id = req.params.id;
   const user = users.find(user => user.id === id);
   if (user) {
      res.json(user);
   } else {
      res.status(404).json({ error: 'User not found' });
   }
});

//GET ALL USERS
app.get('/users', (req, res) => {
   res.json(users);
});

//CREATE USER
app.post('/users', (req, res) => {
   users.push(req.body);
   const jsonData = JSON.stringify(users, null, 2);
   fs.writeFile('./data/users.json', jsonData, 'utf8', (err) => {
      if (err) {
         console.error('Error writing file:', err);
         return;
      }
      console.log('New user added successfully.');
      res.json(users);
   });
});

//UPDATE USER
app.put('/users/:id', (req, res) => {
   const id = req.params.id;
   const updatedData = req.body;
   console.log(updatedData)
   const index = users.findIndex(user => user.id === id);

   if (index !== -1) {
      users[index] = { ...users[index], ...updatedData };
      const jsonData = JSON.stringify(users, null, 2);
      fs.writeFile('./data/users.json', jsonData, 'utf8', (err) => {
         if (err) {
            console.error('Error writing file:', err);
            return;
         }
         console.log('User data updated successfully.');
         res.json(users);
      });
   } else {
      console.log('User not found.');
   }
});

//DELETE USER
app.delete('/users/:id', (req, res) => {
   const userId = req.params.id;

   const index = users.findIndex(user => user.id === id);

   if (index !== -1) {
      users.splice(index, 1);
      const jsonData = JSON.stringify(users, null, 2);

      fs.writeFile('./data/users.json', jsonData, 'utf8', (err) => {
         if (err) {
            console.error('Error writing file:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
         }
         console.log('User deleted successfully.');
         res.json(users);
      });
   } else {
      res.status(404).json({ error: 'User not found' });
   }
});



const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`SmartBio Server is running on port ${PORT}`);
});