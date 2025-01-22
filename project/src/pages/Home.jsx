import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, Calendar, ScrollText, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'Course Information',
    description: 'Access detailed course materials, syllabi, and learning objectives.',
    icon: BookOpen,
    href: '/courses',
  },
  {
    name: 'Resource Database',
    description: 'Explore our curated collection of textbooks, papers, and tutorials.',
    icon: Database,
    href: '/resources',
  },
  {
    name: 'ML Summaries',
    description: 'Generate concise summaries of cryptography topics using ML.',
    icon: ScrollText,
    href: '/summaries',
  },
  {
    name: 'Events',
    description: 'Stay updated with upcoming conferences, seminars, and workshops.',
    icon: Calendar,
    href: '/events',
  },
  {
    name: 'Community',
    description: 'Connect with peers, discuss topics, and share knowledge.',
    icon: MessageSquare,
    href: '/community',
  },
];

const updates = [
  {
    title: 'New Research Papers Added',
    description: 'Check out the latest additions to our resource database.',
  },
  {
    title: 'Upcoming Workshop',
    description: 'Join us for a hands-on workshop on practical cryptography next week.',
  },
  {
    title: 'ML Summary Generator Update',
    description: 'Our ML summary generator now supports more topics and improved accuracy.',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-6xl">
          Welcome to CryptoPortal
        </h1>
        <p className="mt-6 text-lg leading-8 text-[rgb(224,204,250)]">
          Your comprehensive resource for Applied Cryptography and Topics in Cryptanalysis at IIIT Delhi.
          Access course materials, generate summaries, and connect with peers.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/courses"
            className="rounded-md bg-[rgb(136,58,234)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(49,10,101)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(136,58,234)]"
          >
            Explore Courses
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-[rgb(224,204,250)] hover:text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[rgb(224,204,250)]">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            Comprehensive Learning Resources
          </p>
          <p className="mt-6 text-lg leading-8 text-[rgb(224,204,250)]">
            Access everything you need for your cryptography studies in one place.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.name}
                to={feature.href}
                className="group relative flex flex-col rounded-lg border border-[rgb(136,58,234)] bg-[#23262d] p-6 hover-gradient transition-all duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-[rgb(136,58,234)] group-hover:text-white"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[rgb(224,204,250)] group-hover:text-white">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="bg-[rgba(49,10,101,0.2)] rounded-lg shadow-lg border border-[rgb(136,58,234)] p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Latest Updates</h2>
        <div className="relative h-24 overflow-hidden">
          <div className="animate-scroll space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="border-l-4 border-[rgb(136,58,234)] pl-4">
                <h3 className="font-semibold text-[rgb(224,204,250)]">{update.title}</h3>
                <p className="text-white">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
