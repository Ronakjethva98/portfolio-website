const fs = require('fs');
const filePath = 'd:\\portfolio-website\\react-portfolio\\src\\App.jsx';
let app = fs.readFileSync(filePath, 'utf8');

// Global replaces for colors
app = app.replace(/accent-purple/g, 'accent-gold');
app = app.replace(/accent-blue/g, 'accent-amber');

// Selection replace
app = app.replace('selection:bg-accent-gold selection:text-white', 'selection:bg-accent-gold selection:text-background');

// specific replacements for animations and hover effects
app = app.replace(
  '<button\n              className="absolute top-5 right-6 text-white hover:text-accent-gold transition-all hover:rotate-90 duration-300"\n              onClick={() => setMobileMenuOpen(false)}\n            >',
  '<button\n              className="absolute top-5 right-6 text-white hover:text-accent-gold transition-all hover:rotate-90 duration-300 hover:scale-110"\n              onClick={() => setMobileMenuOpen(false)}\n            >'
);

app = app.replace(
  'className="hover:text-accent-gold transition-colors relative group text-white"',
  'className="hover:text-accent-gold transition-colors relative group text-white hover:scale-110 inline-block transform"'
);

app = app.replace(
  '<a href="https://github.com/Ronakjethva98" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaGithub size={24} /></a>\n              <a href="https://www.linkedin.com/in/ronak-jethva-9345a933b/" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaLinkedin size={24} /></a>\n              <a href="https://www.instagram.com/ronak_jethva90/?hl=en" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaInstagram size={24} /></a>',
  '<motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://github.com/Ronakjethva98" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaGithub size={24} /></motion.a>\n              <motion.a whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/ronak-jethva-9345a933b/" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaLinkedin size={24} /></motion.a>\n              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/ronak_jethva90/?hl=en" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-gold transition-colors"><FaInstagram size={24} /></motion.a>'
);

app = app.replace(
  '<div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center shadow-lg shadow-accent-gold/20">\n              <span className="text-xs text-white font-bold">R</span>\n            </div>',
  '<motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center shadow-lg shadow-accent-gold/20">\n              <span className="text-xs text-background font-bold">R</span>\n            </motion.div>'
);

app = app.replace(
  '<a href="#contact" className="hidden md:inline-block bg-primary text-background px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-white/10 font-semibold">\n              {t(\'nav.contact\')}\n            </a>',
  '<motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.95 }} href="#contact" className="hidden md:inline-block bg-accent-gold text-background px-5 py-2 rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent-gold/20 font-semibold text-sm">\n              {t(\'nav.contact\')}\n            </motion.a>'
);

app = app.replace(
  '<span className="text-accent-gold italic">{t(\'hero.title2\')}</span>',
  '<span className="text-accent-gold italic text-glow-gold">{t(\'hero.title2\')}</span>'
);

app = app.replace(
  '<a href="#projects" className="group relative w-full sm:w-auto px-10 py-4 bg-primary text-background font-sans font-semibold text-sm uppercase tracking-wider hover:bg-accent-gold transition-colors duration-500 flex items-center justify-center gap-3">\n              {t(\'hero.explore\')}\n              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />\n            </a>',
  '<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="group relative w-full sm:w-auto px-10 py-4 bg-accent-gold text-background font-sans font-semibold text-sm uppercase tracking-wider hover:bg-accent-light transition-all duration-300 flex items-center justify-center gap-3 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">\n              {t(\'hero.explore\')}\n              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />\n            </motion.a>'
);

app = app.replace(
  '<a href="#contact" className="w-full sm:w-auto px-10 py-4 border border-white/20 text-primary font-sans font-medium text-sm uppercase tracking-wider hover:border-accent-gold hover:text-accent-gold transition-colors duration-500 flex items-center justify-center text-center">\n              {t(\'hero.getInTouch\')}\n            </a>',
  '<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="w-full sm:w-auto px-10 py-4 border border-accent-gold/50 text-primary font-sans font-medium text-sm uppercase tracking-wider hover:border-accent-gold hover:text-accent-gold transition-all duration-300 flex items-center justify-center text-center rounded-sm hover:bg-accent-gold/10">\n              {t(\'hero.getInTouch\')}\n            </motion.a>'
);

app = app.replace(
  '<span className="not-italic text-accent-gold">{t(\'projects.title2\')}</span></h2>',
  '<span className="not-italic text-accent-gold text-glow-gold">{t(\'projects.title2\')}</span></h2>'
);

