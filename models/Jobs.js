const mongoose = require('mongoose');

const struc = mongoose.Schema({Job_title:String, Job_company:String, Job_loc:String, Job_details:String, Job_salary:String, Job_skills:Array, Job_mode:String, Job_ID:String, Job_applications:Array});

const Job = mongoose.model('job', struc);

module.exports = class addJob{
    constructor(Job_title, Job_company, Job_loc, Job_details, Job_salary, Job_skills, Job_mode){
        this.Job_title = Job_title;
        this.Job_company = Job_company;
        this.Job_loc = Job_loc;
        this.Job_details = Job_details;
        this.Job_salary = Job_salary;
        this.Job_skills = Job_skills;
        this.Job_mode = Job_mode;
        this.Job_ID = Math.random().toString();
    }

    append(){
        const upload = new Job({Job_title:this.Job_title, Job_company:this.Job_company, Job_loc:this.Job_loc, Job_details:this.Job_details, Job_salary:this.Job_salary, Job_skills:this.Job_skills, Job_mode:this.Job_mode, Job_ID:this.Job_ID, Job_applications: []});
        upload.save();
    }

    static async getAllJobs(){
        let temp;
        await Job.find().then(ans => {temp=ans});
        return temp;
    }

    static async findJob(key){
        let temp;
        await Job.find({Job_ID:key}).then(ans => {temp=ans;});
        return temp;
    }

    static async addApp(jobid, appid){
        await Job.findOneAndUpdate({Job_ID:jobid}, {$push:{Job_applications:appid}});
    }
}