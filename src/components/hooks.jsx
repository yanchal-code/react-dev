import React, { useState, useEffect } from 'react';
import Layout from './Layout';

function UsingHooks() {
  // useState Hook to manage state
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // useEffect Hook to handle side effects
  useEffect(() => {
    if (counter > 0) {
      document.title = `Counter: ${counter}`;
    }
  }, [counter]); // This effect runs when the counter changes

  // Custom Hook example to manage input field
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return {
      value,
      onChange: handleChange,
    };
  };

  const nameInput = useInput('');

  // Toggle message visibility
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  // Increment and Decrement counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Layout>
      <>
        <h1>Using React Hooks</h1>
        <p>
          In React, hooks are functions that let you "hook into" React state and lifecycle features from function components.
          Below are a few examples of hooks in action.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Using useState</h2>
          <p>
            <strong>Counter:</strong> This is an example of using the `useState` hook to manage state.
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
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>2. Using useEffect</h2>
          <p>
            <strong>Title Change:</strong> This example demonstrates the use of the `useEffect` hook to change the document title whenever the counter is updated.
          </p>
          <p>The title of the page will change based on the counter value.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>3. Using Custom Hook</h2>
          <p>
            <strong>Input Field:</strong> This example uses a custom hook `useInput` to manage the input field for the name.
          </p>
          <input
            {...nameInput}
            type="text"
            placeholder="Enter your name"
            style={{
              padding: '8px',
              width: '250px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
          />
          <p>Entered Name: <strong>{nameInput.value}</strong></p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>4. Toggle Message</h2>
          <p>
            You can toggle the visibility of a message below using the button:
          </p>
          <button
            onClick={toggleMessage}
            style={{
              padding: '10px 15px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Toggle Message
          </button>
          {showMessage && (
            <p style={{ marginTop: '10px', fontSize: '18px', color: '#007bff' }}>
              Hello, this is a message that can be toggled!
            </p>
          )}
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>
            Learn more about React Hooks on the{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              official React documentation
            </a>.
          </p>
        </footer>
      </>
    </Layout>
  );
}

export default UsingHooks;
