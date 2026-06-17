# El Taco Azteca Website

A modern, responsive website developed for El Taco Azteca, an authentic Veracruz-style Mexican street food business located in Edinburgh, Indiana.

The website was designed to provide customers with an engaging online experience while showcasing the business's menu, story, location, and contact information. It serves as both a marketing platform and a point of contact for catering inquiries, private events, and customer communication.

## Features

* Fully responsive desktop and mobile layouts with optimized slideshow experiences
* Hero section image slideshow
* Interactive menu section with expandable item descriptions
* Contact form powered by Formspree
* Custom Thank You page after successful form submission
* Privacy Policy page
* Terms & Conditions page
* Embedded Google Maps location
* Facebook integration
* Optimized WebP image assets
* Modern UI built with Tailwind CSS
* Responsive mobile navigation with hamburger menu
* Smooth dropdown transitions for improved mobile UX

## Accessibility & UX

* Semantic HTML structure
* Alt text for images
* Smooth scrolling navigation
* Automatic scroll-to-top between routes
* Mobile-friendly interactions
* Clear mobile menu discovery prompts
* Responsive navigation designed for touch devices

## Technical Overview

* Built as a single-page React application using Vite
* Implemented client-side routing with React Router
* Managed interactive UI states using React Hooks
* Created reusable responsive components with Tailwind CSS
* Integrated Formspree API for customer contact submissions
* Implemented responsive image optimization using WebP assets
* Designed mobile-first layouts with adaptive navigation behavior

## Installation

Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/el-taco-azteca.git

Navigate to the project directory:
```bash
cd el-taco-azteca

Install dependencies:
```bash
npm install

Run the development server:
```bash
npm run dev

## Production Build

Create a production build:
```bash
npm run build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

text
src/
├── pages/
│   ├── Home.jsx
│   ├── ThankYou.jsx
│   ├── Policy.jsx
│   └── Terms.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
├── images/
├── logo/
└── website assets/

## Lessons learned

* Implementing responsive navigation patterns
* Managing UI state with React hooks
* Creating animated components with Tailwind CSS transitions
* Improving user experience through mobile-focused design decisions

## Challenges & Solutions

### Responsive Hero Slideshow
Designed separate desktop and mobile slideshow experiences to ensure images remained visually appealing across different screen sizes.

### Mobile Menu Experience
Implemented a responsive hamburger navigation system with animated transitions using React state management and Tailwind CSS.

### Client Communication Workflow
Integrated Formspree to allow customers to submit inquiries without requiring a custom backend.

## Future Improvements

The following enhancements are planned for future development:

### User Experience
* Interactive slideshow controls allowing users to manually switch between hero images
* Animated page transitions between routes
* Active section highlighting while scrolling
* Improved accessibility and keyboard navigation support

### Business Features
* Online ordering system
* Event calendar showcasing upcoming festivals and appearances
* Expanded social media integration
* Additional menu categories and seasonal specials

### Technical Improvements
* Search engine optimization enhancements
* Performance optimizations and image lazy-loading
* Expanded English/Spanish translations across all pages
* Enhanced contact form feedback and confirmation messaging

## Deployment

The application is deployed using Vercel with a custom domain configuration.

Live Site:

https://el-taco-azteca.com

## Contact

For catering requests, private events, bookings, or general inquiries, please use the contact form available on the website.

## Developed By

Designed and developed by Irving Luis-Orozco.

This project demonstrates full-stack web development concepts including frontend architecture, responsive UI design, API integration, deployment, and user experience optimization.
LinkedIn: https://www.linkedin.com/in/irving-luis-orozco-836236321

This project was created as a custom website for El Taco Azteca to establish a professional online presence and improve customer engagement.

## License

This project is proprietary software created for El Taco Azteca. 
The source code may not be copied, redistributed, or used commercially without permission.
