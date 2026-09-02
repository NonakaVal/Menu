# Task Context: Product Cards - Visualização de Produto

Session ID: 2026-09-02-product-cards
Created: 2026-09-02T11:26:00Z
Status: in_progress

## Current Request
Adicionar cards de visualização de produto: miniatura lateral de representação do prato em cada item da lista, ao clicar expande para pop-up full screen mostrando foto + breve descrição do item. Manter proposta e layout compacto e bonito, encaixando no estilo atual existente. Placeholder único: Assets/pratos/exemplo.jpg (2.7M JPEG 4080x3072) para todos os itens por hora.

## Context Files (Standards to Follow)
- /home/val/.opencode/context/core/standards/code-quality.md
- /home/val/.opencode/context/ui/web/ui-styling-standards.md
- /home/val/.opencode/context/ui/web/design-systems.md
- /home/val/.opencode/context/ui/web/animation-basics.md
- /home/val/.opencode/context/ui/web/animation-components.md
- /home/val/.opencode/context/ui/web/animation-advanced.md
- /home/val/.opencode/context/ui/web/animation-loading.md

## Reference Files (Source Material to Look At)
- /home/val/Projetos/Menu/index.html (1672 lines, vanilla single-file, já com mods anteriores: toast, bump, pay, etc)
- /home/val/Projetos/Menu/Assets/pratos/exemplo.jpg
- /home/val/Projetos/Menu/Assets/logo-banner-nbg.png

## External Docs Fetched
Nenhum — vanilla; placeholder local.

## Components
1. Dados: estender menu.* com image + desc por item (usando mesmo placeholder)
2. Miniatura: .thumb 40x40 no item-left, hover Y-2, fallback, lazy, click -> modal
3. Modal fullscreen: overlay + sheet com slideUp/fadeIn, hero img 16:9, Playfair título + preço, descrição, selo, stepper, obs
4. Wiring: openProductModal / closeProductModal, sync com cart (inc/dec), trap focus, Esc, click overlay, respects prefers-reduced-motion
5. Responsivo: modal centered 520px desktop, bottom-sheet em <600px; mantém компактness da lista

## Constraints
- Single file index.html, sem build, manter tema claro/escuro, cart e summary intactos
- Thumb não pode quebrar min-height 44px nem esconder preço/controles; usar object-fit cover, border-radius 8, shimmer loading
- Imagem placeholder grande (2.7M) — usar loading="lazy", decoded, evitar re-download desnecessário; considerar nota para futura compressão
- A11y: role dialog, aria-modal, focus trap, Esc close
- Performance: só transform/opacity para animações (60fps)

## Exit Criteria
- [ ] Cada item exibe thumb 40x40 lateral (esq) com placeholder, hover sutil, clique abre modal
- [ ] Modal fullscreen mostra imagem grande (mesmo placeholder), nome (Playfair), preço, desc breve, badge premium se for
- [ ] Modal tem controles de quantidade e adiciona ao carrinho (sync com lista + toast)
- [ ] Fecha por X, overlay click, Esc; animações 300/350ms ease-out/in, reduzido se prefers-reduced-motion
- [ ] Layout permanece compacto, bonito, responsivo, tema claro/escuro ok
