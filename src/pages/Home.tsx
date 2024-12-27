import { useState } from 'react';
import { User } from '../App';
import { ProfileHeader } from '../components/ProfileHeader';
import { RepositoryList } from '../components/RepositoryList';
import { StatsBar } from '../components/StatsBar';
import { FaGithub, FaSearch } from 'react-icons/fa';

interface Repository {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
  language: string;
}

export function Home() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    setError(null);
    setRepos([]);
    setTotalStars(0);

    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const userData = await userResponse.json();
      setUser({
        username: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
        bio: userData.bio,
        location: userData.location,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
      });

      // Fetch repositories (up to 100 most recent)
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (reposResponse.ok) {
        const reposData = await reposResponse.json();
        setRepos(reposData);
        
        // Calculate total stars
        const stars = reposData.reduce((acc: number, repo: Repository) => acc + repo.stargazers_count, 0);
        setTotalStars(stars);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-6 py-4 bg-[#1a1d21]/80 text-gray-300 rounded-lg border border-gray-800 
                     focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
                     placeholder-gray-500 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#21262d]/80 text-gray-300 
                     rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 
                     hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Welcome Message or User Profile */}
      {!user && !error && !isLoading && (
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8">
            <FaGithub className="w-24 h-24 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-lime-400">
            GitHub Profile Viewer
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Enter a GitHub username to view their profile information, including repositories,
            location, and more. Discover developers and their work with our beautiful profile viewer.
          </p>
          <div className="pt-4">
            <div className="inline-block px-6 py-3 bg-[#21262d]/80 text-gray-300 rounded-lg border 
                          border-gray-700 hover:border-cyan-500 hover:text-cyan-400">
              Try searching for a username above!
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-400 bg-red-900/20 px-4 py-3 rounded-lg border border-red-900">
            {error}
          </p>
        </div>
      )}

      {/* User Profile and Repositories */}
      {user && !error && (
        <div className="space-y-8 animate-fadeIn">
          <ProfileHeader user={user} />
          
          {/* Stats Bar */}
          <StatsBar
            publicRepos={user.public_repos}
            totalStars={totalStars}
            followers={user.followers}
            following={user.following}
          />
          
          {/* Repositories */}
          {repos.length > 0 && <RepositoryList repos={repos} />}
        </div>
      )}
    </div>
  );
}

// Add this to your global CSS or styles
const style = document.createElement('style');
style.textContent = `
body{
  background-color: #0d1117;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
