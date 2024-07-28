const exp = require('express');
const { findAppByJobid } = require('../models/Application');
const route = exp.Router();

route.get('/viewapps/:jobid', async (req, res) => {
    const jobid = req.params.jobid;

    let arr;
    await findAppByJobid(jobid).then(ans => {arr=ans;});
    const data = {arr:arr, jobid:jobid};
    res.render('viewapps', data);
})

module.exports = route; 