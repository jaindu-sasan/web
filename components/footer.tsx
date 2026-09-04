import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-[#020812] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            <div><Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center bg-cyan-400 font-black text-[#020b16]">TC</span><span className="font-heading text-2xl font-bold uppercase tracking-wider">Trust Code</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Building better websites, systems, software and digital marketing solutions for modern businesses.</p></div>
            <div><h3 className="footer-title">Company</h3><div className="footer-links"><Link href="/about">About us</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div></div>
            <div><h3 className="footer-title">Services</h3><div className="footer-links"><Link href="/services">Web Development</Link><Link href="/services">Business Systems</Link><Link href="/services">Custom Software</Link><Link href="/services#marketing-packages">Social Media</Link></div></div>
            <div><h3 className="footer-title">Get in touch</h3><div className="space-y-4 text-sm text-slate-400"><a href="mailto:Jaindusasandezoysa@gmail.com" className="flex items-center gap-3 hover:text-cyan-400"><Mail size={16}/>Jaindusasandezoysa@gmail.com</a><a href="tel:0719201718" className="flex items-center gap-3 hover:text-cyan-400"><Phone size={16}/>0719201718</a><p className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0"/>No 91 Kaldemulla Road, Moratuwa</p></div></div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Trust Code. All rights reserved.</p><Link href="/contact" className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400">Start a project <ArrowUpRight size={14}/></Link></div>
        </div>
      </footer>
      <a href="https://wa.me/94719201718" target="_blank" rel="noopener noreferrer" aria-label="Chat with Trust Code on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"><MessageCircle size={25}/></a>
    </>
  )
}
