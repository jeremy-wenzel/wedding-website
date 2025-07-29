import React from 'react';
import './Location.css';

export default function Location() {
    return (
        <div>
            <h1 className='text-center'>Venue</h1>
            <p>The venue of our wedding is going to be our new home, 11231 SE 220th Pl, Kent, WA, 98031. This is our forever home where Jeremy proposed and where we will spending the next many years together. It seemed perfect to make this the place that we also get married.</p>
            <h3>Dress attire: Semi-formal.</h3>
            <p>Gentlemen: Shirt & Tie</p>
            <p>Ladies: A dress</p>
            <h5>Carpool - Please Read</h5>
            <p>In consideration of our neighbors, we kindly ask that you make your best effort to carpool to the venue. We do have quite a bit of parking but we don't want to impact the routines of our neighbors with the large number of cars.</p>
            <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5400.79157373152!2d-122.19326192156825!3d47.404220771171914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905c2e8a7d33c5%3A0x70b29e5c925d6676!2s11231%20SE%20220th%20Pl%2C%20Kent%2C%20WA%2098031!5e0!3m2!1sen!2sus!4v1739639002664!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <h3>Hotels</h3>
            <p>For the out-of-towners, here are some hotels that are nearby:</p>

            {/* TODO: Add 2-3 hotels for the family to stay at */}
            <h3>Family friendly things to do:</h3>

            <h5>Pacific Science Center</h5>
            <p>A science and technology center aimed at fueling the curiosity and discovery for children. They have a dinosaur exhibit, astronomy room, and butterfly jungle.</p>
            <p>Website: <a href="https://pacificsciencecenter.org/" target='_blank'>https://pacificsciencecenter.org/</a></p>
            <p>Directions: <a href="https://maps.app.goo.gl/JsS63ThGScSJxMDk8" target='_blank'>https://maps.app.goo.gl/JsS63ThGScSJxMDk8</a></p>

            <h5>Museum of flight</h5>
            <p>The Museum of Flight is the largest independent, non-profit air and space museum in the world! With over 175 aircraft and spacecraft, tens of thousands of artifacts, millions of rare photographs, dozens of exhibits and experiences and a world-class library, the museum and its people bring mankind's incredible history of flight to life.</p>
            <p>Website: <a href="https://www.museumofflight.org/" target='_blank'>https://www.museumofflight.org/</a></p>
            <p>Directions: <a href="https://maps.app.goo.gl/SaD3ZJbyJpcHNQVX6" target='_blank'>https://maps.app.goo.gl/SaD3ZJbyJpcHNQVX6</a></p>

            <h5>Family fun center</h5>
            <p>Bullwinkle's Family Fun Center in Tukwila offers various attractions such as miniature golf, go-karts, bumper boats, Kidz Kartz, batting cages, XD theater, Kidopolis Playland, Lazer Xtreme, bumper cars, Frog Hopper, arcade games, and bowling.</p>
            <p>Website: <a href="https://bullwinkles.com/tukwila/" target='_blank'>https://bullwinkles.com/tukwila/</a></p>
            <p>Directions: <a href="https://maps.app.goo.gl/tT5sWdgrcKCBigai9" target='_blank'>https://maps.app.goo.gl/tT5sWdgrcKCBigai9</a></p>
        </div>
    )
}