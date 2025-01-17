import React from 'react';
import Layout from './Layout';

function Overview() {
  return (
    <Layout>
      <>
        <h1>Overview of React</h1>
        <p>
          React is a JavaScript library for building user interfaces. It is maintained by Meta (formerly Facebook) and a community of developers. React makes it painless to create interactive UIs by using declarative components and efficient rendering.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>Key Features of React</h2>
          <ul>
            <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state and compose them to make complex UIs.</li>
            <li><strong>Declarative:</strong> Design views for each state in your application, and React will efficiently update and render the right components when data changes.</li>
            <li><strong>Learn Once, Write Anywhere:</strong> Use React for web, mobile (React Native), and even desktop applications.</li>
            <li><strong>Virtual DOM:</strong> React uses a virtual DOM to improve performance by minimizing direct DOM manipulations.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Why Use React?</h2>
          <p>Here are some reasons why developers prefer React:</p>
          <ol>
            <li><strong>Reusable Components:</strong> React's component-based architecture promotes code reusability and consistency.</li>
            <li><strong>Fast and Efficient:</strong> React's virtual DOM ensures high performance for updating UI efficiently.</li>
            <li><strong>Strong Ecosystem:</strong> React has a rich ecosystem of libraries, tools, and a supportive community.</li>
            <li><strong>Great Developer Experience:</strong> Tools like React Developer Tools and Create React App make development easier.</li>
          </ol>
        </section>

        <section>
          <h2>Getting Started with React</h2>
          <p>
            To get started with React, you can use Create React App, a tool to set up a new React project with a modern build setup. Alternatively, you can include React in an existing project.
          </p>
          <pre style={{
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '5px',
            overflowX: 'auto',
          }}>
            {`# Install Create React App globally
npx create-react-app my-app

# Navigate to your project folder
cd my-app

# Start the development server
npm start`}
          </pre>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Learn more about React on the <a href="https://react.dev" target="_blank" rel="noopener noreferrer">official React documentation</a>.</p>
        </footer>
      </>
    </Layout>
  );
}

export default Overview;
