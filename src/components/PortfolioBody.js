import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';

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
    } else if (currPage === 'resume') {
        return <div className='port-body'>
                    <Resume currPage={currPage} setCurrPage={setCurrPage} />
                </div>
    } else if (currPage === 'contact') {
        return <div className='port-body'>
                    <ContactMe currPage={currPage} setCurrPage={setCurrPage} />
                </div>
    } else {
        return <div className='port-body'>
            <p>Not found</p>
        </div>
    }
}