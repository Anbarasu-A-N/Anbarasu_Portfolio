import { Container, Row, Col } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit, DiJava } from "react-icons/di";
import { SiMysql, SiPython, SiPostgresql, SiDocker, SiKubernetes, SiTerraform, SiLinux, SiJenkins } from "react-icons/si";
import { FaAws } from 'react-icons/fa';

import "./Skill.css";

function Skill() {
  return (
    <div>
      <center>
        <h1 id="skills">Professional Skillset</h1>
      </center>
      <Container fluid className="skill-section" id="skills">
        <Row className="skillrow" id="skills">
          <Col className="tech-icons" id="skills">
            <DiJava />
            <p id="skills">Java</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiMysql />
            <p id="skills">MySQL</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <DiJavascript1 />
            <p id="skills">JavaScript</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <DiReact />
            <p id="skills">React</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <DiGit />
            <p id="skills">Git</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiPython />
            <p id="skills">Python</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <FaAws />
            <p id="skills">AWS</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiPostgresql />
            <p id="skills">PostgreSQL</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiDocker />
            <p id="skills">Docker</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiKubernetes />
            <p id="skills">Kubernetes</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiTerraform />
            <p id="skills">Terraform</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiLinux />
            <p id="skills">Linux</p>
          </Col>
          <Col className="tech-icons" id="skills">
            <SiJenkins />
            <p id="skills">Jenkins</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skill;
