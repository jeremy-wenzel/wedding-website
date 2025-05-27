import React, { useState, useEffect } from 'react';
import { Container, Table, Badge, Row, Col, Card } from 'react-bootstrap';
import { getAllGuests, getRsvpStats, GuestData } from './services/rsvpService.ts';
import './Home.css';

export default function RSVPAdmin() {
    const [guests, setGuests] = useState<GuestData[]>([]);
    const [stats, setStats] = useState({
        totalInvited: 0,
        totalConfirmed: 0,
        totalDeclined: 0,
        totalPending: 0,
        totalGuestCount: 0
    });    useEffect(() => {
        const loadData = async () => {
            try {
                // Load guest data
                const guestList = await getAllGuests();
                setGuests(guestList);
                
                // Load stats
                const rsvpStats = await getRsvpStats();
                setStats(rsvpStats);
            } catch (error) {
                console.error('Error loading RSVP data:', error);
            }
        };
        
        loadData();
    }, []);

    const getStatusBadge = (status: string) => {
        switch(status) {
            case 'confirmed':
                return <Badge bg="success">Confirmed</Badge>;
            case 'declined':
                return <Badge bg="danger">Declined</Badge>;
            default:
                return <Badge bg="warning">Pending</Badge>;
        }
    };    return (
        <div className="text-align-center">
            <Row>
                <h1 className="name-header">RSVP Administration</h1>
            </Row>
            
            <Container className="mt-4">
                <Row className="mb-4">
                    <Col md={3}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{stats.totalInvited}</Card.Title>
                                <Card.Text>Total Invitations</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{stats.totalConfirmed}</Card.Title>
                                <Card.Text>Confirmed</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{stats.totalDeclined}</Card.Title>
                                <Card.Text>Declined</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{stats.totalGuestCount}</Card.Title>
                                <Card.Text>Total Attending</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Party Size</th>
                            <th>Dietary Notes</th>
                            <th>Invite Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map(guest => (
                            <tr key={guest.id}>
                                <td>{guest.id}</td>
                                <td>{guest.name}</td>
                                <td>{guest.email}</td>
                                <td>{getStatusBadge(guest.status)}</td>
                                <td>{guest.plusOnes + 1}</td>
                                <td>{guest.dietary || '-'}</td>
                                <td>{guest.inviteCode}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}