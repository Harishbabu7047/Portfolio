import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone,
  MessageCircle,
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { personalConfig } from '../config';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-dark-850/60 border-t border-slate-200/80 dark:border-white/5 transition-colors">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            <MessageSquare className="w-4 h-4" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">
            I'm currently looking for opportunities in Software Development and GenAI.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5 shadow-sm dark:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Phone & WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 space-y-2.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Phone & WhatsApp</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 hover:underline transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <a
                    href={`tel:${personalConfig.phoneTel}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-mono transition-colors"
                  >
                    {personalConfig.phone}
                  </a>

                  <div className="flex items-center gap-2">
                    {/* Call Button */}
                    <a
                      href={`tel:${personalConfig.phoneTel}`}
                      title="Call directly"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-750 dark:hover:bg-dark-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors border border-slate-200 dark:border-white/10"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>Call</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href={personalConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition-colors border border-emerald-500/30"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Primary Email</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 hover:underline transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${personalConfig.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors truncate"
                  >
                    {personalConfig.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 space-y-1 shadow-xs">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Current Location</span>
                <div className="flex items-center gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalConfig.location}
                  </span>
                </div>
              </div>

              {/* Direct Profile Buttons (Active Links) */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase block">
                  Quick Actions
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <a
                    href={`mailto:${personalConfig.email}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>

                  <a
                    href={personalConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${personalConfig.phoneTel}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-dark-750 dark:hover:bg-dark-700 text-white font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={personalConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs hover:border-blue-500 transition-all shadow-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={personalConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 sm:col-span-2 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs hover:border-cyan-500 transition-all shadow-xs"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Email Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm dark:shadow-xl text-left"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Pre-populates your email client
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  Subject / Opportunity Type
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="e.g. GenAI Developer Opportunity / Software Developer Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Hello Harishbabu, we reviewed your projects and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Harishbabu</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
