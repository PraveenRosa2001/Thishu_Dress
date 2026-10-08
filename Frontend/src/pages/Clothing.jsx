import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, Heart, MessageCircle, Calendar, Sparkles } from 'lucide-react';

export default function Clothing() {
  const [activeCategory, setActiveCategory] = useState('ALL PIECES');
  const [activeLook, setActiveLook] = useState(1);

  const filterTabs = [
    'ALL PIECES',
    'TOPS (12)',
    'CLOTHING SETS (10)',
    'BOTTOMS (14)',
    'BLAZERS & OUTERWEAR (8)',
  ];

  const mainProducts = [
    {
      id: 1,
      name: 'Asteria Sculpted Silk Blouse',
      price: 'LKR 9,800',
      fabric: 'Pure Mulberry Silk • Fluid Cowl Drape',
      badge: 'NEW ARRIVAL',
      image: '/assets/images/clothing_top_1791439809854.jpg',
      colors: ['#e9d5d5', '#111111'],
    },
    {
      id: 2,
      name: 'Isolda Tailored Wide-Leg Trouser',
      price: 'LKR 11,200',
      fabric: 'Italian Crepe Blend • High Rise Pleat',
      image: '/assets/images/clothing_set_1791439838353.jpg',
      colors: ['#d1d5db', '#111111'],
    },
    {
      id: 3,
      name: 'Atelier Linen Three-Piece Suit',
      price: 'LKR 24,500',
      fabric: '100% Belgian Flax • Relaxed Tailoring',
      badge: 'THE SUIT',
      image: '/assets/images/dress_3_1791439289948.jpg',
      colors: ['#f8f4ed'],
    },
    {
      id: 4,
      name: 'Helena Asymmetric Draped Camisole',
      price: 'LKR 7,500',
      fabric: 'Liquid Silk Charmeuse • Asymmetric Bias',
      image: '/assets/images/dress_7_1791439565602.jpg',
      colors: ['#8c1d3f', '#111111'],
    },
    {
      id: 5,
      name: 'Lucia Pleated High-Waist Skirt',
      price: 'LKR 12,800',
      fabric: 'Heavy Georgette • Form-sculpting Pleat',
      image: '/assets/images/dress_6_1791439531074.jpg',
      colors: ['#111111', '#8c1d3f'],
    },
    {
      id: 6,
      name: 'Serenata Relaxed Silk Trench',
      price: 'LKR 28,000',
      fabric: 'Silk Wool Blend • Storm Flap Architecture',
      badge: 'LIMITED RUN',
      image: '/assets/images/dress_5_1791439339770.jpg',
      colors: ['#d1c3b7'],
    },
    {
      id: 7,
      name: 'Camille Draped Halter Top',
      price: 'LKR 8,900',
      fabric: 'Heavy Silk Satin • Extended Cascading Tie',
      image: '/assets/images/dress_8_1791439593394.jpg',
      colors: ['#ffffff'],
    },
    {
      id: 8,
      name: 'The Perfect Pale Monochrome Linen Set',
      price: 'LKR 18,000',
      fabric: 'Structured Halter Top & Pleated Short Suit',
      badge: 'BEST SELLER',
      image: '/assets/images/dress_1_1791439144973.jpg',
      colors: ['#f5ede1', '#111111'],
    },
  ];

  const architecturalSeparates = [
    {
      name: 'Monochrome Satin Wrap Blouse',
      price: 'LKR 9,400',
      fabric: 'Champagne Silk Luster • Adjustable Sash',
      image: '/assets/images/clothing_top_1791439809854.jpg',
    },
    {
      name: 'Palazzo Crepe Trousers',
      price: 'LKR 11,800',
      fabric: 'Double Crepe • Concealed Closure',
      image: '/assets/images/clothing_set_1791439838353.jpg',
    },
    {
      name: 'Classic Double-Breasted Blazer',
      price: 'LKR 17,500',
      fabric: 'Structured Tropical Wool • Silk Lining',
      badge: 'ICON PIECE',
      image: '/assets/images/dress_4_1791439316954.jpg',
    },
    {
      name: 'Serena Bias Midi Skirt',
      price: 'LKR 10,500',
      fabric: 'Pure Silk Satin • Elasticated Interior Band',
      image: '/assets/images/dress_8_1791439593394.jpg',
    },
  ];

  return (
    <div className="bg-[#faf8f5]">
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 border-b border-[#e8e2d8]">
        <div className="flex items-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-6 space-x-2">
          <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">Clothing</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-2 block">
              Atelier Ready-To-Wear
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-neutral-900 mb-3">The Clothing Collection</h1>
          </div>
          <p className="text-neutral-600 text-sm max-w-md font-light leading-relaxed">
            Contemporary silhouettes, impeccable tailored separates, and effortless everyday luxury designed for timeless coordination and quiet confidence.
          </p>
        </div>

        {/* 4 Featured Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: 'COLLECTION CAPSULE', title: 'TOPS & BLOUSES', desc: 'Sculptured blouses for everyday poise', img: '/assets/images/clothing_top_1791439809854.jpg' },
            { tag: 'COORDINATING EDITS', title: 'SETS & SEPARATES', desc: 'Tailored coordinates & linen ensembles', img: '/assets/images/clothing_set_1791439838353.jpg' },
            { tag: 'MODERN TAILORING', title: 'TROUSERS & SKIRTS', desc: 'Fluid movement, eternal clean lines', img: '/assets/images/dress_3_1791439289948.jpg' },
            { tag: 'ARCHITECTURAL LAYERS', title: 'OUTERWEAR & CAPES', desc: 'Architectural blazers & flowing trench capes', img: '/assets/images/dress_4_1791439316954.jpg' },
          ].map((cat, i) => (
            <div key={i} className="group relative h-56 sm:h-64 overflow-hidden rounded shadow-sm bg-neutral-900 cursor-pointer">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover img-hover-scale opacity-80 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-300 block mb-1 font-semibold">{cat.tag}</span>
                <h3 className="font-serif text-lg sm:text-xl font-medium mb-1">{cat.title}</h3>
                <p className="text-[11px] text-neutral-300 font-light line-clamp-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Filter Toolbar */}
      <div className="border-b border-[#e8e2d8] bg-white sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex space-x-2 overflow-x-auto scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`filter-pill ${activeCategory === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="text-neutral-500 hidden md:inline">SHOWING 24 SIGNATURE STYLES</span>
            <span className="text-neutral-300 hidden md:inline">|</span>
            <button className="flex items-center font-bold tracking-wider uppercase text-neutral-800 hover:text-[#8c1d3f]">
              <SlidersHorizontal className="w-3.5 h-3.5 mr-1.5" />
              SORT BY: EDITORIAL FEATURES
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mainProducts.map((p) => (
            <div key={p.id} className="group flex flex-col bg-white border border-[#ece6de] p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover img-hover-scale" />
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badge === 'BEST SELLER' || p.badge === 'THE SUIT' ? 'badge-atelier-bestseller' : 'badge-atelier-new'}`}>
                    {p.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-[#8c1d3f] hover:text-white transition-colors" aria-label="Save">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-white/95 py-2.5 px-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 hover:text-[#8c1d3f]">
                    QUICK ADD +
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mb-3">{p.fabric}</p>
                <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900 font-serif">{p.price}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 group-hover:text-[#8c1d3f]">
                    QUICK VIEW →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Editorial Capsule Highlight: THE ART OF THE CO-ORD */}
      <section className="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ece6de] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-lg">
          <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[520px] overflow-hidden group">
            <img
              src="/assets/images/clothing_set_1791439838353.jpg"
              alt="The Art of The Co-Ord"
              className="w-full h-full object-cover img-hover-scale"
            />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 flex flex-col justify-center bg-[#faf8f5]">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              Capsule Highlight
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4 leading-tight">
              The Art of The Co-Ord: <br />
              <span className="italic font-light text-neutral-700">Effortless Coordination</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Designed for modularity. Each garment transitions seamlessly from daytime meeting rooms to private evening galas with architect-like precision and quiet self-assurance.
            </p>

            {/* Interactive Look Pickers */}
            <div className="space-y-3 mb-8">
              <div
                onClick={() => setActiveLook(1)}
                className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                  activeLook === 1 ? 'border-[#8c1d3f] bg-white shadow-sm' : 'border-neutral-200 bg-neutral-50/70'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-0.5">
                    Look 01: Day Formal
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    Structured ivory vest paired with fluid palazzo pant
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeLook === 1 ? 'text-[#8c1d3f]' : 'text-neutral-400'}`} />
              </div>

              <div
                onClick={() => setActiveLook(2)}
                className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                  activeLook === 2 ? 'border-[#8c1d3f] bg-white shadow-sm' : 'border-neutral-200 bg-neutral-50/70'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-0.5">
                    Look 02: Intimate Soirée
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    Gem-toned crêpe trouser matched with cowl neckline
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeLook === 2 ? 'text-[#8c1d3f]' : 'text-neutral-400'}`} />
              </div>
            </div>

            <div>
              <Link to="/dresses" className="btn-atelier-dark">
                SHOP THE CAPSULE LOOK <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Architectural Separates Sub-Collection */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-[#e8e2d8] pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-1 block">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">Architectural Separates</h2>
          </div>
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest hidden sm:inline">
            4 Signature Pieces
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {architecturalSeparates.map((item, idx) => (
            <div key={idx} className="group flex flex-col bg-white border border-[#ece6de] p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover img-hover-scale" />
                {item.badge && <span className="absolute top-3 left-3 badge-atelier-new">{item.badge}</span>}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-[#8c1d3f] hover:text-white transition-colors" aria-label="Save">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                {item.name}
              </h3>
              <p className="text-xs text-neutral-500 font-light mb-3">{item.fabric}</p>
              <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900 font-serif">{item.price}</span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 group-hover:text-[#8c1d3f]">
                  DISCOVER →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
          <span className="w-8 h-8 bg-neutral-900 text-white rounded flex items-center justify-center text-xs font-bold">1</span>
          <span className="w-8 h-8 border border-neutral-300 text-neutral-700 rounded flex items-center justify-center text-xs font-medium cursor-pointer hover:border-neutral-900">2</span>
          <span className="w-8 h-8 border border-neutral-300 text-neutral-700 rounded flex items-center justify-center text-xs font-medium cursor-pointer hover:border-neutral-900">3</span>
          <span className="text-neutral-400 px-1">...</span>
          <span className="w-8 h-8 border border-neutral-300 text-neutral-700 rounded flex items-center justify-center text-xs font-medium cursor-pointer hover:border-neutral-900">7</span>
        </div>
      </section>

      {/* 6. Concierge Styling Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#f5efe6] border border-[#e2d8cb] p-8 sm:p-12 lg:p-16 rounded shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-2" /> Private Atelier Concierge
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 mb-4">
              Need advice on proportions or fabric pairings?
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl mb-6">
              Speak directly with a Thishu personal fashion stylist. We provide tailored shape recommendations, bespoke sizing consultations, and curated capsule curation for special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-atelier-dark">
                <Calendar className="w-3.5 h-3.5 mr-2" /> SCHEDULE STYLING CONSULTATION
              </button>
              <a
                href="https://wa.me/94112345678"
                target="_blank"
                rel="noreferrer"
                className="btn-atelier-outline bg-white hover:bg-neutral-900 hover:text-white"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2 text-[#8c1d3f]" /> CHAT ON WHATSAPP CONCIERGE
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 border border-[#e8e2d8] rounded text-center shadow-sm">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#8c1d3f]">
              <img src="/assets/images/dress_1_1791439144973.jpg" alt="Stylist Lead" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-serif text-base text-neutral-900 mb-1">Thishu Atelier Team</h4>
            <p className="text-[10px] uppercase tracking-widest text-[#8c1d3f] font-bold mb-3">Certified Personal Stylists</p>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Available Monday through Saturday 9:00 AM — 7:00 PM Sri Lanka Standard Time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
