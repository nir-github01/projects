const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/userdata')
// .then((res)=> {
//   console.log("Database connected successfully")
// }).catch((error) => {
//   console.log(error);
// })

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userdata', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family:4
  });
  console.log("Database successfully connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}