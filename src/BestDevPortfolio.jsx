import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Github, Linkedin, Code, Briefcase, Menu, X } from "lucide-react";

export default function BestDevPortfolio() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  const projects = [
    {
      id: 1,
      title: "Suivi Badge — Application complète",
      desc: "React + Node.js + MySQL — Auth LDAP, sync Access, dashboard de gestion",
      tech: ["React", "Node", "MySQL"],
      year: 2025,
    },
    {
      id: 2,
      title: "API RESTful pour gestion RH",
      desc: "Laravel / PHP — API sécurisée, tests unitaires, documentation OpenAPI",
      tech: ["Laravel", "PHP"],
      year: 2024,
    },
    {
      id: 3,
      title: "Outil d'analyse réseau",
      desc: "Python & Grafana — pipeline ETL + dashboards temps réel",
      tech: ["Python", "Grafana"],
      year: 2023,
    },
  ];

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'}`}>
      {/* CHANGEMENT : w-full au lieu de max-w-6xl, padding réduit sur mobile */}
      <div className="w-full px-3 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-4 sm:py-8 lg:py-12">
        
        {/* NAV */}
        <nav className="flex items-center justify-between mb-6 sm:mb-10 lg:mb-12 relative">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md flex-shrink-0">
              <User size={18} className="sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base truncate">Ton Nom</div>
              <div className="text-xs opacity-70 hidden sm:block">Dev Fullstack • Network Admin</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Projets</a>
            <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">À propos</a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <button onClick={toggleTheme} className="ml-2 px-3 py-2 rounded-md border opacity-80 hover:opacity-100 transition-all">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-1">
            <button onClick={toggleTheme} className="p-2 rounded-md border opacity-80 text-xs">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border opacity-80"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute top-full right-0 mt-2 w-40 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} border border-white/20 rounded-lg p-3 z-50 md:hidden shadow-xl`}
            >
              <div className="flex flex-col gap-1">
                <a href="#projects" className="text-sm py-2 px-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>Projets</a>
                <a href="#about" className="text-sm py-2 px-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>À propos</a>
                <a href="#contact" className="text-sm py-2 px-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </nav>

        {/* HERO - padding réduit sur mobile */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center mb-10 lg:mb-16">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 8 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
            >
              Je suis un développeur qui construit des produits{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                visibles
              </span>.
            </motion.h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg opacity-80">
              Je crée des interfaces claires, des API robustes et des pipelines fiables.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 items-center">
              <a className="px-3 sm:px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 font-medium text-sm sm:text-base" href="#projects">
                Voir mes projets
              </a>
              <a className="px-3 py-2 rounded-md border flex items-center gap-1 text-xs sm:text-sm" href="#contact">
                <Mail size={14} /> Contact
              </a>
              <a className="px-3 py-2 rounded-md border flex items-center gap-1 text-xs sm:text-sm" href="/resume.pdf" download>
                <Briefcase size={14} /> CV
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm opacity-80">
              <span>React</span>•<span>Laravel</span>•<span>Node.js</span>•<span>Python</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 flex items-center justify-center shadow-xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <User size={28} className="sm:w-10 sm:h-10" />
                </div>
                <div className="font-semibold text-xs sm:text-sm">Joueur de Badminton</div>
                <div className="text-xs opacity-70 mt-1">M2 Informatique</div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* PROJECTS */}
        <section id="projects" className="mb-10 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8">Projets sélectionnés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {projects.map(p => (
              <motion.article 
                key={p.id} 
                whileHover={{ y: -4 }} 
                className="p-3 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{p.title}</h3>
                    <p className="text-xs sm:text-sm opacity-80 mt-1 line-clamp-2">{p.desc}</p>
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/10 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs opacity-60">{p.year}</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <a className="px-2 sm:px-3 py-1 rounded bg-indigo-600/80 text-xs" href="#">Demo</a>
                  <a className="px-2 sm:px-3 py-1 rounded border text-xs" href="#">Code</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-10 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8">Approche</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="p-3 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-sm sm:text-base">Problème → Solution → Résultat</h3>
              <ol className="mt-2 sm:mt-4 list-decimal pl-4 text-xs sm:text-sm opacity-80 space-y-1">
                <li>Comprendre le besoin métier</li>
                <li>Architecture modulaire et testable</li>
                <li>Itérations rapides et mesure d'impact</li>
              </ol>
            </div>
            <div className="p-3 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-sm sm:text-base">Stack & process</h3>
              <p className="text-xs sm:text-sm opacity-80 mt-2">
                Tests, CI/CD, code review, monitoring. GitHub Actions, Docker.
              </p>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="mb-10 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8">Ressources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            <a className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm" href="#">Optimiser les requêtes SQL</a>
            <a className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm" href="#">Guide déploiement Laravel</a>
            <a className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm" href="#">Monitoring avec Grafana</a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-8 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-sm sm:text-base">Disponible</h3>
              <p className="text-xs sm:text-sm opacity-80 mt-1">Freelance et CDI</p>
              <div className="mt-3 sm:mt-4 flex flex-col gap-2">
                <a className="px-3 py-2 rounded bg-indigo-600/80 flex items-center gap-2 text-xs sm:text-sm" href="#"><Mail size={14} /> Email</a>
                <a className="px-3 py-2 rounded border flex items-center gap-2 text-xs sm:text-sm" href="#"><Github size={14} /> GitHub</a>
                <a className="px-3 py-2 rounded border flex items-center gap-2 text-xs sm:text-sm" href="#"><Linkedin size={14} /> LinkedIn</a>
              </div>
            </div>

            <div className="lg:col-span-2 p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message envoyé !'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <input required placeholder="Nom" className="p-2 sm:p-3 rounded border bg-transparent text-sm" />
                  <input required placeholder="Email" type="email" className="p-2 sm:p-3 rounded border bg-transparent text-sm" />
                  <input placeholder="Sujet" className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:col-span-2" />
                  <textarea placeholder="Message" rows={3} className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:col-span-2" />
                </div>
                <div className="mt-3 sm:mt-4 flex gap-2">
                  <button type="submit" className="px-3 sm:px-4 py-2 rounded bg-indigo-600/80 text-sm">Envoyer</button>
                  <button type="reset" className="px-3 sm:px-4 py-2 rounded border text-sm">Annuler</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs opacity-60 pb-4">
          © 2025 — Portfolio
        </footer>
      </div>
    </div>
  );
}