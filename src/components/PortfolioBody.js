import React from 'react';
import AboutMe from './AboutMe';

// CSS
import './css/portbody.css';

export default function PortfolioBody ({ currPage, setCurrPage }) {
    if (currPage === 'AboutMe') {
        return <div className='port-body'>
                    <AboutMe currPage={currPage} setCurrPage={setCurrPage} />
                </div>
    } else {
        return <div className='port-body'>
            <p>Not found</p>
        </div>
    }
}