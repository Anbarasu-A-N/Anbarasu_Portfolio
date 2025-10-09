import { Container, Row, Col } from "react-bootstrap";
import { 
     SiMysql, SiSpring, SiKubernetes,
      SiAdobeillustrator, SiJenkins, SiTerraform, SiLinux,
    SiFigma, SiPostman, SiAdobephotoshop, SiAdobexd, SiDocker
  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Tools.css";

function Tools() {
  return (
    <>
    <div style={{backgroundColor:"black",  marginTop: "-5px",top :-1}}>
    <center>
      <h1 id="tools">Software Expertise</h1>
      </center>
    <Container fluid className="tools-section" id="tools">
      
      <Row className="toolsrow" id="tools">
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiSpring /> 
          <p  id="tools"  >Spring Boot</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <VscVscode /> 
          <p  id="tools" >VS Code</p>
        </Col>
        
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiMysql /> 
          <p id="tools">MySQL</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiAdobeillustrator /> 
          <p  id="tools">Adobe Illustrator</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiLinux /> 
          <p  id="tools" >Linux</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiTerraform /> 
          <p id="tools"   >Terraform</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons"id="tools" >
          <SiFigma /> 
          <p  id="tools">Figma</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiJenkins /> 
          <p id="tools"   >Jenkins</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiPostman /> 
          <p  id="tools" >Postman</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiAdobephotoshop /> 
          <p id="tools"  >Photoshop</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiAdobexd /> 
          <p  id="tools" >Adobe XD</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiKubernetes /> 
          <p id="tools">Kubernetes</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" id="tools">
          <SiDocker /> 
          <p  id="tools" >Docker</p>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default Tools;


/*
*/