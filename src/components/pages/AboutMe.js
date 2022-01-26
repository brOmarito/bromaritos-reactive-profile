import React from 'react';
import campus from '../../images/uga-campus.jpg';
import headshot from '../../images/headshot.jpg';
// CSS
import '../css/aboutme.css';

export default function AboutMe ({ currPage, setCurrPage }) {

    return <div className='container about-me'>
        <div className="card about-me-card">
            <div className='about-me-banner'>
                <img src={campus} className="card-img-top" alt="UGA campus" />
            </div>
            <div className="card-body">
                <div className='about-me-left'>
                    <div className='about-me-headshot'>
                        <img src={headshot} className='headshot-img' alt='My Face' />
                    </div>
                    <h5 className="card-title about-me-title">Who is this person?</h5>
                    {/*
                    // Contact me button but need to troubleshoot the onClick triggering the navbar switch
                    <a href='#contact' class="btn btn-secondary contact-btn" onClick={() => setCurrPage('contact')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        Contact Me
                    </a>
                    */}
                </div>
                <p className="card-text about-me-text">
                    Hello, and welcome to my portfolio! My name is Omar Pacheco, AKA brOmarito as I'm sure you noticed. 
                    I've worked in the tech industry for 5 years now and I love it because there's always something new to learn. 
                    However, I don't want to spend my About Me sitting here reiterating information you can just read in my resume. 
                    With that in mind, keep reading to learn more about me as a person.
                    <br></br>
                    <br></br>
                    I'm a fan of learning languages (no, not just coding languages). So far, I can speak Portuguese and Spanish fluently 
                    while also being able to survive in French. And by survive, I mean I can ask how to get places, order food, and how 
                    to find the bathroom. By the time this goes live, I will have probably finished my trip to France so feel free to ask 
                    me how I did with my basic French! I also really enjoy drawing, music (I specifically love diving into lyrics so hip-
                    hop and rap are a must), and playing video games. And last, but certainly not least, I love my dog! Honestly all dogs 
                    but my little dude is a black standard poodle named BMO and he is awesome. Now, let's dive into that a little bit more! 
                    (Or not, feel free to navigate away...)
                    <br></br>
                    <br></br>
                    Let's start with music! As I mentioned before, I really enjoy listening to hip-hop and rap. Artists like Lupe Fiasco, 
                    Amine, Denzel Curry, Old Kanye (Straight from the soul, Kanye), among others. That's not it, though! I'll listen to just 
                    about anything like the Wallows, J Balvin, Bad Bunny, Arctic Monkeys, Otis Redding, Clairo, and many more! A next step 
                    for my portfolio is to add a music section to discuss music and for me to post some reviews.
                    <br></br>
                    <br></br>
                    Last, but not least, I love playing games. I generally stick to single player story-driven games like The Last of Us, 
                    God of War, Guardians of the Galaxy, Red Dead Redemption, and the like but also love others. Some honorable mentions 
                    are Dead Cells, Stardew Valley, FIFA, and many more.
                </p>
            </div>
        </div>
    </div>
};