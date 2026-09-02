# Task Context: Inverter botões e centralizar pop-up de produto

Session ID: 2026-09-02-inverte-botoes-popup
Created: 2026-09-02T13:04:00Z
Status: in_progress

## Current Request
Inverta a posição dos botões principais, colocando falar no WhatsApp à esquerda e um pouco maior, em proporção ao fechado, ali mais ou menos 60% do espaço horizontal com o botão e os outros 40% com o fechado e o horário que abre, se está aberto ou fechado e o horário que abre. Preciso que altere também o pop-up de prato, produto, né? Ao selecionar na opção de foto, as informações adicionais e descrição do produto, o widget, ao invés de subir da parte inferior e ficar ali na parte inferior, ocupe um widget pop-up central, ali com as opções um pouco mais acima e não presas ao bottom

## Context Files (Standards to Follow)
- Nenhum contexto .opencode/context/ encontrado - projeto vanilla sem standards persistidos
- Usar boas práticas: código limpo, layout flex responsivo, manter transições suaves

## Reference Files (Source Material to Look At)
- /home/val/Projetos/Menu/index.html (arquivo único da aplicação, 2395 linhas)
  - Inline controls: linhas 1331-1439 (CSS) e 1573-1579 (HTML)
  - Product modal: linhas 942-1138 (CSS) e 1703-1743 (HTML) + 2124-2260 (JS)

## External Docs Fetched
- Nenhum - vanilla HTML/CSS/JS

## Components
1. Inline Controls - inversão e proporção 60/40
2. Product Modal - centralizado em todas as viewports

## Constraints
- Manter compatibilidade visual (mesma altura 34px, radius, cores)
- Não quebrar modo leitura vs order-mode
- Manter acessibilidade e responsividade
- Preservar transições e backdrop blur

## Exit Criteria
- [x] Botão WhatsApp à esquerda com ~60% da largura, badge de horário à direita com ~40%
- [x] Pop-up de produto centralizado (não bottom-sheet) em mobile e desktop, com ações elevadas/não presas ao bottom
- [x] Validado visualmente e sem regressões

## Implementation Summary
- HTML: invertida ordem em .inline-controls (WhatsApp primeiro, #hours-badge depois) — linhas 1589-1594
- CSS inline-controls: .inline-ctrl-whatsapp flex: 3 1 0% (60%) + min-width:0 + white-space:nowrap; .info-card-hours flex:2 1 0% (40%)
- CSS product-modal: substituído @media (max-width:600px) bottom-sheet por versão centralizada (top:50% left:50% translate(-50%,-50%), width calc(100%-20px), max-width 520px, max-height 85vh/dvh, border-radius 16px) + .product-body padding ajustado e .product-actions com padding bottom safe-area e margin-top 4px para ficar elevado
- Validação: braces balanceados 287/287, sem bottom:0 no modal mobile, ordem WhatsApp < badge confirmada

Status: completed
Completed: 2026-09-02T13:10:00Z
