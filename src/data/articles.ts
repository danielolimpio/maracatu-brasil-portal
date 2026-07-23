export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  views?: string;
};

// Curated Unsplash photos — all unique IDs
const img = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const articles: Article[] = [
  {
    slug: "bolsa-familia-calendario-pagamentos",
    title: "Bolsa Família: veja o calendário completo de pagamentos deste mês",
    excerpt:
      "Confira as datas oficiais de saque, valores atualizados e como consultar o benefício pelo aplicativo Caixa Tem.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Ana Ribeiro",
    date: "18 Nov 2026",
    readTime: "6 min",
    image: img("1554224155-6726b3ff858f"),
    views: "48.2k",
  },
  {
    slug: "inss-revisao-vida-toda-stf",
    title: "INSS: STF define regras da Revisão da Vida Toda para aposentados",
    excerpt:
      "Entenda quem tem direito, como pedir e quais documentos são exigidos para revisar sua aposentadoria em 2026.",
    category: "Previdência",
    categorySlug: "previdencia",
    author: "Carlos Menezes",
    date: "18 Nov 2026",
    readTime: "8 min",
    image: img("1573497019940-1c28c88b4f3e"),
    views: "39.7k",
  },
  {
    slug: "imposto-de-renda-2027-tabela",
    title: "Imposto de Renda 2027: nova tabela isenta quem ganha até R$ 5.000",
    excerpt:
      "Governo publica atualização da faixa de isenção e cria desconto simplificado maior para trabalhadores CLT.",
    category: "Impostos",
    categorySlug: "impostos",
    author: "Juliana Costa",
    date: "17 Nov 2026",
    readTime: "7 min",
    image: img("1554224154-26032ffc0d07"),
    views: "62.1k",
  },
  {
    slug: "fgts-saque-aniversario-2027",
    title: "FGTS: como aderir ao saque-aniversário sem perder a multa rescisória",
    excerpt:
      "Especialistas explicam vantagens, riscos e o passo a passo para trocar a modalidade dentro do prazo.",
    category: "Trabalho",
    categorySlug: "trabalho",
    author: "Rafael Souza",
    date: "17 Nov 2026",
    readTime: "5 min",
    image: img("1560472354-b33ff0c44a43"),
    views: "27.9k",
  },
  {
    slug: "pix-automatico-novas-regras",
    title: "Pix Automático: novas regras entram em vigor e prometem substituir boletos",
    excerpt:
      "Banco Central libera cobrança recorrente por Pix; veja como funciona e quais bancos já aderiram.",
    category: "Bancos",
    categorySlug: "bancos",
    author: "Marina Alves",
    date: "16 Nov 2026",
    readTime: "6 min",
    image: img("1563986768609-322da13575f3"),
    views: "51.4k",
  },
  {
    slug: "concurso-inss-edital",
    title: "Concurso INSS: edital com 4.000 vagas será publicado ainda este ano",
    excerpt:
      "Salários chegam a R$ 8.400, com provas previstas para o primeiro trimestre. Confira os cargos e requisitos.",
    category: "Concursos",
    categorySlug: "concursos",
    author: "Diego Ferreira",
    date: "16 Nov 2026",
    readTime: "9 min",
    image: img("1523240795612-9a054b0db644"),
    views: "44.8k",
  },
  {
    slug: "bpc-loas-quem-tem-direito",
    title: "BPC/LOAS: quem tem direito ao benefício de um salário mínimo",
    excerpt:
      "Idosos acima de 65 anos e pessoas com deficiência podem receber o benefício sem contribuir com o INSS.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Ana Ribeiro",
    date: "15 Nov 2026",
    readTime: "6 min",
    image: img("1559526324-4b87b5e36e44"),
    views: "35.2k",
  },
  {
    slug: "selic-copom-corte-juros",
    title: "Selic: Copom sinaliza novo corte de juros e impacto nos investimentos",
    excerpt:
      "Analistas avaliam efeitos para renda fixa, financiamentos e a bolsa brasileira nos próximos meses.",
    category: "Economia",
    categorySlug: "economia",
    author: "Paulo Henrique",
    date: "15 Nov 2026",
    readTime: "5 min",
    image: img("1611974789855-9c2a0a7236a3"),
    views: "29.1k",
  },
  {
    slug: "auxilio-gas-consulta",
    title: "Auxílio Gás: consulte se você receberá a nova parcela em dezembro",
    excerpt:
      "Programa paga o valor médio do botijão de 13kg às famílias cadastradas no CadÚnico.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Beatriz Lima",
    date: "14 Nov 2026",
    readTime: "4 min",
    image: img("1556742049-0cfed4f6a45d"),
    views: "22.6k",
  },
  {
    slug: "carteira-trabalho-digital-atualizar",
    title: "Carteira de Trabalho Digital: como atualizar dados e consultar contratos",
    excerpt:
      "Aplicativo agora mostra histórico completo, saldo do FGTS e permite solicitar seguro-desemprego online.",
    category: "Trabalho",
    categorySlug: "trabalho",
    author: "Rafael Souza",
    date: "14 Nov 2026",
    readTime: "5 min",
    image: img("1521737604893-d14cc237f11d"),
    views: "18.4k",
  },
  {
    slug: "nubank-caixinha-turbo",
    title: "Nubank lança nova Caixinha Turbo com rendimento acima do CDI",
    excerpt:
      "Produto compete com bancos digitais e pode render até 110% do CDI com liquidez diária.",
    category: "Bancos",
    categorySlug: "bancos",
    author: "Marina Alves",
    date: "13 Nov 2026",
    readTime: "4 min",
    image: img("1580519542036-c47de6196ba5"),
    views: "31.7k",
  },
  {
    slug: "consignado-clt-privado",
    title: "Consignado privado: veja como funciona o novo empréstimo para CLT",
    excerpt:
      "Trabalhadores com carteira assinada podem pegar crédito com desconto direto no salário e juros menores.",
    category: "Finanças",
    categorySlug: "financas",
    author: "Paulo Henrique",
    date: "13 Nov 2026",
    readTime: "6 min",
    image: img("1554224155-8d04cb21cd6c"),
    views: "26.3k",
  },
  {
    slug: "minha-casa-minha-vida-faixa-1",
    title: "Minha Casa Minha Vida: Faixa 1 tem subsídio de até 95% no imóvel",
    excerpt:
      "Famílias com renda até R$ 2.850 podem financiar a casa própria com juros zero em algumas modalidades.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Beatriz Lima",
    date: "12 Nov 2026",
    readTime: "7 min",
    image: img("1560518883-ce09059eeffa"),
    views: "40.9k",
  },
  {
    slug: "cnh-social-gratuita",
    title: "CNH Social: veja como tirar a habilitação de graça no seu estado",
    excerpt:
      "Programa oferece primeira habilitação sem custo para famílias de baixa renda em diversos estados.",
    category: "Documentos",
    categorySlug: "documentos",
    author: "Diego Ferreira",
    date: "12 Nov 2026",
    readTime: "5 min",
    image: img("1449965408869-eaa3f722e40d"),
    views: "33.5k",
  },
  {
    slug: "mei-limite-faturamento",
    title: "MEI: novo limite de faturamento pode chegar a R$ 130 mil por ano",
    excerpt:
      "Projeto em tramitação no Congresso amplia o teto e reduz a burocracia para microempreendedores.",
    category: "Impostos",
    categorySlug: "impostos",
    author: "Juliana Costa",
    date: "11 Nov 2026",
    readTime: "5 min",
    image: img("1556740738-b6a63e27c4df"),
    views: "24.8k",
  },
  {
    slug: "seguro-desemprego-parcelas",
    title: "Seguro-Desemprego: quantas parcelas você tem direito em 2026",
    excerpt:
      "Número varia conforme tempo de serviço; valor mínimo é o salário mínimo e o máximo passa de R$ 2.400.",
    category: "Trabalho",
    categorySlug: "trabalho",
    author: "Rafael Souza",
    date: "11 Nov 2026",
    readTime: "5 min",
    image: img("1521791136064-7986c2920216"),
    views: "20.1k",
  },
  {
    slug: "aposentadoria-por-idade-2027",
    title: "Aposentadoria por idade: regras completas para se aposentar em 2027",
    excerpt:
      "Mulheres podem se aposentar aos 62 anos e homens aos 65, com carência mínima de 15 anos de contribuição.",
    category: "Previdência",
    categorySlug: "previdencia",
    author: "Carlos Menezes",
    date: "10 Nov 2026",
    readTime: "8 min",
    image: img("1544027993-37dbfe43562a"),
    views: "37.2k",
  },
  {
    slug: "jovem-aprendiz-vagas",
    title: "Jovem Aprendiz: grandes empresas abrem mais de 20 mil vagas",
    excerpt:
      "Programa oferece primeiro emprego para pessoas de 14 a 24 anos com carteira assinada e benefícios.",
    category: "Empregos",
    categorySlug: "empregos",
    author: "Beatriz Lima",
    date: "10 Nov 2026",
    readTime: "5 min",
    image: img("1522071820081-009f0129c71c"),
    views: "45.6k",
  },
  {
    slug: "cadunico-atualizar-cadastro",
    title: "CadÚnico: como atualizar seu cadastro e não perder benefícios",
    excerpt:
      "Atualização é obrigatória a cada dois anos e pode ser feita nos CRAS ou pelo aplicativo oficial.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Ana Ribeiro",
    date: "09 Nov 2026",
    readTime: "4 min",
    image: img("1450101499163-c8848c66ca85"),
    views: "19.3k",
  },
  {
    slug: "dolar-projecao-final-ano",
    title: "Dólar: projeções apontam moeda entre R$ 5,20 e R$ 5,60 no fim do ano",
    excerpt:
      "Boletim Focus consolida expectativas do mercado após decisões do Copom e do Federal Reserve.",
    category: "Economia",
    categorySlug: "economia",
    author: "Paulo Henrique",
    date: "09 Nov 2026",
    readTime: "5 min",
    image: img("1526304640581-d334cdbbf45e"),
    views: "17.8k",
  },
  {
    slug: "cartao-credito-sem-anuidade",
    title: "Os 10 melhores cartões de crédito sem anuidade para 2027",
    excerpt:
      "Comparativo completo entre bancos digitais e tradicionais com cashback, milhas e limites.",
    category: "Finanças",
    categorySlug: "financas",
    author: "Marina Alves",
    date: "08 Nov 2026",
    readTime: "9 min",
    image: img("1556742044-3c52d6e88c62"),
    views: "58.9k",
  },
  {
    slug: "concurso-caixa-tecnico-bancario",
    title: "Concurso Caixa: 4 mil vagas para técnico bancário com salário de R$ 3.700",
    excerpt:
      "Provas serão aplicadas em todo o país; nível médio é o requisito básico para concorrer.",
    category: "Concursos",
    categorySlug: "concursos",
    author: "Diego Ferreira",
    date: "08 Nov 2026",
    readTime: "6 min",
    image: img("1497215728101-856f4ea42174"),
    views: "41.2k",
  },
  {
    slug: "pis-pasep-calendario",
    title: "PIS/Pasep 2027: veja o calendário e como consultar o abono salarial",
    excerpt:
      "Trabalhadores que ganharam até 2 salários mínimos podem receber até um salário extra por ano.",
    category: "Trabalho",
    categorySlug: "trabalho",
    author: "Rafael Souza",
    date: "07 Nov 2026",
    readTime: "5 min",
    image: img("1554224154-22dec7ec8818"),
    views: "23.5k",
  },
  {
    slug: "restituicao-ir-consultar",
    title: "Restituição do IR: como consultar e antecipar seu dinheiro",
    excerpt:
      "Bancos oferecem antecipação com juros menores para quem já entregou a declaração.",
    category: "Impostos",
    categorySlug: "impostos",
    author: "Juliana Costa",
    date: "07 Nov 2026",
    readTime: "5 min",
    image: img("1554224712-d3b0a0e3d69a"),
    views: "16.4k",
  },
  {
    slug: "auxilio-doenca-perito",
    title: "Auxílio-Doença: perícia médica agora pode ser feita por telemedicina",
    excerpt:
      "INSS amplia atendimento remoto para reduzir filas e agilizar a análise de novos benefícios.",
    category: "Previdência",
    categorySlug: "previdencia",
    author: "Carlos Menezes",
    date: "06 Nov 2026",
    readTime: "6 min",
    image: img("1576091160399-112ba8d25d1d"),
    views: "21.7k",
  },
  {
    slug: "trabalho-remoto-vagas-home-office",
    title: "Trabalho remoto: 25 empresas contratam em home office para todo o Brasil",
    excerpt:
      "Vagas incluem áreas de tecnologia, atendimento, marketing e finanças, com salários competitivos.",
    category: "Empregos",
    categorySlug: "empregos",
    author: "Beatriz Lima",
    date: "06 Nov 2026",
    readTime: "6 min",
    image: img("1517245386807-bb43f82c33c4"),
    views: "34.1k",
  },
  {
    slug: "educacao-financeira-familia",
    title: "Educação financeira: 7 hábitos para sair do vermelho ainda este ano",
    excerpt:
      "Especialistas listam práticas simples para organizar o orçamento e começar a investir do zero.",
    category: "Finanças",
    categorySlug: "financas",
    author: "Paulo Henrique",
    date: "05 Nov 2026",
    readTime: "7 min",
    image: img("1579621970563-ebec7560ff3e"),
    views: "28.6k",
  },
  {
    slug: "tarifa-social-energia-eletrica",
    title: "Tarifa Social de Energia: desconto na conta de luz é automático",
    excerpt:
      "Cadastro passa a ser feito diretamente pelo governo com base no CadÚnico e dados do NIS.",
    category: "Benefícios",
    categorySlug: "beneficios",
    author: "Ana Ribeiro",
    date: "05 Nov 2026",
    readTime: "5 min",
    image: img("1509391366360-2e959784a276"),
    views: "15.9k",
  },
  {
    slug: "curriculo-perfeito-2027",
    title: "Currículo perfeito: 10 dicas para conseguir entrevistas em 2027",
    excerpt:
      "Especialistas em RH mostram o que recrutadores procuram e os erros mais comuns nos currículos.",
    category: "Empregos",
    categorySlug: "empregos",
    author: "Diego Ferreira",
    date: "04 Nov 2026",
    readTime: "6 min",
    image: img("1586281380349-632531db7ed4"),
    views: "19.8k",
  },
  {
    slug: "inflacao-ipca-mensal",
    title: "IPCA: inflação oficial fecha o mês em 0,32% puxada por alimentos",
    excerpt:
      "Preços da carne, do arroz e do café subiram acima da média nas principais capitais.",
    category: "Economia",
    categorySlug: "economia",
    author: "Paulo Henrique",
    date: "04 Nov 2026",
    readTime: "4 min",
    image: img("1543393470-b2ea726d1c60"),
    views: "13.2k",
  },
];

export const featuredNews = articles.slice(0, 3);
export const heroMain = articles[1];
export const heroSecondary = articles.slice(2, 5);
export const heroList = articles.slice(5, 10);
export const featuredStories = articles.slice(10, 16);
export const whatsNew = articles.slice(16, 20);
export const popularPosts = articles.slice(20, 26);
export const latestUpdates = articles.slice(0, 4);
export const latestVideos = articles.slice(24, 27);
export const allArticles = articles.slice(0, 7);

export const categories = [
  { name: "Benefícios", slug: "beneficios", color: "green" },
  { name: "Previdência", slug: "previdencia", color: "blue" },
  { name: "Trabalho", slug: "trabalho", color: "green" },
  { name: "Documentos", slug: "documentos", color: "blue" },
  { name: "Impostos", slug: "impostos", color: "green" },
  { name: "Economia", slug: "economia", color: "blue" },
  { name: "Bancos", slug: "bancos", color: "green" },
  { name: "Finanças", slug: "financas", color: "blue" },
  { name: "Empregos", slug: "empregos", color: "green" },
  { name: "Concursos", slug: "concursos", color: "blue" },
];
