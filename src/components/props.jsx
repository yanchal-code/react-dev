import React, { useState } from 'react';
import Layout from './Layout';

// Child component that receives data via props
function ChildComponent({ message, onChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Child Component</h3>
      <p>{message}</p>
      <button onClick={onChange} style={buttonStyle}>
        Change Message
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

function SharingDataWithProps() {
  const [message, setMessage] = useState('Hello from Parent!');

  const changeMessage = () => {
    setMessage('The message has been updated!');
  };

  return (
    <Layout>
      <>
        <h1>Sharing Data with Props</h1>
        <p>
          In this example, we are passing data from the parent component to the child
          component using props. The child component displays the message passed from the
          parent and has a button to update the message.
        </p>
        
        <h2>Parent Component</h2>
        <p>
          The parent component manages the message state and passes it to the child.
        </p>

        <ChildComponent message={message} onChange={changeMessage} />
      </>
    </Layout>
  );
}

export default SharingDataWithProps;
