"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, ShieldCheck, GraduationCap, Microscope, Menu, X, Check, Copy, MapPin, Sun, Moon } from "lucide-react";
import Image from "next/image";
import portrait from "@/person.png";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/SocialIcons";
import { profile, capabilities, education, resumes } from "@/data/biva";

const ExternalLink = ({ href, children, className = "text-link" }) => <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
const SectionTitle = ({ number, label, title, children }) => <div className="section-heading"><div><p className="eyebrow">{number} / {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>;

export default function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let saved;
      try { saved = localStorage.getItem("biva-theme"); } catch {}
      document.documentElement.dataset.theme = saved === "dark" || saved === "light"
        ? saved : systemTheme.matches ? "dark" : "light";
    }
    syncTheme();
    systemTheme.addEventListener("change", syncTheme);
    window.addEventListener("storage", syncTheme);
    return () => {
      systemTheme.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("biva-theme", next); } catch {}
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true); setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch { setCopyError(true); }
  }
  return (
    <div className="biva-site">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a className="wordmark header-wordmark" href="#home" aria-label="Biva home"><span className="signature-name">biva<span className="signature-dot">.</span></span><span className="wordmark-note">A curious mind, at work.</span></a>
        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Switch between light and dark mode" title="Switch color theme"><Moon className="theme-moon" size={18} aria-hidden="true" /><Sun className="theme-sun" size={18} aria-hidden="true" /></button>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav id="main-navigation" className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a><a href="#work">Work & research</a><a href="#journey">My journey</a><a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p>
            <p className="hero-name">Hello, I’m Mohosina Banu Biva.</p>
            <h1>Curiosity meets<br /><em>purpose.</em></h1>
            <p className="hero-description">Exploring the space between secure technology, meaningful research, and the joy of helping others learn.</p>
            <div className="hero-actions"><a href="#work" className="button button-dark">Explore my work <ArrowDown size={17} /></a><a href="#resumes" className="text-link">View CVs <ArrowUpRight size={17} /></a></div>
            <div className="hero-location"><MapPin size={14} /> Dhaka, Bangladesh <span>·</span> Software Engineering, DIU</div>
          </div>
          <div className="hero-art">
            <div className="art-grid" aria-hidden="true" /><div className="art-orbit orbit-one" aria-hidden="true" /><div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="art-center photo-center">
              <div className="photo-center-crop"><Image src={portrait} alt="Mohosina Banu Biva" className="center-portrait" sizes="142px" preload /></div>
              <span className="art-star" aria-hidden="true">{"\u2733"}</span>
            </div>
            <div className="art-label label-security"><ShieldCheck size={22} /><span>Secure.<small>Think critically.</small></span></div>
            <div className="art-label label-research"><Microscope size={22} /><span>Discover.<small>Ask better questions.</small></span></div>
            <div className="art-label label-learning"><GraduationCap size={22} /><span>Share.<small>Keep learning.</small></span></div>
            <span className="art-caption">ALWAYS A STUDENT. ALWAYS EXPLORING.</span>
          </div>
        </section>
        <div className="discipline-strip"><span>SOFTWARE ENGINEERING</span><i>✳</i><span>CYBER SECURITY</span><i>✳</i><span>BIOINFORMATICS</span><i>✳</i><span>TEACHING & MENTORING</span></div>
        <section className="section-wrap about-section" id="about">
          <div><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Learning deeply.<br /><em>Contributing thoughtfully.</em></h2></div>
          <div className="about-copy"><p className="lead">I’m a final-year Software Engineering student at Daffodil International University, majoring in Cyber Security.</p><p>My experience brings together security event monitoring, Python development, and ongoing bioinformatics research. I enjoy understanding how systems work, asking questions, and turning complex ideas into something useful.</p><p>Beyond technical work, I tutor and mentor students and serve as President of the Software Quality Assurance & Testing Club. I’m exploring opportunities in technology, research, education, and banking where I can keep learning and contribute with care.</p><div className="about-facts"><span><strong>Cyber Security</strong>Undergraduate major</span><span><strong>Bengali & English</strong>Native & professional proficiency</span></div></div>
        </section>
        <section className="work-section" id="work"><div className="section-wrap">
          <SectionTitle number="02" label="SELECTED WORK & RESEARCH" title="Ideas put into practice.">From building practical software to investigating questions at the intersection of biology and data.</SectionTitle>
          <div className="work-grid">
            <article className="research-card"><div className="card-topline"><span className="eyebrow">RESEARCH / IN PROGRESS</span><Microscope size={24} /></div>
              <div className="molecule" aria-hidden="true"><svg viewBox="0 0 420 190"><path d="M70 97 140 50 210 95 280 50 350 97M140 50v90l70-45v80M210 95l70 45 70-43M280 50v90" /><circle cx="70" cy="97" r="13" /><circle cx="140" cy="50" r="19" /><circle cx="140" cy="140" r="11" /><circle cx="210" cy="95" r="25" /><circle cx="210" cy="175" r="9" /><circle cx="280" cy="50" r="13" /><circle cx="280" cy="140" r="18" /><circle cx="350" cy="97" r="12" /></svg></div>
              <h3>Where biology<br />meets data.</h3><p>Investigating obesity-associated molecular pathways and biomarkers in breast cancer using bioinformatics and machine learning approaches.</p><div className="tags"><span>Bioinformatics</span><span>Machine learning</span><span>MATLAB</span></div><p className="card-footnote">Ongoing academic research · Results not yet published</p>
            </article>
            <article className="project-card"><div className="card-topline"><span className="eyebrow">ACADEMIC PROJECT / PYTHON</span><Github size={24} /></div>
              <div className="project-visual" aria-hidden="true"><div className="mini-window"><div className="window-bar"><i /><i /><i /><span>gym / management</span></div><div className="mini-content"><span className="mini-sidebar">G<span>Overview</span><span>Members</span><span>Schedule</span></span><div className="mini-dashboard"><strong>A little more organized.</strong><div className="mini-tiles"><span>Members<i /></span><span>Attendance<i /></span></div><div className="mini-lines"><i /><i /><i /></div></div></div></div></div>
              <h3>Less paperwork.<br />More movement.</h3><p>A gym management system for member registration, attendance, memberships, workout scheduling, and organized record keeping.</p><div className="tags"><span>Python</span><span>HTML</span><span>CSS</span></div><ExternalLink href="https://github.com/bivaook-hue/gym-management-python">Explore the repository</ExternalLink>
            </article>
          </div>
        </div></section>
        <section className="section-wrap" id="journey"><SectionTitle number="03" label="EXPERIENCE & EDUCATION" title="A journey of showing up.">Practical experience, a foundation in software engineering, and a commitment to helping others grow.</SectionTitle>
          <div className="journey-grid"><div><h3 className="column-label">Experience & teaching</h3>
            <article className="timeline-item"><p className="eyebrow">MAY — JULY 2026</p><h3>Cyber security experience</h3><p className="organization">Backdoor Private Limited</p><p>Assisted with security event and alert monitoring, log analysis, and network traffic monitoring. Supported basic investigations and documentation while learning incident detection and response procedures.</p><div className="tags"><span>SIEM exposure</span><span>Linux / Kali Linux</span><span>Threat monitoring</span></div></article>
            <article className="timeline-item"><p className="eyebrow">TUTORING & PEER SUPPORT</p><h3>Making learning approachable</h3><p className="organization">Private Tutor & Peer Mentor</p><p>Support students in Classes 9, 10, and XI with concepts, exam preparation, and problem solving. Mentor university peers and juniors in research fundamentals, literature reviews, and methodology.</p></article>
          </div><div><h3 className="column-label">Education</h3>{education.map(item => <article className="timeline-item education-item" key={item.degree}><p className="eyebrow">{item.period}</p><h3>{item.degree}</h3><p className="organization">{item.institution}</p><p>{item.detail}</p></article>)}</div></div>
        </section>
        <section className="skills-section"><div className="section-wrap"><SectionTitle number="04" label="MY TOOLKIT" title="Different tools. A curious mindset." /><div className="capability-grid">{capabilities.map((group, i) => <article key={group.title}><span className="capability-number">0{i + 1}</span><h3>{group.title}</h3><p>{group.description}</p><div className="tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div></div></section>
        <section className="section-wrap leadership-section" id="leadership"><SectionTitle number="05" label="BEYOND THE CLASSROOM" title="Growing together." />
          <div className="leadership-grid"><article><span className="leadership-symbol" aria-hidden="true">✳</span><h3>Leading with initiative.</h3><p className="organization">President · Software Quality Assurance & Testing Club, DIU</p><p>Organized the club inauguration, conducted the TRAP program for Software Engineering students, and supported AI Summit coordination and participant engagement.</p><p className="secondary-role">Also serving as Vice President of the Pabna Association, DIU.</p></article><article className="community-note"><p className="eyebrow">COMMUNITY & PARTICIPATION</p><h3>A little beyond the syllabus.</h3><ul><li>Recognition in the 2019 Science Quiz Competition at Pabna University of Science and Technology.</li><li>Participation in HSBC–Prothom Alo Bhasa Protijogita and debate competitions.</li><li>Environmental awareness and tree plantation activities with BAPA and other organizations.</li><li>Cybersecurity Awareness Day 2026 participation.</li></ul></article></div>
        </section>
        <section className="resume-section" id="resumes"><div className="section-wrap"><div><p className="eyebrow">A CLOSER LOOK</p><h2>Find the right CV<br /><em>for the conversation.</em></h2><p>Three perspectives on the same foundation.</p></div><div className="resume-list">{resumes.map(resume => <a href={resume.href} target="_blank" rel="noopener noreferrer" key={resume.title}><span><strong>{resume.title}</strong><small>{resume.description}</small></span><ArrowUpRight size={20} /><span className="sr-only">Open CV folder in Google Drive (opens in a new tab)</span></a>)}</div></div></section>
        <section className="section-wrap contact-section" id="contact"><p className="eyebrow">06 / SAY HELLO</p><h2>Good things begin<br />with a <em>conversation.</em></h2><p>I’d love to hear about professional opportunities, research collaborations, or teaching opportunities.</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight aria-hidden="true" /></a><button onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>{copied ? <Check size={18} /> : <Copy size={18} />}</button></div><span role="status" className="copy-status">{copied ? "Email address copied." : copyError ? "Please select and copy the email address above." : ""}</span><div className="contact-links"><ExternalLink href={profile.linkedin}><Linkedin size={17} /> LinkedIn</ExternalLink><ExternalLink href={profile.github}><Github size={17} /> GitHub</ExternalLink><a href="tel:+8801714403230" className="text-link">+880 1714 403230 <ArrowUpRight size={16} /></a></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#home">biva<span>.</span></a><span>Mohosina Banu Biva · Dhaka, Bangladesh</span><a className="text-link" href="#home">Back to top ↑</a></footer>
    </div>
  );
}
