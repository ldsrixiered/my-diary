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
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Header />
      
      <main>
        <h1>Hello world {num}</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;