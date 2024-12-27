import { FaBook, FaStar, FaUsers, FaUserFriends } from 'react-icons/fa';

interface StatsBarProps {
  publicRepos: number;
  totalStars: number;
  followers: number;
  following: number;
}

export function StatsBar({ publicRepos, totalStars, followers, following }: StatsBarProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
      {/* Public Repositories */}
      <div className="p-3 sm:p-6 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 
                    hover:border-cyan-500/30 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center">
          <div className="p-1.5 sm:p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-cyan-500/30 mb-2">
            <FaBook className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          </div>
          <span className="text-sm sm:text-base text-gray-400 mb-1">Repositories</span>
          <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                      from-cyan-400 to-cyan-600">
            {publicRepos.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Total Stars */}
      <div className="p-3 sm:p-6 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 
                    hover:border-yellow-500/30 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center">
          <div className="p-1.5 sm:p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-yellow-500/30 mb-2">
            <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          </div>
          <span className="text-sm sm:text-base text-gray-400 mb-1">Total Stars</span>
          <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                      from-yellow-400 to-yellow-600">
            {totalStars.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Followers */}
      <div className="p-3 sm:p-6 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 
                    hover:border-lime-500/30 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center">
          <div className="p-1.5 sm:p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-lime-500/30 mb-2">
            <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
          </div>
          <span className="text-sm sm:text-base text-gray-400 mb-1">Followers</span>
          <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                      from-lime-400 to-lime-600">
            {followers.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Following */}
      <div className="p-3 sm:p-6 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 
                    hover:border-blue-500/30 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center">
          <div className="p-1.5 sm:p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-blue-500/30 mb-2">
            <FaUserFriends className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <span className="text-sm sm:text-base text-gray-400 mb-1">Following</span>
          <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                      from-blue-400 to-blue-600">
            {following.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
