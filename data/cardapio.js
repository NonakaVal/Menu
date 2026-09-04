// ── Dados do cardápio ── arquivo de configuração editável.
// Script clássico (sem export/import) para funcionar via file:// e no GitHub Pages.
// Carregado antes do script principal em index.html; expõe WA, DELIVERY_FEE,
// CATEGORIES, menu, PROMOS, PLACEHOLDER_IMG, CATEGORY_ITEM_PLACEHOLDER,
// FALLBACK_DESC e DEFAULT_DESC_BY_CAT como globais.
const WA = '5515996892792';
const DELIVERY_FEE = 3;

// ── CATEGORIAS ── fonte única de verdade para nav, ícones, banners e ordem de exibição.
// Ícones flat representativos (Assets/menu-itens) substituem os antigos emojis.
// Ordem definida pelo usuário.
const CATEGORIES = [
  { key: 'combos', label: 'Combos de Lanches', icon: 'Assets/categories-icons/icon-combo.png', banner: 'Assets/banners/banner-combos-de-lanche.png' },
  { key: 'oriental', label: 'Culinária Oriental', icon: 'Assets/categories-icons/icon-oriental.png', banner: 'Assets/banners/banner-comida-oriental.png' },
  { key: 'dogao', label: 'Dogão', icon: 'Assets/categories-icons/icon-dog.png', banner: 'Assets/banners/banner-dogao.png' },
  { key: 'lanches', label: 'Lanches', icon: 'Assets/categories-icons/icon-burguer.png', banner: 'Assets/banners/banner-lanches.png' },
  { key: 'pasteis', label: 'Pastéis', icon: 'Assets/categories-icons/icon-pastel.png', banner: 'Assets/banners/banner-pasteis.png' },
  { key: 'bebidas', label: 'Bebidas', icon: 'Assets/categories-icons/icon-bebidas.png', banner: 'Assets/banners/banner-bebidas.png' },
  { key: 'doces', label: 'Doces e Sobremesas', icon: 'Assets/categories-icons/icon-doces.png', banner: 'Assets/banners/banner-doces.png' },
  { key: 'pizzas', label: 'Pizzas', icon: 'Assets/categories-icons/icon-pizzas.png', banner: 'Assets/banners/banner-pizzas.png' }
];

const menu = {
  combos: {
    "Combos de Lanches": [
      { name: "Combo X-Salada + Refri", price: 20 },
      { name: "Combo Dogão Duplo", price: 22 },
      { name: "Combo X-Bacon + Batata + Refri", price: 28 },
      { name: "Combo Família (4 Pastéis + Refri 2L)", price: 45, premium: true }
    ]
  },
  oriental: {
    "Culinária Oriental": [
      { name: "Temaki de Salmão", price: 18 },
      { name: "Temaki Philadelphia", price: 20 },
      { name: "Hot Roll (8un)", price: 24 },
      { name: "Yakisoba de Frango", price: 22 },
      { name: "Sashimi de Salmão (10un)", price: 25, premium: true }
    ]
  },
  dogao: {
    "Dogão": [
      { name: "Dogão Simples", price: 10 },
      { name: "Dogão c/ Bacon", price: 13 },
      { name: "Dogão c/ Catupiry", price: 13 },
      { name: "Dogão Vina Especial", price: 14 },
      { name: "Dogão Completo", price: 16, premium: true }
    ]
  },
  lanches: {
    "Lanches": [
      { name: "Cheeseburguer", price: 12 },
      { name: "X-Salada", price: 14 },
      { name: "X-Egg", price: 15 },
      { name: "X-Bacon", price: 16 },
      { name: "X-Calabresa", price: 16 },
      { name: "X-Tudo Artesanal", price: 20, premium: true }
    ]
  },
  // ── Pastéis simplificado: sabores representativos, mesmo padrão das demais categorias
  // (imagem única — banner da categoria — usada como placeholder em todos os itens).
  pasteis: {
    "Pastéis": [
      { name: "Pastel de Carne", price: 8 },
      { name: "Pastel de Queijo", price: 8 },
      { name: "Pastel de Frango c/ Catupiry", price: 10 },
      { name: "Pastel de Calabresa c/ Queijo", price: 10 },
      { name: "Pastel de Costela", price: 15, premium: true }
    ]
  },
  bebidas: {
    "Coca-Cola": [
      { name: "Coca-Cola Lata", price: 6 },
      { name: "Coca-Cola KS 300ml", price: 7 },
      { name: "Coca-Cola LS 600ml", price: 10 },
      { name: "Coca-Cola 2 Litros", price: 15 },
      { name: "Coca-Cola Mini 200ml", price: 3.50 }
    ],
    "Tubaína & Outros": [
      { name: "Tubaína Garrafa", price: 7 },
      { name: "Tubaína 350ml", price: 4.50 },
      { name: "Tubaína Lata", price: 5 },
      { name: "Guaraná Mini 200ml", price: 3.50 },
      { name: "Tampico", price: 7 },
      { name: "Nativo", price: 3.50 }
    ],
    "Água": [
      { name: "Água Natural", price: 3 },
      { name: "Água com Gás", price: 3.50 }
    ]
  },
  doces: {
    "Doces e Sobremesas": [
      { name: "Casadinho", price: 6 },
      { name: "Pudim de Leite", price: 8 },
      { name: "Mousse de Maracujá", price: 8 },
      { name: "Bolo no Pote", price: 10 },
      { name: "Brownie c/ Sorvete", price: 14, premium: true }
    ]
  },
  pizzas: {
    "Pizzas": [
      { name: "Pizza de Mussarela", price: 22 },
      { name: "Pizza de Calabresa", price: 25 },
      { name: "Pizza Portuguesa", price: 28 },
      { name: "Pizza Frango c/ Catupiry", price: 28 },
      { name: "Pizza de Bacon", price: 26 },
      { name: "Pizza Quatro Queijos", price: 30, premium: true }
    ]
  }
};

