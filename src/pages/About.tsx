import { FaGithub, FaSearch, FaCode, FaUserFriends } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FaGithub className="text-6xl mx-auto mb-4 text-blue-400" />
          <h1 className="text-4xl font-bold mb-4 text-gray-100">About GitHub Profile Viewer</h1>
          <p className="text-xl text-gray-400">Explore GitHub profiles with style</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-[#1a1d21] p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
            <FaSearch className="text-3xl mb-4 text-green-400" />
            <h2 className="text-xl font-semibold mb-3 text-gray-100">Easy Search</h2>
            <p className="text-gray-400">
              Simply enter a GitHub username to instantly view detailed profile information and repositories.
            </p>
          </div>

          <div className="bg-[#1a1d21] p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
            <FaCode className="text-3xl mb-4 text-purple-400" />
            <h2 className="text-xl font-semibold mb-3 text-gray-100">Repository Insights</h2>
            <p className="text-gray-400">
              View repositories with detailed information including stars, forks, and issues.
            </p>
          </div>
        </div>

        <div className="bg-[#1a1d21] p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">How to Use</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-200 mb-1">Search for a User</h3>
                <p className="text-gray-400">Enter any GitHub username in the search bar on the home page</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-200 mb-1">View Profile</h3>
                <p className="text-gray-400">See detailed user information including profile picture, bio, and stats</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-200 mb-1">Explore Repositories</h3>
                <p className="text-gray-400">Browse through the user's repositories with detailed statistics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <FaUserFriends className="text-4xl mx-auto mb-4 text-yellow-400" />
          <p className="text-gray-400">
            Start exploring GitHub profiles now by heading to the{' '}
            <a href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
              Home page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
