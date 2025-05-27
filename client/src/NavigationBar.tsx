import React from 'react';
import { Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {
    return (
        <Row className='justify-content-center'>
            <Col xs="auto">
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link as={Link} to="/our-story" className="nav-link">Our Adventures</Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link as={Link} to="/location" className="nav-link">Venue</Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link as={Link} to="/schedule" className="nav-link">Schedule</Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link as={Link} to="/registry" className="nav-link">Registry</Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link as={Link} to="/rsvp" className="nav-link">RSVP</Nav.Link>
            </Col>
        </Row>
    );
}