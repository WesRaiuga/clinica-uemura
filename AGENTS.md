# Project Standards & Agent Guidelines

Este documento serve como a "fonte da verdade" para padrões de desenvolvimento, design e qualidade deste projeto. Utilize estas diretrizes para manter a consistência ao criar novos componentes ou refatorar os existentes.

---

## 1. Design System (CSS Variables)
Localização: `src/variables.css`

### Hierarquia de Tokens:
1.  **Primitive Tokens:** Valores puros (ex: `--brand-red: #bc002d`).
2.  **Semantic Tokens:** Vinculados ao uso (ex: `--brand-primary: var(--brand-red)`).
3.  **Component/Legacy Tokens:** Mapeamentos para retrocompatibilidade (ex: `--primary-color: var(--brand-primary)`).

### Escala de Espaçamento (8px base):
- `--space-xs`: 8px (0.5rem)
- `--space-md`: 16px (1rem)
- `--space-lg`: 24px (1.5rem)
- `--space-xl`: 32px (2rem)

---

## 2. Padrões de CSS e Estilização

### Estratégia Híbrida:
- **Tailwind CSS 4:** Utilize para utilitários globais, layout rápido e variáveis de tema.
- **CSS Modules (`.module.css`):** Utilize para estilos específicos de componentes, garantindo isolamento (encapsulamento).
- **Integração:** Sempre utilize o utilitário `cn()` para combinar classes Tailwind com classes de CSS Modules.

### Utilitário `cn`:
```tsx
import { cn } from '@/utils/cn';

<div className={cn(style.container, isAtivo && style.ativo, 'mt-4 px-2')}>
```

---

## 3. Organização de Arquivos e Imports

### Aliases:
- Sempre utilize o alias `@/` para imports a partir da raiz de `src/`.
- Exemplo: `import { cn } from '@/utils/cn';`

### Ordem de Imports (Regra Estrita):
Os imports devem ser agrupados e separados por uma linha em branco na seguinte ordem:
1.  **React:** `import { useState } from 'react';`
2.  **External Libraries:** `import { Link } from 'react-router-dom';`
3.  **Internal/Aliases:** `import { cn } from '@/utils/cn';`
4.  **Parent/Sibling:** `import Item from '../Item';`
5.  **Local Styles:** `import style from './Component.module.css';`

*Nota: Ordem alfabética dentro de cada grupo.*

---

## 4. Arquitetura de Componentes

### Padrão de Escrita:
- Use **Functional Components** com TypeScript.
- Defina interfaces de Props claras.
- Exporte como `default`.

### Acessibilidade (A11y):
- **Botões:** Sempre use `<button type="button">` para ações que não mudam de página. Nunca use `div` ou `span` com `onClick`.
- **Links:** Use `<Link>` do `react-router-dom` para navegação interna.
- **ARIA:** Utilize `aria-label`, `aria-expanded` e `role` conforme necessário.

---

## 5. Qualidade de Código (ESLint & TS)

### Regras Principais:
- **TypeScript:** Proibido o uso de `any`. Use tipos explícitos ou inferência segura.
- **Linting:** O projeto utiliza ESLint 9 (Flat Config) com os seguintes plugins ativos:
    - `import-x`: Controle rigoroso de ordem de importação.
    - `jsx-a11y`: Validação automática de acessibilidade.
    - `react`: Regras de melhores práticas para React 19.

---

## 6. Comandos Úteis para o Agente
- `npm run dev`: Iniciar ambiente de desenvolvimento.
- `npm run lint`: Validar se o código segue os padrões acima.
- `npm run lint -- --fix`: Corrigir problemas automáticos (quando possível).

---

## 7. Assets e Media

### Imagens:
- **Localização:** Armazene em `src/assets/img/`.
- **Importação:** Sempre importe imagens como módulos para garantir o hashing correto no build:
  `import logo from '@/assets/img/logo.png';`
- **Otimização:** Utilize formatos modernos (WebP/SVG) sempre que possível.

### Ícones:
- **Bibliotecas:** O projeto utiliza FontAwesome (via CDN/Classes) e ícones inline.
- **SVGs:** Para ícones personalizados, utilize o padrão inline ou componentes dedicados em `src/components/icons/`.
