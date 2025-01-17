import React from 'react'
import Layout from "./Layout"
function installation() {
  return (
   
    <Layout>
    <>
    <div className="installation-page">
      <header>
        <h1>Installation React</h1>
        <p>
        React has been designed from the start for gradual adoption.<br/>
         You can use as little or as much React as you need.<br/>
          Whether you want to get a taste of React, add some interactivity to an HTML page<br/>
          , or start a complex React-powered app, this section will help you get started.</p>
      </header>

      <section className="install-methods">
        <h2>Installation Methods</h2>
        
        <div className="install-method">
          <h3>Using npm</h3>
          <p>Run the following command in your terminal:</p>
          <pre><code>npm install react react-dom</code></pre>
        </div>

        <div className="install-method">
          <h3>Using Yarn</h3>
          <p>Run the following command in your terminal:</p>
          <pre><code>yarn add react react-dom</code></pre>
        </div>
      </section>

      <section className="project-setup">
        <h2>Setting Up Your First React Project</h2>
        <p>Use Create React App to quickly set up your first React project:</p>
        <pre><code>npx create-react-app my-app</code></pre>
        <p>Then, navigate to the project folder and start the development server:</p>
        <pre><code>cd my-app</code></pre>
        <pre><code>npm start</code></pre>
      </section>

      <footer>
        <p>For more information, visit the official React documentation: <a href="https://reactjs.org/docs/getting-started.html">React Docs</a></p>
      </footer>
    </div>
    </>
    </Layout>
    
  )
}

export default installation