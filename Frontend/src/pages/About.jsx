import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#faf8f5]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:h-[75vh] flex items-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/about_hero_1791440225467.jpg"
            alt="Thishu Atelier Workshop"
            className="w-full h-full object-cover object-center filter brightness-[0.55]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center text-[10px] tracking-[0.2em] uppercase text-neutral-300 mb-4 space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">About Us</span>
            </div>

            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#c5a880] mb-3 block">
              OUR ATELIER HERITAGE — SINCE 2018
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-white mb-6 leading-tight">
              THIS IS THISHU
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-8 font-serif italic border-l-2 border-[#8c1d3f] pl-4">
              "Thishu Dress was crafted with a single guiding conviction: a dress is not just fabric to be worn, but an armor of effortless grace. Every cut, stitch, and drape is engineered to awaken quiet confidence and make you feel undeniably extraordinary."
            </p>
            <div>
              <a href="#principles" className="btn-atelier-primary bg-[#8c1d3f] hover:bg-[#6e1330]">
                DISCOVER OUR CREATIVE PROCESS <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN FOUNDER & ATELIER STORY */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded overflow-hidden shadow-2xl">
              <img
                src="/assets/images/atelier_craft.jpg"
                alt="Founder & Master Pattern Maker"
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Stat Callout Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-6 bg-white p-6 rounded shadow-xl border border-[#e8e2d8] max-w-xs">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8c1d3f] block mb-1">
                ATELIER EXCELLENCE
              </span>
              <span className="text-3xl font-serif text-neutral-900 block font-semibold mb-1">
                100%
              </span>
              <p className="text-xs text-neutral-500 font-light leading-snug">
                Handcrafted by Sri Lankan Artisans with Imported Silks & Linens.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              THE FOUNDER'S VISION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
              More Than a Dress, <br />
              <span className="italic font-light text-neutral-700">A More Confident You.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4 font-light">
              From our premier Colombo atelier, every dress begins not on digital screens, but as living sketches on paper and hand-draped muslin upon dress forms. We started with one core purpose: to create statement occasion wear that celebrates natural feminine elegance without sacrificing effortless physical ease and movement.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
              We reject transient fast-fashion cycles in favor of millimeter-exact pattern making, ethically sourced European and Asian silks, and internal architectural ease that honors every curve while commanding visual stillness in any room.
            </p>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e8e2d8]">
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-neutral-900 block font-semibold">25+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Master Pattern Makers</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-neutral-900 block font-semibold">12k+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Bespoke Fits Delivered</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-neutral-900 block font-semibold">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Sustainable Silks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PRINCIPLES OF THE THISHU CUT */}
      <section id="principles" className="py-20 bg-white border-y border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-2 block">
                FOUNDATIONAL CRAFT
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900">
                The Principles of the Thishu Cut
              </h2>
            </div>
            <p className="text-neutral-500 text-xs sm:text-sm font-light max-w-sm mt-3 md:mt-0">
              Every gown and garment is engineered around the natural physics of female grace and posture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Faultlessness for Motion',
                desc: 'Garments should never restrict the cadence of life. We engineer invisible ease pleats and bias stretches that flow with natural stride and gesture.',
              },
              {
                num: '02',
                title: 'Architectural Drapery',
                desc: 'Sculpting the silhouette through geometric fall and tension rather than uncomfortable corsetry and rigid boning.',
              },
              {
                num: '03',
                title: 'Atelier Crafts',
                desc: 'Every hem is hand-rolled; every internal seam is French-bound. Details made to be felt against skin and revered by those who notice.',
              },
              {
                num: '04',
                title: 'Timeless Value',
                desc: 'Antithesis of transient trends. Heirlooms crafted to be worn, treasured, and passed down across milestone occasions.',
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-[#faf8f5] p-8 border border-[#e8e2d8] rounded flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-neutral-300 block mb-6 font-bold">{card.num}</span>
                  <h3 className="font-serif text-lg text-neutral-900 mb-3">{card.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-200">
                  <span className="text-[10px] uppercase tracking-widest text-[#8c1d3f] font-bold">Atelier Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK CREED / QUOTE SECTION */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-10 h-10 rounded-full bg-[#8c1d3f] mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-4 block">
            THISHU CREED
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white mb-6 leading-relaxed italic">
            "True luxury is not defined by excess, but by the quiet certainty of intention."
          </h2>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-8 font-light">
            Soma Jayawardena | Lead Creative Director & Founder, Thishu Dress
          </p>
          <Link to="/dresses" className="btn-atelier-primary bg-[#8c1d3f] hover:bg-[#6e1330]">
            EXPERIENCE THE ATELIER COLLECTION
          </Link>
        </div>
      </section>

      {/* 5. FABRIC TRANSPARENCY & SOURCING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
              MATERIAL PURITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-6 leading-tight">
              Mulberry Silk & Liquid Satins
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">
              We exclusively select natural silks and plant-based fibres known for their luminous drape, breathability, and tactile sensuality against bare skin.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#8c1d3f] text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">OEKO-TEX® Certified Non-Toxic</h4>
                  <p className="text-xs text-neutral-500 font-light">Guaranteed free of harsh chemical fixatives and harmful dyes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#8c1d3f] text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Heavy 22 Momme Weight</h4>
                  <p className="text-xs text-neutral-500 font-light">Provides complete opaque coverage and luxurious liquid waterfall drape.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#8c1d3f] text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Handcrafted Mineral Pigments</h4>
                  <p className="text-xs text-neutral-500 font-light">Custom blended palette inspired by Ceylon gemology and warm twilight.</p>
                </div>
              </div>
            </div>
            <Link to="/dresses" className="text-xs font-bold tracking-widest uppercase text-neutral-900 hover:text-[#8c1d3f] inline-flex items-center">
              EXPLORE SILK CREATIONS <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded overflow-hidden shadow-xl border border-[#e8e2d8]">
              <img
                src="/assets/images/silk_swatch.jpg"
                alt="Mulberry Silk Swatch & Embroidery"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. UNBOXING EXPERIENCE: "THE MOMENT IT ARRIVES" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e8e2d8]">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-2 block">
            THE UNBOXING RITUAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-3">
            The Moment It Arrives
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-light">
            Each acquisition is delivered as a bespoke gifting ritual wrapped in layered tissue and rigid debossed boxes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tag: 'THE BESPOKE RIGID BOX',
              title: 'Seal Box Construction',
              desc: 'Dense 1200gsm board structure finished with debossed gold foil and signature champagne lining.',
              img: '/assets/images/unboxing_box.jpg',
            },
            {
              tag: 'OUR SIGNATURE MONOGRAM',
              title: 'The Gros-Grain Ribbon',
              desc: 'Hand-tied custom woven blush ribbon designed to be kept and reused as a scented keepsake.',
              img: '/assets/images/shop_the_look.jpg',
            },
            {
              tag: 'FOR CARE & REASSURANCE',
              title: 'Atelier Authenticity Note',
              desc: 'Individually numbered certificate of origin stamped by the pattern master who inspected the piece.',
              img: '/assets/images/atelier_craft.jpg',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#ece6de] p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden mb-5 rounded bg-neutral-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover img-hover-scale" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#8c1d3f] font-bold block mb-1">
                {item.tag}
              </span>
              <h3 className="font-serif text-lg text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MILESTONE SILHOUETTE CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-[#f5efe6] border border-[#e2d8cb] p-10 sm:p-16 rounded shadow-md">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8c1d3f] mb-3 block">
            YOUR NEXT OCCASION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
            Step Into Your Milestone Silhouette
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
            Whether for grand galas, intimate ceremonies, or confident everyday poise, our atelier craftsmen are dedicated to honoring your presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dresses" className="btn-atelier-dark">
              EXPLORE THE CURRENT COLLECTION
            </Link>
            <Link to="/clothing" className="btn-atelier-outline bg-white hover:bg-neutral-900 hover:text-white">
              VIEW READY-TO-WEAR
            </Link>
          </div>
          <div className="mt-8 pt-6 border-t border-[#e2d8cb] flex flex-wrap justify-center gap-6 text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">
            <span>Bespoke Concierge Styling</span>
            <span>•</span>
            <span>Complimentary Islandwide Delivery</span>
            <span>•</span>
            <span>Express Worldwide Air Courier</span>
          </div>
        </div>
      </section>
    </div>
  );
}
