const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server`)
  }
  else console.log('Connected to MongoDB server')

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('unable to insert',err)
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // })


  db.collection('Users').insertOne({
    name:'Sungmin Yi',
    age:23,
    location:'1500 7th street'
  }, (err,result) => {
    if(err) return console.log('unable to insert', err)
    else{
      console.log(result.ops[0]._id.getTimestamp())
    }
  })
  db.close();
});
