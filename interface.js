let carregandoEl = document.querySelector('.carregando'),
    headerEl = document.querySelector('header'),
    linkGitHubEl = document.querySelector('#link-github'),
    linkInstagramEl = document.querySelector('#link-instagram'),
    linkGmailEl = document.querySelector('#link-gmail'),
    arrSectionEl = document.querySelectorAll('section'),
    linksDoHeaderEl = document.querySelectorAll('header nav ul li'),
    sobreMimEl = document.querySelector ('.sobre-mim');

linkGitHubEl.title = 'GitHub';
linkInstagramEl.title = 'Instagram';
linkGmailEl.title = 'Gmail';

// função que abre a página, ocultando o spinner carregando,
// após três segundos
function abrirPagina() {
    carregandoEl.classList.add('ocultar');
    headerEl.classList.remove('ocultar');
    headerEl.classList.add ('animacao-revelar');
    for (let sectionEl of arrSectionEl) {
        sectionEl.classList.add ('animacao-revelar');
    }
    sobreMimEl.classList.remove ('ocultar');
}

setTimeout(abrirPagina, 3000);

// vai abrir cada um dos links em uma nova aba
linkGitHubEl.addEventListener('click', () => {
    let url = 'https://github.com/rafaqueiroz10';
    let linkEmNovaAba = open(url, '_blank');
    linkEmNovaAba.focus();
});

linkGmailEl.addEventListener('click', () => {
    let url = 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRZVbfvFrnpCZplkLlpvCWltrPLMtJbtQzbwqHHqZzkmttrWKRtZDCrmZgNChjBVhgtRb';
    let linkEmNovaAba = open(url, '_blank');
    linkEmNovaAba.focus();
});

linkInstagramEl.addEventListener('click', () => {
    let url = 'https://www.instagram.com/rqueiroz17/';
    let linkEmNovaAba = open(url, '_blank');
    linkEmNovaAba.focus();
});

// função que marca o link selecionado no header
function marcaLink (linkEl) {
    for (let linkEl of linksDoHeaderEl) {
        linkEl.classList.remove('link-selecionado');
    }
    linkEl.classList.add('link-selecionado');
}

// função que abre uma section da página
/**
 *  @param linkEl o link que foi clicado no header
 */ 
function abrirSection(linkEl) {
    for (let sectionEl of arrSectionEl) {
        sectionEl.classList.add('ocultar');
    }
    let c = linkEl.innerHTML.toLowerCase();
    c = c.replaceAll('?', '');
    c = c.replaceAll(' ', '-');
    let sectionDaPaginaEl = document.querySelector('.' + c);
    sectionDaPaginaEl.classList.remove('ocultar');
}

for (let linkEl of linksDoHeaderEl) {
    linkEl.addEventListener('click', (e) => {
        let linkClicadoEl = e.currentTarget;
        marcaLink (linkClicadoEl);
        abrirSection (linkClicadoEl);
    });
}
