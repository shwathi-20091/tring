import React from 'react';
import ReactDOM from 'react-dom/client';
import Lastpage from './components/lastpage';
import Startpage from './components/startpage';
//<Lastpage />
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Startpage />
  </React.StrictMode>
);

