import Skills from './raw-data/Skills';

const SkillCard = ({ Sheading, STechDescription }: { Sheading: string; STechDescription: string[] }) => (
  <div className='skill-card'>
    <h2 className='skill-heading'>{Sheading}</h2>
    <ul className='skills-description'>
      {STechDescription.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const SkillSet = () => {
  return (
    <div className="skill-card-container">
      <h1 className="skill-card-heading">🛠️ Technical Skills</h1>
      <div className='skill-set-card'>
        {Skills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;



/**
 * Skills
💻 Programming Languages & Web Technologies
Java (J8SE), JavaScript (ES6+), HTML5, CSS3

React.js (Hooks, JSX, reusable components)

Basic Bash scripting for automation

Python (Beginner proficiency)

⚙️ Backend & API Development
Spring Boot (RESTful services, layered architecture)

JPA/Hibernate (Entity modeling, ORM)

REST API creation, testing, and integration

Familiarity with FHIR & HL7 standards (healthcare APIs)

🗃️ Databases & Querying
Oracle DB, MySQL, MariaDB, MSSQL

DML/DDL scripting, stored procedures, joins, indexing

SQL query optimization and log-based debugging

🧪 Testing & Debugging
Manual Testing (Blackbox, Whitebox)

Backend and frontend log tracing

API response monitoring and issue replication

🧰 Tools & Platforms
Git & GitHub for version control

Jira for task management and issue tracking

Contentstack CMS, eClinicalWorks healthcare platform

Linux-based environments for CLI and deployment

💡 Soft Skills
Strong analytical and debugging mindset

Cross-functional collaboration with developers and clients

Self-driven learner with focus on clean, scalable code


 */