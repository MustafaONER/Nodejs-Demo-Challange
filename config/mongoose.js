const mongoose = require('mongoose')
const db =
  'mongodb+srv://mustafa:mark4469@cluster0.u9shy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db)
  .then(()=> console.log('connected to db'))
  .catch(err=> console.log(err))