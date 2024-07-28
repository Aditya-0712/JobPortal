const exp = require('express');
const addApplication = require('../models/Application');
const { addApp } = require('../models/Jobs');
const route = exp.Router();

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
    res.send('<h1>Application Submitted Succesfully!</h1><a href="/">View Similar Jobs</a>')
})

module.exports = route;