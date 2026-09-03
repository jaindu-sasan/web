import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, BarChart3, Check, Code2, Layers, Megaphone, Palette, ShoppingCart, Sparkles, Target, Wrench, Zap } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Website Development', description: 'Fast, responsive websites designed to turn visitors into customers.', features: ['Responsive design', 'SEO-ready structure', 'Fast performance'] },
  { icon: Layers, title: 'Business Systems', description: 'Purpose-built systems that simplify operations and help your team scale.', features: ['Workflow automation', 'Secure integrations', 'Scalable architecture'] },
  { icon: Zap, title: 'Custom Software', description: 'Reliable software shaped around your business, users, and goals.', features: ['Custom development', 'Cloud deployment', 'Ongoing support'] },
  { icon: ShoppingCart, title: 'E-commerce', description: 'High-converting online stores with a smooth buying experience.', features: ['Secure checkout', 'Inventory tools', 'Sales analytics'] },
  { icon: Palette, title: 'UI/UX Design', description: 'Clear, memorable digital experiences your customers enjoy using.', features: ['User research', 'Interactive prototypes', 'Design systems'] },
  { icon: Wrench, title: 'Care & Maintenance', description: 'Proactive support that keeps your digital products healthy and secure.', features: ['Monitoring', 'Updates and fixes', 'Speed optimization'] },
]

const packages = [
  { name: 'Starter', tagline: 'Build a consistent presence', price: '$199', features: ['2 social platforms', '12 posts per month', 'Branded post designs', 'Caption & hashtag writing', 'Monthly performance report'] },
  { name: 'Growth', tagline: 'Grow reach and engagement', price: '$399', popular: true, features: ['3 social platforms', '20 posts per month', '4 short-form videos', 'Community management', 'Content calendar', 'Detailed growth report'] },
  { name: 'Scale', tagline: 'Turn attention into revenue', price: '$699', features: ['4 social platforms', '30 posts per month', '8 short-form videos', 'Paid campaign management', 'Daily community support', 'Strategy call & advanced reporting'] },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-hidden">
        <section className="relative px-4 py-20 sm:px-6 md:py-28 lg:px-8 hero-grid">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="eyebrow">Digital services that move you forward</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">One partner for your brand, product & growth</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">From the software behind your business to the content your customers see, we create digital experiences built for measurable growth.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="#marketing-packages" className="button-accent">View marketing packages <ArrowRight size={18} /></Link>
              <Link href="/contact" className="button-ghost">Book a free consultation</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <span className="section-kicker">What we do</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Digital solutions, thoughtfully connected</h2>
              <p className="mt-4 text-lg text-muted-foreground">Strategy, design and technology working together—not a collection of disconnected services.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description, features }) => (
                <article key={title} className="service-card group">
                  <div className="icon-box"><Icon size={23} /></div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                    {features.map((feature) => <li key={feature} className="flex items-center gap-2.5 text-sm"><Check size={16} className="text-accent" />{feature}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#071522] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="section-kicker">New service</span>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Social media that earns attention—and action.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We plan, create and manage content that makes your brand recognizable, builds a real community and supports your sales goals.</p>
              <Link href="#marketing-packages" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">Explore packages <ArrowRight size={18} /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, title: 'Content strategy', copy: 'A clear monthly plan aligned with your audience and business goals.' },
                { icon: Sparkles, title: 'Creative production', copy: 'Branded posts, copy and short-form video made to stop the scroll.' },
                { icon: Megaphone, title: 'Community growth', copy: 'Consistent publishing and genuine engagement across your channels.' },
                { icon: BarChart3, title: 'Clear reporting', copy: 'Useful insights, not vanity metrics, so we can improve every month.' },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="border border-white/10 bg-[#020b16] p-6"><Icon className="text-accent" size={26} /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="marketing-packages" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="section-kicker">Simple monthly plans</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Social Media Marketing packages</h2>
              <p className="mt-4 text-muted-foreground">Choose a starting point. Every plan can be tailored to your platforms, audience and goals.</p>
            </div>
            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {packages.map((item) => (
                <article key={item.name} className={`price-card ${item.popular ? 'price-card-popular' : ''}`}>
                  {item.popular && <span className="popular-badge">Most popular</span>}
                  <p className="text-sm font-semibold text-accent">{item.name}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.tagline}</h3>
                  <div className="mt-6 flex items-end gap-1"><span className="text-4xl font-bold">{item.price}</span><span className="pb-1 text-sm text-muted-foreground">/ month</span></div>
                  <ul className="my-7 flex-1 space-y-3">
                    {item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm"><Check size={18} className="mt-0.5 shrink-0 text-accent" />{feature}</li>)}
                  </ul>
                  <Link href={`/contact?package=${item.name.toLowerCase()}`} className={item.popular ? 'button-accent w-full' : 'button-outline w-full'}>Choose {item.name}</Link>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">Ad spend is not included. Need something different? <Link href="/contact" className="font-semibold text-primary underline underline-offset-4">Let&apos;s build a custom plan.</Link></p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 rounded-3xl bg-primary px-7 py-12 text-center text-white md:flex-row md:px-12 md:text-left">
            <div><p className="text-sm font-semibold uppercase tracking-widest text-accent">Have a project in mind?</p><h2 className="mt-2 text-3xl font-bold">Let&apos;s turn your next idea into growth.</h2></div>
            <Link href="/contact" className="button-accent shrink-0">Start a conversation <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
