import React, { useState } from 'react';
import Layout from './Layout';

function RespondingToLists() {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Build a Project' },
    { id: 3, name: 'Master Redux' },
  ]);

  const [newItem, setNewItem] = useState('');

  // Add a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() === '') return; // Prevent empty entries
    const newItemObj = { id: items.length + 1, name: newItem.trim() };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  // Delete an item from the list
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <>
        <h1>Responding to Lists in React</h1>
        <p>
          React makes it easy to work with lists. You can dynamically render, add, and remove items while keeping the UI responsive.
        </p>

        <section style={{ marginBottom: '20px' }}>
          <h2>1. Render a List</h2>
          <p>
            Below is an example of a to-do list rendered dynamically from an array:
          </p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{item.name}</span>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>2. Add a New Item</h2>
          <p>
            Use the input field and button below to add new items to the list:
          </p>
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter new item"
              style={{
                padding: '8px',
                width: '250px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginRight: '10px',
              }}
            />
            <button
              onClick={handleAddItem}
              style={{
                padding: '8px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Item
            </button>
          </div>
        </section>

        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>
            Learn more about working with lists in React on the{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              official React documentation
            </a>.
          </p>
        </footer>
      </>
    </Layout>
  );
}

export default RespondingToLists;
