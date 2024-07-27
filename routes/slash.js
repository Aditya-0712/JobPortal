const exp = require('express');
const route = exp.Router();
const path = require('path');
const { getAllJobs } = require('../models/Jobs');

route.get('/', async (req, res) => {
    let temp;
    await getAllJobs().then(ans => {temp=ans});
    const data = {arr:temp};
    res.render('home', data);
})

module.exports = route;