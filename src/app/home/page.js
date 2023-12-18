
"use client"

import React, { useState } from 'react';

const itemsPerPage = 3;

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  return (
    <div>
      <h1>Pagination Example</h1>

      <div>
        {data.slice(startIndex, endIndex).map((item) => (
          <div key={item.id}>{item.title}</div>
          // Add your item rendering logic here
        ))}
      </div>

      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

// Example data
const mockData = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  // ... more items
];

const App = () => {
  return <Pagination data={mockData} />;
};

export default App;
