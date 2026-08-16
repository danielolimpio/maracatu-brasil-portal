import type { Post } from "./posts";
import capa from "@/assets/minha-casa-minha-vida-2026-capa.jpg";
import corpo from "@/assets/minha-casa-minha-vida-2026-corpo.jpg";

const PAULO = {
  name: "Paulo Henrique",
  role: "Editor de Economia, Crédito e Finanças Pessoais",
  bio: "Economista e jornalista, acompanha há mais de uma década o mercado de crédito imobiliário, política habitacional e financiamento com recursos do FGTS. Escreve sobre juros, subsídios e planejamento financeiro familiar com foco em decisões práticas.",
};

export const minhaCasaMinhaVida2026: Post = {
  slug: "minha-casa-minha-vida-2026-faixas-subsidio-financiamento",
  category: "Finanças",
  categorySlug: "financas",
  title:
    "Minha Casa Minha Vida 2026: faixas de renda, subsídio do governo, juros e como simular o financiamento na Caixa",
  seoTitle: "Minha Casa Minha Vida 2026: Faixas, Subsídio e Simulação",
  metaDescription:
    "Minha Casa Minha Vida 2026: faixas de renda atualizadas, valor do subsídio, taxas de juros, uso do FGTS, documentos exigidos e passo a passo para simular e contratar.",
  excerpt:
    "Todas as faixas do programa, quanto o governo paga de subsídio, como usar o FGTS na entrada, simulação de parcelas, regras da Faixa 4, documentos e os erros que reprovam o cadastro.",
  keywords: [
    "minha casa minha vida 2026",
    "faixas de renda minha casa minha vida",
    "subsídio minha casa minha vida",
    "financiamento caixa habitacional 2026",
    "usar fgts na entrada do imóvel",
    "simulador minha casa minha vida",
    "juros minha casa minha vida",
    "documentos financiamento imobiliário",
  ],
  tags: ["Minha Casa Minha Vida", "Financiamento", "Caixa", "FGTS", "Habitação", "Crédito"],
  author: PAULO,
  publishedAt: "2026-08-11",
  updatedAt: "2026-08-11",
  publishedLabel: "11 Ago 2026",
  readTime: "18 min",
  cover: {
    src: capa,
    alt: "Casal brasileiro segurando as chaves de um apartamento novo em frente a um prédio do programa habitacional",
    caption:
      "O Minha Casa Minha Vida combina subsídio direto, juros reduzidos e uso do FGTS para viabilizar a casa própria. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "Comprar o primeiro imóvel deixou de ser um sonho abstrato para milhões de famílias brasileiras justamente por causa da combinação que sustenta o <strong>Minha Casa Minha Vida</strong>: subsídio direto do governo, taxas de juros muito abaixo das praticadas no mercado livre e a possibilidade de usar o saldo do FGTS na entrada. Em 2026, com faixas de renda ampliadas e a inclusão da classe média no programa, o desenho ficou mais abrangente — e também mais confuso para quem tenta entender onde se encaixa.",
    },
    {
      t: "p",
      html: "Este guia explica, com tabelas e simulações, quanto cada faixa paga de juros, quanto o governo cobre de subsídio, como calcular a parcela que cabe no orçamento e qual é o passo a passo real da contratação — do cadastro na prefeitura à assinatura do contrato no cartório.",
    },
    {
      t: "callout",
      tone: "info",
      title: "O essencial em cinco linhas",
      html: "O programa organiza famílias em faixas conforme a <strong>renda bruta mensal</strong>. Quanto menor a renda, maior o subsídio e menor o juro. O FGTS pode entrar na entrada, na amortização ou no pagamento de parte das prestações. A simulação é gratuita no site da Caixa e não compromete o CPF. Faixa 1 é operada com apoio das prefeituras; das Faixas 2 em diante, a negociação é direta com construtora e banco.",
    },
    { t: "h2", text: "Faixas de renda do Minha Casa Minha Vida em 2026" },
    {
      t: "p",
      html: "A faixa é definida pela <strong>renda bruta familiar mensal</strong> — a soma dos rendimentos de todos os moradores que compõem o núcleo, antes dos descontos. É esse número que determina o percentual de subsídio, a taxa de juros e o teto do valor do imóvel financiável.",
    },
    {
      t: "table",
      caption: "Faixas de renda, juros e subsídio (parâmetros vigentes em 2026)",
      head: ["Faixa", "Renda bruta familiar", "Juros anuais aproximados", "Subsídio do governo"],
      rows: [
        ["Faixa 1", "Até R$ 2.850", "4,00% a 5,00%", "Até 95% do valor do imóvel"],
        ["Faixa 2", "De R$ 2.850,01 a R$ 4.700", "5,00% a 7,00%", "Até R$ 55 mil, conforme renda e região"],
        ["Faixa 3", "De R$ 4.700,01 a R$ 8.600", "7,66% a 8,16%", "Sem subsídio direto; juros reduzidos"],
        ["Faixa 4 (classe média)", "De R$ 8.600,01 a R$ 12.000", "Cerca de 10%", "Sem subsídio; juros abaixo do mercado"],
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Cotista do FGTS paga menos",
      html: "Trabalhadores com pelo menos três anos de contribuição ao FGTS, somados ao longo da vida, têm desconto adicional na taxa de juros em diversas faixas. Vale conferir o extrato antes da simulação.",
    },
    { t: "h3", text: "Quem pode participar do programa" },
    {
      t: "ul",
      items: [
        "Ser brasileiro nato ou naturalizado, ou estrangeiro com visto permanente.",
        "Ter 18 anos ou mais, ou ser emancipado.",
        "Não possuir imóvel residencial próprio em nenhum lugar do país.",
        "Não ter recebido subsídio habitacional do governo federal nos últimos três anos.",
        "Não estar cadastrado no CADIN nem ter restrições que impeçam a análise de crédito.",
        "Comprovar renda bruta familiar dentro da faixa pretendida.",
      ],
    },
    {
      t: "image",
      src: corpo,
      alt: "Família brasileira analisando documentos e planta de imóvel com um agente bancário durante atendimento",
      caption:
        "A análise de crédito considera renda, histórico de pagamento e comprometimento mensal — em regra, a parcela não pode ultrapassar 30% da renda bruta familiar. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "Faixa 1: como funciona o subsídio de até 95%" },
    {
      t: "p",
      html: "Na Faixa 1, o valor financiado é fortemente reduzido pelo subsídio da União. Em muitos empreendimentos, a família assume prestações simbólicas — que podem ficar abaixo de R$ 300 mensais — por um prazo que chega a 120 meses, com o restante coberto por recursos do Fundo de Arrendamento Residencial e do orçamento federal.",
    },
    {
      t: "p",
      html: "O acesso, porém, não é balcão de banco: a seleção passa pelo <strong>cadastro habitacional da prefeitura</strong> ou do governo estadual, com critérios de priorização definidos localmente. Famílias chefiadas por mulheres, com pessoa com deficiência, idosos, moradores de área de risco e famílias em situação de desabrigo costumam ter preferência.",
    },
    {
      t: "ol",
      items: [
        "Mantenha o CadÚnico atualizado — é a base usada na maioria das seleções municipais.",
        "Procure a secretaria de habitação do seu município e faça o cadastro habitacional.",
        "Acompanhe editais e chamamentos publicados pela prefeitura.",
        "Se selecionado, compareça com documentos no prazo indicado.",
        "A assinatura do contrato ocorre na Caixa ou em agente financeiro credenciado.",
      ],
    },
    { t: "h2", text: "Faixas 2 e 3: subsídio parcial e juros reduzidos" },
    {
      t: "p",
      html: "Nas Faixas 2 e 3, a família escolhe o imóvel no mercado — novo, na planta ou usado, conforme a linha — e negocia diretamente com a construtora e o banco. O subsídio da Faixa 2 é um <strong>desconto abatido do valor financiado</strong>, o que reduz a dívida na origem e, consequentemente, a prestação mensal.",
    },
    {
      t: "table",
      caption: "Simulação ilustrativa: imóvel de R$ 220 mil, prazo de 360 meses, tabela SAC",
      head: ["Cenário", "Entrada + subsídio + FGTS", "Valor financiado", "1ª parcela estimada"],
      rows: [
        ["Faixa 2 com subsídio de R$ 40 mil e FGTS de R$ 15 mil", "R$ 66 mil", "R$ 154 mil", "cerca de R$ 1.150"],
        ["Faixa 3 sem subsídio, entrada de 20% e FGTS de R$ 20 mil", "R$ 64 mil", "R$ 156 mil", "cerca de R$ 1.400"],
        ["Faixa 4 com entrada de 20% e sem FGTS", "R$ 44 mil", "R$ 176 mil", "cerca de R$ 1.780"],
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Simulações são estimativas",
      html: "Os valores acima servem para comparação entre cenários. A parcela final depende de seguros obrigatórios (MIP e DFI), taxa de administração, índice de correção contratado e da política de crédito vigente na data da contratação.",
    },
    { t: "h2", text: "Faixa 4: a porta de entrada da classe média" },
    {
      t: "p",
      html: "A Faixa 4 foi criada para atender famílias com renda de até R$ 12 mil, público que ficava espremido entre o teto do programa e as taxas do mercado livre — hoje frequentemente acima de 11% ao ano no Sistema Financeiro de Habitação. Não há subsídio direto, mas há juro reduzido, teto de valor de imóvel mais alto e uso pleno do FGTS.",
    },
    {
      t: "ul",
      items: [
        "Sem subsídio, mas com taxa inferior à do crédito imobiliário convencional.",
        "Permite imóveis de valor mais elevado, adequados a capitais e regiões metropolitanas.",
        "FGTS pode ser usado na entrada, na amortização e para reduzir parcelas.",
        "Prazo de financiamento que alcança 360 meses.",
      ],
    },
    { t: "h2", text: "Como usar o FGTS na compra do imóvel" },
    {
      t: "p",
      html: "O saldo do FGTS é um dos maiores aliados do comprador. Ele pode ser aplicado de três formas: composição da entrada, amortização extraordinária do saldo devedor ou pagamento de parte do valor das prestações por um período determinado. Para usar o fundo, é necessário ter no mínimo três anos de trabalho sob o regime do FGTS, não ser proprietário de outro imóvel residencial no município e que o bem esteja dentro do teto de avaliação permitido.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Atenção a quem aderiu ao saque-aniversário",
      html: "A adesão ao saque-aniversário não impede o uso do FGTS na compra do imóvel, mas quem antecipou parcelas junto a um banco pode ter o saldo comprometido como garantia. Confira o extrato antes de contar com esse dinheiro na entrada.",
    },
    { t: "h2", text: "Documentos necessários para a contratação" },
    {
      t: "table",
      caption: "Checklist de documentos por natureza",
      head: ["Categoria", "Documentos"],
      rows: [
        ["Pessoais", "RG e CPF, certidão de nascimento ou casamento, comprovante de residência atualizado"],
        ["Renda (CLT)", "Três últimos holerites, carteira de trabalho, extrato do FGTS, declaração de IR"],
        ["Renda (autônomo/MEI)", "Extratos bancários de seis meses, DECORE, DAS do MEI, declaração de IR"],
        ["Imóvel", "Matrícula atualizada, IPTU, contrato de compra e venda, laudo de avaliação"],
      ],
    },
    { t: "h2", text: "Passo a passo para simular e contratar" },
    {
      t: "ol",
      items: [
        "Some a renda bruta de todos os integrantes da família e identifique sua faixa.",
        "Faça a simulação no site ou aplicativo da Caixa — é gratuita e não consulta restritivos nesta etapa.",
        "Reúna a documentação pessoal, de renda e do imóvel escolhido.",
        "Abra o processo em uma agência ou correspondente e aguarde a análise de crédito.",
        "Com o crédito aprovado, o banco contrata a avaliação de engenharia do imóvel.",
        "Assine o contrato, registre no cartório de imóveis e receba as chaves conforme o cronograma.",
      ],
    },
    { t: "h3", text: "Quanto de parcela cabe no seu orçamento" },
    {
      t: "p",
      html: "A regra prática usada pelos bancos limita a prestação a <strong>30% da renda bruta familiar</strong>. Uma família com R$ 6.000 de renda, portanto, tende a ter aprovada uma parcela de até R$ 1.800. Mas o teto bancário não é o mesmo que o limite saudável: contas de condomínio, IPTU, seguros, manutenção e reforma somam facilmente 15% a mais no custo mensal da moradia.",
    },
    {
      t: "quote",
      html: "Financiar no limite da aprovação é a origem de boa parte das inadimplências. O bom negócio não é o maior imóvel que o banco autoriza, e sim a parcela que sobrevive a um ano difícil.",
      cite: "Paulo Henrique, editor de Economia do Maracatu Brasil",
    },
    { t: "h2", text: "Erros que fazem o pedido ser reprovado" },
    {
      t: "ul",
      items: [
        "Nome negativado ou dívidas ativas no CADIN — regularize antes de abrir o processo.",
        "Renda informal sem comprovação bancária consistente.",
        "Declarar renda familiar menor para tentar subsídio maior: a checagem cruza CadÚnico, eSocial e Receita Federal.",
        "Escolher imóvel acima do teto de avaliação da faixa.",
        "Ignorar pendências na matrícula do imóvel, como penhora ou usufruto.",
        "Contar com FGTS já comprometido em antecipação de saque-aniversário.",
      ],
    },
    { t: "h2", text: "Custos além da parcela" },
    {
      t: "table",
      caption: "Despesas que entram na conta final da compra",
      head: ["Despesa", "Estimativa"],
      rows: [
        ["ITBI (imposto de transmissão)", "2% a 3% do valor do imóvel"],
        ["Registro em cartório", "0,5% a 1,5%, com desconto legal em programas habitacionais"],
        ["Seguros obrigatórios (MIP e DFI)", "Embutidos na prestação mensal"],
        ["Taxa de avaliação de engenharia", "Valor fixo cobrado pelo banco"],
        ["Condomínio e IPTU", "Custo recorrente após a entrega das chaves"],
      ],
    },
    { t: "h2", text: "Conclusão: planejamento vale mais que pressa" },
    {
      t: "p",
      html: "O Minha Casa Minha Vida em 2026 alcança desde famílias de baixíssima renda, com subsídio quase integral, até a classe média que antes só tinha acesso ao crédito imobiliário caro. A diferença entre uma compra tranquila e uma dívida sufocante está quase sempre na preparação: renda comprovada com clareza, CadÚnico e documentos em dia, FGTS livre de compromissos e uma parcela dimensionada para caber no orçamento mesmo em um ano ruim.",
    },
    {
      t: "p",
      html: "Faça a simulação, compare cenários com e sem uso do FGTS, calcule os custos de cartório e mudança e só então assine. A casa própria é uma decisão de trinta anos — merece algumas semanas de estudo.",
    },
  ],
  faqs: [
    {
      q: "Qual é a renda máxima para participar do Minha Casa Minha Vida em 2026?",
      a: "O teto do programa vai até R$ 12.000 de renda bruta familiar mensal, na Faixa 4, criada para atender a classe média com juros abaixo do mercado.",
    },
    {
      q: "Quanto o governo paga de subsídio?",
      a: "Na Faixa 1, o subsídio pode cobrir até 95% do valor do imóvel. Na Faixa 2, é um desconto que chega a cerca de R$ 55 mil, conforme renda e região. Faixas 3 e 4 não têm subsídio direto.",
    },
    {
      q: "Posso usar o FGTS na entrada do imóvel?",
      a: "Sim, desde que você tenha ao menos três anos de trabalho sob o regime do FGTS, não seja proprietário de outro imóvel residencial no município e o imóvel esteja dentro do teto de avaliação.",
    },
    {
      q: "Quem tem nome sujo consegue financiar?",
      a: "Em regra, não. É necessário regularizar restrições e dívidas antes da análise de crédito, que avalia histórico de pagamento e capacidade de endividamento.",
    },
    {
      q: "Como faço para entrar na Faixa 1?",
      a: "O acesso é feito por cadastro habitacional na prefeitura ou no governo estadual, com base no CadÚnico e nos critérios de prioridade definidos localmente.",
    },
    {
      q: "Qual é o valor máximo do imóvel financiável?",
      a: "O teto varia conforme a faixa, a modalidade e a região do país. A simulação da Caixa mostra o limite aplicável ao seu perfil e ao município escolhido.",
    },
    {
      q: "É possível financiar imóvel usado pelo programa?",
      a: "Sim, em determinadas faixas e linhas, desde que o imóvel esteja em condições de habitabilidade, com matrícula regular e aprovado na avaliação de engenharia.",
    },
    {
      q: "Qual é o prazo máximo do financiamento?",
      a: "O prazo chega a 360 meses (30 anos) nas faixas de mercado. Na Faixa 1, os prazos costumam ser menores, com prestações fortemente subsidiadas.",
    },
    {
      q: "A parcela pode aumentar ao longo do contrato?",
      a: "Sim, se o contrato for corrigido por índice como a TR. Na tabela SAC, a amortização é constante e o valor nominal tende a cair, mas a correção pode elevar as prestações.",
    },
    {
      q: "A simulação no site da Caixa afeta meu score de crédito?",
      a: "Não. A simulação é apenas um cálculo estimativo. A consulta a bureaus de crédito acontece somente na fase de análise formal do financiamento.",
    },
  ],
  relatedGlossary: ["fgts", "cadunico", "amortizacao", "cet-custo-efetivo-total"],
  relatedArticles: [
    "fgts-saque-aniversario-2026-tabela-calculo-prazos",
    "calendario-bolsa-familia-2026",
    "imposto-de-renda-2026-tabela-prazos-restituicao",
  ],
  references: [
    { title: "Caixa Econômica Federal — Minha Casa Minha Vida", href: "https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida" },
    { title: "Portal Gov.br — Programa Minha Casa, Minha Vida", href: "https://www.gov.br/cidades/pt-br" },
    { title: "Banco Central do Brasil — Crédito imobiliário", href: "https://www.bcb.gov.br/cidadaniafinanceira" },
  ],
};
