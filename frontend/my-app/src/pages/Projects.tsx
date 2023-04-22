import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from "../components/ProjectCard";
import MyHeader from "../components/Header";
import MyFooter from "../components/Footer";

function Projects() {
    return (
        <div>
            <MyHeader/>
            <Carousel interval={null} indicators={false} variant={'dark'} style={{height: '80vh'}}>
                <Carousel.Item>
                    <div style={{display: 'flex', justifyContent: 'space-around', margin: '100px', marginTop: '20vh'}}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    </div>
                </Carousel.Item>

                <Carousel.Item >
                    <div style={{display: 'flex', justifyContent: 'space-around', margin: '100px', marginTop: '20vh'}}>
                    <ProjectCard/>
                    <text>
                    hello
                    </text>
                    <ProjectCard/></div>

                </Carousel.Item>

                <Carousel.Item >
                    <div style={{display: 'flex', justifyContent: 'space-around', margin: '100px', marginTop: '20vh'}}>
                    <ProjectCard/>
                    </div>
                </Carousel.Item>
            </Carousel>
            <MyFooter/>
        </div>
    );
}

export default Projects;
