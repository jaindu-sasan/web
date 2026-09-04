import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Target, Lightbulb, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge technologies and practices.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build lasting relationships through trust and transparency.',
    },
  ]

  const team = [
    {
      name: 'Jaindu Sasan Zoysa',
      role: 'CEO & Founder',
      expertise: 'Business Strategy, Leadership & Full-Stack Development',
      image: '/jaindu-sasan-zoysa.jpeg',
    },
    {
      name: 'Savidya Fernando',
      role: 'Full-Stack Developer & Data Analytics',
      expertise: 'Full-Stack Development & Data Analytics',
      image: '/savidya-fernando.jpeg',
    },
    {
      name: 'G.S.K Gunathilake',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      image: '/gsk-gunathilake.jpeg',
    },
    {
      name: 'Thiyagarajah Kobiram',
      role: 'Full-Stack Development',
      expertise: 'Full-Stack Development',
      image: '/full-stack-development.jpeg',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="hero-grid py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="overline mb-5 text-cyan-400">Company · Culture · Approach</p>
            <h1 className="text-5xl uppercase md:text-7xl font-bold mb-6 text-white">
              About Trust Code
            </h1>
            <p className="text-lg text-slate-400">
              Building digital solutions that help businesses thrive in a connected world.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Trust Code was founded with a simple mission: to help growing businesses harness the power of modern technology. We believed that great software shouldn&apos;t be just for large corporations—every business deserves access to high-quality digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we&apos;ve worked with dozens of clients across various industries, delivering websites, business systems, and custom software solutions that have transformed their operations and driven real growth. Our commitment to quality, innovation, and customer success remains unchanged.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission & Vision</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-lg bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground">
                    To create innovative digital solutions that empower businesses to succeed in the digital age, delivering exceptional value and lasting partnerships.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground">
                    To be the trusted technology partner for growing businesses, known for our expertise, reliability, and commitment to customer success.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => {
                  const Icon = value.icon
                  return (
                    <div key={value.title} className="p-8 rounded-lg bg-card border border-border text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary-foreground" size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Clients Trust Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Expertise & Experience</h3>
                <p className="text-muted-foreground">
                  Our team brings years of experience in web development, business systems, and custom software. We&apos;ve successfully delivered projects across diverse industries and sectors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Modern Technology</h3>
                <p className="text-muted-foreground">
                  We stay current with the latest technologies and best practices, ensuring your solutions are built on solid, future-proof foundations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Client-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We take time to understand your business needs and deliver solutions tailored to your goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn&apos;t end at launch. We provide continuous support, maintenance, and enhancements to keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Talented professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={
                    member.image
                      ? 'md:col-span-2 grid gap-6 overflow-hidden rounded-lg bg-card border border-cyan-400/30 p-4 sm:p-6 md:grid-cols-[minmax(180px,260px)_1fr] md:items-center md:p-8'
                      : 'p-8 rounded-lg bg-card border border-border'
                  }
                >
                  {member.image ? (
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-background shadow-lg shadow-cyan-950/30">
                      <img
                        src={member.image}
                        alt={member.name ?? member.role}
                        className="h-full max-h-[360px] min-h-[280px] w-full object-cover object-[center_28%] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                  )}
                  <div className={member.image ? 'text-center md:text-left' : ''}>
                    {member.name ? (
                      <p className="overline mb-3 text-cyan-400">{member.role}</p>
                    ) : null}
                    <h3
                      className={
                        member.image
                          ? 'text-3xl font-bold uppercase text-foreground sm:text-4xl'
                          : 'text-lg font-bold text-foreground text-center mb-2'
                      }
                    >
                      {member.name ?? member.role}
                    </h3>
                    <p
                      className={
                        member.image
                          ? 'mt-3 text-lg font-semibold text-muted-foreground'
                          : 'text-muted-foreground text-center'
                      }
                    >
                      {member.name ? member.expertise : 'Full-Stack Developer'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
