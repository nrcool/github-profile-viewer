import { Link } from "react-router-dom";



export function Navigation() {
  return (
  
      <div className="flex space-x-8">
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    About
                  </Link>
                </div>
 
  );
}