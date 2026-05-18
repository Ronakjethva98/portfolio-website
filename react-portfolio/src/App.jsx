import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Zap, Terminal, ChevronDown, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Preloader Component (Eagle Byte Style)
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="w-full max-w-sm px-6">
        <h1 className="text-3xl font-bold text-center mb-8 tracking-tight text-white">RONAK <span className="text-gradient-cyan">JETHVA</span></h1>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative mb-2">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-xs text-gray-400 font-semibold tracking-widest uppercase">
          <span>Loading Experience</span>
          <span className="text-cyan-400">{progress > 100 ? 100 : progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

// Eagle Byte Style Hover Card
const EagleCard = ({ children, className, mouseX, mouseY }) => {
  const ref = useRef(null);
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (ref.current) setRect(ref.current.getBoundingClientRect());
    const updateRect = () => { if (ref.current) setRect(ref.current.getBoundingClientRect()); };
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  const relativeX = useTransform(mouseX, (x) => rect ? x - rect.left : 0);
  const relativeY = useTransform(mouseY, (y) => rect ? y - rect.top : 0);

  const borderBackground = useMotionTemplate`radial-gradient(500px circle at ${relativeX}px ${relativeY}px, rgba(34,211,238,0.4), transparent 40%)`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      ref={ref} 
      className={`relative rounded-3xl glass-card overflow-hidden group transition-all duration-500 hover:shadow-[0_8px_30px_rgb(34,211,238,0.12)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
        style={{ background: borderBackground, padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
      >
        <div className="w-full h-full rounded-3xl bg-[#030712]" />
      </motion.div>
      <div className="relative z-30 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const projects = [
    {
      title: "Biometric Billing System",
      desc: "Developed a secure online shopping and billing system with biometric face authentication for login, checkout, and warranty claims. Features mock payment gateways and email verification.",
      tech: ["Python & Flask", "OpenCV Authentication", "MySQL Database", "Responsive HTML5/CSS3 UI"],
      icon: <Terminal className="w-8 h-8 text-cyan-400" />,
      image: "/first-project.png"
    },
    {
      title: "Business Listing Platform",
      desc: "A full-stack web platform connecting local businesses with customers. Features include a multi-role user system, dynamic advertisement rotation, and real-time B2C inquiry notifications.",
      tech: ["PHP Backend Engine", "MySQL Architecture", "Custom Glassmorphism UI", "Multi-role Authorization"],
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      image: "/business-listing.png"
    },
    {
      title: "Tulsi Restaurant Web App",
      desc: "A highly interactive, premium web interface modernizing the digital dining experience. Features a beautifully categorized dynamic menu and a fully functional table reservation system.",
      tech: ["React.js Frontend", "Node.js & Express Backend", "Swiper.js Carousels", "Advanced Scroll Animations"],
      icon: <ArrowUpRight className="w-8 h-8 text-cyan-400" />,
      image: "/tulsi-restaurant.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 relative selection:bg-cyan-500/30 selection:text-cyan-50">
      
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Eagle Byte Background Grid & Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating 3D Shapes (Hero Section only) */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] md:top-[15%] left-[5%] md:left-[10%] w-24 md:w-32 h-24 md:h-32 rounded-full border-[4px] border-cyan-400/30 bg-cyan-400/5 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.2)]" />
        <motion.div animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[65%] md:top-[60%] left-[10%] md:left-[20%] w-16 md:w-24 h-16 md:h-24 rounded-3xl rotate-45 border-[2px] border-white/20 bg-white/5 backdrop-blur-md shadow-2xl" />
        <motion.div animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] md:top-[30%] right-[5%] md:right-[15%] w-28 md:w-40 h-28 md:h-40 rounded-full border border-indigo-400/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]" />
        <motion.div animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[75%] md:top-[70%] right-[5%] md:right-[10%] w-16 md:w-20 h-16 md:h-20 border-[1px] border-cyan-400/50 bg-transparent" style={{ transform: 'perspective(500px) rotateX(60deg) rotateZ(45deg)' }} />
      </div>

      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-950/50 flex items-center justify-center border border-cyan-500/30">
              <span className="text-cyan-400 text-sm">R</span>
            </div>
            Ronak Jethva
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors relative group">
              Featured Work
              <span className="absolute -bottom-6 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-t opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#contact" className="glow-button px-6 py-2.5 rounded-full font-bold text-sm ml-4 transition-all uppercase tracking-wider">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 w-full glass-card border-t-0 flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl overflow-hidden"
            >
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan-400">Featured Work</a>
              <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan-400">Expertise</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan-400">Contact</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="glow-button px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider mt-2">
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            Premium Web Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-tight mb-6 max-w-4xl text-white">
            Engineering Premium <br />
            <span className="text-gradient-cyan">Digital Experiences</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            I deliver top-tier full-stack development, custom web applications, and premium UI/UX architectures to help you outrank the competition.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex gap-4">
            <a href="#services" className="glow-button px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              Explore Work <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* Featured Work (Eagle Byte Services Style) */}
        <section id="services" className="container mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient-cyan">Projects</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">High-performance applications built with modern architectural standards.</p>
          </div>

          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <EagleCard key={idx} mouseX={mouseX} mouseY={mouseY} className="w-full">
                <div className="flex flex-col lg:flex-row h-full">
                  
                  {/* Left Side: Info & Image */}
                  <div className="lg:w-7/12 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 relative group/img">
                    <div className="h-64 overflow-hidden relative">
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-90 group-hover/img:opacity-60 transition-opacity duration-500" />
                    </div>
                    <div className="px-10 md:px-14 pb-14 -mt-10 relative z-10 flex flex-col flex-1">

                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-lg mb-8">{project.desc}</p>
                      <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition-colors mt-auto">
                        View Live Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Side: "What's Included" Tech Stack */}
                  <div className="lg:w-5/12 p-10 md:p-14 bg-[#0a0f1c]/30 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">Technologies Included:</h4>
                    <ul className="space-y-6">
                      {project.tech.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-4">
                          <div className="mt-1">
                            <Zap className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                          </div>
                          <span className="text-gray-300 font-medium">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </EagleCard>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core <span className="text-gradient-cyan">Expertise</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specialized skills driving robust and scalable digital solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Frontend Engineering", desc: "Building highly interactive, premium user interfaces with React, Framer Motion, and Tailwind CSS." },
              { step: "02", title: "Backend Architecture", desc: "Developing secure and scalable server-side systems using Node.js, Python Flask, and PHP." },
              { step: "03", title: "Database & Systems", desc: "Designing optimized data schemas and managing complex relationships with MySQL and modern ORMs." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card p-8 rounded-2xl border-t border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-shadow"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-indigo-500/10 mb-4">{p.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-20 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center border border-cyan-500/20 shadow-[0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-[-50%] left-[20%] w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to start your <br/><span className="text-gradient-cyan">next project?</span></h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">Let's build something extraordinary together. Reach out today to discuss your vision.</p>
            <a href="mailto:ronakjethva98@gmail.com" className="glow-button px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 relative z-10">
              Get In Touch <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

      </main>

      {/* Floating Widgets */}
      <div className="fixed bottom-12 right-6 md:right-8 z-[9999] flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/ronak-jethva-9345a933b/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#0077b5] flex items-center justify-center text-white pulse-cyan hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,119,181,0.5)]">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="mailto:ronakjethva98@gmail.com" className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white pulse-purple hover:scale-110 transition-transform shadow-[0_0_20px_rgba(79,70,229,0.5)]">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://github.com/Ronakjethva98" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <FaGithub className="w-7 h-7" />
        </a>
      </div>

      <footer className="border-t border-white/5 py-12 text-center text-gray-500 relative z-0 bg-[#030712]">
        <div className="container mx-auto px-6">
          <p className="font-semibold text-sm tracking-wider uppercase mb-2">&copy; {new Date().getFullYear()} Ronak Jethva</p>
          <p className="text-xs">Premium Web Solutions built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
