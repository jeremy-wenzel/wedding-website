# Wedding Website - RSVP Implementation Guide

This document provides guidance on how to implement a proper backend for the RSVP functionality in your wedding website.

## Current Implementation

The current implementation simulates a backend service. When a guest submits an RSVP:

1. The form data is collected in the React component
2. It's passed to the `submitRsvp()` function in `services/rsvpService.ts`
3. The function currently simulates a network request and returns a success/failure response

This is perfect for development and testing, but in a real-world scenario, you'll want to store the RSVP data on a server.

## Option 1: Formspree (Easiest)

The simplest solution is to use a form submission service like [Formspree](https://formspree.io/):

1. Create a free Formspree account
2. Create a new form and get your form ID
3. Modify the RSVP.tsx component to submit to Formspree:

```jsx
// In RSVP.tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        attending,
        guests,
        dietary
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      setSubmitted(true);
    } else {
      setError('There was a problem submitting your RSVP. Please try again.');
    }
  } catch (err) {
    // ...error handling
  }
};
```

The form submissions will appear in your Formspree dashboard, and you'll also receive them by email.

## Option 2: Firebase/Firestore (Recommended)

For more control and better integration with your admin page:

1. Create a Firebase account and a new project
2. Set up Firestore database
3. Install Firebase in your project:
   ```
   npm install firebase
   ```
4. Create a firebase.js config file:

```js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

5. Update the rsvpService.ts to use Firebase:

```ts
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

// Submit an RSVP
export const submitRsvp = async (submission: RsvpSubmission): Promise<boolean> => {
  try {
    await addDoc(collection(db, 'rsvps'), {
      ...submission,
      timestamp: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return false;
  }
};

// Get all RSVPs (for admin)
export const getAllRsvps = async () => {
  const snapshot = await getDocs(collection(db, 'rsvps'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

## Option 3: Simple Backend Server

If you want complete control, you can create a simple backend server using:

- **Node.js with Express**
- **Python with Flask**
- **Netlify Functions**
- **Vercel Serverless Functions**

These options require more setup but give you full control over data storage and processing.

## Security Considerations

For any of these options, consider adding:

1. **reCAPTCHA** to prevent spam submissions
2. **Password protection** for the admin page
3. **Data validation** on both client and server sides

## Need Help?

Let me know which option you prefer, and I can help you implement it!