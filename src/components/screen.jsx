import React, { useState } from 'react';
import Layout from './Layout';

function UpdatingTheScreen() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Layout>
      <>
        <h1>Updating the Screen in React</h1>
        <p>
          In React, when the state changes, React automatically re-renders the component and updates the UI accordingly. Let’s look at an example of how this works:
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Counter Example</h2>
          <p>
            Below is a simple counter that increments and decrements when the respective buttons are clicked. The UI updates automatically.
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={decrementCounter}
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '20px',
              }}
            >
              Decrement
            </button>

            <span
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginRight: '20px',
              }}
            >
              {counter}
            </span>

            <button
              onClick={incrementCounter}
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Increment
            </button>
          </div>
          <p style={{ marginTop: '10px' }}>
            The counter above automatically updates when the button is clicked. React efficiently re-renders the component and updates the displayed value.
          </p>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>
            Learn more about updating the UI in React on the{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              official React documentation
            </a>.
          </p>
        </footer>
      </>
    </Layout>
  );
}

export default UpdatingTheScreen;
