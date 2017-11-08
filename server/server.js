const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


const app = express();
app.use(bodyParser.json());


app.post('/todos',(req,res) => {
  const newTodo = new Todo({
    text:req.body.text
  })
  newTodo.save()
  .then(doc => res.send(doc))
  .catch(err => res.status(400).send({err:err.message}))
})


app.post('/user',(req,res) => {
  const newUser = new User({
    email:req.body.email,
    password:req.body.password
  })
  newUser.save()
  .then(doc => res.send(doc))
  .catch(err => res.status(400).send({err:err.message}))

})


app.listen(3000, () => {
  console.log('Started on port 3000')
})









// const newUser = new User({
//   email:'test@test.com',
//   password:'man222'
// })

// newUser.save()
// .then(doc => console.log(doc))
// .catch(err => console.log(err))
//
//
// //save new things
//
// const newToDo = new Todo({
//   text:'Cook dinner'
// })
//
// newToDo.save()
// .then(doc => console.log(`saved doc ${doc}`))
// .catch(err => console.log(err))


// const newToDo = new Todo({
//   text:'Edit this munber   ',
//   completed:false
// })
//
// newToDo.save()
// .then(doc => console.log(`saved doc ${doc}`))
// .catch(err => console.log(err))
