import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from "../../components/ProjectCard";
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import app_styles from '../../App.module.css';
import projects_styles from './ProjectsPage.module.css';

function ProjectsPage() {
    return (
        <div>
            <MyHeader/>
            <Carousel interval={null} indicators={false} variant={'dark'} style={{height: '80vh'}}>
                <Carousel.Item>
                    <div className={`${app_styles.space_around} ${projects_styles.margin_carousel_item}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className={`${app_styles.space_around} ${projects_styles.margin_carousel_item}`}>
                        <ProjectCard/>
                        <text>
                            hello
                        </text>
                        <ProjectCard/>
                    </div>

                </Carousel.Item>

                <Carousel.Item >
                    <div className={`${app_styles.space_around} ${projects_styles.margin_carousel_item}`}>
                        <ProjectCard/>
                    </div>
                </Carousel.Item>
            </Carousel>
            <MyFooter/>
        </div>
    );
}

export default ProjectsPage;