app = app.replace(
  '<a href="#" className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-wider text-primary hover:text-accent-gold transition-colors group/link w-fit">\n                    <span className="border-b border-accent-gold/0 group-hover/link:border-accent-gold transition-colors pb-1">View Project</span>\n                    <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />\n                  </a>',
  '<motion.a whileHover={{ x: 10 }} href="#" className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-wider text-primary hover:text-accent-gold transition-colors group/link w-fit">\n                    <span className="border-b border-accent-gold/0 group-hover/link:border-accent-gold transition-colors pb-1">View Project</span>\n                    <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-accent-gold" />\n                  </motion.a>'
);

app = app.replace(
  '<span className="text-accent-gold italic">{t(\'about.title2\')}</span>',
  '<span className="text-accent-gold italic text-glow-gold">{t(\'about.title2\')}</span>'
);

app = app.replace(
  '<p className="pl-6 border-l border-accent-gold italic">\n                  "Excellence is not an act, but a habit. I strive to bring a touch of elegance to everything I build."\n                </p>',
  '<motion.p whileHover={{ x: 5, color: "#fff" }} className="pl-6 border-l-2 border-accent-gold italic transition-colors">\n                  "Excellence is not an act, but a habit. I strive to bring a touch of elegance to everything I build."\n                </motion.p>'
);

app = app.replace(
  /<li key={i} className="flex justify-between items-center text-lg font-light border-b border-white\/5 pb-4">\s*<span>{item}<\/span>\s*<span className="text-accent-gold text-xl leading-none">&middot;<\/span>\s*<\/li>/g,
  '<motion.li whileHover={{ x: 10, color: "#d4af37" }} key={i} className="flex justify-between items-center text-lg font-light border-b border-white/5 pb-4 transition-colors cursor-default">\n                      <span>{item}</span>\n                      <span className="text-accent-gold text-xl leading-none">&middot;</span>\n                    </motion.li>'
);

app = app.replace(
  '<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">\n              <Mail className="text-primary" size={28} />\n            </div>',
  '<motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.8 }} className="w-16 h-16 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">\n              <Mail className="text-accent-gold" size={28} />\n            </motion.div>'
);

app = app.replace(
  '<button type="submit" className="w-full bg-primary text-background font-sans font-semibold uppercase tracking-wider py-4 mt-4 hover:bg-accent-gold hover:text-white transition-colors duration-300">\n                Send Inquiry\n              </button>',
  '<motion.button whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-accent-gold text-background font-sans font-semibold uppercase tracking-wider py-4 mt-4 hover:bg-accent-light transition-all duration-300 rounded-sm">\n                Send Inquiry\n              </motion.button>'
);

app = app.replace(
  /<input type="text" name="user_name" required className="w-full bg-transparent border-b border-white\/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary" \/>/g,
  '<input type="text" name="user_name" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary focus:bg-white/5" />'
);
app = app.replace(
  /<input type="email" name="user_email" required className="w-full bg-transparent border-b border-white\/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary" \/>/g,
  '<input type="email" name="user_email" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary focus:bg-white/5" />'
);
app = app.replace(
  /<textarea name="user_message" required rows="3" className="w-full bg-transparent border-b border-white\/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary resize-none"><\/textarea>/g,
  '<textarea name="user_message" required rows="3" className="w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-accent-gold transition-colors text-primary resize-none focus:bg-white/5"></textarea>'
);

app = app.replace(
  '<a href="https://github.com/Ronakjethva98?tab=repositories" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><FaGithub size={20} /></a>\n            <a href="https://www.linkedin.com/in/ronak-jethva-9345a933b/" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><FaLinkedin size={20} /></a>\n            <a href="https://www.instagram.com/ronak_jethva90/?hl=en" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><FaInstagram size={20} /></a>',
  '<motion.a whileHover={{ y: -5, color: "#d4af37" }} href="https://github.com/Ronakjethva98?tab=repositories" target="_blank" rel="noreferrer" className="text-secondary transition-colors"><FaGithub size={24} /></motion.a>\n            <motion.a whileHover={{ y: -5, color: "#d4af37" }} href="https://www.linkedin.com/in/ronak-jethva-9345a933b/" target="_blank" rel="noreferrer" className="text-secondary transition-colors"><FaLinkedin size={24} /></motion.a>\n            <motion.a whileHover={{ y: -5, color: "#d4af37" }} href="https://www.instagram.com/ronak_jethva90/?hl=en" target="_blank" rel="noreferrer" className="text-secondary transition-colors"><FaInstagram size={24} /></motion.a>'
);

fs.writeFileSync(filePath, app, 'utf8');
console.log('Done replacing App.jsx');
