// RSVP service for managing guest data
// For fallback, we can import the data directly if needed
// import rsvpData from '../data/rsvp-list.json';

import config from './environment-config.ts';

// Type definitions
export interface GuestData {
  id: number;
  name: string;
  email: string;
  status: 'pending' | 'confirmed' | 'declined';
  totalGuests: number;
  dietary: string;
  inviteCode: string;
}

export interface RsvpSubmission {
  name: string;
  email: string;
  attending: string;
  guests: number;
  dietary: string;
}

// API URL for the server
const API_URL = config.apiUrl;

// Get all guests
export const getAllGuests = async (): Promise<GuestData[]> => {
  try {
    const response = await fetch(`${API_URL}/api/admin/guests`);
    if (!response.ok) {
      console.error('Failed to fetch guests:', response.statusText);
      return [];
    }
    const data = await response.json();
    return data.guests || [];
  } catch (error) {
    console.error('Error fetching guests:', error);
    return [];
  }
};

// Get guest by invite code
export const getGuestByInviteCode = async (inviteCode: string): Promise<GuestData | undefined> => {
  const guests = await getAllGuests();
  return guests.find(guest => guest.inviteCode === inviteCode);
};

// Submit an RSVP
export const submitRsvp = async (submission: RsvpSubmission): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/api/rsvp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });
    
    if (!response.ok) {
      console.error('RSVP submission failed:', response.statusText);
      return false;
    }
    
    const data = await response.json();
    console.log('RSVP Submission successful:', data);
    return true;
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return false;
  }
};

// For admin use - get RSVP statistics
export const getRsvpStats = async () => {
  const guests = await getAllGuests();
  return {
    totalInvited: guests.length,
    totalConfirmed: guests.filter(g => g.status === 'confirmed').length,
    totalDeclined: guests.filter(g => g.status === 'declined').length,
    totalPending: guests.filter(g => g.status === 'pending').length,
    totalGuestCount: guests.reduce((acc, guest) => {
      return acc + (guest.status === 'confirmed' ? guest.totalGuests : 0);
    }, 0)
  };
};