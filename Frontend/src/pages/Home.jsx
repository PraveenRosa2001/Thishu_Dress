import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Shield, RefreshCw, Gift, Sparkles, X } from 'lucide-react';

export default function Home() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const newArrivals = [
    {
      id: 1,
      name: 'Aurelia Cowl Silk Slip Maxi',
      price: 'LKR 14,500',
      material: '100% Pure Mulberry Silk',
      badge: 'NEW',
      image: '/assets/images/dress_1_1791439144973.jpg',
      colors: ['#e4d5c7', '#111111'],
      category: 'Maxi Gowns',
    },
    {
      id: 2,
      name: 'Seraphina Pleated Halter Gown',
      price: 'LKR 18,900',
      material: 'High Italian Silk Sunny Crepe',
      badge: 'BEST SELLER',
      image: '/assets/images/dress_2_1791439164270.jpg',
      colors: ['#8c1d3f', '#111111'],
      category: 'Evening & Gown',
    },
    {
      id: 3,
      name: 'Elysian Belted Linen Silk Midi',
      price: 'LKR 12,900',
      material: 'Structured Daytime Sophistication',
      badge: 'NEW',
      image: '/assets/images/dress_3_1791439289948.jpg',
      colors: ['#faf5ed'],
      category: 'Midi Dresses',
    },
    {
      id: 4,
      name: 'Sora One-Shoulder Draped Crepe',
      price: 'LKR 16,500',
      material: 'Asymmetrical Atelier Column Cut',
      image: '/assets/images/dress_4_1791439316954.jpg',
      colors: ['#111111', '#8c1d3f'],
      category: 'Occasion',
    },
  ];

  const mostLoved = [
    {
      id: 5,
      name: 'Valerie Bias Slip Gown',
      price: 'LKR 16,500',
      material: 'Heavy Grade 22 Momme Silk',
      image: '/assets/images/dress_5_1791439339770.jpg',
    },
    {
      id: 6,
      name: 'Reign of Noir Column Maxi',
      price: 'LKR 19,800',
      material: 'Sculpted Crepe Micro-Pleat',
      image: '/assets/images/dress_6_1791439531074.jpg',
    },
    {
      id: 7,
      name: 'Rosewood Satin Wrap Dress',
      price: 'LKR 17,000',
      material: 'Versatile Evening Midi Wrap',
      image: '/assets/images/dress_7_1791439565602.jpg',
    },
    {
      id: 8,
      name: 'Atelier Flared Satin Midi',
      price: 'LKR 16,200',
      material: 'Sculptural A-Line Silhouetting',
      image: '/assets/images/dress_8_1791439593394.jpg',
    },
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % newArrivals.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + newArrivals.length) % newArrivals.length);
  };

  return (
    <div className="bg-[#faf8f5]">
      {/* 1. HERO SECTION - Exact Composition */}
      <section className="relative min-h-[85vh] lg:h-[92vh] flex items-center overflow-hidden bg-[#f4eee6]">
        {/* Background Image / Split Layout */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_main_1791439126493.jpg"
            alt="The Atelier Collection 2026"
            className="w-full h-full object-cover object-center lg:object-[center_top] brightness-[0.98]"
          />
          {/* Subtle gradient wash to ensure crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/90 via-[#faf8f5]/55 to-transparent sm:w-3/5 lg:w-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#8c1d3f] mb-4 block flex items-center">
              <span className="w-8 h-[1px] bg-[#8c1d3f] mr-3"></span>
              The Atelier Collection 2026
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-serif text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Dresses for a <br className="hidden sm:inline" />
              <span className="italic font-light text-neutral-800">more confident you.</span>
            </h1>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-light">
              Contemporary designs, impeccably tailored for women who command the room without saying a word. Handcrafted in Sri Lanka with imported silks & organzas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dresses" className="btn-atelier-primary shadow-lg hover:shadow-xl">
                Shop The Collection <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/about" className="btn-atelier-outline bg-white/70 backdrop-blur-sm hover:bg-neutral-900 hover:text-white">
                Our Atelier Story
              </Link>
            </div>
          </div>
        </div>

        {/* Small artistic quote in corner */}
        <div className="absolute bottom-6 right-8 hidden lg:block z-10">
          <p className="text-[12px] font-serif italic text-neutral-700 drop-shadow-sm">
            "Where there is dress, there is confidence."
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 mb-4 block">
          Philosophy of Thishu
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 leading-snug mb-6">
          Designed to make every moment <br className="hidden sm:inline" />
          <span className="italic text-neutral-600 font-normal">feel extraordinary.</span>
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base font-light mb-8">
          Contemporary silhouettes, elevated comfort, and effortless elegance. Celebrate yourself and move through the world with strength and grace. It's Thishu.
        </p>
        <Link to="/about" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 hover:text-[#8c1d3f] transition-colors group">
          <span>Read Our Story</span>
          <span className="w-8 h-[1px] bg-neutral-900 ml-3 group-hover:bg-[#8c1d3f] group-hover:w-12 transition-all duration-300"></span>
        </Link>
      </section>

      {/* 3. EXPLORE BY SILHOUETTE (4 Cards) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-[#e8e2d8] pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-1 block">
              The Signature Silhouettes
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900">Explore By Silhouette</h2>
          </div>
          <Link to="/dresses" className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-600 hover:text-[#8c1d3f] flex items-center transition-colors">
            Explore All Collections <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: 'Fluid Drapery', title: 'Maxi Dresses', image: '/assets/images/dress_1_1791439144973.jpg', link: '/dresses' },
            { tag: 'Elegant Separates', title: 'Sets & Co-Ords', image: '/assets/images/clothing_top_1791439809854.jpg', link: '/clothing' },
            { tag: 'Tailored Chic', title: 'Suits & Jackets', image: '/assets/images/clothing_set_1791439838353.jpg', link: '/clothing' },
            { tag: 'Evening Majesty', title: 'Occasion Wear', image: '/assets/images/dress_5_1791439339770.jpg', link: '/dresses' },
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group relative h-[420px] overflow-hidden bg-neutral-200 block shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover img-hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 block mb-1 font-medium">{item.tag}</span>
                  <h3 className="font-serif text-xl sm:text-2xl">{item.title}</h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-[#8c1d3f] group-hover:border-[#8c1d3f] transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. NEW ARRIVALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-[#e8e2d8] pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-1 block">
              Atelier Releases
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 mb-1">New Arrivals</h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-light">Season-defining silhouettes fresh from our Colombo atelier.</p>
          </div>
          <div className="flex space-x-2">
            <button onClick={prevCarousel} className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-[#8c1d3f] hover:border-[#8c1d3f] hover:text-white transition-colors" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextCarousel} className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-[#8c1d3f] hover:border-[#8c1d3f] hover:text-white transition-colors" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product) => (
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
                  <Link to="/dresses" className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 hover:text-[#8c1d3f]">
                    Quick View +
                  </Link>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 mb-1">{product.category}</span>
                <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mb-3">{product.material}</p>
                
                <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900 font-serif">{product.price}</span>
                  {product.colors && (
                    <div className="flex space-x-1.5">
                      {product.colors.map((c, i) => (
                        <span key={i} className="w-3 h-3 rounded-full border border-neutral-300 inline-block" style={{ backgroundColor: c }}></span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE OCCASION EDIT - Editorial Feature Banner */}
      <section className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ece6de] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-lg">
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[550px] overflow-hidden group">
            <img
              src="/assets/images/occasion_editorial_1791439791770.jpg"
              alt="The Occasion Edit"
              className="w-full h-full object-cover img-hover-scale"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 flex flex-col justify-center relative bg-[#faf8f5]">
            {/* Monogram Watermark */}
            <div className="monogram-watermark absolute right-4 bottom-0 text-[180px] lg:text-[240px]">
              T
            </div>
            
            <div className="relative z-10">
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
              <Link to="/dresses" className="btn-atelier-primary">
                Explore Atelier Silks <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOST LOVED SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-[#e8e2d8] pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-1 block">
              Timeless Classics
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900">Most Loved</h2>
          </div>
          <Link to="/dresses" className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-600 hover:text-[#8c1d3f] flex items-center transition-colors">
            View All <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mostLoved.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-[#ece6de] p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-hover-scale"
                />
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-[#8c1d3f] hover:text-white transition-colors" aria-label="Save to wishlist">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-neutral-900 mb-1 group-hover:text-[#8c1d3f] transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-neutral-500 font-light mb-3">{product.material}</p>
              <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900 font-serif">{product.price}</span>
                <Link to="/dresses" className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 hover:text-[#8c1d3f]">
                  Discover
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DARK FULL-WIDTH STATEMENT BANNER */}
      <section className="relative min-h-[500px] lg:h-[600px] flex items-center justify-center text-center overflow-hidden my-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/dress_6_1791439531074.jpg"
            alt="Statement Silhouettes"
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-3xl px-4 sm:px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-4 block">
            Collection 2026
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Statement silhouettes made for <br />
            <span className="italic font-light">nights worth remembering.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-8">
            Effortless drapes, striking tailoring, and flowing luxuries formed to command your evening spotlight with quiet power.
          </p>
          <Link to="/dresses" className="btn-atelier-primary bg-[#8c1d3f] hover:bg-[#6e1330] shadow-xl">
            Shop Evening Wear
          </Link>
        </div>
      </section>

      {/* 8. SHOP THE LOOK (Interactive Pin Hotspots) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-2 block">
            Style Inspiration
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-2">Shop The Look</h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-light">
            Click on the interactive markers to explore the curated runway ensemble.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded overflow-hidden shadow-xl border border-[#e8e2d8]">
          <img
            src="/assets/images/shop_the_look.jpg"
            alt="Shop The Look - Paris Salon"
            className="w-full h-auto object-cover"
          />

          {/* Hotspot 1: Dress */}
          <div
            className="hotspot-pin"
            style={{ top: '42%', left: '52%' }}
            onClick={() => setActiveHotspot(activeHotspot === 1 ? null : 1)}
          >
            <div className="hotspot-pin-inner">+</div>
          </div>

          {activeHotspot === 1 && (
            <div className="absolute top-[48%] left-[45%] z-30 bg-white p-4 rounded shadow-2xl border border-neutral-200 max-w-xs animate-fade-in-up">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[9px] uppercase tracking-widest text-[#8c1d3f] font-bold">Featured Dress</span>
                <button onClick={() => setActiveHotspot(null)} className="text-neutral-400 hover:text-neutral-800">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h4 className="font-serif text-sm font-medium text-neutral-900">Aurelia Draped Midi Gown</h4>
              <p className="text-xs text-neutral-500 mb-2">Dusty Rose • 100% Liquid Silk</p>
              <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                <span className="text-xs font-bold text-neutral-900 font-serif">LKR 15,200</span>
                <Link to="/dresses" className="text-[10px] font-bold uppercase tracking-wider text-[#8c1d3f] hover:underline">
                  View Dress →
                </Link>
              </div>
            </div>
          )}

          {/* Hotspot 2: Clutch */}
          <div
            className="hotspot-pin"
            style={{ top: '65%', left: '46%' }}
            onClick={() => setActiveHotspot(activeHotspot === 2 ? null : 2)}
          >
            <div className="hotspot-pin-inner">+</div>
          </div>

          {activeHotspot === 2 && (
            <div className="absolute top-[68%] left-[40%] z-30 bg-white p-4 rounded shadow-2xl border border-neutral-200 max-w-xs animate-fade-in-up">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[9px] uppercase tracking-widest text-[#8c1d3f] font-bold">Accessory</span>
                <button onClick={() => setActiveHotspot(null)} className="text-neutral-400 hover:text-neutral-800">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h4 className="font-serif text-sm font-medium text-neutral-900">Atelier Metallic Mesh Minaudière</h4>
              <p className="text-xs text-neutral-500 mb-2">Fine Silver Mesh • Handcrafted Clasp</p>
              <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                <span className="text-xs font-bold text-neutral-900 font-serif">LKR 6,500</span>
                <Link to="/clothing" className="text-[10px] font-bold uppercase tracking-wider text-[#8c1d3f] hover:underline">
                  View Item →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. 4 TRUST & VALUE PILLARS */}
      <section className="border-y border-[#e8e2d8] py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f5] text-[#8c1d3f] mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-900 mb-2">
                Bespoke Fit Guarantee
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Every dress pattern is shape-tested on living forms to ensure flawless comfort and confidence.
              </p>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f5] text-[#8c1d3f] mx-auto mb-4 flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-900 mb-2">
                Atelier Gift Box Packaging
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Delivered in our signature heavy tissue-embossed rigid box wrapped in custom blush ribbons.
              </p>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f5] text-[#8c1d3f] mx-auto mb-4 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-900 mb-2">
                Complimentary Exchanges
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Enjoy 15-day seamless size swaps with courier assistance throughout Sri Lanka & worldwide.
              </p>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f5] text-[#8c1d3f] mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-900 mb-2">
                Islandwide & Worldwide
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Complimentary express door delivery on qualifying orders with live real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ATELIER CRAFTSMANSHIP / "DESIGNED FOR CONFIDENCE" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded overflow-hidden shadow-xl">
              <img
                src="/assets/images/atelier_craft.jpg"
                alt="Behind The Atelier"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Inset Label / Unboxing Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 bg-white p-3 rounded shadow-2xl border border-neutral-200 hidden sm:block">
              <img
                src="/assets/images/unboxing_box.jpg"
                alt="Woven Garment Label"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold block text-center">
                Handcrafted Precision
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              Behind The Atelier
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
              Designed for Confidence.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
              At Thishu Dress, our craft stems from one core conviction: that what you put on your body dictates how you move through the world. Our Colombo atelier combines century-honored couture draping with modern architectural silhouettes.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Each pattern is cut on the bias, inspected under natural northern light, and hand-finished with our signature grosgrain tags to guarantee a silhouette that commands visual stillness in any room.
            </p>
            <Link to="/about" className="btn-atelier-dark">
              Meet Our Atelier <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. WEARING THISHU (Community / Instagram 6-Grid) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e8e2d8]">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-1 block">
            Community
          </span>
          <h2 className="text-3xl font-serif text-neutral-900 mb-2">Wearing Thishu</h2>
          <p className="text-xs text-neutral-500 font-light">#ThishuWoman on Instagram & Beyond</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            '/assets/images/dress_1_1791439144973.jpg',
            '/assets/images/dress_2_1791439164270.jpg',
            '/assets/images/dress_3_1791439289948.jpg',
            '/assets/images/dress_4_1791439316954.jpg',
            '/assets/images/dress_5_1791439339770.jpg',
            '/assets/images/dress_6_1791439531074.jpg',
          ].map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-neutral-200">
              <img src={img} alt={`Community ${i + 1}`} className="w-full h-full object-cover img-hover-scale" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-serif">
                @thishudress
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. NEWSLETTER SIGNUP CARD (Gold/Cream Double Border) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-[#e6dfd5] p-8 sm:p-14 text-center shadow-lg relative">
          <div className="border border-[#e6dfd5] p-6 sm:p-10">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              Exclusive Privileges
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-neutral-900 mb-4">
              A little something for your inbox.
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Enjoy 10% off your first acquisition when you subscribe to atelier updates, private previews, and styling dispatches.
            </p>
            <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 border border-neutral-300 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#8c1d3f] flex-grow"
              />
              <button type="submit" className="btn-atelier-dark shrink-0 py-3">
                JOIN THE ATELIER
              </button>
            </form>
            <p className="text-[10px] text-neutral-400 mt-4 tracking-wide font-light">
              By joining you consent to receive periodic atelier missives. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
