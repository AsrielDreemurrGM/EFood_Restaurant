<div>
  <h1>🍽️ Efood Restaurant</h1>
  <p>
    Este README também está disponível em
    <a href="./README.pt-br.md">Português</a>.
  </p>
  <p>
    Efood is an online restaurant platform built with <strong>React</strong> and
    <strong>TypeScript</strong>, offering users the ability to browse restaurants,
    view dishes, manage a cart, and simulate a complete checkout process with form validation,
    input masks, animations, and accessibility enhancements. Data is dynamically fetched using
    <strong>RTK Query</strong> from an external public API.
  </p>
  <h2>📌 Project Highlights</h2>
  <ul>
    <li>Dynamic restaurant and dish rendering using <strong>RTK Query</strong></li>
    <li>Cart functionality powered by <strong>Redux Toolkit</strong></li>
    <li>Multi-step checkout with <strong>Formik</strong> + <strong>Yup</strong> validation</li>
    <li>Masked inputs for credit card and delivery fields using <strong>React Input Mask Next</strong></li>
    <li>Loading animations using <strong>Lottie</strong></li>
    <li>Accessible components with semantic HTML, ARIA attributes, and hidden labels</li>
    <li>Responsive mobile-first design and smooth scrolling</li>
  </ul>
  <h2>🚀 Demo</h2>
  <p>
    Video walkthrough (silent):<br>
    <a href="https://www.youtube.com/watch?v=dnK2-_QMqaU" target="_blank">Watch the full demo on YouTube</a>
  </p>
  <h2>📂 Folder Structure</h2>
  <pre><code>
src/
├── components/        # Reusable UI components
├── containers/        # Cart, forms, and main sections
├── pages/             # Route-level views (Home, Profile)
├── services/          # API slices and RTK Query config
├── styles/            # Global styles and themes
├── types/             # TypeScript global types
├── utils/             # Input masks and helper functions
└── App.tsx            # Main app entry
  </code></pre>
  <h2>📦 Tech Stack</h2>
  <ul>
    <li><strong>React</strong> ^18.2</li>
    <li><strong>TypeScript</strong> ^4.9</li>
    <li><strong>Redux Toolkit</strong> & <strong>React Redux</strong></li>
    <li><strong>RTK Query</strong> for API integration</li>
    <li><strong>React Router DOM</strong> ^7.2</li>
    <li><strong>Formik</strong> + <strong>Yup</strong> for forms</li>
    <li><strong>React Input Mask Next</strong></li>
    <li><strong>Styled Components</strong> ^6.1</li>
    <li><strong>Lottie React</strong> & <strong>@lottiefiles/react-lottie-player</strong></li>
    <li><strong>ESLint</strong>, <strong>Prettier</strong> for formatting</li>
  </ul>
  <h2>🧪 How to Run the Project</h2>
  <ol>
    <li>
      <strong>Clone the repository</strong>:
      <pre><code>git clone https://github.com/AsrielDreemurrGM/EFood_Restaurant</code></pre>
    </li>
    <li>
      <strong>Navigate to the folder</strong>:
      <pre><code>cd EFood_Restaurant</code></pre>
    </li>
    <li>
      <strong>Install dependencies</strong>:
      <pre><code>npm install</code></pre>
      or
      <pre><code>yarn install</code></pre>
    </li>
    <li>
      <strong>Start the development server</strong>:
      <pre><code>npm start</code></pre>
      or
      <pre><code>yarn start</code></pre>
    </li>
  </ol>
  <h2>🔧 Scripts</h2>
  <ul>
    <li><strong>start</strong> – Runs the project in development mode</li>
    <li><strong>build</strong> – Builds the app for production</li>
    <li><strong>test</strong> – Runs tests</li>
  </ul>
  <h2>🌐 API Endpoint</h2>
  <p>
    All data is fetched from:
    <pre><code>https://fake-api-tau.vercel.app/api/efood/</code></pre>
  </p>
  <h2>📌 Commit Highlights</h2>
  <ul>
    <li><strong>Accessibility</strong>: ARIA roles, semantic structure, screen reader support</li>
    <li><strong>Checkout</strong>: Formik + Yup with input masks and validation feedback</li>
    <li><strong>Cart</strong>: Full cart management with delayed reset and success modal</li>
    <li><strong>Animation</strong>: Integrated Lottie animations for loading feedback</li>
    <li><strong>Routing</strong>: Dynamic routing for restaurants and dishes</li>
    <li><strong>Performance</strong>: Fixed console warnings and streamlined types</li>
  </ul>
  <h2>📜 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>
</div>
