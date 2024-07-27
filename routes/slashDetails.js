const exp = require('express');
const { findJob } = require('../models/Jobs');
const route = exp.Router();

route.get('/details/:ID', async (req, res) => {
    const key = req.params.ID;

    let temp;
    await findJob(key).then(ans => {temp=ans;});
    const data = {jtitle:temp[0].Job_title, jcompany:temp[0].Job_company, jloc:temp[0].Job_location, jdetails:temp[0].Job_details, jsalary:temp[0].Job_salary, jmode:temp[0].Job_mode, jskills:temp[0].Job_skills, jobid:key};

    res.render('details', data);
})

module.exports = route;