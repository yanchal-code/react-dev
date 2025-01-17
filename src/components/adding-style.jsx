import React from 'react';
// Import external CSS file
import Layout from './Layout';

function AddingStyle() {
  const inlineStyle = {
    color: 'white',
    backgroundColor: '#007BFF',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <Layout>
      <>
        <h1>Adding Styles in React</h1>
        <p>
          React provides several ways to add styles to components, allowing you to create beautiful and dynamic user interfaces.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Inline Styles</h2>
          <p>
            Inline styles are specified as an object with camelCased property names. This is a great option for dynamic styling.
          </p>
          <div style={inlineStyle}>This is styled with inline styles</div>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>2. CSS Classes</h2>
          <p>
            Use CSS classes to style your components. Simply add a <code>className</code> to the element.
          </p>
          <div className="css-class-example">This is styled using a CSS class</div>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>3. CSS Modules</h2>
          <p>
            CSS Modules allow you to scope styles locally to a specific component, avoiding global namespace conflicts.
          </p>
          <p style={{ fontStyle: 'italic' }}>
            Note: You’ll need to configure your project to support CSS Modules if you aren’t using Create React App.
          </p>
        </section>

        <section>
          <h2>4. Styled Components</h2>
          <p>
            Styled Components is a library for styling React components with tagged template literals. It allows you to write actual CSS in your JavaScript.
          </p>
          <a
            href="https://styled-components.com"
            target="_blank"
            rel="noopener noreferrer"
            style={inlineStyle}
          >
            Learn about Styled Components
          </a>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Learn more about styling React components on the <a href="https://react.dev" target="_blank" rel="noopener noreferrer">official React documentation</a>.</p>
        </footer>
      </>
    </Layout>
  );
}

export default AddingStyle;
