import React from 'react';
import {Nav} from 'react-bootstrap';
import "./NavigationBar.css"

export default function NavigationBar() {
    return (
        <Nav className='nav-bar'>
            <Nav.Item>
                <Nav.Link className='link' href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href='/our-story'>Our Adventures</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href='/location'>Venue</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href='/schedule'>Schedule</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href='/registry'>Registry</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}