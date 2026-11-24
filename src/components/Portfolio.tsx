"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  UsersRound,
  Mail,
  Menu,
  ServerCog,
  X,
  Cpu,
  GraduationCap,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import { projects, skills, type Project } from "@/data/portfolio";

const githubUrl = "https://github.com/ASIIMIREPATIENCE";
const linkedinUrl = "https://www.linkedin.com/in/patience-asiimire-9a3b3233a/";
const emailUrl = "mailto:asiimirepatience296@gmail.com";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <motion.div {...reveal} className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      let frame = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      gsap.fromTo(
        ".hero-visual",
        { opacity: 0, scale: 0.92, rotate: -3 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.25, ease: "power3.out" },
      );

      return () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("modal-open");
    };
  }, [selectedProject]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home">
            <span>PA</span>
          </button>

          <div className="nav-links desktop-nav">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <a className="nav-contact" href={emailUrl}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              {navItems.map(([label, id], index) => (
                <button key={id} onClick={() => scrollTo(id)}>
                  <span>0{index + 1}</span>
                  {label}
                </button>
              ))}
              <a href={emailUrl}>Email Patience <ArrowUpRight size={16} /></a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="status-label">
                <span />
                Software Developer
              </div>
              <p className="hero-overline">Hello, I&apos;m Patience.</p>
              <h1>
                I build <span>digital experiences.</span>
              </h1>
              <p className="hero-description">
                Software Developer crafting practical digital solutions through web technologies,
                backend development, and creative problem-solving.
              </p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollTo("projects")}>
                  Explore My Work <ArrowDown size={17} />
                </button>
                <a className="secondary-button" href={emailUrl}>
                  Get In Touch <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-meta">
                <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitBranch size={19} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <UsersRound size={19} />
                </a>
                <span><MapPin size={16} /> Kampala, Uganda</span>
              </div>
            </motion.div>

            <div className="hero-visual" aria-label="Portrait of Patience Asiimire">
              <div className="portrait-frame">
                <Image
                  src="/images/pat..jpg"
                  alt="Patience Asiimire"
                  fill
                  priority
                  sizes="(max-width: 760px) 78vw, 40vw"
                  className="portrait-image"
                />
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-code-card">
                <span>currently</span>
                <strong>building &amp; learning</strong>
              </div>
              <div className="hero-index">01 / 06</div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell section-space">
          <SectionHeading index="01" eyebrow="About" title="A developer with a builder&apos;s mindset." />
          <motion.div {...reveal} className="about-grid">
            <div className="about-statement">
              <p>
                I&apos;m interested in understanding a problem, choosing the right technology,
                and turning an idea into something useful and functional.
              </p>
            </div>
            <div className="about-copy">
              <p>
                My work and learning journey span frontend and backend development, databases,
                application architecture, APIs, and embedded systems. I enjoy working across
                the different layers of software to build practical digital platforms.
              </p>
              <p>
                From web applications and e-commerce systems to IoT prototypes, I&apos;m motivated
                by technology that can address real needs in everyday life.
              </p>
              <div className="location-line">
                <MapPin size={17} />
                <span>Based in Kampala, Uganda</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="section-shell section-space">
          <SectionHeading index="02" eyebrow="Capabilities" title="Tools across the stack." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.05 }}
                className="skill-card"
                key={group.title}
              >
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell section-space">
          <SectionHeading index="03" eyebrow="Journey" title="Learning in practice." />
          <div className="timeline-grid">
            <motion.div {...reveal} className="timeline-column">
              <div className="timeline-label"><BriefcaseBusiness size={18} /> Experience & training</div>
              <article className="timeline-item">
                <div className="timeline-date">2026 — Present</div>
                <h3>Software Engineering Apprentice</h3>
                <p>Refactory Academy</p>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2025</div>
                <h3>ICT Industrial Training</h3>
                <p>New Vision</p>
              </article>
            </motion.div>

            <motion.div {...reveal} className="timeline-column">
              <div className="timeline-label"><GraduationCap size={18} /> Education</div>
              <article className="timeline-item">
                <div className="timeline-date">2026</div>
                <h3>Certificate in Software Engineering</h3>
                <p>Refactory Academy</p>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">Completed 2025</div>
                <h3>Diploma in Information Technology for Business</h3>
                <p>Uganda Institute of Information and Communications Technology</p>
              </article>
              <article className="timeline-item compact">
                <div className="timeline-date">2022</div>
                <h3>Uganda Advanced Certificate of Education</h3>
                <p>Kibingo Girls Secondary School</p>
              </article>
              <article className="timeline-item compact">
                <div className="timeline-date">2019</div>
                <h3>Uganda Certificate of Education</h3>
                <p>Bishop Ogez High School</p>
              </article>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section-shell section-space">
          <SectionHeading index="04" eyebrow="Selected work" title="Ideas turned into software." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: (index % 3) * 0.05 }}
                className={`project-card ${project.featured ? "featured" : ""} ${project.accent}`}
                key={project.name}
              >
                <button
                  className="project-open"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.name}`}
                >
                  <div className="project-art" aria-hidden="true">
                    <div className="project-art-grid" />
                    <div className="project-window">
                      <span />
                      <span />
                      <span />
                      <div className="project-signal">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <div className="project-category">{project.category}</div>
                  </div>
                  <div className="project-info">
                    <div className="project-topline">
                      <span>{project.status}</span>
                      <ArrowUpRight size={18} />
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.technologies.slice(0, 3).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell section-space development-section">
          <SectionHeading index="05" eyebrow="What I do" title="Different areas. One problem-solving approach." />
          <div className="approach-grid">
            {[
              [Code2, "Frontend Development", "Building clear, responsive interfaces for practical digital experiences."],
              [ServerCog, "Backend Development", "Exploring application logic and server-side software."],
              [Database, "Database-driven Apps", "Working with structured data and application data needs."],
              [Cpu, "IoT & Embedded", "Connecting sensors and hardware with software-based solutions."],
            ].map(([Icon, title, copy], index) => {
              const IconComponent = Icon as typeof Code2;
              return (
                <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }} key={title as string}>
                  <IconComponent size={24} />
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="contact-section section-space">
          <div className="section-shell">
            <motion.div {...reveal} className="contact-inner">
              <div className="section-kicker"><span>06</span><span>Contact</span></div>
              <h2>Let&apos;s build something meaningful.</h2>
              <p>
                Open to professional connections, opportunities, and thoughtful conversations
                about software and practical solutions.
              </p>
              <a className="contact-email" href={emailUrl}>
                <Mail size={20} />
                asiimirepatience296@gmail.com
                <ArrowUpRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <div>
            <strong>Patience Asiimire</strong>
            <span>Software Developer</span>
            <span>Kampala, Uganda</span>
          </div>
          <div className="footer-links">
            <a href={githubUrl} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><UsersRound size={17} /> LinkedIn</a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Patience Asiimire</span>
            <button onClick={() => scrollTo("home")}>Back to top <ArrowUpRight size={14} /></button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
                <X size={20} />
              </button>
              <div className="modal-status">{selectedProject.status}</div>
              <div className="modal-category">{selectedProject.category}</div>
              <h2 id="project-modal-title">{selectedProject.name}</h2>
              <p>{selectedProject.detail}</p>
              <div className="tag-list modal-tags">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links-status">
                <ExternalLink size={15} />
                Live demo: Coming soon
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
