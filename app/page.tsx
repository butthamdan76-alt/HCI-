"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  LineChart,
  Menu,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Volume2,
  X
} from "lucide-react";
import { FormEvent, useState } from "react";

const navGroups = [
  {
    label: "What We Do",
    heading: "What We Do",
    items: ["All Services", "Paid Search", "Paid Social", "SEO", "Amazon", "Lifecycle Marketing", "CRO", "Creative", "Data Analytics", "Lead Generation"]
  },
  {
    label: "Who We Help",
    heading: "Who We Help",
    items: ["B2B", "B2C", "eCommerce", "Local", "Garage Door", "SaaS", "Online Education", "Outdoor Sporting Goods", "High AOV Brands"]
  },
  {
    label: "Who We Are",
    heading: "Who We Are",
    items: ["About Us", "Why Disruptive", "Meet Our Team", "Our Mission", "Giving Back", "Careers"]
  },
  {
    label: "Resources",
    heading: "Resources",
    items: ["Our Blog", "Webinars & Recordings", "Partners", "Marketing Guides", "Free Tools"]
  }
];

const logoNames = ["Guitar Center", "PennyMac", "instructure", "arena", "Procurify", "Adobe", "FIRST LITE", "Litter-Robot", "crossover symmetry"];

const proofStats = [
  ["4.8", "Average rating from 350+ reviews on Clutch"],
  ["90+", "Clients with us for four years or more"],
  ["160+", "People aligned with our mission"],
  ["#145", "On the Inc. 500"],
  ["$450M+", "In annual ad spend managed for clients"]
];

const values = [
  ["Authenticity", "We work with brands and people we believe in, with complete commitment to their success."],
  ["Top Talent", "Specialists are developed continuously and paired with the work they are best equipped to win."],
  ["Strategy", "Business goals, customer journeys, media, creative, and data are connected before a dollar is scaled."],
  ["Breakthroughs", "A disciplined test-and-learn operating rhythm creates the next measurable lift."],
  ["Exclusivity", "We stay selective so clients gain access to the attention, community, and expertise they need."]
];

const timeline = [
  ["01", "Initial Discovery", "Goals, constraints, economics, and growth blockers."],
  ["02", "Onboarding", "A clear operating plan and the right specialists."],
  ["03", "Mutual Understanding", "Shared targets, reporting, and accountability."],
  ["04", "Impact Check-In", "Early signals turn into the next priorities."],
  ["05", "Strategy Workshop", "Channel, creative, CRO, and lifecycle alignment."],
  ["06", "Ongoing Strategy", "Continuous learning compounds the gains."]
];

const testimonials = [
  ["Dider Bizimungu", "Matterport, Paid Media Director", "We are a unique company with unique solutions, so having a flexible, receptive, and knowledgeable partner is crucial to us achieving our goals."],
  ["Maggie Li", "MyHealthTeams, Growth Marketing Manager", "The workflow between our teams is seamless and based on mutual trust and communication. The team is really knowledgeable."],
  ["Kaili Spear", "Grow.com, Marketing Manager", "They started getting results quickly and the leads are already moving through the funnel. We are super happy."]
];

