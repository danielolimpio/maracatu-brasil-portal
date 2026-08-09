import type { Post } from "./posts";
import capa from "@/assets/seguro-desemprego-2026-capa.jpg";
import corpo from "@/assets/seguro-desemprego-2026-corpo.jpg";

const RAFAEL = {
  name: "Rafael Souza",
  role: "Editor de Trabalho, Carreira e Renda",
  bio: "Especialista em legislação trabalhista e renda do trabalhador, cobre FGTS, abono salarial, eSocial e Carteira de Trabalho Digital desde 2013. Formado em Direito, dedica-se a explicar direitos previdenciários e trabalhistas em linguagem acessível, acompanhando semanalmente as portarias do Ministério do Trabalho e Emprego e as resoluções do Codefat.",
};

export const seguroDesemprego2026: Post = {
  slug: "seguro-desemprego-2026-quem-tem-direito-parcelas-valor",
  category: "Empregos",
  categorySlug: "empregos",
  title:
    "Seguro-desemprego 2026: quem tem direito, número de parcelas, valor e como dar entrada pelo celular",
  seoTitle: "Seguro-Desemprego 2026: Quem Tem Direito, Parcelas e Valor",
  metaDescription:
    "Veja quem tem direito ao seguro-desemprego em 2026, quantas parcelas você recebe, como é calculado o valor, prazos para solicitar e o passo a passo pelo app.",
  excerpt:
    "Requisitos por solicitação, tabela de parcelas, cálculo do valor pela média salarial, prazos de 7 a 120 dias, motivos de indeferimento e como pedir sem sair de casa.",
  keywords: [
    "seguro desemprego 2026",
    "quem tem direito ao seguro desemprego",
    "quantas parcelas do seguro desemprego",
    "valor do seguro desemprego 2026",
    "como dar entrada no seguro desemprego pelo celular",
    "prazo para solicitar seguro desemprego",
    "consulta seguro desemprego carteira de trabalho digital",
    "seguro desemprego negado o que fazer",
  ],
  tags: [
    "Seguro-desemprego",
    "Demissão",
    "Carteira de Trabalho Digital",
    "FGTS",
    "Ministério do Trabalho",
    "Codefat",
  ],
  author: RAFAEL,
  publishedAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publishedLabel: "09 Ago 2026",
  readTime: "17 min",
  cover: {
    src: capa,
    alt: "Trabalhador brasileiro conferindo o termo de rescisão do contrato de trabalho enquanto acessa o aplicativo Carteira de Trabalho Digital no celular",
    caption:
      "O pedido de seguro-desemprego pode ser feito pelo aplicativo Carteira de Trabalho Digital a partir do sétimo dia após a demissão. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "A demissão sem justa causa raramente chega avisada. Entre a assinatura do termo de rescisão e o primeiro pagamento de contas do mês seguinte existe um intervalo curto, e é exatamente nesse intervalo que o <strong>seguro-desemprego</strong> deveria entrar. O problema é que muita gente perde parcelas por detalhes administrativos: pede fora do prazo, deixa de conferir se o empregador enviou a baixa no eSocial ou desiste depois de um indeferimento que poderia ser resolvido em poucos dias.",
    },
    {
      t: "p",
      html: "Este guia reúne, em linguagem direta, tudo o que muda na prática em 2026: quem tem direito, quantas parcelas cabem em cada solicitação, como o valor é calculado a partir da média dos últimos salários, quais documentos são exigidos, o que fazer quando o benefício é negado e como acompanhar o pagamento sem depender de fila.",
    },
    {
      t: "callout",
      tone: "info",
      title: "Resposta rápida",
      html: "Tem direito ao seguro-desemprego o trabalhador com carteira assinada <strong>demitido sem justa causa</strong>, que não possua renda própria suficiente para o próprio sustento e não receba benefício previdenciário continuado (exceto pensão por morte, auxílio-acidente e auxílio-suplementar). O pedido vai do <strong>7º ao 120º dia</strong> após a demissão e pode ser feito pelo aplicativo Carteira de Trabalho Digital ou pelo portal Gov.br. O número de parcelas varia de <strong>3 a 5</strong>, conforme o tempo trabalhado e quantas vezes o benefício já foi recebido.",
    },
    { t: "h2", text: "Quem tem direito ao seguro-desemprego em 2026" },
    {
      t: "p",
      html: "O benefício não é automático nem universal: ele existe para amparar quem perdeu o emprego por decisão do empregador. Cinco condições precisam ser cumpridas ao mesmo tempo.",
    },
    {
      t: "ul",
      items: [
        "Ter sido <strong>dispensado sem justa causa</strong> — inclui a dispensa indireta, quando o trabalhador rompe o contrato por falta grave da empresa;",
        "Ter recebido salário de pessoa jurídica ou de pessoa física equiparada nos períodos mínimos exigidos para cada solicitação;",
        "Não possuir renda própria de qualquer natureza suficiente para a manutenção da família;",
        "Não estar recebendo benefício de prestação continuada da Previdência Social, com as exceções previstas em lei;",
        "Estar matriculado e frequentando curso de qualificação, quando essa exigência for feita pelo programa em sua região.",
      ],
    },
    {
      t: "p",
      html: "Pedido de demissão, dispensa por justa causa, aposentadoria por tempo de contribuição ou por idade e encerramento de contrato de experiência no prazo combinado <strong>não geram direito</strong>. Já o término antecipado do contrato por prazo determinado, quando existe cláusula de rescisão antecipada, pode gerar direito — vale conferir o motivo lançado na rescisão.",
    },
    { t: "h3", text: "Empregado doméstico, pescador artesanal e trabalhador resgatado" },
    {
      t: "p",
      html: "Existem modalidades específicas. O <strong>empregado doméstico</strong> com FGTS recolhido pelo eSocial tem direito a três parcelas de um salário mínimo, desde que tenha ao menos 15 meses de recolhimento nos últimos 24. O <strong>pescador artesanal</strong> recebe o seguro-defeso durante o período de proibição da pesca. E o trabalhador resgatado de condição análoga à de escravo tem direito a três parcelas, independentemente do tempo de vínculo.",
    },
    { t: "h2", text: "Quantas parcelas você recebe" },
    {
      t: "p",
      html: "O número de parcelas depende de duas variáveis: quantos meses de trabalho comprovados existem nos períodos de referência e se é a primeira, a segunda ou a terceira solicitação em diante.",
    },
    {
      t: "table",
      caption:
        "Número de parcelas do seguro-desemprego conforme o tempo trabalhado e o número de solicitações.",
      head: ["Solicitação", "Tempo trabalhado exigido", "Parcelas"],
      rows: [
        ["1ª solicitação", "Ao menos 12 meses nos últimos 18 meses", "4 parcelas"],
        ["1ª solicitação", "Ao menos 24 meses nos últimos 36 meses", "5 parcelas"],
        ["2ª solicitação", "Ao menos 9 meses nos últimos 12 meses", "4 parcelas"],
        ["2ª solicitação", "Ao menos 24 meses nos últimos 36 meses", "5 parcelas"],
        ["3ª solicitação ou mais", "Ao menos 6 meses ininterruptos", "3 parcelas"],
        ["3ª solicitação ou mais", "Ao menos 12 meses nos últimos 18 meses", "4 parcelas"],
        ["3ª solicitação ou mais", "Ao menos 24 meses nos últimos 36 meses", "5 parcelas"],
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Carência entre pedidos",
      html: "Entre uma solicitação e a seguinte é preciso respeitar <strong>16 meses</strong> contados da data de dispensa que gerou o benefício anterior. Quem foi demitido antes desse intervalo não perde o direito no futuro — apenas não pode acionar o programa duas vezes em sequência curta.",
    },
    { t: "h2", text: "Como o valor da parcela é calculado" },
    {
      t: "p",
      html: "O cálculo parte da <strong>média aritmética dos três últimos salários</strong> recebidos antes da demissão. Sobre essa média aplicam-se faixas com percentuais decrescentes, respeitando um piso e um teto definidos anualmente pelo Codefat. Nenhuma parcela pode ser inferior ao salário mínimo vigente.",
    },
    {
      t: "table",
      caption:
        "Faixas de cálculo do seguro-desemprego a partir da média dos três últimos salários (referência 2026).",
      head: ["Média salarial", "Cálculo da parcela"],
      rows: [
        ["Até R$ 2.138,76", "Multiplica-se a média por 0,8"],
        ["De R$ 2.138,77 até R$ 3.564,96", "R$ 1.711,01 mais 50% do que exceder R$ 2.138,76"],
        ["Acima de R$ 3.564,96", "Valor fixo de R$ 2.424,11"],
      ],
    },
    {
      t: "p",
      html: "Um exemplo prático deixa a lógica clara. Suponha três últimos salários de R$ 2.400, R$ 2.400 e R$ 2.700 — média de R$ 2.500. Como o valor cai na segunda faixa, a parcela será de R$ 1.711,01 mais 50% de R$ 361,24 (a diferença acima do limite da primeira faixa), resultando em aproximadamente <strong>R$ 1.891,63 por mês</strong>. Quem trabalhou menos de três meses no último vínculo tem a média calculada sobre os meses efetivamente trabalhados.",
    },
    {
      t: "callout",
      tone: "warn",
      title: "Atenção ao planejar o orçamento",
      html: "O seguro-desemprego é temporário e quase sempre menor que o salário anterior. Antes de contratar <strong>empréstimo pessoal</strong>, refinanciamento ou usar o limite do <strong>cartão de crédito</strong>, calcule quanto entra por mês com o benefício somado ao saque do FGTS e à multa de 40%. Assumir parcela fixa com renda que termina em quatro meses é a origem mais comum do endividamento pós-demissão.",
    },
    {
      t: "image",
      src: corpo,
      alt: "Trabalhador sendo atendido por funcionária em posto do Sine para dar entrada no seguro-desemprego",
      caption:
        "Os postos do Sine seguem atendendo quem precisa de apoio presencial, mas o pedido digital costuma ser analisado em até 30 dias. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "Prazos: do 7º ao 120º dia" },
    {
      t: "p",
      html: "O trabalhador formal dispensado sem justa causa pode requerer o benefício entre o <strong>sétimo e o cento e vigésimo dia</strong> contados da data de dispensa. Empregados domésticos têm janela de 7 a 90 dias, e o pescador artesanal tem prazos próprios definidos pelo período de defeso de cada região.",
    },
    {
      t: "ul",
      items: [
        "Antes do 7º dia o sistema simplesmente não aceita o requerimento;",
        "Depois do 120º dia o direito àquela solicitação é <strong>perdido</strong>, sem possibilidade de recuperação;",
        "A primeira parcela costuma ser liberada cerca de 30 dias após o requerimento habilitado;",
        "As demais seguem em intervalos aproximados de 30 dias, sempre condicionadas à continuidade dos requisitos.",
      ],
    },
    { t: "h2", text: "Passo a passo para pedir pelo celular" },
    {
      t: "p",
      html: "A via digital é hoje a mais rápida e dispensa agendamento. Todo o processo depende de uma conta gov.br em nível prata ou ouro.",
    },
    {
      t: "ol",
      items: [
        "Confirme no termo de rescisão que o motivo é <strong>dispensa sem justa causa</strong> e guarde o documento assinado;",
        "Verifique se a empresa registrou o desligamento no <strong>eSocial</strong> — sem essa baixa, o requerimento fica pendente;",
        "Instale o aplicativo <strong>Carteira de Trabalho Digital</strong> e entre com a conta gov.br;",
        "Toque em <em>Benefícios</em> e depois em <em>Seguro-desemprego</em>;",
        "Confira os dados do vínculo apresentados pelo sistema e confirme as informações da rescisão;",
        "Envie o requerimento e anote o número de protocolo;",
        "Acompanhe o status pelo próprio aplicativo, pelo portal Gov.br ou pelo telefone 158 (Alô Trabalho);",
        "Ao receber a habilitação, verifique a conta indicada para crédito — normalmente a conta poupança social digital da Caixa ou o Caixa Tem.",
      ],
    },
    { t: "h3", text: "Documentos que devem estar em ordem" },
    {
      t: "ul",
      items: [
        "CPF regularizado e conta gov.br verificada;",
        "Termo de rescisão do contrato de trabalho assinado;",
        "Comunicação de Dispensa (CD) ou requerimento eletrônico gerado pelo empregador, quando houver;",
        "Extrato do FGTS com os depósitos do último vínculo;",
        "Carteira de Trabalho Digital com o vínculo baixado corretamente;",
        "Comprovante de conta bancária de titularidade do trabalhador.",
      ],
    },
    { t: "h2", text: "Por que o benefício é negado — e como reverter" },
    {
      t: "p",
      html: "A maior parte dos indeferimentos não tem relação com a ausência de direito, mas com informação divergente entre o que o trabalhador declara e o que consta nas bases do governo.",
    },
    {
      t: "table",
      caption: "Motivos frequentes de indeferimento e caminhos de solução.",
      head: ["Motivo", "O que fazer"],
      rows: [
        ["Vínculo ainda aberto no eSocial", "Cobrar a baixa junto ao empregador e refazer o pedido"],
        ["Motivo de rescisão divergente", "Solicitar retificação do evento no eSocial pela empresa"],
        ["Vínculo ativo em outra empresa", "Comprovar encerramento ou aguardar atualização das bases"],
        ["Carência de 16 meses não cumprida", "Aguardar o prazo; não há como antecipar"],
        ["Renda própria identificada", "Apresentar documentação demonstrando a real situação"],
        ["Dados bancários incompatíveis", "Atualizar a conta em nome do próprio trabalhador"],
      ],
    },
    {
      t: "p",
      html: "Havendo indeferimento, cabe <strong>recurso administrativo</strong> à Superintendência Regional do Trabalho, apresentado em até 30 dias após a ciência da decisão. O pedido pode ser protocolado digitalmente, com anexação da rescisão, dos extratos do FGTS e de eventual declaração do empregador.",
    },
    {
      t: "quote",
      html: "Na maioria dos casos que chegam ao balcão, o direito existe. O que falta é um evento no eSocial que a empresa não enviou. Cobrar essa correção resolve mais rápido que qualquer recurso.",
      cite: "Rafael Souza, editor de Trabalho do Maracatu Brasil",
    },
    { t: "h2", text: "O seguro-desemprego pode ser suspenso ou cancelado" },
    {
      t: "ul",
      items: [
        "Ao assumir novo emprego formal, o pagamento é interrompido — e as parcelas não usadas ficam disponíveis para uma solicitação futura, se houver saldo;",
        "Iniciar atividade como MEI não cancela automaticamente o benefício, mas a renda obtida pode caracterizar sustento próprio e motivar revisão;",
        "Receber benefício previdenciário continuado, exceto as hipóteses permitidas em lei, encerra o pagamento;",
        "Fraudar informações gera devolução dos valores recebidos, com correção monetária;",
        "Recusar recolocação equivalente oferecida pelo sistema público de emprego também pode suspender o pagamento.",
      ],
    },
    { t: "h2", text: "O que compõe a renda do trabalhador demitido" },
    {
      t: "p",
      html: "Vale enxergar o seguro-desemprego como uma peça de um conjunto maior. Somados, os valores da rescisão costumam sustentar de três a seis meses de orçamento apertado — e é nesse período que a recolocação precisa acontecer.",
    },
    {
      t: "table",
      caption: "Verbas e benefícios que costumam se somar após a demissão sem justa causa.",
      head: ["Item", "Origem", "Quando entra"],
      rows: [
        ["Saldo de salário e verbas rescisórias", "Empregador", "Até 10 dias após o desligamento"],
        ["Saque do FGTS", "Caixa Econômica Federal", "Após a comunicação da rescisão"],
        ["Multa de 40% do FGTS", "Empregador, via FGTS", "Junto ao saque rescisório"],
        ["Seguro-desemprego", "Fundo de Amparo ao Trabalhador (FAT)", "Cerca de 30 dias após o pedido"],
        ["Abono salarial PIS/Pasep", "Caixa ou Banco do Brasil", "Conforme calendário anual"],
      ],
    },
    {
      t: "p",
      html: "Quem quiser entender melhor cada peça desse quebra-cabeça pode ler o nosso guia sobre o <a href=\"/trabalho/pis-pasep-2026-abono-salarial\">abono salarial PIS/Pasep em 2026</a>, revisar a documentação com o passo a passo da <a href=\"/documentos/carteira-trabalho-digital-atualizar\">Carteira de Trabalho Digital</a> e conferir as regras do <a href=\"/trabalho/fgts-saque-aniversario-2027\">saque-aniversário do FGTS</a>, que altera o valor disponível no momento da demissão.",
    },
    { t: "h4", text: "Checklist dos primeiros 15 dias após a demissão" },
    {
      t: "ol",
      items: [
        "Guardar o termo de rescisão assinado e a chave de conectividade da rescisão;",
        "Conferir no aplicativo do FGTS se a rescisão foi comunicada pela empresa;",
        "Solicitar o seguro-desemprego a partir do sétimo dia;",
        "Atualizar currículo e cadastro no sistema público de emprego;",
        "Renegociar despesas fixas antes de atrasar qualquer parcela;",
        "Manter a conta gov.br e o CPF sem pendências;",
        "Anotar as datas previstas de cada parcela para organizar o orçamento.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quem pede demissão tem direito ao seguro-desemprego?",
      a: "Não. O benefício é destinado a quem foi dispensado sem justa causa. Pedido de demissão, justa causa e término normal de contrato de experiência não geram direito. A exceção é a rescisão indireta, quando o trabalhador rompe o contrato por falta grave do empregador reconhecida na Justiça ou registrada na rescisão.",
    },
    {
      q: "Qual é o prazo para dar entrada no seguro-desemprego em 2026?",
      a: "Do sétimo ao centésimo vigésimo dia após a data de dispensa para o trabalhador formal. Empregados domésticos têm prazo de 7 a 90 dias. Passado o limite, o direito àquela solicitação é perdido definitivamente.",
    },
    {
      q: "Quantas parcelas eu recebo?",
      a: "De três a cinco, conforme o tempo trabalhado e o número de solicitações anteriores. Na primeira solicitação, 12 meses trabalhados nos últimos 18 garantem quatro parcelas, e 24 meses nos últimos 36 garantem cinco.",
    },
    {
      q: "Como sei o valor exato da minha parcela?",
      a: "O cálculo usa a média dos três últimos salários e aplica faixas com percentuais decrescentes, respeitando o piso de um salário mínimo e o teto fixado pelo Codefat. O valor definitivo aparece na tela de habilitação do requerimento.",
    },
    {
      q: "Posso trabalhar como MEI recebendo seguro-desemprego?",
      a: "Abrir CNPJ de MEI não cancela o benefício automaticamente, mas a renda obtida pela atividade pode ser interpretada como sustento próprio e levar à suspensão. O ideal é avaliar o faturamento previsto antes de formalizar a empresa.",
    },
    {
      q: "O que fazer se o seguro-desemprego for negado?",
      a: "Verifique o motivo no aplicativo. Se for divergência de dados ou vínculo aberto, peça correção ao empregador no eSocial e refaça o requerimento. Havendo negativa mantida, cabe recurso à Superintendência Regional do Trabalho em até 30 dias.",
    },
    {
      q: "Consigo receber seguro-desemprego e sacar o FGTS ao mesmo tempo?",
      a: "Sim. São direitos independentes: o FGTS é saque do fundo acumulado, com multa de 40% na dispensa sem justa causa, e o seguro-desemprego é pago pelo Fundo de Amparo ao Trabalhador.",
    },
    {
      q: "Se eu conseguir emprego no meio do benefício, perco as parcelas restantes?",
      a: "O pagamento é interrompido com a nova admissão, mas o saldo de parcelas não recebidas pode ser aproveitado em solicitação futura, desde que os requisitos da nova dispensa sejam cumpridos.",
    },
    {
      q: "Onde acompanho o pagamento das parcelas?",
      a: "No aplicativo Carteira de Trabalho Digital, no portal Gov.br, no Caixa Tem ou pelo telefone 158. O crédito costuma cair em conta poupança social digital quando o trabalhador não indica outra conta.",
    },
    {
      q: "Preciso frequentar curso de qualificação para manter o benefício?",
      a: "A exigência existe em lei e pode ser aplicada conforme a oferta de cursos na sua região. Quando convocado, o trabalhador deve comparecer, pois a recusa injustificada pode suspender o pagamento.",
    },
  ],
  relatedGlossary: [
    "seguro-desemprego",
    "fgts",
    "carteira-de-trabalho-digital",
    "rescisao-trabalhista",
    "esocial",
    "abono-salarial-pis",
  ],
  relatedArticles: [
    "seguro-desemprego-parcelas",
    "carteira-trabalho-digital-atualizar",
    "fgts-saque-aniversario-2027",
    "jovem-aprendiz-vagas",
  ],
  references: [
    {
      title: "Ministério do Trabalho e Emprego — Seguro-desemprego",
      href: "https://www.gov.br/trabalho-e-emprego/pt-br",
    },
    {
      title: "Portal Gov.br — Solicitar o seguro-desemprego",
      href: "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego",
    },
    {
      title: "Caixa Econômica Federal — FGTS e pagamentos ao trabalhador",
      href: "https://www.caixa.gov.br/beneficios-trabalhador",
    },
  ],
};
