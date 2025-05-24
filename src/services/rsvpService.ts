// RSVP service for managing guest data
import rsvpData from '../data/rsvp-list.json';

// Type definitions
export interface GuestData {
  id: number;
  name: string;
  email: string;
  status: 'pending' | 'confirmed' | 'declined';
  plusOnes: number;
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

// In a real application, these functions would interact with a backend API
// For this demo, we're simulating data operations with in-memory updates

// Get all guests
export const getAllGuests = (): GuestData[] => {
  return rsvpData.guests;
};

// Get guest by invite code
export const getGuestByInviteCode = (inviteCode: string): GuestData | undefined => {
  return rsvpData.guests.find(guest => guest.inviteCode === inviteCode);
};

// Submit an RSVP
export const submitRsvp = (submission: RsvpSubmission): Promise<boolean> => {
  // In a real app, this would send data to a server
  // For demo purposes, this just logs the submission and returns a success
  
  console.log('RSVP Submission:', submission);
  
  // Simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

// For admin use - get RSVP statistics
export const getRsvpStats = () => {
  const guests = rsvpData.guests;
  
  return {
    totalInvited: guests.length,
    totalConfirmed: guests.filter(g => g.status === 'confirmed').length,
    totalDeclined: guests.filter(g => g.status === 'declined').length,
    totalPending: guests.filter(g => g.status === 'pending').length,
    totalGuestCount: guests.reduce((acc, guest) => {
      return acc + (guest.status === 'confirmed' ? guest.plusOnes + 1 : 0);
    }, 0)
  };
};