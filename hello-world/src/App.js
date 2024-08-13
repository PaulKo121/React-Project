import React from 'react';
import Dashboard from './Dashboard';
import { SensorProvider } from './SensorContext';

function App() {
  return (
    <SensorProvider>
      <div className="App">
        <Dashboard />
      </div>
    </SensorProvider>
  );
}

export default App;
