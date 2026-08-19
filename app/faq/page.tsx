import { Card, PageIntro } from "../site-components";
const faqs = [
  ["Hur säkerställer ni att min donation når fram?","Vi arbetar med etablerade partners på plats i Gaza och har ett transparent system för att spåra alla donationer. Du får kvitton och regelbundna uppdateringar om hur dina pengar används."],
  ["Vilken andel av min donation går till administration?","100% av din donation går direkt till vårt hjälparbete. Alla administrativa kostnader täcks separat, vilket innebär att varje krona du donerar kommer människor i nöd till godo."],
  ["Kan jag få kvitto på min donation?","Ja, kontakta oss efter din donation så hjälper vi dig med dokumentation och kvitto."],
  ["Vilka betalningsmetoder accepterar ni?","Just nu tar vi emot donationer via Swish. Fler betalningssätt kommer snart."],
  ["Vart går mina pengar om jag väljer 'Där behovet är störst'?","Pengarna fördelas där behovet är som akutast. Det kan vara matdistribution, medicinsk hjälp, husrum eller utbildning."],
  ["Arbetar ni direkt på plats i Gaza?","Ja, vi har lokala team och partners som arbetar direkt på plats i Gaza. Det gör att vi kan agera snabbt och säkerställa att hjälpen når fram."],
  ["Hur kan jag engagera mig förutom att donera pengar?","Du kan bli volontär, sprida ordet om vårt arbete i sociala medier, ordna insamlingar eller delta i våra evenemang. Kontakta oss för mer information."],
];
export default function FaqPage() { return <><PageIntro title="Frågor & Svar">Här hittar du svar på de vanligaste frågorna om vårt arbete och hur du kan stödja oss.</PageIntro><div className="narrow page-content"><Card className="faq-card">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</Card><p className="center">Hittade du inte svar på din fråga? <a className="text-link" href="/kontakt">Kontakta oss så hjälper vi dig</a></p></div></> }
