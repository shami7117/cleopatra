import React from 'react';

// types.ts
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'cleocrew-promise-reliable-service',
    title: 'The CleoCrew Promise: Reliable Service Every Time',
    excerpt: 'Discover how CleoCrew maintains the highest standards of cleaning service.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    category: 'Company',
    author: 'CleoCrew Team',
    date: '2024-03-15',
    readTime: '5 min read',
    content: 'Full article content here...'
  },
  {
    id: 2,
    slug: 'psychology-clean-home-tidy-spaces',
    title: 'The Psychology of a Clean Home: Why Tidy Spaces Boost Your Mood',
    excerpt: 'Learn how a clean environment positively impacts your mental health and productivity.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    category: 'Wellness',
    author: 'Sarah Johnson',
    date: '2024-03-12',
    readTime: '7 min read',
    content: 'Full article content here...'
  },
  {
    id: 3,
    slug: 'join-creator-program-share-earn-inspire',
    title: 'Join the Creator Program: Share, Earn & Inspire',
    excerpt: 'Become a CleoCrew creator and share your cleaning tips with the community.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop',
    category: 'Community',
    author: 'Marketing Team',
    date: '2024-03-10',
    readTime: '4 min read',
    content: 'Full article content here...'
  },
  {
    id: 4,
    slug: 'eco-friendly-cleaning-simple-swaps',
    title: 'Eco-Friendly Cleaning: Simple Swaps for a Greener Home',
    excerpt: 'Practical tips for making your cleaning routine more environmentally friendly.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop',
    category: 'Sustainability',
    author: 'Emma Green',
    date: '2024-03-08',
    readTime: '6 min read',
    content: 'Full article content here...'
  },
  {
    id: 5,
    slug: '5-signs-time-book-professional-cleaning',
    title: "5 Signs It's Time to Book a Professional Cleaning",
    excerpt: 'Recognizing when you need expert help to maintain your home.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop',
    category: 'Tips',
    author: 'Michael Brown',
    date: '2024-03-05',
    readTime: '5 min read',
    content: 'Full article content here...',
    featured: true
  },
  {
    id: 6,
    slug: 'psychology-clean-home-mood-boost',
    title: 'The Psychology of a Clean Home: Why Tidy Spaces Boost Your Mood',
    excerpt: 'Explore the science behind why clean spaces make us feel better.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6a0f3a4a?w=600&h=400&fit=crop',
    category: 'Wellness',
    author: 'Dr. Lisa Chen',
    date: '2024-03-03',
    readTime: '8 min read',
    content: 'Full article content here...',
    featured: true
  },
  {
    id: 7,
    slug: '10-quick-cleaning-hacks-busy-professionals',
    title: '10 Quick Cleaning Hacks For Busy Professionals',
    excerpt: 'Pressed for time? These simple tricks will keep your home fresh and stress-free—without eating up your day.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
    category: 'Tips',
    author: 'Jessica Martinez',
    date: '2024-03-01',
    readTime: '6 min read',
    content: 'Full article content here...',
    featured: true
  }
];