// ── PROMOÇÕES EM DESTAQUE ── ofertas exibidas no slideshow do topo (hero).
// Cada entrada referencia um item já existente em `menu` pelo nome exato,
// para reaproveitar preço/produto real ao adicionar ao pedido.
const PROMOS = [
  { pill: '⚡ Oferta Relâmpago', title: 'Combo X-Salada + Refri<br>20% OFF no seu primeiro pedido', img: 'Assets/produtos/foto-prato-exemplo.jpg', name: 'Combo X-Salada + Refri' },
  { pill: '🔥 Mais Pedido', title: 'Combo Família<br>4 Pastéis + Refri 2L', img: 'Assets/menu-itens/combo.png', name: 'Combo Família (4 Pastéis + Refri 2L)' },
  { pill: '🍕 Destaque', title: 'Pizza Quatro Queijos<br>Sabor irresistível na hora certa', img: 'Assets/menu-itens/pizza.png', name: 'Pizza Quatro Queijos' }
];

const PLACEHOLDER_IMG = 'Assets/produtos/foto-prato-exemplo.jpg';
// Todas as categorias ainda sem foto individual por item usam o banner da própria
// categoria como placeholder único, repetido em todos os itens dela.
const CATEGORY_ITEM_PLACEHOLDER = {
  combos: 'Assets/menu-itens/combo.png',
  oriental: 'Assets/menu-itens/sashimi.png',
  dogao: 'Assets/menu-itens/hotdog.png',
  lanches: 'Assets/menu-itens/burguer.png',
  pasteis: 'Assets/menu-itens/pastel.png',
  bebidas: 'Assets/menu-itens/refri.png',
  doces: 'Assets/menu-itens/doce.png',
  pizzas: 'Assets/menu-itens/pizza.png'
};
const FALLBACK_DESC = 'Produto preparado na hora com ingredientes selecionados.';
// Descrição padrão por categoria — usada quando o item não tem uma descrição específica.
const DEFAULT_DESC_BY_CAT = {
  pasteis: 'Pastel artesanal, massa fininha e recheio generoso preparado na hora.',
  pizzas: 'Massa levedada lentamente, coberta com ingredientes selecionados e assada no ponto certo.',
  lanches: 'Pão macio, ingredientes frescos e um toque especial da casa.',
  dogao: 'Pão quentinho, salsicha suculenta e acompanhamentos generosos.',
  oriental: 'Preparo fresco do dia, com ingredientes selecionados e apresentação caprichada.',
  combos: 'Combinação perfeita para matar a fome com economia.',
  doces: 'Doce cremoso e generoso, feito para adoçar o seu dia.',
  bebidas: 'Bem gelada, do jeitinho que você gosta.'
};
