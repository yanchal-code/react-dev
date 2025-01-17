// src/Uipage.js
import React from 'react';
import Layout from './Layout'; 

function Uipage() {
  return (
    <>
      <Layout>
        <div className="description-page">
          <header>
            <h3>Understanding React: A Comprehensive Guide</h3>
            <p>Learn the basics of React and how to get started with it in your projects.</p>
          </header>

          <section className="content">
            <h2>What is React?</h2>
            <p>
              React is a JavaScript library for building user interfaces. It was developed by Facebook and allows developers to create
              dynamic, responsive, and reusable components. React uses a declarative approach to building UIs, making the development process more predictable.
            </p>
            
            <h2>Setting Up React</h2>
            <p>To create a React project, you can use Create React App. Here's how:</p>
            <pre>
              <code>
                npx create-react-app my-app
                cd my-app
                npm start
              </code>
            </pre>
            
            <p>This will create a new React project in a folder called "my-app" and start a development server.</p>
            
            <h2>Components in React</h2>
            <p>React components are the building blocks of any React application. A component can be either a class component or a functional component.</p>

            <h3>Functional Component Example</h3>
            <p>A functional component is simply a JavaScript function that returns JSX.</p>
            
            <pre>
              <code>
                function MyComponent() {'{'}
                <br />
                {'  '}return (
                <br />
                {'    <div>'}
                <br />
                {'      <h1>Hello, World!</h1>'}
                <br />
                {'    </div>'}
                <br />
                {'  );'}
                <br />
                {'}'}
              </code>
            </pre>

            <p>This simple component renders an <p> with the text on the page.</p></p>
            
            <h3>Class Component Example</h3>
            <p>A class component is a JavaScript class that extends \`React.Component\` and requires a \`render()\` method to return JSX.</p>
            
            <pre>
              <code>
                class MyComponent extends React.Component {'{'}
                <br />
                {'  render() {'}
                <br />
                {'    return ('}
                <br />
                {'      <div>'}
                <br />
                {'        <h1>Hello, World!</h1>'}
                <br />
                {'      </div>'}
                <br />
                {'    );'}
                <br />
                {'  }'}
                <br />
                {'}'}
              </code>
            </pre>

            <p>In this class component rende method returns JSX that is similar to the functional component's output.</p>
          </section>

          <footer>
            <p>&copy; 2024 React Guide</p>
            <p>For more information, visit the <a href="https://reactjs.org/docs/getting-started.html">React documentation</a>.</p>
          </footer>
        </div>
      </Layout>
    </>
  );
}

export default Uipage;
