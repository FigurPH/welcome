async function getPage(page) {
    try {
        const res = (await fetch(`src/${page}.html`, { cache: 'no-store' })); //cache: no-store para ignorar o cache, carrega sempre novamente a página
        if (!res.ok) throw new Error(`Erro ao carregar ${page}`);
        const html = await res.text();
        document.getElementById('content').innerHTML = html;
    } catch (err) {
        console.error(err);x
        document.getElementById('content').innerHTML = `<p>Erro ao carregar ${page}</p>`;
    }
}
async function getPortfolio(page) {
    try {
        const res = (await fetch(`src/portfolio/${page}.html`, { cache: 'no-store' })); //cache: no-store para ignorar o cache, carrega sempre novamente a página
        if (!res.ok) throw new Error(`Erro ao carregar ${page}`);
        const html = await res.text();
        document.getElementById('portfolio-content').innerHTML = html;

        initPage(page);
    } catch (err) {
        console.error(err);
        document.getElementById('portfolio-content').innerHTML = `<p>Erro ao carregar ${page}</p>`;
    }
}

// Função de inicialização de ppaginas para casos especiais
function initPage(page) {
    if (page === 'whoami') {
        const anoAtual = new Date().getUTCFullYear();
        const idadeAtual = anoAtual - 1990;
        document.getElementById('idade').textContent = idadeAtual;
    }
}

// Carrega html correto em content
document.addEventListener('click', e => {
    const pages = [
        'whoami',
        'skills',
        'portfolio'
    ];
    // Busca o id do elemento <a>
    const link = e.target.closest('a[id]');
    if (!link) return;
    e.preventDefault();
    const page = link.id;
    if (pages.includes(page)){
        getPage(page);
    } else {
        getPortfolio(page);
    }
    // Carrega o conteúdo pertinente
    //getPage(page);
})
