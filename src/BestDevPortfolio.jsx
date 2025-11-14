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
    <div className={theme === 'dark' ? 'min-h-screen bg-[#0b1220] text-white' : 'min-h-screen bg-white text-slate-900'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
              <User size={20} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">Ton Nom</div>
              <div className="text-xs opacity-70 hidden xs:block">Dev Fullstack • Network Admin • M2 Informatique</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Projets</a>
            <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">À propos</a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <button onClick={toggleTheme} className="ml-2 px-3 py-2 rounded-md border opacity-80 hover:opacity-100 transition-all">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-md border opacity-80">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border opacity-80"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-20 right-4 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 z-50 md:hidden"
            >
              <div className="flex flex-col gap-3">
                <a 
                  href="#projects" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projets
                </a>
                <a 
                  href="#about" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À propos
                </a>
                <a 
                  href="#contact" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </nav>

        {/* HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-12 lg:mb-16">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 8 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Je suis un développeur qui construit des produits{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                visibles
              </span>.
            </motion.h1>
            <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl">
              Je crée des interfaces claires, des API robustes et des pipelines fiables. 
              J'aime le badminton, la performance et l'optimisation — autant dans le code que sur le court.
            </p>

            <div className="mt-6 flex flex-col xs:flex-row gap-3 items-start xs:items-center">
              <a className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 font-medium hover:shadow-lg transition-all" href="#projects">
                Voir mes projets
              </a>
              <div className="flex gap-2">
                <a className="px-3 py-2 rounded-md border flex items-center gap-2 text-sm hover:bg-white/5 transition-all" href="#contact">
                  <Mail size={16} /> Contact
                </a>
                <a className="px-3 py-2 rounded-md border flex items-center gap-2 text-sm hover:bg-white/5 transition-all" href="/resume.pdf" download>
                  <Briefcase size={16} /> CV
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm opacity-80">
              <span>React</span>•<span>Laravel</span>•<span>Node.js</span>•<span>C/C++</span>•<span>Python</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/6 flex items-center justify-center shadow-xl"
            >
              <div className="text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <User size={40} className="sm:w-12 sm:h-12" />
                </div>
                <div className="font-semibold text-sm sm:text-base">Joueur de Badminton</div>
                <div className="text-xs sm:text-sm opacity-70 mt-1">M2 Informatique — CNTEMAD</div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* PROJECTS */}
        <section id="projects" className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Projets sélectionnés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map(p => (
              <motion.article 
                key={p.id} 
                whileHover={{ y: -4 }} 
                className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">{p.title}</h3>
                    <p className="text-xs sm:text-sm opacity-80 mt-1 sm:mt-2">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1 sm:gap-2 text-xs">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-1 rounded bg-white/6 opacity-80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm opacity-60 whitespace-nowrap">{p.year}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a className="px-3 py-1 rounded bg-indigo-600/80 text-xs sm:text-sm hover:bg-indigo-500 transition-all" href="#">
                    Demo
                  </a>
                  <a className="px-3 py-1 rounded border text-xs sm:text-sm hover:bg-white/5 transition-all" href="#">
                    Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CASE STUDY / DETAILS */}
        <section id="about" className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Études de cas & approche</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-xl bg-white/5 border">
              <h3 className="font-semibold text-sm sm:text-base">Problème → Solution → Résultat</h3>
              <ol className="mt-3 sm:mt-4 list-decimal pl-5 text-xs sm:text-sm opacity-80 space-y-2">
                <li>Comprendre le besoin métier et les contraintes techniques</li>
                <li>Définir une architecture modulaire et testable</li>
                <li>Livrer des itérations rapides et mesurer l'impact</li>
              </ol>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/5 border">
              <h3 className="font-semibold text-sm sm:text-base">Stack & process</h3>
              <p className="text-xs sm:text-sm opacity-80 mt-2 sm:mt-3">
                Tests unitaires, CI/CD, code review, monitoring, et documentation. 
                J'utilise GitHub Actions, Docker et des pipelines simples pour livrer en production de manière fiable.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG / LINKS */}
        <section className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Ressources & articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <a className="p-4 sm:p-6 rounded-xl bg-white/5 border hover:shadow-lg transition-all block text-sm sm:text-base" href="#">
              Optimiser les requêtes SQL — Guide
            </a>
            <a className="p-4 sm:p-6 rounded-xl bg-white/5 border hover:shadow-lg transition-all block text-sm sm:text-base" href="#">
              Guide déploiement Laravel
            </a>
            <a className="p-4 sm:p-6 rounded-xl bg-white/5 border hover:shadow-lg transition-all block text-sm sm:text-base" href="#">
              Monitoring réseau avec Grafana
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 p-4 sm:p-6 rounded-xl bg-white/5 border">
              <h3 className="font-semibold text-sm sm:text-base">Disponible pour discuter</h3>
              <p className="text-xs sm:text-sm opacity-80 mt-2">
                Missions freelance et CDI. Parlons-en !
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
                <a className="px-3 py-2 rounded bg-indigo-600/80 flex items-center gap-2 text-xs sm:text-sm hover:bg-indigo-500 transition-all" href="#">
                  <Mail size={16} /> Email
                </a>
                <a className="px-3 py-2 rounded border flex items-center gap-2 text-xs sm:text-sm hover:bg-white/5 transition-all" href="#">
                  <Github size={16} /> GitHub
                </a>
                <a className="px-3 py-2 rounded border flex items-center gap-2 text-xs sm:text-sm hover:bg-white/5 transition-all" href="#">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 p-4 sm:p-6 rounded-xl bg-white/5 border">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message envoyé ! (demo)'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input 
                    required 
                    placeholder="Ton nom" 
                    className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input 
                    required 
                    placeholder="Email" 
                    type="email" 
                    className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input 
                    placeholder="Sujet" 
                    className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:col-span-2"
                  />
                  <textarea 
                    placeholder="Message" 
                    rows={4} 
                    className="p-2 sm:p-3 rounded border bg-transparent text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:col-span-2"
                  />
                </div>
                <div className="mt-4 sm:mt-6 flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded bg-indigo-600/80 text-sm sm:text-base hover:bg-indigo-500 transition-all">
                    Envoyer
                  </button>
                  <button type="reset" className="px-4 py-2 rounded border text-sm sm:text-base hover:bg-white/5 transition-all">
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs sm:text-sm opacity-60 pb-6">
          © 2025 — Portfolio inspiré des meilleurs portfolios de développeurs
        </footer>
      </div>
    </div>
  );
}