const express = require('express');
const faker = require('faker');
const app = express();
const versionApi = '/api/v1';
const users = [];
for(var i =0; i < 10; i++){
  users.push({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email()
  });
}
app.get(`${versionApi}/users`, (req, res) =>{

    res.json({
        data: users
    })
});

app.get(`${versionApi}/users/:id`, ( req, res) =>{
  const id = req.params.id -1 ;
  res.json({
    data: users[id] || null
  })
});

app.listen(3000, () => {console.log('Port du server 3000');});