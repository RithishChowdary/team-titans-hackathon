# Traveloop - Personalized Travel Planning Platform

> Odoo x Parul University Hackathon 2026 Submission  
> Team Titans Hackathon Project

## Project Overview

**Traveloop** is a personalized and intelligent travel planning platform that helps users create, organize, manage, and share multi-city trips with ease.

The platform is designed to simplify travel planning by combining itinerary management, budget tracking, destination discovery, packing checklists, trip notes, reminders, and AI-powered weather recommendations in one responsive web application.

Traveloop enables users to plan trips efficiently, stay within budget, and get a complete view of their travel journey from one place.

## Problem Statement

Planning a trip manually can be time-consuming and confusing, especially when users need to manage multiple destinations, travel dates, budgets, activities, notes, and packing items separately.

Traveloop solves this problem by providing a centralized travel planning system where users can create personalized itineraries, track budgets, manage trip details, and access smart recommendations.

## Key Features

- Personalized multi-city trip planning
- Secure Google authentication
- User-specific dashboard
- Create, view, and manage trips
- Dynamic destination preview
- Itinerary builder with travel stops
- Day-wise trip planning
- Budget estimation and tracking
- Packing checklist management
- Trip notes and reminders
- Public itinerary sharing
- Responsive and modern user interface
- AI/ML-based weather recommendation
- MySQL database persistence
- RESTful API integration

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Spring Boot | Backend REST API development |
| MySQL | Relational database management |
| Firebase Authentication | Google login and user authentication |
| Python | AI/ML weather recommendation module |
| REST APIs | Frontend-backend communication |
| WebSocket | Real-time communication support |
| Scheduler | Automated backend tasks |
| CSS / UI Libraries | Responsive and clean interface design |

## System Architecture

Traveloop follows a full-stack web application architecture:

