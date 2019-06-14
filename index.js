const express = require('express');
const app = express();
const port = 8000;

const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));

app.use(expressLayout);
//settting scripts and styles at top of head

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//set express router
app.use('/',require('./routes/index'))

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})