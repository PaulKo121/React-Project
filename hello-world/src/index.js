import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SensorProvider } from './SensorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SensorProvider>
    <App />
  </SensorProvider>,
);