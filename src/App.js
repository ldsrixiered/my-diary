import {useState} from 'react';
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
    <div className="App">
      <Header/>
      <main>
        <h1>Virtual Assistance Phenomenon {num}</h1>
        <button onClick = {() => setNum(num + 1)}>next-</button>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
