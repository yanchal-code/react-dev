import React from 'react'
import Layout from "./Layout"
function user() {
  return (
    <>
     <Layout>
     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#2d3748" }}>
      <h1 style={{ color: "#1a202c" }}>Tutorial: Tic-Tac-Toe</h1>
      <p>
        Welcome to the Tic-Tac-Toe tutorial! In this guide, we will walk you through building a simple game with React, 
        where you can play Tic-Tac-Toe right in your browser.
      </p>

      <h2 style={{ color: "#1a202c" }}>Introduction</h2>
      <p>
        Tic-Tac-Toe is a classic two-player game. The goal is to align three of your symbols (X or O) in a row, column, 
        or diagonal before your opponent does. This tutorial demonstrates how React handles UI updates and state management 
        while creating a fun and interactive experience.
      </p>

      <h2 style={{ color: "#1a202c" }}>What You'll Learn</h2>
      <ul>
        <li>How to create React components</li>
        <li>How to manage state using React hooks</li>
        <li>How to handle user interactions and events</li>
        <li>How to dynamically render game updates</li>
      </ul>

      <h2 style={{ color: "#1a202c" }}>Requirements</h2>
      <p>
        Before starting this tutorial, ensure you have the following:
      </p>
      <ul>
        <li>Basic understanding of JavaScript and React</li>
        <li>A code editor like Visual Studio Code</li>
        <li>Node.js and npm installed on your system</li>
      </ul>

      <h2 style={{ color: "#1a202c" }}>Steps to Build Tic-Tac-Toe</h2>
      <ol>
        <li>Initialize your React project</li>
        <li>Create the game board using a grid layout</li>
        <li>Manage player turns using React state</li>
        <li>Detect the winner or a draw condition</li>
        <li>Style the game board for better UX</li>
      </ol>

      <h2 style={{ color: "#1a202c" }}>Conclusion</h2>
      <p>
        By the end of this tutorial, you will have built a fully functional Tic-Tac-Toe game in React. 
        This is a great way to strengthen your understanding of React's key concepts, such as components, 
        state, and event handling. Let's dive in and start building!
      </p>
    </div>
  
  </Layout>
    </>
  )
}

export default user