```text
User Interface
React.js Frontend
        |
        | REST API Calls
        |
Spring Boot Backend
        |
        | JDBC / JPA
        |
MySQL Database

Python AI/ML Module
        |
Weather Recommendation Engine

Team Members and Roles
Team Member	Role	Responsibilities
Rithish Chowdary	Database Engineer	Database schema design, normalization, indexes, joins, and query optimization
Pinninti Sai Kiran	Frontend Developer	React UI, dashboard, charts, responsive design, and Firebase authentication
Routhu Naveen Kumar	Backend Developer	Spring Boot REST APIs, WebSocket, scheduler, and authentication logic
K. Manohar Reddy	AI/ML & Integration Engineer	Recommendation engine, sentiment analysis, testing, and documentation
Project Modules
Landing Page
The landing page is the entry point of Traveloop. It introduces users to the platform with a visually engaging hero section and clearly communicates the purpose of the application.

Traveloop helps users plan personalized multi-city trips, discover destinations, manage travel budgets, and organize their entire journey from one place.

<img width="1600" height="777" alt="Traveloop Landing Page" src="https://github.com/user-attachments/assets/697546e8-ec68-4e80-b4bc-3e8ed4cef091" />
Authentication - Login and Signup
Traveloop provides secure authentication using Google login. Users can sign in quickly without creating separate usernames and passwords.

Features
Google OAuth 2.0 login
One-click authentication
Automatic user profile creation
Persistent user sessions
Protected routes for authenticated users
Purpose
The authentication module ensures that each user gets a private workspace to create, edit, and manage their own trips, budgets, notes, reminders, and itineraries.

<img width="1600" height="806" alt="Traveloop Login Screen" src="https://github.com/user-attachments/assets/815e70e3-e093-4765-800f-3dee6864b7f2" /> <img width="1600" height="808" alt="Traveloop Signup Screen" src="https://github.com/user-attachments/assets/acd7a3f3-3ed6-4fb1-8e6a-60e08a5e6d4c" />
Dashboard
The dashboard acts as the central hub of Traveloop. After login, users can view their profile, access existing trips, and start planning a new journey.

Features
Personalized welcome section
User profile information
Create Trip call-to-action
Overview of created trips
Empty-state guidance for new users
Quick navigation to dashboard, planner, and logout
Purpose
The dashboard helps users quickly access travel data, monitor trip progress, and create new itineraries from a clean and user-friendly interface.

<img width="1600" height="822" alt="Traveloop Dashboard" src="https://github.com/user-attachments/assets/3b53b33b-689c-4ff9-ba61-3fd9ad06ea4b" />
Dynamic Destination Preview
The Create New Trip screen includes a smart destination preview panel that updates automatically based on the destination selected by the user.

When users choose a destination such as Goa, India, the application displays a destination image, location name, country, and short travel description.

Features
Real-time destination preview
Dynamic destination images
Destination name and country display
Informative travel description
Better visual planning experience
Purpose
This feature makes trip planning more interactive by giving users an immediate preview of their selected destination before creating the trip.

<img width="1600" height="821" alt="Dynamic Destination Preview" src="https://github.com/user-attachments/assets/e9ac085d-4c6d-4eb6-95a1-00929ef99bc6" /> <img width="1600" height="822" alt="Create Trip Destination Preview" src="https://github.com/user-attachments/assets/ab9850ce-cf11-4c2e-806c-1480b4aab50b" />
Itinerary Builder
The itinerary builder allows users to organize complete trip details such as destination, budget, travel dates, number of travelers, and multiple travel stops.

Users can create structured multi-city itineraries and manage trip plans in an organized way.

Features
Add multiple trip stops
View destination details
Manage travel dates
Track trip budget
Organize activities
Build personalized itineraries
<img width="1600" height="813" alt="Traveloop Itinerary Builder" src="https://github.com/user-attachments/assets/3ec647a5-e888-4809-a73b-03814f8ed8ca" />
My Trips
The My Trips section displays all trips created by the user in visually rich cards. Each card shows the destination image, budget, travel date, and trip status.

Features
View all created trips
Destination-based trip cards
Budget and date display
Trip status tracking
Easy trip management
<img width="1600" height="900" alt="Traveloop My Trips" src="https://github.com/user-attachments/assets/5024ac6f-f96f-4ac4-a79f-11608c94300c" />
Backend Features
RESTful API development using Spring Boot
User-based trip data handling
Database CRUD operations
Authentication support
Scheduler-based backend processing
WebSocket support for real-time updates
Integration with frontend services
Database Features
Relational database design using MySQL
Normalized schema structure
User, trip, destination, itinerary, budget, checklist, and note-related tables
Indexing for optimized queries
Joins for combined travel data retrieval
Persistent storage for user-created trips
AI/ML Integration
Traveloop includes a Python-based AI/ML module for weather recommendation. This feature helps users make better travel decisions by considering weather-related insights for destinations.

AI/ML Use Cases
Weather-based recommendation
Destination suitability support
Smarter travel planning assistance
Improved user decision-making
Core Highlights
Full-stack web application
Clean and responsive UI
Secure Google authentication
Spring Boot REST API backend
MySQL database persistence
Dynamic real-time data integration
Personalized trip management
AI/ML-powered recommendation support
Hackathon-ready scalable architecture
Future Enhancements
Add collaborative trip planning with multiple users
Add live map integration
Add hotel and transport recommendations
Add expense splitting between travelers
Add downloadable itinerary PDF
Add email reminders for upcoming trips
Add admin dashboard
Improve AI-based destination recommendations
Add real-time weather API integration
Conclusion
Traveloop is a complete and user-friendly travel planning platform that simplifies the process of organizing personalized multi-city trips.

With features such as secure authentication, dynamic destination previews, trip creation, itinerary building, budget tracking, checklist management, and AI/ML-based weather recommendation, the platform provides travelers with everything they need to manage their journey efficiently.

Built using React.js, Spring Boot, MySQL, Firebase Authentication, and Python AI/ML, Traveloop demonstrates a scalable full-stack architecture and delivers a modern, responsive user experience.

This project successfully fulfills the hackathon objective of building an intelligent and practical travel planning solution.
