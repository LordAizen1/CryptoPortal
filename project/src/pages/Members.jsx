import React from 'react';
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Professor',
    specialization: 'Applied Cryptography',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000',
    publications: 45,
    email: 'sarah.johnson@iiitd.ac.in',
    github: 'sjohnson',
    linkedin: 'sarahjohnson',
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    role: 'Associate Professor',
    specialization: 'Cryptanalysis',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000',
    publications: 32,
    email: 'michael.chen@iiitd.ac.in',
    github: 'mchen',
    linkedin: 'michaelchen',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Assistant Professor',
    specialization: 'Post-Quantum Cryptography',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000',
    publications: 28,
    email: 'emily.rodriguez@iiitd.ac.in',
    github: 'erodriguez',
    linkedin: 'emilyrodriguez',
  },
  {
    id: 4,
    name: 'Prof. David Kim',
    role: 'Professor',
    specialization: 'Network Security',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000',
    publications: 52,
    email: 'david.kim@iiitd.ac.in',
    github: 'dkim',
    linkedin: 'davidkim',
  },
];

export default function Members() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Members</h1>
        <p className="text-[rgb(224,204,250)] text-lg">
          Meet our distinguished faculty members and researchers in cryptography.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-[#23262d] rounded-lg overflow-hidden border border-[rgb(136,58,234)] hover:border-[rgb(224,204,250)] transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[rgb(136,58,234)]"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-[rgb(224,204,250)]">{member.role}</p>
                  <p className="text-[rgb(224,204,250)]">{member.specialization}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <BookOpen className="h-5 w-5 mr-2 text-[rgb(136,58,234)]" />
                  <span>{member.publications} Publications</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-white hover:text-[rgb(224,204,250)] transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[rgb(224,204,250)] transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[rgb(224,204,250)] transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[rgba(49,10,101,0.2)] rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-[rgb(224,204,250)] mb-4">
          Interested in joining our research group? We're always looking for passionate researchers and students.
        </p>
        <button className="bg-[rgb(136,58,234)] text-white py-2 px-4 rounded-md hover:bg-[rgb(49,10,101)] transition-colors duration-300">
          View Opportunities
        </button>
      </div>
    </div>
  );
}