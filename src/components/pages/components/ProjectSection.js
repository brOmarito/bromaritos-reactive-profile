import React from 'react';

export default function ProjectSection ({classname, projects}) {

    return (
        <div className={`ps-all ${classname}`}>
            {projects.map((project) => (
                <div className='project-section'>
                    <div className='proj-title'>{project.title}</div>
                    <div className='proj-container'>
                        <a className='img-link' href={project.liveUrl}>
                            <img src={project.image} alt={`${project.title}-image`} />
                        </a>
                    </div>
                    <div className='proj-links'>
                        <a href={project.liveUrl}>Live App</a>
                        <a href={project.repoUrl}>Repo</a>
                    </div>
                </div>
            ))}
        </div>
    )
};