const mongoose = require('mongoose');

const struc = mongoose.Schema({App_ID:String, App_fname:String, App_lname:String, App_phno:Number, App_country:String, App_degree:String, App_cover:String, App_jobid:String});

const Application = mongoose.model('application', struc);

module.exports = class addApplication{
    constructor(App_fname, App_lname, App_phno, App_country, App_degree, App_cover, App_jobid, App_ID){
        this.App_ID = Math.random().toString();
        this.App_fname = App_fname;
        this.App_lname = App_lname;
        this.App_phno = App_phno;
        this.App_country = App_country;
        this.App_degree = App_degree;
        this.App_cover = App_cover;
        this.App_jobid = App_jobid;
        this.App_ID = App_ID;
    }

    Append(){
        const upload = new Application({App_ID:this.App_ID, App_fname:this.App_fname, App_lname:this.App_lname, App_phno:this.App_phno, App_country:this.App_country, App_degree:this.App_degree, App_cover:this.App_cover, App_jobid:this.App_jobid, App_ID:this.App_ID});
        upload.save();
    }

    static async findAppByJobid(jobid){
        let temp;
        await Application.find({App_jobid:jobid}).then(ans => {temp=ans;});
        return temp;
    }
}