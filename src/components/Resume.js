import { useEffect } from "react";
import SectionContainer from "../layout/SectionContainer";
const Resume = () => {
  useEffect(() => {
    const progress_inner = document.querySelectorAll(".skill-item"),
      triggerBottom = (window.innerHeight / 5) * 5;
    progress_inner.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top,
        bar = box.getElementsByClassName("progress-bar")[0],
        value = bar.getAttribute("data-progress-value");
      bar.style.width = `${value}%`;
    });
  }, []);

  const TechnicalSkills = [
    { skill: "SEO", percentage: 85 },
    { skill: "CI/CD", percentage: 80 },
    { skill: "Test Driven Development", percentage: 88 },
    { skill: "Research", percentage: 92 },
    { skill: "Server Management", percentage: 84 },
  ];

  const SoftSkills = [
    { skill: "English", percentage: 95 },
    { skill: "General Management", percentage: 88 },
    { skill: "Problem Solving", percentage: 97 },
    { skill: "Communication", percentage: 90 },
    { skill: "Initiative", percentage: 96 },
  ];

  return (
    <SectionContainer
      pageId="resume"
      pageIcon={"lnr lnr-license"}
      pageTitle={"My Resume."}
    >
      <div
        className="row mb-20"
        onScroll={() => {
          console.log("Hil");
        }}
      >
        {/*Experience Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Experience</h3>
          </div>
          <ul className="experience">
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>API Integrations</h4>
                <h5>Gluejs.io, Melbourne, Australia</h5>
                <p className="info">
                  Integrated atleast 100+ APIs for a SAAS startup project that
                  automates familiar workloads. Gluejs.io is the same as
                  Zapier.com
                </p>
              </div>
              <span className="year">
                <span className="to">2023</span>
                <span className="from">2022</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Data Engineer</h4>
                <h5>Deepjudge, Zurich, Switzerland</h5>
                <p className="info">
                  Responsible for gathering data on all laws of US and UK
                  states. Built the application for data analysis and storage.
                </p>
              </div>
              <span className="year">
                <span className="to">2022</span>
                <span className="from">2021</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Full Stack Developer</h4>
                <h5>Allkeyshop.com, Paris, France</h5>
                <p className="info">
                  Managed the sites scrapers. Helped teammates to make their job
                  easier by creating program to automate workloads. Managed
                  affiliate stores and built inhouse CRM for the company.
                </p>
              </div>
              <span className="year">
                <span className="to">2021</span>
                <span className="from">2012</span>
              </span>
            </li>
          </ul>
        </div>
        {/*Experience Column End*/}
        {/*Education Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Education</h3>
          </div>
          <ul className="education">
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Bachelor of Information Technology</h4>
                <h5>AMA Computer College, Cagayan de Oro, Philippines</h5>
                <p className="info">
                  After for years from an accident I pursue my studies and
                  passion in Web Development. I enrolled in the most known IT
                  college in the Philippines.
                </p>
              </div>
              <span className="year">
                <span className="to">2016</span>
                <span className="from">2012</span>
              </span>
            </li>
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Bachelor of Science in Nursing</h4>
                <h5>Xavier University, Cagayan de oro Philippines</h5>
                <p className="info">
                  Two years I studied nursing because of popular demand.
                </p>
              </div>
              <span className="year">
                <span className="to">2012</span>
                <span className="from">2010</span>
              </span>
            </li>
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>High School Diploma</h4>
                <h5>Holy Spirit School, Tagbilaran, Philippines</h5>
                <p className="info">
                  I found my interest in coding when I was in my high school
                  years. Built my first HTML app.
                </p>
              </div>
              <span className="year">
                <span className="to">2010</span>
                <span className="from">2006</span>
              </span>
            </li>
          </ul>
        </div>
        {/*Education Column End*/}
      </div>
      {/*Education & Experience Row End*/}
      {/*Skills Row Start*/}
      <div className="row">
        {/*Technical Skills Column Start*/}
        <div className="col-lg-6 skills">
          <div className="subheading">
            <h3>Technical Skills</h3>
          </div>
          {/*Technical Skill Item*/}
          {TechnicalSkills.map((skill) => {
            return (
              <div className="skill-item" key={skill.skill}>
                <h4 className="progress-title">{skill.skill}</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-progress-value={skill.percentage}
                  >
                    <div className="progress-value">{skill.percentage}%</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*Technical Skills Column End*/}
        {/*Coding Skills Column Start*/}
        <div className="col-lg-6 skills">
          <div className="subheading">
            <h3>Soft Skills</h3>
          </div>
          {/*Soft Skill Items*/}
          {SoftSkills.map((skill) => {
            return (
              <div className="skill-item" key={skill.skill}>
                <h4 className="progress-title">{skill.skill}</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-progress-value={skill.percentage}
                  >
                    <div className="progress-value">{skill.percentage}%</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*Coding Skills Column End*/}
      </div>
    </SectionContainer>
  );
};
export default Resume;
