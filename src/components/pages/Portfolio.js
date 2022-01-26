import React from 'react';
import ProjectSection from './components/ProjectSection';
// Project Image Import
import drinkFinder from '../../images/projects/drinkfinder-home.PNG';
import flasher from '../../images/projects/flasher-homepage.png';
import weatherDash from '../../images/projects/weather-dashboard.PNG';
import jate from '../../images/projects/jace-home.PNG';
import planner from '../../images/projects/day-planner-live.PNG';
// CSS
import '../css/portfolio.css';

export default function Portfolio ({ currPage, setCurrPage }) {
    // Project Section Classes
    const mainProjClass = 'main-project'
    const horizontalClass = 'horizontal-projects';

    const mainProj = {
                        title: 'Drink Finder',
                        image: drinkFinder,
                        liveUrl: 'https://bromarito.github.io/drink-finder/',
                        repoUrl: 'https://github.com/brOmarito/drink-finder',
                    }

    const horizProjLeft =  [
                                {
                                    title: 'Flasher',
                                    image: flasher,
                                    liveUrl: 'https://flasherquiz.herokuapp.com/',
                                    repoUrl: '#https://github.com/beattygraphics/Group-Project-2',
                                },
                                {
                                    title: 'Weather Dashboard',
                                    image: weatherDash,
                                    liveUrl: 'https://bromarito.github.io/weather-dashboard/',
                                    repoUrl: 'https://github.com/brOmarito/weather-dashboard',
                                },
                            ]

    const horizProjRight =  [
                                {
                                    title: 'J.A.T.E.',
                                    image: jate,
                                    liveUrl: 'https://aqueous-sierra-88477.herokuapp.com/',
                                    repoUrl: 'https://github.com/brOmarito/bromaritos-text-editor',
                                },
                                {
                                    title: 'Day Planner',
                                    image: planner,
                                    liveUrl: 'https://bromarito.github.io/day-planner/index.html',
                                    repoUrl: 'https://github.com/brOmarito/day-planner',
                                },
                            ]

    return <div className='container portfolio-space'>
        <ProjectSection classname={horizontalClass} projects={horizProjLeft} />
        <ProjectSection classname={mainProjClass} projects={[mainProj]} />
        <ProjectSection classname={horizontalClass} projects={horizProjRight} />
    </div>
};