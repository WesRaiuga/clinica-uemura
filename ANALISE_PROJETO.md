# Relatório de Análise Técnica - Clínica Uemura

Este documento apresenta uma análise detalhada do projeto, identificando inconsistências, propondo um Design System unificado e definindo diretrizes para profissionalizar o fluxo de desenvolvimento.

---

## 1. Análise de Inconsistências e Melhorias

### 🎨 CSS e Estilização
*   **Inconsistência de Variáveis:** O projeto possui o `variables.css` com cores hexadecimais (ex: `--primary-color: #bc002d`) e o `index.css` com variáveis Tailwind 4 em formato OKLCH. Isso gera confusão sobre qual "fonte da verdade" usar.
    *   **Solução:** Unificar todas as variáveis de marca no `variables.css` e referenciá-las dentro do tema do Tailwind/CSS puro.
*   **Padrões de Importação Inconsistentes:** Alguns arquivos usam aliases (ex: `@/views/...`) enquanto outros usam caminhos relativos (ex: `../../views/...`).
    *   **Solução:** Padronizar todos os imports para usar o alias `@/` configurado no Vite/TSConfig.
*   **Valores de Estilo Hardcoded em Componentes:** Encontrado no `Home.tsx` (`const backgroundColor = "#ffffff"`).
    *   **Solução:** Substituir por variáveis CSS do Design System.
*   **Uso de Estilos Inline:** Identificado no `App.tsx` para controle de opacidade e transição.
    *   **Solução:** Mover esses estilos para um arquivo CSS Module ou utilizar classes utilitárias para manter a separação de responsabilidades.
*   **Fragmentação de Reset/Base:** O reset CSS está misturado com definições de componentes globais no `index.css`.
    *   **Solução:** Criar um arquivo `base.css` ou `reset.css` separado, ou organizar o `index.css` com camadas claras (`@layer base`, `@layer components`).

### 🏗️ Estrutura e Padrões de Código
*   **Tipagem Provisória:** Algumas interfaces estão simples. Podemos utilizar tipos mais rigorosos para garantir segurança.
    *   **Solução:** Expandir a pasta `src/types` para centralizar interfaces de domínio da clínica.
*   **Lógica de Loader no App:** O `App.tsx` contém lógica de tempo aleatório para o loader. Embora funcional, mistura lógica de infraestrutura com o componente raiz.
    *   **Solução:** Extrair a lógica de carregamento para um Custom Hook (`useAppLoader`).
*   **Gerenciamento de Classes CSS:** Uso de templates strings manuais para concatenar classes (ex: `MenuLinks.tsx`).
    *   **Solução:** Adotar a biblioteca `clsx` ou `tailwind-merge` para uma manipulação de classes mais limpa e segura.

### 🐛 Bugs e Vulnerabilidades (Potenciais)
*   **Segurança de Links Externos:** Links com `target="_blank"` (se houver) devem sempre ter `rel="noreferrer"` para evitar ataques de *tabnabbing*.
*   **Sanitização de Dados:** Caso haja formulários futuros, garantir que não haja injeção de scripts.

---

## 2. Design System Proposto

Para tornar o projeto visualmente consistente e fácil de manter, propomos a seguinte estrutura de tokens:

### 🌈 Paleta de Cores (Tokens)
| Categoria | Variável | Valor Sugerido | Uso |
| :--- | :--- | :--- | :--- |
| **Brand** | `--brand-primary` | `#BC002D` | Cor principal (Logo/CTAs) |
| **Brand** | `--brand-secondary` | `#F8F9FA` | Tons de suporte |
| **Neutral** | `--text-main` | `#1A1A1A` | Títulos e textos pesados |
| **Neutral** | `--text-muted` | `#4A4A4A` | Parágrafos e descrições |
| **Surface** | `--bg-main` | `#FFFFFF` | Fundo principal |
| **Surface** | `--bg-alt` | `#FDF5F6` | Seções de destaque |

### 📐 Escala de Espaçamento (Spacing)
Utilizar múltiplos de `4px` ou `8px` para harmonia visual:
*   `--space-xs`: `0.25rem` (4px)
*   `--space-sm`: `0.5rem` (8px)
*   `--space-md`: `1rem` (16px)
*   `--space-lg`: `2rem` (32px)
*   `--space-xl`: `4rem` (64px)

### 🖋️ Tipografia
*   **Títulos:** `Roboto` ou `Inter` com `font-weight: 700`.
*   **Corpo:** `Roboto` com `line-height: 1.6` para melhor legibilidade.

---

## 3. Configuração de ESLint & Qualidade

Para profissionalizar o código, a configuração do ESLint será expandida com:

1.  **Plugins Recomendados:**
    *   `eslint-plugin-react`: Regras específicas para React.
    *   `eslint-plugin-jsx-a11y`: Garante acessibilidade no HTML/JSX.
    *   `eslint-plugin-import`: Organiza e valida a ordem de imports.
2.  **Integração com Prettier:** Garantir que o espaçamento e estilo de escrita sejam automáticos no salvamento.
3.  **Regras Estritas:** Proibir o uso de `any` no TypeScript e exigir tipos em props de componentes.

---

## 4. Plano de Ação (Recomendações)

1.  **Fase 1 (Limpeza):** Refatorar o `variables.css` com o novo Design System e remover redundâncias no `index.css`.
2.  **Fase 2 (Ferramentas):** Atualizar `eslint.config.js` e `.prettierrc` para os novos padrões.
3.  **Fase 3 (Componentização):** Padronizar a passagem de classes e o uso de CSS Modules em todos os componentes em `src/views`.
4.  **Fase 4 (Acessibilidade):** Revisar todos os botões e links para garantir que leitores de tela funcionem corretamente.

---
**Nota:** Nenhuma alteração foi implementada ainda. Aguardando sua decisão sobre quais pontos priorizar.
