import { Link } from 'react-router-dom';
import { ArrowRight, Globe, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Atelier Newsletter Banner */}
        <div className="border-b border-neutral-800 pb-14 mb-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c5a880] mb-2 block">
              Atelier Correspondence
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-3">
              Join The Thishu Atelier
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Exclusive previews, private trunk shows, and bespoke curation delivered weekly.
            </p>
          </div>
          <form className="flex w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white text-neutral-900 px-5 py-4 w-full sm:w-80 text-xs font-semibold tracking-wider placeholder-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#8c1d3f] hover:bg-[#6e1330] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li><Link to="/dresses" className="hover:text-white transition-colors">New In</Link></li>
              <li><Link to="/dresses" className="hover:text-white transition-colors">Dresses</Link></li>
              <li><Link to="/clothing" className="hover:text-white transition-colors">Sets & Separates</Link></li>
              <li><Link to="/dresses" className="hover:text-white transition-colors">Occasions</Link></li>
              <li><Link to="/dresses" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/clothing" className="hover:text-white transition-colors">Archive Sale</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Contact Concierge</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Complimentary Delivery</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Bespoke Size Guide</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white mb-6">
              About
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Atelier Journal</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Sustainability & Ethics</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect & Currency */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400 font-light mb-6">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
            </ul>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-neutral-400 block mb-2">Region & Currency</span>
              <div className="flex items-center text-xs text-neutral-300 font-medium">
                <Globe className="w-3.5 h-3.5 mr-1.5 text-[#c5a880]" />
                <span>🇱🇰 LKR / USD ($)</span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-2 flex items-center">
                <PhoneCall className="w-3 h-3 mr-1.5 text-neutral-400" />
                Concierge: +94 11 234 5678
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-neutral-500 font-medium tracking-wider gap-4">
          <p>© 2026 THISHU DRESS — DESIGNED FOR CONFIDENCE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 uppercase tracking-widest text-[10px] text-neutral-400">
            <span className="border border-neutral-800 px-2.5 py-1 rounded">VISA</span>
            <span className="border border-neutral-800 px-2.5 py-1 rounded">MASTERCARD</span>
            <span className="border border-neutral-800 px-2.5 py-1 rounded">AMEX</span>
            <span className="border border-neutral-800 px-2.5 py-1 rounded">APPLE PAY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
