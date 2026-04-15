'use client';

import React, { useEffect } from 'react';

const customStyles = `
  body {
    background-color: #070d1f;
    color: #dfe4fe;
    font-family: 'Manrope', sans-serif;
    overflow-x: hidden;
  }
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
  .glass-card {
    background: rgba(28, 37, 62, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(91, 244, 222, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-card:hover {
    border-color: rgba(91, 244, 222, 0.2);
    box-shadow: 0 0 30px rgba(91, 244, 222, 0.05);
    transform: translateY(-4px);
  }
  .gradient-text {
    background: linear-gradient(135deg, #5bf4de 0%, #34b5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .primary-gradient-btn {
    background: linear-gradient(135deg, #5bf4de 0%, #34b5fa 100%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(91, 244, 222, 0.05);
    transition: all 0.3s ease;
  }
  .primary-gradient-btn:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(91, 244, 222, 0.2);
    filter: brightness(1.1);
  }
  .hero-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(91, 244, 222, 0.08) 0%, rgba(7, 13, 31, 0) 70%);
    z-index: -1;
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  @keyframes pulse-soft {
    0% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.02); }
    100% { opacity: 0.8; transform: scale(1); }
  }
  .animate-pulse-soft {
    animation: pulse-soft 3s ease-in-out infinite;
  }
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TopNavBar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(91,244,222,0.1)] transition-all">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <img alt="Jana AI Logo" className="h-10 w-10 animate-float object-contain" src="/logo.png" />
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#5bf4de] to-[#34b5fa] font-['Space_Grotesk']">Jana AI Platform</span>
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">From Services to Outcomes</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight">
        <a className="text-slate-300 dark:text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#platform">Platform</a>
        <a className="text-slate-300 dark:text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#how-it-works">How It Works</a>
        <a className="text-slate-300 dark:text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#ecosystem">Ecosystem</a>
        <a className="text-slate-300 dark:text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#impact">Impact</a>
      </div>
      <a href="#impact" className="primary-gradient-btn inline-block px-6 py-2 rounded-full font-bold text-on-primary text-sm hover:scale-105 active:scale-95 text-center">
        Request Presentation
      </a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto scroll-reveal" id="platform">
    <div className="grid grid-cols-12 gap-8 items-center">
      <div className="col-span-12 lg:col-span-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase mb-8 animate-pulse-soft">
          People-First AI for Daily Life Services
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-on-surface">
          An AI platform that turns <span className="gradient-text">fragmented services</span> into complete outcomes.
        </h1>
      </div>
      <div className="col-span-12 lg:col-span-6 lg:col-start-6">
        <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10">
          Jana AI Platform combines case orchestration, knowledge intelligence, JanMitra human support, localized AI devices, and multi-app execution to simplify life at scale.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#how-it-works" className="primary-gradient-btn inline-block px-8 py-4 rounded-full font-bold text-on-primary text-lg active:scale-95 text-center">
            Explore the Platform
          </a>
          <a href="#ecosystem" className="inline-block px-8 py-4 rounded-full font-bold text-primary-fixed border border-outline-variant/30 hover:bg-surface-variant/20 hover:border-primary/50 transition-all text-lg active:scale-95 text-center">
            View Investor Narrative
          </a>
        </div>
      </div>
    </div>
  </section>
);

const JanMitraHighlight = () => (
  <section className="px-8 pb-32 max-w-7xl mx-auto scroll-reveal">
    <div className="glass-card p-1 rounded-[2rem]">
      <div className="bg-surface-container-low rounded-[1.8rem] overflow-hidden grid md:grid-cols-2 items-center">
        <div className="p-12">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">JanMitra Highlight</span>
          <h2 className="text-4xl font-headline font-semibold mb-6">Every case has a <span className="text-secondary">JanMitra.</span></h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            A JanMitra Associate is assigned to the case from the beginning, stays with the member throughout the journey, intervenes whenever support is needed, and helps ensure the outcome is completed—not just the task.
          </p>
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-bold">Human-Assisted Reliability</span>
          </div>
        </div>
        <div className="h-full min-h-[400px] bg-gradient-to-br from-surface-container to-surface-container-highest relative flex items-center justify-center overflow-hidden">
          <div className="relative z-10 w-64 h-64">
            <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(91,244,222,0.3)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#5bf4de", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#34b5fa", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle className="animate-[spin_20s_linear_infinite]" cx="100" cy="100" fill="none" r="80" stroke="url(#grad1)" strokeDasharray="10 5" strokeWidth="1" />
              <circle className="animate-pulse-soft" cx="100" cy="100" fill="none" r="60" stroke="url(#grad1)" strokeWidth="0.5" />
              <path className="animate-float" d="M70,100 Q100,60 130,100 T190,100" fill="none" stroke="url(#grad1)" strokeLinecap="round" strokeWidth="4" />
              <path className="animate-float" d="M130,100 Q100,140 70,100 T10,100" fill="none" stroke="url(#grad1)" strokeLinecap="round" strokeWidth="4" style={{ animationDelay: "-2s" }} />
              <circle className="animate-pulse" cx="100" cy="100" fill="url(#grad1)" r="10" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,181,250,0.1),transparent_70%)]"></div>
        </div>
      </div>
    </div>
  </section>
);

const ValueCards = () => (
  <section className="px-8 py-32 bg-surface-container-low scroll-reveal">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div className="p-10 rounded-3xl bg-surface-container border border-transparent hover:border-primary/20 transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group cursor-default">
        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">rocket_launch</span>
        <h3 className="text-2xl font-headline font-bold mb-4">Outcome-Driven</h3>
        <p className="text-on-surface-variant leading-relaxed">
          Moving beyond simple task execution to ensure the member&apos;s ultimate goal is met through intelligent case management.
        </p>
      </div>
      <div className="p-10 rounded-3xl bg-surface-container border border-transparent hover:border-primary/20 transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group cursor-default">
        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">diversity_3</span>
        <h3 className="text-2xl font-headline font-bold mb-4">Human + AI</h3>
        <p className="text-on-surface-variant leading-relaxed">
          Seamlessly blending cutting-edge language intelligence with JanMitra human associates for unmatched trust.
        </p>
      </div>
      <div className="p-10 rounded-3xl bg-surface-container border border-transparent hover:border-primary/20 transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group cursor-default">
        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">hub</span>
        <h3 className="text-2xl font-headline font-bold mb-4">Built to Scale</h3>
        <p className="text-on-surface-variant leading-relaxed">
          A modular architecture designed to handle millions of unique cases across diverse sectors simultaneously.
        </p>
      </div>
    </div>
  </section>
);

const FlagshipModel = () => (
  <section className="px-8 py-32 max-w-7xl mx-auto overflow-hidden scroll-reveal">
    <h2 className="text-center font-headline text-4xl md:text-5xl font-bold mb-20">The Jana <span className="gradient-text">Flagship Model</span></h2>
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
      <div className="flex-1 text-center p-8 glass-card rounded-2xl w-full border border-outline-variant/10 hover:border-secondary/30">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">person_search</span>
        <h4 className="font-bold mb-2">Member Need</h4>
        <p className="text-sm text-on-surface-variant">Intent expressed</p>
      </div>
      <span className="material-symbols-outlined text-outline hidden md:block animate-pulse">arrow_forward</span>
      <div className="flex-1 text-center p-8 bg-primary/10 border border-primary/20 rounded-2xl w-full shadow-[0_0_50px_rgba(91,244,222,0.1)] hover:shadow-[0_0_70px_rgba(91,244,222,0.2)] transition-shadow">
        <span className="material-symbols-outlined text-primary text-5xl mb-4">memory</span>
        <h4 className="font-bold mb-2">Jana AI Engine</h4>
        <div className="text-[10px] space-y-1 text-primary-fixed uppercase tracking-tighter">
          <div>Case Orchestration</div>
          <div>Knowledge Base</div>
          <div>Language Intelligence</div>
        </div>
      </div>
      <span className="material-symbols-outlined text-outline hidden md:block animate-pulse">arrow_forward</span>
      <div className="flex-1 text-center p-8 glass-card rounded-2xl w-full border border-outline-variant/10 hover:border-secondary/30">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">support_agent</span>
        <h4 className="font-bold mb-2">JanMitra Associate</h4>
        <div className="text-[10px] space-y-1 text-secondary-fixed uppercase tracking-tighter">
          <div>Assigned &amp; Monitors</div>
          <div>Human Intervention</div>
        </div>
      </div>
      <span className="material-symbols-outlined text-outline hidden md:block animate-pulse">arrow_forward</span>
      <div className="flex-1 text-center p-8 glass-card rounded-2xl w-full border border-outline-variant/10 hover:border-tertiary/30">
        <span className="material-symbols-outlined text-tertiary text-5xl mb-4">task_alt</span>
        <h4 className="font-bold mb-2">Outcome Delivery</h4>
        <p className="text-sm text-on-surface-variant">Apps + Providers + JTab</p>
      </div>
    </div>
    <p className="mt-20 text-center text-xl font-headline italic text-on-surface-variant border-t border-outline-variant/20 pt-10">
      &ldquo;Every case has a <span className="text-secondary font-bold">JanMitra</span>. Every JanMitra is powered by <span className="text-primary font-bold">Jana AI</span>.&rdquo;
    </p>
  </section>
);

const WhyJana = () => (
  <section className="px-8 py-32 bg-surface-container-lowest scroll-reveal">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
        <h2 className="text-5xl md:text-6xl font-headline font-bold leading-tight">A new infrastructure for <span className="gradient-text">daily life services.</span></h2>
        <p className="text-xl text-on-surface-variant">We don&apos;t just provide software; we provide the operational core that makes complex services manageable and scalable for the modern world.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container p-12 transition-all hover:bg-surface-variant hover:shadow-xl cursor-default">
          <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">layers</span>
          </div>
          <h4 className="text-2xl font-bold mb-4">Deep Orchestration</h4>
          <p className="text-on-surface-variant leading-relaxed">Coordinating multiple providers and tasks under a single unified case thread.</p>
        </div>
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container p-12 transition-all hover:bg-surface-variant hover:shadow-xl cursor-default">
          <div className="mb-8 w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
          </div>
          <h4 className="text-2xl font-bold mb-4">Context Awareness</h4>
          <p className="text-on-surface-variant leading-relaxed">Understanding the nuance of local languages and regional service requirements.</p>
        </div>
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container p-12 transition-all hover:bg-surface-variant hover:shadow-xl cursor-default">
          <div className="mb-8 w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
            <span className="material-symbols-outlined text-3xl">security</span>
          </div>
          <h4 className="text-2xl font-bold mb-4">Ethical Human-Loop</h4>
          <p className="text-on-surface-variant leading-relaxed">Ensuring accountability through a dedicated human associate for every single case.</p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="px-8 py-32 max-w-7xl mx-auto scroll-reveal" id="how-it-works">
    <h2 className="text-center font-headline text-4xl font-bold mb-20">Need becomes case. <span className="text-primary">Case becomes outcome.</span></h2>
    <div className="space-y-4">
      <div className="flex items-center gap-8 p-8 glass-card rounded-3xl transition-all hover:scale-[1.02] hover:bg-surface-variant/40 group cursor-default">
        <div className="text-4xl font-headline font-bold text-outline-variant group-hover:text-primary transition-colors">01</div>
        <div>
          <h5 className="text-xl font-bold mb-1">Need Expression</h5>
          <p className="text-on-surface-variant">The member expresses a service need via app, voice, or JTab device.</p>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 glass-card rounded-3xl translate-x-4 transition-all hover:scale-[1.02] hover:bg-surface-variant/40 group cursor-default">
        <div className="text-4xl font-headline font-bold text-outline-variant group-hover:text-primary transition-colors">02</div>
        <div>
          <h5 className="text-xl font-bold mb-1">Jana AI creates case</h5>
          <p className="text-on-surface-variant">Intelligence engine analyzes requirements and initializes a secure orchestration thread.</p>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 glass-card rounded-3xl lg:translate-x-8 transition-all hover:scale-[1.02] hover:bg-surface-variant/40 group cursor-default">
        <div className="text-4xl font-headline font-bold text-outline-variant group-hover:text-primary transition-colors">03</div>
        <div>
          <h5 className="text-xl font-bold mb-1">JanMitra assigned</h5>
          <p className="text-on-surface-variant">A dedicated human associate is mapped to the case for oversight and trust.</p>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 glass-card rounded-3xl translate-x-4 transition-all hover:scale-[1.02] hover:bg-surface-variant/40 group cursor-default">
        <div className="text-4xl font-headline font-bold text-outline-variant group-hover:text-primary transition-colors">04</div>
        <div>
          <h5 className="text-xl font-bold mb-1">Execution</h5>
          <p className="text-on-surface-variant">Jana AI coordinates service providers and automates logistics in the background.</p>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 glass-card rounded-3xl transition-all hover:scale-[1.02] hover:bg-surface-variant/40 group cursor-default">
        <div className="text-4xl font-headline font-bold text-outline-variant group-hover:text-primary transition-colors">05</div>
        <div>
          <h5 className="text-xl font-bold mb-1">Outcome delivered</h5>
          <p className="text-on-surface-variant">The member&apos;s goal is fully realized, verified by the JanMitra and the member.</p>
        </div>
      </div>
    </div>
  </section>
);

const PlatformPillars = () => (
  <section className="px-8 py-32 bg-surface-container-low scroll-reveal">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl font-bold mb-16 text-center">Designed as a <span className="gradient-text">full-stack ecosystem</span>, not a single app.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:shadow-lg cursor-default">
          <h5 className="font-headline font-bold mb-4">Case Orchestration Engine</h5>
          <p className="text-sm text-on-surface-variant">The heart of the platform that handles multi-party service synchronization.</p>
        </div>
        <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:shadow-lg cursor-default">
          <h5 className="font-headline font-bold mb-4">Knowledge Base</h5>
          <p className="text-sm text-on-surface-variant">A vast repository of sector-specific intelligence and local service data.</p>
        </div>
        <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:shadow-lg cursor-default">
          <h5 className="font-headline font-bold mb-4">JanMitra Human Layer</h5>
          <p className="text-sm text-on-surface-variant">The critical trust interface ensuring accountability and emotional intelligence.</p>
        </div>
        <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:shadow-lg cursor-default">
          <h5 className="font-headline font-bold mb-4">JTab + AI Tutor</h5>
          <p className="text-sm text-on-surface-variant">Physical hardware and tutoring layers that bridge the digital-physical divide.</p>
        </div>
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section className="px-8 py-32 max-w-7xl mx-auto scroll-reveal" id="ecosystem">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-headline font-bold mb-8">Delivery <span className="text-secondary">ecosystem</span></h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">smartphone</span>
            <span className="font-semibold text-sm">Member App</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">support_agent</span>
            <span className="font-semibold text-sm">JanMitra App</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">business_center</span>
            <span className="font-semibold text-sm">Provider App</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">tablet_mac</span>
            <span className="font-semibold text-sm">JTab Device</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">school</span>
            <span className="font-semibold text-sm">AI Tutor</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-2xl border border-transparent hover:border-secondary/30 transition-all group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">insights</span>
            <span className="font-semibold text-sm">Sector Layers</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl relative group">
        <img alt="Cybersecurity and Ecosystem Interface" className="w-full h-[500px] object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110 animate-pulse-soft" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent group-hover:opacity-60 transition-opacity duration-1000"></div>
      </div>
    </div>
  </section>
);

const SectorSection = () => (
  <section className="px-8 py-24 bg-surface-container-low border-y border-outline-variant/10 scroll-reveal">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-headline font-bold mb-12">One platform. Multiple sectors. <span className="text-primary">Shared intelligence.</span></h2>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Healthcare</span>
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Government Services</span>
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Mobility</span>
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Finance</span>
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Home Services</span>
        <span className="px-8 py-3 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface font-semibold hover:border-primary hover:text-primary transition-all cursor-pointer">Education</span>
      </div>
    </div>
  </section>
);

const BusinessSignal = () => (
  <section className="px-8 py-32 max-w-7xl mx-auto scroll-reveal">
    <div className="glass-card rounded-[3rem] p-16 text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
      <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">People-first economics with <span className="gradient-text">platform leverage.</span></h2>
      <p className="max-w-3xl mx-auto text-xl text-on-surface-variant leading-relaxed">
        Jana AI Platform captures platform value while directing the majority of service value toward JanMitra Associates, service professionals, and ecosystem participants.
      </p>
    </div>
  </section>
);

const ImpactSection = () => (
  <section className="px-8 py-32 max-w-7xl mx-auto scroll-reveal" id="impact">
    <h2 className="text-4xl font-headline font-bold mb-20 text-center">Built to simplify life and reorganize <br /> <span className="text-primary">service delivery at scale.</span></h2>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="group">
        <div className="text-primary mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">verified</span>
          <span className="font-bold tracking-widest uppercase text-xs">For Members</span>
        </div>
        <h4 className="text-2xl font-bold mb-4">Complete Peace of Mind</h4>
        <p className="text-on-surface-variant leading-relaxed">Every request is tracked until the desired outcome is achieved, eliminating the stress of managing fragmented providers.</p>
      </div>
      <div className="group">
        <div className="text-secondary mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">work</span>
          <span className="font-bold tracking-widest uppercase text-xs">For Professionals</span>
        </div>
        <h4 className="text-2xl font-bold mb-4">Empowered Earnings</h4>
        <p className="text-on-surface-variant leading-relaxed">Service providers and JanMitras focus on high-value delivery while the AI handles the administrative burden of orchestration.</p>
      </div>
      <div className="group">
        <div className="text-tertiary mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">public</span>
          <span className="font-bold tracking-widest uppercase text-xs">For Society</span>
        </div>
        <h4 className="text-2xl font-bold mb-4">Equitable Access</h4>
        <p className="text-on-surface-variant leading-relaxed">Standardizing service quality across regions ensures that premium service outcomes are available to everyone, regardless of technical literacy.</p>
      </div>
    </div>
  </section>
);

const ClosingSection = () => (
  <section className="px-8 py-48 relative overflow-hidden scroll-reveal">
    <div className="hero-glow bottom-[-200px] left-1/2 -translate-x-1/2"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-6xl md:text-8xl font-headline font-bold mb-4 tracking-tighter">Jana AI Platform</h2>
      <h3 className="text-2xl md:text-3xl font-headline text-secondary-fixed mb-6 font-medium">From Services to Outcomes</h3>
      <p className="text-xl md:text-2xl font-headline font-bold tracking-widest text-primary uppercase mb-12 animate-pulse-soft">Work Less. Earn More. Live Better.</p>
      <p className="text-on-surface-variant text-lg leading-relaxed mb-16">
        Join us in building the infrastructure for the next generation of human-centric AI services. Explore our platform architecture or connect with our leadership team for a deep dive into the Jana ecosystem.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="#platform" className="primary-gradient-btn inline-block px-10 py-5 rounded-full font-bold text-on-primary text-xl active:scale-95 text-center">
          Schedule an Investor Meeting
        </a>
        <a href="#ecosystem" className="inline-block px-10 py-5 rounded-full font-bold text-primary-fixed border border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all text-xl active:scale-95 text-center">
          Download Platform Deck
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-12 px-8 mt-24 bg-slate-950 border-t border-outline-variant/10">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img alt="Jana AI Logo" className="h-8 w-8 opacity-80 object-contain" src="/logo.png" />
          <span className="font-['Space_Grotesk'] font-bold text-cyan-400 text-2xl">Jana AI Platform</span>
        </div>
        <p className="font-['Manrope'] text-sm tracking-wide text-slate-500 uppercase tracking-[0.2em]">© 2024 Jana AI Platform. From Services to Outcomes.</p>
      </div>
      <div className="flex flex-wrap md:justify-end gap-x-10 gap-y-4">
        <a className="font-['Manrope'] text-sm tracking-wide text-slate-500 hover:text-cyan-200 transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
        <a className="font-['Manrope'] text-sm tracking-wide text-slate-500 hover:text-cyan-200 transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
        <a className="font-['Manrope'] text-sm tracking-wide text-slate-500 hover:text-cyan-200 transition-all opacity-80 hover:opacity-100" href="#">Contact</a>
        <a className="font-['Manrope'] text-sm tracking-wide text-cyan-400 font-bold hover:text-cyan-200 transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function JanaLandingPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <main className="bg-background text-on-background min-h-screen selection:bg-primary selection:text-on-primary font-body">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <TopNavBar />
      <div className="relative overflow-x-hidden">
        <div className="hero-glow top-[-200px] left-[-100px]"></div>
        <div className="hero-glow top-[400px] right-[-200px]"></div>
        <HeroSection />
        <JanMitraHighlight />
        <ValueCards />
        <FlagshipModel />
        <WhyJana />
        <HowItWorks />
        <PlatformPillars />
        <Ecosystem />
        <SectorSection />
        <BusinessSignal />
        <ImpactSection />
        <ClosingSection />
      </div>
      <Footer />
    </main>
  );
}
