import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Just react</h1>
      <p>First react app</p>
    </div>
  </React.StrictMode>
);
