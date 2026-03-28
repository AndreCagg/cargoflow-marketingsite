export const NAVIGATION = {
  brand: "CargoFlow",
  sections: [
    { label: "Come funziona", id: "how-it-works" },
    { label: "Vantaggi", id: "benefits" },
    { label: "FAQ", id: "faq" },
    { label: "Contatti", id: "contact" },
  ],
  cta: "Inizia ora",
} as const;

export const HERO = {
  eyebrow: "Logistica intelligente · ADR · Multi-sede",
  headline: ["Tracciamento ordini", "in tempo reale,", "senza compromessi."],
  subheadline:
    "CargoFlow connette autisti, magazzinieri e clienti in un'unica piattaforma. SLA 99.9%, OCR su LDV, conservazione documentale 5 anni.",
  cta_primary: "Richiedi demo",
  cta_secondary: "Scopri come funziona",
  stats: [
    { value: "99.9%", label: "SLA garantito" },
    { value: "< 2s", label: "Latenza tracciamento" },
    { value: "5 anni", label: "Conservazione doc." },
    { value: "ADR", label: "Merci pericolose" },
  ],
} as const;

export const HOW_IT_WORKS = {
  id: "how-it-works",
  eyebrow: "Processo",
  headline: "Dalla presa in carico alla consegna",
  steps: [
    {
      number: "01",
      title: "Acquisizione e OCR",
      description:
        "Il sistema acquisisce lettere di vettura e borderò via OCR. I dati vengono estratti automaticamente, validati e archiviati con firma digitale.",
      icon: "📄",
    },
    {
      number: "02",
      title: "Assegnazione e routing",
      description:
        "Gli ordini vengono assegnati agli autisti in base a competenze ADR, disponibilità e ottimizzazione del percorso multi-sede in tempo reale.",
      icon: "🗺️",
    },
    {
      number: "03",
      title: "Tracking live",
      description:
        "Il cliente monitora la spedizione con aggiornamenti GPS sub-minuto. Notifiche push e webhook per integrazioni ERP/WMS già esistenti.",
      icon: "📡",
    },
    {
      number: "04",
      title: "Chiusura e archiviazione",
      description:
        "A consegna avvenuta, documenti e prove fotografiche sono conservati per 5 anni con compliance normativa. Accesso OAuth2 per audit.",
      icon: "🔒",
    },
  ],
} as const;

export const BENEFITS = {
  id: "benefits",
  eyebrow: "Vantaggi",
  headline: "Tutto ciò che serve alla tua flotta",
  items: [
    {
      title: "Gestione ADR completa",
      description:
        "Supporto nativo per merci pericolose: classificazione automatica, documentazione ADR e alert real-time per i conducenti abilitati.",
      icon: "⚠️",
    },
    {
      title: "Multi-sede nativo",
      description:
        "Gestisci più depositi, hub di smistamento e magazzini da un'unica dashboard. Visibilità centralizzata, operatività distribuita.",
      icon: "🏭",
    },
    {
      title: "OCR su LDV e borderò",
      description:
        "Elimina la digitazione manuale. Il motore OCR riconosce letture di vettura e borderò con accuratezza >98%, riducendo errori e tempi.",
      icon: "🔍",
    },
    {
      title: "OAuth2 e sicurezza enterprise",
      description:
        "Accesso role-based per autisti, magazzinieri e clienti. SSO aziendale, MFA obbligatorio e log di audit immutabili.",
      icon: "🔐",
    },
    {
      title: "SLA 99.9% garantito",
      description:
        "Infrastruttura ridondante multi-region con failover automatico. Uptime contrattualizzato e dashboard di monitoraggio dedicata.",
      icon: "📊",
    },
    {
      title: "Conservazione 5 anni",
      description:
        "Tutti i documenti (LDV, CMR, borderò, firme) sono conservati per 5 anni con valore legale e accessibili in qualsiasi momento.",
      icon: "🗃️",
    },
  ],
} as const;

export const FAQ = {
  id: "faq",
  eyebrow: "Domande frequenti",
  headline: "Hai dubbi? Abbiamo risposte.",
  items: [
    {
      question: "CargoFlow supporta le merci pericolose (ADR)?",
      answer:
        "Sì. CargoFlow include un modulo ADR completo che gestisce la classificazione delle merci, la generazione automatica della documentazione richiesta e gli alert in tempo reale per i conducenti con patente ADR. Le restrizioni di percorso per tunnel e zone ZTL vengono calcolate automaticamente.",
    },
    {
      question: "Come funziona l'integrazione con i sistemi ERP esistenti?",
      answer:
        "CargoFlow espone API REST documentate con OpenAPI 3.0 e webhook configurabili. Sono disponibili connettori nativi per SAP, Oracle e Microsoft Dynamics. Per sistemi custom, il team di integrazione supporta l'onboarding in 2–4 settimane lavorative.",
    },
    {
      question: "Quanto tempo richiede l'onboarding?",
      answer:
        "Per flotte fino a 50 veicoli, il go-live avviene tipicamente in 5 giorni lavorativi. Flotte enterprise con multi-sede richiedono 3–6 settimane. Il team CargoFlow affianca il cliente nelle fasi di migrazione dati, configurazione ruoli e formazione degli operatori.",
    },
    {
      question: "I documenti hanno valore legale?",
      answer:
        "I documenti archiviati su CargoFlow sono conservati con firma digitale qualificata (eIDAS) e marca temporale. La conservazione sostitutiva è conforme al CAD italiano e alle normative europee, con valore legale equivalente all'originale cartaceo per 5 anni.",
    },
    {
      question: "Come viene gestita la sicurezza degli accessi?",
      answer:
        "CargoFlow utilizza OAuth2 con PKCE per l'autenticazione. Ogni ruolo (autista, magazziniere, dispatcher, cliente) ha permessi granulari. È supportato SSO aziendale tramite SAML 2.0 e OIDC. Tutti gli accessi vengono registrati in log immutabili con retention di 12 mesi.",
    },
    {
      question: "L'app mobile funziona offline?",
      answer:
        "L'app per autisti sincronizza le missioni localmente e funziona in modalità offline completa. Le azioni eseguite senza connessione (firme, foto di consegna, aggiornamenti stato) vengono sincronizzate automaticamente al ripristino del segnale, senza perdita di dati.",
    },
  ],
} as const;

export const CONTACT = {
  id: "contact",
  eyebrow: "Contatti",
  headline: "Parla con il nostro team",
  subheadline:
    "Raccontaci la tua flotta e le tue esigenze. Ti risponderemo entro 24 ore lavorative con una proposta su misura.",
  form: {
    name: { label: "Nome e cognome", placeholder: "Mario Rossi" },
    company: { label: "Azienda", placeholder: "Rossi Trasporti Srl" },
    email: { label: "Email aziendale", placeholder: "mario@rossitrasporti.it" },
    phone: { label: "Telefono", placeholder: "+39 02 1234567" },
    message: {
      label: "Descrivi la tua flotta",
      placeholder:
        "Es. 30 veicoli, 3 sedi, gestione ADR, integrazione SAP...",
    },
    submit: "Invia richiesta",
  },
  note: "Nessuno spam. I tuoi dati sono trattati secondo il GDPR e non vengono condivisi con terze parti.",
} as const;

export const FOOTER = {
  brand: "CargoFlow",
  tagline: "Logistica di precisione, ovunque.",
  links: [
    { label: "Come funziona", href: "#how-it-works" },
    { label: "Vantaggi", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
    { label: "Contatti", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Termini di servizio", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} CargoFlow Srl — P.IVA 12345678901 — Milano, Italia`,
} as const;
