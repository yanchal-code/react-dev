import React, { useEffect, useRef } from 'react';
import Layout from './Layout';

function EscapeHatches() {
  const divRef = useRef(null);

  useEffect(() => {
    // Example of direct DOM manipulation
    if (divRef.current) {
      divRef.current.style.backgroundColor = '#f0f0f0';
      divRef.current.style.padding = '10px';
      divRef.current.innerText = 'This text is directly manipulated using vanilla JavaScript!';
    }
  }, []);

  return (
    <Layout>
      <>
        <h1>Escape Hatches in React</h1>
        <p>
          Sometimes, we need to go beyond React's abstractions and directly interact with the DOM or integrate third-party libraries. These scenarios are often referred to as using "escape hatches."
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>Direct DOM Manipulation</h2>
          <p>
            React provides a way to directly access DOM elements using <code>useRef</code>. This is useful for scenarios like:
          </p>
          <ul>
            <li>Integrating third-party libraries that require direct DOM manipulation</li>
            <li>Improving performance for certain operations</li>
            <li>Managing focus, animations, or media playback</li>
          </ul>
          <div
            ref={divRef}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              borderRadius: '5px',
            }}
          >
            {/* This content will be manipulated by useEffect */}
          </div>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Integrating Third-Party Libraries</h2>
          <p>
            When integrating third-party libraries that modify the DOM, React allows us to use escape hatches like <code>useRef</code> and lifecycle methods to manage these interactions.
          </p>
          <p>
            For example, integrating a charting library like D3.js or a slider like Swiper often involves working outside React's declarative model.
          </p>
        </section>

        <section>
          <h2>When to Use Escape Hatches</h2>
          <p>
            While escape hatches are powerful, they should be used sparingly. Always consider React's built-in abstractions first for better maintainability and performance.
          </p>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Learn more about escape hatches in the <a href="https://react.dev" target="_blank" rel="noopener noreferrer">official React documentation</a>.</p>
        </footer>
      </>
    </Layout>
  );
}

export default EscapeHatches;
