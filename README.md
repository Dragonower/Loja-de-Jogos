# 🎮 GameStore - HTML Puro

Loja de jogos virtuais criada com **HTML, CSS e JavaScript puro**.

## 📁 Arquivos

```
html-puro/
├── index.html      → Página de Login
├── cadastro.html   → Página de Cadastro
├── loja.html       → Página Principal da Loja
├── styles.css      → Todos os estilos CSS
├── script.js       → JavaScript da loja
└── README.md       → Este arquivo
```

## 🚀 Como Usar

### 1️⃣ Baixar os Arquivos
Copie todos os arquivos da pasta `html-puro/` para seu computador.

### 2️⃣ Abrir no Navegador
- Dê duplo clique no arquivo **index.html**
- Ou arraste o arquivo para o navegador (Chrome, Firefox, Edge, etc.)

### 3️⃣ Navegação
1. **Login** (`index.html`) - Digite qualquer email e senha
2. **Cadastro** (`cadastro.html`) - Preencha o formulário
3. **Loja** (`loja.html`) - Navegue pela loja de jogos

## ✨ Funcionalidades

### Login & Cadastro
- ✅ Formulários validados
- ✅ Design responsivo
- ✅ Efeitos de hover e focus
- ✅ Ícones SVG integrados

### Loja
- ✅ Catálogo com 6 jogos
- ✅ Sistema de busca em tempo real
- ✅ Filtros por categoria (Todos, Destaques, Promoções)
- ✅ Adicionar ao carrinho
- ✅ Sistema de favoritos
- ✅ Avaliações por estrelas
- ✅ Badges de desconto
- ✅ Persistência de dados (LocalStorage)
- ✅ Contador de itens no carrinho
- ✅ Animações e efeitos hover
- ✅ Totalmente responsivo

## 🎨 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Gradientes, animações, flexbox, grid
- **JavaScript Vanilla** - Sem frameworks
- **LocalStorage** - Persistência de dados

## 📱 Responsivo

Funciona perfeitamente em:
- 💻 Desktop
- 📱 Tablet
- 📲 Mobile

## 🔧 Personalização

### Mudar cores:
Edite as cores no arquivo `styles.css`:
- Roxo: `#7c3aed`, `#a855f7`
- Azul: `#2563eb`, `#3b82f6`

### Adicionar jogos:
No arquivo `script.js`, adicione objetos no array `jogos`:

```javascript
{
    id: 7,
    titulo: 'Seu Jogo',
    preco: 99.90,
    precoOriginal: 149.90, // opcional
    imagem: 'URL_DA_IMAGEM',
    categoria: 'Ação',
    rating: 4.5,
    destaque: true // opcional
}
```

## 🌐 Hospedagem Gratuita

Você pode hospedar gratuitamente em:
- **Netlify**: netlify.com
- **Vercel**: vercel.com
- **GitHub Pages**: pages.github.com

## 📝 Notas

- Os dados do carrinho e favoritos são salvos no navegador (LocalStorage)
- As imagens são carregadas do Unsplash
- Não requer servidor - funciona offline após carregar as imagens

## 🎯 Próximos Passos

- Adicionar página de checkout
- Sistema de pagamento (simulado)
- Perfil de usuário
- Histórico de compras
- Avaliações de usuários

---

**Desenvolvido para Figma Make** 🚀
