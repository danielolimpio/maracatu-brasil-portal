import type { Post } from "./posts";
import capa from "@/assets/aposentadoria-inss-2026-capa.jpg";
import corpo from "@/assets/aposentadoria-inss-2026-corpo.jpg";

const MARCOS = {
  name: "Marcos Vinícius Tavares",
  role: "Editor de Previdência e Direito Social",
  bio: "Advogado previdenciarista com atuação desde 2009 em benefícios do INSS, revisões de aposentadoria e planejamento previdenciário. Autor de pareceres sobre as regras de transição da Reforma da Previdência, acompanha semanalmente as publicações da Dataprev e do Conselho de Recursos da Previdência Social para explicar ao leitor o que muda na prática.",
};

export const aposentadoriaInss2026: Post = {
  slug: "aposentadoria-inss-2026-regras-tabela-prova-de-vida",
  category: "Previdência",
  categorySlug: "previdencia",
  title:
    "Aposentadoria pelo INSS em 2026: regras de transição, tabela de contribuição e como fazer a prova de vida",
  seoTitle: "Aposentadoria INSS 2026: Regras, Tabela e Prova de Vida",
  metaDescription:
    "Entenda as regras de aposentadoria do INSS em 2026, a tabela de contribuição atualizada, as cinco regras de transição, o cálculo do benefício e a prova de vida.",
  excerpt:
    "Idade mínima, tempo de contribuição, pontos, pedágio, tabela do INSS 2026 e o passo a passo para simular o benefício, revisar o CNIS e manter a prova de vida em dia.",
  keywords: [
    "aposentadoria inss 2026",
    "tabela inss 2026",
    "regras de transição aposentadoria",
    "prova de vida inss",
    "meu inss simulação de aposentadoria",
    "tempo de contribuição aposentadoria",
    "cnis extrato de contribuição",
    "planejamento previdenciário",
  ],
  tags: [
    "INSS",
    "Aposentadoria",
    "Previdência Social",
    "CNIS",
    "Meu INSS",
    "Reforma da Previdência",
  ],
  author: MARCOS,
  publishedAt: "2026-08-08",
  updatedAt: "2026-08-08",
  publishedLabel: "08 Ago 2026",
  readTime: "16 min",
  cover: {
    src: capa,
    alt: "Casal de aposentados brasileiros sorrindo enquanto consulta o aplicativo Meu INSS em um tablet na sala de casa",
    caption:
      "Simular a aposentadoria no Meu INSS antes de pedir o benefício evita perdas definitivas no valor da renda mensal. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "Poucas decisões financeiras são tão definitivas quanto o dia em que uma pessoa pede aposentadoria. Diferente de um investimento que pode ser resgatado ou de um financiamento que pode ser quitado, o valor do benefício concedido acompanha o segurado pelo resto da vida — e, em muitos casos, também a sua família, na forma de pensão por morte. Ainda assim, é comum que o pedido seja feito às pressas, sem simulação e sem conferir o extrato de contribuições.",
    },
    {
      t: "p",
      html: "Em 2026, o sistema previdenciário brasileiro opera com dois conjuntos de normas convivendo ao mesmo tempo: a regra permanente, criada pela Reforma da Previdência, e as <strong>cinco regras de transição</strong> destinadas a quem já contribuía antes de novembro de 2019. Entender em qual delas você se encaixa é o que separa uma aposentadoria integral de uma renda reduzida por décadas.",
    },
    {
      t: "p",
      html: "Este guia explica a <strong>tabela do INSS 2026</strong>, os requisitos de cada regra, a lógica do cálculo do benefício, como revisar o CNIS, o que fazer quando falta tempo de contribuição e como cumprir a <strong>prova de vida</strong> sem sair de casa.",
    },
    {
      t: "callout",
      tone: "info",
      title: "Resposta rápida",
      html: "Na regra permanente, a aposentadoria por idade exige <strong>65 anos para homens e 62 para mulheres</strong>, com no mínimo 15 anos de contribuição (20 anos para homens que entraram no sistema após a reforma). Quem já contribuía antes de 13 de novembro de 2019 pode escolher entre cinco regras de transição — pontos, idade progressiva, pedágio de 50%, pedágio de 100% ou idade mínima progressiva. A prova de vida é feita automaticamente por cruzamento de dados públicos, sem necessidade de ir à agência na maioria dos casos.",
    },
    { t: "h2", text: "Tabela de contribuição do INSS em 2026" },
    {
      t: "p",
      html: "A tabela do INSS define quanto cada trabalhador com carteira assinada recolhe por mês. O desconto é progressivo: cada faixa de salário tem sua própria alíquota, aplicada apenas sobre a parcela correspondente. É por isso que o percentual efetivo é sempre menor do que a alíquota da última faixa.",
    },
    {
      t: "table",
      caption:
        "Alíquotas progressivas de contribuição do empregado, doméstico e trabalhador avulso em 2026.",
      head: ["Salário de contribuição", "Alíquota progressiva"],
      rows: [
        ["Até 1 salário mínimo", "7,5%"],
        ["De 1 salário mínimo até R$ 2.793,88", "9%"],
        ["De R$ 2.793,89 até R$ 4.190,83", "12%"],
        ["De R$ 4.190,84 até o teto do INSS", "14%"],
      ],
    },
    {
      t: "p",
      html: "Contribuintes individuais e facultativos seguem outra lógica: recolhem 20% sobre o valor declarado, entre o salário mínimo e o teto, ou 11% sobre o salário mínimo no Plano Simplificado — nesse caso, sem direito à aposentadoria por tempo de contribuição. Já o MEI recolhe 5% do salário mínimo pelo DAS, com a mesma limitação.",
    },
    {
      t: "callout",
      tone: "warn",
      title: "Cuidado com o recolhimento mínimo",
      html: "Quem contribui como facultativo de baixa renda ou pelo MEI garante aposentadoria por idade no valor de um salário mínimo, mas <strong>não</strong> soma tempo para aposentadoria por tempo de contribuição. Se o objetivo é receber acima do piso, é preciso complementar a alíquota — algo que pode ser feito com guias retroativas em situações específicas.",
    },
    { t: "h2", text: "As cinco regras de transição explicadas" },
    {
      t: "p",
      html: "Quem já era filiado ao INSS antes da reforma tem direito de comparar as regras e escolher a mais vantajosa. Na prática, o Meu INSS calcula todas e mostra a data em que cada uma é alcançada.",
    },
    { t: "h3", text: "1. Regra de pontos" },
    {
      t: "p",
      html: "Soma idade e tempo de contribuição. Em 2026, a pontuação exigida é de <strong>102 pontos para mulheres e 112 para homens</strong>, com no mínimo 30 e 35 anos de contribuição, respectivamente. A pontuação sobe um ponto por ano até estabilizar em 100 e 105 no modelo original — por isso, adiar o pedido pode significar mais tempo trabalhando do que o esperado.",
    },
    { t: "h3", text: "2. Idade mínima progressiva" },
    {
      t: "p",
      html: "Exige 30 anos de contribuição para mulheres e 35 para homens, combinados com uma idade mínima que aumenta seis meses por ano. Em 2026, essa idade está em <strong>59 anos e 6 meses para mulheres e 64 anos e 6 meses para homens</strong>.",
    },
    { t: "h3", text: "3. Pedágio de 50%" },
    {
      t: "p",
      html: "Vale apenas para quem, em novembro de 2019, estava a <strong>menos de dois anos</strong> de completar 30 ou 35 anos de contribuição. Nesse caso, é necessário cumprir o tempo que faltava mais um pedágio de 50% sobre ele. Sem exigência de idade mínima, mas com aplicação do fator previdenciário — o que costuma reduzir o valor.",
    },
    { t: "h3", text: "4. Pedágio de 100%" },
    {
      t: "p",
      html: "Exige idade mínima de 57 anos (mulheres) ou 60 anos (homens), tempo de contribuição de 30 ou 35 anos e o cumprimento do dobro do tempo que faltava em 2019. É a regra que costuma gerar o <strong>melhor valor de benefício</strong>, porque garante 100% da média salarial, sem o corte de 40% aplicado na regra geral.",
    },
    { t: "h3", text: "5. Idade progressiva para aposentadoria por idade" },
    {
      t: "p",
      html: "Para mulheres, a idade mínima subiu gradualmente até 62 anos e já está estabilizada; homens seguem com 65 anos e 15 anos de contribuição, desde que a filiação seja anterior à reforma.",
    },
    {
      t: "table",
      caption:
        "Comparativo simplificado das regras de transição vigentes em 2026.",
      head: ["Regra", "Idade mínima", "Tempo de contribuição", "Efeito no valor"],
      rows: [
        ["Pontos", "Não exige", "30 (M) / 35 (H) anos", "60% da média + 2% por ano extra"],
        ["Idade progressiva", "59a6m (M) / 64a6m (H)", "30 (M) / 35 (H) anos", "60% da média + 2% por ano extra"],
        ["Pedágio 50%", "Não exige", "Tempo faltante + 50%", "Aplica fator previdenciário"],
        ["Pedágio 100%", "57 (M) / 60 (H) anos", "Tempo faltante + 100%", "100% da média salarial"],
        ["Idade", "62 (M) / 65 (H) anos", "15 anos", "60% da média + 2% por ano extra"],
      ],
    },
    {
      t: "image",
      src: corpo,
      alt: "Aposentada brasileira sendo atendida por uma funcionária em um balcão de atendimento previdenciário",
      caption:
        "O atendimento presencial continua disponível, mas a maioria dos serviços do INSS já pode ser resolvida pelo aplicativo ou pelo telefone 135. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "Como o valor da aposentadoria é calculado" },
    {
      t: "p",
      html: "Desde a reforma, o cálculo parte da <strong>média de todos os salários de contribuição desde julho de 1994</strong>, corrigidos pela inflação. Sobre essa média aplica-se 60%, com acréscimo de 2% por cada ano de contribuição que exceder 20 anos (homens) ou 15 anos (mulheres).",
    },
    {
      t: "p",
      html: "Um exemplo concreto: uma trabalhadora com média salarial de R$ 3.500 e 32 anos de contribuição recebe 60% + 34% (17 anos além dos 15) = 94% da média, ou R$ 3.290. Se ela trabalhar mais três anos, chega a 100% da média. Cada ano adicional, portanto, tem valor mensurável — e é aí que a simulação faz diferença.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Simule antes de pedir",
      html: "No Meu INSS, a opção <em>Simular Aposentadoria</em> mostra a data de cada regra e o valor estimado. Rode a simulação, anote os cenários e compare. Em muitos casos, esperar seis meses aumenta o benefício em centenas de reais por mês, pelo resto da vida.",
    },
    { t: "h2", text: "CNIS: por que revisar o extrato antes de tudo" },
    {
      t: "p",
      html: "O CNIS é o histórico oficial das suas contribuições. Erros nele são a principal causa de aposentadoria com valor menor do que o devido: vínculos que não aparecem, períodos com salário zerado, empregos informais nunca registrados e recolhimentos de autônomo lançados no CPF errado.",
    },
    {
      t: "ol",
      items: [
        "Acesse o Meu INSS com a conta gov.br e baixe o <strong>Extrato de Contribuição (CNIS)</strong>;",
        "Confira cada vínculo: datas de admissão e demissão, empregador e remunerações;",
        "Marque as lacunas e compare com a carteira de trabalho física e a Carteira de Trabalho Digital;",
        "Reúna documentos comprobatórios — contracheques, contratos, rescisões, guias de recolhimento;",
        "Peça a correção pelo serviço <em>Atualização de Vínculos e Remunerações</em>, anexando os comprovantes;",
        "Guarde o número do protocolo e acompanhe pelo aplicativo ou pelo telefone 135.",
      ],
    },
    {
      t: "quote",
      html: "Nenhum planejamento previdenciário começa pela data do pedido. Começa pela leitura linha por linha do CNIS. É lá que estão o dinheiro perdido e o tempo esquecido.",
      cite: "Marcos Vinícius Tavares, editor de Previdência do Maracatu Brasil",
    },
    { t: "h2", text: "Prova de vida: como funciona em 2026" },
    {
      t: "p",
      html: "A prova de vida deixou de ser uma obrigação anual presencial. Hoje o INSS faz a verificação de forma automática, cruzando bases de dados públicas: vacinação no SUS, emissão de documentos, votação, movimentação bancária, consultas médicas pelo cartão do SUS e atualização do CadÚnico.",
    },
    {
      t: "ul",
      items: [
        "Se o cruzamento encontrar registros recentes, <strong>nada precisa ser feito</strong>;",
        "Se não encontrar, o segurado é notificado pelo Meu INSS, pelo extrato de pagamento ou pelo banco;",
        "A partir da notificação, há prazo para regularizar antes de qualquer bloqueio;",
        "A comprovação pode ser feita com biometria pelo aplicativo gov.br, no banco pagador ou em agência do INSS;",
        "Quem tem dificuldade de locomoção pode solicitar atendimento domiciliar pelo telefone 135.",
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Golpes em nome do INSS",
      html: "O INSS não liga pedindo senha, não envia link por WhatsApp e não cobra taxa para liberar benefício. Também não existe “antecipação de aposentadoria” oficial por telefone. Em caso de dúvida, encerre a ligação e retorne pelo <strong>135</strong>, que é gratuito.",
    },
    { t: "h2", text: "Erros que reduzem o valor do benefício" },
    {
      t: "ul",
      items: [
        "Pedir a aposentadoria na primeira data possível, sem comparar as cinco regras;",
        "Ignorar períodos de atividade especial, que podem ser convertidos em tempo comum;",
        "Não averbar tempo de serviço militar ou de servidor público;",
        "Contribuir sempre pelo mínimo nos últimos anos, achando que só o final conta — a média considera todo o período desde 1994;",
        "Deixar o benefício por incapacidade vencer sem pedir prorrogação;",
        "Contratar <strong>empréstimo consignado</strong> comprometendo a margem antes de conhecer o valor definitivo da renda mensal.",
      ],
    },
    {
      t: "p",
      html: "Para quem está montando esse quebra-cabeça, vale complementar a leitura com o nosso material sobre <a href=\"/previdencia/aposentadoria-por-idade-2027\">aposentadoria por idade e os requisitos atualizados</a> e com a análise da <a href=\"/previdencia/inss-revisao-vida-toda-stf\">Revisão da Vida Toda no STF</a>, que ainda afeta quem tem salários altos antes de 1994. Se a sua renda também depende de abono, veja o guia do <a href=\"/trabalho/pis-pasep-2026-abono-salarial\">PIS/Pasep 2026</a>, porque tempo de vínculo formal aparece nos dois cálculos.",
    },
    { t: "h4", text: "Checklist antes de dar entrada no pedido" },
    {
      t: "ol",
      items: [
        "CNIS revisado e corrigido;",
        "Simulação feita nas cinco regras aplicáveis;",
        "Documentos de atividade especial ou insalubre organizados;",
        "Comprovantes de tempo rural, militar ou público reunidos;",
        "Conta bancária ativa em seu nome para o crédito;",
        "Margem de crédito preservada até a concessão;",
        "Protocolo do requerimento salvo para acompanhamento.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual a idade mínima para se aposentar pelo INSS em 2026?",
      a: "Na regra permanente, 62 anos para mulheres e 65 anos para homens, com 15 anos de contribuição no mínimo (20 anos para homens filiados após a reforma). Nas regras de transição, a idade pode ser menor, como 59 anos e 6 meses para mulheres na idade progressiva.",
    },
    {
      q: "Como sei em qual regra de transição me encaixo?",
      a: "A simulação do Meu INSS calcula automaticamente todas as regras aplicáveis ao seu histórico e mostra a data em que cada requisito é cumprido, além do valor estimado do benefício em cada cenário.",
    },
    {
      q: "Quanto tempo de contribuição preciso para receber acima do salário mínimo?",
      a: "O valor depende da média salarial e do tempo total. Para chegar a 100% da média, é preciso somar 35 anos de contribuição (mulheres) ou 40 anos (homens), exceto na regra do pedágio de 100%, que já garante a média integral.",
    },
    {
      q: "A prova de vida ainda é obrigatória?",
      a: "A comprovação continua existindo, mas é feita automaticamente por cruzamento de dados públicos. Só quem não é localizado nessas bases recebe notificação para comprovar por biometria no gov.br, no banco pagador ou em agência.",
    },
    {
      q: "O que fazer se faltarem vínculos no meu CNIS?",
      a: "Solicite a atualização pelo Meu INSS, no serviço de Atualização de Vínculos e Remunerações, anexando carteira de trabalho, contracheques, rescisões ou guias de recolhimento. O pedido é analisado sem custo.",
    },
    {
      q: "Vale a pena continuar contribuindo depois de atingir os requisitos?",
      a: "Em muitos casos, sim. Cada ano adicional acrescenta 2% à média salarial na regra geral, aumento que se mantém pelo resto da vida e é repassado à pensão por morte.",
    },
    {
      q: "Quem contribui como MEI consegue se aposentar?",
      a: "Sim, por idade, no valor de um salário mínimo. Para ter direito à aposentadoria por tempo de contribuição ou a valor superior ao piso, é necessário complementar a alíquota de recolhimento.",
    },
    {
      q: "O INSS pode revisar meu benefício depois da concessão?",
      a: "Pode, tanto para corrigir erros quanto por pedido do segurado. O prazo de dez anos para revisão administrativa conta da primeira parcela recebida, por isso é recomendável conferir a carta de concessão logo no início.",
    },
    {
      q: "Empréstimo consignado atrasa a concessão da aposentadoria?",
      a: "Não atrasa, mas contratar antes da concessão pode comprometer margem sobre um valor que ainda vai mudar. O ideal é aguardar a carta de concessão para conhecer a renda definitiva antes de assumir qualquer parcela.",
    },
  ],
  relatedGlossary: [
    "inss",
    "cnis",
    "aposentadoria-por-idade",
    "aposentadoria-por-tempo-contribuicao",
    "revisao-da-vida-toda",
    "consignado",
  ],
  relatedArticles: [
    "aposentadoria-por-idade-2027",
    "inss-revisao-vida-toda-stf",
    "concurso-inss-edital",
    "auxilio-doenca-perito",
  ],
  references: [
    {
      title: "Meu INSS — Serviços e simulação de aposentadoria",
      href: "https://meu.inss.gov.br/",
    },
    {
      title: "Portal Gov.br — Instituto Nacional do Seguro Social (INSS)",
      href: "https://www.gov.br/inss/pt-br",
    },
    {
      title: "Dataprev — Bases e serviços da Previdência Social",
      href: "https://www.dataprev.gov.br/",
    },
  ],
};
