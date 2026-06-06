'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1F3A' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Get In Touch
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Ready to start your next project? Let&apos;s talk about what we can build together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Thank you! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="business">Business Systems</option>
                      <option value="software">Custom Software</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="design">UI/UX Design</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 hover:opacity-90"
                    style={{ backgroundColor: '#20B2AA', color: '#FFFFFF' }}
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@trustcode.com" className="text-primary hover:text-primary/80 transition-colors">
                        info@trustcode.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Tech Street<br />
                        Innovation City, IC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-card border border-border">
                    <h3 className="font-bold text-foreground mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-card border border-border">
                    <h3 className="font-bold text-foreground mb-3">WhatsApp Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Chat with us on WhatsApp for quick assistance.
                    </p>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-sm"
                    >
                      Open WhatsApp
                    </a>
                  </div>

                  <div className="p-6 rounded-lg bg-primary text-primary-foreground">
                    <h3 className="font-bold mb-3">Free Consultation</h3>
                    <p className="text-sm text-primary-foreground/90">
                      Unsure about your project requirements? Schedule a free 30-minute consultation with our experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
