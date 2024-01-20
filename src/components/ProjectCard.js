import { Button, Card, Col } from "react-bootstrap"
import hanawilo from '../assets/projectAsset/hanawilo.png'


export const ProjectCard = ({title,imgURL,stack,description,github,demo}) => {
  return (
    <div>
          <Col size={12} sm={8} md={6} >
            <Card className="proj-imgbx">
                <Card.Img variant="top" style={{ height: '20rem' }} src={imgURL} alt="{title}"/>
                    <div className="proj-txt">
                        <h4> {title}</h4>
                        <h5>{description}</h5>
                        <span> {stack} </span>
                        <div></div>
                        <Card.Body>
                        <Button href={github} target="_blank" rel="noreferrer">Github</Button>{" "}
                        {demo && 
                            <Button href={demo} target="_blank" rel="noreferrer">Demo</Button>
                        }
                        </Card.Body>
                    </div>     
            </Card>
        </Col>
    </div>
  )
}
