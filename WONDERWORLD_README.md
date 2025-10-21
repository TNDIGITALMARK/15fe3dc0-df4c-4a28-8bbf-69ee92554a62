# WonderWorld - Discover Amazing Places

A beautiful, modern web application that brings the world's most breathtaking wonders to users through stunning imagery, fascinating stories, and curated experiences.

## Features

### 🏠 Discover Page (Home)
- **Visual Grid Layout**: Browse all wonders in a responsive grid with stunning photography
- **Smart Search**: Search by wonder name, location, or description
- **Category Filtering**: Filter wonders by Natural Wonders, Ancient Structures, Modern Marvels, Hidden Gems, Cultural Sites, and Geological Formations
- **Instant Favorites**: Tap the heart icon to save favorites
- **Responsive Cards**: Beautiful wonder cards with hero images, category badges, and quick descriptions

### 🧭 Explore Page
- **Category Browse**: Explore wonders organized by category with visual category cards
- **Random Discovery**: "Surprise Me" button for random wonder discovery
- **Category Statistics**: See how many wonders exist in each category
- **Visual Navigation**: Large, image-rich category cards for intuitive browsing

### 📖 Wonder Detail Page
- **Immersive Photo Gallery**: Swipeable photo gallery with fullscreen mode
- **Rich Information**: Detailed descriptions, historical timelines, and fascinating facts
- **Best Visiting Times**: See the optimal months to visit each wonder
- **Share Functionality**: Native share or clipboard copy for sharing wonders
- **Related Wonders**: Discover similar amazing places
- **Photographer Credits**: Attribution for stunning photography

### ❤️ Collection Page (My Favorites)
- **Personal Collection**: All saved wonders in one place
- **Statistics Dashboard**: Visual stats showing total wonders, categories, countries, and photos
- **Category Breakdown**: See favorites organized by category
- **Empty State Guidance**: Helpful prompts when collection is empty
- **Persistent Storage**: Favorites saved using localStorage

## Design System

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif for body text and UI
- **Heading Font**: Playfair Display - Elegant serif for headlines and titles
- **Responsive Scaling**: Optimized sizes for mobile and desktop

### Colors
- **Primary Blue**: Deep blue (#2563EB area) for navigation and trust
- **Accent Gold**: Warm gold (#F59E0B area) for highlights and CTAs
- **Neutral Palette**: Clean whites and grays for backgrounds
- **Semantic Colors**: Success, warning, and error states

### Components
- **Wonder Cards**: Consistent shadow, rounded corners, hover effects
- **Navigation Bar**: Fixed bottom navigation for mobile-first design
- **Category Filters**: Horizontal scrolling chips with active states
- **Photo Gallery**: Full-screen capable with smooth transitions
- **Buttons**: Touch-friendly sizes with clear visual feedback

## Technical Implementation

### Pages
- `/` - Discover feed with search and filtering
- `/explore` - Category-based exploration
- `/collection` - Personal favorites collection
- `/wonder/[id]` - Detailed wonder information

### Key Components
- `WonderCard` - Reusable card component for grid layouts
- `PhotoGallery` - Advanced image viewer with fullscreen mode
- `CategoryFilter` - Horizontal scrolling category selector
- `Navigation` - Bottom navigation bar with active states

### Data Structure
- Type-safe wonder definitions with TypeScript
- Mock data for 10 amazing wonders with rich metadata
- Extensible category system

### State Management
- `useFavorites` hook for localStorage-based favorites
- Client-side filtering and search
- Responsive state for mobile/desktop experiences

## Mock Data Included

1. **Aurora Borealis, Iceland** - Natural Wonders
2. **Machu Picchu, Peru** - Ancient Structures
3. **Antelope Canyon, Arizona** - Geological Formations
4. **Petra, Jordan** - Ancient Structures
5. **Bagan Temples, Myanmar** - Ancient Structures
6. **Zhangjiajie Pillars, China** - Geological Formations
7. **Victoria Falls, Zimbabwe** - Natural Wonders
8. **Great Barrier Reef, Australia** - Natural Wonders
9. **Santorini, Greece** - Cultural Sites
10. **Angkor Wat, Cambodia** - Ancient Structures

## Mobile-First Design

- Touch-optimized interactions
- Responsive grid layouts (1-3 columns)
- Bottom navigation for thumb-friendly access
- Optimized image loading
- Smooth scrolling and animations

## Future Enhancement Opportunities

- User authentication and profiles
- Social features (comments, ratings, reviews)
- Trip planning and itinerary building
- Integration with travel APIs for bookings
- Augmented reality features
- Multi-language support
- Advanced filtering (by continent, climate, difficulty)
- User-generated content and photo submissions
- Virtual tours and 360° imagery
- Travel blog integration

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari and Chrome
- Android Chrome and Firefox
- Progressive Web App ready

---

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
