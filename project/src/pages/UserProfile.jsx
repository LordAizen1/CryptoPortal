import React from 'react';

export default function UserProfile() {
  const user = {
    name: 'John Doe',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+', // Replace with a real user avatar URL
    stats: {
      downloads: 120,
      projects: 8,
      followers: 240,
    },
  };

  return (
    <div className="min-h-screen bg-[#13151a] text-white flex items-center justify-center">
      <div className="bg-[#23262d] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center">
          {/* User Image */}
          <div className="w-36 h-36">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-full h-full rounded-full border-4 border-[rgb(136,58,234)] object-cover"
            />
          </div>

          {/* User Stats */}
          <div className="ml-8 flex-1">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <h2 className="text-xl font-semibold gradient-text">Downloads</h2>
                <p className="text-lg">{user.stats.downloads}</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold gradient-text">Projects</h2>
                <p className="text-lg">{user.stats.projects}</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold gradient-text">Followers</h2>
                <p className="text-lg">{user.stats.followers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
