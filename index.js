var express = require('express');
var cors = require('cors');
const dbConnect = require('./database');
var app = express();
var path = require('path');
const dotenv = require('dotenv');
dotenv.config();
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileupload-routes');

//var mongo = require('./database');
const port = process.env.PORT || 8000; 

//database connect
dbConnect();


//mongo.connect();
 //middlewares 
app.use(cors());
app.use(express.json());
app.use(express());

//   const dbUrl = "mongodb+srv://Tharik:welcome125@cluster0.ofjdk.mongodb.net/student?retryWrites=true&w=majority"; 
//   const connectionParams = {
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
//   };
  
//   mongoose.connect(dbUrl, connectionParams).then(() => {console.log('connected to db atlas');
// })
// .catch((e) => {console.log('error', e);
// });

//mongoose.connect(process.env.MONGOURI, (err) => {
  //if (err) throw err.message;
  //console.log('connected to mongodb');
//});
//app.use(bodyParser .json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api', fileRoutes.routes);
//console.log(process.env)

//server
const PORT = process.env.PORT; 

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.listen(PORT, () => console.log("app is started", PORT));
  
  //app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));