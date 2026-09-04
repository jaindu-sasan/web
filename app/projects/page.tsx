import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'QINZI',
      category: 'eCommerce Website',
      description: 'A luxury retail storefront for clothing, slippers, jewellery, and custom designs.',
      image: 'https://qinzi-iota.vercel.app/cloth1.jpeg',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'v0'],
      url: 'https://qinzi-iota.vercel.app/',
    },
    {
      title: 'WSK Business Services',
      category: 'Corporate Website',
      description: 'A professional accounting and tax services website with service pages, a tax calculator, consultation flow, and online payment portal.',
      image: 'https://w-s-k-business-services.vercel.app/images/hero-business1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'v0'],
      url: 'https://w-s-k-business-services.vercel.app/',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="hero-grid py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="overline mb-5 text-cyan-400">Selected · Digital · Work</p>
            <h1 className="text-5xl uppercase md:text-7xl font-bold mb-6 text-white">
              Our Projects
            </h1>
            <p className="text-lg text-slate-400">
              Explore some of our recent work and see what we can build for you
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Technologies:</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                      >
                        View Details <ExternalLink className="ml-2" size={16} />
                      </a>
                    ) : (
                      <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                        View Details <ExternalLink className="ml-2" size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a Similar Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your ideas and how we can help bring them to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
