<img width="1512" alt="createpost" src="https://github.com/user-attachments/assets/583c86e6-a31a-4bae-9b10-01c857ddeb40" /><img width="1500" alt="main" src="https://github.com/user-attachments/assets/07b8fb43-14ba-4e80-80f1-923ab8367d79" /># React Social Media App

A simple and interactive social media web application built using React, TypeScript, and Firebase. This project allows users to authenticate with Google, view and create posts, and interact with the posts by liking them. All data is stored and managed using Firebase's real-time database and authentication.

---

## Key Features

1. **Google Authentication**:
   - Users can sign in using their Google accounts via Firebase Authentication.
   - Displays the user's Google profile picture and name after login.
[Google](https://github.com/user-attachments/assets/7a961609-290a-45e5-a176-15053dda8166")
2. **Create and View Posts**:
   - Users can create posts with a title and description.
   - Posts are displayed on the main page and stored in Firebase Firestore.
[POST](https://github.com/user-attachments/assets/b78508d4-1261-4a4c-9a29-200ba3dc3a54")
3. **Like Functionality**:
   - Each post includes a like button that allows users to like a post.
   - Likes are tracked to ensure each user can like a post only once.
[Like](https://github.com/user-attachments/assets/c245e6a1-6d66-4ffc-8a21-1029cdfc8e98")
4. **Real-time Updates**:
   - All posts and likes are stored in Firebase Firestore and updated in real time on the app.
[Firebae](https://github.com/user-attachments/assets/65bffc80-072e-4408-8555-11478d6ea0ca)
---

## Project Structure

- **Frontend**:
  - Developed with React and TypeScript.
  - Components include `Login`, `CreatePost`, and `MainPage` for navigation and post handling.

- **Backend**:
  - Firebase Firestore for real-time database management.
  - Firebase Authentication for Google sign-in.
  - Firebase Hosting for deployment.

---

## Technologies Used

- **Frontend**:
  - React (v18.3.1)
  - React Router DOM for navigation
  - React Firebase Hooks for seamless Firebase integration
  - React Hook Form for form validation
  - TypeScript for type safety

- **Backend**:
  - Firebase:
    - Firestore Database for storing posts and likes
    - Authentication for Google sign-in

---

## How the App Works

### 1) Login with Google
- Users can sign in via the **Login** page using their Google accounts.
- Once signed in, their Google profile picture and name are displayed on the navigation bar.

### 2) Main Page
- Displays all posts, including the title, description, and the number of likes.
- Users can like posts by pressing the like button, and their action is tracked to ensure one like per user.

### 3) Create Post
- Users can create a post by clicking the **Create Post** button in the navigation bar.
- A form is displayed where users can enter a title and description.
- Submitted posts are saved to Firebase Firestore and displayed on the main page.

---

## Firebase Configuration

The Firebase configuration is defined in the `firebase.ts` file:

```typescript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
