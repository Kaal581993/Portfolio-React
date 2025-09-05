import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import About from './pages/About'
import WorkExperience from './pages/WorkExperience'
import Projects from './pages/Projects'
import SkillSet from './pages/SkillSet'
import Contact from './pages/Contact'
import Image from './components/Image'
import SocialNetwork from './components/SocialNetwork'
import './App.css'
//import Grtid from './pages/Grtid'

function App() {
  return (
    <>
      <div className='landing-page'>
        <h1 className='landing-page-heading'>Er. Viral Prajapati</h1>
        <div className='introduction-part'>
                    <Image />

          <h3>Welcome to my Portfolio</h3>
          <h4>Performance with Creativity is my Goal</h4>
          <Menu />
        </div>

        <div className='main'>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <WorkExperience />
                <Projects />
                <SkillSet />
                <Contact />
                <SocialNetwork />
              </>
            } />
            <Route path="/pages/About" element={<About />} />
            <Route path="/pages/WorkExperience" element={<WorkExperience />} />
            <Route path="/pages/Projects" element={<Projects />} />
            <Route path="/pages/SkillSet" element={<SkillSet />} />
            <Route path="/pages/Contact" element={<Contact />} />
          </Routes>
        </div> 
        <div>
          {/* <Grtid /> Experimental
          */}
        </div>
      </div>

    </>
  );
}

export default App;
