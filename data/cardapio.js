


/**CONFIGURAÇÕES ========================================================================== 
 * 
 * Arquivo de configuração editável.
 *
 * Este é um script clássico, sem `export` ou `import`, para funcionar:
 * - Diretamente pelo protocolo `file://`;
 * - No GitHub Pages;
 * - Sem ferramentas de compilação.
 *
 * Este arquivo deve ser carregado no `index.html` antes do script principal.
 *
 * Variáveis disponibilizadas:
 * - WA
 * - DELIVERY_FEE
 * - CATEGORIES
 * - menu
 * - PROMOS
 * - PLACEHOLDER_IMG
 * - CATEGORY_ITEM_PLACEHOLDER
 * - FALLBACK_DESC
 *
 * PADRÃO DE FORMATAÇÃO
 * ----------------------------------------------------------------------------
 * - Indentação: 2 espaços;
 * - Uma propriedade por linha em objetos maiores;
 * - Preços devem ser informados como números, sem "R$";
 * - Caminhos de imagens são relativos ao arquivo HTML;
 * - O campo `premium: true` é opcional;
 * - Nomes usados em promoções devem corresponder exatamente aos nomes do menu.
 */


/*/ 1. GERAIS ==========================================================================
   
   ========================================================================== */

/**
 */
const WA = '5515996892792';

/**
 * Taxa fixa de entrega, em reais.
 *
 * Use somente números:
 * 3    → R$ 3,00
 * 3.5  → R$ 3,50
 */
const DELIVERY_FEE = 3;


/* 2. CATEGORIAS ==========================================================================
   
   ========================================================================== */

/**
 * Fonte única de verdade para:
 * - Ordem de exibição das categorias;
 * - Navegação do cardápio;
 * - Rótulos;
 * - Ícones;
 * - Banners.
 *
 * Estrutura de cada categoria:
 *
 * {
 *   key: 'identificador-interno',
 *   label: 'Nome exibido ao usuário',
 *   icon: 'caminho/do/icone.png',
 *   banner: 'caminho/do/banner.png'
 * }
 *
 * IMPORTANTE:
 * O valor de `key` deve ser igual à chave correspondente dentro de `menu`.
 */
const CATEGORIES = [
  {
    key: 'combos',
    label: 'Combos de Lanches',
    icon: 'Assets/categories-icons/icon-combo.png',
    banner: 'Assets/banners/banner-combos-de-lanche.png'
  },
  {
    key: 'oriental',
    label: 'Culinária Oriental',
    icon: 'Assets/categories-icons/icon-oriental.png',
    banner: 'Assets/banners/banner-comida-oriental.png'
  },
  {
    key: 'dogao',
    label: 'Dogão',
    icon: 'Assets/categories-icons/icon-dog.png',
    banner: 'Assets/banners/banner-dogao.png'
  },
  {
    key: 'lanches',
    label: 'Lanches',
    icon: 'Assets/categories-icons/icon-burguer.png',
    banner: 'Assets/banners/banner-lanches.png'
  },
  {
    key: 'pasteis',
    label: 'Pastéis',
    icon: 'Assets/categories-icons/icon-pastel.png',
    banner: 'Assets/banners/banner-pasteis.png'
  },
  {
    key: 'bebidas',
    label: 'Bebidas',
    icon: 'Assets/categories-icons/icon-bebidas.png',
    banner: 'Assets/banners/banner-bebidas.png'
  },
  {
    key: 'doces',
    label: 'Doces e Sobremesas',
    icon: 'Assets/categories-icons/icon-doces.png',
    banner: 'Assets/banners/banner-doces.png'
  },
  {
    key: 'pizzas',
    label: 'Pizzas',
    icon: 'Assets/categories-icons/icon-pizzas.png',
    banner: 'Assets/banners/banner-pizzas.png'
  }
];


/* 3. ITENS DO CARDÁPIO ==========================================================================
   
   ========================================================================== */

/**
 * Estrutura geral:
 *
 * menu = {
 *   categoria: {
 *     'Título da seção': [
 *       {
 *         name: 'Nome do produto',
 *         price: 10,
 *         desc: 'Descrição do produto.',
 *         premium: true
 *       }
 *     ]
 *   }
 * }
 *
 * Campos de produto:
 * - name: nome exibido e usado para identificar o produto;
 * - price: preço numérico em reais;
 * - desc: descrição apresentada no card;
 * - premium: opcional; destaca produtos especiais.
 */
