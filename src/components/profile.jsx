import React from "react";
import Layout from "./Layout";
function profile() {
  return (
    <>
      <Layout>
        <div
          style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            color: "#2d3748",
          }}
        >
          <h1 style={{ color: "#1a202c" }}>Thinking in React</h1>
          <p>
            React makes it easy to build complex UIs by breaking them into
            smaller, reusable components. When working on a new project, it
            helps to approach the UI design in a structured way.
          </p>

          <h2 style={{ color: "#1a202c" }}>
            Step 1: Break the UI into a Component Hierarchy
          </h2>
          <p>
            To design a React application, the first step is to analyze the UI
            and divide it into individual components. Each component should
            focus on a specific part of the interface.
          </p>

          <h3 style={{ color: "#1a202c" }}>Example UI</h3>
          <p>
            Let’s say we need to build a product search interface with the
            following features:
          </p>
          <ul>
            <li>A search bar to filter products</li>
            <li>A table to display product information</li>
            <li>Rows grouped by category</li>
          </ul>

          <h3 style={{ color: "#1a202c" }}>UI Breakdown</h3>
          <p>
            Here's how we can break this interface into a component hierarchy:
          </p>
          <pre
            style={{
              backgroundColor: "#f7fafc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            ProductSearchApp ├── SearchBar ├── ProductTable ├──
            ProductCategoryRow ├── ProductRow
          </pre>

          <h2 style={{ color: "#1a202c" }}>
            Step 2: Build a Static Version in React
          </h2>
          <p>
            Build the UI without interactivity. This helps focus on the
            structure and layout of the components. Here's an example of the
            static product table:
          </p>

          <pre
            style={{
              backgroundColor: "#f7fafc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable() {
  const products = [
    { name: 'Apple', price: '$1.00' },
    { name: 'Banana', price: '$0.50' },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
`}
          </pre>

          <h2 style={{ color: "#1a202c" }}>
            Step 3: Identify State and Make it Interactive
          </h2>
          <p>
            Add state management to the components. For example, add a search
            bar to filter the product table dynamically.
          </p>

          <h2 style={{ color: "#1a202c" }}>Step 4: Inverse Data Flow</h2>
          <p>
            Share data between parent and child components by lifting state up.
            This ensures a single source of truth for your data.
          </p>

          <h2 style={{ color: "#1a202c" }}>Conclusion</h2>
          <p>
            Thinking in React is all about breaking the UI into components,
            building a static version, and progressively adding interactivity
            and state management. Following this process will help you create a
            scalable and maintainable React application.
          </p>
        </div>
      </Layout>
    </>
  );
}

export default profile;
