import {useState} from 'react';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const emp = ['Joan', 'Irine', 'Shane Salas', 'Jonathan', 'kim']
  const [num, setNum] = useState(0);
  const nextEmployee = () => {
    setNum((num + 1) % emp.length); // loops back to start
  };
  return (
    <div className="App">
      <Header/>
      <main>
        <h1>Virtual Assistance Phenomenon VA {emp[num]}</h1>
        <button onClick={nextEmployee}> Next Employee </button>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
