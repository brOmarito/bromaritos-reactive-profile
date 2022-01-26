import React from 'react';
// CSS
import '../css/portfolio.css';

export default function Portfolio ({ currPage, setCurrPage }) {

    return <div className='container portfolio-space'>
        <div className='horizontal-projects'>
            <div className='small-proj-card'></div>
            <div className='small-proj-card'></div>
        </div>
        <div className='main-project'>

        </div>
        <div className='horizontal-projects'>
            <div className='small-proj-card'></div>
            <div className='small-proj-card'></div>
        </div>
    </div>
};