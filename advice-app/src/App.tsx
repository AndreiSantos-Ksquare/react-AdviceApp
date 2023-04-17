import React from 'react';
import './App.css';
import Header from './Header';
import Advice from './Advice';

function App() {
  document.title = "Advice App";
  return (
    <div className="App">
      <Header />

      <main>
          <section id="mainContent" className="grid-main-template">
                  <Advice />
          </section>
      </main>
    </div>
  );
}

export default App;
