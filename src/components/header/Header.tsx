import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
   
    <nav className="border-b border-gray-800 bg-[#161b22]/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between h-16 items-center">
              <Logo />
        <Navigation /> 
               
              </div>
            </div>
          </nav> 
  );
}

