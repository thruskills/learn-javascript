import React from 'react';
import logo from './logo.svg';
import Card from './components/card/Card';

import './App.css';

function App() {
  return (
    <div>
      <Card name="Manohar" location="Bangalore" image="/logo192.png" />
      <Card name="Nitin" location="Delgi" image="/logo192.png" />
      <Card name="Abcd" location="Chennai" image="/logo192.png" />

    </div>
  );
}

export default App;