import React from "react";
import "./SocialLinks.css";
import Mail from "./Images/Mail.webp";
import Github from "./Images/Github1.png";
import Instagram from "./Images/Instagram.webp";
import Linkedin from "./Images/Linkedin.png";
import Twitter from "./Images/x.png";

function SocialLinks() {
  return (
    <>
    <div className="sociallink">
      
      
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=natarajananbarasu@gmail.com" target="_blank" rel="noopener noreferrer">
      <img src={Mail} alt="Link-Img" style={{ width: '40px', height: '40px' }} loading="lazy" />
      </a>
     

      <a href="https://www.instagram.com/anbarasu_a_n/">
      <img src={Instagram} alt="Link-Img" style={{ width: '40px', height: '40px' }} />
      </a>
      

      <a href="https://www.linkedin.com/in/anbarasu-a-n/">
      <img src={Linkedin} alt="Link-Img" style={{ width: '40px', height: '40px' }} />
      </a>
     

      <a href="https://twitter.com/MrEmperoroflove/">
      <img src={Twitter} alt="Link-Img" style={{ width: '40px', height: '40px' }} />
      </a>

      <a href="https://github.com/Anbarasu-A-N">
      <img src={Github} alt="Link-Img" style={{ width: '40px', height: '40px' }} />
      </a>
     
    </div></>
  );
}

export default SocialLinks;
