import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Members from './pages/Members';
import About from './pages/About';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
          {/* Other routes will be added as we implement more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;