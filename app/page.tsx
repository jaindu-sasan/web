import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Code2, Zap, Shield, Layers, Users, CheckCircle } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies.',
    },
    {
      icon: Layers,
      title: 'Business Systems',
      description: 'Custom-built systems to streamline your business operations.',
    },
    {
      icon: Zap,
      title: 'Custom Software',
      description: 'Tailored software solutions for your unique business needs.',
    },
  ]

  const reasons = [
    {
      title: 'Expert Team',
      description: 'Our experienced developers deliver high-quality solutions.',
    },
    {
      title: 'Modern Tech',
      description: 'We use cutting-edge technologies and best practices.',
    },
    {
      title: 'On-Time Delivery',
      description: 'Projects completed efficiently and within timeline.',
    },
    {
      title: '24/7 Support',
      description: 'Continuous support and maintenance for your solutions.',
    },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e65e9b31?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Inventory Management System',
      category: 'Business Systems',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'React'],
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1F3A' }}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Build Better Websites, Systems & Software Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Trust Code helps growing businesses create powerful digital solutions. From stunning websites to complex business systems, we deliver modern software that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#20B2AA', color: '#FFFFFF' }}
              >
                View Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#0B1F3A' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for all your digital needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#20B2AA' }}>
                      <Icon style={{ color: '#FFFFFF' }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Trust Code?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re committed to delivering exceptional results that help your business grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore some of our latest work and see what we can do for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
                    >
                      View Project <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                View All Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1F3A' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Ready to Get Started?</h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Contact us today for a free consultation. Let&apos;s discuss how we can help bring your digital vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#20B2AA', color: '#FFFFFF' }}
            >
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
