import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

// CSS
import './css/portbody.css';

export default function PortfolioBody ({ currPage, setCurrPage }) {
    if (currPage === 'AboutMe') {
        return <div className='port-body'>
                    <AboutMe currPage={currPage} setCurrPage={setCurrPage} />
                </div>
    } else if (currPage === 'portfolio') {
        return <div className='port-body'>
                    <Portfolio currPage={currPage} setCurrPage={setCurrPage} />
                </div>
    } else {
        return <div className='port-body'>
            <p>Not found</p>
        </div>
    }
}