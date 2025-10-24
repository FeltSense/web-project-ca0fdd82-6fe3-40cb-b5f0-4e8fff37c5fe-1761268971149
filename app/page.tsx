'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg" id="main-nav">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between transition-all duration-500 ease-in-out h-20" id="nav-content">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-3 group">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white tracking-tight">Imaginry Space</span>
          <span className="text-xs text-cyan-300 font-medium -mt-1">Marketing Solutions</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        <a href="#home" className="relative px-5 py-2 text-white font-medium transition-all duration-300 group overflow-hidden rounded-lg">
          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Home</span>
          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
        <a href="#services" className="relative px-5 py-2 text-white font-medium transition-all duration-300 group overflow-hidden rounded-lg">
          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Services</span>
          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
        <a href="#about" className="relative px-5 py-2 text-white font-medium transition-all duration-300 group overflow-hidden rounded-lg">
          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">About</span>
          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
        <a href="#pricing" className="relative px-5 py-2 text-white font-medium transition-all duration-300 group overflow-hidden rounded-lg">
          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Pricing</span>
          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
        <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group" id="mobile-menu-btn">
        <svg className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="lg:hidden hidden bg-gradient-to-b from-indigo-900 to-purple-900 border-t border-white/10 shadow-2xl" id="mobile-menu">
    <div className="px-4 py-6 space-y-3">
      <a href="#home" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg">
        Contact
      </a>
    </div>
  </div>

  {/* Scroll Animation Script */}
  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const nav = document.getElementById('main-nav');
      const navContent = document.getElementById('nav-content');
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.classList.remove('h-20');
          navContent.classList.add('h-16');
          nav.classList.add('backdrop-blur-lg', 'bg-opacity-95');
        } else {
          navContent.classList.remove('h-16');
          navContent.classList.add('h-20');
          nav.classList.remove('backdrop-blur-lg', 'bg-opacity-95');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-orange-950 animate-gradient-shift"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(163, 230, 53, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 230, 53, 0.3) 1px, transparent 1px)',
      backgroundSize: '100px 100px',
      animation: 'float 20s ease-in-out infinite'
    }}></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40">
    <div className="max-w-5xl mx-auto text-center">
      
      {/* Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-lime-500/10 border border-lime-500/30 rounded-full backdrop-blur-sm animate-float">
        <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
        <span className="text-lime-300 text-sm font-medium tracking-wide">Marketing That Moves Minds</span>
      </div>

      {/* Main Headline with Floating Animation */}
      <h1 className="mb-6 animate-fade-in-up">
        <span className="block text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight">
          Imaginry Space
        </span>
        <span className="block text-3xl lg:text-5xl font-bold bg-gradient-to-r from-lime-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
          Where Strategy Meets Spectacle
        </span>
      </h1>

      {/* Description with Staggered Animation */}
      <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
        We engineer campaigns that don't just capture attention—they command it. 
        <span className="text-lime-400 font-semibold"> Bold narratives.</span>
        <span className="text-blue-400 font-semibold"> Data-driven precision.</span>
        <span className="text-orange-400 font-semibold"> Unforgettable impact.</span>
      </p>

      {/* Floating Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in-up delay-300">
        <div className="text-center animate-float delay-100">
          <div className="text-4xl lg:text-5xl font-black text-lime-400 mb-2">247%</div>
          <div className="text-sm text-slate-400 uppercase tracking-wider">Avg ROI Increase</div>
        </div>
        <div className="text-center animate-float delay-200">
          <div className="text-4xl lg:text-5xl font-black text-blue-400 mb-2">89</div>
          <div className="text-sm text-slate-400 uppercase tracking-wider">Award-Winning Campaigns</div>
        </div>
        <div className="text-center animate-float delay-300">
          <div className="text-4xl lg:text-5xl font-black text-orange-400 mb-2">500+</div>
          <div className="text-sm text-slate-400 uppercase tracking-wider">Brands Transformed</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
        <button className="group relative px-8 py-4 bg-lime-500 text-slate-950 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/50">
          <span className="relative z-10">Launch Your Campaign</span>
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button className="group px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-full transition-all duration-300 hover:bg-blue-400 hover:text-slate-950 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50">
          <span className="flex items-center gap-2">
            View Our Work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Floating Trust Indicators */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in-up delay-500">
        <div className="text-slate-400 text-sm uppercase tracking-widest">Trusted By</div>
        <div className="h-8 w-px bg-slate-700"></div>
        <div className="text-slate-500 font-semibold">Fortune 500 Leaders</div>
        <div className="h-8 w-px bg-slate-700"></div>
        <div className="text-slate-500 font-semibold">Disruptive Startups</div>
        <div className="h-8 w-px bg-slate-700"></div>
        <div className="text-slate-500 font-semibold">Global Innovators</div>
      </div>
    </div>
  </div>

  {/* Animated Particles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-ping delay-500"></div>
    <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-1000"></div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.1) rotate(5deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-shift {
      animation: gradient-shift 15s ease-in-out infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-700 { animation-delay: 0.7s; }
    .delay-1000 { animation-delay: 1s; }
    .delay-2000 { animation-delay: 2s; }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-slate-900 mb-4">
        Creative Excellence by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Imaginry Space</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Award-winning creative solutions that transform brands and deliver measurable business impact
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
      
      {/* Large Card - Award-Winning Portfolio */}
      <div className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Award-Winning Creative Portfolio</h3>
            <p className="text-purple-100 text-lg leading-relaxed">
              Imaginry Space delivers exceptional creative work across multiple industries. Our portfolio showcases campaigns that have won industry recognition and driven real business results for our clients.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">Multi-Industry</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">Award-Winning</span>
          </div>
        </div>
      </div>

      {/* Tall Card - Full-Service Capabilities */}
      <div className="col-span-12 md:col-span-5 row-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-200 relative overflow-hidden group">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Full-Service Creative</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
            From strategy to execution, Imaginry Space provides end-to-end creative services. We handle everything from brand development and campaign strategy to design, content creation, and implementation.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-sm font-medium">Strategy & Planning</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-sm font-medium">Design & Execution</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-sm font-medium">Implementation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Wide Card - Collaborative Process */}
      <div className="col-span-12 md:col-span-5 row-span-1 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
        <div className="relative z-10 flex items-start gap-6">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Collaborative & Transparent</h3>
            <p className="text-blue-50 leading-relaxed">
              Imaginry Space believes in partnership. We maintain open communication throughout every project, ensuring you're involved and informed at every stage.
            </p>
          </div>
        </div>
      </div>

      {/* Medium Card - Data-Driven Creative */}
      <div className="col-span-12 md:col-span-4 row-span-1 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
        <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Data-Driven Results</h3>
          <p className="text-emerald-50 leading-relaxed">
            Imaginry Space combines creativity with analytics to deliver measurable business impact and ROI.
          </p>
        </div>
      </div>

      {/* Medium Card - Experienced Team */}
      <div className="col-span-12 md:col-span-3 row-span-1 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-200 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Imaginry Space's experienced designers, strategists, and creators bring diverse expertise to every project.
          </p>
        </div>
      </div>

      {/* Wide Card - Fast Turnaround */}
      <div className="col-span-12 md:col-span-7 row-span-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 shadow-xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-64 h-full bg-white/5 skew-x-12 group-hover:bg-white/10 transition-all duration-500"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Fast Turnaround, Premium Quality</h3>
              <p className="text-violet-100 leading-relaxed max-w-2xl">
                Imaginry Space delivers exceptional creative work quickly without compromising on quality. Our efficient processes and experienced team ensure your projects launch on time, every time.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Start Your Project with Imaginry Space
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Marketers Are Saying
      </h2>
      <p className="text-xl text-gray-600">
        Real feedback from marketing professionals using Imaginry Space
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
      {/* Testimonial 1 - Tall */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-100 lg:row-span-2">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Sarah Chen</h3>
            <p className="text-sm text-gray-500">@sarahchen</p>
            <p className="text-xs text-gray-400 mt-1">CMO at TechFlow</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Imaginry Space completely transformed our content marketing strategy. We've seen a 340% increase in engagement across all channels. The AI-powered insights are incredibly accurate and have saved our team countless hours of manual analysis.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What impressed me most was how quickly we could iterate on campaigns. The real-time collaboration features mean our remote team works seamlessly together. 🚀
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            247
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            89
          </span>
          <span>2h ago</span>
        </div>
      </div>

      {/* Testimonial 2 - Medium */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Marcus Rodriguez</h3>
            <p className="text-sm text-gray-500">@marcusrodz</p>
            <p className="text-xs text-gray-400 mt-1">Digital Marketing Lead</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Been using Imaginry Space for 6 months now. ROI tracking has never been easier. Our clients love the detailed reports and the visual dashboards are 🔥
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            156
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            34
          </span>
          <span>5h ago</span>
        </div>
      </div>

      {/* Testimonial 3 - Short */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-pink-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Watson"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Emily Watson</h3>
            <p className="text-sm text-gray-500">@emilywatson</p>
            <p className="text-xs text-gray-400 mt-1">Brand Strategist</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Imaginry Space is a game-changer! Finally, a platform that understands modern marketing workflows. ✨
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            312
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            67
          </span>
          <span>1h ago</span>
        </div>
      </div>

      {/* Testimonial 4 - Medium */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100 lg:col-start-2">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            alt="David Park"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-green-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">David Park</h3>
            <p className="text-sm text-gray-500">@davidpark</p>
            <p className="text-xs text-gray-400 mt-1">Growth Marketing Manager</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The A/B testing features in Imaginry Space are phenomenal. We've optimized our conversion rates by 215% in just 3 months. The platform pays for itself! 💰
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            423
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            92
          </span>
          <span>3h ago</span>
        </div>
      </div>

      {/* Testimonial 5 - Tall */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-indigo-100 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
            alt="Priya Sharma"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Priya Sharma</h3>
            <p className="text-sm text-gray-500">@priyasharma</p>
            <p className="text-xs text-gray-400 mt-1">VP of Marketing</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          After evaluating 12 different marketing platforms, we chose Imaginry Space and haven't looked back. The automation capabilities alone have freed up 20+ hours per week for our team.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The customer support is exceptional - they actually listen to feedback and ship features we request. This is how SaaS should be done. 👏
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you're serious about scaling your marketing operations, this is the tool you need.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            589
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            143
          </span>
          <span>4h ago</span>
        </div>
      </div>

      {/* Testimonial 6 - Short */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-yellow-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="James Mitchell"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">James Mitchell</h3>
            <p className="text-sm text-gray-500">@jamesmitchell</p>
            <p className="text-xs text-gray-400 mt-1">Content Marketing Director</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Imaginry Space's content calendar integration is brilliant. Our editorial workflow has never been smoother! 📅
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            198
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            45
          </span>
          <span>6h ago</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Imaginry Space</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your marketing strategy with AI-powered creative solutions
      </p>
    </div>

    {/* Two-Tier Comparison */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
      {/* Starter Plan */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-purple-300">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-600">Perfect for small teams and startups</p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-gray-900">$49</span>
            <span className="text-gray-600 ml-2">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">50 AI-generated marketing campaigns</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Social media content calendar</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Basic analytics dashboard</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Email support</span>
          </li>
        </ul>

        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
        >
          Get Started Now
        </button>
        
        <div className="mt-6 flex items-center justify-center space-x-3 text-sm text-gray-500">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
          <span>Secure SSL Payment</span>
        </div>
      </div>

      {/* Professional Plan - Featured */}
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 border-2 border-purple-400 transform md:scale-105">
        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
          MOST POPULAR
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
          <p className="text-purple-100">For growing agencies and enterprises</p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-white">$99</span>
            <span className="text-purple-100 ml-2">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Unlimited AI marketing campaigns</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Advanced audience targeting & segmentation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Real-time performance analytics & ROI tracking</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">White-label reports for clients</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Priority support & dedicated account manager</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">API access & custom integrations</span>
          </li>
        </ul>

        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
        >
          Start Professional Plan
        </button>
        
        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            <span>256-bit SSL Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>Money-back Guarantee</span>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Badges */}
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-6">Trusted by 10,000+ marketing professionals worldwide</p>
      <div className="flex items-center justify-center space-x-8 text-gray-400">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="font-semibold">Stripe Verified</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
          <span className="font-semibold">PCI Compliant</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="font-semibold">GDPR Ready</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span className="text-sm font-medium text-gray-700">Join 5,000+ Marketing Leaders</span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Transform Your Marketing
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mt-2">
          with Imaginry Space
        </span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
        Get exclusive insights, campaign strategies, and creative inspiration delivered to your inbox. Let's elevate your brand together.
      </p>
    </div>

    {/* Contact Form */}
    <form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const statusMessage = form.querySelector('[data-status-message]') as HTMLDivElement;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          company: formData.get('company') as string,
          marketingGoal: formData.get('marketingGoal') as string,
          message: formData.get('message') as string,
          source: 'Imaginry Space Contact Form'
        };

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        `;

        try {
          const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) throw new Error('Submission failed');

          // Success state
          statusMessage.className = 'mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center animate-fade-in';
          statusMessage.innerHTML = `
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span className="font-semibold">Success! We'll be in touch soon.</span>
            </div>
          `;
          form.reset();
          submitButton.innerHTML = 'Start Your Journey';
          submitButton.disabled = false;

        } catch (error) {
          // Error state
          statusMessage.className = 'mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center animate-fade-in';
          statusMessage.innerHTML = `
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              <span className="font-semibold">Something went wrong. Please try again.</span>
            </div>
          `;
          submitButton.innerHTML = 'Start Your Journey';
          submitButton.disabled = false;
        }
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10"
    >
      <div className="space-y-5">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="Your Company"
            />
          </div>
        </div>

        {/* Marketing Goal */}
        <div>
          <label htmlFor="marketingGoal" className="block text-sm font-semibold text-gray-700 mb-2">
            Primary Marketing Goal
          </label>
          <select
            id="marketingGoal"
            name="marketingGoal"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
          >
            <option value="">Select your goal...</option>
            <option value="brand-awareness">Brand Awareness</option>
            <option value="lead-generation">Lead Generation</option>
            <option value="customer-retention">Customer Retention</option>
            <option value="content-marketing">Content Marketing</option>
            <option value="social-media">Social Media Growth</option>
            <option value="seo-optimization">SEO Optimization</option>
            <option value="paid-advertising">Paid Advertising</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
            placeholder="Share your vision, challenges, or questions..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start Your Journey
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications from Imaginry Space. 
          We respect your privacy and will never share your information.
        </p>
      </div>

      {/* Status Message */}
      <div data-status-message className="hidden"></div>
    </form>

    {/* Trust Indicators */}
    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm text-gray-600">100% Secure</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
        <span className="text-sm text-gray-600">No Spam</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm text-gray-600">Fast Response</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
  {/* Animated Wave SVG */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-white opacity-10"
      ></path>
      <path 
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
        className="fill-white opacity-5"
      ></path>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-16 pt-32">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      {/* Company Info */}
      <div className="lg:col-span-2">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Imaginry Space
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Transforming brands through innovative marketing strategies and creative storytelling. We bring your vision to life in the digital space.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span className="text-gray-300">hello@imaginryspace.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-gray-300">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">123 Creative Ave, Marketing District</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-purple-300">Services</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Content Creation</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Social Media</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">SEO & Analytics</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-purple-300">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Our Work</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Blog</a></li>
          <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Decorative Wave Divider */}
    <div className="relative h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8"></div>

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Copyright */}
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Imaginry Space. All rights reserved.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-5">
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Legal Links */}
      <div className="flex space-x-6 text-sm">
        <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>

  {/* Bottom Gradient Wave */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
</footer>
    </main>
  )
}