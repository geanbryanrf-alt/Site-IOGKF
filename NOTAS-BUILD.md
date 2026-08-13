# Por que o build usa `--webpack`

O `npm run build` roda `next build --webpack` em vez do padrão do Next 16,
que é o Turbopack. Não é preferência: com o Turbopack o build **quebra na
Vercel**.

## O sintoma

```
Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'
  > 178 |   src: url(@vercel/turbopack-next/internal/font/google/font?...)
  ./src/app/layout.tsx
Error: Command "npm run build" exited with 1
```

Dezenas de erros iguais, todos apontando para o CSS que o Next gera para as
fontes do Google carregadas em `src/app/layout.tsx` (Inter, Montserrat e
Noto Serif JP, via `next/font/google`).

## A causa

O carregador de fontes do Turbopack gera um CSS que aponta para um módulo
interno (`@vercel/turbopack-next/internal/font/google/font`). Esse módulo
não é resolvido no ambiente de build da Vercel, e cada `@font-face` do CSS
vira um erro de módulo não encontrado.

O build passa na máquina local mesmo com Turbopack — o que torna a falha
fácil de não perceber até o deploy.

## O que fazer no futuro

Ao atualizar o Next, vale testar se o Turbopack já resolve. Basta rodar:

    npx next build

Se compilar e o deploy passar, o `--webpack` pode sair do `package.json`.
Enquanto isso, mantenha a flag: o webpack compila em ~36s contra ~14s do
Turbopack, e essa diferença não justifica um deploy quebrado.

A alternativa definitiva seria parar de usar `next/font/google` e servir as
fontes do próprio projeto (`next/font/local`), o que também elimina o
download de 136 arquivos (4,2 MB) que o build faz no servidor do Google.
