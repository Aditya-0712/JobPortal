const exp = require('express');
const addApplication = require('../models/Application');
const { addApp } = require('../models/Jobs');
const route = exp.Router();
const path = require('path');

route.get('/application/:jobid', async (req, res) => {
    const jobid = req.params.jobid;
    res.render('application', {jobid:jobid});
})

route.post('/Application/:jobid', async (req, res) => {
    const jobid = req.params.jobid;

    const fname = req.body.fname;
    const lname = req.body.lname;
    const phno = req.body.phno;
    const country = req.body.country;
    const degree = req.body.degree;
    const coverletter = req.body.coverletter;
    const appid = Math.random().toString();

    let obj = new addApplication(fname, lname, phno, country, degree, coverletter, jobid, appid);
    obj.Append();

    await addApp(jobid, appid);
    res.sendFile(path.join(__dirname, '../', 'views', 'sent.html'));
})

module.exports = route;