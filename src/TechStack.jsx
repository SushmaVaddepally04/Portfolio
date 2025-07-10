import React from "react";
import './TechStack.css'; // optional for styling

const TechStack = () => {
  return (
    <div className="tech-icons tech-stack-container">
      <i className="devicon-java-plain colored" title="Java"></i>
      <i className="devicon-python-plain colored" title="Python"></i>
      <i className="devicon-html5-plain colored" title="HTML5"></i>
      <i className="devicon-css3-plain colored" title="CSS3"></i>
      <i className="devicon-javascript-plain colored" title="JavaScript"></i>
      <i className="devicon-mysql-plain colored" title="MySQL"></i>
      <i className="devicon-github-original" title="GitHub"></i>
    </div>
  );
};

export default TechStack;
