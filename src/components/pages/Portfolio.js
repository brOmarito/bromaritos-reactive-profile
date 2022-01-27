import React from 'react';
import ProjectSection from './components/ProjectSection';
import { horizProjLeft, horizProjRight, mainProj } from '../../utils/projects';
// CSS
import '../css/portfolio.css';

export default function Portfolio ({ currPage, setCurrPage }) {
    // Project Section Classes
    const mainProjClass = 'main-project'
    const horizontalClass = 'horizontal-projects';

    return <div className='container portfolio-space'>
        <ProjectSection classname={horizontalClass} projects={horizProjLeft} />
        <ProjectSection classname={mainProjClass} projects={[mainProj]} />
        <ProjectSection classname={horizontalClass} projects={horizProjRight} />
    </div>
};