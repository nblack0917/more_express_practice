const express = require('express')
const app = express()
const cors = require('cors')
import 'dotenv/config';
// const bodyParser = require('body-parser')
 
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);