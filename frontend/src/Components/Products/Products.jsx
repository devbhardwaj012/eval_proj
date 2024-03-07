import React from 'react';
import jsonData from './Productss.json';

const Products = () => {
  return (
    <div>
      <h1>Table of Items</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>ProductName</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td>{item.Brand}</td>
              <td>{item.ProductName}</td>
              <td>{item.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
