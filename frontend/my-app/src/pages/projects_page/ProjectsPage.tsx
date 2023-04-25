import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from "../../components/ProjectCard";
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import app_styles from '../../App.module.css';
import projects_styles from './ProjectsPage.module.css';

import {projects} from "../../state/state";
import {Project} from "../../types";
import {map} from "react-bootstrap/ElementChildren";


function ProjectsPage() {

    const makeThreeInBuch = (projects: Project[]) => {
        var res: Project[][] = [];

        var curBuch: Project[] = [];
        for (let i = 0; i < projects.length; i++) {
            curBuch.push(projects[i]);
            if (i % 3 == 2) {
                res.push(curBuch);
                curBuch = [];
            }
        }
        if (curBuch.length > 0) {
            res.push(curBuch);
        }
        return res;
    }

    return (
        <div>
            <MyHeader />
            <Carousel interval={null} indicators={false} variant={'dark'} style={{ height: '80vh' }}>
                {makeThreeInBuch(projects).map(buch => (
                    <Carousel.Item>
                        <div className={`${app_styles.space_around} ${projects_styles.margin_carousel_item}`}>
                        {buch.map(project => (
                                <ProjectCard
                                    id={project.id}
                                    name={project.name}
                                    creator={project.creator}
                                    description={project.description}
                                />
                        ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <MyFooter />
        </div>
    );
}

export default ProjectsPage;
