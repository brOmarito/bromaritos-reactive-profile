import React from 'react';
// CSS
import '../css/resume.css';

export default function Resume ({ currPage, setCurrPage }) {
    return <div className='resume-section'>
        <iframe title='resume-pdf' src="https://drive.google.com/file/d/1CSmdOyGoKmZ0W5KGkPP2HR5T8Zj0i69W/preview" width="90%" allow="autoplay"></iframe>
        <br/>
        <br/>
        <a className='pdf-link' href='https://drive.google.com/uc?export=download&id=1CSmdOyGoKmZ0W5KGkPP2HR5T8Zj0i69W'>Click here to download a PDF copy of my resume</a>
    </div>
};