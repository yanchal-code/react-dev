import React, { createContext, useContext, useState } from 'react';
import Layout from './Layout';

// Create a Context to hold the shared data
const MessageContext = createContext();

// Component that provides the data
function MessageProvider({ children }) {
  const [message, setMessage] = useState('Hello from Context!');
  
  const changeMessage = () => {
    setMessage('The message has been updated via Context!');
  };
  
  return (
    <MessageContext.Provider value={{ message, changeMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

// Component that consumes the data from the Context
function MessageConsumer() {
  const { message, changeMessage } = useContext(MessageContext);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Consumer Component</h3>
      <p>{message}</p>
      <button onClick={changeMessage} style={buttonStyle}>
        Change Message
      </button>
    </div>
  );
}

// Button style definition
const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

function SharingDataWithContext() {
  return (
    <MessageProvider>
      <Layout>
        <>
          <h1>Sharing Data with Context API</h1>
          <p>
            In this example, we are using React's Context API to share the message state
            across multiple components without passing props manually. The context provider
            holds the state and the consumer reads it.
          </p>

          <h2>Message Provider</h2>
          <MessageConsumer />
        </>
      </Layout>
    </MessageProvider>
  );
}

export default SharingDataWithContext;
