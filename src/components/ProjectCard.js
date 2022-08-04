import React from 'react'
import { Col} from 'react-bootstrap';

function ProjectCard({title,description,image,url}) {
  return (
    <Col sm={6} md={4} lg={5}>
      <div className="proj-imgbx">
        <img src={image} className="imgbx" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <button className='btn2'><a href={url}>Demo</a></button>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard