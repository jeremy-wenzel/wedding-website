import React from 'react';
import {  Row } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import './Layout.css';
import NavigationBar from './NavigationBar.tsx';

export default function Layout() {
    return (
        <div className='wrapper'>
            <div>
                <Row className='text-center'>
                    <h2>Jeremy & Arianna</h2>
                </Row>
            </div>
            <div>
                <NavigationBar/>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
            <div className='footer'>
                <p className='footer-text'>Made with &#128156; by Jeremy</p>
            </div>
        </div>
    )
}