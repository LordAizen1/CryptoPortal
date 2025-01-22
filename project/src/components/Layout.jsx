import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Calendar, Database, Home, Info, MessageSquare, ScrollText, UserCircle } from 'lucide-react';
// import logo from '/cryptoportal-logo-zip-filepng\logo-no-background.png';


const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Resources', href: '/resources', icon: Database },
  { name: 'ML Summaries', href: '/summaries', icon: ScrollText },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Community', href: '/community', icon: MessageSquare },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#13151a]">
      <nav className="bg-[#23262d] border-b border-[rgb(136,58,234)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-[rgb(136,58,234)]" />
                <span className="ml-2 text-xl font-bold gradient-text">CryptoPortal</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`${
                          isActive
                            ? 'bg-[rgb(49,10,101)] text-[rgb(224,204,250)]'
                            : 'text-white hover:text-[rgb(224,204,250)]'
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="ml-4">
                <Link
                  to="/profile"
                  className="flex items-center text-white hover:text-[rgb(224,204,250)] px-3 py-2 rounded-md text-sm font-medium"
                >
                  <UserCircle className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-[#23262d] text-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">CryptoPortal</h3>
              <p className="text-[rgb(224,204,250)]">
                A comprehensive resource for cryptography students at IIIT Delhi
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[rgb(224,204,250)]">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white hover:text-[rgb(224,204,250)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[rgb(224,204,250)]">Contact</h3>
              <p className="text-white">
                IIIT Delhi<br />
                Okhla Industrial Estate, Phase III<br />
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
