'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('uwgBX3gbjsd25vfaH');
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback('');

    try {
      await emailjs.send(
        'service_g0kd4zl',
        'template_zcua58l',
        {
          to_email: 'raohasnaintofeeq@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      setFeedback('✅ Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFeedback('❌ Failed to send email. Please try again.');
      console.error('Email error:', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setSending(false);
    }
  };

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Material UI', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT'] },
    { category: 'Database', items: ['MongoDB', 'Mongoose', 'Firebase', 'SQL'] },
    { category: 'Tools & Version Control', items: ['Git', 'GitHub', 'VS Code', 'npm/yarn', 'Postman'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Team Collaboration', 'Agile/Scrum'] },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack MERN e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'JWT'],
    },
    {
      title: 'Real-time Chat Application',
      description: 'Developed a real-time messaging app with user authentication, room management, and socket.io integration for live updates.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    },
    {
      title: 'Task Management API & Dashboard',
      description: 'Created a full-stack task management system with RESTful API backend and interactive React frontend with real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Material UI'],
    },
  ];

  const experience = [
    { role: 'Senior MERN Stack Developer', company: 'Tech Company', period: '2024 - Present', desc: 'Leading full-stack development and architecting scalable MERN applications.' },
    { role: 'MERN Stack Developer', company: 'Digital Agency', period: '2022 - 2024', desc: 'Developed and maintained full-stack applications with Node.js backend and React frontend.' },
    { role: 'Junior Developer', company: 'Startup', period: '2021 - 2022', desc: 'Built React components and assisted with backend API development using Express.js.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>
            
            {/* Desktop Menu */}
            <div className="hidden sm:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="sm:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">Hasnain Tofeeq</h2>
              <p className="text-2xl sm:text-3xl font-semibold mb-4 text-white/90">MERN Stack Developer</p>
              <p className="text-xl mb-8 text-white/95">
                Building scalable and dynamic web applications with MongoDB, Express.js, React, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                  Download CV
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-96 h-full overflow-hidden rounded-lg border-4 border-white shadow-xl">
                <Image src="/IMG-20230601-WA0023.jpg" alt="Hasnain Tofeeq" width={384} height={480} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                I'm a frontend developer with <strong>2+ years</strong> of market experience building dynamic and responsive web applications. Passionate about clean code, user experience, and continuous learning.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                My expertise spans modern frontend technologies including React, Next.js, TypeScript, and Material UI. I focus on creating performant applications optimized for Vercel deployment and excellent Core Web Vitals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-600">2+ years as Frontend Developer</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Focus Areas</h4>
                  <p className="text-gray-600">React, Next.js, UI Components, Performance Optimization</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Remote / Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 border border-gray-300 rounded-full text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-4">{skillGroup.category}</h4>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, idx) => {
                    const proficiency = 85 + (skill.charCodeAt(0) % 15);
                    return (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-900">{skill}</span>
                          <span className="text-sm text-gray-600">{proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Get In Touch</h3>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-6 text-center">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              {feedback && <p className="text-center font-medium text-gray-700">{feedback}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {sending ? 'Sending...' : '✉️ Send Message'}
              </button>
            </form>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/raohasnaintofeeq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 transition inline-block text-center"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hasnain-ali-362899212/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 transition inline-block text-center"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-gray-400">© 2026 Frontend Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}
