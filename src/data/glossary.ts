export type GlossaryTerm = {
  slug: string; // ex.: "bolsa-familia" -> URL: /glossario/o-que-e-bolsa-familia
  term: string;
  category: string;
  categorySlug: string;
  shortAnswer: string; // 40-60 palavras para featured snippet
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
  relatedArticleSlugs?: string[];
};

const t = (o: GlossaryTerm) => o;

export const glossaryTerms: GlossaryTerm[] = [
  t({
    slug: "bolsa-familia",
    term: "Bolsa Família",
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "O Bolsa Família é o programa federal brasileiro de transferência de renda que paga um benefício mensal a famílias de baixa renda inscritas no CadÚnico. O objetivo é reduzir a pobreza, garantir a frequência escolar e o acesso à saúde básica, com pagamento mínimo de R$ 600 e adicionais por criança.",
    definition:
      "O Bolsa Família é o principal programa de proteção social do governo federal brasileiro. Ele entrega uma transferência mensal de renda a famílias em situação de pobreza e extrema pobreza. A elegibilidade é baseada na renda familiar per capita, verificada pelo Cadastro Único (CadÚnico), e está condicionada à frequência escolar e à vacinação em dia.",
    keyFacts: [
      "Gerido pelo Ministério do Desenvolvimento e Assistência Social (MDS).",
      "Pagamento mínimo de R$ 600 por família, com adicionais por criança.",
      "Pagamentos distribuídos pela Caixa Econômica Federal via Caixa Tem.",
      "Exige inscrição no CadÚnico e recadastramento periódico.",
    ],
    practicalExample:
      "Uma família de quatro pessoas com renda per capita abaixo da linha de pobreza, inscrita no CadÚnico e com crianças matriculadas na escola, recebe o depósito mensal na conta digital Caixa Tem, conforme o calendário oficial baseado no último dígito do NIS.",
    whyItMatters:
      "O programa é uma das iniciativas de transferência condicionada de renda mais estudadas do mundo e um pilar central para reduzir a fome, a desigualdade e a evasão escolar no Brasil.",
    howItWorks: [
      "A família se cadastra em uma unidade do CRAS para entrar no CadÚnico.",
      "A elegibilidade é calculada com base na renda mensal per capita.",
      "Os pagamentos são liberados mensalmente em calendário publicado pela Caixa.",
      "Os beneficiários devem manter a frequência escolar e as condicionalidades de saúde.",
    ],
    advantages: [
      "Impacto imediato na renda familiar e na segurança alimentar.",
      "Estimula frequência escolar e vacinação.",
      "Pagamento digital via Caixa Tem reduz a burocracia.",
    ],
    disadvantages: [
      "Exige recadastramento recorrente, o que pode levar a cancelamentos indevidos.",
      "Os valores podem não acompanhar a inflação em tempo real.",
    ],
    commonMistakes: [
      "Não atualizar o CadÚnico a cada 24 meses.",
      "Ignorar as condicionalidades como frequência escolar.",
      "Perder janelas de saque e o valor da parcela.",
    ],
    faqs: [
      {
        q: "Quem tem direito ao Bolsa Família?",
        a: "Famílias em pobreza ou extrema pobreza inscritas no CadÚnico, com renda per capita abaixo do limite federal.",
      },
      {
        q: "Como consultar o pagamento do Bolsa Família?",
        a: "Pelo aplicativo Caixa Tem, pelo app Bolsa Família ou em qualquer casa lotérica da Caixa usando o NIS.",
      },
      {
        q: "Posso perder o benefício?",
        a: "Sim, caso descumpra condicionalidades, ultrapasse o limite de renda ou não atualize o CadÚnico.",
      },
    ],
    related: ["cadunico", "bpc-loas", "auxilio-gas", "tarifa-social"],
    furtherReading: [
      { title: "Ministério do Desenvolvimento Social", href: "https://www.gov.br/mds" },
      { title: "Página oficial do CadÚnico", href: "https://cadunico.dataprev.gov.br" },
    ],
    references: [
      { title: "Lei nº 14.601/2023 — Bolsa Família", href: "https://www.planalto.gov.br" },
    ],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-18",
    readingTime: "7 min",
    popularity: 98,
    trending: true,
    synonyms: ["Programa Bolsa Família", "PBF"],
    relatedArticleSlugs: ["bolsa-familia-calendario-pagamentos"],
  }),
  t({
    slug: "inss",
    term: "INSS",
    category: "Previdência",
    categorySlug: "previdencia",
    shortAnswer:
      "O INSS (Instituto Nacional do Seguro Social) é a autarquia federal brasileira responsável por pagar aposentadorias, benefícios por incapacidade, salário-maternidade e demais benefícios previdenciários aos segurados que contribuem para o RGPS.",
    definition:
      "O INSS é o órgão executivo do Regime Geral de Previdência Social (RGPS) e gerencia as contribuições e os benefícios de trabalhadores da iniciativa privada, contribuintes individuais e segurados facultativos no Brasil.",
    keyFacts: [
      "Fundado em 1990, com sede em Brasília.",
      "Paga mais de 40 milhões de benefícios mensais.",
      "As contribuições são calculadas sobre a folha ou sobre um salário de contribuição escolhido.",
      "Atendimento digital pelo app Meu INSS.",
    ],
    practicalExample:
      "Um empregado CLT com salário de R$ 3.000 tem a contribuição do INSS descontada automaticamente da folha todo mês, acumulando tempo e salário-de-contribuição usados depois no cálculo da aposentadoria.",
    whyItMatters:
      "O INSS é a principal rede de proteção para aposentadoria, incapacidade e morte para a maior parte dos trabalhadores brasileiros.",
    howItWorks: [
      "O trabalhador ou empregador paga a contribuição mensal.",
      "As contribuições ficam registradas no CNIS.",
      "Cumprindo os requisitos, o segurado solicita o benefício pelo Meu INSS.",
      "O INSS analisa a documentação e concede ou nega o benefício.",
    ],
    advantages: [
      "Cobertura em todo o território nacional.",
      "Diversas modalidades de benefício.",
      "Canais digitais reduzem tempos de espera.",
    ],
    disadvantages: [
      "Longas filas para perícia médica.",
      "Regras complexas após a Reforma da Previdência de 2019.",
    ],
    commonMistakes: [
      "Não conferir o CNIS em busca de contribuições faltantes.",
      "Contribuir sob o código errado como MEI ou autônomo.",
      "Pedir o benefício sem os documentos necessários.",
    ],
    faqs: [
      { q: "O que o INSS paga?", a: "Aposentadorias, benefícios por incapacidade, auxílio-doença, salário-maternidade, pensão por morte e auxílio-reclusão." },
      { q: "Como consultar minhas contribuições?", a: "Acesse o Meu INSS com a conta gov.br e abra o extrato do CNIS." },
    ],
    related: ["cnis", "aposentadoria-por-idade", "revisao-da-vida-toda", "auxilio-doenca", "bpc-loas"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-18",
    readingTime: "8 min",
    popularity: 96,
    trending: true,
    synonyms: ["Previdência Social", "Instituto Nacional do Seguro Social"],
    relatedArticleSlugs: ["inss-revisao-vida-toda-stf", "auxilio-doenca-perito", "aposentadoria-por-idade-2027"],
  }),
  t({
    slug: "fgts",
    term: "FGTS",
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "O FGTS (Fundo de Garantia do Tempo de Serviço) é um fundo trabalhista brasileiro no qual o empregador deposita 8% do salário mensal de cada trabalhador em uma conta vinculada. O trabalhador pode sacar em situações específicas, como demissão sem justa causa, compra da casa própria ou doença grave.",
    definition:
      "O FGTS é um mecanismo de proteção trabalhista criado em 1966 para amparar o trabalhador contra demissão sem justa causa, financiado por depósitos mensais obrigatórios do empregador e administrado pela Caixa Econômica Federal.",
    keyFacts: [
      "8% do salário depositados mensalmente pelo empregador.",
      "Administrado pela Caixa Econômica Federal.",
      "Distribuição anual de lucros nas contas.",
      "Duas modalidades de saque: rescisão e aniversário.",
    ],
    practicalExample:
      "Um empregado CLT demitido sem justa causa recebe todo o saldo do FGTS mais a multa de 40% paga pelo empregador diretamente na conta vinculada.",
    whyItMatters:
      "O FGTS é uma reserva pessoal importante e uma das principais fontes de financiamento da habitação social no Brasil.",
    howItWorks: [
      "O empregador deposita 8% ao mês.",
      "O saldo rende TR + 3% ao ano mais parte do lucro do fundo.",
      "O saque ocorre quando é atingida uma condição legal.",
    ],
    advantages: [
      "Proteção trabalhista automática.",
      "Acesso a financiamentos habitacionais subsidiados.",
    ],
    disadvantages: [
      "Rendimento historicamente abaixo da inflação.",
      "O saque-aniversário bloqueia o acesso ao saldo integral na rescisão.",
    ],
    commonMistakes: [
      "Aderir ao saque-aniversário sem entender que perde o acesso à multa rescisória.",
      "Ignorar depósitos faltantes do empregador.",
    ],
    faqs: [
      { q: "Quanto é depositado no FGTS?", a: "8% do salário bruto para trabalhadores CLT e 2% para jovens aprendizes." },
      { q: "Posso sacar o FGTS quando quiser?", a: "Não. Apenas em situações previstas em lei, como demissão, aposentadoria, compra de imóvel ou doença grave." },
    ],
    related: ["saque-aniversario", "clt", "seguro-desemprego", "minha-casa-minha-vida"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-17",
    readingTime: "6 min",
    popularity: 91,
    trending: true,
    synonyms: ["Fundo de Garantia"],
    relatedArticleSlugs: ["fgts-saque-aniversario-2027"],
  }),
  t({
    slug: "pix",
    term: "Pix",
    category: "Bancos",
    categorySlug: "bancos",
    shortAnswer:
      "O Pix é o sistema brasileiro de pagamentos instantâneos criado pelo Banco Central, que permite transferências gratuitas 24 horas por dia entre pessoas físicas e jurídicas em segundos, usando chaves como CPF, telefone, e-mail ou chave aleatória.",
    definition:
      "Lançado em novembro de 2020, o Pix é uma infraestrutura interbancária de pagamentos que liquida transações em tempo real, funcionando todos os dias do ano, incluindo feriados e finais de semana.",
    keyFacts: [
      "Operado pelo Banco Central do Brasil.",
      "Gratuito para pessoas físicas.",
      "Liquidação em até 10 segundos.",
      "Suporta Pix Copia e Cola, QR Code e Pix Automático.",
    ],
    practicalExample:
      "Um cliente em uma padaria escaneia um QR Code no app do banco e paga instantaneamente o comerciante, que recebe os valores em segundos, sem tarifas de cartão.",
    whyItMatters:
      "O Pix reduziu drasticamente o custo das transferências e acelerou a inclusão financeira no Brasil.",
    howItWorks: [
      "O pagador escaneia um QR Code ou usa uma chave Pix.",
      "O banco encaminha a transferência pelo SPI, no Banco Central.",
      "O banco do recebedor credita a conta instantaneamente.",
    ],
    advantages: ["Gratuito e instantâneo.", "Disponível 24/7.", "Interoperável entre todos os bancos."],
    disadvantages: ["Aumento das tentativas de golpe.", "Limites diários por segurança."],
    commonMistakes: [
      "Compartilhar chaves Pix publicamente.",
      "Confirmar o pagamento sem conferir o nome do destinatário.",
    ],
    faqs: [
      { q: "O Pix é gratuito?", a: "Sim, para pessoas físicas. Empresas podem pagar uma pequena tarifa, conforme o banco." },
      { q: "É possível estornar um Pix?", a: "Apenas pelo MED (Mecanismo Especial de Devolução), em casos de fraude comprovada." },
    ],
    related: ["pix-automatico", "open-finance", "boleto", "cartao-de-credito"],
    author: "Marina Alves",
    lastUpdated: "2026-11-16",
    readingTime: "5 min",
    popularity: 99,
    trending: true,
    synonyms: ["Pagamento instantâneo"],
    relatedArticleSlugs: ["pix-automatico-novas-regras"],
  }),
  t({
    slug: "pix-automatico",
    term: "Pix Automático",
    category: "Bancos",
    categorySlug: "bancos",
    shortAnswer:
      "O Pix Automático é a funcionalidade de pagamentos recorrentes construída sobre o Pix. Permite ao cliente autorizar cobranças automáticas de contas de consumo, streamings e outros fornecedores diretamente na conta bancária, substituindo débitos automáticos e boletos.",
    definition:
      "O Pix Automático é uma funcionalidade de pagamento agendado e recorrente regulamentada pelo Banco Central, oferecendo uma alternativa de baixo custo à cobrança recorrente tradicional.",
    keyFacts: [
      "Lançado em 2025 pelo Banco Central do Brasil.",
      "Exige autorização prévia do pagador.",
      "Pode ser cancelado a qualquer momento no app do banco.",
    ],
    practicalExample:
      "Um assinante de streaming autoriza cobranças mensais via Pix Automático no app, substituindo a cobrança no cartão de crédito.",
    whyItMatters: "Reduz a dependência de cartões e boletos, diminuindo custos e inadimplência.",
    howItWorks: [
      "O fornecedor solicita autorização ao banco do pagador.",
      "O pagador aprova no app do banco.",
      "As cobranças são executadas automaticamente nas datas combinadas.",
    ],
    advantages: ["Mais barato que o processamento por cartão.", "Total controle do usuário sobre a autorização."],
    commonMistakes: ["Autorizar cobranças sem ler as condições do contrato."],
    faqs: [
      { q: "Como cancelar o Pix Automático?", a: "Diretamente no app do banco, nas autorizações de pagamentos recorrentes." },
    ],
    related: ["pix", "boleto", "open-finance"],
    author: "Marina Alves",
    lastUpdated: "2026-11-16",
    readingTime: "4 min",
    popularity: 78,
    synonyms: ["Pix Recorrente"],
    relatedArticleSlugs: ["pix-automatico-novas-regras"],
  }),
  t({
    slug: "imposto-de-renda",
    term: "Imposto de Renda",
    category: "Impostos",
    categorySlug: "impostos",
    shortAnswer:
      "O Imposto de Renda é o tributo brasileiro sobre a renda de pessoas físicas (IRPF) e jurídicas (IRPJ), arrecadado pela Receita Federal. As pessoas físicas devem declarar a renda anual e pagar imposto sobre valores acima do limite de isenção, com alíquotas progressivas de até 27,5%.",
    definition:
      "O Imposto de Renda brasileiro é administrado pela Receita Federal, com prazo anual de declaração e faixas progressivas para pessoas físicas, além de regras específicas para as pessoas jurídicas.",
    keyFacts: [
      "Alíquotas progressivas de até 27,5% para pessoas físicas.",
      "Declarado uma vez por ano.",
      "Desconto simplificado disponível.",
      "Gestão pelo portal e-CAC.",
    ],
    practicalExample:
      "Um empregado que ganha R$ 5.500 por mês declara a soma anual e calcula se tem imposto a pagar ou direito à restituição, com base nas retenções na fonte.",
    whyItMatters: "Financia serviços públicos e é uma obrigação anual crítica para milhões de brasileiros.",
    howItWorks: [
      "O contribuinte reúne os documentos de renda e despesas.",
      "Usa o programa do IRPF para declarar.",
      "Envia à Receita Federal dentro do prazo.",
    ],
    advantages: ["Permite restituição quando o imposto retido supera o devido.", "Deduções estruturadas."],
    disadvantages: ["Regras complexas.", "Multa pela entrega em atraso."],
    commonMistakes: [
      "Esquecer de declarar a renda dos dependentes.",
      "Perder o prazo e pagar multa.",
    ],
    faqs: [
      { q: "Quem deve declarar o IR?", a: "Quem tem renda tributável anual acima do limite atual ou se enquadra nas condições específicas de bens." },
      { q: "Quando a restituição é paga?", a: "Em lotes mensais, seguindo a ordem de prioridade definida pela Receita Federal." },
    ],
    related: ["restituicao-ir", "mei", "receita-federal", "cpf"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-17",
    readingTime: "8 min",
    popularity: 94,
    trending: true,
    synonyms: ["IR", "IRPF"],
    relatedArticleSlugs: ["imposto-de-renda-2027-tabela", "restituicao-ir-consultar"],
  }),
  t({
    slug: "cadunico",
    term: "CadÚnico",
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "O CadÚnico (Cadastro Único) é o registro federal brasileiro que identifica famílias de baixa renda e concede acesso a programas sociais como Bolsa Família, Tarifa Social, BPC/LOAS e Minha Casa Minha Vida.",
    definition:
      "Base de dados federal unificada, gerida pelo MDS e operada pelos municípios por meio dos CRAS, que reúne informações socioeconômicas de famílias com renda per capita de até meio salário mínimo.",
    keyFacts: [
      "Gerido pelo MDS, operado nos CRAS.",
      "Recadastramento obrigatório a cada 24 meses.",
      "Porta de entrada para mais de 30 programas sociais.",
    ],
    practicalExample:
      "Uma família procura o CRAS com documentos e responde a um questionário socioeconômico para entrar no CadÚnico e ficar apta a Bolsa Família e Tarifa Social.",
    whyItMatters: "É o ponto único de entrada para praticamente todos os programas sociais brasileiros.",
    howItWorks: [
      "A família agenda atendimento no CRAS.",
      "O entrevistador preenche o formulário socioeconômico.",
      "Os dados são enviados aos sistemas federais em poucos dias.",
    ],
    advantages: ["Acesso unificado aos programas sociais.", "Cadastro gratuito."],
    disadvantages: ["Benefícios cancelados se não houver atualização."],
    commonMistakes: ["Não atualizar após mudança de endereço ou renda."],
    faqs: [
      { q: "Quem pode entrar no CadÚnico?", a: "Famílias com renda per capita de até meio salário mínimo, ou até três salários mínimos quando usam programas específicos." },
    ],
    related: ["bolsa-familia", "bpc-loas", "tarifa-social", "auxilio-gas"],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-09",
    readingTime: "5 min",
    popularity: 82,
    synonyms: ["Cadastro Único"],
    relatedArticleSlugs: ["cadunico-atualizar-cadastro"],
  }),
  t({
    slug: "bpc-loas",
    term: "BPC/LOAS",
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "O BPC/LOAS é um benefício assistencial brasileiro de um salário mínimo pago a idosos com mais de 65 anos ou pessoas com deficiência de famílias de baixa renda, independentemente de contribuições anteriores ao INSS.",
    definition:
      "O Benefício de Prestação Continuada (BPC) é um programa assistencial não contributivo baseado na LOAS (Lei Orgânica da Assistência Social).",
    keyFacts: [
      "Um salário mínimo por mês.",
      "Não exige contribuições prévias ao INSS.",
      "Requer inscrição no CadÚnico.",
    ],
    practicalExample:
      "Uma pessoa de 68 anos com renda familiar per capita inferior a um quarto do salário mínimo solicita o BPC pelo Meu INSS e passa a receber o benefício mensal.",
    whyItMatters: "É a principal rede de proteção para idosos e pessoas com deficiência de baixa renda no Brasil.",
    howItWorks: [
      "Inscrição no CadÚnico.",
      "Solicitação pelo Meu INSS.",
      "Avaliação social e médica.",
    ],
    advantages: ["Salário mínimo garantido.", "Sem exigência de contribuição."],
    disadvantages: ["Corte de renda rigoroso.", "Revisões periódicas."],
    commonMistakes: ["Não manter o CadÚnico atualizado.", "Faltar à perícia médica."],
    faqs: [{ q: "O BPC gera 13º salário?", a: "Não. O BPC não inclui 13º salário." }],
    related: ["cadunico", "inss", "bolsa-familia"],
    author: "Ana Ribeiro",
    lastUpdated: "2026-11-15",
    readingTime: "6 min",
    popularity: 84,
    synonyms: ["Benefício de Prestação Continuada"],
    relatedArticleSlugs: ["bpc-loas-quem-tem-direito"],
  }),
  t({
    slug: "cpf",
    term: "CPF",
    category: "Documentos",
    categorySlug: "documentos",
    shortAnswer:
      "O CPF (Cadastro de Pessoas Físicas) é o registro brasileiro do contribuinte pessoa física, um número de 11 dígitos emitido pela Receita Federal e exigido em serviços bancários, empregos, contratos e na maioria dos serviços públicos.",
    definition:
      "Identificador único nacional para pessoas físicas no Brasil, administrado pela Receita Federal e exigido na maioria das transações legais e financeiras.",
    keyFacts: [
      "Administrado pela Receita Federal.",
      "Emissão e atualizações gratuitas.",
      "Obrigatório desde o nascimento para fins fiscais.",
    ],
    practicalExample:
      "Um recém-nascido é registrado em cartório e o CPF é emitido automaticamente junto com a certidão de nascimento.",
    whyItMatters: "É a chave principal de todo o governo digital brasileiro.",
    howItWorks: [
      "Solicitação pelo gov.br ou em cartório.",
      "Atualização pelo portal do CPF.",
    ],
    advantages: ["Gratuito.", "Identificador universal."],
    commonMistakes: ["Compartilhar o CPF com partes não confiáveis."],
    faqs: [{ q: "Como consultar a situação do CPF?", a: "Na página do CPF em receita.fazenda.gov.br." }],
    related: ["cnh", "carteira-de-trabalho-digital", "imposto-de-renda", "receita-federal"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 89,
    synonyms: ["Cadastro de Pessoas Físicas"],
  }),
  t({
    slug: "cnh",
    term: "CNH",
    category: "Documentos",
    categorySlug: "documentos",
    shortAnswer:
      "A CNH (Carteira Nacional de Habilitação) é a carteira de motorista brasileira, emitida pelo Detran após provas teórica e prática. Também é aceita como documento nacional de identidade.",
    definition:
      "Credencial oficial de habilitação regulamentada pelo CONTRAN e emitida pelos Detrans estaduais, com categorias de A a E.",
    keyFacts: [
      "Categorias A, B, C, D e E.",
      "Validade de até 10 anos, conforme a idade.",
      "Versão digital disponível no app CDT.",
    ],
    practicalExample:
      "Um motorista que renova a CNH agenda o exame médico no Detran, paga a taxa e recebe o novo documento em poucos dias.",
    whyItMatters: "Obrigatória para dirigir e amplamente aceita como identidade.",
    howItWorks: [
      "Matrícula no Detran.",
      "Provas teórica e prática.",
      "Emissão da CNH.",
    ],
    advantages: ["Validade nacional.", "Versão digital."],
    disadvantages: ["Custo do processo pode ser alto."],
    commonMistakes: ["Dirigir com a CNH vencida."],
    faqs: [{ q: "O que é a CNH Social?", a: "Programa que concede a primeira CNH gratuita a cidadãos de baixa renda." }],
    related: ["cpf", "cnh-social", "detran"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-12",
    readingTime: "5 min",
    popularity: 80,
    synonyms: ["Carteira Nacional de Habilitação"],
    relatedArticleSlugs: ["cnh-social-gratuita"],
  }),
  t({
    slug: "cnh-social",
    term: "CNH Social",
    category: "Documentos",
    categorySlug: "documentos",
    shortAnswer:
      "A CNH Social é um programa estadual brasileiro que oferece a primeira habilitação gratuita a cidadãos de baixa renda, cobrindo exames médicos, aulas teóricas e práticas e taxas de emissão.",
    definition:
      "Iniciativa social organizada pelos Detrans estaduais, oferecendo a emissão gratuita da CNH a cidadãos elegíveis inscritos no CadÚnico.",
    keyFacts: [
      "Exige inscrição no CadÚnico.",
      "Oferecida por diversos estados brasileiros.",
      "Inclui as categorias A e B.",
    ],
    practicalExample:
      "Uma pessoa cadastrada no CadÚnico se inscreve na CNH Social no portal do Detran e, se selecionada, faz todas as aulas sem custo.",
    whyItMatters: "Facilita o acesso a empregos formais que exigem CNH.",
    howItWorks: [
      "Verificar as vagas no Detran do estado.",
      "Enviar as informações do CadÚnico.",
      "Comparecer às aulas quando selecionado.",
    ],
    advantages: ["Gratuita.", "Amplia a empregabilidade."],
    commonMistakes: ["Perder o prazo de inscrição."],
    faqs: [{ q: "Quem pode se inscrever?", a: "Cidadãos inscritos no CadÚnico, de baixa renda e sem CNH anterior." }],
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
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "A Carteira de Trabalho Digital (CTPS Digital) é a versão eletrônica da carteira de trabalho brasileira que substitui a CTPS física, reunindo contratos, saldo do FGTS e dados previdenciários em um único aplicativo integrado ao gov.br.",
    definition:
      "Identidade laboral digital oficial administrada pelo Ministério do Trabalho, vinculando os dados de emprego ao CPF e à conta gov.br do cidadão.",
    keyFacts: [
      "Emissão automática via CPF.",
      "Disponível para Android e iOS.",
      "Integrada ao eSocial.",
    ],
    practicalExample:
      "O trabalhador baixa o app da CTPS Digital, faz login com o gov.br e consulta o histórico completo de contratos e o saldo do FGTS.",
    whyItMatters: "Reduz a burocracia e aumenta a transparência na relação de trabalho.",
    howItWorks: [
      "O empregador registra a admissão no eSocial.",
      "Os dados aparecem no app da CTPS Digital do trabalhador.",
    ],
    advantages: ["Sem papel.", "Atualizações em tempo real."],
    disadvantages: ["Exige familiaridade digital."],
    commonMistakes: ["Ignorar informações erradas registradas pelo empregador."],
    faqs: [{ q: "Preciso da CTPS física?", a: "Não. A versão digital tem plena validade legal." }],
    related: ["fgts", "clt", "esocial"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-14",
    readingTime: "5 min",
    popularity: 76,
    synonyms: ["CTPS Digital"],
    relatedArticleSlugs: ["carteira-trabalho-digital-atualizar"],
  }),
  t({
    slug: "clt",
    term: "CLT",
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "A CLT (Consolidação das Leis do Trabalho) é o arcabouço da legislação trabalhista brasileira, promulgado em 1943, que define direitos do emprego formal como férias remuneradas, 13º salário, FGTS, aviso prévio e horas extras.",
    definition:
      "Decreto-lei federal que unifica as regras trabalhistas brasileiras e define padrões mínimos para as relações de emprego formais.",
    keyFacts: [
      "Assinada em 1943.",
      "Regulamenta férias, 13º salário e FGTS.",
      "Reformada em 2017 (Reforma Trabalhista).",
    ],
    practicalExample:
      "Um empregado sob a CLT acumula 30 dias de férias remuneradas após 12 meses de trabalho contínuo.",
    whyItMatters: "Estabelece a base de proteção para os brasileiros com emprego formal.",
    howItWorks: [
      "O empregador registra a admissão.",
      "Os direitos são acumulados durante o contrato.",
      "A rescisão gera pagamentos previstos em lei.",
    ],
    advantages: ["Forte proteção legal.", "Acesso ao seguro-desemprego."],
    disadvantages: ["Maior custo de contratação para o empregador."],
    commonMistakes: ["Confundir contratos PJ com CLT."],
    faqs: [{ q: "MEI segue a CLT?", a: "Não. O MEI é autônomo e segue regras próprias." }],
    related: ["fgts", "seguro-desemprego", "carteira-de-trabalho-digital", "consignado"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-10",
    readingTime: "6 min",
    popularity: 88,
    synonyms: ["Consolidação das Leis do Trabalho"],
  }),
  t({
    slug: "mei",
    term: "MEI",
    category: "Impostos",
    categorySlug: "impostos",
    shortAnswer:
      "O MEI (Microempreendedor Individual) é uma figura jurídica simplificada brasileira para autônomos com faturamento anual até o limite federal, que paga uma única taxa mensal cobrindo INSS, ICMS e ISS.",
    definition:
      "Regime tributário especial para pequenos empreendedores, que fornece CNPJ, contabilidade simplificada e cobertura previdenciária.",
    keyFacts: [
      "Teto de faturamento anual definido em lei federal.",
      "DAS mensal cobre os tributos.",
      "Oferece cobertura do INSS.",
    ],
    practicalExample:
      "Uma cabeleireira abre um MEI, recebe um CNPJ e passa a emitir notas fiscais pagando um DAS mensal fixo.",
    whyItMatters: "Formaliza milhões de trabalhadores brasileiros com o mínimo de burocracia.",
    howItWorks: [
      "Cadastro no Portal do Empreendedor.",
      "Pagamento mensal do DAS.",
      "Envio anual da DASN-SIMEI.",
    ],
    advantages: ["Baixo custo.", "Cumprimento simples.", "Cobertura do INSS."],
    disadvantages: ["Teto de faturamento.", "Atividades restritas."],
    commonMistakes: ["Não enviar a DASN-SIMEI.", "Ultrapassar o teto de faturamento."],
    faqs: [{ q: "O MEI pode contratar empregados?", a: "Sim. Um empregado com salário mínimo ou o piso da categoria." }],
    related: ["imposto-de-renda", "inss", "cnpj"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-11",
    readingTime: "6 min",
    popularity: 90,
    synonyms: ["Microempreendedor Individual"],
    relatedArticleSlugs: ["mei-limite-faturamento"],
  }),
  t({
    slug: "aposentadoria-por-idade",
    term: "Aposentadoria por Idade",
    category: "Previdência",
    categorySlug: "previdencia",
    shortAnswer:
      "A Aposentadoria por Idade é a modalidade brasileira baseada na idade, exigindo 62 anos para mulheres e 65 anos para homens, além de tempo mínimo de contribuição de 15 a 20 anos, conforme o gênero e a data de ingresso após a reforma de 2019.",
    definition:
      "Modalidade de aposentadoria do RGPS baseada em idade e tempo mínimo de contribuição, concedida pelo INSS.",
    keyFacts: [
      "Mulheres se aposentam aos 62 e homens aos 65.",
      "Contribuição mínima de 15 anos (mulheres que ingressaram antes de 2019) ou 20 anos (homens que ingressaram após 2019).",
      "Solicitação pelo Meu INSS.",
    ],
    practicalExample:
      "Um trabalhador de 65 anos com 20 anos de contribuição solicita a aposentadoria online e, após análise documental, passa a receber o benefício mensal.",
    whyItMatters: "É o principal caminho de aposentadoria para os trabalhadores brasileiros.",
    howItWorks: [
      "Cumprir os requisitos de idade e contribuição.",
      "Solicitar pelo Meu INSS.",
      "Aguardar a análise do INSS.",
    ],
    advantages: ["Renda vitalícia.", "Elegibilidade a pensão por morte para dependentes."],
    disadvantages: ["Valor atrelado à média do salário de contribuição."],
    commonMistakes: ["Não organizar o CNIS antes de dar entrada."],
    faqs: [{ q: "Depende da reforma da previdência?", a: "Sim. Existem regras de transição para quem já contribuía antes de 2019." }],
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
    category: "Previdência",
    categorySlug: "previdencia",
    shortAnswer:
      "A Revisão da Vida Toda é uma tese jurídica brasileira que permite ao aposentado incluir contribuições anteriores a julho de 1994 no cálculo do benefício do INSS, podendo aumentar o valor mensal.",
    definition:
      "Revisão judicial que amplia a base de cálculo de determinadas aposentadorias do INSS para incluir contribuições feitas antes do Plano Real.",
    keyFacts: [
      "Reconhecida pelo STF.",
      "Aplica-se apenas quando é vantajosa ao aposentado.",
      "Depende de ação judicial.",
    ],
    practicalExample:
      "Um aposentado que contribuiu bastante na década de 1980 pede a revisão e obtém um benefício maior após o cálculo judicial.",
    whyItMatters: "Pode aumentar consideravelmente o valor da aposentadoria.",
    howItWorks: [
      "Simular com um cálculo especializado.",
      "Ajuizar a ação por meio de advogado.",
      "Aguardar decisão judicial.",
    ],
    advantages: ["Benefícios potencialmente maiores."],
    disadvantages: ["Prazo judicial longo.", "Nem sempre é vantajoso."],
    commonMistakes: ["Solicitar sem simulação prévia."],
    faqs: [{ q: "Quem pode pedir?", a: "Aposentados cujo cálculo melhora ao incluir contribuições anteriores a 1994." }],
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
    category: "Previdência",
    categorySlug: "previdencia",
    shortAnswer:
      "O Auxílio-Doença (atualmente chamado de Auxílio por Incapacidade Temporária) é um benefício do INSS pago ao segurado que está temporariamente incapaz para o trabalho, em razão de doença ou acidente, por mais de 15 dias consecutivos.",
    definition:
      "Benefício previdenciário concedido, após avaliação médica, ao trabalhador temporariamente incapaz de exercer suas atividades laborais.",
    keyFacts: [
      "Exige, na maioria dos casos, ao menos 12 contribuições mensais.",
      "Perícia médica por telemedicina ou presencial.",
      "Duração conforme parecer médico.",
    ],
    practicalExample:
      "Um trabalhador após cirurgia no joelho solicita o benefício pelo Meu INSS, faz a perícia por telemedicina e recebe pagamentos mensais durante a recuperação.",
    whyItMatters: "Garante renda durante a recuperação médica.",
    howItWorks: [
      "Solicitação pelo Meu INSS.",
      "Realização da perícia médica.",
      "Pagamento enquanto persistir a incapacidade.",
    ],
    advantages: ["Renda durante a recuperação."],
    disadvantages: ["Longas filas para perícia."],
    commonMistakes: ["Faltar à perícia médica."],
    faqs: [{ q: "Existe carência?", a: "Os primeiros 15 dias são pagos pelo empregador para trabalhadores CLT." }],
    related: ["inss", "bpc-loas"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-06",
    readingTime: "6 min",
    popularity: 75,
    synonyms: ["Auxílio por Incapacidade Temporária"],
    relatedArticleSlugs: ["auxilio-doenca-perito"],
  }),
  t({
    slug: "seguro-desemprego",
    term: "Seguro-Desemprego",
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "O Seguro-Desemprego é um benefício temporário brasileiro pago a trabalhadores formais demitidos sem justa causa, oferecendo de três a cinco parcelas mensais conforme o tempo de serviço e a média salarial.",
    definition:
      "Benefício federal de proteção ao trabalho financiado pelo FAT e administrado pelo Ministério do Trabalho.",
    keyFacts: [
      "De 3 a 5 parcelas conforme o tempo de serviço.",
      "Solicitação pela CTPS Digital ou SINE.",
      "Valor mínimo igual ao salário mínimo.",
    ],
    practicalExample:
      "Um trabalhador demitido após 24 meses de trabalho solicita o benefício e recebe quatro parcelas mensais enquanto procura um novo emprego.",
    whyItMatters: "Garante renda entre um emprego e outro.",
    howItWorks: [
      "O empregador emite os documentos da rescisão.",
      "O trabalhador solicita o benefício no prazo legal.",
    ],
    advantages: ["Garantia temporária de renda."],
    disadvantages: ["Número limitado de parcelas."],
    commonMistakes: ["Perder o prazo para solicitar."],
    faqs: [{ q: "Posso pedir se estiver trabalhando?", a: "Não. Somente quem está desempregado e sem outras fontes de renda." }],
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
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "O Saque-Aniversário é uma modalidade do FGTS que permite ao trabalhador sacar parte do saldo todo ano no mês do seu aniversário, em troca de perder o acesso ao saldo total em caso de demissão sem justa causa.",
    definition:
      "Modalidade opcional do FGTS regulamentada em lei federal, que oferece o acesso anual a parte do saldo.",
    keyFacts: [
      "Adesão opcional.",
      "Volta à modalidade padrão tem carência de 24 meses.",
      "Não afeta a multa rescisória de 40%.",
    ],
    practicalExample:
      "Um trabalhador nascido em março adere ao Saque-Aniversário e retira um percentual do saldo do FGTS todo mês de março.",
    whyItMatters: "Aumenta a liquidez no curto prazo, mas restringe o acesso no caso de rescisão.",
    howItWorks: [
      "Adesão pelo app da Caixa.",
      "Saque disponível no mês de aniversário.",
    ],
    advantages: ["Liquidez anual."],
    disadvantages: ["Bloqueia o saque total do FGTS na rescisão.", "Longa carência para reverter."],
    commonMistakes: ["Aderir sem entender o impacto na rescisão."],
    faqs: [{ q: "Posso voltar à modalidade padrão?", a: "Sim, mas a mudança só passa a valer após 24 meses." }],
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
    category: "Previdência",
    categorySlug: "previdencia",
    shortAnswer:
      "O CNIS (Cadastro Nacional de Informações Sociais) é a base de dados federal brasileira que armazena informações de contribuições e vínculos empregatícios para o INSS, usada no cálculo de aposentadorias e demais benefícios previdenciários.",
    definition:
      "Registro federal central de contribuições que alimenta a elegibilidade e o cálculo dos benefícios do INSS.",
    keyFacts: [
      "Administrado pela Dataprev.",
      "Consultado pelo Meu INSS.",
      "Correções exigem comprovação documental.",
    ],
    practicalExample:
      "Antes de se aposentar, o trabalhador abre o CNIS no Meu INSS e identifica contribuições faltantes para corrigir.",
    whyItMatters: "Erros no CNIS podem reduzir ou atrasar benefícios.",
    howItWorks: [
      "Acessar o Meu INSS.",
      "Abrir o extrato do CNIS.",
      "Solicitar correções quando necessário.",
    ],
    advantages: ["Gratuito.", "Histórico detalhado das contribuições."],
    commonMistakes: ["Não revisar o CNIS antes da aposentadoria."],
    faqs: [{ q: "Posso corrigir o CNIS pela internet?", a: "Sim, para vários tipos de correção, pelo Meu INSS, com documentos comprobatórios." }],
    related: ["inss", "aposentadoria-por-idade", "revisao-da-vida-toda"],
    author: "Carlos Menezes",
    lastUpdated: "2026-11-10",
    readingTime: "5 min",
    popularity: 72,
    synonyms: ["Cadastro Nacional de Informações Sociais"],
  }),
  t({
    slug: "selic",
    term: "Taxa Selic",
    category: "Economia",
    categorySlug: "economia",
    shortAnswer:
      "A Taxa Selic é a taxa básica de juros brasileira definida pelo Copom do Banco Central. Ela orienta todas as demais taxas da economia, incluindo empréstimos, financiamentos e títulos públicos como o Tesouro Selic.",
    definition:
      "A taxa básica da economia brasileira, definida nas reuniões do Copom e utilizada como referência da política monetária.",
    keyFacts: [
      "Definida pelo Copom a cada 45 dias.",
      "Ancora o rendimento do Tesouro Selic.",
      "Impacta a inflação e o crédito.",
    ],
    practicalExample:
      "Quando o Copom eleva a Selic, os juros do crédito imobiliário e do cartão de crédito costumam subir, enquanto o Tesouro Selic passa a render mais.",
    whyItMatters: "É a principal alavanca da política monetária brasileira.",
    howItWorks: [
      "O Copom avalia inflação e atividade econômica.",
      "Define a meta da Selic.",
      "O BCB atua no mercado aberto para fazê-la valer.",
    ],
    advantages: ["Âncora para o controle da inflação."],
    disadvantages: ["Selic alta desacelera crédito e crescimento."],
    commonMistakes: ["Confundir Selic com CDI."],
    faqs: [{ q: "Com que frequência a Selic é revisada?", a: "Aproximadamente a cada 45 dias, nas reuniões do Copom." }],
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
    category: "Economia",
    categorySlug: "economia",
    shortAnswer:
      "O IPCA (Índice Nacional de Preços ao Consumidor Amplo) é o índice oficial de inflação do Brasil, calculado pelo IBGE, que mede a variação de preços para famílias com renda de 1 a 40 salários mínimos nas principais regiões metropolitanas.",
    definition:
      "Índice de referência do regime de metas de inflação do Brasil, divulgado mensalmente pelo IBGE.",
    keyFacts: [
      "Divulgado mensalmente pelo IBGE.",
      "Referência da meta de inflação.",
      "Ponderado pela estrutura de consumo das famílias.",
    ],
    practicalExample:
      "Quando o IPCA vem acima da meta, o Copom tende a elevar a Selic para conter a alta dos preços.",
    whyItMatters: "Orienta a política monetária e o reajuste de contratos.",
    howItWorks: [
      "O IBGE coleta preços em regiões metropolitanas.",
      "Aplica pesos baseados no consumo das famílias.",
      "Divulga a variação mensal.",
    ],
    advantages: ["Referência oficial da inflação."],
    commonMistakes: ["Confundir o IPCA com o IGP-M."],
    faqs: [{ q: "Qual é a meta de inflação?", a: "Definida pelo CMN e perseguida pelo BCB com banda de tolerância." }],
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
    category: "Economia",
    categorySlug: "economia",
    shortAnswer:
      "O CDI (Certificado de Depósito Interbancário) é a referência brasileira dos rendimentos de renda fixa. Acompanha de perto a Taxa Selic e é usado para precificar CDBs, LCIs, LCAs e outros investimentos conservadores.",
    definition:
      "Taxa de juros interbancária que reflete o custo de captação diária entre bancos brasileiros.",
    keyFacts: [
      "Muito próximo da Selic.",
      "Referência para CDBs e fundos DI.",
      "Divulgado diariamente pela B3.",
    ],
    practicalExample:
      "Um CDB que paga 110% do CDI rende próximo a 110% da Selic vigente.",
    whyItMatters: "Quase todo produto de renda fixa é cotado como percentual do CDI.",
    howItWorks: [
      "Bancos emprestam entre si em operações de um dia.",
      "A taxa média se torna o CDI.",
    ],
    advantages: ["Referência transparente."],
    commonMistakes: ["Assumir que 100% do CDI equivale à Selic sem considerar o imposto."],
    faqs: [{ q: "100% do CDI é bom?", a: "É a referência base. Produtos premium oferecem 110% ou mais do CDI." }],
    related: ["selic", "tesouro-direto", "cartao-de-credito"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 68,
  }),
  t({
    slug: "tesouro-direto",
    term: "Tesouro Direto",
    category: "Finanças",
    categorySlug: "financas",
    shortAnswer:
      "O Tesouro Direto é o programa on-line do governo federal brasileiro que permite a pessoas físicas investirem em títulos públicos a partir de cerca de R$ 30, com opções indexadas à Selic, ao IPCA ou prefixadas.",
    definition:
      "Plataforma de investimento no varejo operada pelo Tesouro Nacional e pela B3 para vender títulos públicos diretamente aos investidores.",
    keyFacts: [
      "Criado em 2002.",
      "Investimento mínimo próximo de R$ 30.",
      "Diferentes títulos para diferentes objetivos.",
    ],
    practicalExample:
      "Um poupador compra Tesouro Selic como reserva de emergência, por causa da liquidez diária e da baixa volatilidade.",
    whyItMatters: "Democratizou o acesso aos títulos públicos brasileiros.",
    howItWorks: [
      "Abrir conta em uma corretora.",
      "Escolher um tipo de título.",
      "Comprar pela plataforma da corretora.",
    ],
    advantages: ["Aporte baixo.", "Risco de crédito do governo."],
    disadvantages: ["Volatilidade de mercado nos títulos IPCA e prefixados vendidos antes do vencimento."],
    commonMistakes: ["Vender títulos longos antecipadamente com prejuízo."],
    faqs: [{ q: "O Tesouro Direto é seguro?", a: "Tem o menor risco de crédito do Brasil, garantido pelo governo federal." }],
    related: ["selic", "cdi", "educacao-financeira"],
    author: "Paulo Henrique",
    lastUpdated: "2026-11-05",
    readingTime: "6 min",
    popularity: 73,
  }),
  t({
    slug: "cartao-de-credito",
    term: "Cartão de Crédito",
    category: "Finanças",
    categorySlug: "financas",
    shortAnswer:
      "O cartão de crédito é um meio de pagamento que permite ao consumidor comprar a crédito dentro de um limite e pagar depois por meio de uma fatura mensal, com opções de parcelamento e programas de recompensa como cashback e milhas.",
    definition:
      "Produto de crédito rotativo emitido por bancos e fintechs que consolida as compras em uma fatura mensal.",
    keyFacts: [
      "Os juros estão entre os mais altos do mundo no Brasil.",
      "Inclui recompensas, cashback e milhas.",
      "Cartões por aproximação e virtuais amplamente disponíveis.",
    ],
    practicalExample:
      "Um consumidor compra um eletrônico em 10 parcelas sem juros e paga a fatura todo mês.",
    whyItMatters: "É um meio de pagamento amplamente usado, mas também carrega grande risco de endividamento.",
    howItWorks: [
      "O banco concede um limite de crédito.",
      "As compras se acumulam na fatura.",
      "Pagar o valor integral evita juros.",
    ],
    advantages: ["Comodidade.", "Recompensas."],
    disadvantages: ["Juros do rotativo muito altos."],
    commonMistakes: ["Pagar apenas o valor mínimo da fatura."],
    faqs: [{ q: "Como evitar juros?", a: "Pagar sempre o valor total da fatura até o vencimento." }],
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
    category: "Finanças",
    categorySlug: "financas",
    shortAnswer:
      "O Crédito Consignado é um empréstimo brasileiro cujas parcelas são descontadas automaticamente da folha de pagamento ou do benefício. Oferece uma das menores taxas de juros do mercado por conta do menor risco de inadimplência.",
    definition:
      "Empréstimo com desconto em folha disponível para servidores públicos, aposentados e pensionistas do INSS e, mais recentemente, para trabalhadores CLT.",
    keyFacts: [
      "Juros com teto definido em lei.",
      "Limite de desconto mensal em torno de 35% a 45% da renda.",
      "Disponível para aposentados do INSS e trabalhadores CLT.",
    ],
    practicalExample:
      "Um aposentado contrata um consignado com juros baixos e paga as parcelas descontadas diretamente do benefício do INSS.",
    whyItMatters: "Oferece crédito acessível a grupos com renda regular.",
    howItWorks: [
      "O banco valida a folha ou o benefício.",
      "O contrato é assinado.",
      "As parcelas são descontadas na fonte.",
    ],
    advantages: ["Juros menores.", "Aprovação simples."],
    disadvantages: ["Compromisso de longo prazo.", "Reduz a renda disponível."],
    commonMistakes: ["Contratar vários contratos ao mesmo tempo."],
    faqs: [{ q: "É possível renegociar?", a: "Sim, por meio de portabilidade ou refinanciamento." }],
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
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "O Auxílio Gás é um benefício federal brasileiro pago a cada dois meses às famílias do CadÚnico para ajudar a cobrir o custo do botijão de gás de cozinha de 13 kg, com valor referente ao preço médio nacional.",
    definition:
      "Programa de transferência bimestral que complementa o Bolsa Família para famílias de baixa renda.",
    keyFacts: [
      "Pago a cada dois meses.",
      "Valor atrelado ao preço médio do botijão de 13 kg.",
      "Exige inscrição no CadÚnico.",
    ],
    practicalExample:
      "Uma família cadastrada recebe o crédito do Auxílio Gás no Caixa Tem e utiliza o valor para comprar o botijão.",
    whyItMatters: "Reduz a pobreza energética das famílias vulneráveis.",
    howItWorks: [
      "Seleção automática com base no CadÚnico.",
      "Pagamento pelo Caixa Tem.",
    ],
    advantages: ["Inscrição automática.", "Impacto direto no orçamento familiar."],
    commonMistakes: ["Não manter o CadÚnico atualizado."],
    faqs: [{ q: "O Auxílio Gás é cumulativo com o Bolsa Família?", a: "Sim, ambos podem ser recebidos simultaneamente." }],
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
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "A Tarifa Social de Energia Elétrica é um programa brasileiro que concede descontos automáticos de até 65% na conta de luz para famílias de baixa renda inscritas no CadÚnico ou beneficiárias do BPC/LOAS.",
    definition:
      "Programa federal regulamentado pela ANEEL que concede desconto na energia elétrica a famílias de baixa renda elegíveis.",
    keyFacts: [
      "Automática desde 2022.",
      "Descontos de até 65%.",
      "Aplicada pela distribuidora.",
    ],
    practicalExample:
      "Uma família no CadÚnico passa a receber o desconto automaticamente na conta mensal de luz.",
    whyItMatters: "Alivia as despesas com energia das famílias vulneráveis.",
    howItWorks: [
      "Cruzamento de dados entre MDS e distribuidoras.",
      "Desconto aplicado diretamente na conta.",
    ],
    advantages: ["Inscrição automática.", "Desconto expressivo."],
    commonMistakes: ["Presumir o desconto sem conferir o histórico da conta."],
    faqs: [{ q: "Quem tem direito?", a: "Famílias no CadÚnico com renda per capita de até meio salário mínimo e beneficiários do BPC." }],
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
    category: "Benefícios",
    categorySlug: "beneficios",
    shortAnswer:
      "O Minha Casa Minha Vida é o programa federal brasileiro de habitação que financia a compra de imóveis por famílias de baixa e média renda, oferecendo subsídios, juros baixos e integração com o FGTS.",
    definition:
      "Iniciativa federal de habitação dividida em faixas de renda, com subsídios e prazos de financiamento por meio da Caixa e do Banco do Brasil.",
    keyFacts: [
      "Utiliza recursos do FGTS.",
      "Diversas faixas de renda.",
      "Descontos de até 95% na Faixa 1.",
    ],
    practicalExample:
      "Uma família na Faixa 1 compra um imóvel com parcelas compatíveis com a renda e recebe subsídio elevado.",
    whyItMatters: "Programa central para reduzir o déficit habitacional brasileiro.",
    howItWorks: [
      "A família se cadastra na Caixa ou na prefeitura.",
      "A aprovação depende da renda e da documentação.",
      "O financiamento é assinado com o subsídio aplicado.",
    ],
    advantages: ["Acesso à casa própria.", "Prazos longos de financiamento."],
    disadvantages: ["Filas de espera e restrições de localização."],
    commonMistakes: ["Não comparar condições entre bancos."],
    faqs: [{ q: "Posso usar o FGTS?", a: "Sim. O FGTS pode ser usado como entrada ou para amortização." }],
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
    category: "Impostos",
    categorySlug: "impostos",
    shortAnswer:
      "A Receita Federal é o órgão fiscal do governo brasileiro responsável por administrar os tributos federais, gerir os cadastros de CPF e CNPJ, controlar a alfândega e fiscalizar o cumprimento das obrigações fiscais.",
    definition:
      "Órgão federal subordinado ao Ministério da Fazenda, encarregado da administração tributária e do controle aduaneiro.",
    keyFacts: [
      "Administra CPF e CNPJ.",
      "Opera o portal digital e-CAC.",
      "Fiscaliza a alfândega.",
    ],
    practicalExample:
      "Um contribuinte acessa o e-CAC pelo gov.br para verificar pendências do IR.",
    whyItMatters: "É a autoridade tributária central do Brasil.",
    howItWorks: [
      "Administra os cadastros fiscais.",
      "Publica instruções normativas.",
      "Fiscaliza os contribuintes.",
    ],
    advantages: ["Serviços digitais em primeiro lugar."],
    commonMistakes: ["Ignorar notificações no e-CAC."],
    faqs: [{ q: "Como acesso o e-CAC?", a: "Com uma conta gov.br ou certificado digital válido." }],
    related: ["cpf", "cnpj", "imposto-de-renda"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-04",
    readingTime: "5 min",
    popularity: 72,
  }),
  t({
    slug: "cnpj",
    term: "CNPJ",
    category: "Impostos",
    categorySlug: "impostos",
    shortAnswer:
      "O CNPJ (Cadastro Nacional da Pessoa Jurídica) é o registro brasileiro de contribuintes pessoa jurídica, um identificador de 14 dígitos atribuído pela Receita Federal a empresas, MEIs, associações e demais entidades.",
    definition:
      "Identificador nacional das pessoas jurídicas, essencial para emitir notas fiscais, contratar e abrir contas bancárias.",
    keyFacts: [
      "14 dígitos.",
      "Administrado pela Receita Federal.",
      "Obrigatório para MEI, LTDA, S/A e outros.",
    ],
    practicalExample:
      "Um MEI recebe um CNPJ ao abrir a empresa no Portal do Empreendedor.",
    whyItMatters: "É a contrapartida corporativa do CPF e base do cumprimento tributário.",
    howItWorks: [
      "Cadastro na Receita Federal.",
      "Manter os dados atualizados.",
    ],
    advantages: ["Viabiliza a formalização."],
    commonMistakes: ["Não atualizar o CNAE quando as atividades mudam."],
    faqs: [{ q: "MEI tem CNPJ?", a: "Sim. O MEI também possui CNPJ." }],
    related: ["mei", "cpf", "receita-federal"],
    author: "Juliana Costa",
    lastUpdated: "2026-11-05",
    readingTime: "4 min",
    popularity: 74,
    synonyms: ["Cadastro Nacional da Pessoa Jurídica"],
  }),
  t({
    slug: "esocial",
    term: "eSocial",
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "O eSocial é a plataforma digital unificada usada pelos empregadores brasileiros para enviar informações trabalhistas, previdenciárias e fiscais como admissões, demissões, salários e FGTS em um único sistema.",
    definition:
      "Programa federal que centraliza as obrigações do empregador para reduzir redundâncias entre obrigações trabalhistas e fiscais.",
    keyFacts: [
      "Obrigatório para todos os empregadores.",
      "Inclui empregadores domésticos.",
      "Reduz papel e erros.",
    ],
    practicalExample:
      "Um empregador registra um novo funcionário no eSocial e atualiza INSS, FGTS e CTPS Digital em um único envio.",
    whyItMatters: "Padroniza as declarações trabalhistas e fiscais no Brasil.",
    howItWorks: [
      "O empregador envia os eventos on-line.",
      "Os dados chegam ao INSS, Caixa e Receita.",
    ],
    advantages: ["Ponto único de envio."],
    commonMistakes: ["Perder o prazo dos eventos."],
    faqs: [{ q: "Empregadores domésticos usam o eSocial?", a: "Sim, pelo eSocial Doméstico." }],
    related: ["carteira-de-trabalho-digital", "fgts", "clt"],
    author: "Rafael Souza",
    lastUpdated: "2026-11-14",
    readingTime: "5 min",
    popularity: 65,
  }),
  t({
    slug: "boleto",
    term: "Boleto Bancário",
    category: "Bancos",
    categorySlug: "bancos",
    shortAnswer:
      "O Boleto Bancário é o tradicional documento de cobrança brasileiro padronizado pela Febraban, usado para pagar contas, faturas e compras por internet banking, aplicativos ou casas lotéricas.",
    definition:
      "Documento de pagamento com código de barras e linha digitável exclusiva, aceito por todos os bancos brasileiros.",
    keyFacts: [
      "Pagável em qualquer banco ou lotérica.",
      "Está sendo progressivamente substituído pelo Pix.",
      "Possui vencimento e possível multa após o prazo.",
    ],
    practicalExample:
      "Um consumidor recebe o boleto da conta de internet e paga pelo app do banco antes do vencimento.",
    whyItMatters: "Ainda é muito usado para contas recorrentes e no B2B.",
    howItWorks: [
      "O emissor gera o boleto.",
      "O pagador quita até o vencimento.",
    ],
    advantages: ["Aceitação universal."],
    disadvantages: ["Mais lento que o Pix."],
    commonMistakes: ["Pagar sem conferir o nome do emissor."],
    faqs: [{ q: "Posso pagar boleto vencido?", a: "Sim, normalmente no banco emissor." }],
    related: ["pix", "pix-automatico", "open-finance"],
    author: "Marina Alves",
    lastUpdated: "2026-11-06",
    readingTime: "4 min",
    popularity: 60,
  }),
  t({
    slug: "open-finance",
    term: "Open Finance",
    category: "Bancos",
    categorySlug: "bancos",
    shortAnswer:
      "O Open Finance é o arcabouço regulado brasileiro que permite ao cliente compartilhar seus dados financeiros entre instituições autorizadas para obter melhores produtos, condições de crédito e serviços personalizados.",
    definition:
      "Ecossistema de compartilhamento de dados financeiros regulamentado pelo Banco Central, que evoluiu do Open Banking para cobrir investimentos, seguros e previdência.",
    keyFacts: [
      "Regulamentado pelo Banco Central.",
      "Exige consentimento explícito do usuário.",
      "Viabiliza a portabilidade de dados.",
    ],
    practicalExample:
      "Um usuário compartilha dados com uma fintech para receber ofertas de crédito personalizadas no Open Finance.",
    whyItMatters: "Aumenta a concorrência e melhora os produtos financeiros.",
    howItWorks: [
      "O usuário autoriza o compartilhamento.",
      "A instituição usa os dados para personalizar ofertas.",
    ],
    advantages: ["Taxas melhores.", "Mais concorrência."],
    disadvantages: ["Exige familiaridade digital para gerenciar consentimentos."],
    commonMistakes: ["Conceder consentimentos amplos sem revisar."],
    faqs: [{ q: "O Open Finance é seguro?", a: "Sim, baseado em autenticação forte e controles de consentimento." }],
    related: ["pix", "pix-automatico", "cartao-de-credito"],
    author: "Marina Alves",
    lastUpdated: "2026-11-08",
    readingTime: "5 min",
    popularity: 62,
  }),
  t({
    slug: "restituicao-ir",
    term: "Restituição do IR",
    category: "Impostos",
    categorySlug: "impostos",
    shortAnswer:
      "A Restituição do IR é a devolução paga pela Receita Federal aos contribuintes que pagaram Imposto de Renda a mais durante o ano, liberada em lotes mensais segundo a ordem de prioridade definida em lei.",
    definition:
      "Reembolso do Imposto de Renda pago ou retido em excesso após a apuração anual.",
    keyFacts: [
      "Paga em lotes mensais.",
      "Prioridade para idosos, PcDs e professores.",
      "Consultada no e-CAC ou no app do IR.",
    ],
    practicalExample:
      "Um contribuinte com muitas despesas médicas declara os gastos e recebe a restituição três meses depois.",
    whyItMatters: "É uma entrada anual de recursos para milhões de brasileiros.",
    howItWorks: [
      "Entregar a declaração anual.",
      "Aguardar o pagamento do lote.",
    ],
    advantages: ["Dinheiro de volta ao contribuinte."],
    disadvantages: ["Longa espera para os grupos de menor prioridade."],
    commonMistakes: ["Deixar de atualizar os dados bancários."],
    faqs: [{ q: "Como consultar a restituição?", a: "Pelo site da Receita Federal ou pelo app do IR com CPF e data de nascimento." }],
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
    category: "Trabalho",
    categorySlug: "trabalho",
    shortAnswer:
      "O PIS/Pasep é o abono salarial brasileiro pago anualmente aos trabalhadores formais que ganharam, em média, até dois salários mínimos no ano-base e estão cadastrados no programa há pelo menos cinco anos.",
    definition:
      "Abono salarial financiado por contribuições federais e pago pela Caixa (PIS) e pelo Banco do Brasil (Pasep).",
    keyFacts: [
      "Até um salário mínimo por ano.",
      "Depende de informações do empregador via RAIS/eSocial.",
      "Calendário definido anualmente pelo CODEFAT.",
    ],
    practicalExample:
      "Um trabalhador dentro do limite consulta o calendário e saca o abono pelo aplicativo Caixa Tem.",
    whyItMatters: "Oferece uma renda extra a trabalhadores formais de baixa remuneração.",
    howItWorks: [
      "O empregador envia os dados.",
      "O governo federal divulga o calendário.",
      "O trabalhador saca o valor.",
    ],
    advantages: ["Renda anual adicional."],
    commonMistakes: ["Perder a janela de saque."],
    faqs: [{ q: "Quem recebe o PIS?", a: "Trabalhadores da iniciativa privada que atendem aos requisitos; o Pasep é para servidores públicos." }],
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
    category: "Carreiras",
    categorySlug: "carreiras",
    shortAnswer:
      "O Concurso Público é o processo seletivo previsto em lei para a contratação de servidores no Brasil, baseado em provas objetivas, títulos ou uma combinação de ambos, garantindo o acesso ao serviço público pelo mérito.",
    definition:
      "Processo seletivo público competitivo previsto no artigo 37 da Constituição brasileira.",
    keyFacts: [
      "Exigido pela Constituição para cargos efetivos.",
      "Anunciado por meio de edital oficial.",
      "Validade típica de até dois anos, prorrogável uma vez.",
    ],
    practicalExample:
      "Um candidato estuda por seis meses, faz a prova objetiva e assume o cargo público após ser classificado dentro das vagas.",
    whyItMatters: "É o principal caminho para carreiras públicas estáveis no Brasil.",
    howItWorks: [
      "O edital é publicado.",
      "Os candidatos se inscrevem e realizam as provas.",
      "Os aprovados são chamados dentro da validade.",
    ],
    advantages: ["Estabilidade.", "Carreiras estruturadas."],
    disadvantages: ["Longo período de estudo.", "Alta concorrência."],
    commonMistakes: ["Ignorar as regras do edital."],
    faqs: [{ q: "O edital é a regra final?", a: "Sim. O edital vincula tanto a administração quanto os candidatos." }],
    related: ["concurso-inss", "concurso-caixa", "cpf"],
    author: "Diego Ferreira",
    lastUpdated: "2026-11-08",
    readingTime: "6 min",
    popularity: 87,
    trending: true,
  }),
  t({
    slug: "concurso-inss",
    term: "Concurso INSS",
    category: "Carreiras",
    categorySlug: "carreiras",
    shortAnswer:
      "O Concurso INSS é o processo seletivo federal para vagas do INSS, como técnico e analista do seguro social, com abrangência nacional, salários atrativos e progressão de carreira estruturada.",
    definition:
      "Concurso federal organizado para preencher vagas do INSS em todo o Brasil.",
    keyFacts: [
      "Abrangência nacional.",
      "Salários acima de R$ 8.000 nos cargos de nível superior.",
      "Provas objetivas e discursivas.",
    ],
    practicalExample:
      "Um candidato estuda direito previdenciário por meses e é aprovado para o cargo de analista do INSS.",
    whyItMatters: "Renova o quadro do INSS e oferece oportunidades de carreira.",
    howItWorks: [
      "Edital é publicado.",
      "As provas são aplicadas em todo o país.",
    ],
    advantages: ["Estabilidade.", "Salário federal."],
    disadvantages: ["Alta concorrência."],
    commonMistakes: ["Ignorar a bibliografia específica."],
    faqs: [{ q: "Quais são os requisitos?", a: "Variam por cargo. Geralmente ensino superior para analista e ensino médio para técnico." }],
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
    category: "Carreiras",
    categorySlug: "carreiras",
    shortAnswer:
      "O Concurso Caixa é o processo seletivo federal para vagas da Caixa Econômica Federal, como técnico bancário, com vagas em todo o país e salários iniciais em torno de R$ 3.700.",
    definition:
      "Processo seletivo federal para contratação na Caixa, um dos maiores bancos públicos do Brasil.",
    keyFacts: [
      "Vagas em todo o país.",
      "Exigência de ensino médio para técnico.",
      "Oferece plano de carreira e benefícios.",
    ],
    practicalExample:
      "Um candidato é aprovado e assume o cargo de técnico bancário após o treinamento.",
    whyItMatters: "Alimenta o quadro da Caixa para sua missão social e financeira.",
    howItWorks: [
      "Edital publicado.",
      "Prova objetiva e avaliação de títulos.",
    ],
    advantages: ["Cargo estável.", "Benefícios amplos."],
    disadvantages: ["Alta concorrência."],
    commonMistakes: ["Subestimar as sessões de português e matemática."],
    faqs: [{ q: "Preciso de experiência bancária?", a: "Não. O treinamento é fornecido após a aprovação." }],
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
    category: "Carreiras",
    categorySlug: "carreiras",
    shortAnswer:
      "O Jovem Aprendiz é um programa brasileiro para jovens de 14 a 24 anos que combina trabalho formal sob a CLT com formação profissional obrigatória, incentivando o primeiro emprego e reduzindo o desemprego juvenil.",
    definition:
      "Arcabouço legal criado pela Lei da Aprendizagem, que obriga empresas de médio e grande porte a contratarem aprendizes.",
    keyFacts: [
      "Contrato CLT especial.",
      "Combina trabalho e aprendizagem.",
      "Carga horária reduzida para permitir o estudo.",
    ],
    practicalExample:
      "Uma jovem de 17 anos assina o contrato de Jovem Aprendiz, trabalha quatro horas por dia e estuda no Senai em paralelo.",
    whyItMatters: "Formaliza o acesso ao mercado de trabalho para os jovens.",
    howItWorks: [
      "A empresa contrata sob um contrato CLT especial.",
      "O aprendiz frequenta a formação em uma instituição certificada.",
    ],
    advantages: ["Primeiro emprego formal.", "Aprendizagem estruturada."],
    disadvantages: ["Limitado a contrato por prazo determinado."],
    commonMistakes: ["Confundir com contratos comuns da CLT."],
    faqs: [{ q: "Qual é a faixa etária?", a: "De 14 a 24 anos, com exceções para pessoas com deficiência." }],
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
    category: "Carreiras",
    categorySlug: "carreiras",
    shortAnswer:
      "O Trabalho Remoto (home office) é o regime em que o trabalhador exerce suas funções fora das dependências do empregador. É regulamentado pela CLT após a Reforma Trabalhista de 2017 e teve atualizações durante a pandemia.",
    definition:
      "Modalidade de teletrabalho reconhecida pela CLT, com necessidade de acordo escrito e previsões sobre equipamentos e despesas.",
    keyFacts: [
      "Regulamentado pela CLT.",
      "Exige acordo escrito.",
      "Despesas e equipamentos definidos em contrato.",
    ],
    practicalExample:
      "Um desenvolvedor assina um aditivo de trabalho remoto e passa a trabalhar de casa em todo o país.",
    whyItMatters: "Amplia o alcance do mercado de trabalho e a flexibilidade.",
    howItWorks: [
      "Empresa e empregado assinam o aditivo contratual.",
      "O trabalho é executado remotamente.",
    ],
    advantages: ["Flexibilidade.", "Maior pool de talentos."],
    disadvantages: ["Necessidade de infraestrutura em casa."],
    commonMistakes: ["Migrar para o remoto sem aditivo formal."],
    faqs: [{ q: "Trabalhadores remotos são CLT?", a: "Sim. O trabalho remoto se encaixa nas regras da CLT." }],
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
    category: "Finanças",
    categorySlug: "financas",
    shortAnswer:
      "A Educação Financeira é o conjunto de conhecimentos e hábitos que ajudam brasileiros a planejar, poupar, investir e administrar dívidas com consciência, elevando o patrimônio pessoal e reduzindo o risco de inadimplência.",
    definition:
      "Conjunto de conteúdos e práticas de letramento financeiro promovido pela ENEF, bancos, escolas e criadores independentes.",
    keyFacts: [
      "Promovida pela ENEF.",
      "Inclui orçamento, investimento e gestão de dívidas.",
      "Correlacionada a menor taxa de inadimplência.",
    ],
    practicalExample:
      "Uma família monta um orçamento mensal, cancela assinaturas não usadas e inicia uma reserva de emergência no Tesouro Selic.",
    whyItMatters: "Melhora a saúde financeira pessoal e a estabilidade macroeconômica.",
    howItWorks: [
      "Aprender os conceitos-chave.",
      "Definir metas financeiras.",
      "Ajustar hábitos e monitorar o progresso.",
    ],
    advantages: ["Redução de dívidas.", "Construção de patrimônio."],
    commonMistakes: ["Focar em investimentos antes de quitar dívidas caras."],
    faqs: [{ q: "Por onde começar?", a: "Monte um orçamento e elimine primeiro as dívidas mais caras." }],
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
  return `/glossario/o-que-e-${slug}`;
}
