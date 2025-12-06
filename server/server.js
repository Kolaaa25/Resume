const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Projects data
const projects = [
  {
    id: 1,
    title: 'Cleaning Service',
    description: 'A full-stack booking platform for cleaning services with customer portal, admin panel, and Stripe payment integration.',
    link: 'https://cleaning-azure.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'Stripe', 'Vite'],
  },
  {
    id: 2,
    title: 'Coffee Shop',
    description: 'A stylish coffee shop website with menu, cart functionality, admin dashboard, and user authentication.',
    link: 'https://coffee-shop-gilt-five.vercel.app/',
    tags: ['React', 'JavaScript', 'CSS3'],
  },
  {
    id: 3,
    title: 'CineStream Movies',
    description: 'A premium movie streaming platform with user subscriptions, Stripe payments, and TMDB API integration.',
    link: 'https://cine-stream-movie.vercel.app/',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TMDB API'],
  },
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio API is running',
    endpoints: {
      projects: '/api/projects',
      health: '/api/health'
    }
  });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
