import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react'

const serviceNames = ['Web Design & Development', 'eCommerce Solutions', 'Search Engine Optimization', 'Google Ads', 'Social Media Marketing', 'Branding & Identity', 'Content Creation']
const services = [
  { no: '01', title: 'Web Design & Development', copy: 'High-performance digital experiences that look distinctive and turn attention into action.', tags: ['Web Design', 'Development'] },
  { no: '02', title: 'eCommerce Solutions', copy: 'Fast, intuitive online stores built to simplify buying and support sustainable growth.', tags: ['Commerce', 'Conversion'] },
  { no: '03', title: 'SEO & Google Ads', copy: 'Search strategies that connect your business with people actively looking for what you offer.', tags: ['Visibility', 'Paid Media'] },
  { no: '04', title: 'Social Media Management', copy: 'Strategy-led content and campaigns that make your brand recognizable and relevant.', tags: ['Content', 'Growth'] },
  { no: '05', title: 'Branding & Graphic Design', copy: 'Clear visual systems that give your business a consistent and memorable identity.', tags: ['Identity', 'Design'] },
  { no: '06', title: 'Content Creation', copy: 'Focused creative content designed for modern channels, audiences and business goals.', tags: ['Creative', 'Campaigns'] },
]
const projects = [
  { title: 'E-Commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-adf4e65e9b31?w=1000&h=700&fit=crop', description: 'A complete commerce experience built around simpler shopping and scalable management.' },
  { title: 'Inventory Management System', category: 'Business Systems', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=700&fit=crop', description: 'A central system for clearer stock, order and supply-chain operations.' },
  { title: 'Corporate Website', category: 'Web Design', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=700&fit=crop', description: 'A modern brand platform designed to communicate expertise with confidence.' },
]

export default function Home() {
  return <>
    <Navbar />
    <main className="overflow-hidden bg-background">
      <section className="hero-split">
        <div className="hero-copy reveal-up">
          <p className="overline">Web Design · Digital Marketing · Sri Lanka</p>
          <h1 className="hero-title"><span>YOUR DIGITAL</span><em>GROWTH</em><span className="outline-text">PARTNER</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg">Trust Code builds powerful websites, business systems, software and marketing experiences that help ambitious businesses move forward.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5"><Link href="/projects" className="pill-cta">View our work <span><ArrowUpRight size={18}/></span></Link><Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-white underline decoration-cyan-400 underline-offset-8 hover:text-cyan-400">Start a project</Link></div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-5 text-xs uppercase tracking-widest text-slate-500"><span>Innovation City</span><a href="mailto:info@trustcode.com" className="hover:text-cyan-400">info@trustcode.com</a><a href="#services" className="ml-auto flex items-center gap-2 hover:text-white">Scroll to explore <ArrowDown size={14}/></a></div>
        </div>
        <div className="hero-visual"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&h=1400&fit=crop" alt="Modern collaborative office workspace" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/25 to-transparent"/><div className="absolute bottom-8 right-8 hidden border-r-2 border-cyan-400 pr-4 text-right lg:block"><p className="text-xs uppercase tracking-[.2em] text-slate-300">Design · Technology</p><p className="mt-1 font-heading text-2xl font-bold uppercase text-white">Built to perform</p></div></div>
      </section>

      <div className="marquee" aria-label="Our services"><div className="marquee-track">{[...serviceNames,...serviceNames].map((name,i)=><span key={`${name}-${i}`}>{name}<b>✦</b></span>)}</div></div>

      <section id="services" className="section-shell scroll-mt-28">
        <div className="section-head"><div><p className="overline text-cyan-400">What we do</p><h2>Digital services built<br/>for <em>modern brands.</em></h2></div><p>From first idea to lasting growth, we connect strategy, design and technology into one clear digital direction.</p></div>
        <div className="mt-14 border-t border-white/10">{services.map(service=><Link key={service.no} href="/services" className="service-row"><span className="service-no">{service.no}</span><div><h3>{service.title}</h3><div className="mt-3 flex gap-2">{service.tags.map(tag=><span className="mini-tag" key={tag}>{tag}</span>)}</div></div><p>{service.copy}</p><span className="row-arrow"><ArrowUpRight/></span></Link>)}</div>
      </section>

      <section className="border-y border-white/10 bg-[#071522]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="about-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=1000&fit=crop" alt="Team collaborating on a digital project" loading="lazy"/></div>
          <div className="p-8 sm:p-12 lg:p-16"><p className="overline text-cyan-400">About us</p><h2 className="section-title mt-4">Where design, technology and <em>strategy</em> work together.</h2><p className="mt-6 leading-7 text-slate-400">Trust Code helps growing businesses harness the power of modern technology. We create high-quality digital solutions shaped around real business needs and lasting partnerships.</p><div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4">{['Strategy Driven','Modern Technology','Fast Execution','SEO Focused','Reliable Support','Client-Centric'].map(item=><div key={item} className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm font-semibold text-slate-200"><Check size={15} className="text-cyan-400"/>{item}</div>)}</div><Link href="/about" className="mt-9 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400">Discover our story <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-head"><div><p className="overline text-cyan-400">Selected work</p><h2>Ideas turned into<br/><span className="outline-text">digital products.</span></h2></div><Link href="/projects" className="pill-cta self-end">View all projects <span><ArrowRight size={18}/></span></Link></div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">{projects.map((project,i)=><Link href="/projects" key={project.title} className={`project-card ${i===0?'md:col-span-2':''}`}><img src={project.image} alt={project.title} loading="lazy"/><div className="project-overlay"/><div className="project-info"><p>{project.category}</p><h3>{project.title}</h3><span>{project.description}</span></div><ArrowUpRight className="absolute right-6 top-6 text-white"/></Link>)}</div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8"><div className="final-cta"><p className="overline text-cyan-400">Your next move</p><h2>Let&apos;s build something<br/><em>that stands out.</em></h2><Link href="/contact" className="pill-cta mt-8">Let&apos;s talk <span><ArrowUpRight size={18}/></span></Link></div></section>
    </main>
    <Footer />
  </>
}
