import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Code2, Layers, Zap, ShoppingCart, Palette, Wrench, Check } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Build stunning, responsive websites that engage your audience and drive conversions.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Modern Technologies'],
    },
    {
      icon: Layers,
      title: 'Business System Development',
      description: 'Custom-built systems to streamline operations, improve efficiency, and scale your business.',
      features: ['Custom Solutions', 'Integration Support', 'Scalable Architecture', 'Data Security'],
    },
    {
      icon: Zap,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed specifically for your unique business challenges.',
      features: ['Custom Development', 'Cloud-Ready', 'High Performance', 'Maintenance Support'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      description: 'Powerful e-commerce platforms that drive sales and provide great customer experience.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Analytics'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love and that drive business results.',
      features: ['User Research', 'Wireframing', 'Prototype Design', 'User Testing'],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your systems running smoothly and securely.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates & Patches', 'Performance Optimization'],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1F3A' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Our Services
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Comprehensive solutions for all your digital and business needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#20B2AA' }}>
                      <Icon style={{ color: '#FFFFFF' }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check size={18} style={{ color: '#20B2AA' }} className="flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                How we deliver exceptional results for every project
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Discovery & Planning',
                  description: 'We understand your business needs, goals, and challenges to create a solid foundation.',
                },
                {
                  step: '2',
                  title: 'Design & Prototyping',
                  description: 'We create detailed designs and prototypes to validate ideas before development.',
                },
                {
                  step: '3',
                  title: 'Development & Implementation',
                  description: 'Our expert developers build your solution using modern technologies and best practices.',
                },
                {
                  step: '4',
                  title: 'Testing & Quality Assurance',
                  description: 'Thorough testing ensures your solution is reliable, secure, and performs excellently.',
                },
                {
                  step: '5',
                  title: 'Launch & Deployment',
                  description: 'We smoothly launch your solution and provide full support during the transition.',
                },
                {
                  step: '6',
                  title: 'Support & Maintenance',
                  description: 'Ongoing support and updates keep your solution running smoothly and securely.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contact us today for a free consultation and let&apos;s discuss which service is perfect for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
