import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from "../../components/ProjectCard";
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import app_styles from '../../App.module.css';
import projects_styles from './ProjectsPage.module.css';

import {projects} from "../../store/state";
import {Project} from "../../types";
import {map} from "react-bootstrap/ElementChildren";
import { useNavigate } from 'react-router-dom';
import {PROJECTS_URL} from "../../logic/http";
import {Context} from "../../index";



function ProjectsPage() {
    const {projects} = useContext(Context);
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(PROJECTS_URL(String(id)));
    };

    const [localProjects, setlocalProjects] = useState<Project[]>([]);


    useEffect(() => {
        setlocalProjects(projects.storageProjects);
        console.log(localProjects);
    }, []);


    const makeThreeInBuch = (localProjects: Project[]) => {
        var res: Project[][] = [];

        var curBuch: Project[] = [];
        for (let i = 0; i < localProjects.length; i++) {
            curBuch.push(localProjects[i]);
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
                {makeThreeInBuch(localProjects).map(buch => (
                    <Carousel.Item>
                        <div className={`${app_styles.space_around} ${projects_styles.margin_carousel_item}`}>
                        {buch.map(project => (
                            <div onClick={() => handleClick(project.id)}>
                                <ProjectCard
                                    id={project.id}
                                    name={project.name}
                                    creator={project.creator}
                                    description={project.description}
                                />
                            </div>
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