function Brand() {
  return (
    <span className="wordmark" aria-label="Disruptive Advertising">
      <span className="wordmark-dis">DIS</span><span className="wordmark-r">R</span><span className="wordmark-uptive">UPTIVE</span>
    </span>
  );
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  async function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    setFormStatus("Sending your request...");
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setFormStatus(data.message);
  }

  function closeMenus() {
    setActiveMenu(null);
    setMobileOpen(false);
  }

  const activeGroup = navGroups.find((group) => group.label === activeMenu);

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenus}><Brand /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navGroups.slice(0, 3).map((group) => (
            <button className={activeMenu === group.label ? "desktop-nav-item is-open" : "desktop-nav-item"} type="button" key={group.label} onClick={() => setActiveMenu(activeMenu === group.label ? null : group.label)}>
              {group.label}<ChevronDown size={18} />
            </button>
          ))}
          <a href="#results" onClick={() => setActiveMenu(null)}>Results</a>
          <button className={activeMenu === "Resources" ? "desktop-nav-item is-open" : "desktop-nav-item"} type="button" onClick={() => setActiveMenu(activeMenu === "Resources" ? null : "Resources")}>
            Resources<ChevronDown size={18} />
          </button>
        </nav>
        <a className="talk-button" href="#audit" onClick={closeMenus}>Let&apos;s Talk</a>
        <button className="menu-button" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

        {activeGroup && (
          <div className="mega-panel" onMouseLeave={() => setActiveMenu(null)}>
            <div className="mega-inner">
              <div className="mega-title"><h2>{activeGroup.heading}</h2><span /></div>
              <div className="mega-links">
                {activeGroup.items.map((item) => <a href="#services" key={item} onClick={() => setActiveMenu(null)}>{item}<ArrowRight size={15} /></a>)}
              </div>
            </div>
          </div>
        )}
      </header>

      <div className={mobileOpen ? "drawer-scrim visible" : "drawer-scrim"} onClick={closeMenus} />
      <aside className={mobileOpen ? "mobile-drawer open" : "mobile-drawer"} aria-label="Mobile navigation">
        <div className="drawer-brand"><Brand /><button type="button" onClick={closeMenus} aria-label="Close navigation"><X size={24} /></button></div>
        {navGroups.map((group) => (
          <details key={group.label}>
            <summary>{group.label}<ChevronDown size={18} /></summary>
            <div>{group.items.map((item) => <a href="#services" onClick={closeMenus} key={item}>{item}</a>)}</div>
          </details>
        ))}
        <a className="drawer-result" href="#results" onClick={closeMenus}>Results</a>
        <a className="drawer-talk" href="#audit" onClick={closeMenus}>Let&apos;s Talk <ArrowRight size={18} /></a>
      </aside>

      <section className="showreel" aria-label="Animated performance marketing showreel">
        <div className="showreel-grid" />
        <span className="showreel-asterisk">✳</span>
        <span className="showreel-side">Disruptive Advertising</span>
        <span className="showreel-brand brand-fade brand-one">Scotts</span>
        <span className="showreel-brand brand-fade brand-two">Adobe</span>
        <span className="showreel-number number-one">+38%</span>
        <span className="showreel-number number-two">+76%</span>
        <div className="showreel-art" aria-hidden="true">
          <div className="art-halo halo-one" /><div className="art-halo halo-two" />
          <div className="art-head" /><div className="art-body" />
          <div className="art-leg leg-left" /><div className="art-leg leg-right" />
          <div className="art-arm arm-left" /><div className="art-arm arm-right" />
          <div className="art-leaves"><i /><i /><i /><i /><i /><i /></div>
        </div>
        <button className="sound-button" type="button" aria-label="Showreel audio is muted"><Volume2 size={18} /></button>
        <p className="showreel-caption">A performance marketing agency for authentic brands.</p>
      </section>

      <section className="hero-copy section-shell">
        <div className="client-marquee" aria-label="Selected client brands"><div>{[...logoNames, ...logoNames].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div></div>
        <div className="hero-message">
          <p className="kicker">Top reviewed agency in the USA <b>|</b> No strings attached audit</p>
          <h1>Most Marketing Budgets Are Wasted—Let&apos;s Fix That</h1>
          <p className="hero-lede">After thousands of audits, we&apos;ve found that <strong>76% of marketing spend goes to waste.</strong> We&apos;ll show you where yours is leaking—and how to fix it fast.</p>
          <a className="red-button" href="#audit">Get Your Free Marketing Audit <ArrowRight size={19} /></a>
        </div>
        <div className="ribbon-proof"><span>★★★★★</span><strong>Loved by Business Owners &amp; Marketers</strong></div>
      </section>

      <section className="testimonial-section section-shell">
        <div className="section-intro centered"><p className="kicker">What marketers say about Disruptive</p><h2>Real outcomes. Real relationships.</h2></div>
        <div className="testimonial-row">
          {testimonials.map(([name, company, quote], index) => <article className="quote-card" key={company}><div className={`portrait portrait-${index + 1}`}><span>{name.slice(0, 1)}</span></div><div><span className="stars">★★★★★</span><MessageSquareQuote size={24} /><p>“{quote}”</p><strong>{name}</strong><small>{company}</small></div></article>)}
        </div>
      </section>

      <section className="proof-strip" id="results">
        {proofStats.map(([stat, label], index) => <article key={stat}><div className={`proof-icon icon-${index + 1}`}>{index === 0 ? "★" : index === 1 ? "↔" : index === 2 ? "✦" : index === 3 ? "#" : "$"}</div><strong>{stat}</strong><p>{label}</p></article>)}
      </section>

      <section className="guarantee section-shell">
        <div className="guarantee-stamp"><span>Risk-Free</span><strong>Guarantee</strong></div>
        <div className="guarantee-copy"><h2>Get Results in 90 Days—Or You Don&apos;t Pay</h2><p><strong>Most agencies guess. We audit, prove, and guarantee.</strong></p><p>Our free marketing audit identifies waste and missed opportunities. Qualifying brands get a measurable-growth guarantee within 90 days—without a long-term contract.</p><a className="red-button" href="#audit">Get Your Free Marketing Audit <ArrowRight size={19} /></a></div>
        <div className="clutch-card"><span>★★★★★</span><strong>AVG. RATING OF 4.8 / 5.0 STARS ON CLUTCH!</strong><div className="clutch-lines"><i /><i /><i /></div><small>Hundreds of public reviews</small></div>
      </section>

      <section className="agency-section section-shell" id="services">
        <div className="agency-title"><p className="kicker">Over $450+ million in annual managed ad spend</p><h2>Meet Disruptive Advertising: the #1 most reviewed digital marketing agency</h2><p>We pair empowered marketers with win-win-win minded people and brands they believe in. The result is a marketing relationship built for accountability and breakthrough performance.</p></div>
        <div className="value-list">
          {values.map(([title, copy], index) => { const icons = [ShieldCheck, Users, Target, Sparkles, Check]; const Icon = icons[index]; return <article key={title}><Icon size={32} /><h3>{title}</h3><p>{copy}</p></article>; })}
        </div>
      </section>

      <section className="selective-section">
        <div className="selective-photo"><span>10,000+</span><small>audits completed</small></div>
        <div className="selective-copy"><p className="kicker">Most agencies say yes to everyone. We don&apos;t.</p><h2>We&apos;re Only Taking On 10 New Clients This Month</h2><p>After 10,000+ audits and $1B+ managed in ad spend, we know what works—and what wastes your budget. Start with a no-strings-attached audit and leave with a plan.</p><strong>Want in? Grab your spot before they&apos;re gone.</strong><a className="outline-button" href="#audit">Get Your Free Marketing Audit <ArrowRight size={19} /></a></div>
      </section>

      <section className="timeline-section section-shell"><div className="section-intro centered"><p className="kicker">New client timeline to success</p><h2>Build momentum without guesswork.</h2></div><div className="timeline-grid">{timeline.map(([number, title, copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="growth-section"><div className="growth-canvas"><span>76%</span><i /><i /><i /></div><div><p className="kicker">Your free growth audit</p><h2>What&apos;s Slowing Down Your Growth?</h2><p>Our audit gives you a clear picture of what&apos;s working, what&apos;s not, and where to optimize. Whether you work with us or not, the goal is simple: help you move faster toward real results.</p><a className="red-button" href="#audit">Get Your Free Marketing Audit <ArrowRight size={19} /></a></div></section>

      <section className="audiences section-shell"><div className="section-intro centered"><p className="kicker">The perfect digital marketing agency for</p><h2>Business owners and marketers</h2></div><div className="audience-columns"><article><h3>For Business Owners</h3><p><b>Grow your business</b>Receive a winning strategy and get revenue growth moving again.</p><p><b>Drive immediate impact</b>Get results that solve the current pain in your marketing.</p><p><b>Stop managing marketers</b>Let a trusted team hire, develop, and retain top talent.</p></article><article><h3>For Marketers</h3><p><b>Improve performance</b>Elevate your strategy and start hitting the right numbers.</p><p><b>Look great internally</b>Win with clear reporting, priorities, and a strategic partner.</p><p><b>Focus on your best work</b>Surround yourself with complementary experts and resources.</p></article></div></section>

      <section className="client-wall"><div><p className="kicker">#1 most reviewed agency</p><h2>We&apos;ve helped thousands of marketers achieve their goals.</h2></div><div className="wall-tiles">{["USA CLEAN", "PANDA", "LITTLE", "smarty", "Sunline", "PHONE NINJAS"].map((name, index) => <article key={name} className={`wall-tile tile-${index + 1}`}><span>{name}</span></article>)}</div></section>

      <section className="audit-section" id="audit"><div className="audit-copy"><p className="kicker">Let&apos;s do this</p><h2>Let&apos;s get in touch to see if we&apos;re a good fit.</h2><p>Tell us about your goals. This Next.js form route validates the request and returns a confirmation ready for an email or CRM integration.</p></div><form className="audit-form" onSubmit={submitAudit}><label>First name<input name="name" required /></label><label>Business email<input name="email" type="email" required /></label><label>Company<input name="company" required /></label><label>Annual revenue<select name="revenue" defaultValue=""><option value="" disabled>Select annual revenue</option><option>Less than $1M</option><option>$1M – $5M</option><option>$5M – $25M</option><option>Greater than $25M</option></select></label><button className="red-button" type="submit">Get Your Free Marketing Audit <TrendingUp size={18} /></button><p className="form-status" role="status">{formStatus}</p></form></section>

      <footer className="footer"><div><Brand /><p>(877) 956-7510</p><a href="#audit">Contact us</a></div><div className="footer-columns">{navGroups.slice(0, 3).map((group) => <div key={group.label}><strong>{group.label}</strong>{group.items.slice(0, 6).map((item) => <a href="#services" key={item}>{item}</a>)}</div>)}</div><small>© 2026 Coursework recreation. Original implementation and media are not included.</small></footer>
    </main>
  );
}
