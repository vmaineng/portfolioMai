import React from 'react'
// import hanawilo from '../assets/projectAsset/hanawilo.png';
import habit from '../assets/projectAsset/habit1.png';
import movie from '../assets/projectAsset/movie.png';
import tiny from '../assets/projectAsset/tiny.png';
import resource from '../assets/projectAsset/resource.png';
import football from '../assets/projectAsset/football.png';
import { Container, Row, Col} from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen'

export const Projects = () => {

    const projects = [
        {
            title: "Gridiron Survivor",
            imgURL: football,
            stack: "Tech Stack: React, TypeScript, Next, Jest, React Library, AWS",
            description: "May the best win! This application will be created with user authentication & CRUD functionalities",
            github: "https://github.com/LetsGetTechnical/gridiron-survivor",
            demo: "https://github.com/LetsGetTechnical/gridiron-survivor"
        },
        {
            title: "Resource Library",
            imgURL: resource,
            stack: "Tech Stack: React, Javascript, Chakra UI, Next, MongoDB, Expressjs, Nodejs",
            description: "A resource management application with user authentication & CRUD functionalities",
            github: "https://github.com/hjkmines/resource_library",
            demo: "https://github.com/hjkmines/resource_library"
        },
        {
            title: "Fri-Yay!",
            imgURL: movie,
            stack: "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
            description: "Binge the night away with exclusive movies and films!",
            github: "https://github.com/vmaineng/friyay",
            demo: "https://github.com/vmaineng/friyay"
        },
        {
            title: "Habit-sation",
            imgURL: habit,
            stack: "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
            description: "Binge the night away with exclusive movies and films!",
            github: "https://github.com/vmaineng/friyay",
            demo: "https://github.com/vmaineng/friyay"
        },
        {
            title: "Tiny Task",
            imgURL: tiny,
            stack: "Tech Stack: React, Javascript, Chakra UI, Ruby, Ruby on Rails",
            description: "A kids activities management application with user authentication & CRUD functionalities",
            github: "https://github.com/vmaineng/Tiny-Task",
            demo: "https://vimeo.com/748869588/2f2d5d8986"
        },
    ]
  return (
    <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={15}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2> Projects </h2>
                            <Container >
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                            <ProjectCard 
                                                key={index}
                                                {...project}
                                            />
                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}
