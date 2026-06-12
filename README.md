# Vistoria de Reparos — Morais Engenharia

App PWA para vistoria de reparos na entrega de imóveis.  
Funciona 100% offline após a primeira abertura. Dados salvos localmente no dispositivo.

---

## Como publicar no GitHub Pages (passo a passo)

### 1. Criar o repositório

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nome sugerido: `vistoria-morais` (ou qualquer nome)
4. Marque como **Public**
5. Clique em **"Create repository"**

### 2. Fazer upload dos arquivos

Na página do repositório recém-criado:

1. Clique em **"uploading an existing file"** (ou "Add file → Upload files")
2. Arraste ou selecione os 4 arquivos:
   - `index.html`
   - `vistoria_reparo.html`
   - `manifest.json`
   - `sw.js`
3. Clique em **"Commit changes"**

### 3. Ativar o GitHub Pages

1. No repositório, clique em **Settings** (engrenagem)
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione `Deploy from a branch`
4. Em **"Branch"**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**

Após ~2 minutos, o app estará disponível em:
```
https://SEU_USUARIO.github.io/vistoria-morais/
```

### 4. Compartilhar o link

Envie a URL para qualquer pessoa. Ela abre no tablet/celular sem instalar nada.

---

## Como usar offline (instalar no dispositivo)

### Android (Chrome)
- Abra o link no Chrome
- Aparecerá um banner **"Adicionar à tela inicial"** — ou use o botão 📲 no topo do app
- Após instalar, o app abre sem internet como um app normal

### iPhone / iPad (Safari)
- Abra o link no **Safari** (obrigatório)
- Toque no ícone de compartilhar (quadrado com seta ↑)
- Selecione **"Adicionar à Tela de Início"**
- Após isso, o app funciona offline

### Computador / tablet com Chrome
- Abra o link
- Clique no ícone de instalação na barra de endereço (ícone de computador com +)

---

## Como atualizar o app

1. Substitua os arquivos no GitHub com a nova versão
2. No `sw.js`, incremente a versão do cache: `const CACHE = 'vistoria-morais-v4'`  
   (isso força todos os dispositivos a baixar a versão nova na próxima abertura com internet)

---

## Dados e privacidade

- Todos os dados (fotos, assinaturas, textos) ficam **armazenados localmente** no dispositivo
- Nenhuma informação é enviada para servidores externos
- Use **Exportar Backup (📤)** para salvar um arquivo `.json` com todos os dados
- Use **Importar (📥)** para restaurar em outro dispositivo
