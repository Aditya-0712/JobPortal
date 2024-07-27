const exp = require('express');
const app = exp();
const BP = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const slashRoute = require('./routes/slash');
const slashPost = require('./routes/slashPost');
const slashDetails = require('./routes/slashDetails');
const slashApplication = require('./routes/slashApplication');

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join('public')));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/JobPortal');

app.use(slashRoute);
app.use(slashPost);
app.use(slashDetails);
app.use(slashApplication);

app.use((req,res) => {
    res.status(404).send('<h1>Page Does Not Exists, error 404</h1>');
})

app.listen(3000);