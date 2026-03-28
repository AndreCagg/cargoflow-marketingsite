export const CONTENT = {
  navigation: {
    brand: "CargoFlow",
    links: [
      { label: "Funzionalità", id: "how-it-works" },
      { label: "Moduli",       id: "benefits" },
      { label: "FAQ",          id: "faq" },
      { label: "Contatti",     id: "contact" },
    ],
    cta: "Richiedi demo",
  },

  hero: {
    eyebrow: "Gestionale B2B · Uso interno · Operatori logistici",
    headline: [
      { text: "Tutto ciò che serve",   accent: false },
      { text: "per gestire la tua",    accent: false },
      { text: "azienda di trasporti.", accent: true  },
    ],
    subheadline:
      "CargoFlow è il gestionale operativo pensato per spedizionieri, padroncini e fleet manager. Pianificazione missioni, gestione autisti, stato ordini, bancali EPAL, manutenzione veicoli e molto altro — in un'unica piattaforma ad uso interno.",
    cta_primary:      "Richiedi una demo",
    cta_secondary:    "Esplora le funzionalità",
    cta_secondary_id: "how-it-works",
    stats: [
      { value: "ADR",   label: "Merci pericolose" },
      { value: "EPAL",  label: "Saldo bancali" },
      { value: "Multi", label: "Sede e filiale" },
      { value: "OCR",   label: "Lettere di vettura" },
    ],
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Come funziona",
    headline: "Il flusso operativo giornaliero",
    steps: [
      {
        number: "01",
        icon: "📋",
        title: "Acquisizione ordini e OCR",
        description:
          "Le lettere di vettura e i borderò vengono acquisiti tramite OCR. I dati vengono estratti, validati e associati automaticamente all'ordine corretto, eliminando la ricopiatura manuale e gli errori di digitazione.",
      },
      {
        number: "02",
        icon: "🗓️",
        title: "Pianificazione e assegnazione",
        description:
          "Il dispatcher pianifica le consegne del giorno e le assegna agli autisti disponibili. Il sistema suggerisce l'abbinamento ottimale per zona, abilitazione ADR e carico veicolo, riducendo i tempi di organizzazione.",
      },
      {
        number: "03",
        icon: "📦",
        title: "Avanzamento stato ordini",
        description:
          "Ogni ordine avanza attraverso stati configurabili: in attesa, in carico, in consegna, consegnato, anomalia. Il personale interno ha sempre visibilità aggiornata sull'avanzamento di ogni missione.",
      },
      {
        number: "04",
        icon: "🗃️",
        title: "Archiviazione e conservazione",
        description:
          "Documenti, firme e prove fotografiche vengono archiviati con firma digitale e conservati per 5 anni con valore legale. Accesso immediato in caso di contestazioni o audit fiscali.",
      },
    ],
  },

  benefits: {
    id: "benefits",
    eyebrow: "Moduli",
    headline: "Tutto quello che gestisce CargoFlow",
    items: [
      {
        icon: "🗓️",
        title: "Pianificazione missioni",
        description:
          "Crea e organizza le missioni del giorno, assegnale agli autisti con pochi clic e monitora lo stato di avanzamento in tempo reale dal back-office interno.",
      },
      {
        icon: "🪵",
        title: "Saldo bancali EPAL",
        description:
          "Registra dare e avere ad ogni scambio di bancali. Il sistema aggiorna automaticamente il saldo per ogni cliente e fornitore, con estratto conto esportabile in PDF.",
      },
      {
        icon: "⏱️",
        title: "Alert ETA e anomalie",
        description:
          "Il back-office riceve notifiche automatiche quando un autista è in ritardo rispetto alla finestra di consegna prevista o quando si registra un'anomalia su una missione.",
      },
      {
        icon: "⭐",
        title: "Score affidabilità cliente",
        description:
          "Ogni cliente accumula uno score basato su ritiri non rispettati, contestazioni e incidenti. Utile per prioritizzare il servizio, valutare rischi e negoziare condizioni contrattuali.",
      },
      {
        icon: "🔧",
        title: "Manutenzione veicoli",
        description:
          "Tieni traccia di tagliandi, revisioni, bollo e assicurazione per ogni mezzo. Notifiche automatiche prima delle scadenze: nessun mezzo fermo per dimenticanza.",
      },
      {
        icon: "💶",
        title: "Calcolatore prezzi missione",
        description:
          "Calcola il costo di ogni missione in base a distanza, peso, tipo merce, sovrapprezzi ADR e tariffe per cliente. Genera preventivi e pre-fatture in PDF in pochi clic.",
      },
      {
        icon: "⚠️",
        title: "Gestione ADR",
        description:
          "Supporto completo per le merci pericolose: classificazione UN, documentazione obbligatoria, verifica abilitazione autista e alert per restrizioni di percorso tunnel e ZTL.",
      },
      {
        icon: "📄",
        title: "OCR su LDV e borderò",
        description:
          "Carica la lettera di vettura e il sistema estrae mittente, destinatario, colli, peso e riferimento ordine automaticamente. Addio ricopiatura manuale e relativi errori.",
      },
      {
        icon: "🏢",
        title: "Multi-sede e filiali",
        description:
          "Gestisci più depositi, hub e filiali da un unico account. Ogni sede mantiene la propria operatività isolata, la direzione ha visibilità aggregata su tutto il gruppo.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "FAQ",
    headline: "Domande frequenti",
    items: [
      {
        question: "CargoFlow è un portale di tracking per i clienti finali?",
        answer:
          "No. CargoFlow è un gestionale operativo ad uso interno dell'azienda di trasporti. Non è un portale di tracking per i destinatari delle merci: è lo strumento che usano dispatcher, magazzinieri, responsabili di flotta e amministrativi per gestire l'intera operatività quotidiana dall'interno.",
      },
      {
        question: "Come funziona il saldo bancali EPAL?",
        answer:
          "Ad ogni missione è possibile registrare il numero di bancali EPAL consegnati e ritirati. Il sistema tiene un conto separato per ogni cliente e fornitore, aggiornando automaticamente il saldo dare/avere. È possibile consultare l'estratto conto bancali per qualsiasi soggetto ed esportarlo in PDF per le riconciliazioni periodiche.",
      },
      {
        question: "È possibile vedere la posizione degli autisti in tempo reale?",
        answer:
          "CargoFlow gestisce lo stato degli ordini e delle missioni, non il tracking GPS live su mappa. Il back-office vede sempre a che punto è ogni consegna (in viaggio, arrivato, consegnato, anomalia) tramite aggiornamenti dall'app autista, ma non la posizione geografica in tempo reale.",
      },
      {
        question: "Come funziona il calcolatore prezzi missione?",
        answer:
          "Il calcolatore prende in input la tratta, tipo di merce, peso e volume, eventuali sovrapprezzi ADR, pedaggi e le tariffe specifiche per cliente. Restituisce il costo della missione secondo il listino configurato. È possibile generare direttamente un preventivo o pre-fattura in PDF da condividere con il cliente.",
      },
      {
        question: "Come vengono gestite le scadenze di bollo e assicurazione?",
        answer:
          "Per ogni veicolo si inseriscono le date di scadenza di bollo, assicurazione, revisione e tagliando. Il sistema invia notifiche automatiche con anticipo configurabile (es. 30 e 7 giorni prima della scadenza). Il cruscotto flotta mostra in un colpo d'occhio i mezzi con scadenze imminenti o già scadute.",
      },
      {
        question: "Quanto tempo richiede l'avvio?",
        answer:
          "Per realtà fino a 20 veicoli e una singola sede, il go-live avviene tipicamente in 3–5 giorni lavorativi. Il team CargoFlow affianca l'azienda nell'importazione dell'anagrafica clienti, la configurazione dei listini e la formazione del personale operativo. Per strutture multi-sede i tempi sono concordati caso per caso.",
      },
    ],
  },

  contact: {
    id: "contact",
    eyebrow: "Contatti",
    headline: "Parla con il nostro team",
    subheadline:
      "Raccontaci la tua operatività: numero di veicoli, sedi, tipologia di merce e i problemi che vuoi risolvere. Ti mostriamo come CargoFlow si adatta al tuo flusso di lavoro reale.",
    trustSignals: [
      { icon: "⚡", text: "Risposta entro 24 ore lavorative" },
      { icon: "🖥️", text: "Demo live sul tuo caso reale, non una presentazione generica" },
      { icon: "🔒", text: "Dati trattati in conformità al GDPR" },
    ],
    form: {
      name:    { label: "Nome e cognome",           placeholder: "Mario Rossi",               type: "text",  required: true  },
      company: { label: "Azienda",                  placeholder: "Rossi Trasporti Srl",       type: "text",  required: false },
      email:   { label: "Email aziendale",          placeholder: "mario@rossitrasporti.it",   type: "email", required: true  },
      phone:   { label: "Telefono",                 placeholder: "+39 02 1234567",            type: "tel",   required: false },
      message: {
        label:       "Descrivi la tua operatività",
        placeholder: "Es. 15 veicoli, 2 sedi, trasporto ADR, gestione bancali EPAL, cerco soluzione per pianificazione giornaliera...",
      },
      submit: "Invia richiesta",
    },
    note:         "Nessuno spam. I tuoi dati non vengono condivisi con terze parti.",
    successTitle: "Richiesta inviata!",
    successText:  "Ti ricontatteremo entro 24 ore lavorative per fissare la demo.",
  },

  footer: {
    brand:     "CargoFlow",
    tagline:   "Il gestionale per chi vive di trasporti.",
    copyright: "© 2025 CargoFlow Srl — P.IVA 12345678901 — Milano, Italia",
    legalLinks: [
      { label: "Privacy Policy",      href: "#" },
      { label: "Termini di servizio", href: "#" },
    ],
  },
} as const;
