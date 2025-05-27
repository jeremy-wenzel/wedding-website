import React, { useState } from 'react';
import { Row, Form, Button, Container, Alert } from 'react-bootstrap';
import './Home.css';
import { submitRsvp } from './services/rsvpService.ts';

export default function RSVP() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState('');
    const [guests, setGuests] = useState(0);
    const [dietary, setDietary] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        
        try {
            const success = await submitRsvp({
                name,
                email,
                attending,
                guests,
                dietary
            });
            
            if (success) {
                setSubmitted(true);
                console.log('RSVP submitted successfully to server');
            } else {
                setError('There was a problem submitting your RSVP. Please try again later.');
            }
        } catch (err) {
            console.error('Error submitting RSVP:', err);
            setError('There was a problem connecting to the server. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };return (
        <div className='text-align-center'>
            <Row>
                <h1 className='name-header'>RSVP</h1>
            </Row>
            <Row>
                <h5 className='location-header'>Please respond by June 15, 2025</h5>
            </Row>
            <Container className="mt-4">{!submitted ? (
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Will you be attending?</Form.Label>
                            <Form.Select 
                                value={attending} 
                                onChange={(e) => setAttending(e.target.value)}
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">Select...</option>
                                <option value="yes">Joyfully Accept</option>
                                <option value="no">Regretfully Decline</option>
                            </Form.Select>
                        </Form.Group>

                        {attending === 'yes' && (
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Label>Number of Guests (including yourself)</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        min="1" 
                                        value={guests} 
                                        onChange={(e) => setGuests(parseInt(e.target.value))} 
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Dietary Restrictions</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        value={dietary}
                                        onChange={(e) => setDietary(e.target.value)}
                                        placeholder="Please list any dietary restrictions or allergies"
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>
                            </>
                        )}

                        <Button 
                            className="rsvp-button mt-3" 
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                        </Button>
                    </Form>
                ) : (
                    <div className="text-center">
                        <h2>Thank You!</h2>
                        <p>Your RSVP has been received. We look forward to celebrating with you!</p>
                    </div>
                )}
            </Container>
        </div>
    );
}