import React, { useState } from 'react';
import Layout from './Layout';

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Layout>
      <>
        <h1>Conditional Rendering in React</h1>
        <p>
          React allows you to conditionally render components based on certain conditions or states. This makes it easy to create dynamic user interfaces.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Rendering Based on Login State</h2>
          <p>
            Below is an example of conditional rendering based on whether a user is logged in or not. Click the button to toggle login state:
          </p>
          <button
            onClick={handleLoginToggle}
            style={{
              padding: '10px 15px',
              backgroundColor: isLoggedIn ? '#ff4d4d' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          <div>
            {isLoggedIn ? (
              <p style={{ color: 'green' }}>Welcome back! You are logged in.</p>
            ) : (
              <p style={{ color: 'red' }}>Please log in to continue.</p>
            )}
          </div>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>2. Rendering Details Conditionally</h2>
          <p>
            Click the button below to toggle the visibility of additional details. This is an example of conditional rendering for UI elements.
          </p>
          <button
            onClick={handleDetailsToggle}
            style={{
              padding: '10px 15px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div style={{ marginTop: '10px', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
              <p>Here are the additional details you requested!</p>
              <ul>
                <li>React is declarative and component-based.</li>
                <li>It enables efficient updates using the Virtual DOM.</li>
                <li>Conditional rendering keeps your UI dynamic and responsive.</li>
              </ul>
            </div>
          )}
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>
            Learn more about conditional rendering in React on the{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              official React documentation
            </a>.
          </p>
        </footer>
      </>
    </Layout>
  );
}

export default ConditionalRendering;
