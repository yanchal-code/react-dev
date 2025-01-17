import React, { useState } from 'react';
import Layout from './Layout';

function Adding() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Layout>
      <>
        <h1>Adding Interactivity in React</h1>
        <p>
          Interactivity in React is primarily achieved through event handling, state management, and props.
          Let's explore these concepts with examples.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>Event Handling</h2>
          <p>React allows you to handle events like clicks, inputs, and more using event handlers.</p>
          <button onClick={handleButtonClick}>
            Click me to increase the count
          </button>
          <p>Button clicked <strong>{count}</strong> times.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Using State</h2>
          <p>
            State allows you to store and manage data in a React component. For example, here is a simple input field:
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
            style={{ padding: '5px', margin: '5px 0' }}
          />
          <p>You typed: <strong>{inputValue}</strong></p>
        </section>

        <section>
          <h2>Interactive Example</h2>
          <p>Combine event handling and state to build interactive components like this counter:</p>
          <button onClick={handleButtonClick} style={{ marginRight: '10px' }}>
            Increment Counter
          </button>
          <span>Count: {count}</span>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Want to learn more? Check out the <a href="https://react.dev">official React documentation</a>.</p>
        </footer>
      </>
    </Layout>
  );
}

export default Adding;
