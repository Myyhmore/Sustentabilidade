const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é sustentabilidade?",
        alternativas: [
            {
                texto: "A palavra sustentabilidade vem de “sustentar”, que significa essencialmente fornecer suporte e manter ou preservar algo. O que esperamos preservar e apoiar, é a vida no planeta Terra. ",
                afirmacao: "afirmação"
            },
            {
                texto: "Pensando nessa definição, podemos ver a sustentabilidade como um modelo sistémico com uma abordagem da vida que causa o menor dano possível ao mundo natural ou aos organismos vivos." ,
                afirmacao: "afirmação" 
            }
            
        ]
    },
    {
        enunciado: " A sustentabilidade é importante porquê ?",
        alternativas: [
            {
                texto: "O principal objetivo da sustentabilidade é proteger o planeta para que as gerações futuras não tenham que sofrer.",
                afirmacao: "afirmação"
            },
            {
                texto: "As nossas ações atuais não devem ser feitas às custas dos nossos semelhantes ou dos seres vivos, por este motivo é importante estarmos cientes da sustentabilidade no nosso quotidiano para não causarmos mais danos irreparáveis ​​à Terra.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: " Quais são os pilares da sustentabilidade?",
        alternativas: [
            {
                texto: "Os pilares ou as três dimensões da sustentabilidade são o ambiente, a economia e a sociedade. ",
                afirmacao: "afirmação"
            },
            {
                texto: " Eles impactam-se uns aos outros – nenhum desses três pilares é independente –. É por isso, que é importante considerar tudo quando falamos sobre sustentabilidade, desde recursos naturais e desperdício até ao tratamento humano e às condições de trabalho.",
                afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: " Exemplos da sustentabilidade",
        alternativas: [
            {
                texto: "Um exemplo é o recurso à energia verde – a energia eólica, por exemplo, é um recurso gratuito, natural e infinito – que não causa danos a terceiros, e ajuda a manter a sociedade a funcionar.",
                afirmacao: "afirmação"
            },
            {
                texto: "Outro bom exemplo é criar, manter e cuidar dos espaços verdes. Porque os espaços verdes e as plantas melhoram a qualidade do ar, protegem a qualidade da água e reduzem a erosão dos solos, apenas para citar alguns benefícios. ",
                afirmacao: "afirmação"
            }
            
            
        ]
    },
    {
        enunciado: "Onde se pode aprender mais sobre a sustentabilidade?",
        alternativas: [
            {
                texto: "existem vários livros, filmes documentários, recursos online, blogs, conferências e workshops sobre sustentabilidade.",
                afirmacao: "afirmação"
            },
            {
                texto:"Também as universidades têm cada vez mais oferta nesta área de ensino, quer seja em gestão ou design, a oferta é agora bastante diversificada. Mas a melhor forma de aprender é praticando. ",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Também as universidades...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();