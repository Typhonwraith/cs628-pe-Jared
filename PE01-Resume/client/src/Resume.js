import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Jared Graham</h1>
        <p>
          Email: <a href="mailto:Jared.r.Graham@gmail.com">Jared.r.Graham@gmail.com</a> |
          LinkedIn: <a href="https://www.linkedin.com/in/jared-r-graham" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/jared-r-graham</a>
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Data Science</h3>
          <p>City University of Seattle | 2024-Current</p>
          <h3>Bachelor of Science in Manufacturing and Supply Chain</h3>
          <p>Brigham Young University - Idaho | 2015-2019</p>
          <p>GPA: 3.5</p>
        </div>
      </section>

      <section className="section">
        <h2>Competencies</h2>
        <ul>
          <li>Tableau Developer</li>
          <li>Python, JavaScript, C#, ASP.NET</li>
          <li>Project Management, Azure DevOps</li>
          <li>Microsoft/ORACLE SQL, R, Excel</li>
          <li>React, TypeScript, Pandas, etc.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Professional Experience</h2>
        <div className="experience">
          <h3>Business Intelligence Analyst</h3>
          <p>The Boeing Company | 9/2024 – Current</p>
          <ul>
            <li>Full stack Web Developer creating and maintaining websites using asp.NET, C#, Python, JavaScript, React, TypeScript, etc.</li>
            <li>Developer and Architect for the Circle of Support web tool, integrating FLASK and REACT frameworks.</li>
          </ul>

          <h3>Lead Manufacturing Operations Analyst</h3>
          <p>The Boeing Company | 4/2023 – 9/2024</p>
          <ul>
            <li>Established and maintained SQL and Tableau servers for ETL processes, enabling data ingestion into Tableau dashboards for insights.</li>
            <li>Created dashboards for daily program meetings and provided strategic recommendations to leadership.</li>
          </ul>

          <h3>Manufacturing Operations Analyst</h3>
          <p>The Boeing Company | 8/2020 – 4/2023</p>
          <ul>
            <li>Developed dashboards for tracking non-conformances, part shortages, and production constraints.</li>
            <li>Architected the Job Delay Summary system using Excel, SQL, and VBA to optimize workflow decisions.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Certificates</h2>
        <ul>
          <li>Saint Louis University: PMM100 Project Management Essentials</li>
          <li>Saint Louis University: PYT100 Python – Introduction</li>
          <li>Saint Louis University: TAB100 Data Visualization with Tableau – Introduction</li>
        </ul>
      </section>

      <section className="section">
        <h2>Volunteer Experience</h2>
        <div className="volunteer">
          <h3>Missionary and District Leader</h3>
          <p>Church of Jesus Christ of Latter-Day Saints | 11/2013 - 11/2015</p>
          <ul>
            <li>Managed and trained diverse teams of 8-16 people in human relations, teaching, problem-solving, scheduling, etc.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
