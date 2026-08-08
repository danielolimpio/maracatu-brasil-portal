import type { Post } from "./posts";
import capa from "@/assets/imposto-renda-2026-capa.jpg";
import corpo from "@/assets/imposto-renda-2026-corpo.jpg";

const CAMILA = {
  name: "Camila Andrade",
  role: "Editora de Impostos e Finanças Pessoais",
  bio: "Contadora com registro no CRC e 15 anos de experiência em imposto de renda pessoa física, planejamento tributário familiar e regularização de CPF. Acompanha desde 2010 as instruções normativas da Receita Federal e já orientou mais de três mil declarações, o que a fez desenvolver um método de checagem de documentos que reduz drasticamente o risco de malha fina.",
};

export const impostoRenda2026: Post = {
  slug: "imposto-de-renda-2026-tabela-prazos-restituicao",
  category: "Impostos",
  categorySlug: "impostos",
  title:
    "Imposto de Renda 2026: tabela atualizada, quem é obrigado a declarar, prazos e como consultar a restituição",
  seoTitle: "Imposto de Renda 2026: Tabela, Quem Declara e Restituição",
  metaDescription:
    "Tabela do Imposto de Renda 2026, quem é obrigado a declarar, prazo de entrega, deduções permitidas, lotes da restituição e como evitar cair na malha fina.",
  excerpt:
    "Faixas de isenção, limites de obrigatoriedade, documentos essenciais, deduções que realmente valem a pena e o passo a passo para acompanhar a restituição do IRPF sem sair de casa.",
  keywords: [
    "imposto de renda 2026",
    "tabela imposto de renda 2026",
    "quem é obrigado a declarar imposto de renda 2026",
    "consulta restituição imposto de renda 2026",
    "declaração de imposto de renda pessoa física",
    "malha fina Receita Federal",
    "deduções imposto de renda",
    "previdência privada dedução IRPF",
  ],
  tags: [
    "Imposto de Renda",
    "Receita Federal",
    "IRPF",
    "Restituição",
    "Planejamento financeiro",
    "CPF",
  ],
  author: CAMILA,
  publishedAt: "2026-08-08",
  updatedAt: "2026-08-08",
  publishedLabel: "08 Ago 2026",
  readTime: "15 min",
  cover: {
    src: capa,
    alt: "Homem revisando documentos e holerites ao lado de um notebook com a declaração do Imposto de Renda 2026 aberta",
    caption:
      "Organizar informes de rendimentos e comprovantes antes de abrir o programa é o que separa uma restituição rápida de meses na malha fina. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "Existe um ritual anual que reúne assalariados, aposentados, autônomos, motoristas de aplicativo e investidores no mesmo estado de espírito: a temporada da <strong>declaração do Imposto de Renda</strong>. Em 2026, esse ritual chega com um detalhe que muda o cálculo de milhões de pessoas — a faixa de isenção mais alta dos últimos anos, combinada com regras mais rígidas de cruzamento de dados pela Receita Federal.",
    },
    {
      t: "p",
      html: "A boa notícia é que declarar deixou de ser um exercício de paciência. A pré-preenchida puxa automaticamente informes de rendimentos, notas fiscais de saúde, contribuições previdenciárias e até informações de corretoras. A má notícia é que o mesmo sistema que facilita o seu trabalho também facilita o da fiscalização: hoje a Receita compara o que você declara com o que bancos, empregadores, planos de saúde, cartórios e operadoras de cartão já informaram sobre você.",
    },
    {
      t: "p",
      html: "Neste guia, você encontra a <strong>tabela do Imposto de Renda 2026</strong>, os limites que definem quem é obrigado a declarar, o calendário de entrega e dos lotes de restituição, as deduções que realmente reduzem o imposto, os erros que mais derrubam contribuintes na malha fina e o caminho para consultar o seu dinheiro de volta.",
    },
    {
      t: "callout",
      tone: "info",
      title: "Resposta rápida",
      html: "Em 2026, está <strong>obrigado a declarar</strong> quem teve rendimentos tributáveis acima de <strong>R$ 33.888,00</strong> no ano-calendário de 2025 (cerca de R$ 2.824 por mês), quem recebeu mais de R$ 200 mil em rendimentos isentos, quem obteve ganho de capital, quem operou em bolsa acima dos limites da Receita, quem tinha bens acima de R$ 800 mil em 31 de dezembro ou quem faturou como produtor rural acima de R$ 169.440,00. O prazo vai de <strong>15 de março a 31 de maio de 2026</strong>.",
    },
    { t: "h2", text: "Tabela do Imposto de Renda 2026: faixas e alíquotas" },
    {
      t: "p",
      html: "A tabela progressiva mensal é o coração do cálculo. Ela determina quanto é retido do seu salário todos os meses e serve de base para o ajuste anual. Quanto maior o rendimento, maior a alíquota aplicada — mas apenas sobre a parcela que ultrapassa cada faixa, o que é justamente o ponto que mais gera confusão entre os contribuintes.",
    },
    {
      t: "table",
      caption:
        "Tabela progressiva mensal do IRPF vigente em 2026, considerando a isenção ampliada até dois salários mínimos com o desconto simplificado.",
      head: ["Base de cálculo mensal", "Alíquota", "Parcela a deduzir"],
      rows: [
        ["Até R$ 2.428,80", "Isento", "—"],
        ["De R$ 2.428,81 a R$ 2.826,65", "7,5%", "R$ 182,16"],
        ["De R$ 2.826,66 a R$ 3.751,05", "15%", "R$ 394,16"],
        ["De R$ 3.751,06 a R$ 4.664,68", "22,5%", "R$ 675,49"],
        ["Acima de R$ 4.664,68", "27,5%", "R$ 908,73"],
      ],
    },
    {
      t: "p",
      html: "Além da tabela, existe o <strong>desconto simplificado mensal</strong> equivalente a 25% da primeira faixa. É esse mecanismo que, na prática, mantém isento quem ganha até dois salários mínimos, mesmo com a faixa nominal da tabela sendo menor. Se você recebe perto desse valor e viu desconto de IRRF no holerite, vale conferir com o setor de pessoal se o desconto simplificado está sendo aplicado.",
    },
    { t: "h3", text: "Como o cálculo funciona na prática" },
    {
      t: "p",
      html: "Imagine um trabalhador com salário bruto de R$ 4.200 e contribuição ao INSS de R$ 378. A base de cálculo cai para R$ 3.822, entrando na faixa de 22,5%. O imposto bruto seria R$ 859,95, menos a parcela a deduzir de R$ 675,49 — resultando em R$ 184,46 de retenção mensal. Se ele tiver um dependente (R$ 189,59 de dedução) e pagar pensão alimentícia judicial, a base cai novamente e o desconto diminui.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Dica de quem faz isso todo ano",
      html: "Antes de escolher entre desconto simplificado e deduções legais, preencha as duas versões no programa. A Receita calcula automaticamente qual é mais vantajosa, mas só consegue fazer isso se você <em>informar</em> todas as despesas dedutíveis. Quem pula essa etapa costuma perder centenas de reais de restituição.",
    },
    { t: "h2", text: "Quem é obrigado a declarar o Imposto de Renda 2026" },
    {
      t: "p",
      html: "A obrigatoriedade não depende apenas do salário. Existem sete portas de entrada, e basta cumprir uma delas para que a declaração se torne obrigatória. Muita gente descobre isso tarde — por exemplo, ao vender um carro com lucro ou ao receber uma herança.",
    },
    {
      t: "ul",
      items: [
        "<strong>Rendimentos tributáveis</strong> superiores a R$ 33.888,00 em 2025 (salário, aluguel, pró-labore, aposentadoria acima do limite);",
        "<strong>Rendimentos isentos, não tributáveis ou tributados na fonte</strong> acima de R$ 200.000,00, incluindo poupança, indenizações e FGTS;",
        "<strong>Ganho de capital</strong> na venda de imóveis, veículos, participações societárias ou criptomoedas;",
        "<strong>Operações em bolsa de valores</strong>, mercadorias e futuros acima dos limites definidos pela Receita, ou com prejuízo a compensar;",
        "<strong>Bens e direitos</strong> — inclusive terra nua — cujo valor total superava R$ 800.000,00 em 31 de dezembro de 2025;",
        "<strong>Atividade rural</strong> com receita bruta acima de R$ 169.440,00 ou intenção de compensar prejuízos;",
        "<strong>Residência fiscal</strong> adquirida no Brasil durante o ano e mantida em 31 de dezembro.",
      ],
    },
    {
      t: "h3",
      text: "Quem não é obrigado, mas deveria declarar",
    },
    {
      t: "p",
      html: "Se você teve imposto retido na fonte ao longo do ano — mesmo que pouco — e ficou abaixo do limite de obrigatoriedade, declarar é o único caminho para receber esse valor de volta. O mesmo vale para quem tem despesas médicas altas, plano de saúde familiar ou <strong>previdência privada PGBL</strong>, que pode abater até 12% da renda bruta tributável.",
    },
    {
      t: "quote",
      html: "A declaração não é só uma obrigação: é um instrumento de organização patrimonial. Quem declara com consistência ano após ano constrói um histórico que facilita crédito imobiliário, financiamento de veículo e comprovação de renda.",
      cite: "Camila Andrade, editora de Impostos do Maracatu Brasil",
    },
    {
      t: "image",
      src: corpo,
      alt: "Mãos segurando celular com aplicativo de imposto de renda aberto sobre uma mesa com holerites, óculos e caneta",
      caption:
        "A declaração pré-preenchida reduz erros de digitação, mas exige conferência linha por linha dos informes de rendimentos. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "Prazos, multas e o calendário completo de 2026" },
    {
      t: "p",
      html: "O período de entrega de 2026 começa em <strong>15 de março</strong> e termina em <strong>31 de maio</strong>. Quem perde o prazo paga multa mínima de R$ 165,74, que pode chegar a 20% do imposto devido, com juros pela taxa Selic. E não existe perdão automático: a multa é emitida junto com o recibo de entrega.",
    },
    {
      t: "table",
      caption:
        "Datas-chave da temporada do IRPF 2026 e o que fazer em cada uma delas.",
      head: ["Etapa", "Data", "O que fazer"],
      rows: [
        [
          "Abertura do programa e da pré-preenchida",
          "15 de março",
          "Baixar o programa, acessar o e-CAC com conta gov.br prata ou ouro e importar os dados",
        ],
        [
          "Prazo ideal de entrega",
          "até 15 de abril",
          "Declarar cedo garante os primeiros lotes de restituição",
        ],
        [
          "Fim do prazo",
          "31 de maio",
          "Última chance de entregar sem multa; após isso, incide penalidade",
        ],
        [
          "1º lote de restituição",
          "31 de maio",
          "Consultar no e-CAC ou no app da Receita",
        ],
        [
          "Lotes seguintes",
          "junho a setembro",
          "Pagamentos mensais, sempre no último dia útil",
        ],
        [
          "Retificação",
          "até 5 anos",
          "Corrigir erros sem multa, desde que a declaração não esteja em fiscalização",
        ],
      ],
    },
    { t: "h3", text: "Ordem de prioridade nos lotes da restituição" },
    {
      t: "ol",
      items: [
        "Idosos com 80 anos ou mais;",
        "Contribuintes entre 60 e 79 anos, pessoas com deficiência ou doença grave;",
        "Contribuintes cuja maior fonte de renda seja o magistério;",
        "Quem usou a declaração pré-preenchida <em>e</em> optou por receber via Pix;",
        "Demais contribuintes, por ordem de entrega.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Atalho para receber antes",
      html: "Usar a pré-preenchida e indicar uma <strong>chave Pix do tipo CPF</strong> coloca você em um grupo de prioridade legal. É a forma mais barata e rápida de antecipar a restituição — sem precisar de antecipação bancária, que cobra juros e reduz o valor líquido.",
    },
    { t: "h2", text: "Deduções que realmente reduzem o imposto" },
    {
      t: "p",
      html: "Na modalidade de deduções legais, cada real informado corretamente reduz a base de cálculo. Mas não vale tudo: a Receita limita alguns itens e cruza outros com informações prestadas por terceiros.",
    },
    {
      t: "table",
      caption: "Principais deduções do IRPF, limites e nível de risco de cruzamento.",
      head: ["Dedução", "Limite em 2026", "Observação"],
      rows: [
        ["Dependentes", "R$ 2.275,08 por dependente/ano", "Exige CPF de todos, inclusive recém-nascidos"],
        ["Despesas médicas e odontológicas", "Sem limite", "Só com recibo, CNPJ/CPF do prestador e vínculo comprovável"],
        ["Instrução (escola, faculdade)", "R$ 3.561,50 por pessoa/ano", "Não inclui cursos livres, idiomas nem material escolar"],
        ["Previdência oficial (INSS)", "Integral", "Inclui contribuição de empregado doméstico em alguns casos"],
        ["Previdência privada PGBL", "12% da renda bruta tributável", "VGBL não é dedutível"],
        ["Pensão alimentícia", "Integral", "Somente quando fixada judicialmente ou por escritura pública"],
        ["Doações incentivadas", "Até 6% do imposto devido", "Fundos da criança, do idoso, cultura e esporte"],
      ],
    },
    {
      t: "p",
      html: "Uma dedução esquecida com frequência é a <strong>contribuição ao INSS como contribuinte individual</strong> — muito comum entre profissionais liberais e MEIs que também têm rendimentos como pessoa física. Outra é a despesa médica de dependente que não mora com você, mas que consta na declaração.",
    },
    { t: "h3", text: "Comparativo: simplificada ou completa?" },
    {
      t: "table",
      caption: "Como escolher a modalidade de declaração conforme o seu perfil.",
      head: ["Perfil", "Melhor modalidade", "Por quê"],
      rows: [
        ["Solteiro, sem dependentes, poucas despesas", "Simplificada", "Desconto de 20% sobre os rendimentos tributáveis, limitado a R$ 16.754,34"],
        ["Família com escola e plano de saúde", "Completa", "Despesas somadas normalmente superam o desconto padrão"],
        ["Aposentado com gastos médicos altos", "Completa", "Despesas médicas não têm limite de dedução"],
        ["Autônomo com livro-caixa", "Completa", "Permite abater despesas necessárias à atividade"],
      ],
    },
    { t: "h2", text: "Malha fina: os erros que mais derrubam declarações" },
    {
      t: "p",
      html: "A malha fina não é uma punição, e sim uma retenção da declaração para verificação. O problema é o tempo: enquanto o processo não é resolvido, a restituição fica bloqueada e o CPF pode ficar pendente de regularização — o que atrapalha financiamentos, concursos e até a emissão de passaporte.",
    },
    {
      t: "ul",
      items: [
        "Omitir rendimentos de um segundo emprego ou de aposentadoria acumulada com salário;",
        "Não informar rendimentos do cônjuge quando a declaração é conjunta;",
        "Declarar despesa médica sem recibo válido ou de pessoa que não é dependente;",
        "Informar valores diferentes do que consta no informe de rendimentos do banco;",
        "Esquecer aluguéis recebidos, mesmo quando administrados por imobiliária;",
        "Deixar de declarar venda de imóvel ou veículo, ainda que sem lucro;",
        "Não informar saldos de contas em corretoras e investimentos no exterior.",
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Atenção",
      html: "Se você identificar o erro antes da Receita, faça a <strong>declaração retificadora</strong> imediatamente, mantendo o mesmo número do recibo original. Retificar por conta própria não gera multa. Esperar a intimação, sim.",
    },
    { t: "h2", text: "Como consultar a restituição passo a passo" },
    {
      t: "ol",
      items: [
        "Acesse o portal e-CAC da Receita Federal com sua conta gov.br (nível prata ou ouro) ou certificado digital;",
        "Entre em <em>Meu Imposto de Renda</em> e localize o quadro de processamento da declaração;",
        "Verifique se há pendência: a mensagem “em processamento” é normal nos primeiros dias, mas “com pendências” exige ação;",
        "Confira o lote e a data de crédito informados na tela de restituição;",
        "Se o valor não cair na conta indicada, o dinheiro fica disponível por até um ano para resgate em qualquer agência do Banco do Brasil;",
        "Passado esse prazo, solicite o valor pelo próprio e-CAC — ele não é perdido, apenas precisa ser reagendado.",
      ],
    },
    {
      t: "p",
      html: "Quem prefere o celular pode usar o aplicativo oficial da Receita Federal, que mostra o mesmo status. Desconfie de sites e mensagens que pedem dados bancários para “liberar restituição”: a Receita nunca envia links por SMS, WhatsApp ou e-mail. Esse é hoje um dos golpes mais comuns na temporada do IRPF.",
    },
    { t: "h2", text: "Planejamento para pagar menos imposto de forma legal" },
    {
      t: "p",
      html: "Reduzir imposto não é sinônimo de esconder informação. Existem escolhas absolutamente legais que, feitas ao longo do ano, mudam o resultado da declaração seguinte.",
    },
    {
      t: "ul",
      items: [
        "<strong>Aporte em PGBL</strong> até o limite de 12% da renda bruta tributável, especialmente para quem declara no modelo completo;",
        "<strong>Contribuição ao INSS em dia</strong>, que reduz a base e ainda garante cobertura previdenciária;",
        "<strong>Guarda organizada de recibos médicos</strong> em uma pasta digital, mês a mês, com CNPJ do prestador;",
        "<strong>Registro de dependentes com CPF</strong> desde o nascimento;",
        "<strong>Doações incentivadas</strong> feitas até 31 de dezembro, com recibo do fundo municipal;",
        "<strong>Controle de custos de imóveis</strong> — benfeitorias comprovadas reduzem o ganho de capital em uma venda futura.",
      ],
    },
    {
      t: "p",
      html: "Se você acompanha os movimentos da economia, vale entender também como o rendimento dos seus investimentos entra na conta. Nossa cobertura sobre <a href=\"/economia/selic-copom-corte-juros\">a taxa Selic e as decisões do Copom</a> ajuda a dimensionar o efeito do imposto sobre a renda fixa, enquanto o guia de <a href=\"/financas/educacao-financeira-familia\">educação financeira para a família</a> mostra como transformar a restituição em reserva de emergência em vez de consumo imediato. Se o seu caso envolve benefícios sociais, veja também nosso <a href=\"/beneficios/calendario-bolsa-familia-2026\">calendário do Bolsa Família 2026</a>, já que rendimentos assistenciais têm tratamento próprio na declaração.",
    },
    { t: "h4", text: "Documentos para separar antes de começar" },
    {
      t: "ul",
      items: [
        "Informes de rendimentos de empregadores, INSS e bancos;",
        "Comprovantes de despesas médicas, odontológicas e de escola;",
        "Documentos de compra e venda de bens no ano;",
        "Extratos de corretoras e informes de investimentos;",
        "Comprovante de contribuição previdenciária e recibos de aluguel;",
        "Dados bancários para restituição, de preferência chave Pix CPF.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual é o limite de isenção do Imposto de Renda em 2026?",
      a: "Com o desconto simplificado aplicado mensalmente, quem recebe até dois salários mínimos permanece isento. Para a obrigatoriedade de declarar, o limite de rendimentos tributáveis no ano-calendário de 2025 é de R$ 33.888,00.",
    },
    {
      q: "Quando começa e termina o prazo da declaração em 2026?",
      a: "A entrega vai de 15 de março a 31 de maio de 2026. Declarações enviadas após essa data ficam sujeitas a multa mínima de R$ 165,74, que pode chegar a 20% do imposto devido.",
    },
    {
      q: "Como saber se a minha declaração caiu na malha fina?",
      a: "Basta acessar o e-CAC, entrar em Meu Imposto de Renda e verificar o quadro de processamento. Se houver divergência, o sistema aponta exatamente qual ficha gerou a pendência, permitindo retificar antes de qualquer intimação.",
    },
    {
      q: "Vale mais a pena a declaração simplificada ou a completa?",
      a: "Depende do volume de despesas dedutíveis. Famílias com escola, plano de saúde e previdência privada geralmente pagam menos na completa. Quem tem poucas despesas costuma se beneficiar do desconto padrão da simplificada.",
    },
    {
      q: "Preciso declarar se recebo aposentadoria do INSS?",
      a: "Sim, se os rendimentos tributáveis superarem o limite anual. Aposentados a partir de 65 anos têm uma parcela adicional isenta da aposentadoria, mas o valor precisa ser informado na ficha de rendimentos isentos.",
    },
    {
      q: "Como consultar a restituição do Imposto de Renda 2026?",
      a: "Pelo e-CAC da Receita Federal ou pelo aplicativo oficial, informando CPF, data de nascimento e o ano da declaração. A consulta mostra o lote, a data de crédito e eventuais pendências.",
    },
    {
      q: "Posso corrigir a declaração depois de enviar?",
      a: "Pode. A declaração retificadora é gratuita e pode ser feita em até cinco anos, desde que a original não esteja sob procedimento de fiscalização. Use sempre o número do recibo da declaração anterior.",
    },
    {
      q: "Previdência privada abate imposto de renda?",
      a: "Apenas o PGBL, e no limite de 12% da renda bruta tributável anual, válido para quem declara no modelo completo. O VGBL não é dedutível, embora tenha tributação apenas sobre o rendimento no resgate.",
    },
    {
      q: "Dependente precisa ter CPF?",
      a: "Sim. Todos os dependentes, inclusive recém-nascidos, precisam de CPF informado na declaração. A ausência do número impede a dedução e gera pendência automática.",
    },
  ],
  relatedGlossary: [
    "imposto-de-renda",
    "restituicao-ir",
    "receita-federal",
    "cpf",
    "selic",
    "educacao-financeira",
  ],
  relatedArticles: [
    "imposto-de-renda-2027-tabela",
    "restituicao-ir-consultar",
    "educacao-financeira-familia",
    "selic-copom-corte-juros",
  ],
  references: [
    {
      title: "Receita Federal — Imposto sobre a Renda da Pessoa Física",
      href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda",
    },
    {
      title: "Portal Gov.br — Declarar Imposto de Renda",
      href: "https://www.gov.br/pt-br/servicos/declarar-imposto-sobre-a-renda-de-pessoa-fisica",
    },
    {
      title: "Ministério da Fazenda — Tributação e política tributária",
      href: "https://www.gov.br/fazenda/pt-br",
    },
  ],
};
