'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'

const services = [
  ['Web Development', '/services#web-development'],
  ['Business Systems', '/services'],
  ['Custom Software', '/services'],
  ['Social Media Marketing', '/services#marketing-packages'],
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020b16]/95 shadow-xl shadow-black/20 backdrop-blur-xl' : 'bg-[#020b16]'}`}>
      <div className="border-b border-white/8 bg-[#071522]">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-end gap-5 px-4 text-[11px] text-slate-400 sm:px-6 lg:px-8">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-cyan-400"><Phone size={11} />+1 (234) 567-890</a>
          <a href="mailto:info@trustcode.com" className="hidden items-center gap-1.5 hover:text-cyan-400 sm:flex"><Mail size={11} />info@trustcode.com</a>
        </div>
      </div>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Trust Code home">
          <span className="grid h-10 w-10 place-items-center bg-cyan-400 text-lg font-black text-[#020b16] transition-transform group-hover:rotate-3">TC</span>
          <span className="font-heading text-xl font-bold uppercase tracking-wider text-white">Trust Code</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.035] p-1.5 lg:flex">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="nav-link flex items-center gap-1" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-haspopup="true">Services <ChevronDown size={14} /></button>
            {servicesOpen && <div className="absolute left-0 top-full pt-3"><div className="w-64 border border-white/10 bg-[#071522] p-2 shadow-2xl">{services.map(([label, href]) => <Link key={label} href={href} className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-400 hover:text-[#020b16]">{label}</Link>)}</div></div>}
          </div>
          <Link className="nav-link" href="/projects">Projects</Link>
        </nav>

        <Link href="/contact" className="hidden bg-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#020b16] transition-colors hover:bg-white lg:inline-flex">Contact us</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" aria-expanded={isOpen} aria-label="Toggle navigation">{isOpen ? <X /> : <Menu />}</button>
      </div>

      {isOpen && <nav className="border-t border-white/10 bg-[#020b16] px-4 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto max-w-7xl space-y-1">
          {[['Home','/'],['About','/about'],['Services','/services'],['Projects','/projects'],['Contact','/contact']].map(([label, href]) => <Link key={label} href={href} onClick={() => setIsOpen(false)} className="block border-b border-white/8 px-2 py-3 font-heading text-xl uppercase text-white hover:text-cyan-400">{label}</Link>)}
        </div>
      </nav>}
    </header>
  )
}
