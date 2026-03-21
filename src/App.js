import { useState } from 'react';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  const [num, setNum] = useState(1);


  return (
    <div>
      <Header />
      
      <main>

        <h1>Hello world {num}</h1>
        <button onClick={() => setNum(num + 1)}>next -- </button>
        <button onClick={() => setNum(num - 1)}>back--</button>

{/* 
        here is the other one  */}
        <button onClick={() => setNum(currentNum => currentNum + 2)}>add</button>

      </main>

      <Footer />
    </div>
  );
}

export default App;