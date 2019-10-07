const express = require('express'); 
const mongoose = require('mongoose');  
const routes = require('./routes');
const app = express();   
mongoose.connect('', { 
    useNewUrlParser:true, 
    useUnifiedTopology:true
});
  

// req.query = acessar query params 
// req.params = acessar route params 
// req.body = corpo
app.use(express.json()); 
app.use(routes);
app.listen(3333); 
