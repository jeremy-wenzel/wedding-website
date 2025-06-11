import express, { Request, Response } from 'express';
import cors from 'cors';

// Define interfaces
interface GuestData {
  id: number;
  name: string;
  email: string;
  status: 'pending' | 'confirmed' | 'declined';
  totalGuests: number;
  dietary: string;
  inviteCode: string;
}

interface RsvpSubmission {
  name: string;
  email: string;
  attending: string;
  guests: number;
  dietary: string;
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Basic logging middleware
app.use((req: Request, res: Response, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
    server: 'Simple TypeScript Server'
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// RSVP endpoint
app.post('/api/rsvp', (req: Request, res: Response) => {
  try {
    const { name, email, attending, guests, dietary } = req.body as RsvpSubmission;
    
    if (!name || !email || attending === undefined) {
      return res.status(400).json({
        error: 'Name, email, and attending status are required'
      });
    }
    
    // Get existing guests
    const fs = require('fs');
    const path = require('path');
    const guestsFilePath = path.join(__dirname, '../data/rsvp-list.json');
    
    let guestsList = [];
    try {
      const guestsData = fs.readFileSync(guestsFilePath, 'utf8');
      const parsedData = JSON.parse(guestsData);
      
      // Check if the data is in the expected format
      if (parsedData && Array.isArray(parsedData.guests)) {
        guestsList = parsedData.guests;
      } else if (Array.isArray(parsedData)) {
        guestsList = parsedData;
      } else {
        console.log('Guests data not in expected format, initializing empty array');
      }
    } catch (error) {
      console.log('No existing guests file, will create a new one');
      // Ensure the directory exists
      fs.mkdirSync(path.dirname(guestsFilePath), { recursive: true });
    }
    
    // Check if guest already exists by email
    const guestIndex = guestsList.findIndex((g: any) => g.email.toLowerCase() === email.toLowerCase());
    
    const status = attending === 'yes' ? 'confirmed' : 'declined';
    
    if (guestIndex === -1) {
      // Add new guest
      const newGuest: GuestData = {
        id: Date.now(),
        name,
        email,
        status,
        totalGuests: Number(guests) || 0,
        dietary: dietary || '',
        inviteCode: '' // No invite code for self-RSVPs
      };
      
      guestsList.push(newGuest);
      
      // Save updated guests list
      fs.writeFileSync(guestsFilePath, JSON.stringify({ guests: guestsList }, null, 2));
      
      res.status(201).json({
        message: 'RSVP submitted successfully',
        guest: newGuest
      });
    } else {
      // Update existing guest
      const updatedGuest = {
        ...guestsList[guestIndex],
        name, // Update name in case it was entered differently
        status,
        totalGuests: Number(guests) || 0,
        dietary: dietary || ''
      };
      
      guestsList[guestIndex] = updatedGuest;
      
      // Save updated guests list
      fs.writeFileSync(guestsFilePath, JSON.stringify({ guests: guestsList }, null, 2));
      
      res.json({
        message: 'RSVP updated successfully',
        guest: updatedGuest
      });
    }
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    res.status(500).json({ error: 'Failed to submit RSVP' });
  }
});

app.get('/api/admin/guests', (req: Request, res: Response) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const guestsFilePath = path.join(__dirname, '../data/rsvp-list.json');
    
    let guestsList = [];
    try {
      const guestsData = fs.readFileSync(guestsFilePath, 'utf8');
      const parsedData = JSON.parse(guestsData);
      
      // Check if the data is in the expected format
      if (parsedData && Array.isArray(parsedData.guests)) {
        guestsList = parsedData.guests;
      } else if (Array.isArray(parsedData)) {
        guestsList = parsedData;
      } else {
        console.log('Guests data not in expected format, initializing empty array');
      }
    } catch (error) {
      console.log('No existing guests file found');
      // Ensure the directory exists
      fs.mkdirSync(path.dirname(guestsFilePath), { recursive: true });
    }
    
    res.json({ guests: guestsList });
  } catch (error) {
    console.error('Error reading guests data:', error);
    res.status(500).json({ error: 'Failed to retrieve guests data' });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});