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
                <h5 className="card-title">Who is this person?</h5>
                <p className="card-text">
                    Hello, and welcome to my portfolio! My name is Omar Pacheco, AKA brOmarito as I'm sure you noticed. 
                    I've worked in the tech industry for 5 years now and I love it because there's always something new to learn. 
                    However, I don't want to spend my About Me sitting here reiterating information you can just read in my resume. 
                    With that in mind, keep reading to learn more about me as a person.
                    <br></br>
                    I'm a fan of learning languages (no, not just coding languages). So far, I can speak Portuguese and Spanish fluently 
                    while also being able to survive in French. And by survive, I mean I can ask how to get places, order food, and how 
                    to find the bathroom. By the time this goes live, I will have probably finished my trip to France so feel free to ask 
                    me how I did with my basic French! I also really enjoy drawing, music (I specifically love diving into lyrics so hip-
                    hop and rap are a must), and playing video games. Let's dive into that a little bit more! (Or not, feel free to navigate 
                    away...)
                    <br></br>
                    Let's start with music
                </p>
            </div>
        </div>
    </div>
};