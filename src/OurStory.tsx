import React from 'react';
import { Image, Row } from 'react-bootstrap';
import './OurStory.css';
import SoccerGame from './img/fun-dates/soccer-game.jpg';
import HarryPotter from './img/fun-dates/harry-potter.jpg';
import JohnOliver from './img/fun-dates/john-oliver.jpg';
import HikingInSnow from './img/fun-dates/hiking-in-the-snow.jpg';
import Bridge from './img/fun-trips/bridge.jpg';
import Leavenworth from './img/fun-trips/leavenworth.jpg';
import HelicopterFlight from './img/hawaii/helicopter-flight.jpg';
import HonoluluAtNight from './img/hawaii/honolulu-at-night.jpg';
import KauaiCanyon from './img/hawaii/kauai-canyon.jpg';
import KualoaRanch from './img/hawaii/kualoa-ranch.jpg';
import Stairs from './img/hawaii/stairs.jpg';
import Waterfall from './img/hawaii/waterfall.jpg'
import Castle from './img/japan/castle.jpg';
import DisneySea from './img/japan/disney-sea.jpg';
import Garden from './img/japan/garden.jpg';
import Monkey from './img/japan/monkey.jpg';
import Suzuka from './img/japan/suzuka.jpg';
import Shibuya from './img/japan/shibuya.jpg';

interface StoryAndDescriptionProps {
    imgSrc: any;
    title: string;
    description: string;
}

function StoryAndDescription(props: StoryAndDescriptionProps) {
    return (
        <Row>
            <Image className='story-img' src={props.imgSrc} />
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </Row>
    )
}

export default function OurStory() {
    return (
        <div>
            <h1>Our Adventures</h1>
            <p>
                Before getting engaged, Ari and Jeremy spent a lot of time together, going on numerous dates and trips. In each one, they were always happy 
                to just be spending time together, even if events didn't go their way or as they expected. Their adventures are always full of laughs and smiles,
                teasing and joking, love and happiness. And they don't plan to stop after getting married.
            </p>
            <h3>Fun dates and small trips</h3>
            <StoryAndDescription
                imgSrc={SoccerGame}
                title='First soccer game'
                description="Jeremy's first Sounders game! Ari moved heaven and earth to get Jeremy that jersey. This was also their first date after becoming exclusive!"
                />
            <StoryAndDescription
                imgSrc={HarryPotter}
                title="Harry's Wizarding World"
                description='A fun date night full of magic and potions!' />
            <StoryAndDescription
                imgSrc={JohnOliver}
                title='John Oliver comedy show'
                description="Fun and laughs at John Oliver stand up comendy show! Just before this, Jeremy's Texas Longhorns beat Alabama's Rol Tide!"/>
            <StoryAndDescription
                imgSrc={HikingInSnow}
                title="Hiking in the snow"
                description="Getting some exercise hiking in the snow of Mt. Rainier"/>
            <StoryAndDescription
                imgSrc={Bridge}
                title="Capilano Suspension bridge"
                description="Their first trip to Canada, they braved the Capilano Suspension bridge and walked through the many suspension bridges in the trees"/>
            <StoryAndDescription
                imgSrc={Leavenworth}
                title="Leavenworth for Jeremy's Birthday"
                description="For his birthday, Ari and Jeremy went to Leavenworth for a weekend to enjoy some time together" />

            <h3>Japan (April 2024)</h3>
            <StoryAndDescription
                imgSrc={Castle}
                title="Some castle in Osaka"
                description="Take shortly after arriving in Japan after an unforeen stay in South Korea"/>
            <StoryAndDescription
                imgSrc={Monkey}
                title="In the mountains with some monkeys"
                description='At a sanctuary for monkeys outside Kyoto. Monkeys would run around and grab each others asses'/>
            <StoryAndDescription
                imgSrc={Suzuka}
                title="Our first F1 Race"
                description="Race day at Suzuka raceway! Of course Max won..."/>
            <StoryAndDescription
                imgSrc={DisneySea}
                title="Disney at Sea"
                description="Exploring Disney with Japanese dub"/>
            <StoryAndDescription
                imgSrc={Garden}
                title="In the gardens of Tokyo"
                description='Exploring the gardens of Tokyo'/>
            <StoryAndDescription
                imgSrc={Shibuya}
                title="Shibya Sky tower"
                description="Enjoying the view of Tokyo near the world's busiest crosswalks"/>

            <h3>Hawaii (November 2024)</h3>
            <StoryAndDescription
                imgSrc={Stairs}
                title="Koko Crater Trail"
                description="Our first hike of Hawaii and we decided to do the hardest one first"/>
            <StoryAndDescription
                imgSrc={KualoaRanch}
                title="ATVs at Kualoa Ranch"
                description="Riding around the location where they shot Lost, Jurassic Park, and King Kong"/>
            <StoryAndDescription
                imgSrc={HonoluluAtNight}
                title="Honolulu at Night"
                description="Enjoying the Honolulu skyline on beach"/>
            <StoryAndDescription
                imgSrc={HelicopterFlight}
                title="Helicopter Flight over Kauai"
                description="Exploring the beauty of Kauai on a Helicopter ride around the island. Both Ari and Jeremy got motion sickness."/>
            <StoryAndDescription
                imgSrc={Waterfall}
                title="Waterfall on a super long ass hike"
                description="A beautiful waterfall at the end of a 2 mile hike through mud and rivers. Little did you know, Ari just got over being pissed at Jeremy for taking her through a river and soaking her boots about a mile back."/>
            <StoryAndDescription
                imgSrc={KauaiCanyon}
                title="Kauai Canyon"
                description="Biggest canyon on Hawaii. Little did Jeremy know, Ari was going to take him on a 3 mile hike through mud."/>
        </div>
    )
}