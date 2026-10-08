import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Heart, Grid3X3, Grid2X2, Scissors, ArrowRight, ChevronDown, Check } from 'lucide-react';

export default function Dresses() {
  const [activeTab, setActiveTab] = useState('ALL DRESSES');
  const [gridCols, setGridCols] = useState(4);
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'ALL DRESSES',
    'MAXI DRESSES',
    'MIDI DRESSES',
    'MINI DRESSES',
    'EVENING & GOWN',
    'OCCASION',
    'CASUAL LUXURY',
    'SILK CREATIONS',
  ];

  const firstBatchProducts = [
    {
      id: 1,
      name: 'Aurelia Cowl Silk Slip Maxi',
      price: 'LKR 14,500',
      fabric: '100% Pure Mulberry Silk',
      badge: 'NEW',
      image: '/assets/images/dress_1_1791439144973.jpg',
      colors: ['#e4d5c7', '#111111'],
      category: 'MAXI DRESSES',
    },
    {
      id: 2,
      name: 'Seraphina Pleated Halter Gown',
      price: 'LKR 18,900',
      fabric: 'High Italian Silk Sunny Crepe',
      badge: 'BEST SELLER',
      image: '/assets/images/dress_2_1791439164270.jpg',
      colors: ['#8c1d3f', '#111111'],
      category: 'EVENING & GOWN',
    },
    {
      id: 3,
      name: 'Elysian Belted Linen Silk Midi',
      price: 'LKR 12,900',
      fabric: 'Structured Daytime Sophistication',
      badge: 'NEW',
      image: '/assets/images/dress_3_1791439289948.jpg',
      colors: ['#f8f4ed'],
      category: 'MIDI DRESSES',
    },
    {
      id: 4,
      name: 'Sora One-Shoulder Draped Crepe',
      price: 'LKR 16,500',
      fabric: 'Asymmetrical Atelier Column Cut',
      image: '/assets/images/dress_4_1791439316954.jpg',
      colors: ['#111111', '#8c1d3f'],
      category: 'OCCASION',
    },
    {
      id: 5,
      name: 'Palais Silk Bias Gown',
      price: 'LKR 19,800',
      fabric: 'Heavy Grade 22 Momme Silk',
      image: '/assets/images/dress_5_1791439339770.jpg',
      colors: ['#d5be9b'],
      category: 'SILK CREATIONS',
    },
    {
      id: 6,
      name: 'Vesper Pleat Column Maxi',
      price: 'LKR 18,400',
      fabric: 'High Definition Micro-Pleat',
      image: '/assets/images/dress_6_1791439531074.jpg',
      colors: ['#111111'],
      category: 'EVENING & GOWN',
    },
    {
      id: 7,
      name: 'Rosewood Satin Wrap Dress',
      price: 'LKR 17,000',
      fabric: 'Versatile Evening Midi Wrap',
      image: '/assets/images/dress_7_1791439565602.jpg',
      colors: ['#8c1d3f'],
      category: 'OCCASION',
    },
    {
      id: 8,
      name: 'Atelier Flared Satin Midi',
      price: 'LKR 16,200',
      fabric: 'Sculptural A-Line Silhouetting',
      image: '/assets/images/dress_8_1791439593394.jpg',
      colors: ['#ffffff'],
      category: 'MIDI DRESSES',
    },
  ];

  const secondBatchProducts = [
    {
      id: 9,
      name: 'Celeste Tiered Organza Gown',
      price: 'LKR 23,500',
      fabric: 'Tiered Ruffled Silk Organza',
      badge: 'ATELIER PREVIEW',
      image: '/assets/images/hero_main_1791439126493.jpg',
      colors: ['#e8cfcc'],
      category: 'EVENING & GOWN',
    },
    {
      id: 10,
      name: 'Genevieve Sculpted Corset Midi',
      price: 'LKR 17,400',
      fabric: 'Internal Boned Satin Corset',
      image: '/assets/images/dress_4_1791439316954.jpg',
      colors: ['#111111'],
      category: 'OCCASION',
    },
    {
      id: 11,
      name: 'Lucina Draped Halter Column',
      price: 'LKR 19,600',
      fabric: 'Sculptural Low-Back Silhouette',
      image: '/assets/images/dress_3_1791439289948.jpg',
      colors: ['#f8f4ed'],
      category: 'SILK CREATIONS',
    },
    {
      id: 12,
      name: 'Mireille Asymmetrical Silk Slip',
      price: 'LKR 17,000',
      fabric: 'Diagonal Flounce Hemline',
      image: '/assets/images/dress_7_1791439565602.jpg',
      colors: ['#8c1d3f', '#111111'],
      category: 'MAXI DRESSES',
    },
  ];

  return (
    <div className="bg-[#faf8f5]">
      {/* 1. Page Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 border-b border-[#e8e2d8]">
        <div className="flex items-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-6 space-x-2">
          <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">Dresses</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-2 block">
              Atelier Collection 2026
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-neutral-900 mb-4">Dresses</h1>
            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              From effortless daytime drape silhouettes to statement evening styles. Designed with architectural grace for unyielding confidence in every moment.
            </p>
          </div>

          {/* Complimentary Hemming Callout Box */}
          <div className="bg-white border border-[#e8e2d8] p-5 sm:p-6 flex items-center shadow-sm shrink-0 max-w-sm">
            <div className="w-10 h-10 rounded-full bg-[#faf8f5] text-[#8c1d3f] flex items-center justify-center mr-4 shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-900 mb-1">
                Complimentary Hemming
              </h4>
              <p className="text-xs text-neutral-500 font-light">
                On all floor-length gown selections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="border-b border-[#e8e2d8] bg-white sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-3 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`filter-pill ${activeTab === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Filter Toolbar */}
      <div className="border-b border-[#e8e2d8] bg-[#faf8f5] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4 text-xs">
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center font-bold tracking-[0.18em] uppercase text-neutral-900 hover:text-[#8c1d3f] transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 mr-2" />
              Filter
            </button>

            {/* Quick Filter Selectors */}
            <div className="hidden md:flex items-center space-x-5 text-neutral-600">
              <div className="flex items-center cursor-pointer hover:text-neutral-900">
                <span>Fabric: {selectedFabric}</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center cursor-pointer hover:text-neutral-900">
                <span>Color: {selectedColor}</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500 font-medium">Active: All Silhouettes</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] text-neutral-500 font-medium tracking-wider hidden sm:inline">
              SHOWING 12 OF 56 STYLES
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-neutral-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-0 text-xs font-semibold text-neutral-900 tracking-wider focus:outline-none cursor-pointer"
              >
                <option value="Featured">Featured Creations</option>
                <option value="PriceLow">Price: Low to High</option>
                <option value="PriceHigh">Price: High to Low</option>
                <option value="Newest">Newest Releases</option>
              </select>
            </div>

            {/* Grid Layout Toggles */}
            <div className="hidden sm:flex items-center space-x-1 pl-4 border-l border-neutral-300">
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 rounded ${gridCols === 4 ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-neutral-900'}`}
                aria-label="4 columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 rounded ${gridCols === 2 ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-neutral-900'}`}
                aria-label="2 columns"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Filter Drawer Panel */}
      {showFilters && (
        <div className="bg-white border-b border-[#e8e2d8] p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-3">Fabric</h5>
              <div className="space-y-2 text-xs text-neutral-600">
                {['All', '100% Pure Silk', 'Liquid Satin', 'Silk Crepe', 'Belgian Linen'].map((f) => (
                  <div key={f} onClick={() => setSelectedFabric(f)} className="cursor-pointer hover:text-[#8c1d3f] flex items-center">
                    {selectedFabric === f && <Check className="w-3 h-3 mr-1 text-[#8c1d3f]" />}
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-3">Color</h5>
              <div className="space-y-2 text-xs text-neutral-600">
                {['All', 'Atelier Wine', 'Noir Black', 'Champagne Silk', 'Rosewood', 'Ivory'].map((c) => (
                  <div key={c} onClick={() => setSelectedColor(c)} className="cursor-pointer hover:text-[#8c1d3f] flex items-center">
                    {selectedColor === c && <Check className="w-3 h-3 mr-1 text-[#8c1d3f]" />}
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-3">Size</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {['XS', 'S', 'M', 'L', 'XL', 'Bespoke Fit'].map((sz) => (
                  <span key={sz} className="border border-neutral-300 px-3 py-1 cursor-pointer hover:border-[#8c1d3f] hover:text-[#8c1d3f]">
                    {sz}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-3">Price Range</h5>
              <p className="text-xs text-neutral-500 mb-2">LKR 12,000 — LKR 28,000</p>
              <button onClick={() => setShowFilters(false)} className="btn-atelier-dark py-2 text-[10px] w-full">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. First 8 Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid gap-6 sm:gap-8 ${gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {firstBatchProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-[#ece6de] p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-hover-scale"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badge === 'BEST SELLER' ? 'badge-atelier-bestseller' : 'badge-atelier-new'}`}>
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-[#8c1d3f] hover:text-white transition-colors shadow-sm" aria-label="Save to wishlist">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-white/95 py-2.5 px-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 hover:text-[#8c1d3f]">
                    Quick Add +
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mb-3">{product.fabric}</p>
                <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900 font-serif">{product.price}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 group-hover:text-[#8c1d3f] transition-colors">
                    DISCOVER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Editorial Manifesto Split Banner In-Between */}
      <section className="my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ece6de] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-lg">
          <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 flex flex-col justify-center bg-[#faf8f5] order-2 lg:order-1">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              Editorial Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4 leading-tight">
              The Occasion Edit: <br />
              <span className="italic font-light text-neutral-700">Silk & Architecture</span>
            </h2>
            <blockquote className="font-serif italic text-sm text-neutral-600 border-l-2 border-[#8c1d3f] pl-4 mb-6">
              "Woven like a dress. A dress sculpted for you."
            </blockquote>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              Cut on the bias to move as an extension of the wearer. Each garment is engineered with millimeter precision to honor body contours while commanding visual stillness in any room.
            </p>
            <div>
              <Link to="/clothing" className="btn-atelier-dark">
                EXPLORE ATELIER SILKS <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[500px] overflow-hidden order-1 lg:order-2 group">
            <img
              src="/assets/images/occasion_editorial_1791439791770.jpg"
              alt="Editorial Manifesto Lookbook"
              className="w-full h-full object-cover img-hover-scale"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[9px] uppercase tracking-widest font-medium">
              Lookbook Chapter 04: Silk & Structure
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[9px] uppercase tracking-widest font-medium">
              Autumn / Winter 2026
            </div>
          </div>
        </div>
      </section>

      {/* 6. Second 4 Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid gap-6 sm:gap-8 ${gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {secondBatchProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-[#ece6de] p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-hover-scale"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 badge-atelier-bestseller">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-[#8c1d3f] hover:text-white transition-colors shadow-sm" aria-label="Save to wishlist">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mb-3">{product.fabric}</p>
                <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900 font-serif">{product.price}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 group-hover:text-[#8c1d3f] transition-colors">
                    DISCOVER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Dresses Button */}
        <div className="text-center mt-14 mb-8">
          <p className="text-xs text-neutral-500 mb-3 tracking-wider uppercase">Showing 12 of 56 styles</p>
          <button className="btn-atelier-outline px-10">
            Load More Dresses <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
