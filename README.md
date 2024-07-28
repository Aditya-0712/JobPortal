# Job Portal

This project is a comprehensive job portal application built with modern web technologies. It provides a platform for job seekers to find and apply for jobs, and for employers to post job listings and review applications.

## Features

1. **Home Page**
   - Displays a list of available jobs.
   - Provides a search function to find specific job listings.

2. **Job Details**
   - Clicking on any job from the home page displays the details of that job.
   - Details include job title, description, requirements, location, and more.

3. **Apply for the Job**
   - On the job details page, users can apply for the job.
   - Redirects to an application form page where users can submit their application.

4. **View Other Applications**
   - On the job details page, users can view other applications submitted for the job.
   - Redirects to a page displaying the list of applications.

5. **Post a Job**
   - On the home page, employers can click on "Post a job" to be redirected to a form for posting new job listings.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for object data modeling)
- **Templating Engine:** Embedded JavaScript (EJS)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-portal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd job-portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the MongoDB database:
   - Ensure you have MongoDB installed and running.
   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

5. Start the server:
   ```bash
   npm start
   ```
6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **For Job Seekers:**
  - Browse available jobs on the home page.
  - Click on a job to view details and apply for it.

- **For Employers:**
  - Post new job listings by clicking on "Post a job" on the home page.
  - View applications submitted for your job postings.
