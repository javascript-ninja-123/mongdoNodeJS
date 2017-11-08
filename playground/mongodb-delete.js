const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server`)
  }
  console.log('Connected to MongoDB server')

  //delete many
  // db.collection('Todos').deleteMany({text:'eat lunch'})
  // .then(result => console.log(result))
  // .catch(err => console.log(err))

  //delete one
  // db.collection('Todos').deleteOne({text:'Eat lunch'})
  // .then(result => console.log(result))

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed:true})
  // .then(result => console.log(result))

    // db.collection('Users').findOneAndDelete({_id:new ObjectID('5a028fef8bf814089e8c75da')})
    //

});
