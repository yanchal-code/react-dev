import React, { useState } from 'react';
import Layout from './Layout';

function RespondingToEvents() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [formValue, setFormValue] = useState('');

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormValue(inputValue);
    setInputValue('');
  };

  return (
    <Layout>
      <>
        <h1>Responding to Events in React</h1>
        <p>
          React provides a simple and consistent way to handle events in your components. These events are similar to browser events but work consistently across all browsers.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Handling Button Clicks</h2>
          <p>
            Below is an example of handling a button click event. Click the button to increase the counter:
          </p>
          <button
            onClick={handleButtonClick}
            style={{
              padding: '10px 15px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            Click Me
          </button>
          <p>Button clicked: <strong>{clickCount}</strong> times</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>2. Handling Input Changes</h2>
          <p>
            React allows you to handle input changes easily using the <code>onChange</code> event. Type something in the input box below:
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here"
            style={{
              padding: '8px',
              width: '250px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
          <p>Current input value: <strong>{inputValue}</strong></p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>3. Handling Form Submissions</h2>
          <p>
            Forms in React can be handled using the <code>onSubmit</code> event. Enter a value and submit the form:
          </p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter text"
              style={{
                padding: '8px',
                width: '250px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginRight: '10px',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
          {formValue && (
            <p style={{ marginTop: '10px' }}>
              Form submitted with value: <strong>{formValue}</strong>
            </p>
          )}
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>
            Learn more about handling events in React on the{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              official React documentation
            </a>.
          </p>
        </footer>
      </>
    </Layout>
  );
}

export default RespondingToEvents;
