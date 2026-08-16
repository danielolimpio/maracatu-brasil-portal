import { impostoRenda2026 } from "./post-imposto-renda-2026";
import { aposentadoriaInss2026 } from "./post-aposentadoria-inss-2026";
import { seguroDesemprego2026 } from "./post-seguro-desemprego-2026";
import { bpcLoas2026 } from "./post-bpc-loas-2026";
import { fgtsSaqueAniversario2026 } from "./post-fgts-saque-aniversario-2026";
import { minhaCasaMinhaVida2026 } from "./post-minha-casa-minha-vida-2026";
import bolsaCapa from "@/assets/bolsa-familia-2026-capa.jpg";
import bolsaCorpo from "@/assets/bolsa-familia-2026-corpo.jpg";
import pisCapa from "@/assets/pis-pasep-2026-capa.jpg";
import pisCorpo from "@/assets/pis-pasep-2026-corpo.jpg";

export type Block =
  | { t: "h2" | "h3" | "h4"; text: string }
  | { t: "p"; html: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][] }
  | { t: "callout"; tone: "info" | "tip" | "warn"; title: string; html: string }
  | { t: "quote"; html: string; cite?: string }
  | { t: "image"; src: string; alt: string; caption: string };

export type Post = {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  keywords: string[];
  tags: string[];
  author: { name: string; role: string; bio: string };
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  publishedLabel: string;
  readTime: string;
  cover: { src: string; alt: string; caption: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  relatedGlossary: string[];
  relatedArticles: string[];
  references: { title: string; href: string }[];
};

const ANA = {
  name: "Ana Ribeiro",
  role: "Editora de Benefícios e Políticas Sociais",
  bio: "Jornalista com 12 anos de cobertura de programas sociais, CadÚnico e INSS. Acompanha diariamente as publicações do Diário Oficial da União, do Ministério do Desenvolvimento e Assistência Social e da Caixa Econômica Federal para traduzir regras técnicas em orientações práticas para o leitor.",
};

const RAFAEL = {
  name: "Rafael Souza",
  role: "Editor de Trabalho, Carreira e Renda",
  bio: "Especialista em legislação trabalhista e renda do trabalhador, cobre FGTS, abono salarial, eSocial e Carteira de Trabalho Digital desde 2013. Formado em Direito, dedica-se a explicar direitos previdenciários e trabalhistas em linguagem acessível.",
};

export const posts: Post[] = [
  {
    slug: "calendario-bolsa-familia-2026",
    category: "Benefícios",
    categorySlug: "beneficios",
    title:
      "Calendário Bolsa Família 2026: datas de pagamento mês a mês, valores e como consultar pelo NIS",
    seoTitle:
      "Calendário Bolsa Família 2026: Datas, Valores e Como Consultar",
    metaDescription:
      "Veja o calendário do Bolsa Família 2026 mês a mês pelo final do NIS, valores atualizados, regras do CadÚnico e como consultar o pagamento pelo Caixa Tem.",
    excerpt:
      "Datas de pagamento por final do NIS, valores por composição familiar, regras de permanência e o passo a passo para consultar o benefício sem sair de casa.",
    keywords: [
      "calendário bolsa família 2026",
      "bolsa família 2026",
      "calendário do bolsa família",
      "quando sai o calendário do bolsa família 2026",
      "consultar bolsa família pelo NIS",
      "valor do bolsa família 2026",
      "caixa tem bolsa família",
      "cadúnico atualização cadastral",
    ],
    tags: [
      "Bolsa Família",
      "CadÚnico",
      "Caixa Tem",
      "NIS",
      "Benefícios sociais",
      "Renda familiar",
    ],
    author: ANA,
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    publishedLabel: "07 Ago 2026",
    readTime: "13 min",
    cover: {
      src: bolsaCapa,
      alt: "Mulher brasileira sorrindo na cozinha segurando celular com o aplicativo do Bolsa Família ao lado do título Calendário Bolsa Família 2026",
      caption:
        "O calendário do Bolsa Família segue os dez últimos dias úteis de cada mês, com pagamento escalonado pelo final do NIS. Foto: Maracatu Brasil.",
    },
    blocks: [
      {
        t: "p",
        html: "Todo mês, mais de 20 milhões de famílias brasileiras abrem o celular com a mesma pergunta na cabeça: <strong>em que dia cai o meu Bolsa Família?</strong> A resposta parece simples, mas envolve uma engrenagem que combina o final do seu Número de Identificação Social (NIS), o cronograma da Caixa Econômica Federal e a situação do seu cadastro no CadÚnico. Quando qualquer uma dessas peças sai do lugar, o dinheiro atrasa — ou pior, deixa de entrar.",
      },
      {
        t: "p",
        html: "Este guia reúne, em um único lugar, o <strong>calendário do Bolsa Família 2026</strong> mês a mês, os valores que compõem o benefício em 2026, as regras de permanência que a maioria das famílias desconhece e o passo a passo para consultar o pagamento pelo aplicativo. Também explicamos o que fazer quando o valor vem menor do que o esperado, quando o benefício aparece bloqueado e como funciona a chamada Regra de Proteção para quem conseguiu emprego formal.",
      },
      {
        t: "callout",
        tone: "info",
        title: "Resposta rápida",
        html: "O Bolsa Família é pago nos <strong>dez últimos dias úteis de cada mês</strong>, de forma escalonada: quem tem NIS com final 1 recebe primeiro e quem tem final 0 recebe por último. Em municípios em situação de calamidade reconhecida pelo governo federal, todo o grupo recebe em um único dia, no primeiro dia do calendário.",
      },
      { t: "h2", text: "Como funciona o calendário do Bolsa Família em 2026" },
      {
        t: "p",
        html: "A lógica do calendário não mudou em 2026 e é bastante previsível — o que permite planejar o orçamento doméstico com semanas de antecedência. A Caixa distribui os pagamentos ao longo dos <strong>dez últimos dias úteis do mês</strong>, e cada dia corresponde a um dígito final do NIS, o número que aparece no Cartão Cidadão e no aplicativo. Feriados nacionais e fins de semana não entram na contagem, o que faz as datas variarem alguns dias de um mês para o outro.",
      },
      {
        t: "p",
        html: "Esse escalonamento existe por um motivo prático: evitar que dezenas de milhões de saques aconteçam no mesmo dia, o que sobrecarregaria agências, lotéricas e caixas eletrônicos. Na prática, quem recebe pelo <strong>Caixa Tem</strong> vê o saldo disponível já na madrugada da data prevista, sem precisar enfrentar fila.",
      },
      { t: "h3", text: "Ordem de pagamento por final do NIS" },
      {
        t: "table",
        caption:
          "Posição de cada final de NIS dentro dos dez últimos dias úteis do mês.",
        head: ["Final do NIS", "Posição no calendário"],
        rows: [
          ["1", "1º dia útil do calendário"],
          ["2", "2º dia útil do calendário"],
          ["3", "3º dia útil do calendário"],
          ["4", "4º dia útil do calendário"],
          ["5", "5º dia útil do calendário"],
          ["6", "6º dia útil do calendário"],
          ["7", "7º dia útil do calendário"],
          ["8", "8º dia útil do calendário"],
          ["9", "9º dia útil do calendário"],
          ["0", "10º e último dia útil do calendário"],
        ],
      },
      {
        t: "h2",
        text: "Calendário Bolsa Família 2026: datas previstas mês a mês",
      },
      {
        t: "p",
        html: "A tabela abaixo organiza as datas de pagamento previstas para o segundo semestre de 2026, aplicando a regra dos dez últimos dias úteis e descontando os feriados nacionais. É a mesma metodologia usada oficialmente pela Caixa. Salve esta página nos favoritos: atualizamos o conteúdo sempre que o Ministério do Desenvolvimento e Assistência Social publica o cronograma consolidado.",
      },
      {
        t: "table",
        caption:
          "Datas previstas de crédito do Bolsa Família por final de NIS — agosto a dezembro de 2026.",
        head: ["Final do NIS", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        rows: [
          ["1", "18/08", "17/09", "19/10", "16/11", "17/12"],
          ["2", "19/08", "18/09", "20/10", "17/11", "18/12"],
          ["3", "20/08", "21/09", "21/10", "18/11", "21/12"],
          ["4", "21/08", "22/09", "22/10", "19/11", "22/12"],
          ["5", "24/08", "23/09", "23/10", "23/11", "23/12"],
          ["6", "25/08", "24/09", "26/10", "24/11", "24/12"],
          ["7", "26/08", "25/09", "27/10", "25/11", "28/12"],
          ["8", "27/08", "28/09", "28/10", "26/11", "29/12"],
          ["9", "28/08", "29/09", "29/10", "27/11", "30/12"],
          ["0", "31/08", "30/09", "30/10", "30/11", "31/12"],
        ],
      },
      {
        t: "callout",
        tone: "tip",
        title: "Dica de organização financeira",
        html: "Se o seu vencimento de contas de água, luz e internet costuma cair antes da data do benefício, ligue para a concessionária e peça a alteração da data de vencimento. É um pedido gratuito, permitido por regulação, e evita multa por atraso — uma economia silenciosa que pode passar de R$ 200 por ano.",
      },
      { t: "h3", text: "Quando o pagamento é antecipado" },
      {
        t: "p",
        html: "Existem duas situações em que a data muda. A primeira é a <strong>calamidade pública reconhecida pelo governo federal</strong>: nesses municípios, todas as famílias recebem no primeiro dia do calendário, independentemente do NIS. A segunda envolve o mês de dezembro, quando o governo costuma comprimir o cronograma para que ninguém receba depois do dia 31. Fora esses casos, a antecipação geral é rara e qualquer mensagem prometendo “liberação antecipada mediante cadastro” deve ser tratada como golpe.",
      },
      {
        t: "image",
        src: bolsaCorpo,
        alt: "Beneficiária consultando o aplicativo do banco em agência da Caixa Econômica Federal enquanto outras pessoas usam caixas eletrônicos",
        caption:
          "Consultar o saldo pelo aplicativo antes de sair de casa evita filas e reduz o risco de golpes em terminais de autoatendimento. Foto: Maracatu Brasil.",
      },
      { t: "h2", text: "Valores do Bolsa Família em 2026: como o cálculo é montado" },
      {
        t: "p",
        html: "Um erro comum é imaginar que o Bolsa Família paga um valor fixo igual para todo mundo. Na verdade, o benefício é <strong>modular</strong>: soma-se uma série de parcelas conforme a composição da família, e sobre esse total incide a garantia de piso por pessoa. Entender essa estrutura é o que permite prever quanto sua família deve receber e identificar rapidamente quando algo está errado.",
      },
      {
        t: "table",
        caption: "Composição do benefício em 2026 (valores por família ou por integrante).",
        head: ["Parcela", "A quem se destina", "Valor de referência"],
        rows: [
          [
            "Benefício de Renda de Cidadania",
            "Todos os integrantes da família",
            "R$ 142 por pessoa",
          ],
          [
            "Benefício Complementar",
            "Famílias cuja soma não atinge o piso",
            "Complemento até R$ 600 por família",
          ],
          [
            "Benefício Primeira Infância",
            "Cada criança de 0 a 6 anos",
            "R$ 150 por criança",
          ],
          [
            "Benefício Variável Familiar",
            "Gestantes, nutrizes e pessoas de 7 a 18 anos",
            "R$ 50 por integrante",
          ],
          [
            "Benefício Variável Nutriz",
            "Bebês de até 6 meses",
            "R$ 50 por bebê",
          ],
        ],
      },
      {
        t: "p",
        html: "Na prática, o piso de <strong>R$ 600 por família</strong> funciona como um chão: nenhuma família elegível recebe menos que isso. A partir daí, os adicionais empilham. Uma família com dois adultos, uma criança de 3 anos e um adolescente de 15 anos, por exemplo, recebe os R$ 600 de piso somados a R$ 150 da primeira infância e R$ 50 do variável familiar, chegando a R$ 800 mensais.",
      },
      { t: "h3", text: "Exemplo prático de cálculo" },
      {
        t: "ol",
        items: [
          "Família com 5 pessoas: R$ 142 × 5 = R$ 710 (já supera o piso de R$ 600).",
          "Duas crianças de 2 e 5 anos: + R$ 300 (Primeira Infância).",
          "Uma adolescente de 16 anos: + R$ 50 (Variável Familiar).",
          "Total mensal estimado: <strong>R$ 1.060</strong>, depositado em parcela única na data do NIS.",
        ],
      },
      {
        t: "callout",
        tone: "warn",
        title: "Atenção ao valor menor que o esperado",
        html: "Se o depósito veio abaixo do previsto, verifique três pontos antes de ir a um posto de atendimento: se houve <strong>desconto por consignado do Bolsa Família</strong>, se algum integrante saiu do cadastro por falta de atualização e se a família entrou na Regra de Proteção, que paga 50% do valor original.",
      },
      { t: "h2", text: "Quem tem direito ao Bolsa Família em 2026" },
      {
        t: "p",
        html: "O critério central continua sendo a <strong>renda familiar mensal por pessoa de até R$ 218</strong>. O cálculo considera todos os rendimentos formais e informais divididos pelo número de moradores da mesma residência. Aposentadorias, pensões, seguro-desemprego e salários entram na conta; benefícios do próprio programa e o BPC/LOAS, não. Você pode entender melhor as diferenças entre esses programas no nosso verbete sobre <a href=\"/glossario/o-que-e-bpc-loas\">BPC/LOAS</a>.",
      },
      {
        t: "p",
        html: "Além da renda, existe um requisito que costuma passar despercebido: a família precisa estar <strong>inscrita e com dados atualizados no CadÚnico</strong>, com atualização a cada 24 meses ou sempre que houver mudança de endereço, renda, composição familiar ou escola das crianças. Nosso guia sobre o <a href=\"/glossario/o-que-e-cadunico\">CadÚnico</a> detalha os documentos exigidos e o passo a passo nos CRAS.",
      },
      { t: "h3", text: "Condicionalidades de saúde e educação" },
      {
        t: "ul",
        items: [
          "<strong>Frequência escolar:</strong> mínimo de 60% para crianças de 4 e 5 anos e 75% para estudantes de 6 a 18 anos.",
          "<strong>Vacinação:</strong> caderneta em dia para todas as crianças da família.",
          "<strong>Acompanhamento nutricional:</strong> pesagem e medição periódicas de crianças até 7 anos.",
          "<strong>Pré-natal:</strong> consultas em dia para gestantes cadastradas.",
        ],
      },
      {
        t: "p",
        html: "O descumprimento não gera corte imediato. O fluxo começa com advertência, passa por bloqueio de uma parcela, depois suspensão e, apenas na reincidência prolongada, chega ao cancelamento. Cada etapa tem prazo para regularização, normalmente comunicada por mensagem no aplicativo e pelo CRAS do município.",
      },
      { t: "h2", text: "Regra de Proteção: o que acontece quando a renda aumenta" },
      {
        t: "p",
        html: "Muita gente evita registrar um emprego com carteira assinada por medo de perder o benefício — e essa é uma das maiores fontes de prejuízo silencioso entre beneficiários. A <strong>Regra de Proteção</strong> foi criada exatamente para eliminar esse dilema. Quando a renda por pessoa ultrapassa R$ 218, mas fica abaixo de meio salário mínimo por pessoa, a família continua recebendo <strong>50% do valor do benefício por até dois anos</strong>.",
      },
      {
        t: "p",
        html: "É uma ponte de transição: o trabalhador soma o salário formal com metade do benefício, ganha acesso a FGTS, INSS e seguro-desemprego, e ainda mantém a rede de proteção enquanto se estabiliza. Se quiser entender como o trabalho formal amplia sua proteção previdenciária, vale conferir nosso conteúdo sobre a <a href=\"/glossario/o-que-e-carteira-de-trabalho-digital\">Carteira de Trabalho Digital</a>.",
      },
      {
        t: "quote",
        html: "Deixar de assinar carteira para “não perder o Bolsa Família” costuma custar mais caro do que o próprio benefício: o trabalhador abre mão de FGTS, tempo de contribuição para a aposentadoria e direito ao seguro-desemprego.",
        cite: "Ana Ribeiro, editora de Benefícios do Maracatu Brasil",
      },
      { t: "h2", text: "Como consultar o Bolsa Família pelo NIS: 4 caminhos oficiais" },
      { t: "h3", text: "1. Aplicativo Bolsa Família" },
      {
        t: "p",
        html: "É o canal mais completo. Após o login com a conta <strong>gov.br</strong>, o app mostra a data do próximo pagamento, o valor por parcela, o histórico dos últimos meses e eventuais pendências de cadastro. Nossa recomendação: ative as notificações para receber avisos de bloqueio antes que o pagamento seja suspenso.",
      },
      { t: "h3", text: "2. Caixa Tem" },
      {
        t: "p",
        html: "O <strong>Caixa Tem</strong> é a conta digital onde o dinheiro é depositado. Ali você paga boletos, faz Pix, gera cartão virtual para compras online e transfere para outra conta sem tarifa. O saque em espécie exige a geração de um código no próprio aplicativo, usado em lotéricas e caixas eletrônicos.",
      },
      { t: "h3", text: "3. Central telefônica 121" },
      {
        t: "p",
        html: "Gratuita, atende de segunda a sexta e resolve consultas simples de data e valor. Tenha o NIS em mãos. Para quem não tem smartphone, é o caminho mais rápido.",
      },
      { t: "h3", text: "4. CRAS do município" },
      {
        t: "p",
        html: "O Centro de Referência de Assistência Social é o único lugar que resolve pendências cadastrais, inclui novos integrantes e corrige renda declarada. Leve documento com foto, CPF, comprovante de residência e comprovantes de renda de todos os moradores.",
      },
      {
        t: "callout",
        tone: "warn",
        title: "Cuidado com golpes",
        html: "Nenhum órgão oficial cobra taxa para liberar, antecipar ou desbloquear benefício, e nenhum atendente pede senha do Caixa Tem ou código enviado por SMS. Links recebidos por WhatsApp prometendo “parcela extra” são a principal porta de entrada de fraudes contra beneficiários.",
      },
      { t: "h2", text: "Bolsa Família bloqueado, suspenso ou cancelado: o que significa" },
      {
        t: "table",
        caption: "Diferença entre as três situações e o caminho de regularização.",
        head: ["Situação", "O que aconteceu", "Como resolver"],
        rows: [
          [
            "Bloqueado",
            "Pagamento retido por inconsistência cadastral ou averiguação de renda",
            "Atualizar o CadÚnico no CRAS; o valor retido costuma ser liberado retroativamente",
          ],
          [
            "Suspenso",
            "Descumprimento de condicionalidade ou pendência não resolvida no prazo",
            "Regularizar a pendência (escola, vacina, cadastro) e aguardar a próxima folha de pagamento",
          ],
          [
            "Cancelado",
            "Renda acima do limite, reincidência ou saída voluntária",
            "Fazer nova inscrição no CadÚnico e aguardar seleção; há prioridade para retorno em até 36 meses",
          ],
        ],
      },
      { t: "h2", text: "Consignado do Bolsa Família: vale a pena?" },
      {
        t: "p",
        html: "O crédito consignado com desconto direto na parcela do benefício permite comprometer até 5% do valor mensal, com juros limitados por norma. Para uma emergência médica ou a compra de um equipamento de trabalho, pode fazer sentido. Para consumo corrente, quase nunca: a parcela reduz o dinheiro disponível justamente no orçamento mais apertado.",
      },
      {
        t: "ul",
        items: [
          "<strong>Compare o Custo Efetivo Total (CET)</strong>, não apenas a taxa mensal anunciada.",
          "Simule o impacto: 5% de R$ 800 são R$ 40 a menos todo mês, por até 24 meses.",
          "Avalie antes alternativas de menor custo, como negociação direta de dívidas ou linhas de microcrédito produtivo orientado.",
          "Desconfie de correspondentes bancários que oferecem o crédito por telefone sem contrato formal.",
        ],
      },
      {
        t: "p",
        html: "Se a sua prioridade agora é organizar as contas antes de pensar em crédito, o conteúdo sobre <a href=\"/glossario/o-que-e-educacao-financeira\">educação financeira</a> traz um método simples de orçamento para quem vive com renda variável.",
      },
      { t: "h2", text: "Erros que mais fazem famílias perderem o benefício" },
      {
        t: "ol",
        items: [
          "Deixar o CadÚnico vencer por mais de 24 meses sem atualização.",
          "Não comunicar mudança de endereço — o município deixa de localizar a família nas averiguações.",
          "Manter no cadastro pessoas que já não moram na residência, o que distorce a renda per capita.",
          "Ignorar as mensagens de advertência do aplicativo, que antecedem bloqueios.",
          "Não registrar a matrícula escolar das crianças na rede pública ou não informar transferências de escola.",
          "Sacar o dinheiro sempre em espécie e perder o histórico de movimentação que facilita comprovações futuras.",
        ],
      },
      { t: "h2", text: "Como planejar o orçamento com o benefício" },
      {
        t: "p",
        html: "Com data previsível e valor estável, o Bolsa Família permite um planejamento razoável. Uma divisão que funciona bem para famílias de baixa renda é a regra 60-20-20: 60% para despesas essenciais (alimentação, moradia, transporte), 20% para contas fixas e 20% para uma reserva mínima, mesmo que sejam R$ 30 por mês guardados no próprio Caixa Tem, que remunera o saldo automaticamente.",
      },
      {
        t: "p",
        html: "Duas medidas complementares aumentam o poder de compra sem exigir renda adicional: solicitar a <strong>Tarifa Social de Energia Elétrica</strong>, que hoje é concedida automaticamente a boa parte das famílias do CadÚnico, e verificar o direito ao <strong>Auxílio Gás</strong>, pago a cada dois meses.",
      },
      { t: "h2", text: "Fontes oficiais para acompanhar o calendário" },
      {
        t: "p",
        html: "Sempre confirme datas e valores em canais governamentais. Os mais confiáveis são o <a href=\"https://www.gov.br/mds/pt-br\" target=\"_blank\" rel=\"noopener nofollow\">Ministério do Desenvolvimento e Assistência Social</a>, a página oficial da <a href=\"https://www.caixa.gov.br/programas-sociais/bolsa-familia\" target=\"_blank\" rel=\"noopener nofollow\">Caixa Econômica Federal</a> e o <a href=\"https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia\" target=\"_blank\" rel=\"noopener nofollow\">Portal Gov.br</a>, que concentra o serviço digital de consulta.",
      },
      { t: "h2", text: "Conclusão" },
      {
        t: "p",
        html: "O calendário do Bolsa Família 2026 é previsível o suficiente para virar ferramenta de planejamento, e não fonte de ansiedade. Guarde a data correspondente ao final do seu NIS, mantenha o CadÚnico atualizado, acompanhe as condicionalidades de saúde e educação e use o aplicativo como primeiro canal de consulta. Se a renda da família aumentar, lembre-se de que a Regra de Proteção existe justamente para que o trabalho formal seja um ganho, nunca uma perda.",
      },
    ],
    faqs: [
      {
        q: "Quando sai o calendário do Bolsa Família 2026?",
        a: "O cronograma anual costuma ser divulgado pela Caixa e pelo Ministério do Desenvolvimento e Assistência Social ainda no fim do ano anterior. Mesmo antes da publicação, é possível prever as datas: o pagamento ocorre nos dez últimos dias úteis de cada mês, começando pelo NIS de final 1.",
      },
      {
        q: "Qual o valor mínimo do Bolsa Família em 2026?",
        a: "O piso é de R$ 600 por família. A esse valor somam-se R$ 150 por criança de 0 a 6 anos e R$ 50 por gestante, nutriz ou integrante de 7 a 18 anos, o que faz o valor final variar bastante conforme a composição familiar.",
      },
      {
        q: "Como consultar o Bolsa Família pelo NIS?",
        a: "Use o aplicativo Bolsa Família ou o Caixa Tem, fazendo login com a conta gov.br. Também é possível consultar pelo telefone 121 ou presencialmente no CRAS. Todos esses canais são gratuitos.",
      },
      {
        q: "Recebi menos do que o esperado. O que pode ter acontecido?",
        a: "As causas mais comuns são desconto de consignado, saída de um integrante do cadastro, atualização de renda declarada ou entrada da família na Regra de Proteção, que paga 50% do valor por até dois anos.",
      },
      {
        q: "Quem trabalha de carteira assinada perde o Bolsa Família?",
        a: "Não necessariamente. Se a renda por pessoa passar de R$ 218 mas ficar abaixo de meio salário mínimo por pessoa, a família permanece no programa recebendo metade do valor por até 24 meses, pela Regra de Proteção.",
      },
      {
        q: "O que fazer se o benefício aparecer bloqueado?",
        a: "Bloqueio quase sempre indica pendência cadastral. Agende atendimento no CRAS do seu município levando documentos de todos os moradores. Depois da regularização, os valores retidos costumam ser liberados retroativamente.",
      },
      {
        q: "É preciso atualizar o CadÚnico todo ano?",
        a: "A atualização obrigatória é a cada 24 meses, mas deve ser feita imediatamente sempre que houver mudança de endereço, renda, nascimento, óbito, casamento ou troca de escola das crianças.",
      },
      {
        q: "O Bolsa Família pode ser recebido em conta de outro banco?",
        a: "O crédito é feito na conta poupança social digital da Caixa, acessada pelo Caixa Tem. De lá, o beneficiário pode transferir o valor por Pix, sem tarifa, para qualquer conta em seu próprio nome.",
      },
      {
        q: "Existe parcela extra ou 13º do Bolsa Família?",
        a: "Não há 13º parcela prevista em lei nacional. Pagamentos extraordinários só ocorrem em situações específicas de calamidade, sempre anunciados em canais oficiais — mensagens por WhatsApp prometendo parcela extra são golpe.",
      },
    ],
    relatedGlossary: ["bolsa-familia", "cadunico", "caixa-tem", "auxilio-gas", "tarifa-social"],
    relatedArticles: [
      "bolsa-familia-calendario-pagamentos",
      "cadunico-atualizar-cadastro",
      "bpc-loas-quem-tem-direito",
      "auxilio-gas-consulta",
    ],
    references: [
      {
        title: "Ministério do Desenvolvimento e Assistência Social — Bolsa Família",
        href: "https://www.gov.br/mds/pt-br",
      },
      {
        title: "Caixa Econômica Federal — Programas Sociais",
        href: "https://www.caixa.gov.br/programas-sociais/bolsa-familia",
      },
      {
        title: "Portal Gov.br — Receber o Bolsa Família",
        href: "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
      },
    ],
  },

  {
    slug: "pis-pasep-2026-abono-salarial",
    category: "Trabalho",
    categorySlug: "trabalho",
    title:
      "PIS/Pasep 2026: quem tem direito ao abono salarial, valores por mês trabalhado e como consultar",
    seoTitle: "PIS/Pasep 2026: Quem Recebe, Valores e Calendário do Abono",
    metaDescription:
      "Confira quem tem direito ao PIS/Pasep 2026, o cálculo do abono salarial por mês trabalhado, o calendário de saque e como consultar pela Carteira de Trabalho Digital.",
    excerpt:
      "Regras de elegibilidade, tabela de valores proporcionais, calendário de saque por mês de nascimento e os erros de RH que mais deixam trabalhadores de fora.",
    keywords: [
      "pis pasep 2026",
      "abono salarial 2026",
      "calendário pis 2026",
      "quem tem direito ao pis 2026",
      "valor do abono salarial por mês trabalhado",
      "consultar pis pela carteira de trabalho digital",
      "saque pis caixa",
      "rais eSocial abono",
    ],
    tags: [
      "PIS/Pasep",
      "Abono salarial",
      "FGTS",
      "Carteira de Trabalho",
      "eSocial",
      "Renda do trabalhador",
    ],
    author: RAFAEL,
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    publishedLabel: "07 Ago 2026",
    readTime: "12 min",
    cover: {
      src: pisCapa,
      alt: "Trabalhador brasileiro de uniforme azul consultando o celular ao lado do título PIS/Pasep 2026 — Abono salarial: quem recebe e quanto",
      caption:
        "O abono salarial pode chegar a um salário mínimo integral para quem trabalhou os 12 meses do ano-base. Foto: Maracatu Brasil.",
    },
    blocks: [
      {
        t: "p",
        html: "Todo ano, bilhões de reais do <strong>abono salarial PIS/Pasep</strong> ficam parados esperando serem sacados — dinheiro de trabalhador que simplesmente não sabia ter direito. O benefício é um dos poucos pagamentos anuais garantidos por Constituição a quem tem carteira assinada e ganha até dois salários mínimos, mas o desconhecimento sobre as regras faz milhares de pessoas perderem o prazo todos os anos.",
      },
      {
        t: "p",
        html: "Neste guia completo, você vai entender <strong>quem tem direito ao PIS/Pasep em 2026</strong>, como o valor é calculado mês a mês, qual é o calendário de saque, como consultar seu abono pela Carteira de Trabalho Digital e o que fazer quando o dinheiro não aparece por falha de declaração da empresa — a causa número um de bloqueio.",
      },
      {
        t: "callout",
        tone: "info",
        title: "Resposta rápida",
        html: "Tem direito ao abono salarial quem, no ano-base, esteve <strong>ao menos 30 dias com carteira assinada</strong>, recebeu em média até <strong>dois salários mínimos</strong> por mês, está inscrito no PIS/Pasep há pelo menos <strong>cinco anos</strong> e teve os dados informados corretamente pelo empregador no eSocial ou na RAIS. O valor é proporcional: 1/12 do salário mínimo por mês trabalhado.",
      },
      { t: "h2", text: "O que é o PIS/Pasep e por que ele existe" },
      {
        t: "p",
        html: "O PIS (Programa de Integração Social) atende trabalhadores da iniciativa privada e é operado pela Caixa Econômica Federal. O Pasep (Programa de Formação do Patrimônio do Servidor Público) atende servidores e empregados públicos, com pagamento pelo Banco do Brasil. Apesar da origem distinta, os dois compartilham hoje a mesma lógica de abono anual: distribuir uma renda extra a quem tem os menores salários no mercado formal.",
      },
      {
        t: "p",
        html: "É importante não confundir o abono com o <strong>saldo de cotas antigas</strong> do fundo PIS/Pasep, que se refere a depósitos feitos entre 1971 e 1988 e segue regras próprias de resgate. Também não se confunde com o <a href=\"/glossario/o-que-e-fgts\">FGTS</a>, que é um fundo formado por depósitos mensais do empregador na conta vinculada do trabalhador.",
      },
      { t: "h2", text: "Quem tem direito ao abono salarial em 2026" },
      {
        t: "p",
        html: "Os quatro requisitos são cumulativos — basta falhar em um para o pagamento não sair:",
      },
      {
        t: "ol",
        items: [
          "<strong>Inscrição há pelo menos cinco anos</strong> no PIS ou no Pasep (a data de cadastro aparece no extrato do FGTS e no app da Carteira de Trabalho Digital).",
          "<strong>Trabalho formal por no mínimo 30 dias</strong>, consecutivos ou não, durante o ano-base.",
          "<strong>Remuneração média mensal de até dois salários mínimos</strong> no ano-base, considerando a média dos meses trabalhados.",
          "<strong>Dados informados corretamente pelo empregador</strong> no eSocial (ou na antiga RAIS), dentro do prazo legal.",
        ],
      },
      {
        t: "callout",
        tone: "tip",
        title: "O detalhe que decide o direito",
        html: "A regra observa a <strong>média mensal</strong> da remuneração, não o salário do último mês. Quem foi promovido em novembro e passou dos dois salários mínimos ainda pode ter direito, se a média do ano tiver ficado dentro do limite. Vale conferir os valores no extrato do <a href=\"/glossario/o-que-e-cnis\">CNIS</a>.",
      },
      { t: "h3", text: "Quem fica de fora" },
      {
        t: "ul",
        items: [
          "Empregados domésticos com registro na categoria própria (não geram direito ao abono).",
          "Trabalhadores rurais contratados por pessoa física sem registro no eSocial.",
          "Microempreendedores individuais em relação à própria atividade — o <a href=\"/glossario/o-que-e-mei\">MEI</a> não recolhe PIS sobre pró-labore.",
          "Autônomos, contribuintes individuais e prestadores por RPA.",
          "Quem trabalhou menos de 30 dias no ano-base ou teve média acima de dois salários mínimos.",
        ],
      },
      {
        t: "image",
        src: pisCorpo,
        alt: "Trabalhador conferindo holerite ao lado da Carteira de Trabalho azul, calculadora e notebook aberto em portal de serviços do governo",
        caption:
          "Conferir os holerites do ano-base ajuda a calcular a média salarial e antecipar o valor do abono. Foto: Maracatu Brasil.",
      },
      { t: "h2", text: "Valor do PIS/Pasep 2026: tabela por meses trabalhados" },
      {
        t: "p",
        html: "O cálculo é direto: <strong>1/12 do salário mínimo vigente para cada mês trabalhado</strong> no ano-base. Frações a partir de 15 dias contam como mês cheio — um contrato iniciado em 10 de março, por exemplo, garante março inteiro no cálculo. Considerando um salário mínimo de referência de R$ 1.518, a tabela fica assim:",
      },
      {
        t: "table",
        caption:
          "Valor estimado do abono salarial conforme os meses trabalhados no ano-base (referência: salário mínimo de R$ 1.518).",
        head: ["Meses trabalhados", "Fração", "Valor estimado"],
        rows: [
          ["1 mês", "1/12", "R$ 127"],
          ["2 meses", "2/12", "R$ 253"],
          ["3 meses", "3/12", "R$ 380"],
          ["4 meses", "4/12", "R$ 506"],
          ["5 meses", "5/12", "R$ 633"],
          ["6 meses", "6/12", "R$ 759"],
          ["7 meses", "7/12", "R$ 886"],
          ["8 meses", "8/12", "R$ 1.012"],
          ["9 meses", "9/12", "R$ 1.139"],
          ["10 meses", "10/12", "R$ 1.265"],
          ["11 meses", "11/12", "R$ 1.392"],
          ["12 meses", "12/12", "R$ 1.518"],
        ],
      },
      {
        t: "p",
        html: "Os valores são arredondados e servem como referência de planejamento. O montante final depende do salário mínimo vigente no ano do pagamento — por isso, quem tem direito e não saca dentro do prazo acaba perdendo também a correção do período.",
      },
      { t: "h2", text: "Calendário de saque do abono salarial" },
      {
        t: "p",
        html: "No PIS, a ordem de pagamento segue o <strong>mês de nascimento</strong> do trabalhador; no Pasep, o <strong>dígito final da inscrição</strong>. Os depósitos costumam começar em fevereiro e se estender até o fim do primeiro semestre, com prazo final de saque em dezembro do mesmo exercício.",
      },
      {
        t: "table",
        caption: "Estrutura habitual do calendário do abono salarial (PIS — trabalhadores da iniciativa privada).",
        head: ["Mês de nascimento", "Período de liberação"],
        rows: [
          ["Janeiro e fevereiro", "A partir de fevereiro"],
          ["Março e abril", "A partir de março"],
          ["Maio e junho", "A partir de abril"],
          ["Julho e agosto", "A partir de maio"],
          ["Setembro e outubro", "A partir de junho"],
          ["Novembro e dezembro", "A partir de julho"],
        ],
      },
      {
        t: "callout",
        tone: "warn",
        title: "O prazo que faz o dinheiro voltar para a União",
        html: "O abono não sacado dentro do exercício de pagamento retorna ao Fundo de Amparo ao Trabalhador. Depois disso, o resgate se torna trabalhoso e, em muitos casos, definitivamente perdido. Se você mudou de banco, endereço ou telefone, confira o extrato antes do fim do ano.",
      },
      { t: "h2", text: "Como consultar o PIS/Pasep 2026 passo a passo" },
      { t: "h3", text: "Pela Carteira de Trabalho Digital" },
      {
        t: "ol",
        items: [
          "Abra o aplicativo e faça login com a conta gov.br (nível prata ou ouro).",
          "Toque em “Benefícios” e depois em “Abono salarial”.",
          "Confira a situação: “apto”, “inapto” ou “em processamento”.",
          "Se estiver apto, o app informa a data de liberação e o valor exato.",
        ],
      },
      { t: "h3", text: "Pelo aplicativo Caixa Trabalhador ou Caixa Tem" },
      {
        t: "p",
        html: "Para trabalhadores da iniciativa privada, a Caixa deposita automaticamente em conta corrente, poupança ou na conta digital do <a href=\"/glossario/o-que-e-caixa-tem\">Caixa Tem</a>. Quem não tem conta na instituição recebe em poupança social digital aberta automaticamente — sem tarifa e com Pix liberado.",
      },
      { t: "h3", text: "Pelo Banco do Brasil (Pasep)" },
      {
        t: "p",
        html: "Servidores públicos consultam pelo aplicativo ou pelas agências do Banco do Brasil, informando o número de inscrição no Pasep. Se houver conta ativa na instituição, o crédito é automático.",
      },
      { t: "h3", text: "Pela Central Alô Trabalho 158" },
      {
        t: "p",
        html: "Canal telefônico gratuito do Ministério do Trabalho e Emprego, útil para confirmar situação cadastral e orientar sobre pendências de declaração do empregador.",
      },
      { t: "h2", text: "Quando o abono não sai: como resolver a falha do empregador" },
      {
        t: "p",
        html: "A causa mais comum de negativa não é falta de direito — é <strong>informação incorreta ou ausente no eSocial</strong>. Se a empresa deixou de declarar o vínculo, informou remuneração errada ou registrou data de admissão equivocada, o sistema simplesmente não reconhece o trabalhador como apto.",
      },
      {
        t: "ol",
        items: [
          "Confira no app da Carteira de Trabalho Digital se o vínculo e as remunerações do ano-base aparecem corretamente.",
          "Se houver divergência, peça formalmente ao RH a retificação no <a href=\"/glossario/o-que-e-esocial\">eSocial</a>, por e-mail, guardando o protocolo.",
          "Sem resposta em 30 dias, registre reclamação na Secretaria do Trabalho pelo portal Gov.br.",
          "Persistindo o problema, procure o sindicato da categoria ou a Defensoria Pública da União para orientação gratuita.",
        ],
      },
      {
        t: "quote",
        html: "A empresa é obrigada a manter as informações do eSocial corretas e atualizadas. Quando o abono não é pago por erro de declaração, o trabalhador tem direito à retificação retroativa — e, em alguns casos, à reparação pelo prejuízo.",
        cite: "Rafael Souza, editor de Trabalho do Maracatu Brasil",
      },
      { t: "h2", text: "PIS/Pasep, FGTS e seguro-desemprego: quem é quem" },
      {
        t: "table",
        caption: "Comparativo entre os três principais direitos financeiros do trabalhador formal.",
        head: ["Benefício", "Origem do dinheiro", "Periodicidade", "Condição principal"],
        rows: [
          [
            "Abono PIS/Pasep",
            "Fundo de Amparo ao Trabalhador",
            "Anual",
            "Média de até 2 salários mínimos no ano-base",
          ],
          [
            "FGTS",
            "Depósito mensal do empregador (8% do salário)",
            "Acumulado, com saques em situações previstas",
            "Vínculo formal ativo ou encerrado",
          ],
          [
            "Seguro-desemprego",
            "Fundo de Amparo ao Trabalhador",
            "Parcelas após demissão sem justa causa",
            "Tempo mínimo de vínculo conforme a solicitação",
          ],
        ],
      },
      {
        t: "p",
        html: "Vale lembrar que quem foi demitido no ano-base continua com direito ao abono referente aos meses trabalhados. Se você está nessa situação, o guia sobre <a href=\"/glossario/o-que-e-seguro-desemprego\">seguro-desemprego</a> ajuda a organizar prazos e evitar sobreposição de pedidos.",
      },
      { t: "h2", text: "O que fazer com o dinheiro do abono: 5 usos inteligentes" },
      {
        t: "ol",
        items: [
          "<strong>Quitar dívidas de juros altos primeiro.</strong> Cartão rotativo e cheque especial superam facilmente 300% ao ano — nenhum investimento acompanha esse custo.",
          "<strong>Antecipar parcelas de financiamento.</strong> Na amortização, exija o abatimento dos juros futuros e prefira reduzir o prazo em vez do valor da parcela.",
          "<strong>Montar reserva de emergência.</strong> Um abono integral já cobre cerca de um mês de despesas básicas de muitas famílias.",
          "<strong>Investir com liquidez.</strong> Produtos atrelados ao CDI com resgate diário mantêm o dinheiro acessível e protegido pelo FGC.",
          "<strong>Investir em qualificação profissional.</strong> Cursos técnicos e certificações costumam ter o melhor retorno de longo prazo para quem ganha até dois salários mínimos.",
        ],
      },
      {
        t: "callout",
        tone: "tip",
        title: "Antes de contratar crédito consignado",
        html: "Muitos bancos oferecem empréstimo com desconto em folha logo após o depósito do abono. Se a intenção é quitar dívidas caras, compare o Custo Efetivo Total do consignado com a taxa da dívida atual — a troca só compensa quando a diferença é significativa e o prazo não se alonga demais.",
      },
      { t: "h2", text: "Fontes oficiais e onde acompanhar atualizações" },
      {
        t: "p",
        html: "As regras do abono são definidas pelo Conselho Deliberativo do Fundo de Amparo ao Trabalhador. Consulte sempre o <a href=\"https://www.gov.br/trabalho-e-emprego/pt-br\" target=\"_blank\" rel=\"noopener nofollow\">Ministério do Trabalho e Emprego</a>, a página do <a href=\"https://www.caixa.gov.br/beneficios-trabalhador/abono-salarial\" target=\"_blank\" rel=\"noopener nofollow\">abono salarial na Caixa Econômica Federal</a> e o serviço digital no <a href=\"https://www.gov.br/pt-br/servicos/consultar-o-abono-salarial\" target=\"_blank\" rel=\"noopener nofollow\">Portal Gov.br</a>.",
      },
      { t: "h2", text: "Conclusão" },
      {
        t: "p",
        html: "O abono salarial é um direito silencioso: ninguém liga avisando que o dinheiro está disponível. Cabe ao trabalhador conferir a Carteira de Trabalho Digital uma vez por ano, confirmar se o empregador declarou tudo corretamente e sacar dentro do prazo. Com poucos minutos de conferência, o que hoje volta para a União pode virar reserva de emergência, quitação de dívida cara ou um curso que amplia a renda de forma permanente.",
      },
    ],
    faqs: [
      {
        q: "Quem tem direito ao PIS/Pasep 2026?",
        a: "Trabalhadores inscritos no PIS/Pasep há pelo menos cinco anos, que tenham trabalhado no mínimo 30 dias com carteira assinada no ano-base, com média salarial de até dois salários mínimos e dados corretamente declarados pelo empregador no eSocial.",
      },
      {
        q: "Qual é o valor do abono salarial em 2026?",
        a: "O valor é proporcional aos meses trabalhados: 1/12 do salário mínimo por mês. Quem trabalhou os 12 meses do ano-base recebe o salário mínimo integral; quem trabalhou 6 meses recebe cerca de metade.",
      },
      {
        q: "Como consultar se tenho direito ao PIS?",
        a: "Pelo aplicativo Carteira de Trabalho Digital, na aba de benefícios, com login gov.br. Também é possível consultar no app da Caixa (PIS), no Banco do Brasil (Pasep) ou pela Central Alô Trabalho 158.",
      },
      {
        q: "Quem foi demitido durante o ano tem direito ao abono?",
        a: "Sim. O direito é calculado sobre os meses efetivamente trabalhados no ano-base, mesmo que o contrato tenha sido encerrado antes do fim do ano.",
      },
      {
        q: "Empregado doméstico recebe PIS?",
        a: "Não. A categoria de empregado doméstico não gera direito ao abono salarial, embora garanta FGTS, INSS e demais direitos trabalhistas previstos na legislação específica.",
      },
      {
        q: "O que fazer se o abono não foi pago?",
        a: "Verifique no app da Carteira de Trabalho Digital se o vínculo aparece corretamente. Erros de declaração no eSocial são a principal causa. Peça a retificação ao RH por escrito e, se necessário, registre reclamação na Secretaria do Trabalho pelo Gov.br.",
      },
      {
        q: "Até quando posso sacar o abono salarial?",
        a: "O prazo termina no fim do exercício de pagamento, normalmente em dezembro. Após esse período, o valor retorna ao Fundo de Amparo ao Trabalhador e o resgate se torna muito mais difícil.",
      },
      {
        q: "PIS e FGTS são a mesma coisa?",
        a: "Não. O PIS é um abono anual pago pelo Fundo de Amparo ao Trabalhador a quem ganha até dois salários mínimos. O FGTS é um fundo formado por depósitos mensais do empregador, sacável em situações específicas como demissão sem justa causa e compra de imóvel.",
      },
      {
        q: "Quem é MEI tem direito ao abono salarial?",
        a: "Não pela atividade como microempreendedor individual. Porém, se a pessoa também teve vínculo com carteira assinada no ano-base e cumpriu os demais requisitos, o direito existe em relação a esse emprego formal.",
      },
    ],
    relatedGlossary: ["pis-pasep", "abono-salarial-pis", "fgts", "esocial", "carteira-de-trabalho-digital"],
    relatedArticles: [
      "pis-pasep-calendario",
      "fgts-saque-aniversario-2027",
      "carteira-trabalho-digital-atualizar",
      "seguro-desemprego-parcelas",
    ],
    references: [
      {
        title: "Ministério do Trabalho e Emprego — Abono Salarial",
        href: "https://www.gov.br/trabalho-e-emprego/pt-br",
      },
      {
        title: "Caixa Econômica Federal — Abono Salarial PIS",
        href: "https://www.caixa.gov.br/beneficios-trabalhador/abono-salarial",
      },
      {
        title: "Portal Gov.br — Consultar o Abono Salarial",
        href: "https://www.gov.br/pt-br/servicos/consultar-o-abono-salarial",
      },
    ],
  },
  impostoRenda2026,
  aposentadoriaInss2026,
  seguroDesemprego2026,
  bpcLoas2026,
  fgtsSaqueAniversario2026,
  minhaCasaMinhaVida2026,
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postUrl(p: Pick<Post, "categorySlug" | "slug">) {
  return `/${p.categorySlug}/${p.slug}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
