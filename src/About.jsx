

import React from 'react';
import './About.css'; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profile-image">
        <img src="/sush.jpg" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>Hii! I am Sushma Vaddepally</h2>
        <p>
          A passionate full-stack developer skilled in Java, Python, JavaScript, HTML, CSS,
          MySQL, and GitHub. I love building elegant and efficient web applications that solve real-world problems.
          I’m constantly learning and looking for opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
