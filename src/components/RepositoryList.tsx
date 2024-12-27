import { Repository } from "../App";
import { FaStar, FaCodeBranch, FaExclamationCircle, FaClock } from 'react-icons/fa';

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

interface RepositoryListProps {
  repos: Repository[];
}

export function RepositoryList({ repos }: RepositoryListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-lime-400">
        Latest Repositories
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 
                     hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-yellow-500/10 to-lime-500/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
              {repo.name}
            </h3>
            
            {repo.description && (
              <p className="text-gray-400 mb-4 line-clamp-2">{repo.description}</p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {repo.language && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                  <span>{repo.language}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{repo.stargazers_count.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaCodeBranch className="text-lime-400" />
                <span>{repo.forks_count.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaExclamationCircle className="text-red-400" />
                <span>{repo.open_issues_count.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-purple-400" />
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      {repos.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p>No repositories found</p>
        </div>
      )}
    </div>
  );
}
