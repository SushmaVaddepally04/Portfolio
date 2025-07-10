
import './Footer.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
export default function ContactFooter() {


  return (
    <div className="contact-footer">
    <footer className="footer">
        <div className="social-links">
        <a href="vsushma0124@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail /></a>
          <a href="https://github.com/you" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          <a href="www.linkedin.com/in/sushma-vaddepally-81709525a" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
          
        </div>
        <p>© {new Date().getFullYear()} SushmaVaddepally. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
