import React, { useState } from 'react';
import Layout from './Layout';

function managing() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setAge('');
  };

  return (
    <Layout>
      <>
        <h1>Managing State in React</h1>
        <p>
          State in React allows components to manage and respond to dynamic data. It helps build interactive and user-driven applications.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>What is State?</h2>
          <p>
            State is an object in React that stores dynamic data and determines how the component behaves and renders.
          </p>
          <p>
            Below is an example of a simple form that uses state to manage user inputs dynamically.
          </p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Interactive Form Example</h2>
          <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                style={{ padding: '5px', marginBottom: '10px' }}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={handleAgeChange}
                placeholder="Enter your age"
                style={{ padding: '5px', marginBottom: '10px' }}
              />
            </label>
            <button
              type="button"
              onClick={resetForm}
              style={{ padding: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Reset
            </button>
          </form>

          <p style={{ marginTop: '20px' }}>
            <strong>Name:</strong> {name || 'Not provided'}<br />
            <strong>Age:</strong> {age || 'Not provided'}
          </p>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Learn more about state management on the <a href="https://react.dev" target="_blank" rel="noopener noreferrer">official React documentation</a>.</p>
        </footer>
      </>
    </Layout>
  );
}

export default managing;
