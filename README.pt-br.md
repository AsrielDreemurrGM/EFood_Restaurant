<div>
  <h1>🍽️ Efood Restaurant</h1>
  <p>
    This README is also available in
    <a href="./README.md">English</a>.
  </p>
  <p>
    Efood é uma plataforma online de restaurantes construída com <strong>React</strong> e
    <strong>TypeScript</strong>, que permite aos usuários navegar pelos restaurantes,
    visualizar pratos, gerenciar o carrinho e simular um processo completo de checkout com
    validação de formulários, máscaras de entrada, animações e melhorias de acessibilidade.
    Os dados são buscados dinamicamente usando <strong>RTK Query</strong> de uma
    <strong>API personalizada mantida e operada por mim</strong>, garantindo informações e imagens
    atualizadas dos restaurantes.
  </p>
  <h2>📌 Principais Destaques do Projeto</h2>
  <ul>
    <li>Renderização dinâmica de restaurantes e pratos usando <strong>RTK Query</strong> da minha API</li>
    <li>Funcionalidade de carrinho com <strong>Redux Toolkit</strong></li>
    <li>Checkout em múltiplas etapas com validação via <strong>Formik</strong> + <strong>Yup</strong></li>
    <li>Campos com máscaras para cartão de crédito e entrega usando <strong>React Input Mask Next</strong></li>
    <li>Animações de carregamento usando <strong>Lottie</strong></li>
    <li>Componentes acessíveis com HTML semântico, atributos ARIA e labels ocultos</li>
    <li>Design responsivo mobile-first e rolagem suave</li>
  </ul>
  <h2>🚀 Demo</h2>
  <p>
    Visite o hosteamento do projeto na Vercel:<br>
    <a href="https://e-food-restaurant.vercel.app" target="_blank">https://e-food-restaurant.vercel.app</a>
  </p>
  <p>
    Vídeo demonstrativo (sem áudio):<br>
    <a href="https://www.youtube.com/watch?v=dnK2-_QMqaU" target="_blank">Assista à demonstração completa no YouTube</a>
  </p>
  <h2>📂 Estrutura de Pastas</h2>
  <pre><code>
src/
├── components/        # Componentes de UI reutilizáveis
├── containers/        # Carrinho, formulários e seções principais
├── pages/             # Views de rotas (Home, Profile)
├── services/          # Slices da API e configuração do RTK Query
├── styles/            # Estilos globais e temas
├── types/             # Tipos globais do TypeScript
├── utils/             # Máscaras de entrada e funções auxiliares
└── App.tsx            # Entrada principal da aplicação
  </code></pre>
  <h2>📦 Tech Stack</h2>
  <ul>
    <li><strong>React</strong> ^18.2</li>
    <li><strong>TypeScript</strong> ^4.9</li>
    <li><strong>Redux Toolkit</strong> & <strong>React Redux</strong></li>
    <li><strong>RTK Query</strong> para integração com API</li>
    <li><strong>React Router DOM</strong> ^7.2</li>
    <li><strong>Formik</strong> + <strong>Yup</strong> para formulários</li>
    <li><strong>React Input Mask Next</strong></li>
    <li><strong>Styled Components</strong> ^6.1</li>
    <li><strong>Lottie React</strong> & <strong>@lottiefiles/react-lottie-player</strong></li>
    <li><strong>ESLint</strong>, <strong>Prettier</strong> para formatação</li>
  </ul>
  <h2>🧪 Como Executar o Projeto</h2>
  <ol>
    <li>
      <strong>Clone o repositório</strong>:
      <pre><code>git clone https://github.com/AsrielDreemurrGM/EFood_Restaurant</code></pre>
    </li>
    <li>
      <strong>Navegue até a pasta</strong>:
      <pre><code>cd EFood_Restaurant</code></pre>
    </li>
    <li>
      <strong>Instale as dependências</strong>:
      <pre><code>npm install</code></pre>
      ou
      <pre><code>yarn install</code></pre>
    </li>
    <li>
      <strong>Inicie o servidor de desenvolvimento</strong>:
      <pre><code>npm start</code></pre>
      ou
      <pre><code>yarn start</code></pre>
    </li>
  </ol>
  <h2>🔧 Scripts</h2>
  <ul>
    <li><strong>start</strong> – Executa o projeto em modo de desenvolvimento</li>
    <li><strong>build</strong> – Cria o build para produção</li>
    <li><strong>test</strong> – Executa os testes</li>
  </ul>
  <h2>🌐 Endpoint da API</h2>
  <p>
    Todos os dados são obtidos da <strong>minha API personalizada</strong>:
    <pre><code>https://e-food-api.vercel.app/</code></pre>
  </p>
  <h2>📌 Destaques dos Commits</h2>
  <ul>
    <li><strong>Acessibilidade</strong>: Papéis ARIA, estrutura semântica, suporte a leitores de tela</li>
    <li><strong>Checkout</strong>: Formik + Yup com máscaras e feedback de validação</li>
    <li><strong>Carrinho</strong>: Gerenciamento completo com reset retardado e modal de sucesso</li>
    <li><strong>Animação</strong>: Integração de animações Lottie para feedback de carregamento</li>
    <li><strong>Roteamento</strong>: Rotas dinâmicas para restaurantes e pratos</li>
    <li><strong>Performance</strong>: Console warnings corrigidos e tipos otimizados</li>
  </ul>
  <h2>📜 Licença</h2>
  <p>Este projeto está licenciado sob a <strong>MIT License</strong>.</p>
</div>
