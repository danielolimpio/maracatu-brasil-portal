export type GlossaryTerm = {
  slug: string; // e.g. "bolsa-familia" -> URL: /glossary/what-is-bolsa-familia
  term: string;
  category: string;
  categorySlug: string;
  shortAnswer: string; // 40-60 words for featured snippet
  definition: string;
  keyFacts: string[];
  practicalExample: string;
  whyItMatters: string;
  howItWorks: string[];
  advantages: string[];
  disadvantages?: string[];
  commonMistakes: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
  furtherReading?: { title: string; href: string }[];
  references?: { title: string; href: string }[];
  author: string;
  lastUpdated: string; // ISO
  readingTime: string;
  popularity: number; // 0-100
  trending?: boolean;
  synonyms?: string[];
  relatedArticleSlugs?: string[]; // link back to blog articles
};

const t = (o: GlossaryTerm) => o;

export const glossaryTerms: GlossaryTerm[] = [
  t({
    slug: "bolsa-familia",
    term: "Bolsa Família",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "Bolsa Família is a Brazilian federal cash transfer program that pays a monthly benefit to low-income families registered in CadÚnico. It aims to reduce poverty, guarantee school attendance and access to basic healthcare, with a minimum payment of R$ 600 plus per-child supplements.",
    definition:
      "Bolsa Família is the flagship social protection program of the Brazilian federal government, delivering a monthly cash transfer to families in poverty and extreme poverty. Eligibility is based on per-capita household income, verified through the Cadastro Único (CadÚnico), and conditioned on school attendance and vaccination up-to-date status.",
    keyFacts: [
      "Managed by the Ministry of Social Development (MDS).",
      "Minimum payment of R$ 600 per family, plus supplements per child.",
      "Payments distributed by Caixa Econômica Federal via Caixa Tem.",
      "Requires CadÚnico registration and periodic recertification.",
    ],
    practicalExample:
      "A family of four with per-capita income under the poverty line, registered in CadÚnico with children enrolled in school, receives a monthly deposit into a Caixa Tem digital account following the official calendar based on the last digit of the NIS.",
    whyItMatters:
      "The program is one of the most studied conditional cash transfer initiatives in the world and a central pillar for reducing hunger, income inequality and child school dropout in Brazil.",
    howItWorks: [
      "The family registers at a CRAS unit to enter CadÚnico.",
      "Eligibility is calculated based on per-capita monthly income.",
      "Payments are released monthly on a calendar published by Caixa.",
      "Beneficiaries must keep school attendance and health conditions in check.",
    ],
    advantages: [
      "Immediate impact on family income and food security.",
      "Encourages school attendance and vaccination.",
      "Digital payment via Caixa Tem reduces bureaucracy.",
    ],
    disadvantages: [
      "Requires recurring recertification, which can lead to unfair cancellations.",
      "Values may not follow inflation in real time.",
    ],
    commonMistakes: [
      "Not updating CadÚnico every 24 months.",
      "Ignoring conditionalities like school attendance.",
      "Missing withdrawal windows and losing the parcel.",
    ],
    faqs: [
      {
        q: "Who is eligible for Bolsa Família?",
        a: "Families in poverty or extreme poverty registered in CadÚnico with per-capita income below the federal threshold.",
      },
      {
        q: "How can I check my Bolsa Família payment?",
        a: "Through the Caixa Tem app, the Bolsa Família app or at any Caixa lottery agent using the Social ID (NIS).",
      },
      {
        q: "Can I lose the benefit?",
        a: "Yes, if you fail to meet conditionalities, exceed the income threshold or do not recertify CadÚnico.",
      },
    ],
    related: ["cadunico", "bpc-loas", "auxilio-gas", "tarifa-social"],
    furtherReading: [
      { title: "Ministry of Social Development", href: "https://www.gov.br/mds" },
      { title: "CadÚnico official page", href: "https://cadunico.dataprev.gov.br" },
    ],
    references: [
      { title: "Lei nº 14.601/2023 — Bolsa Família", href: "https://www.planalto.gov.br" },
    ],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-18",
    readingTime: "7 min",
    popularity: 98,
    trending: true,
    synonyms: ["Family Grant", "Programa Bolsa Família", "PBF"],
    relatedArticleSlugs: ["bolsa-familia-calendario-pagamentos"],
  }),
  t({
    slug: "inss",
    term: "INSS",
    category: "Social Security",
    categorySlug: "social-security",
    shortAnswer:
      "The INSS (Instituto Nacional do Seguro Social) is the Brazilian federal agency responsible for paying retirement pensions, disability benefits, maternity pay and other social security benefits to insured workers who contribute to the RGPS.",
    definition:
      "INSS is the executive body of the General Social Security Regime (RGPS), managing contributions and benefits for private-sector workers, self-employed contributors and optional insured persons in Brazil.",
    keyFacts: [
      "Founded in 1990, headquartered in Brasília.",
      "Pays over 40 million monthly benefits.",
      "Contributions are calculated on payroll or a chosen contribution salary.",
      "Digital service via Meu INSS app.",
    ],
    practicalExample:
      "A CLT employee earning R$ 3,000 has an INSS contribution automatically deducted from payroll each month, accumulating time and salary-of-contribution used later to calculate retirement.",
    whyItMatters:
      "INSS is the main safety net for retirement, disability and death for the majority of Brazilian workers.",
    howItWorks: [
      "Worker or employer pays the monthly contribution.",
      "Contributions are recorded in CNIS.",
      "When eligibility is met, the insured requests the benefit via Meu INSS.",
      "INSS analyzes documentation and grants or denies the benefit.",
    ],
    advantages: [
      "Nationwide coverage.",
      "Multiple benefit types.",
      "Digital-first channels reduce waiting times.",
    ],
    disadvantages: [
      "Long queues for medical review.",
      "Complex rules after the 2019 pension reform.",
    ],
    commonMistakes: [
      "Not checking CNIS for missing contributions.",
      "Contributing under the wrong code as MEI or self-employed.",
      "Requesting the benefit without required documents.",
    ],
    faqs: [
      { q: "What does INSS pay for?", a: "Retirement, disability, sick pay, maternity, death pension and reclusion aid." },
      { q: "How do I check my contributions?", a: "Access Meu INSS with your gov.br account and open the CNIS statement." },
    ],
    related: ["cnis", "aposentadoria-por-idade", "revisao-da-vida-toda", "auxilio-doenca", "bpc-loas"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-18",
    readingTime: "8 min",
    popularity: 96,
    trending: true,
    synonyms: ["National Social Security Institute", "Previdência Social"],
    relatedArticleSlugs: ["inss-revisao-vida-toda-stf", "auxilio-doenca-perito", "aposentadoria-por-idade-2027"],
  }),
  t({
    slug: "fgts",
    term: "FGTS",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "FGTS (Fundo de Garantia do Tempo de Serviço) is a Brazilian labor fund where employers deposit 8% of each worker's monthly salary into a linked account. Workers can withdraw it in specific situations such as dismissal without cause, home purchase or serious illness.",
    definition:
      "The FGTS is a labor protection mechanism created in 1966 to shield workers against unjust dismissal, financed by mandatory monthly employer deposits and managed by Caixa Econômica Federal.",
    keyFacts: [
      "8% of salary deposited monthly by the employer.",
      "Managed by Caixa Econômica Federal.",
      "Annual profit distribution to accounts.",
      "Two withdrawal modes: standard and birthday withdrawal.",
    ],
    practicalExample:
      "A CLT employee dismissed without just cause receives the entire FGTS balance plus a 40% fine paid by the employer directly into their linked account.",
    whyItMatters:
      "FGTS is a key personal savings and social housing funding source in Brazil.",
    howItWorks: [
      "Employer deposits 8% monthly.",
      "The balance earns TR + 3% annually plus a share of the fund's profit.",
      "Withdrawal occurs when a legal condition is met.",
    ],
    advantages: [
      "Automatic labor protection.",
      "Access to subsidized housing financing.",
    ],
    disadvantages: [
      "Yield historically below inflation.",
      "Birthday withdrawal blocks full termination access.",
    ],
    commonMistakes: [
      "Adhering to birthday withdrawal without understanding the loss of termination fine access.",
      "Ignoring missing deposits from employer.",
    ],
    faqs: [
      { q: "How much is deposited into FGTS?", a: "8% of gross salary for CLT workers, 2% for young apprentices." },
      { q: "Can I withdraw FGTS anytime?", a: "No — only in legally listed situations like dismissal, retirement, home purchase or serious illness." },
    ],
    related: ["saque-aniversario", "clt", "seguro-desemprego", "minha-casa-minha-vida"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-17",
    readingTime: "6 min",
    popularity: 91,
    trending: true,
    synonyms: ["Length-of-Service Guarantee Fund"],
    relatedArticleSlugs: ["fgts-saque-aniversario-2027"],
  }),
  t({
    slug: "pix",
    term: "Pix",
    category: "Banking",
    categorySlug: "banking",
    shortAnswer:
      "Pix is the Brazilian instant payment system created by the Central Bank of Brazil, enabling free 24/7 transfers between individuals and businesses in seconds using keys such as CPF, phone number, email or a random key.",
    definition:
      "Launched in November 2020, Pix is an interbank payment infrastructure that settles transactions in real time, working every day of the year including holidays and weekends.",
    keyFacts: [
      "Operated by the Central Bank of Brazil.",
      "Free for individuals.",
      "Settlement in up to 10 seconds.",
      "Supports Pix Copia e Cola, QR Code and Pix Automático.",
    ],
    practicalExample:
      "A customer at a bakery scans a QR code with their bank app and instantly pays the merchant, who receives the funds in seconds without card fees.",
    whyItMatters:
      "Pix radically reduced the cost of transfers and accelerated financial inclusion in Brazil.",
    howItWorks: [
      "The payer scans a QR code or uses a Pix key.",
      "The bank routes the transfer through the SPI at the Central Bank.",
      "The receiver's bank credits the account instantly.",
    ],
    advantages: ["Free and instant.", "Available 24/7.", "Interoperable across all banks."],
    disadvantages: ["Fraud attempts increased.", "Daily limits for security."],
    commonMistakes: [
      "Sharing Pix keys publicly.",
      "Confirming payment without checking the recipient name.",
    ],
    faqs: [
      { q: "Is Pix free?", a: "Yes for individuals; businesses may pay a small fee depending on the bank." },
      { q: "Can Pix be reversed?", a: "Only through the MED (Special Return Mechanism) in cases of proven fraud." },
    ],
    related: ["pix-automatico", "open-finance", "boleto", "cartao-de-credito"],
    author: "Marina Alves",
    lastUpdated: "2026-11-16",
    readingTime: "5 min",
    popularity: 99,
    trending: true,
    synonyms: ["Brazilian Instant Payment"],
    relatedArticleSlugs: ["pix-automatico-novas-regras"],
  }),
  t({
    slug: "pix-automatico",
    term: "Pix Automático",
    category: "Banking",
    categorySlug: "banking",
    shortAnswer:
      "Pix Automático is a recurring payment feature built on top of Pix, allowing customers to authorize automatic charges from utilities, streaming services and other providers directly from their bank account, replacing debit orders and boletos.",
    definition:
      "Pix Automático is a scheduled and recurring payment functionality regulated by the Central Bank, offering a low-cost alternative to traditional recurring billing.",
    keyFacts: [
      "Launched in 2025 by the Central Bank of Brazil.",
      "Requires prior authorization by the payer.",
      "Can be cancelled at any time via the bank app.",
    ],
    practicalExample:
      "A streaming subscriber authorizes monthly Pix Automático charges directly in the app, replacing credit card billing.",
    whyItMatters: "It reduces reliance on cards and boletos, cutting costs and defaults.",
    howItWorks: [
      "Provider requests authorization to the payer's bank.",
      "Payer approves within the bank app.",
      "Charges are executed automatically on the agreed dates.",
    ],
    advantages: ["Cheaper than card processing.", "Full user control over authorization."],
    commonMistakes: ["Authorizing charges without reading contract terms."],
    faqs: [
      { q: "How to cancel Pix Automático?", a: "Directly in the bank app under recurring payment authorizations." },
    ],
    related: ["pix", "boleto", "open-finance"],
    author: "Marina Alves",
    lastUpdated: "2026-11-16",
    readingTime: "4 min",
    popularity: 78,
    synonyms: ["Recurring Pix"],
    relatedArticleSlugs: ["pix-automatico-novas-regras"],
  }),
  t({
    slug: "imposto-de-renda",
    term: "Imposto de Renda",
    category: "Taxes",
    categorySlug: "taxes",
    shortAnswer:
      "Imposto de Renda is the Brazilian income tax levied on individuals (IRPF) and companies (IRPJ), collected by the Receita Federal. Individuals must declare annual income and pay tax on amounts above the exemption threshold, with progressive rates up to 27.5%.",
    definition:
      "The Brazilian income tax is administered by Receita Federal, with annual declaration deadlines and progressive brackets for individuals plus corporate rules for legal entities.",
    keyFacts: [
      "Progressive rates up to 27.5% for individuals.",
      "Declared once per year.",
      "Simplified discount available.",
      "Managed via the e-CAC portal.",
    ],
    practicalExample:
      "An employee earning R$ 5,500 monthly declares the annual sum and calculates whether they owe or are entitled to a refund based on withholdings.",
    whyItMatters: "It funds public services and is a critical annual obligation for millions of Brazilians.",
    howItWorks: [
      "Taxpayer collects income and expense documents.",
      "Uses the IRPF program to declare.",
      "Submits to Receita Federal by the deadline.",
    ],
    advantages: ["Enables refunds when tax withheld exceeds due amount.", "Structured deductions."],
    disadvantages: ["Complex rules.", "Penalties for late submission."],
    commonMistakes: [
      "Forgetting to declare dependents' income.",
      "Missing the deadline and paying fine.",
    ],
    faqs: [
      { q: "Who must file IR?", a: "Anyone with annual taxable income above the current threshold or specific asset conditions." },
      { q: "When is the refund paid?", a: "In monthly batches following the priority order set by Receita Federal." },
    ],
    related: ["restituicao-ir", "mei", "receita-federal", "cpf"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-17",
    readingTime: "8 min",
    popularity: 94,
    trending: true,
    synonyms: ["Income Tax", "IRPF"],
    relatedArticleSlugs: ["imposto-de-renda-2027-tabela", "restituicao-ir-consultar"],
  }),
  t({
    slug: "cadunico",
    term: "CadÚnico",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "CadÚnico (Cadastro Único) is the Brazilian federal registry that identifies low-income families and grants access to social programs such as Bolsa Família, Tarifa Social, BPC/LOAS and Minha Casa Minha Vida.",
    definition:
      "A unified federal database managed by MDS and operated by municipalities through CRAS units, gathering socioeconomic data of families with per-capita income up to half a minimum wage.",
    keyFacts: [
      "Managed by MDS, operated at CRAS units.",
      "Mandatory recertification every 24 months.",
      "Gateway to over 30 social programs.",
    ],
    practicalExample:
      "A family visits the CRAS with documents and answers a socioeconomic questionnaire to enter CadÚnico and become eligible for Bolsa Família and Tarifa Social.",
    whyItMatters: "It is the single point of entry to nearly every Brazilian social program.",
    howItWorks: [
      "Family schedules a visit at CRAS.",
      "Registrar fills the socioeconomic form.",
      "Data flows to federal systems within days.",
    ],
    advantages: ["Unified access to social programs.", "Free registration."],
    disadvantages: ["Cancelled benefits if not updated."],
    commonMistakes: ["Failing to update after moving or income change."],
    faqs: [
      { q: "Who can enter CadÚnico?", a: "Families with per-capita income up to half a minimum wage or up to three minimum wages when using specific programs." },
    ],
    related: ["bolsa-familia", "bpc-loas", "tarifa-social", "auxilio-gas"],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-09",
    readingTime: "5 min",
    popularity: 82,
    synonyms: ["Cadastro Único", "Single Registry"],
    relatedArticleSlugs: ["cadunico-atualizar-cadastro"],
  }),
  t({
    slug: "bpc-loas",
    term: "BPC/LOAS",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "BPC/LOAS is a Brazilian assistance benefit of one minimum wage paid to elderly people over 65 or persons with disability from low-income families, regardless of prior INSS contributions.",
    definition:
      "The Continuous Cash Benefit (Benefício de Prestação Continuada) is a non-contributory assistance program based on LOAS (Organic Law of Social Assistance).",
    keyFacts: [
      "One minimum wage per month.",
      "No prior INSS contributions required.",
      "Requires CadÚnico registration.",
    ],
    practicalExample:
      "A 68-year-old with per-capita family income under a quarter of a minimum wage requests BPC through Meu INSS and receives the monthly benefit.",
    whyItMatters: "It is the main safety net for low-income elderly and PWD in Brazil.",
    howItWorks: [
      "CadÚnico registration.",
      "Request via Meu INSS.",
      "Social and medical evaluation.",
    ],
    advantages: ["Guaranteed minimum wage.", "No contribution required."],
    disadvantages: ["Strict income cut-off.", "Periodic reviews."],
    commonMistakes: ["Not keeping CadÚnico updated.", "Missing medical review."],
    faqs: [{ q: "Does BPC generate a 13th salary?", a: "No, BPC does not include a 13th salary." }],
    related: ["cadunico", "inss", "bolsa-familia"],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-15",
    readingTime: "6 min",
    popularity: 84,
    synonyms: ["Continuous Cash Benefit"],
    relatedArticleSlugs: ["bpc-loas-quem-tem-direito"],
  }),
  t({
    slug: "cpf",
    term: "CPF",
    category: "Documents",
    categorySlug: "documents",
    shortAnswer:
      "CPF (Cadastro de Pessoas Físicas) is the Brazilian individual taxpayer registry, an 11-digit number issued by the Receita Federal, required for banking, employment, contracts and access to most government services.",
    definition:
      "A unique national identifier for individuals in Brazil, managed by Receita Federal and required for most legal and financial transactions.",
    keyFacts: [
      "Managed by Receita Federal.",
      "Free issuance and updates.",
      "Required from birth for tax purposes.",
    ],
    practicalExample:
      "A newborn is registered at the notary and the CPF is issued automatically together with the birth certificate.",
    whyItMatters: "It is the primary key for the entire Brazilian digital government.",
    howItWorks: [
      "Request via gov.br or notary.",
      "Update by CPF portal.",
    ],
    advantages: ["Free.", "Universal identifier."],
    commonMistakes: ["Sharing CPF with untrusted parties."],
    faqs: [{ q: "How to check CPF status?", a: "On the CPF page at receita.fazenda.gov.br." }],
    related: ["cnh", "carteira-de-trabalho-digital", "imposto-de-renda", "receita-federal"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 89,
    synonyms: ["Brazilian Tax ID"],
  }),
  t({
    slug: "cnh",
    term: "CNH",
    category: "Documents",
    categorySlug: "documents",
    shortAnswer:
      "CNH (Carteira Nacional de Habilitação) is the Brazilian national driver's license, issued by Detran after theoretical and practical exams. It is also accepted as a national identity document.",
    definition:
      "An official driving credential regulated by CONTRAN and issued by state Detrans, with multiple categories from A to E.",
    keyFacts: [
      "Categories A, B, C, D, E.",
      "Valid up to 10 years depending on age.",
      "Digital version available in the CDT app.",
    ],
    practicalExample:
      "A driver renewing the CNH schedules the medical exam at Detran, pays the fee and receives the new document within days.",
    whyItMatters: "Mandatory for driving and widely accepted as ID.",
    howItWorks: [
      "Enroll at Detran.",
      "Take theoretical and practical tests.",
      "Receive the CNH.",
    ],
    advantages: ["National validity.", "Digital version."],
    disadvantages: ["Cost of process may be high."],
    commonMistakes: ["Driving with expired CNH."],
    faqs: [{ q: "What is CNH Social?", a: "A program that grants a free first CNH to low-income citizens." }],
    related: ["cpf", "cnh-social", "detran"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-12",
    readingTime: "5 min",
    popularity: 80,
    synonyms: ["Brazilian Driver License"],
    relatedArticleSlugs: ["cnh-social-gratuita"],
  }),
  t({
    slug: "cnh-social",
    term: "CNH Social",
    category: "Documents",
    categorySlug: "documents",
    shortAnswer:
      "CNH Social is a state-level Brazilian program that offers a free first driver's license to low-income citizens, covering medical exams, theoretical and practical classes and issuance fees.",
    definition:
      "A social initiative organized by state Detrans providing free CNH issuance to eligible citizens registered in CadÚnico.",
    keyFacts: [
      "Requires CadÚnico enrollment.",
      "Offered by several Brazilian states.",
      "Includes categories A and B.",
    ],
    practicalExample:
      "A CadÚnico beneficiary applies for CNH Social at the state Detran portal and, if selected, takes all classes free of charge.",
    whyItMatters: "Facilitates access to formal jobs that require a driver's license.",
    howItWorks: [
      "Check openings at the state Detran.",
      "Submit CadÚnico information.",
      "Attend classes when selected.",
    ],
    advantages: ["Free.", "Boosts employability."],
    commonMistakes: ["Missing application window."],
    faqs: [{ q: "Who can apply?", a: "Citizens registered in CadÚnico with low income and no prior CNH." }],
    related: ["cnh", "cadunico"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-12",
    readingTime: "5 min",
    popularity: 77,
    relatedArticleSlugs: ["cnh-social-gratuita"],
  }),
  t({
    slug: "carteira-de-trabalho-digital",
    term: "Carteira de Trabalho Digital",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "Carteira de Trabalho Digital (CTPS Digital) is the electronic Brazilian labor booklet that replaces the physical CTPS, storing employment contracts, FGTS balance and social security data in one gov.br-linked app.",
    definition:
      "An official digital labor identity managed by the Ministry of Labor, tying employment data to the citizen's CPF and gov.br account.",
    keyFacts: [
      "Automatic issuance via CPF.",
      "Available on Android and iOS.",
      "Integrates with eSocial.",
    ],
    practicalExample:
      "A worker downloads the CTPS Digital app, logs in with gov.br and reviews the complete history of contracts and FGTS balance.",
    whyItMatters: "Reduces paperwork and increases transparency in the employment relationship.",
    howItWorks: [
      "Employer registers admission in eSocial.",
      "Data appears in the worker's CTPS Digital app.",
    ],
    advantages: ["Paperless.", "Real-time updates."],
    disadvantages: ["Requires digital literacy."],
    commonMistakes: ["Ignoring wrong data reported by employer."],
    faqs: [{ q: "Do I need physical CTPS?", a: "No, the digital one has full legal validity." }],
    related: ["fgts", "clt", "esocial"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-14",
    readingTime: "5 min",
    popularity: 76,
    synonyms: ["Digital Labor Booklet", "CTPS Digital"],
    relatedArticleSlugs: ["carteira-trabalho-digital-atualizar"],
  }),
  t({
    slug: "clt",
    term: "CLT",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "CLT (Consolidação das Leis do Trabalho) is the Brazilian labor law framework enacted in 1943, defining formal employment rights such as paid vacation, 13th salary, FGTS, notice period and overtime.",
    definition:
      "A federal decree-law unifying Brazilian labor rules and setting minimum standards for formal employment relationships.",
    keyFacts: [
      "Signed in 1943.",
      "Regulates paid vacation, 13th salary, FGTS.",
      "Reformed in 2017 (Reforma Trabalhista).",
    ],
    practicalExample:
      "An employee under CLT accrues 30 days of paid vacation after 12 months of continuous work.",
    whyItMatters: "It sets the baseline of protection for formally employed Brazilians.",
    howItWorks: [
      "Employer registers admission.",
      "Rights accrue during the contract.",
      "Termination triggers legal payments.",
    ],
    advantages: ["Strong legal protection.", "Access to unemployment insurance."],
    disadvantages: ["Higher hiring cost for employers."],
    commonMistakes: ["Confusing PJ with CLT contracts."],
    faqs: [{ q: "Do MEIs follow CLT?", a: "No, MEIs are self-employed and have different rules." }],
    related: ["fgts", "seguro-desemprego", "carteira-de-trabalho-digital", "consignado"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-10",
    readingTime: "6 min",
    popularity: 88,
    synonyms: ["Brazilian Labor Code"],
  }),
  t({
    slug: "mei",
    term: "MEI",
    category: "Taxes",
    categorySlug: "taxes",
    shortAnswer:
      "MEI (Microempreendedor Individual) is a simplified Brazilian legal entity for self-employed workers with annual revenue up to the federal cap, paying a single monthly fee that covers INSS, ICMS and ISS.",
    definition:
      "A special tax regime for small entrepreneurs, providing CNPJ, simplified accounting and social security coverage.",
    keyFacts: [
      "Annual revenue cap defined by federal law.",
      "Monthly DAS covers taxes.",
      "Provides INSS coverage.",
    ],
    practicalExample:
      "A hairdresser opens a MEI, receives a CNPJ and starts issuing invoices while paying a fixed monthly DAS.",
    whyItMatters: "Formalizes millions of Brazilian workers with minimum bureaucracy.",
    howItWorks: [
      "Register on the Portal do Empreendedor.",
      "Pay DAS monthly.",
      "File an annual revenue statement (DASN-SIMEI).",
    ],
    advantages: ["Low cost.", "Simple compliance.", "INSS coverage."],
    disadvantages: ["Revenue cap.", "Limited activities."],
    commonMistakes: ["Not filing DASN-SIMEI.", "Exceeding the revenue cap."],
    faqs: [{ q: "Can MEI hire employees?", a: "Yes, one employee earning the minimum wage or the professional floor of the activity." }],
    related: ["imposto-de-renda", "inss", "cnpj"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-11",
    readingTime: "6 min",
    popularity: 90,
    synonyms: ["Individual Microentrepreneur"],
    relatedArticleSlugs: ["mei-limite-faturamento"],
  }),
  t({
    slug: "aposentadoria-por-idade",
    term: "Aposentadoria por Idade",
    category: "Social Security",
    categorySlug: "social-security",
    shortAnswer:
      "Aposentadoria por Idade is the Brazilian age-based retirement, requiring 62 years for women and 65 years for men, plus a minimum contribution period of 15 to 20 years depending on gender and joining date after the 2019 reform.",
    definition:
      "A retirement modality of the RGPS based on age and minimum contribution period, granted by INSS.",
    keyFacts: [
      "Women retire at 62, men at 65.",
      "Minimum contribution of 15 years (women joined before 2019) or 20 years (men joined after 2019).",
      "Requested through Meu INSS.",
    ],
    practicalExample:
      "A 65-year-old worker with 20 years of contributions requests retirement online and, after documentary analysis, starts receiving the monthly benefit.",
    whyItMatters: "It is the main retirement path for Brazilian workers.",
    howItWorks: [
      "Reach age and contribution requirements.",
      "Submit request via Meu INSS.",
      "Await INSS analysis.",
    ],
    advantages: ["Lifetime income.", "Death pension eligibility for dependents."],
    disadvantages: ["Value tied to average contribution salary."],
    commonMistakes: ["Not organizing CNIS beforehand."],
    faqs: [{ q: "Does it depend on the pension reform?", a: "Yes, transition rules apply for those already contributing before 2019." }],
    related: ["inss", "cnis", "revisao-da-vida-toda"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-10",
    readingTime: "8 min",
    popularity: 86,
    relatedArticleSlugs: ["aposentadoria-por-idade-2027"],
  }),
  t({
    slug: "revisao-da-vida-toda",
    term: "Revisão da Vida Toda",
    category: "Social Security",
    categorySlug: "social-security",
    shortAnswer:
      "Revisão da Vida Toda is a Brazilian legal thesis that lets retirees include contributions made before July 1994 in the INSS benefit calculation, potentially increasing the monthly amount.",
    definition:
      "A judicial review that expands the calculation base of certain INSS retirements to include pre-Real currency contributions.",
    keyFacts: [
      "Recognized by the STF.",
      "Applies only when it favors the retiree.",
      "Requires legal action.",
    ],
    practicalExample:
      "A retiree who contributed heavily in the 1980s asks the review and obtains a higher benefit after judicial calculation.",
    whyItMatters: "It can significantly increase the retirement value.",
    howItWorks: [
      "Simulate with a specialized calculation.",
      "File a lawsuit through a lawyer.",
      "Await judicial decision.",
    ],
    advantages: ["Potentially higher benefits."],
    disadvantages: ["Long judicial timeframe.", "Not always favorable."],
    commonMistakes: ["Requesting without prior simulation."],
    faqs: [{ q: "Who can request?", a: "Retirees whose calculation improves when pre-1994 contributions are included." }],
    related: ["inss", "aposentadoria-por-idade"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-18",
    readingTime: "7 min",
    popularity: 79,
    relatedArticleSlugs: ["inss-revisao-vida-toda-stf"],
  }),
  t({
    slug: "auxilio-doenca",
    term: "Auxílio-Doença",
    category: "Social Security",
    categorySlug: "social-security",
    shortAnswer:
      "Auxílio-Doença (now called Auxílio por Incapacidade Temporária) is an INSS benefit paid to insured workers who are temporarily unable to work due to illness or accident for more than 15 consecutive days.",
    definition:
      "A social security benefit granted after medical evaluation to workers temporarily incapable of performing their labor activities.",
    keyFacts: [
      "Requires at least 12 monthly contributions in most cases.",
      "Medical evaluation via telemedicine or in-person.",
      "Duration depends on medical opinion.",
    ],
    practicalExample:
      "A worker after knee surgery requests the benefit on Meu INSS, undergoes telemedicine evaluation and receives monthly payments while recovering.",
    whyItMatters: "Provides income during medical recovery.",
    howItWorks: [
      "Request via Meu INSS.",
      "Undergo perícia médica.",
      "Receive payment while incapacity persists.",
    ],
    advantages: ["Income during recovery."],
    disadvantages: ["Long queues for perícia."],
    commonMistakes: ["Missing perícia appointment."],
    faqs: [{ q: "Is there a waiting period?", a: "The first 15 days are paid by the employer for CLT workers." }],
    related: ["inss", "bpc-loas"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-06",
    readingTime: "6 min",
    popularity: 75,
    relatedArticleSlugs: ["auxilio-doenca-perito"],
  }),
  t({
    slug: "seguro-desemprego",
    term: "Seguro-Desemprego",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "Seguro-Desemprego is a Brazilian temporary benefit paid to formal workers dismissed without just cause, offering three to five monthly installments based on time of service and average salary.",
    definition:
      "A federal labor protection benefit financed by FAT and administered through the Ministry of Labor.",
    keyFacts: [
      "3 to 5 installments depending on tenure.",
      "Requested via CTPS Digital or SINE.",
      "Minimum equal to the minimum wage.",
    ],
    practicalExample:
      "A worker dismissed after 24 months of tenure requests the benefit and receives four monthly installments while looking for a new job.",
    whyItMatters: "Provides income between jobs.",
    howItWorks: [
      "Employer issues termination documents.",
      "Worker requests the benefit within the legal window.",
    ],
    advantages: ["Temporary income guarantee."],
    disadvantages: ["Limited number of installments."],
    commonMistakes: ["Missing the request deadline."],
    faqs: [{ q: "Can I request while working?", a: "No, only unemployed and without other income sources." }],
    related: ["fgts", "clt", "carteira-de-trabalho-digital"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-11",
    readingTime: "5 min",
    popularity: 78,
    relatedArticleSlugs: ["seguro-desemprego-parcelas"],
  }),
  t({
    slug: "saque-aniversario",
    term: "Saque-Aniversário FGTS",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "Saque-Aniversário is an FGTS withdrawal mode that lets workers withdraw part of the balance every year in their birth month, in exchange for losing access to the full balance in case of dismissal without just cause.",
    definition:
      "An optional FGTS modality regulated by federal law, offering yearly access to part of the balance.",
    keyFacts: [
      "Optional adhesion.",
      "Return to standard mode has a 24-month cooldown.",
      "Doesn't affect the 40% termination fine.",
    ],
    practicalExample:
      "A worker born in March adheres to Saque-Aniversário and withdraws a percentage of the FGTS balance every March.",
    whyItMatters: "Increases short-term liquidity but restricts termination access.",
    howItWorks: [
      "Adhere through Caixa app.",
      "Withdrawal available in birth month.",
    ],
    advantages: ["Annual liquidity."],
    disadvantages: ["Blocks full FGTS withdrawal on termination.", "Long cooldown to revert."],
    commonMistakes: ["Adhering without understanding the impact on termination."],
    faqs: [{ q: "Can I return to standard mode?", a: "Yes, but the change only takes effect 24 months later." }],
    related: ["fgts", "clt", "seguro-desemprego"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-17",
    readingTime: "5 min",
    popularity: 74,
    relatedArticleSlugs: ["fgts-saque-aniversario-2027"],
  }),
  t({
    slug: "cnis",
    term: "CNIS",
    category: "Social Security",
    categorySlug: "social-security",
    shortAnswer:
      "CNIS (Cadastro Nacional de Informações Sociais) is the Brazilian federal database that stores contribution and labor data for INSS, used to calculate retirements and other social security benefits.",
    definition:
      "A central federal registry of contribution records feeding INSS eligibility and benefit calculations.",
    keyFacts: [
      "Managed by Dataprev.",
      "Consulted through Meu INSS.",
      "Corrections require documentary proof.",
    ],
    practicalExample:
      "Before retiring, a worker opens CNIS on Meu INSS and identifies missing contributions to correct.",
    whyItMatters: "Errors in CNIS can reduce or delay benefits.",
    howItWorks: [
      "Access Meu INSS.",
      "Open CNIS statement.",
      "Request corrections when needed.",
    ],
    advantages: ["Free.", "Detailed contribution history."],
    commonMistakes: ["Not reviewing CNIS before retirement."],
    faqs: [{ q: "Can I fix CNIS online?", a: "Yes, for many types of corrections through Meu INSS with proof documents." }],
    related: ["inss", "aposentadoria-por-idade", "revisao-da-vida-toda"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-10",
    readingTime: "5 min",
    popularity: 72,
  }),
  t({
    slug: "selic",
    term: "Taxa Selic",
    category: "Economy",
    categorySlug: "economy",
    shortAnswer:
      "The Selic rate is the Brazilian basic interest rate defined by the Central Bank's Copom, guiding all other interest rates in the economy, including loans, financing and government bonds like Tesouro Selic.",
    definition:
      "The basic rate of the Brazilian economy, defined at Copom meetings and used as the reference for monetary policy.",
    keyFacts: [
      "Defined by Copom every 45 days.",
      "Anchors Tesouro Selic yields.",
      "Impacts inflation and credit.",
    ],
    practicalExample:
      "When Copom raises Selic, mortgage interest and credit card rates typically rise, while Tesouro Selic yields more.",
    whyItMatters: "It is the primary lever of Brazilian monetary policy.",
    howItWorks: [
      "Copom evaluates inflation and activity.",
      "Sets Selic target.",
      "BCB operates open market to enforce it.",
    ],
    advantages: ["Anchor for inflation control."],
    disadvantages: ["Higher Selic slows credit and growth."],
    commonMistakes: ["Confusing Selic with CDI."],
    faqs: [{ q: "How often is Selic reviewed?", a: "Approximately every 45 days at Copom meetings." }],
    related: ["ipca", "cdi", "tesouro-direto"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-15",
    readingTime: "5 min",
    popularity: 85,
    trending: true,
    relatedArticleSlugs: ["selic-copom-corte-juros"],
  }),
  t({
    slug: "ipca",
    term: "IPCA",
    category: "Economy",
    categorySlug: "economy",
    shortAnswer:
      "IPCA (Índice Nacional de Preços ao Consumidor Amplo) is the official Brazilian inflation index calculated by IBGE, measuring price changes for families earning 1 to 40 minimum wages in major metropolitan regions.",
    definition:
      "The reference index for Brazil's inflation target regime, published monthly by IBGE.",
    keyFacts: [
      "Published monthly by IBGE.",
      "Reference for inflation target.",
      "Weighted by household consumption structure.",
    ],
    practicalExample:
      "When IPCA prints above the target, Copom tends to raise Selic to contain price increases.",
    whyItMatters: "It drives monetary policy and contract adjustments.",
    howItWorks: [
      "IBGE collects prices in metro areas.",
      "Weights by household consumption.",
      "Publishes monthly variation.",
    ],
    advantages: ["Official inflation reference."],
    commonMistakes: ["Confusing IPCA with IGP-M."],
    faqs: [{ q: "What is the inflation target?", a: "Set by CMN and pursued by BCB with a tolerance band." }],
    related: ["selic", "cdi"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-04",
    readingTime: "4 min",
    popularity: 71,
    relatedArticleSlugs: ["inflacao-ipca-mensal"],
  }),
  t({
    slug: "cdi",
    term: "CDI",
    category: "Economy",
    categorySlug: "economy",
    shortAnswer:
      "CDI (Certificado de Depósito Interbancário) is the Brazilian benchmark for fixed-income yields, closely tracking the Selic rate and used to price CDBs, LCIs, LCAs and other conservative investments.",
    definition:
      "An interbank interest rate reflecting the cost of overnight funding among Brazilian banks.",
    keyFacts: [
      "Very close to Selic.",
      "Reference for CDBs and DI funds.",
      "Published daily by B3.",
    ],
    practicalExample:
      "A CDB paying 110% of CDI yields close to 110% of the current Selic.",
    whyItMatters: "Nearly every fixed-income product is quoted as a percentage of CDI.",
    howItWorks: [
      "Banks lend to each other overnight.",
      "The average rate becomes CDI.",
    ],
    advantages: ["Transparent benchmark."],
    commonMistakes: ["Assuming 100% CDI equals Selic without tax adjustment."],
    faqs: [{ q: "Is 100% CDI good?", a: "It's the base reference; premium products offer 110%+ CDI." }],
    related: ["selic", "tesouro-direto", "cartao-de-credito"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 68,
  }),
  t({
    slug: "tesouro-direto",
    term: "Tesouro Direto",
    category: "Finance",
    categorySlug: "finance",
    shortAnswer:
      "Tesouro Direto is the Brazilian federal government's online program that lets individuals invest in Treasury bonds starting from around R$ 30, with options indexed to Selic, IPCA or fixed rates.",
    definition:
      "A retail investment platform operated by the National Treasury and B3 to sell public bonds directly to individuals.",
    keyFacts: [
      "Started in 2002.",
      "Minimum investment near R$ 30.",
      "Different bond types for different goals.",
    ],
    practicalExample:
      "A saver buys Tesouro Selic as an emergency reserve because of daily liquidity and low volatility.",
    whyItMatters: "It democratized access to Brazilian government bonds.",
    howItWorks: [
      "Open a brokerage account.",
      "Choose a bond type.",
      "Purchase via broker platform.",
    ],
    advantages: ["Low ticket.", "Government credit risk."],
    disadvantages: ["Market volatility for IPCA and prefixed bonds sold before maturity."],
    commonMistakes: ["Selling long-term bonds early at a loss."],
    faqs: [{ q: "Is Tesouro Direto safe?", a: "It has the lowest credit risk in Brazil, guaranteed by the federal government." }],
    related: ["selic", "cdi", "educacao-financeira"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-05",
    readingTime: "6 min",
    popularity: 73,
  }),
  t({
    slug: "cartao-de-credito",
    term: "Cartão de Crédito",
    category: "Finance",
    categorySlug: "finance",
    shortAnswer:
      "A credit card is a payment instrument that lets consumers buy on credit within a limit and pay later through a monthly bill, with optional installment plans and rewards such as cashback and miles.",
    definition:
      "A revolving credit product issued by banks and fintechs that consolidates purchases into a monthly statement.",
    keyFacts: [
      "Interest is among the highest in the world in Brazil.",
      "Includes rewards, cashback and miles.",
      "Contactless and virtual cards widely available.",
    ],
    practicalExample:
      "A consumer buys electronics in 10 interest-free installments and pays the invoice each month.",
    whyItMatters: "It's a widely used payment method that also carries significant debt risk.",
    howItWorks: [
      "Bank grants a credit limit.",
      "Purchases accumulate on the statement.",
      "Full payment avoids interest.",
    ],
    advantages: ["Convenience.", "Rewards."],
    disadvantages: ["Very high revolving interest."],
    commonMistakes: ["Paying only the minimum invoice."],
    faqs: [{ q: "How to avoid interest?", a: "Always pay the full invoice by the due date." }],
    related: ["consignado", "educacao-financeira", "pix"],
    author: "Marina Alves",
    lastUpdated: "2026-11-08",
    readingTime: "8 min",
    popularity: 82,
    relatedArticleSlugs: ["cartao-credito-sem-anuidade"],
  }),
  t({
    slug: "consignado",
    term: "Crédito Consignado",
    category: "Finance",
    categorySlug: "finance",
    shortAnswer:
      "Crédito Consignado is a Brazilian loan whose installments are automatically deducted from payroll or pension, offering some of the lowest interest rates on the market thanks to reduced default risk.",
    definition:
      "A payroll-deducted loan available to public servants, retirees, INSS pensioners and, more recently, formal CLT workers.",
    keyFacts: [
      "Interest rates capped by law.",
      "Monthly deduction caps around 35–45% of income.",
      "Available for INSS retirees and CLT workers.",
    ],
    practicalExample:
      "A retiree hires a consignado at a low rate and repays the installments directly deducted from the INSS benefit.",
    whyItMatters: "Provides accessible credit to groups with regular income.",
    howItWorks: [
      "Bank checks payroll or benefit.",
      "Contract is signed.",
      "Installments deducted from source.",
    ],
    advantages: ["Lower rates.", "Simple approval."],
    disadvantages: ["Long-term commitment.", "Reduces disposable income."],
    commonMistakes: ["Hiring multiple contracts simultaneously."],
    faqs: [{ q: "Can it be renegotiated?", a: "Yes, through portability or refinancing." }],
    related: ["clt", "inss", "cartao-de-credito"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-13",
    readingTime: "6 min",
    popularity: 70,
    relatedArticleSlugs: ["consignado-clt-privado"],
  }),
  t({
    slug: "auxilio-gas",
    term: "Auxílio Gás",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "Auxílio Gás is a Brazilian federal benefit paid every two months to CadÚnico families to help cover the cost of a 13 kg cooking gas cylinder, priced according to the average national market value.",
    definition:
      "A bi-monthly cash transfer program that complements Bolsa Família for low-income families.",
    keyFacts: [
      "Paid every two months.",
      "Value tied to average price of 13 kg cylinder.",
      "Requires CadÚnico registration.",
    ],
    practicalExample:
      "A registered family receives the Auxílio Gás credit in Caixa Tem and uses it to buy the gas cylinder.",
    whyItMatters: "Reduces energy poverty for vulnerable families.",
    howItWorks: [
      "Automatic selection based on CadÚnico.",
      "Payment via Caixa Tem.",
    ],
    advantages: ["Automatic enrollment.", "Direct impact on family budget."],
    commonMistakes: ["Not updating CadÚnico."],
    faqs: [{ q: "Is Auxílio Gás cumulative with Bolsa Família?", a: "Yes, both can be received simultaneously." }],
    related: ["bolsa-familia", "cadunico", "tarifa-social"],
    author: "Beatriz Lima",
    lastUpdated: "2026-11-14",
    readingTime: "4 min",
    popularity: 69,
    relatedArticleSlugs: ["auxilio-gas-consulta"],
  }),
  t({
    slug: "tarifa-social",
    term: "Tarifa Social de Energia",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "Tarifa Social de Energia Elétrica is a Brazilian program that grants automatic discounts of up to 65% on electricity bills for low-income families registered in CadÚnico or benefiting from BPC/LOAS.",
    definition:
      "A federal program regulated by ANEEL that discounts electricity for eligible low-income households.",
    keyFacts: [
      "Automatic since 2022.",
      "Discounts up to 65%.",
      "Applied by the distributor.",
    ],
    practicalExample:
      "A family in CadÚnico begins receiving the discount automatically on the monthly electricity bill.",
    whyItMatters: "Alleviates energy expenses for vulnerable households.",
    howItWorks: [
      "Data crossed between MDS and distributors.",
      "Discount applied directly on the bill.",
    ],
    advantages: ["Automatic enrollment.", "Significant discount."],
    commonMistakes: ["Assuming discount without checking bill history."],
    faqs: [{ q: "Who is entitled?", a: "CadÚnico families with per-capita income up to half a minimum wage and BPC beneficiaries." }],
    related: ["cadunico", "bolsa-familia", "bpc-loas"],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-05",
    readingTime: "5 min",
    popularity: 66,
    relatedArticleSlugs: ["tarifa-social-energia-eletrica"],
  }),
  t({
    slug: "minha-casa-minha-vida",
    term: "Minha Casa Minha Vida",
    category: "Benefits",
    categorySlug: "benefits",
    shortAnswer:
      "Minha Casa Minha Vida is a Brazilian federal housing program that finances the purchase of homes for low- and middle-income families, offering subsidies, low interest rates and FGTS integration.",
    definition:
      "A federal housing initiative divided into income tiers, granting subsidies and financing terms through Caixa and Banco do Brasil.",
    keyFacts: [
      "Uses FGTS resources.",
      "Multiple income tiers.",
      "Discounts up to 95% in Faixa 1.",
    ],
    practicalExample:
      "A family in Faixa 1 buys a home paying installments compatible with its income and receiving a large subsidy.",
    whyItMatters: "Central program to reduce Brazil's housing deficit.",
    howItWorks: [
      "Family registers at Caixa or the municipality.",
      "Approval depends on income and documentation.",
      "Financing signed with subsidy applied.",
    ],
    advantages: ["Access to home ownership.", "Long financing terms."],
    disadvantages: ["Waiting lists and location constraints."],
    commonMistakes: ["Not comparing conditions between banks."],
    faqs: [{ q: "Can I use FGTS?", a: "Yes, FGTS can be used as down payment or amortization." }],
    related: ["fgts", "cadunico", "bolsa-familia"],
    author: "Beatriz Lima",
    lastUpdated: "2026-11-12",
    readingTime: "7 min",
    popularity: 81,
    relatedArticleSlugs: ["minha-casa-minha-vida-faixa-1"],
  }),
  t({
    slug: "receita-federal",
    term: "Receita Federal",
    category: "Taxes",
    categorySlug: "taxes",
    shortAnswer:
      "Receita Federal is the Brazilian federal tax authority responsible for administering federal taxes, managing CPF and CNPJ registries, controlling customs and enforcing tax compliance.",
    definition:
      "The federal agency subordinated to the Ministry of Finance, in charge of tax administration and customs control.",
    keyFacts: [
      "Administers CPF and CNPJ.",
      "Runs e-CAC digital portal.",
      "Controls customs.",
    ],
    practicalExample:
      "A taxpayer opens e-CAC with gov.br to check pending IR issues.",
    whyItMatters: "It is the central Brazilian tax authority.",
    howItWorks: [
      "Manages tax registries.",
      "Publishes normative instructions.",
      "Audits taxpayers.",
    ],
    advantages: ["Digital-first services."],
    commonMistakes: ["Ignoring notifications in e-CAC."],
    faqs: [{ q: "How do I access e-CAC?", a: "With a gov.br account or a valid digital certificate." }],
    related: ["cpf", "cnpj", "imposto-de-renda"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-04",
    readingTime: "5 min",
    popularity: 72,
  }),
  t({
    slug: "cnpj",
    term: "CNPJ",
    category: "Taxes",
    categorySlug: "taxes",
    shortAnswer:
      "CNPJ (Cadastro Nacional da Pessoa Jurídica) is the Brazilian corporate taxpayer registry, a 14-digit identifier assigned by Receita Federal to companies, MEIs, associations and other legal entities.",
    definition:
      "A national identifier for legal entities, essential for issuing invoices, hiring and opening bank accounts.",
    keyFacts: [
      "14 digits.",
      "Managed by Receita Federal.",
      "Required for MEI, LTDA, S/A and more.",
    ],
    practicalExample:
      "A MEI receives a CNPJ upon opening a business at the Portal do Empreendedor.",
    whyItMatters: "It's the corporate counterpart of CPF and the base for tax compliance.",
    howItWorks: [
      "Register at Receita Federal.",
      "Keep data updated.",
    ],
    advantages: ["Enables formalization."],
    commonMistakes: ["Not updating CNAE when activities change."],
    faqs: [{ q: "Is MEI a CNPJ?", a: "Yes, MEI also has a CNPJ." }],
    related: ["mei", "cpf", "receita-federal"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 74,
  }),
  t({
    slug: "esocial",
    term: "eSocial",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "eSocial is the Brazilian unified digital platform used by employers to report labor, social security and tax information such as admissions, dismissals, wages and FGTS in a single system.",
    definition:
      "A federal program that centralizes employer reporting to reduce redundancy across labor and tax obligations.",
    keyFacts: [
      "Mandatory for all employers.",
      "Includes domestic employers.",
      "Reduces paperwork and errors.",
    ],
    practicalExample:
      "An employer registers a new employee in eSocial, updating INSS, FGTS and CTPS Digital in one submission.",
    whyItMatters: "It standardizes labor and tax reporting in Brazil.",
    howItWorks: [
      "Employer submits events online.",
      "Data flows to INSS, Caixa and Receita.",
    ],
    advantages: ["Single point of reporting."],
    commonMistakes: ["Missing event deadlines."],
    faqs: [{ q: "Do domestic employers use eSocial?", a: "Yes, through eSocial Doméstico." }],
    related: ["carteira-de-trabalho-digital", "fgts", "clt"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-14",
    readingTime: "5 min",
    popularity: 65,
  }),
  t({
    slug: "boleto",
    term: "Boleto Bancário",
    category: "Banking",
    categorySlug: "banking",
    shortAnswer:
      "Boleto Bancário is a traditional Brazilian payment slip standardized by Febraban, used to pay bills, invoices and purchases through internet banking, apps or lottery agents.",
    definition:
      "A payment document with a barcode and unique identification line accepted by all Brazilian banks.",
    keyFacts: [
      "Payable at any bank or lottery agent.",
      "Being progressively replaced by Pix.",
      "Has a due date and possible fine after expiration.",
    ],
    practicalExample:
      "A consumer receives an internet bill boleto and pays it via the bank app before the due date.",
    whyItMatters: "Still widely used for recurring bills and B2B.",
    howItWorks: [
      "Issuer generates the boleto.",
      "Payer settles by due date.",
    ],
    advantages: ["Universal acceptance."],
    disadvantages: ["Slower than Pix."],
    commonMistakes: ["Paying without checking issuer name."],
    faqs: [{ q: "Can I pay expired boleto?", a: "Yes, typically at the issuing bank." }],
    related: ["pix", "pix-automatico", "open-finance"],
    author: "Marina Alves",
    lastUpdated: "2026-11-06",
    readingTime: "4 min",
    popularity: 60,
  }),
  t({
    slug: "open-finance",
    term: "Open Finance",
    category: "Banking",
    categorySlug: "banking",
    shortAnswer:
      "Open Finance is the Brazilian regulated framework that lets customers share their financial data across authorized institutions to obtain better products, credit conditions and personalized services.",
    definition:
      "A financial data-sharing ecosystem regulated by the Central Bank, evolving from Open Banking to cover investments, insurance and pensions.",
    keyFacts: [
      "Regulated by the Central Bank.",
      "Requires explicit user consent.",
      "Enables data portability."
    ],
    practicalExample:
      "A user shares data with a fintech to receive personalized credit offers under Open Finance.",
    whyItMatters: "Increases competition and improves financial products.",
    howItWorks: [
      "User authorizes data sharing.",
      "Institution uses data to personalize offers.",
    ],
    advantages: ["Better rates.", "More competition."],
    disadvantages: ["Requires digital literacy for consent management."],
    commonMistakes: ["Granting broad consents without review."],
    faqs: [{ q: "Is Open Finance safe?", a: "Yes, based on strong authentication and consent controls." }],
    related: ["pix", "pix-automatico", "cartao-de-credito"],
    author: "Marina Alves",
    lastUpdated: "2026-11-08",
    readingTime: "5 min",
    popularity: 62,
  }),
  t({
    slug: "restituicao-ir",
    term: "Restituição do IR",
    category: "Taxes",
    categorySlug: "taxes",
    shortAnswer:
      "Restituição do IR is the refund paid by Receita Federal to taxpayers who overpaid income tax during the year, released in monthly batches according to a priority order defined by law.",
    definition:
      "The reimbursement of excess withheld or paid Imposto de Renda after annual reconciliation.",
    keyFacts: [
      "Paid in monthly batches.",
      "Priority for elderly, PWD and teachers.",
      "Consulted at e-CAC or IR app.",
    ],
    practicalExample:
      "A taxpayer with high medical expenses declares them and receives a refund three months later.",
    whyItMatters: "Provides annual cash inflow for millions of Brazilians.",
    howItWorks: [
      "File the annual return.",
      "Await batch payment.",
    ],
    advantages: ["Money back to taxpayer."],
    disadvantages: ["Long wait for lower priority groups."],
    commonMistakes: ["Missing bank account update."],
    faqs: [{ q: "How to check refund?", a: "Use the Receita Federal website or IR app with CPF and date of birth." }],
    related: ["imposto-de-renda", "receita-federal", "cpf"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-07",
    readingTime: "5 min",
    popularity: 70,
    relatedArticleSlugs: ["restituicao-ir-consultar"],
  }),
  t({
    slug: "pis-pasep",
    term: "PIS/Pasep",
    category: "Labor",
    categorySlug: "labor",
    shortAnswer:
      "PIS/Pasep is the Brazilian salary bonus paid annually to formal workers who earned up to two minimum wages on average during the base year and are registered in the program for at least five years.",
    definition:
      "Abono Salarial financed by federal contributions and paid by Caixa (PIS) and Banco do Brasil (Pasep).",
    keyFacts: [
      "Up to one minimum wage per year.",
      "Requires employer reporting via RAIS/eSocial.",
      "Calendar defined annually by CODEFAT.",
    ],
    practicalExample:
      "A worker earning within the threshold checks the calendar and withdraws the abono through the Caixa Tem app.",
    whyItMatters: "Provides an extra income to low-wage formal workers.",
    howItWorks: [
      "Employer reports data.",
      "Federal government publishes the calendar.",
      "Worker withdraws the amount.",
    ],
    advantages: ["Additional annual income."],
    commonMistakes: ["Missing the withdrawal window."],
    faqs: [{ q: "Who receives PIS?", a: "Private-sector workers meeting the requirements; Pasep applies to public servants." }],
    related: ["fgts", "clt", "carteira-de-trabalho-digital"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-07",
    readingTime: "5 min",
    popularity: 68,
    relatedArticleSlugs: ["pis-pasep-calendario"],
  }),
  t({
    slug: "concurso-publico",
    term: "Concurso Público",
    category: "Careers",
    categorySlug: "careers",
    shortAnswer:
      "A Concurso Público is the Brazilian legally mandated selection process for hiring civil servants, based on objective tests, titles or a combination of both, ensuring merit-based access to public jobs.",
    definition:
      "A competitive public selection process governed by Article 37 of the Brazilian Constitution.",
    keyFacts: [
      "Constitutionally required for stable public positions.",
      "Announced through official edital.",
      "Typical validity of up to two years, renewable once.",
    ],
    practicalExample:
      "A candidate studies for six months, takes the objective test and secures a public position after being ranked within the vacancies.",
    whyItMatters: "It's the main path to stable public careers in Brazil.",
    howItWorks: [
      "Edital is published.",
      "Candidates enroll and take exams.",
      "Approved candidates are called within validity.",
    ],
    advantages: ["Job stability.", "Structured career paths."],
    disadvantages: ["Long study period.", "High competition."],
    commonMistakes: ["Ignoring edital rules."],
    faqs: [{ q: "Is the edital the ultimate rule?", a: "Yes, the edital binds both the administration and candidates." }],
    related: ["concurso-inss", "concurso-caixa", "cpf"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-08",
    readingTime: "6 min",
    popularity: 87,
    trending: true,
    synonyms: ["Public Selection", "Civil Service Exam"],
  }),
  t({
    slug: "concurso-inss",
    term: "Concurso INSS",
    category: "Careers",
    categorySlug: "careers",
    shortAnswer:
      "Concurso INSS is the federal recruitment process for INSS positions such as social security technician and analyst, offering national reach, attractive salaries and structured career progression.",
    definition:
      "A federal exam organized to fill INSS staff needs across Brazil.",
    keyFacts: [
      "National scope.",
      "Salaries above R$ 8,000 in higher-level roles.",
      "Objective and discursive tests.",
    ],
    practicalExample:
      "A candidate studies social security law for months and is approved for INSS analyst positions.",
    whyItMatters: "Renews INSS workforce and offers career opportunities.",
    howItWorks: [
      "Edital is published.",
      "Tests are administered nationwide.",
    ],
    advantages: ["Job stability.", "Federal-level salary."],
    disadvantages: ["High competition."],
    commonMistakes: ["Ignoring specific bibliography."],
    faqs: [{ q: "What are the requirements?", a: "Vary by role, typically higher education for analyst and secondary education for technician." }],
    related: ["concurso-publico", "inss"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-16",
    readingTime: "6 min",
    popularity: 78,
    relatedArticleSlugs: ["concurso-inss-edital"],
  }),
  t({
    slug: "concurso-caixa",
    term: "Concurso Caixa",
    category: "Careers",
    categorySlug: "careers",
    shortAnswer:
      "Concurso Caixa is the federal recruitment process for Caixa Econômica Federal positions such as banking technician, offering nationwide vacancies and starting salaries around R$ 3,700.",
    definition:
      "A federal selection process for hiring at Caixa, one of Brazil's largest public banks.",
    keyFacts: [
      "Nationwide vacancies.",
      "Requirement of secondary education for technician roles.",
      "Provides career path and benefits.",
    ],
    practicalExample:
      "A candidate is approved and starts as a banking technician after training.",
    whyItMatters: "Feeds Caixa's workforce for its social and financial mission.",
    howItWorks: [
      "Edital published.",
      "Objective test and title evaluation.",
    ],
    advantages: ["Stable position.", "Comprehensive benefits."],
    disadvantages: ["High competition."],
    commonMistakes: ["Underestimating language and math sections."],
    faqs: [{ q: "Do I need banking experience?", a: "No, the training is provided after approval." }],
    related: ["concurso-publico", "concurso-inss"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-08",
    readingTime: "6 min",
    popularity: 72,
    relatedArticleSlugs: ["concurso-caixa-tecnico-bancario"],
  }),
  t({
    slug: "jovem-aprendiz",
    term: "Jovem Aprendiz",
    category: "Careers",
    categorySlug: "careers",
    shortAnswer:
      "Jovem Aprendiz is a Brazilian program for young people aged 14 to 24, combining formal work under CLT with mandatory professional training, encouraging first jobs and reducing youth unemployment.",
    definition:
      "A legal framework created by the Lei da Aprendizagem, requiring medium and large companies to hire apprentices.",
    keyFacts: [
      "Special CLT contract.",
      "Combines work and learning.",
      "Reduced hours to allow study.",
    ],
    practicalExample:
      "A 17-year-old signs a Jovem Aprendiz contract, works four hours a day and studies at Senai in parallel.",
    whyItMatters: "It formalizes access to the labor market for youth.",
    howItWorks: [
      "Company hires under special CLT contract.",
      "Apprentice attends training with a certified institution.",
    ],
    advantages: ["Formal first job.", "Structured learning."],
    disadvantages: ["Limited to fixed-term contract."],
    commonMistakes: ["Confusing with regular CLT contracts."],
    faqs: [{ q: "What is the age range?", a: "14 to 24 years old, with exceptions for persons with disabilities." }],
    related: ["clt", "carteira-de-trabalho-digital", "seguro-desemprego"],
    author: "Beatriz Lima",
    lastUpdated: "2026-11-10",
    readingTime: "5 min",
    popularity: 76,
    relatedArticleSlugs: ["jovem-aprendiz-vagas"],
  }),
  t({
    slug: "trabalho-remoto",
    term: "Trabalho Remoto",
    category: "Careers",
    categorySlug: "careers",
    shortAnswer:
      "Trabalho Remoto (home office) is the work arrangement where employees perform their duties outside the employer's premises, regulated in Brazil by the CLT after the 2017 labor reform and updated during the pandemic.",
    definition:
      "A modality of teleworking recognized by CLT, requiring written agreement and provisions about equipment and expenses.",
    keyFacts: [
      "Regulated by CLT.",
      "Requires written agreement.",
      "Expenses and equipment defined in contract.",
    ],
    practicalExample:
      "A developer signs a remote work amendment and works from home nationally.",
    whyItMatters: "Expands labor market reach and flexibility.",
    howItWorks: [
      "Company and employee sign contract amendment.",
      "Work executed remotely.",
    ],
    advantages: ["Flexibility.", "Broader talent pool."],
    disadvantages: ["Home infrastructure requirements."],
    commonMistakes: ["No formal amendment when switching to remote."],
    faqs: [{ q: "Are remote workers CLT?", a: "Yes, remote work fits within CLT rules." }],
    related: ["clt", "carteira-de-trabalho-digital", "jovem-aprendiz"],
    author: "Beatriz Lima",
    lastUpdated: "2026-11-06",
    readingTime: "6 min",
    popularity: 71,
    relatedArticleSlugs: ["trabalho-remoto-vagas-home-office"],
  }),
  t({
    slug: "educacao-financeira",
    term: "Educação Financeira",
    category: "Finance",
    categorySlug: "finance",
    shortAnswer:
      "Educação Financeira is the set of knowledge and habits that enable Brazilians to plan, save, invest and manage debt consciously, improving personal wealth and reducing default risk.",
    definition:
      "A body of financial literacy content and practices promoted by ENEF, banks, schools and independent creators.",
    keyFacts: [
      "Promoted by ENEF.",
      "Includes budgeting, investment and debt management.",
      "Correlated with lower default rates.",
    ],
    practicalExample:
      "A family builds a monthly budget, cancels unused subscriptions and starts an emergency fund in Tesouro Selic.",
    whyItMatters: "Improves personal financial health and macroeconomic stability.",
    howItWorks: [
      "Learn key concepts.",
      "Set financial goals.",
      "Adjust habits and monitor progress.",
    ],
    advantages: ["Debt reduction.", "Wealth building."],
    commonMistakes: ["Focusing on investments before eliminating expensive debt."],
    faqs: [{ q: "Where to start?", a: "Build a budget and eliminate high-interest debt first." }],
    related: ["cartao-de-credito", "tesouro-direto", "consignado"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-05",
    readingTime: "7 min",
    popularity: 69,
    relatedArticleSlugs: ["educacao-financeira-familia"],
  }),
];

// ---------- Helpers ----------

export const glossaryCategories = Array.from(
  new Map(glossaryTerms.map((g) => [g.categorySlug, { slug: g.categorySlug, name: g.category }])).values(),
).sort((a, b) => a.name.localeCompare(b.name));

export const glossaryLetters = Array.from(
  new Set(glossaryTerms.map((g) => g.term.charAt(0).toUpperCase())),
).sort();

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((g) => g.slug === slug);
}

export function getRelatedTerms(term: GlossaryTerm, limit = 6) {
  const rel = term.related
    .map((s) => glossaryTerms.find((g) => g.slug === s))
    .filter((g): g is GlossaryTerm => Boolean(g));
  if (rel.length >= limit) return rel.slice(0, limit);
  // Fill by category
  const fill = glossaryTerms
    .filter((g) => g.slug !== term.slug && g.categorySlug === term.categorySlug && !rel.includes(g))
    .slice(0, limit - rel.length);
  return [...rel, ...fill];
}

export function getPopularTerms(limit = 8) {
  return [...glossaryTerms].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}

export function getTrendingTerms(limit = 6) {
  return glossaryTerms.filter((g) => g.trending).slice(0, limit);
}

export function getRecentTerms(limit = 6) {
  return [...glossaryTerms].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated)).slice(0, limit);
}

export function glossaryUrl(slug: string) {
  return `/glossary/what-is-${slug}`;
}
