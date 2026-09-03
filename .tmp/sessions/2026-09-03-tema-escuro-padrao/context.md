# Task Context: Tema escuro padrão

Session ID: 2026-09-03-tema-escuro-padrao
Created: 2026-09-03T10:10:00Z
Status: in_progress

## Current Request
mude somente o tema padrão para sempre abrir no modo escuro

## Context Files (Standards to Follow)
- Nenhum contexto formal encontrado (.opencode/context/ inexistente)

## Reference Files (Source Material to Look At)
- index.html:18-63 — tokens :root e :root.dark
- index.html:2786-2810 — toggleTheme(), updateThemeLabel(), IIFE de init
- index.html:2379 — botão theme-widget

## External Docs Fetched
Nenhuma

## Components
- Inicialização do tema (IIFE linhas 2801-2810)

## Constraints
- Mudança mínima: só o default, sem alterar toggle manual
- Preservar localStorage override quando usuário já escolheu

## Exit Criteria
- [ ] Primeira visita (sem localStorage) abre em dark
- [ ] Toggle manual continua funcionando
