import ProjectData from './raw-data/ProjectData'

interface Project {
  title: string;
  year: number;
  description: string;
  highlights: string[];
  github: string;
}

const ProjectCard = ({ title, year, description, highlights, github }: Project) => (
  <div className="project-card-content">
    <h2 className="title">{title} <span className="year">({year})</span></h2>
    <p className="description">{description}</p>
    <ul className="highlights">
      {highlights.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <a href={github} target="_blank" rel="noopener noreferrer" className="github">View on GitHub</a>
  </div>
);

const Projects = () => {
  return (
    <section className="project-card">
      <h1 className="project-card-heading">🚀 Projects (2024 – 2025)</h1>
      <div className="project-card-content-container">
        {ProjectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
