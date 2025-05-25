# Image-scenary-app

A web application that allows users to register, log in, and view a dynamic main page featuring beautiful, animated nature scenery backgrounds.

**Live Demo:**  
[https://image-scenary-app.onrender.com/](https://image-scenary-app.onrender.com/)

---

## Description

The **Image-scenary-app** is designed to provide users with a visually engaging experience of nature scenery images. The application features a modern user interface with transparent forms and animated backgrounds. Users can create an account, log in securely, and upon successful authentication, are greeted with a main page that cycles through a collection of scenic images using smooth CSS animations.

### Features

- **User Registration:** New users can sign up by providing their first name, last name, email, phone number, and password.
- **User Login:** Registered users can log in to access the main page.
- **Animated Main Page:** After login, users see a main page with a heading and a background that cycles through various scenic images.
- **Modern UI:** Transparent, visually appealing forms with background images and CSS animations.
- **Notifications:** Desktop notifications provide feedback for registration and login actions.

### Backend Modules

- **Express:** Handles server setup and routing.
- **Mongoose:** Manages MongoDB connections and user schema.
- **body-parser:** Parses incoming form data.
- **node-notifier:** Sends desktop notifications for user actions.
- **Custom Handlers:** Logic for user registration and login, including validation and database operations.

### Frontend Components

- **Login Page:** Transparent login form with animated borders and a link to the signup page.
- **Signup Page:** Registration form with a modern, transparent design.
- **Main Page:** Displays a heading and cycles through scenic images as the background.
- **CSS Animations:** Enhance the visual appeal of forms and backgrounds.
- **Static Assets:** All images and CSS files are organized for easy access and fast loading.

### Database

- **MongoDB:** Stores user information securely.
- **User Schema:** Includes fields for first name, last name, email, phone number, and password.

---

## How It Works

1. **Sign Up:** New users register with their details.
2. **Login:** Registered users log in with their credentials.
3. **Main Page:** After login, users are redirected to a main page with animated scenic backgrounds.

---

**Note:**  
Passwords are stored as plain text for demonstration purposes. For production use, always hash passwords and follow secure authentication practices.
