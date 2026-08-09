import type { Post } from "./posts";
import capa from "@/assets/bpc-loas-2026-capa.jpg";
import corpo from "@/assets/bpc-loas-2026-corpo.jpg";

const ANA = {
  name: "Ana Ribeiro",
  role: "Editora de Benefícios e Políticas Sociais",
  bio: "Jornalista com 12 anos de cobertura de programas sociais, CadÚnico e INSS. Acompanha diariamente as publicações do Diário Oficial da União, do Ministério do Desenvolvimento e Assistência Social e da Caixa Econômica Federal para traduzir regras técnicas em orientações práticas para o leitor.",
};

export const bpcLoas2026: Post = {
  slug: "bpc-loas-2026-quem-tem-direito-valor-como-solicitar",
  category: "Benefícios",
  categorySlug: "beneficios",
  title:
    "BPC/LOAS 2026: quem tem direito, valor do benefício, renda por pessoa e como solicitar pelo Meu INSS",
  seoTitle: "BPC/LOAS 2026: Quem Tem Direito, Valor e Como Solicitar",
  metaDescription:
    "Entenda o BPC/LOAS em 2026: quem tem direito, limite de renda por pessoa, valor do benefício, avaliação médica e social, documentos e o passo a passo do pedido.",
  excerpt:
    "Critérios para idosos e pessoas com deficiência, cálculo da renda familiar, papel do CadÚnico, avaliação biopsicossocial, prazos, revisão bienal e motivos de bloqueio.",
  keywords: [
    "bpc loas 2026",
    "quem tem direito ao bpc loas",
    "valor do bpc 2026",
    "bpc loas renda por pessoa",
    "como solicitar bpc pelo meu inss",
    "bpc deficiência avaliação social",
    "bpc idoso 65 anos",
    "cadunico bpc atualização",
  ],
  tags: [
    "BPC",
    "LOAS",
    "INSS",
    "CadÚnico",
    "Assistência Social",
    "Pessoa com Deficiência",
  ],
  author: ANA,
  publishedAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publishedLabel: "09 Ago 2026",
  readTime: "18 min",
  cover: {
    src: capa,
    alt: "Idosa brasileira e sua filha consultando o aplicativo Meu INSS em um tablet na sala de casa para pedir o BPC/LOAS",
    caption:
      "O requerimento do BPC pode ser iniciado pelo Meu INSS, mas depende de um CadÚnico atualizado nos últimos dois anos. Foto: Maracatu Brasil.",
  },
  blocks: [
    {
      t: "p",
      html: "Existe um benefício no Brasil que não exige nenhuma contribuição ao INSS e ainda assim garante uma renda mensal de um salário mínimo: o <strong>Benefício de Prestação Continuada</strong>, conhecido pela sigla BPC ou pelo nome da lei que o criou, a LOAS. Ele é um dos pilares da proteção social brasileira e, ao mesmo tempo, um dos mais mal compreendidos — parte dos pedidos é negada por questões que poderiam ser resolvidas antes do requerimento.",
    },
    {
      t: "p",
      html: "O BPC não é aposentadoria. Não gera 13º salário, não deixa pensão por morte e não pode ser acumulado com outro benefício assistencial ou previdenciário. Em troca, alcança quem nunca teve carteira assinada, quem trabalhou informalmente a vida inteira e quem convive com deficiência que impede a participação plena na vida social e no trabalho.",
    },
    {
      t: "p",
      html: "Neste guia estão os critérios de 2026, o cálculo correto da <strong>renda por pessoa da família</strong>, o papel do CadÚnico, como funciona a avaliação médica e social, quais documentos reunir, quanto tempo leva a análise e o que fazer diante de um indeferimento ou de um bloqueio.",
    },
    {
      t: "callout",
      tone: "info",
      title: "Resposta rápida",
      html: "Tem direito ao BPC o <strong>idoso com 65 anos ou mais</strong> e a <strong>pessoa com deficiência de qualquer idade</strong>, desde que a renda mensal por pessoa do grupo familiar seja igual ou inferior a <strong>um quarto do salário mínimo</strong>. O valor pago é de <strong>um salário mínimo</strong> por mês. É obrigatório ter CadÚnico atualizado e o pedido é feito pelo Meu INSS, pelo telefone 135 ou em agência.",
    },
    { t: "h2", text: "Quem tem direito ao BPC/LOAS em 2026" },
    {
      t: "p",
      html: "O benefício alcança dois públicos distintos, com o mesmo critério econômico e requisitos próprios de comprovação.",
    },
    { t: "h3", text: "BPC para pessoa idosa" },
    {
      t: "p",
      html: "Exige <strong>65 anos completos</strong>, para homens e mulheres, sem qualquer necessidade de contribuição prévia ao INSS. É indiferente se a pessoa trabalhou informalmente, se já foi registrada em algum momento ou se nunca teve vínculo — o que importa é a idade e a situação de renda comprovada no CadÚnico.",
    },
    { t: "h3", text: "BPC para pessoa com deficiência" },
    {
      t: "p",
      html: "Não há idade mínima: crianças, adultos e idosos podem receber. É necessário comprovar <strong>impedimento de longo prazo</strong> — de natureza física, mental, intelectual ou sensorial — com duração mínima de dois anos, que dificulte a participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas. Essa comprovação passa por avaliação médica e social, feitas por profissionais do INSS.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Deficiência não é o mesmo que incapacidade para o trabalho",
      html: "O <strong>auxílio por incapacidade temporária</strong> e a aposentadoria por invalidez exigem contribuição e avaliam a capacidade laboral. O BPC avalia <strong>barreiras e funcionalidade</strong>, com base no modelo biopsicossocial. Uma pessoa com deficiência que trabalha em atividade adaptada pode, em situações específicas, ser reavaliada, mas o critério de análise é diferente.",
    },
    { t: "h2", text: "O critério de renda: como calcular corretamente" },
    {
      t: "p",
      html: "É aqui que a maioria dos pedidos tropeça. A regra é somar toda a renda do grupo familiar e dividir pelo número de integrantes; o resultado precisa ser <strong>igual ou inferior a um quarto do salário mínimo</strong> por pessoa.",
    },
    {
      t: "table",
      caption: "Quem entra no grupo familiar para o cálculo da renda do BPC.",
      head: ["Integra o grupo familiar", "Não integra o grupo familiar"],
      rows: [
        ["O requerente", "Filhos e irmãos casados ou em união estável"],
        ["Cônjuge ou companheiro", "Parentes que não moram no mesmo endereço"],
        ["Pais e madrasta ou padrasto", "Sobrinhos, tios, primos e netos maiores"],
        ["Irmãos solteiros", "Agregados sem vínculo de parentesco previsto em lei"],
        ["Filhos e enteados solteiros", "Amigos e inquilinos que dividem a casa"],
        ["Menores tutelados", "Cuidadores contratados"],
      ],
    },
    {
      t: "p",
      html: "Um exemplo concreto: uma família de quatro pessoas em que apenas um integrante recebe R$ 1.500 tem renda por pessoa de R$ 375. Se um quarto do salário mínimo estiver em torno de R$ 380, essa família cumpre o critério. Já se a renda total subir para R$ 1.700, a média por pessoa passa de R$ 425 e o pedido tende a ser negado pelo critério econômico — a menos que existam despesas específicas reconhecidas em análise judicial.",
    },
    { t: "h4", text: "Rendas que não entram na conta" },
    {
      t: "ul",
      items: [
        "Outro BPC já recebido por integrante da família;",
        "Benefícios eventuais de assistência social;",
        "Rendas de programas de transferência de renda como o Bolsa Família, conforme regras vigentes;",
        "Estágio supervisionado e aprendizagem, dentro dos limites legais;",
        "Auxílios de natureza indenizatória.",
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Renda invisível também é renda",
      html: "Movimentações incompatíveis com a renda declarada — recebimentos por Pix recorrentes, contratos de <strong>empréstimo consignado</strong>, financiamentos ativos ou veículos registrados no CPF — podem ser cruzados pelas bases do governo e motivar indeferimento ou revisão. O caminho seguro é declarar a realidade no CadÚnico e manter o cadastro atualizado.",
    },
    {
      t: "image",
      src: corpo,
      alt: "Assistente social atendendo idoso em unidade do CRAS e preenchendo o formulário do Cadastro Único no computador",
      caption:
        "A atualização do Cadastro Único no CRAS é pré-requisito para o BPC e deve ser refeita a cada dois anos. Foto: Maracatu Brasil.",
    },
    { t: "h2", text: "CadÚnico: o pré-requisito que trava a maioria dos pedidos" },
    {
      t: "p",
      html: "Sem inscrição válida no <strong>Cadastro Único para Programas Sociais</strong>, o requerimento do BPC não avança. O cadastro é feito gratuitamente em uma unidade do CRAS ou em posto de atendimento indicado pela prefeitura, e precisa refletir com precisão a composição familiar, o endereço e as rendas.",
    },
    {
      t: "ol",
      items: [
        "Reúna documentos de <strong>todos</strong> os moradores da casa: CPF, certidões, comprovante de residência e comprovantes de renda;",
        "Procure o CRAS do seu município e informe que o objetivo é solicitar o BPC;",
        "Confira, ao final do atendimento, se todos os integrantes foram registrados e se as rendas estão corretas;",
        "Guarde o <strong>comprovante de cadastro</strong> com o número do NIS;",
        "Atualize o cadastro sempre que alguém entrar ou sair da família, mudar de emprego ou de endereço;",
        "Refaça a atualização ao menos <strong>a cada dois anos</strong>, mesmo que nada tenha mudado.",
      ],
    },
    { t: "h2", text: "Como solicitar o BPC pelo Meu INSS" },
    {
      t: "p",
      html: "Com o CadÚnico em ordem, o requerimento é digital e não exige ida à agência na maioria dos casos.",
    },
    {
      t: "ol",
      items: [
        "Acesse o <strong>Meu INSS</strong> pelo aplicativo ou site, com a conta gov.br;",
        "Selecione <em>Novo pedido</em> e busque por <em>Benefício Assistencial à Pessoa com Deficiência</em> ou <em>Benefício Assistencial ao Idoso</em>;",
        "Confirme os dados cadastrais e o endereço;",
        "Anexe documentos pessoais, comprovante de residência e, no caso de deficiência, relatórios e laudos médicos recentes;",
        "Envie o pedido e guarde o número do protocolo;",
        "Acompanhe as exigências pelo aplicativo — o INSS pode pedir documentos complementares com prazo definido;",
        "No BPC por deficiência, compareça às perícias agendadas: <strong>avaliação médica</strong> e <strong>avaliação social</strong>;",
        "Ao ser concedido, verifique o banco pagador e as datas de crédito no extrato do benefício.",
      ],
    },
    { t: "h3", text: "O que levar para a avaliação médica e social" },
    {
      t: "ul",
      items: [
        "Laudos e relatórios médicos com CID, data e assinatura do profissional;",
        "Exames de imagem, resultados laboratoriais e receitas de uso contínuo;",
        "Relatórios de fisioterapia, fonoaudiologia, terapia ocupacional ou psicologia;",
        "Declaração escolar, no caso de crianças e adolescentes;",
        "Descrição objetiva das barreiras enfrentadas no dia a dia: transporte, acessibilidade, necessidade de acompanhante;",
        "Documento de identidade e comprovante de residência atualizado.",
      ],
    },
    {
      t: "quote",
      html: "O que mais convence na avaliação social não é a lista de diagnósticos: é a descrição concreta do que a pessoa deixa de fazer no dia a dia por causa das barreiras que enfrenta.",
      cite: "Ana Ribeiro, editora de Benefícios do Maracatu Brasil",
    },
    { t: "h2", text: "Valor, prazos e regras de pagamento" },
    {
      t: "table",
      caption: "Características do BPC comparadas às de um benefício previdenciário.",
      head: ["Característica", "BPC/LOAS", "Aposentadoria do INSS"],
      rows: [
        ["Exige contribuição", "Não", "Sim"],
        ["Valor", "Um salário mínimo", "Conforme média e regra aplicada"],
        ["13º salário", "Não paga", "Paga"],
        ["Gera pensão por morte", "Não", "Sim"],
        ["Permite consignado", "Não permitido", "Permitido com limite de margem"],
        ["Revisão periódica", "A cada dois anos", "Eventual, por auditoria"],
      ],
    },
    {
      t: "p",
      html: "O prazo legal de análise é de até 90 dias, contados do requerimento completo, mas exigências pendentes e agendamento de perícia podem alongar a espera. Em caso de demora excessiva sem justificativa, é possível registrar reclamação na Ouvidoria e, se necessário, recorrer à via judicial.",
    },
    { t: "h2", text: "Motivos de bloqueio, suspensão e cessação" },
    {
      t: "ul",
      items: [
        "CadÚnico desatualizado há mais de dois anos — a causa mais comum de bloqueio;",
        "Aumento da renda familiar acima do limite de um quarto do salário mínimo por pessoa;",
        "Acúmulo com outro benefício assistencial ou previdenciário;",
        "Não comparecimento à revisão ou à reavaliação da deficiência;",
        "Óbito do beneficiário, com necessidade de comunicação imediata para evitar cobrança de valores;",
        "Divergência de dados cadastrais entre CPF, CadÚnico e sistemas do INSS.",
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "O BPC não aceita empréstimo consignado",
      html: "Ofertas de <strong>crédito consignado</strong> ou de “antecipação do benefício” usando o BPC como garantia são irregulares. Quem aceita costuma perder parte da renda com juros e taxas sem qualquer respaldo legal. Em caso de desconto indevido, registre a contestação no banco, comunique o INSS pelo 135 e guarde os protocolos.",
    },
    { t: "h2", text: "Se o pedido for negado" },
    {
      t: "p",
      html: "O indeferimento não encerra a discussão. O primeiro passo é ler a <strong>carta de decisão</strong> disponível no Meu INSS e identificar se o motivo foi econômico, médico ou documental.",
    },
    {
      t: "ol",
      items: [
        "Motivo documental: reúna o que faltou e apresente novo requerimento;",
        "Motivo médico: peça relatórios mais detalhados e apresente <strong>recurso ao Conselho de Recursos da Previdência Social</strong> em até 30 dias;",
        "Motivo econômico: verifique se o CadÚnico refletia corretamente a composição familiar e as despesas com saúde;",
        "Sempre guarde protocolos e cópias de tudo o que foi enviado;",
        "Se o recurso administrativo falhar, avalie a via judicial com apoio da Defensoria Pública, que atende gratuitamente.",
      ],
    },
    {
      t: "p",
      html: "Para aprofundar, vale ler o nosso material sobre <a href=\"/beneficios/calendario-bolsa-familia-2026\">calendário e valores do Bolsa Família em 2026</a>, o guia de <a href=\"/previdencia/aposentadoria-inss-2026-regras-tabela-prova-de-vida\">aposentadoria pelo INSS em 2026</a> — útil para comparar com o BPC — e a explicação sobre <a href=\"/beneficios/cadunico-atualizar-cadastro\">como atualizar o CadÚnico</a>, etapa obrigatória do pedido.",
    },
    { t: "h4", text: "Checklist antes de requerer o BPC" },
    {
      t: "ol",
      items: [
        "CadÚnico atualizado nos últimos 24 meses;",
        "Renda por pessoa calculada corretamente com o grupo familiar da lei;",
        "CPF regularizado para todos os integrantes da família;",
        "Laudos e relatórios médicos recentes, no caso de deficiência;",
        "Conta gov.br em nível prata ou ouro;",
        "Comprovante de residência no nome de alguém do grupo familiar;",
        "Protocolo do requerimento salvo para acompanhamento.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual é o valor do BPC/LOAS em 2026?",
      a: "O benefício corresponde a um salário mínimo mensal, reajustado sempre que o piso nacional é atualizado. Não há pagamento de 13º salário e o valor é o mesmo para idosos e pessoas com deficiência.",
    },
    {
      q: "Preciso ter contribuído para o INSS para receber o BPC?",
      a: "Não. O BPC é assistencial e independe de qualquer contribuição. O que se avalia é a idade (65 anos ou mais) ou a deficiência de longo prazo, somada ao critério de renda familiar por pessoa.",
    },
    {
      q: "Qual é o limite de renda por pessoa para ter direito?",
      a: "A renda mensal do grupo familiar dividida pelo número de integrantes deve ser igual ou inferior a um quarto do salário mínimo. Alguns benefícios e rendas específicas não entram nessa soma.",
    },
    {
      q: "O CadÚnico é obrigatório para pedir o BPC?",
      a: "Sim. Sem inscrição válida e atualizada no Cadastro Único o requerimento não é analisado. A atualização deve ser feita no CRAS a cada dois anos, ou antes disso quando houver mudança na família.",
    },
    {
      q: "Quem recebe BPC pode trabalhar?",
      a: "A pessoa com deficiência pode exercer atividade remunerada; nesse caso o benefício pode ser suspenso e não cessado, com possibilidade de retomada quando a atividade terminar. Já a renda obtida entra no cálculo familiar e pode ultrapassar o limite permitido.",
    },
    {
      q: "É possível acumular BPC com aposentadoria ou Bolsa Família?",
      a: "O BPC não pode ser acumulado com aposentadoria, pensão ou outro benefício assistencial. A convivência com programas de transferência de renda segue as regras vigentes e deve ser conferida no atendimento do CRAS.",
    },
    {
      q: "Quanto tempo leva a análise do pedido?",
      a: "O prazo de referência é de até 90 dias após o requerimento completo, mas exigências documentais e agendamento de perícia médica e social podem estender a espera.",
    },
    {
      q: "O BPC pode ser usado como garantia de empréstimo?",
      a: "Não. O benefício assistencial não admite empréstimo consignado. Qualquer oferta nesse sentido deve ser recusada, e descontos indevidos precisam ser contestados no banco e comunicados ao INSS pelo telefone 135.",
    },
    {
      q: "Por que meu BPC foi bloqueado?",
      a: "O motivo mais frequente é CadÚnico desatualizado. Também pesam aumento da renda familiar, ausência em revisão agendada e divergência de dados cadastrais. Regularizado o cadastro, o pagamento pode ser restabelecido com os atrasados devidos.",
    },
    {
      q: "O BPC deixa pensão para a família?",
      a: "Não. O benefício é individual e intransferível: cessa com o falecimento do beneficiário e não gera pensão por morte. Por isso é importante comunicar o óbito rapidamente para evitar recebimento indevido.",
    },
  ],
  relatedGlossary: [
    "bpc-loas",
    "bpc-idoso",
    "bpc-deficiencia",
    "cadunico",
    "nis",
    "meu-inss",
  ],
  relatedArticles: [
    "bpc-loas-quem-tem-direito",
    "cadunico-atualizar-cadastro",
    "aposentadoria-por-idade-2027",
    "bolsa-familia-calendario-pagamentos",
  ],
  references: [
    {
      title: "Ministério do Desenvolvimento e Assistência Social — BPC",
      href: "https://www.gov.br/mds/pt-br",
    },
    {
      title: "Meu INSS — Benefício Assistencial (BPC/LOAS)",
      href: "https://meu.inss.gov.br/",
    },
    {
      title: "Portal Gov.br — Cadastro Único para Programas Sociais",
      href: "https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais",
    },
  ],
};
