import React from 'react';
import { Nav, Row } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <div className='wrapper'>
            {/* <div>
                <Row>
                    <h2>Arianna & Jeremy</h2>
                </Row>
            </div> */}
            {/* <div>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/our-story'>Our Adventures</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/location'>Venue</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/schedule'>Schedule</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/registry'>Registry</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div> */}
            <div className='outlet'>
                <Outlet />
            </div>
            <div className='footer'>
                <p className='footer-text'>Made with &#128156; by Jeremy</p>
            </div>
        </div>
    )
}