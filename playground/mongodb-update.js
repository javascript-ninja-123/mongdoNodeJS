const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server`)
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({
  //   _id:new ObjectID('5a0292365cb1eef640a5f173')
  // }).toArray()
  // .then( docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs,undefined,2));
  // })
  // .catch(err => console.log(err))

  // db.collection('Todos').find().count()
  // .then(count => {
  //   console.log(`Todos count is ${count}`)
  // })
  // .catch(err => console.log(err))
  //
  //
  // db.collection('Users').find({name:'Sungmin Yi'})
  // .toArray()
  // .then(docs => console.log(JSON.stringify(docs, undefined,2)))
  // .catch(err => console.log(err))
  //

//   db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5a028c1916e394086ba35848')},
//   {
//     $set:{
//       completed:true
//     }
//   },{
//     returnOriginal:false
//   })
// .then(result => console.log(result))


  db.collection('Users').findOneAndUpdate({_id:new ObjectID('5a028efcb621030890effa6b')},{
    $set:{
      name:'Sung'
    },
    $inc:{
      age:4
    }
  },{
    returnOriginal:false
  })
  .then(result => console.log(result))

});
