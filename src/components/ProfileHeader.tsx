import { FaUser, FaMapMarkerAlt, FaCircle } from 'react-icons/fa';
import { User } from "../App";

interface UserProps {
  user: User
}

export function ProfileHeader({
  user
}: UserProps) {
  return (
    <div className="p-4 md:p-8 bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg border border-gray-800 relative overflow-hidden group 
                    transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-500/30 hover:via-blue-500/20 hover:to-lime-500/30">
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-lime-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
      
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
        {/* Profile Image with Glow */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-yellow-500 to-lime-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-gray-700 group-hover:ring-cyan-500/50 transition-all duration-300">
            <img src={user?.avatar_url} alt={user?.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0">
            <div className="space-y-4 w-full text-center md:text-left">
              {/* Name */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-cyan-500/30 transition-all duration-300">
                  <FaUser className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-yellow-400 group-hover:to-lime-400 transition-all duration-300">
                  {user?.name}
                </h1>
              </div>

              {/* Username */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-yellow-500/30 transition-all duration-300">
                  <span className="text-lg md:text-xl text-yellow-400">@</span>
                </div>
                <p className="text-lg md:text-xl text-gray-400 group-hover:text-yellow-100">{user?.username}</p>
              </div>

              {/* Location */}
              {user?.location && (
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                  <div className="p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-lime-500/30 transition-all duration-300">
                    <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-lime-400 group-hover:text-lime-300" />
                  </div>
                  <p className="text-lg md:text-xl text-gray-400 group-hover:text-lime-100">{user?.location}</p>
                </div>
              )}

              {/* Status */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="p-2 bg-[#21262d]/60 rounded-lg border border-gray-700 group-hover:border-cyan-500/30 transition-all duration-300">
                  <FaCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </div>
                <p className="text-lg md:text-xl text-gray-400 group-hover:text-cyan-100">Available for hire</p>
              </div>
            </div>

            <a 
              href={user?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-[#21262d]/80 text-gray-300 rounded-lg border border-gray-700 
                       group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-lime-500 
                       group-hover:border-transparent group-hover:text-white text-center
                       group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 backdrop-blur-sm"
            >
              Visit GitHub Profile
            </a>
          </div>

          {/* Bio if available */}
          {user?.bio && (
            <div className="mt-4 md:mt-6 text-gray-400 max-w-2xl text-center md:text-left group-hover:text-yellow-100/90">
              {user.bio}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
