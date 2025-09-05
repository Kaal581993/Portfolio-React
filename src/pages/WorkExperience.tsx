import WorkExperienceData from './raw-data/WorkExperienceData';

const WorkExperience = () => {
  return (
    <div className='work-details-container'>
      <h1>🧳 Work Experience</h1>
      <div className='work-cards'>
        {WorkExperienceData.jobTitle.map((title, index) => (
          <div key={index} className='work-card-individual'>
            <h2 className='work-title'>{title}</h2>
            <h3 className='project-details'>{WorkExperienceData.WorkHeading[index]}</h3>
            <p className='responsibilities'>
              {WorkExperienceData.Responsibilities[index].split('.').map((line, i) =>
                line.trim() ? <li key={i}> * {line.trim()}.</li> : null
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
