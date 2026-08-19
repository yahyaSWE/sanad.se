"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { Instagram, Mail, Menu, Phone, X } from "lucide-react";

const links = [
  ["/", "Hem"], ["/donera", "Donera"], ["/om-oss", "Om oss"],
  ["/sponsorer", "Sponsorer"], ["/faq", "Frågor & Svar"], ["/kontakt", "Kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Sanad" /><span>SANAD</span>
        </Link>
        <nav className="desktop-nav">
          {links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}
        </nav>
        <Link href="/donera" className="button secondary desktop-donate">Donera nu</Link>
        <button className="menu-button" aria-label="Öppna meny" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mobile-nav">{links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/donera" className="button" onClick={() => setOpen(false)}>Donera nu</Link></nav>}
    </header>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(e: FormEvent) { e.preventDefault(); setSubscribed(true); }
  return (
    <footer>
      <div className="footer-grid container">
        <div>
          <Link href="/" className="brand"><img src="/logo.png" alt="Sanad" /><span>SANAD</span></Link>
          <p>Vi arbetar för att leverera humanitär hjälp till människor i nöd i Gaza. Tillsammans kan vi göra skillnad.</p>
        </div>
        <div><h3>Kontakt</h3><div className="footer-links"><a href="tel:0852512915"><Phone />08 525 12915</a><a href="mailto:sanad-info@mail.com"><Mail />sanad-info@mail.com</a><a href="https://www.instagram.com/sanad.sweden" target="_blank"><Instagram />@sanad.sweden</a></div></div>
        <div><h3>Snabblänkar</h3><div className="footer-links"><Link href="/om-oss">Om oss</Link><Link href="/donera">Donera</Link><Link href="/faq">Frågor & Svar</Link><Link href="/kontakt">Kontakt</Link></div></div>
        <div><h3>Håll dig uppdaterad</h3><p>Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna.</p>{subscribed ? <p className="success">Tack för din anmälan!</p> : <form className="newsletter" onSubmit={subscribe}><input type="email" placeholder="Din e-postadress" required /><button className="button secondary">Prenumerera</button></form>}</div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Sanad. Alla rättigheter förbehållna.</div>
    </footer>
  );
}

export function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="narrow"><h1>{title}</h1><p>{children}</p></div></section>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}
