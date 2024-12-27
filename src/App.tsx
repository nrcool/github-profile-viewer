import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';

export type User = {
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  repos: any[];
  html_url: string;
  username: string;
};


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d1117] text-gray-300 relative overflow-hidden border border-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-[25%] w-[800px] h-[800px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute -bottom-[25%] -right-[25%] w-[800px] h-[800px] bg-yellow-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-lime-500/20 rounded-full blur-[100px] animate-pulse" />
        </div>
        <div className="relative">
          <nav className="border-b border-gray-800 bg-[#161b22]/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <Link to="/" className="text-blue-400 text-xl font-bold">
                    GitHub Profile Viewer
                  </Link>
                </div>
                <div className="flex space-x-8">
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
