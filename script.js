// Dados dos jogos
const jogos = [
    {
        id: 1,
        titulo: 'Cyber Revolution 2077',
        preco: 199.90,
        precoOriginal: 299.90,
        imagem: 'https://images.unsplash.com/photo-1607796884038-3638822d5ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwZ2FtZXxlbnwxfHx8fDE3NzIwNDkyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'Ação/RPG',
        rating: 4.8,
        destaque: true,
    },
    {
        id: 2,
        titulo: 'Fantasy Quest Ultimate',
        preco: 149.90,
        imagem: 'https://images.unsplash.com/photo-1763044655339-b58c31f55e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYWR2ZW50dXJlJTIwZ2FtZXxlbnwxfHx8fDE3NzE5NzM2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'Aventura',
        rating: 4.6,
        destaque: true,
    },
    {
        id: 3,
        titulo: 'Speed Rivals Racing',
        preco: 129.90,
        precoOriginal: 179.90,
        imagem: 'https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lfGVufDF8fHx8MTc3MjAzNDI1MXww&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'Corrida',
        rating: 4.5,
    },
    {
        id: 4,
        titulo: 'Space Odyssey Wars',
        preco: 169.90,
        imagem: 'https://images.unsplash.com/photo-1762441112136-4dfc6edf58e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWV8ZW58MXx8fHwxNzcxOTgzNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'Estratégia',
        rating: 4.7,
    },
    {
        id: 5,
        titulo: 'Medieval Legends',
        preco: 139.90,
        imagem: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHdhcnJpb3IlMjBnYW1lfGVufDF8fHx8MTc3MjA0OTIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'RPG',
        rating: 4.4,
    },
    {
        id: 6,
        titulo: 'Esports Championship',
        preco: 0,
        imagem: 'https://images.unsplash.com/photo-1759701547036-bf7d7b05cc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzcxOTY0OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        categoria: 'Multiplayer',
        rating: 4.9,
        destaque: true,
    },
];

// Estado da aplicação
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let filtroAtual = 'todos';
let buscaAtual = '';

// Verificar se usuário está logado
if (!localStorage.getItem('usuarioLogado')) {
    window.location.href = 'index.html';
}

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
});

// Busca
document.getElementById('busca').addEventListener('input', (e) => {
    buscaAtual = e.target.value.toLowerCase();
    renderizarJogos();
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtroAtual = btn.dataset.tab;
        renderizarJogos();
    });
});

// Função para filtrar jogos
function filtrarJogos() {
    let jogosFiltrados = jogos;

    // Filtrar por busca
    if (buscaAtual) {
        jogosFiltrados = jogosFiltrados.filter(jogo =>
            jogo.titulo.toLowerCase().includes(buscaAtual) ||
            jogo.categoria.toLowerCase().includes(buscaAtual)
        );
    }

    // Filtrar por tab
    if (filtroAtual === 'destaque') {
        jogosFiltrados = jogosFiltrados.filter(jogo => jogo.destaque);
    } else if (filtroAtual === 'promocao') {
        jogosFiltrados = jogosFiltrados.filter(jogo => jogo.precoOriginal);
    }

    return jogosFiltrados;
}

// Função para criar estrelas de rating
function criarEstrelas(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const filled = i <= Math.floor(rating);
        html += `
            <svg class="star ${filled ? 'filled' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `;
    }
    return html;
}

// Função para criar card de jogo
function criarCardJogo(jogo) {
    const isFavorito = favoritos.includes(jogo.id);
    const noCarrinho = carrinho.includes(jogo.id);
    const desconto = jogo.precoOriginal
        ? Math.round(((jogo.precoOriginal - jogo.preco) / jogo.precoOriginal) * 100)
        : 0;

    return `
        <div class="game-card">
            <div class="game-image-wrapper">
                <img src="${jogo.imagem}" alt="${jogo.titulo}" class="game-image">
                
                ${jogo.destaque ? `
                    <div class="game-badge badge-destaque">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        Destaque
                    </div>
                ` : ''}
                
                ${desconto > 0 ? `
                    <div class="game-badge badge-desconto">-${desconto}%</div>
                ` : ''}
                
                ${jogo.preco === 0 ? `
                    <div class="game-badge badge-gratis">GRÁTIS</div>
                ` : ''}
                
                <button class="favorito-btn ${isFavorito ? 'active' : ''}" onclick="toggleFavorito(${jogo.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            
            <div class="game-info">
                <div class="rating">
                    ${criarEstrelas(jogo.rating)}
                    <span class="rating-text">(${jogo.rating})</span>
                </div>
                
                <h3 class="game-title">${jogo.titulo}</h3>
                <p class="game-category">${jogo.categoria}</p>
                
                <div class="game-footer">
                    <div class="price-info">
                        ${jogo.precoOriginal ? `
                            <span class="price-original">R$ ${jogo.precoOriginal.toFixed(2)}</span>
                        ` : ''}
                        <span class="price-current">
                            ${jogo.preco === 0 ? 'GRÁTIS' : `R$ ${jogo.preco.toFixed(2)}`}
                        </span>
                    </div>
                    
                    <button 
                        class="btn-comprar" 
                        onclick="adicionarCarrinho(${jogo.id})"
                        ${noCarrinho ? 'disabled' : ''}
                    >
                        ${noCarrinho ? 'No Carrinho' : 'Comprar'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Função para renderizar jogos
function renderizarJogos() {
    const jogosFiltrados = filtrarJogos();
    const grid = document.getElementById('gamesGrid');
    
    if (jogosFiltrados.length === 0) {
        grid.innerHTML = '<p style="color: #9ca3af; text-align: center; grid-column: 1/-1; padding: 3rem;">Nenhum jogo encontrado.</p>';
        return;
    }
    
    grid.innerHTML = jogosFiltrados.map(jogo => criarCardJogo(jogo)).join('');
}

// Função para adicionar ao carrinho
function adicionarCarrinho(id) {
    if (!carrinho.includes(id)) {
        carrinho.push(id);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();
        renderizarJogos();
    }
}

// Função para toggle favorito
function toggleFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(f => f !== id);
    } else {
        favoritos.push(id);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderizarJogos();
}

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const count = document.getElementById('carrinhoCount');
    count.textContent = carrinho.length;
    count.style.display = carrinho.length > 0 ? 'block' : 'none';
}

// Inicializar
atualizarContadorCarrinho();
renderizarJogos();
