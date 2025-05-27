import React from 'react';
import AriAndJeremy from './img/jeremy-ari.jpg';
import { Image, Row, Button } from 'react-bootstrap';
import './Home.css';
import NavigationBar from './NavigationBar.tsx';
import { Link } from 'react-router-dom';
export default function Home() {
    const today = new Date();
    const weddingDate = new Date(2025, 7, 23); // August is month 7 (zero-based index)
    const diffTime = weddingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    return (
    <div className='text-align-center'>
        <Row className='intro'>
            <h5>The marriage of</h5>
        </Row>
        <Row>
            <h1 className='name-header'>Jeremy & Arianna</h1>
        </Row>
        <Row>
            <h5 className='location-header'>August 23, 2025 <span className='bullet'>•</span> Kent, WA</h5>
            <h5 className='location-header'>{diffDays} days to go!</h5>
        </Row>
        <Row>
            <NavigationBar/>
        </Row>
        <Row className='justify-content-center'>
            <Image className="main-img" src={AriAndJeremy} fluid/>
        </Row>
        <Row>
            <h1 className='bold'>The First Date</h1>
            <h5 className='underline'>June 1, 2023</h5>
            <p>
                It all started with a quick message on Hinge. He asked if her picture was taken at an F1 race and of course she had to mention she was a Lewis Hamilton fan.
                After securing her number, he asked her out on a date. It was only supposed to be a short "getting to know you" date, but time flew by and they spent 3 hours
                chatting and laughing. And you know what, they haven't stopped since.
            </p>
            <h1 className='bold'>The Proposal</h1>
            <h5 className='underline'>December 19, 2024</h5>
            <p>
                After months of searching for the right house that would fit their needs and multiple offers, Arianna sent Jeremy 11231 SE 220th Kent, WA, minutes after it listed.
                Jeremy didn't hesitate. He jumped on Redfin and locked in a private tour. 24 hours after the house was listed, Arianna and Jeremy were under contract.
            </p>
            <p>
                Days before closing, Jeremy had the ring. He thought, "What better place to propose than our new forever home?". On December 19, 2024, Arianna and Jeremy
                received the keys to their new forever home. Ring in his left pocket so that Arianna wouldn't see it from her passenger princess seat, they drove to their new
                forever home to see it as new home owners. 
            </p>
            <p>
                When they opened the door, Jeremy had no idea where to actually get on his knee. When the kids and Ari all converged
                on the kitchen that had some goodies from the realtor, he knew that was the perfect moment. He got on one knee, and she said "What are you doing? Oh shit! Oh my Gosh!"
                He asked his bestest-best friend to become his bestest-best wife.
            </p>
            <p>                She said "YES"!
            </p>
        </Row>        <Row className="mt-4 mb-5 justify-content-center">
            <Link to="/rsvp" style={{ textDecoration: 'none' }}>
                <Button className="rsvp-button" size="lg">RSVP Now</Button>
            </Link>
        </Row>
    </div>
    )
}