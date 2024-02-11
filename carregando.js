let carregandoEl = document.querySelector('.carregando'),
    headerEl = document.querySelector('header'),
    linkGitHubEl = document.querySelector('#link-github'),
    linkInstagramEl = document.querySelector('#link-instagram'),
    linkGmailEl = document.querySelector('#link-gmail');

setTimeout(() => {
    carregandoEl.style.display = 'none';
    headerEl.classList.remove('ocultar');
}, 2000);

linkGitHubEl.title = 'GitHub';
linkInstagramEl.title = 'Instagram';
linkGmailEl.title = 'Gmail';

function abrirLinkEmNovaAba (e) {
    let botaoRecuperadoEl = e.currentTarget;
    let url;
    
    switch (botaoRecuperadoEl) {
        case linkGitHubEl: url = 'https://github.com/rafaqueiroz10'; break;
        case linkGmailEl: url = 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRZVbfvFrnpCZplkLlpvCWltrPLMtJbtQzbwqHHqZzkmttrWKRtZDCrmZgNChjBVhgtRb';break;
        case linkInstagramEl: url = 'https://www.instagram.com/rqueiroz17/';
    }

    let linkEmNovaAba = open (url, '_blank');
    linkEmNovaAba.focus ();
}

// vai abrir cada um dos links em uma nova aba
linkGitHubEl.addEventListener('click', abrirLinkEmNovaAba);
linkGmailEl.addEventListener('click', abrirLinkEmNovaAba);
linkInstagramEl.addEventListener ('click', abrirLinkEmNovaAba);