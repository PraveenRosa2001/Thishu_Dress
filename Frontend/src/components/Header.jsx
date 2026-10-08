import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'New In', path: '/dresses' },
    { label: 'Dresses', path: '/dresses' },
    { label: 'Clothing', path: '/clothing' },
    { label: 'Occasions', path: '/dresses' },
    { label: 'Collections', path: '/clothing' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      {/* Top Banner - Subtle & Luxury Black with Letter-spacing */}
      <div className="bg-black text-white text-[10px] md:text-[11px] py-2 px-4 text-center font-medium tracking-[0.22em] uppercase transition-all duration-300 border-b border-neutral-800">
        COMPLIMENTARY DELIVERY ON QUALIFYING ORDERS — EASY RETURNS — 100% SECURE PAYMENTS
      </div>

      {/* Main Header with Glassmorphism & Fixed Heights */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2 shadow-sm' : 'bg-white py-3 border-b border-[#e8e2d8]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Mobile Menu Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="text-neutral-900 hover:text-[#8c1d3f] transition-colors p-2 -ml-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
              <Link to="/" className="flex items-center group">
                <img
                  src="/assets/logo/Logo_Dekstop_Bgremove.png"
                  alt="Thishu Dress - Designed for Confidence"
                  className="header-logo-desktop hidden sm:block h-10 w-auto object-contain transition-transform duration-300 group-hover:opacity-90"
                  style={{ maxHeight: '42px', width: 'auto' }}
                />
                <img
                  src="/assets/logo/Logo_Mobile_Bgremove.png"
                  alt="Thishu Dress"
                  className="header-logo-mobile block sm:hidden h-8 w-auto object-contain transition-transform duration-300 group-hover:opacity-90"
                  style={{ maxHeight: '34px', width: 'auto' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.label} 
                    to={item.path} 
                    className={`text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 relative py-1 ${
                      isActive ? 'text-[#8c1d3f]' : 'text-neutral-800 hover:text-[#8c1d3f]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8c1d3f] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Icons: Search, User, Wishlist, Bag, Currency */}
            <div className="flex items-center space-x-4 sm:space-x-5 lg:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-neutral-800 hover:text-[#8c1d3f] transition-colors p-1"
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <Link to="/about" className="text-neutral-800 hover:text-[#8c1d3f] transition-colors p-1 hidden sm:block" aria-label="Account">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </Link>

              <Link to="/dresses" className="text-neutral-800 hover:text-[#8c1d3f] transition-colors p-1 relative" aria-label="Wishlist">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </Link>

              <Link to="/dresses" className="text-neutral-800 hover:text-[#8c1d3f] transition-colors p-1 relative" aria-label="Shopping Bag">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-[#8c1d3f] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </Link>

              {/* Currency Selector */}
              <div className="hidden xl:flex items-center pl-2 border-l border-neutral-300 text-[11px] font-semibold tracking-wider text-neutral-700 cursor-pointer hover:text-[#8c1d3f]">
                <span>🇱🇰 LKR</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search Slide Down */}
        {isSearchOpen && (
          <div className="border-t border-[#e8e2d8] bg-white py-4 px-4 sm:px-8 transition-all animate-fade-in-up">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search gowns, silk dresses, co-ords, new arrivals..." 
                className="w-full text-sm font-sans tracking-wide py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#8c1d3f]"
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-neutral-400 hover:text-neutral-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        <div className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-400 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="px-6 py-5 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
            <img
              src="/assets/logo/Logo_Dekstop_Bgremove.png"
              alt="Thishu Dress"
              className="h-7 w-auto object-contain"
              style={{ maxHeight: '30px', width: 'auto' }}
            />
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-neutral-400 hover:text-neutral-900 p-2 rounded-full"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-8 py-8 flex-1 overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-serif tracking-wider text-neutral-900 hover:text-[#8c1d3f] transition-colors border-b border-neutral-100 pb-3"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-3">Currency</p>
              <div className="flex gap-3 text-xs font-semibold">
                <span className="px-3 py-1.5 bg-[#8c1d3f] text-white rounded">LKR (Rs)</span>
                <span className="px-3 py-1.5 bg-neutral-100 text-neutral-800 rounded">USD ($)</span>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-neutral-100 bg-neutral-50 text-center">
            <p className="text-xs text-neutral-500 font-serif italic mb-1">"Designed for Confidence"</p>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400">Colombo Atelier</p>
          </div>
        </div>
      </div>
    </>
  );
}
