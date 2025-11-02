async function getPage(page) {
    if (page == 'navbarDropdownMenuLink' || 
        page == 'langDropdown'
    ) return;
    try {
        const res = (await fetch(`src/${page}.html`));
        if (!res.ok) throw new Error(`Erro ao carregar ${page}`);
        const html = await res.text();
        document.getElementById('content').innerHTML = html;
        initPage(page);
    } catch (err) {
        console.error(err);
        document.getElementById('content').innerHTML = `<p>Erro ao carregar ${page}</p>`;
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
    // Busca o id do elemento <a>
    const link = e.target.closest('a[id]');
    if (!link) return;
    e.preventDefault();
    const page = link.id;
    // Carrega o conteúdo pertinente
    getPage(page);
})
