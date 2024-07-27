const exp = require('express');
const path = require('path');
const route = exp.Router();
const addJob = require('../models/Jobs');

route.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'post.html'));
})

route.post('/post', async (req, res) => {
    const jtitle = req.body.jtitle;
    const jcompany = req.body.companyname;
    const jloc = req.body.location;
    const jdetails = req.body.jdetails;
    const jsalary = req.body.salary;
    let arr = req.body.skills;
    const jskills = arr.split(" ");
    const jmode = req.body.mode;

    const obj = new addJob(jtitle, jcompany, jloc, jdetails, jsalary, jskills, jmode);
    obj.append();

    res.redirect('/');
})

module.exports = route;