import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from "../components/ProjectCard";
import MyHeader from "../components/Header";

function Projects() {
    return (
        <div>
            <MyHeader/>
            <Carousel interval={null} indicators={false} variant={'dark'}>
                <Carousel.Item>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    </div>
                </Carousel.Item>

                <Carousel.Item >
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <ProjectCard/>
                    <text>
                    hello
                    </text>
                    <ProjectCard/></div>

                </Carousel.Item>

                <Carousel.Item >
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <ProjectCard/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;
