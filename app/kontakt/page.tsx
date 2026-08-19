"use client";
import { FormEvent, useState } from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import { Card, PageIntro } from "../site-components";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <><PageIntro title="Kontakta oss">Har du frågor eller vill veta mer om vårt arbete? Vi finns här för att hjälpa dig.</PageIntro><div className="container page-content"><div className="contact-grid"><Contact href="mailto:sanad-info@mail.com" icon={<Mail />} title="E-post" text="sanad-info@mail.com" /><Contact href="tel:0852512915" icon={<Phone />} title="Telefon" text="08 525 12915" /><Contact href="https://www.instagram.com/sanad.sweden" icon={<Instagram />} title="Instagram" text="@sanad.sweden" /></div><Card className="form-card contact-form">{sent ? <div className="sent"><h2>Tack för ditt meddelande!</h2><p>Vi återkommer så snart som möjligt.</p></div> : <form onSubmit={submit}><label>Namn *</label><input required placeholder="För- och efternamn" /><label>E-postadress *</label><input required type="email" placeholder="din@email.se" /><label>Meddelande *</label><textarea required minLength={10} rows={6} placeholder="Skriv ditt meddelande här..." /><small>Minst 10 tecken</small><button className="button full">Skicka meddelande</button></form>}</Card></div></>;
}
function Contact({ href, icon, title, text }: { href: string; icon: React.ReactNode; title: string; text: string }) { return <a href={href} target={href.startsWith("http") ? "_blank" : undefined}><Card className="contact-card"><div className="icon-circle">{icon}</div><h3>{title}</h3><p>{text}</p></Card></a> }
