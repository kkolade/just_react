import react from 'react';
import reactDom from 'react-dom';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <div>
    <react.StrictMode>
      <h1>Just react</h1>
      <p>First react app</p>
    </react.StrictMode>
  </div>
);
