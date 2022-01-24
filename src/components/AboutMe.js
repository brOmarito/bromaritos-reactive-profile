import React from 'react';
import campus from '../images/uga-campus.jpg';
// CSS
import './css/aboutme.css';

export default function AboutMe ({ currPage, setCurrPage }) {
    return <div className='container about-me'>
        <div className="card about-me-card">
            <div className='about-me-banner'>
                <img src={campus} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
};