const menu = {
  /* ------------------------------------------------------------------------
     COMBOS DE LANCHES
     ------------------------------------------------------------------------ */

  combos: {
    'Combos de Lanches': [
      {
        name: 'Combo X-Salada + Refri',
        price: 20,
        desc: 'X-salada completo com hambúrguer suculento, alface crocante e refri gelado para acompanhar.',
        image: 'Assets/menu-itens/combo.png'
      },
      {
        name: 'Combo Dogão Duplo',
        price: 22,
        desc: 'Dois dogões com salsicha, milho, batata palha e molhos da casa.',
        image: 'Assets/menu-itens/combo.png'
      },
      {
        name: 'Combo X-Bacon + Batata + Refri',
        price: 28,
        desc: 'X-bacon crocante com batata dourada e refri gelado.',
        image: 'Assets/menu-itens/combo.png'
      },
      {
        name: 'Combo Família (4 Pastéis + Refri 2L)',
        price: 45,
        premium: true,
        desc: 'Quatro pastéis sortidos de massa fininha mais refri 2L para dividir com a família.',
        image: 'Assets/menu-itens/combo.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     CULINÁRIA ORIENTAL
     ------------------------------------------------------------------------ */

  oriental: {
    'Culinária Oriental': [
      {
        name: 'Temaki de Salmão',
        price: 18,
        desc: 'Cone de alga crocante recheado com salmão fresco e arroz temperado.',
        image: 'Assets/menu-itens/sashimi.png'
      },
      {
        name: 'Temaki Philadelphia',
        price: 20,
        desc: 'Salmão cremoso com cream cheese e cebolinha em cone crocante.',
        image: 'Assets/menu-itens/sashimi.png'
      },
      {
        name: 'Hot Roll (8un)',
        price: 24,
        desc: 'Oito unidades empanadas e fritas com recheio de salmão e cream cheese.',
        image: 'Assets/menu-itens/sashimi.png'
      },
      {
        name: 'Yakisoba de Frango',
        price: 22,
        desc: 'Macarrão oriental salteado com frango, legumes frescos e molho especial.',
        image: 'Assets/menu-itens/sashimi.png'
      },
      {
        name: 'Sashimi de Salmão (10un)',
        price: 25,
        premium: true,
        desc: 'Dez fatias frescas de salmão selecionado, corte do dia.',
        image: 'Assets/menu-itens/sashimi.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     DOGÃO
     ------------------------------------------------------------------------ */

  dogao: {
    'Dogão': [
      {
        name: 'Dogão Simples',
        price: 10,
        desc: 'Pão macio, salsicha, ketchup, mostarda e batata palha.',
        image: 'Assets/menu-itens/hotdog.png'
      },
      {
        name: 'Dogão c/ Bacon',
        price: 13,
        desc: 'Dogão tradicional com fatias crocantes de bacon.',
        image: 'Assets/menu-itens/hotdog.png'
      },
      {
        name: 'Dogão c/ Catupiry',
        price: 13,
        desc: 'Dogão cremoso com generosa camada de catupiry original.',
        image: 'Assets/menu-itens/hotdog.png'
      },
      {
        name: 'Dogão Vina Especial',
        price: 14,
        desc: 'Com vinagrete fresco da casa e molho especial.',
        image: 'Assets/menu-itens/hotdog.png'
      },
      {
        name: 'Dogão Completo',
        price: 16,
        premium: true,
        desc: 'Tudo que tem direito: bacon, catupiry, milho, batata palha e molhos.',
        image: 'Assets/menu-itens/hotdog.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     LANCHES
     ------------------------------------------------------------------------ */

  lanches: {
    'Lanches': [
      {
        name: 'Cheeseburguer',
        price: 12,
        desc: 'Hambúrguer grelhado com queijo derretido no pão macio.',
        image: 'Assets/menu-itens/burguer.png'
      },
      {
        name: 'X-Salada',
        price: 14,
        desc: 'Hambúrguer, queijo, alface, tomate e maionese da casa.',
        image: 'Assets/menu-itens/burguer.png'
      },
      {
        name: 'X-Egg',
        price: 15,
        desc: 'Com ovo frito na chapa, queijo e hambúrguer suculento.',
        image: 'Assets/menu-itens/burguer.png'
      },
      {
        name: 'X-Bacon',
        price: 16,
        desc: 'Hambúrguer com bacon crocante e queijo derretido.',
        image: 'Assets/menu-itens/burguer.png'
      },
      {
        name: 'X-Calabresa',
        price: 16,
        desc: 'Calabresa fatiada na chapa com queijo e vinagrete.',
        image: 'Assets/menu-itens/burguer.png'
      },
      {
        name: 'X-Tudo Artesanal',
        price: 20,
        premium: true,
        desc: 'Blend artesanal 180g com ovo, bacon, calabresa, queijo e salada.',
        image: 'Assets/menu-itens/burguer.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     PASTÉIS
     ------------------------------------------------------------------------
     
     Sabores representativos seguindo o mesmo padrão das outras categorias.
     Enquanto não houver fotos individuais, todos os itens utilizam a imagem
     definida em `CATEGORY_ITEM_PLACEHOLDER.pasteis`.
     ------------------------------------------------------------------------ */

  pasteis: {
    'Pastéis': [
      {
        name: 'Pastel de Carne',
        price: 8,
        desc: 'Recheio de carne moída bem temperada em massa fininha e crocante.',
        image: 'Assets/menu-itens/pastel.png'
      },
      {
        name: 'Pastel de Queijo',
        price: 8,
        desc: 'Mussarela derretida em massa crocante, simples e irresistível.',
        image: 'Assets/menu-itens/pastel.png'
      },
      {
        name: 'Pastel de Frango c/ Catupiry',
        price: 10,
        desc: 'Frango desfiado com catupiry cremoso.',
        image: 'Assets/menu-itens/pastel.png'
      },
      {
        name: 'Pastel de Calabresa c/ Queijo',
        price: 10,
        desc: 'Calabresa fatiada com queijo puxa-puxa.',
        image: 'Assets/menu-itens/pastel.png'
      },
      {
        name: 'Pastel de Costela',
        price: 15,
        premium: true,
        desc: 'Costela desfiada suculenta, receita especial da casa.',
        image: 'Assets/menu-itens/pastel.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     BEBIDAS
     ------------------------------------------------------------------------
     
     Esta categoria contém várias subseções:
     - Coca-Cola;
     - Tubaína e outras bebidas;
     - Água.
     ------------------------------------------------------------------------ */

  bebidas: {
    'Coca-Cola': [
      {
        name: 'Coca-Cola Lata',
        price: 6,
        desc: 'Lata 350ml bem gelada.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Coca-Cola KS 300ml',
        price: 7,
        desc: 'Garrafa KS 300ml, ideal para acompanhar o lanche.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Coca-Cola LS 600ml',
        price: 10,
        desc: 'Garrafa 600ml para dividir ou matar a sede.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Coca-Cola 2 Litros',
        price: 15,
        desc: 'Pet 2L para a família toda.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Coca-Cola Mini 200ml',
        price: 3.50,
        desc: 'Mini garrafa 200ml, na medida certa.',
        image: 'Assets/menu-itens/refri.png'
      }
    ],

    'Tubaína & Outros': [
      {
        name: 'Tubaína Garrafa',
        price: 7,
        desc: 'Tubaína tradicional em garrafa, bem gelada.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Tubaína 350ml',
        price: 4.50,
        desc: 'Tubaína 350ml para refrescar.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Tubaína Lata',
        price: 5,
        desc: 'Lata de tubaína gelada, sabor nostálgico.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Guaraná Mini 200ml',
        price: 3.50,
        desc: 'Guaraná mini 200ml, docinho na medida.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Tampico',
        price: 7,
        desc: 'Suco Tampico gelado, sabor frutas.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Nativo',
        price: 3.50,
        desc: 'Suco Nativo gelado para acompanhar.',
        image: 'Assets/menu-itens/refri.png'
      }
    ],

    'Água': [
      {
        name: 'Água Natural',
        price: 3,
        desc: 'Água mineral natural sem gás.',
        image: 'Assets/menu-itens/refri.png'
      },
      {
        name: 'Água com Gás',
        price: 3.50,
        desc: 'Água mineral com gás, bem gelada.',
        image: 'Assets/menu-itens/refri.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     DOCES E SOBREMESAS
     ------------------------------------------------------------------------ */

  doces: {
    'Doces e Sobremesas': [
      {
        name: 'Casadinho',
        price: 6,
        desc: 'Docinho de leite ninho com chocolate, macio e cremoso.',
        image: 'Assets/menu-itens/doce.png'
      },
      {
        name: 'Pudim de Leite',
        price: 8,
        desc: 'Pudim cremoso com calda de caramelo.',
        image: 'Assets/menu-itens/doce.png'
      },
      {
        name: 'Mousse de Maracujá',
        price: 8,
        desc: 'Mousse aerada com calda de maracujá natural.',
        image: 'Assets/menu-itens/doce.png'
      },
      {
        name: 'Bolo no Pote',
        price: 10,
        desc: 'Camadas de bolo fofinho com brigadeiro no pote.',
        image: 'Assets/menu-itens/doce.png'
      },
      {
        name: 'Brownie c/ Sorvete',
        price: 14,
        premium: true,
        desc: 'Brownie quentinho com bola de sorvete de creme.',
        image: 'Assets/menu-itens/doce.png'
      }
    ]
  },

  /* ------------------------------------------------------------------------
     PIZZAS
     ------------------------------------------------------------------------ */

  pizzas: {
    'Pizzas': [
      {
        name: 'Pizza de Mussarela',
        price: 22,
        desc: 'Molho de tomate, mussarela derretida e orégano.',
        image: 'Assets/menu-itens/pizza.png'
      },
      {
        name: 'Pizza de Calabresa',
        price: 25,
        desc: 'Calabresa fatiada, cebola roxa e mussarela.',
        image: 'Assets/menu-itens/pizza.png'
      },
      {
        name: 'Pizza Portuguesa',
        price: 28,
        desc: 'Presunto, ovo, ervilha, cebola e mussarela.',
        image: 'Assets/menu-itens/pizza.png'
      },
      {
        name: 'Pizza Frango c/ Catupiry',
        price: 28,
        desc: 'Frango desfiado com catupiry e mussarela.',
        image: 'Assets/menu-itens/pizza.png'
      },
      {
        name: 'Pizza de Bacon',
        price: 26,
        desc: 'Bacon crocante com mussarela e orégano.',
        image: 'Assets/menu-itens/pizza.png'
      },
      {
        name: 'Pizza Quatro Queijos',
        price: 30,
        premium: true,
        desc: 'Mussarela, provolone, parmesão e catupiry.',
        image: 'Assets/menu-itens/pizza.png'
      }
    ]
  }
};


/* ==========================================================================
   4. PROMOÇÕES EM DESTAQUE
   ========================================================================== */

/**
 * Ofertas exibidas no slideshow principal do topo da página.
 *
 * Estrutura de cada promoção:
 *
 * {
 *   pill: 'Rótulo curto da promoção',
 *   title: 'Título da promoção<br>Segunda linha',
 *   img: 'caminho/da/imagem.png',
 *   name: 'Nome exato do produto dentro de menu'
 * }
 *
 * IMPORTANTE:
 * O campo `name` deve corresponder exatamente ao nome de um produto existente.
 * Isso permite que o produto real seja localizado e adicionado ao pedido.
 *
 * O campo `title` aceita `<br>` para criar uma quebra de linha no slideshow.
 */
const PROMOS = [
  {
    pill: '⚡ Oferta Relâmpago',
    title: 'Combo X-Salada + Refri<br>20% OFF no seu primeiro pedido',
    img: 'Assets/produtos/foto-prato-exemplo.jpg',
    name: 'Combo X-Salada + Refri'
  },
  {
    pill: '🔥 Mais Pedido',
    title: 'Combo Família<br>4 Pastéis + Refri 2L',
    img: 'Assets/menu-itens/combo.png',
    name: 'Combo Família (4 Pastéis + Refri 2L)'
  },
  {
    pill: '🍕 Destaque',
    title: 'Pizza Quatro Queijos<br>Sabor irresistível na hora certa',
    img: 'Assets/menu-itens/pizza.png',
    name: 'Pizza Quatro Queijos'
  }
];


/* ==========================================================================
   5. IMAGENS SUBSTITUTAS
   ========================================================================== */

/**
 * Imagem genérica utilizada quando nenhuma outra imagem apropriada estiver
 * disponível para o produto.
 */
const PLACEHOLDER_IMG = 'Assets/produtos/foto-prato-exemplo.jpg';

/**
 * Imagem substituta específica para cada categoria.
 *
 * Essas imagens são usadas nos produtos que ainda não possuem foto individual.
 *
 * IMPORTANTE:
 * Cada chave abaixo deve corresponder a uma chave existente em:
 * - CATEGORIES[].key;
 * - menu.
 */
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


/* ==========================================================================
   6. DESCRIÇÃO PADRÃO
   ========================================================================== */

/**
 * Texto utilizado quando um produto não possui uma descrição própria.
 */
const FALLBACK_DESC =
  'Produto preparado na hora com ingredientes selecionados.';