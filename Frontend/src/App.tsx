import  { useState } from 'react';
import Navbar from './assets/Components/NavBar';
import Home from './pages/home';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white"> 
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      {/* Using 'main' is better for SEO/Accessibility. 
          The 'hidden' class will perfectly stop the Home cards 
          from overflowing while the menu is open.
      */}
      <main className={isMobileMenuOpen ? 'hidden' : 'block'}>
        <Home />
      </main>
    </div>
  );
}