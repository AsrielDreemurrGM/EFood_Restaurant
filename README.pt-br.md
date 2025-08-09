<div>
  <h1>🍽️ Efood Restaurant</h1>
  <p>
    This README is also available in <a href="./README.md">English</a>.
  </p>
  <p>
    Efood é uma plataforma de restaurante online desenvolvida com <strong>React</strong> e
    <strong>TypeScript</strong>, permitindo que usuários naveguem por restaurantes, visualizem pratos,
    gerenciem o carrinho e simulem um processo completo de finalização de compra com validação de formulários,
    máscaras de entrada, animações e melhorias de acessibilidade. Os dados são obtidos dinamicamente usando
    <strong>RTK Query</strong> a partir de uma API pública externa.
  </p>
  <h2>📌 Destaques do Projeto</h2>
  <ul>
    <li>Renderização dinâmica de restaurantes e pratos via <strong>RTK Query</strong>;</li>
    <li>Funcionalidade de carrinho implementada com <strong>Redux Toolkit</strong>;</li>
    <li>Checkout em múltiplas etapas com <strong>Formik</strong> + <strong>Yup</strong>;</li>
    <li>Máscaras de entrada para cartão de crédito e campos de entrega usando <strong>React Input Mask Next</strong>;</li>
    <li>Animações de carregamento com <strong>Lottie</strong>;</li>
    <li>Componentes acessíveis com HTML semântico, atributos ARIA e rótulos ocultos;</li>
    <li>Design responsivo e mobile-first com rolagem suave.</li>
  </ul>
  <h2>🚀 Demonstração</h2>
  <p>
    Visite o hosteamento do projeto na Vercel:<br>
    <a href="https://e-food-restaurant.vercel.app" target="_blank">https://e-food-restaurant.vercel.app</a>
  </p>
  <p>
    Demonstração em vídeo (sem som):<br>
    <a href="https://www.youtube.com/watch?v=dnK2-_QMqaU" target="_blank">Assista à demonstração completa no YouTube</a>
  </p>
  <h2>📂 Estrutura de Pastas</h2>
  <pre><code>
src/
├── components/        # Componentes reutilizáveis
├── containers/        # Carrinho, formulários e seções principais
├── pages/             # Páginas principais da aplicação (Home, Perfil)
├── services/          # Slices da API e configuração do RTK Query
├── styles/            # Estilos globais e temas
├── types/             # Tipagens globais do TypeScript
├── utils/             # Funções auxiliares e máscaras de entrada
└── App.tsx            # Componente principal da aplicação
  </code></pre>
  <h2>📦 Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>React</strong> ^18.2</li>
    <li><strong>TypeScript</strong> ^4.9</li>
    <li><strong>Redux Toolkit</strong> & <strong>React Redux</strong></li>
    <li><strong>RTK Query</strong> para consumo da API</li>
    <li><strong>React Router DOM</strong> ^7.2</li>
    <li><strong>Formik</strong> + <strong>Yup</strong> para formulários</li>
    <li><strong>React Input Mask Next</strong></li>
    <li><strong>Styled Components</strong> ^6.1</li>
    <li><strong>Lottie React</strong> & <strong>@lottiefiles/react-lottie-player</strong></li>
    <li><strong>ESLint</strong> e <strong>Prettier</strong> para padronização</li>
  </ul>
  <h2>🧪 Como Executar o Projeto</h2>
  <ol>
    <li>
      <strong>Clone o repositório</strong>:
      <pre><code>git clone https://github.com/AsrielDreemurrGM/EFood_Restaurant</code></pre>
    </li>
    <li>
      <strong>Entre na pasta do projeto</strong>:
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
  <h2>🔧 Scripts Disponíveis</h2>
  <ul>
    <li><strong>start</strong> – Executa o projeto em modo de desenvolvimento;</li>
    <li><strong>build</strong> – Gera a versão final de produção;</li>
    <li><strong>test</strong> – Executa os testes.</li>
  </ul>
  <h2>🌐 Endpoint da API</h2>
  <p>
    Os dados são fornecidos pela seguinte API:
    <pre><code>https://ebac-fake-api.vercel.app/api/efood/</code></pre>
  </p>
  <h2>📌 Destaques dos Commits</h2>
  <ul>
    <li><strong>Acessibilidade</strong>: uso de ARIA, estrutura semântica e suporte a leitores de tela;</li>
    <li><strong>Checkout</strong>: validação com Formik + Yup e máscaras nos campos do formulário;</li>
    <li><strong>Carrinho</strong>: lógica completa de adicionar, remover, resetar e exibir resumo;</li>
    <li><strong>Animações</strong>: animações de feedback usando Lottie;</li>
    <li><strong>Rotas</strong>: rotas dinâmicas para restaurantes e pratos;</li>
    <li><strong>Desempenho</strong>: melhorias em tipos e correções de warnings no console.</li>
  </ul>
  <h2>📜 Licença</h2>
  <p>Este projeto está licenciado sob a <strong>Licença MIT</strong>.</p>
</div>
