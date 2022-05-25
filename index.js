const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;


// middel ware 
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.slhbj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
  try{
    await client.connect();
    
  }
  finally{
    // await client.close()
  }
}





app.get('/', (req, res) => {
  res.send('Manufacturer Tools')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})