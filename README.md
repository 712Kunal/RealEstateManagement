# 🏠 Real Estate Management System

A modern full-stack real estate management platform built with React.js and Express.js, offering seamless property listing, management, and search capabilities.

## ✨ Features

- 🏘️ Property Listings with Advanced Search
- 👤 User Authentication & Authorization
- 💼 Agent/Owner Dashboard
- 📱 Responsive Design
- 🗺️ Interactive Property Maps
- 💬 Real-time Chat System
- 📊 Analytics Dashboard
- 🔍 Advanced Search Filters

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library
- **Redux Toolkit** - State Management
- **Tailwind CSS** - Styling
- **Material UI** - Component Library
- **Framer Motion** - Animations
- **Axios** - API Requests
- **React Router** - Navigation

### Backend
- **Express.js** - Node.js Framework
- **Prisma ORM** - Database ORM
- **MongoDB** - Database
- **Zod** - Schema Validation
- **JWT** - Authentication
- **Socket.io** - Real-time Features

## 🚀 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/real-estate-management.git
cd real-estate-management
```

2. Install dependencies for frontend and backend
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Set up environment variables
```bash
# In server directory, create .env file
DATABASE_URL="your_mongodb_url"
JWT_SECRET="your_jwt_secret"
PORT=5000

# In client directory, create .env file
REACT_APP_API_URL="http://localhost:5000"
```

4. Run the application
```bash
# Run backend server
cd server
npm run dev

# Run frontend in another terminal
cd client
npm start
```

## 🌟 Key Features Explained

### Property Management
- Create, update, and delete property listings
- Upload multiple images with drag-and-drop functionality
- Rich text editor for property descriptions
- Property status management (Available, Sold, Under Contract)

### User System
- Role-based access control (Admin, Agent, User)
- Profile management with verification
- Saved properties and search preferences
- Message center for inquiries

### Search & Filter
- Advanced search with multiple parameters
- Price range slider
- Property type filters
- Location-based search
- Sort by various criteria

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

