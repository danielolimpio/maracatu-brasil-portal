import type { Post } from "./posts";
import capa from "@/assets/fgts-saque-aniversario-2026-capa.jpg";
import corpo from "@/assets/fgts-saque-aniversario-2026-corpo.jpg";

const RAFAEL = {
  name: "Rafael Souza",
  role: "Editor de Trabalho, Carreira e Renda",
  bio: "Especialista em legislação trabalhista e renda do trabalhador, cobre FGTS, abono salarial, eSocial e Carteira de Trabalho Digital desde 2013. Formado em Direito, dedica-se a explicar direitos previdenciários e trabalhistas em linguagem acessível.",
};

export const fgtsSaqueAniversario2026: Post = {
  slug: "fgts-saque-aniversario-2026-tabela-calculo-prazos",
  category: "Trabalho",
  categorySlug: "trabalho",
  title:
    "FGTS saque-aniversário 2026: tabela de percentuais, cálculo do valor, prazos de adesão e o que você perde ao aderir",
  seoTitle: "FGTS Saque-Aniversário 2026: Tabela, Cálculo e Prazos",
  metaDescription:
    "Saque-aniversário do FGTS 2026: tabela completa de percentuais, como calcular o valor, prazo de adesão, regras do saque-rescisão e como cancelar sem perder direitos.",
  excerpt:
    "Tabela oficial de percentuais e parcela adicional, simulações de saldo, calendário do mês de nascimento, impacto na multa rescisória, antecipação bancária e passo a passo para aderir ou cancelar pelo aplicativo FGTS.",
  keywords: [
    "fgts saque aniversário 2026",
    "tabela saque aniversário fgts",
    "como calcular saque aniversário",
    "prazo adesão saque aniversário",
    "cancelar saque aniversário fgts",
    "antecipação saque aniversário",
    "saque rescisão fgts",
    "aplicativo fgts consultar saldo",
  ],
  tags: ["FGTS", "Caixa", "Saque-aniversário", "Trabalho", "Crédito", "Renda"],
  author: RAFAEL,
  publishedAt: "2026-08-10",
  updatedAt: "2026-08-10",
  publishedLabel: "10 Ago 2026",
  readTime: "17 min",
  cover: {
    src: capa,
    alt: "Trabalhador brasileiro consultando o saldo do FGTS no celular, com extrato impresso e calculadora sobre a mesa",
    caption:
      "O saque-aniversário libera uma fatia do saldo do FGTS todo ano, mas cobra um preço: o acesso ao dinheiro na demissão sem justa causa. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "Poucas decisões financeiras dividem tanto o trabalhador brasileiro quanto o <strong>saque-aniversário do FGTS</strong>. De um lado, a possibilidade de receber uma parte do saldo todos os anos, no mês do próprio aniversário, sem depender de demissão, aposentadoria ou compra de imóvel. De outro, uma renúncia silenciosa: quem adere deixa de sacar o saldo integral se for dispensado sem justa causa e passa a receber apenas a multa rescisória de 40%.",
    },
    {
      t: "p",
      html: "Em 2026, com o crédito consignado privado em expansão e as fintechs oferecendo <strong>antecipação do saque-aniversário</strong> com juros que variam de forma expressiva entre instituições, entender a mecânica da modalidade virou uma questão de sobrevivência do orçamento. Este guia reúne a tabela oficial de percentuais, o calendário por mês de nascimento, simulações práticas de cálculo, os efeitos sobre a rescisão e o passo a passo para aderir — ou voltar atrás — sem perder dinheiro no caminho.",
    },
    {
      t: "callout",
      tone: "info",
      title: "Resumo rápido para quem tem pressa",
      html: "O saque-aniversário paga uma <strong>alíquota entre 5% e 50% do saldo</strong>, mais uma parcela adicional fixa, todo ano, na janela de três meses que começa no mês do seu aniversário. Ao aderir, você abre mão do saque integral em caso de demissão sem justa causa (recebe só a multa de 40%). O cancelamento é imediato, mas o retorno ao saque-rescisão só vale <strong>após 25 meses</strong>.",
    },
    { t: "h2", text: "O que é o saque-aniversário do FGTS e como ele funciona na prática" },
    {
      t: "p",
      html: "O Fundo de Garantia do Tempo de Serviço é um depósito mensal de 8% sobre o salário bruto, feito pelo empregador em uma conta vinculada na Caixa Econômica Federal. Historicamente, esse dinheiro só podia ser retirado em situações específicas — demissão sem justa causa, aposentadoria, doença grave, compra da casa própria — o que fez do FGTS uma espécie de poupança compulsória de longo prazo.",
    },
    {
      t: "p",
      html: "O saque-aniversário, criado pela Lei nº 13.932/2019, mudou essa lógica. Ele permite que o trabalhador retire anualmente um percentual do saldo de todas as suas contas do FGTS — ativas e inativas — no mês de seu aniversário. A adesão é opcional, individual e feita pelo próprio trabalhador; nenhum empregador, banco ou correspondente pode fazer isso por você.",
    },
    {
      t: "p",
      html: "A troca envolve uma renúncia relevante. Enquanto o trabalhador estiver na modalidade saque-aniversário, uma eventual demissão sem justa causa dará direito apenas à <strong>multa rescisória de 40%</strong> calculada sobre os depósitos do contrato. O saldo acumulado permanece bloqueado na conta vinculada, liberado apenas nas parcelas anuais.",
    },
    { t: "h3", text: "Saque-rescisão x saque-aniversário: a diferença que pesa no bolso" },
    {
      t: "table",
      caption: "Comparativo entre as duas modalidades de saque do FGTS",
      head: ["Critério", "Saque-rescisão (padrão)", "Saque-aniversário"],
      rows: [
        ["Quando o dinheiro sai", "Na demissão sem justa causa", "Todo ano, no mês do aniversário"],
        ["Valor liberado", "100% do saldo + multa de 40%", "Percentual da tabela + parcela adicional"],
        ["Se for demitido", "Saca tudo imediatamente", "Recebe apenas a multa de 40%"],
        ["Compra de imóvel", "Permitida", "Permitida"],
        ["Aposentadoria e doença grave", "Saque integral", "Saque integral (hipóteses legais mantidas)"],
        ["Prazo para trocar de modalidade", "Imediato ao aderir", "Retorno só após 25 meses"],
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Atenção antes de aderir",
      html: "Se existe risco real de demissão nos próximos dois anos — empresa em reestruturação, setor em crise, contrato instável —, o saque-aniversário costuma ser um mau negócio. Você troca um colchão de emergência inteiro por parcelas anuais pequenas.",
    },
    { t: "h2", text: "Tabela do saque-aniversário 2026: percentuais e parcela adicional" },
    {
      t: "p",
      html: "O valor liberado não é um percentual único: ele é <strong>progressivo e decrescente</strong>. Quanto maior o saldo, menor a alíquota aplicada — e entra em cena uma parcela adicional fixa que compensa parcialmente a redução. A tabela abaixo segue os parâmetros vigentes definidos em lei.",
    },
    {
      t: "table",
      caption: "Tabela oficial de alíquotas e parcela adicional do saque-aniversário",
      head: ["Faixa de saldo total (R$)", "Alíquota", "Parcela adicional (R$)"],
      rows: [
        ["Até 500,00", "50%", "—"],
        ["De 500,01 até 1.000,00", "40%", "50,00"],
        ["De 1.000,01 até 5.000,00", "30%", "150,00"],
        ["De 5.000,01 até 10.000,00", "20%", "650,00"],
        ["De 10.000,01 até 15.000,00", "15%", "1.150,00"],
        ["De 15.000,01 até 20.000,00", "10%", "1.900,00"],
        ["Acima de 20.000,00", "5%", "2.900,00"],
      ],
    },
    { t: "h3", text: "Como calcular o seu saque-aniversário passo a passo" },
    {
      t: "ol",
      items: [
        "Some o saldo de todas as suas contas do FGTS (ativas e inativas) — o aplicativo FGTS mostra o total consolidado.",
        "Localize a faixa correspondente na tabela acima.",
        "Multiplique o saldo pela alíquota da faixa.",
        "Some a parcela adicional prevista para aquela faixa.",
        "O resultado é o valor bruto do saque-aniversário daquele ano.",
      ],
    },
    {
      t: "table",
      caption: "Simulações práticas para diferentes saldos",
      head: ["Saldo total", "Conta", "Valor do saque"],
      rows: [
        ["R$ 800,00", "800 × 40% + 50", "R$ 370,00"],
        ["R$ 3.500,00", "3.500 × 30% + 150", "R$ 1.200,00"],
        ["R$ 8.000,00", "8.000 × 20% + 650", "R$ 2.250,00"],
        ["R$ 12.000,00", "12.000 × 15% + 1.150", "R$ 2.950,00"],
        ["R$ 18.000,00", "18.000 × 10% + 1.900", "R$ 3.700,00"],
        ["R$ 45.000,00", "45.000 × 5% + 2.900", "R$ 5.150,00"],
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Dica do editor",
      html: "Repare no efeito da progressividade: um trabalhador com R$ 45 mil de saldo saca pouco mais de 11% do total, enquanto quem tem R$ 800 leva quase metade. O saque-aniversário é proporcionalmente mais generoso para quem tem saldo baixo — e menos eficiente para quem acumulou anos de contribuição.",
    },
    {
      t: "image",
      src: corpo,
      alt: "Mãos de um trabalhador segurando a carteira de trabalho e um celular com aplicativo bancário aberto",
      caption:
        "A adesão e o cancelamento do saque-aniversário são feitos pelo próprio trabalhador, no aplicativo FGTS ou no Internet Banking da Caixa. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "Calendário 2026: quando o dinheiro cai conforme o mês de nascimento" },
    {
      t: "p",
      html: "O crédito fica disponível a partir do primeiro dia útil do mês de aniversário e permanece sacável por <strong>três meses</strong>. Passado esse período, o valor volta para a conta vinculada e só entra novamente na próxima janela anual — sem penalidade, mas também sem recuperação retroativa.",
    },
    {
      t: "table",
      caption: "Janela de saque por mês de nascimento",
      head: ["Mês de nascimento", "Início do saque", "Último dia para sacar"],
      rows: [
        ["Janeiro", "1º dia útil de janeiro", "31 de março"],
        ["Fevereiro", "1º dia útil de fevereiro", "30 de abril"],
        ["Março", "1º dia útil de março", "31 de maio"],
        ["Abril", "1º dia útil de abril", "30 de junho"],
        ["Maio", "1º dia útil de maio", "31 de julho"],
        ["Junho", "1º dia útil de junho", "31 de agosto"],
        ["Julho", "1º dia útil de julho", "30 de setembro"],
        ["Agosto", "1º dia útil de agosto", "31 de outubro"],
        ["Setembro", "1º dia útil de setembro", "30 de novembro"],
        ["Outubro", "1º dia útil de outubro", "31 de dezembro"],
        ["Novembro", "1º dia útil de novembro", "31 de janeiro"],
        ["Dezembro", "1º dia útil de dezembro", "28/29 de fevereiro"],
      ],
    },
    { t: "h2", text: "Como aderir ao saque-aniversário em 2026" },
    {
      t: "p",
      html: "A adesão é digital, gratuita e leva menos de cinco minutos. Feita até o último dia do mês anterior ao aniversário, ela vale já para o ciclo do ano corrente; feita dentro do mês de aniversário, produz efeitos apenas no ano seguinte.",
    },
    {
      t: "ol",
      items: [
        "Baixe o aplicativo FGTS (Caixa) e faça login com a conta Gov.br.",
        "Toque em 'Saque-aniversário' e leia atentamente o termo de opção.",
        "Confirme a adesão e o aceite das condições — inclusive a perda do saque-rescisão.",
        "Cadastre a conta bancária de sua preferência para crédito automático (qualquer banco).",
        "Guarde o comprovante de opção; ele é o documento que registra a data de adesão.",
      ],
    },
    { t: "h3", text: "Como cancelar e voltar ao saque-rescisão" },
    {
      t: "p",
      html: "O cancelamento pode ser solicitado no mesmo aplicativo, a qualquer momento. Mas há uma armadilha: o retorno à modalidade saque-rescisão só se efetiva no <strong>primeiro dia do 25º mês</strong> após a data do pedido de cancelamento. Ou seja, quem cancela hoje ainda passa dois anos sem direito ao saque integral em caso de demissão.",
    },
    {
      t: "callout",
      tone: "warn",
      title: "O erro mais comum",
      html: "Muita gente cancela a opção no dia em que recebe o aviso prévio, acreditando que assim liberará o saldo total. Não funciona: na data da rescisão o trabalhador ainda estará dentro do prazo de carência e receberá apenas a multa de 40%.",
    },
    { t: "h2", text: "Antecipação do saque-aniversário: crédito barato ou armadilha?" },
    {
      t: "p",
      html: "Bancos, financeiras e fintechs oferecem a <strong>antecipação do saque-aniversário</strong>: você recebe hoje, em uma única parcela, o valor de vários ciclos futuros, e o banco fica com o direito de receber diretamente da Caixa nos aniversários seguintes. É uma linha de <strong>empréstimo pessoal com garantia</strong>, o que reduz o risco da instituição e, em tese, a taxa de juros cobrada.",
    },
    {
      t: "p",
      html: "Na prática, as taxas variam de forma significativa entre instituições — e a diferença entre a melhor e a pior oferta pode ultrapassar o dobro do custo total. Antes de contratar, compare o <strong>Custo Efetivo Total (CET)</strong>, e não a taxa mensal isolada, exatamente como se faria em um <strong>refinanciamento de dívida</strong> ou em uma portabilidade de crédito consignado.",
    },
    {
      t: "ul",
      items: [
        "Peça a simulação por escrito com CET anual, número de ciclos antecipados e valor líquido creditado.",
        "Verifique se a operação exige a manutenção da adesão ao saque-aniversário durante todo o contrato — em geral, exige.",
        "Compare com alternativas: consignado privado para CLT, crédito com garantia de veículo ou renegociação direta com o credor.",
        "Evite antecipar para pagar despesas recorrentes; use apenas para quitar dívidas caras, como rotativo do cartão de crédito e cheque especial.",
      ],
    },
    {
      t: "quote",
      html: "Antecipar o saque-aniversário para trocar uma dívida de cartão de crédito por uma linha com garantia pode fazer sentido matemático. Antecipar para consumo corrente é transformar reserva de emergência em despesa do mês.",
      cite: "Rafael Souza, editor de Trabalho e Renda do Maracatu Brasil",
    },
    { t: "h2", text: "O que continua liberado mesmo com o saque-aniversário ativo" },
    {
      t: "p",
      html: "A adesão não bloqueia todas as hipóteses de saque previstas em lei. Continuam válidas as retiradas para:",
    },
    {
      t: "ul",
      items: [
        "Compra de imóvel residencial, amortização ou liquidação de financiamento habitacional pelo SFH.",
        "Aposentadoria concedida pelo INSS.",
        "Doenças graves previstas em lei (neoplasia maligna, HIV, estágio terminal) do trabalhador ou de dependente.",
        "Falecimento do titular (saque pelos dependentes ou herdeiros).",
        "Trabalhador com 70 anos ou mais.",
        "Situações de calamidade pública reconhecidas oficialmente, conforme normas específicas.",
      ],
    },
    { t: "h2", text: "Quem ganha e quem perde com o saque-aniversário" },
    {
      t: "table",
      caption: "Perfis e recomendação prática",
      head: ["Perfil do trabalhador", "Vale a pena?", "Por quê"],
      rows: [
        ["Servidor público concursado ou emprego muito estável", "Geralmente sim", "Risco de demissão baixo e saldo parado rendendo pouco"],
        ["CLT em setor volátil ou empresa em crise", "Geralmente não", "O saldo integral é a principal reserva em caso de dispensa"],
        ["Trabalhador com contas inativas antigas e saldo pequeno", "Sim", "Alíquota alta libera boa fatia de um dinheiro esquecido"],
        ["Endividado no rotativo do cartão", "Avaliar com cuidado", "Pode compensar se o CET da antecipação for muito menor que a dívida"],
        ["Quem pretende comprar imóvel em breve", "Não", "O saldo integral é usado na entrada e na amortização"],
      ],
    },
    { t: "h3", text: "O rendimento do FGTS entra na conta" },
    {
      t: "p",
      html: "O saldo do FGTS é remunerado por juros de 3% ao ano mais Taxa Referencial (TR), acrescidos da distribuição anual de resultados do Fundo. Historicamente, esse retorno fica abaixo da inflação em vários anos — argumento central de quem defende retirar o dinheiro e aplicá-lo em investimentos de renda fixa com liquidez diária. A conta, porém, só fecha para quem efetivamente investe o valor sacado, e não para quem o consome.",
    },
    { t: "h2", text: "Como consultar saldo, contas inativas e comprovantes" },
    {
      t: "ol",
      items: [
        "Abra o aplicativo FGTS e faça login com CPF e senha Gov.br.",
        "Em 'Meu FGTS', veja o saldo consolidado e o detalhamento por empregador.",
        "Confira as contas inativas — valores de empregos antigos entram no cálculo do saque-aniversário.",
        "Baixe o extrato em PDF, útil para simulações de crédito e comprovação de renda.",
        "Ative as notificações para acompanhar cada depósito mensal do empregador.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Depósito atrasado?",
      html: "Se o extrato mostrar meses sem depósito, registre denúncia no canal do Ministério do Trabalho e Emprego. O recolhimento do FGTS é obrigação do empregador e a fiscalização pode exigir o pagamento retroativo com multa e correção.",
    },
    { t: "h2", text: "Erros que custam caro e como evitá-los" },
    {
      t: "ul",
      items: [
        "Aderir por telefone a partir de ligação não solicitada — a adesão é sempre feita pelo próprio trabalhador nos canais oficiais.",
        "Confundir a parcela adicional com um bônus: ela já está embutida no cálculo da tabela.",
        "Deixar a janela de três meses vencer e perder o crédito do ciclo.",
        "Cadastrar conta bancária de terceiros para receber o valor — o crédito precisa ser em conta de titularidade própria.",
        "Contratar antecipação sem comparar o CET de pelo menos três instituições.",
        "Esquecer que o prazo de carência para voltar ao saque-rescisão é de 25 meses, e não de 12.",
      ],
    },
    { t: "h2", text: "Conclusão: uma decisão de risco, não de rendimento" },
    {
      t: "p",
      html: "O saque-aniversário não é bom nem ruim em abstrato — ele é uma troca entre liquidez anual e proteção contra desemprego. Trabalhadores com renda estável, reserva de emergência formada e disciplina para investir o valor retirado tendem a se beneficiar. Quem vive no limite do orçamento e depende do FGTS como colchão em caso de demissão costuma sair perdendo.",
    },
    {
      t: "p",
      html: "Antes de decidir, some seu saldo, aplique a tabela, compare o valor anual com o tamanho da sua reserva atual e considere o cenário do seu setor nos próximos dois anos. E lembre-se: a porta de saída existe, mas leva 25 meses para abrir.",
    },
  ],
  faqs: [
    {
      q: "Qual é o valor do saque-aniversário do FGTS em 2026?",
      a: "Depende do saldo. A alíquota varia de 5% a 50%, somada a uma parcela adicional de até R$ 2.900. Um saldo de R$ 8.000, por exemplo, rende R$ 2.250 (20% + R$ 650).",
    },
    {
      q: "Quem adere ao saque-aniversário perde o FGTS na demissão?",
      a: "Não perde o saldo, mas perde o acesso imediato a ele. Na demissão sem justa causa, recebe apenas a multa rescisória de 40%; o restante fica na conta vinculada e sai nas parcelas anuais.",
    },
    {
      q: "Qual é o prazo para aderir e valer no mesmo ano?",
      a: "A opção precisa ser feita até o último dia do mês anterior ao mês de aniversário. Adesões dentro do mês de nascimento só produzem efeito no ciclo seguinte.",
    },
    {
      q: "Quanto tempo demora para cancelar o saque-aniversário?",
      a: "O pedido é imediato, mas o retorno ao saque-rescisão só ocorre no primeiro dia do 25º mês após a solicitação de cancelamento.",
    },
    {
      q: "Posso sacar o FGTS para comprar imóvel mesmo no saque-aniversário?",
      a: "Sim. As hipóteses legais como compra de imóvel, aposentadoria, doença grave e idade acima de 70 anos continuam liberadas.",
    },
    {
      q: "O que acontece se eu não sacar dentro dos três meses?",
      a: "O valor retorna para a conta vinculada do FGTS, continua rendendo e volta a ficar disponível apenas na próxima janela anual.",
    },
    {
      q: "A antecipação do saque-aniversário vale a pena?",
      a: "Só quando o Custo Efetivo Total é claramente menor que o da dívida que será quitada, como rotativo do cartão ou cheque especial. Para consumo corrente, tende a ser desvantajosa.",
    },
    {
      q: "Contas inativas entram no cálculo?",
      a: "Sim. O saque-aniversário considera o saldo somado de todas as contas do trabalhador, ativas e inativas.",
    },
    {
      q: "Preciso ter conta na Caixa para receber?",
      a: "Não. É possível cadastrar conta corrente ou poupança de qualquer instituição, desde que de titularidade do próprio trabalhador.",
    },
    {
      q: "O saque-aniversário é descontado do meu saldo total?",
      a: "Sim. Cada parcela anual reduz o saldo da conta vinculada, o que diminui a base de cálculo dos ciclos seguintes.",
    },
  ],
  relatedGlossary: ["fgts", "clt", "rescisao-de-contrato", "cet-custo-efetivo-total"],
  relatedArticles: [
    "pis-pasep-2026-abono-salarial",
    "seguro-desemprego-2026-quem-tem-direito-parcelas-valor",
    "minha-casa-minha-vida-2026-faixas-subsidio-financiamento",
  ],
  references: [
    { title: "Caixa Econômica Federal — FGTS Saque-Aniversário", href: "https://www.caixa.gov.br/beneficios-trabalhador/fgts" },
    { title: "Portal Gov.br — Solicitar o saque-aniversário do FGTS", href: "https://www.gov.br/pt-br/servicos/sacar-o-fgts" },
    { title: "Ministério do Trabalho e Emprego — FGTS", href: "https://www.gov.br/trabalho-e-emprego/pt-br" },
  ],
};
