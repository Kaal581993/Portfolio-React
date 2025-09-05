import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ArcReactorSvg from './ArcReactorSvg';

const paths = [
  '/',
  '/pages/About',
  '/pages/WorkExperience',
  '/pages/Projects',
  '/pages/SkillSet',
  '/pages/Contact'
];

const bgColors = [
  '#005150ff', // Home
  '#ffd86b', // About
  '#9999fb', // Work Experience
  '#168f4fff', // Projects
  '#6c54d5ff', // SkillSet
  '#300655ff'  // Contact (you can change any of these)
];

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const idx = paths.indexOf(window.location.pathname);
    return idx === -1 ? 0 : idx;
  });

  const [menuOpen, setMenuOpen] = useState(false); // toggle state

  useEffect(() => {
    const idx = paths.indexOf(location.pathname);
    setActiveIndex(idx === -1 ? 0 : idx);
  }, [location.pathname]);

  function handleClick(e: React.MouseEvent, index: number, to: string) {
    e.preventDefault();
    if (index === activeIndex) {
      document.body.style.transition = 'background-color 0.6s ease';
      document.body.style.backgroundColor = bgColors[index];
      return;
    }
    setActiveIndex(index);
    document.body.style.transition = 'background-color 0.6s ease';
    document.body.style.backgroundColor = bgColors[index] ?? bgColors[0];
    setTimeout(() => navigate(to), 120);
  }

  return (
    <div
      className="menu-container"
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background:'black',
          zIndex: 20
        }}
      >
        {
          <ArcReactorSvg /> }


      </button>

      {/* Arc menu links */}
      <nav style={{ position: 'fixed'}}>
            {paths.map((to, i) => {
                const startAngle = -90; // start at top
                const arcSpread = 180; // degrees covered
                const stepAngle = arcSpread / (paths.length - 1);
                const angleDeg = startAngle + i * stepAngle;
                const angleRad = (angleDeg * Math.PI) / 180;

                const radius = menuOpen ? 230 : 0; // distance from center

                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

            return (
              <Link
                key={i}
                to={to}
                className={`nav-background ${activeIndex === i ? 'active' : ''}`}
                onClick={(e) => handleClick(e, i, to)}
                aria-current={activeIndex === i ? 'page' : undefined}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  transition: 'transform 0.5s ease',
                  transitionDelay: menuOpen ? `${i * 0.1}s` : '0s'
                }}
              >
                {[
                  '🏠 Home',
                  'ℹ️ About',
                  '🧳 Work Experience',
                  '🚀 Projects',
                  '🛠️ Technical Skills',
                  '✉️ Contact Me'
                ][i]}
              </Link>
            );
          })}

      </nav>
    </div>
  );
};

export default Menu;
