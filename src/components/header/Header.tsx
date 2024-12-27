import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-dark border border-white-700 mx-2 sm:m-3">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}