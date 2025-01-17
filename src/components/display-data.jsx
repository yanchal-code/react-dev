import React from 'react';
import Layout from './Layout';

function DisplayData() {
  // Example data to display
  const users = [
    { id: 1, name: 'Alice', age: 25, profession: 'Engineer' },
    { id: 2, name: 'Bob', age: 30, profession: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, profession: 'Developer' },
  ];

  return (
    <Layout>
      <>
        <h1>Display Data in React</h1>
        <p>
          React allows you to dynamically display data by mapping over arrays or using conditional rendering. Below is an example of displaying a list of users.
        </p>

        <section>
          <h2>User List</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Age</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Profession</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{user.id}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{user.age}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.profession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Conditional Rendering Example</h2>
          <p>
            React allows you to conditionally render data based on certain conditions. Below, we check if the user list is empty:
          </p>
          {users.length > 0 ? (
            <p style={{ color: 'green' }}>Users are successfully loaded!</p>
          ) : (
            <p style={{ color: 'red' }}>No users found.</p>
          )}
        </section>

        
      </>
    </Layout>
  );
}

export default DisplayData;
