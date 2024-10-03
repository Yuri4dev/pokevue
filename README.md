# Pokévue

![Pokémon Manager Logo](https://example.com/logo.png) <!-- Substitua pelo URL do seu logo -->

## Descrição

A **Pokévue** é uma aplicação web construída com **Vue.js** que permite aos usuários visualizar, filtrar e gerenciar informações sobre Pokémon. Com uma interface amigável e responsiva, os usuários podem explorar detalhes dos Pokémon e interagir com um sistema de modais para visualizar informações detalhadas.

## Funcionalidades

- **Listagem de Pokémon**: Visualize uma lista completa de Pokémon com imagens e tipos.
- **Modal Detalhado**: Clique em um Pokémon para abrir um modal com informações adicionais.
- **Carregar Mais Pokémon**: Acesse mais Pokémon com um simples clique.
- **Filtros Dinâmicos**: Filtre Pokémon por tipo.

## Tecnologias Usadas

- **Frontend**:
  - [Vue.js](https://vuejs.org/) - Framework JavaScript para a construção da interface.
  - [Pinia](https://pinia.vuejs.org/) - Gerenciador de estado para Vue.
- **APIs**:
  - [PokéAPI](https://pokeapi.co/) - API pública utilizada para obter dados de Pokémon.

## Live preview

- **Versão Live**: Você pode testar a versão ao vivo da aplicação clicando [aqui](https://pokevue-zeta.vercel.app/)

## Estrutura do Projeto

```plaintext
└── src
    ├── assets             # Recursos estáticos (imagens, fontes, etc.)
    ├── components         # Componentes Vue
    ├── composables        # Composables Vue
    ├── services           # Serviços para chamadas API
    ├── stores             # Stores do Pinia
    ├── types              # Tipos TypeScript
    ├── utils              # Funções utilitárias
    ├── views              # Visões ou páginas da aplicação
    └── App.vue            # Componente raiz
```
