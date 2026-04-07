import { useState } from 'react';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  const [num, setNum] = useState(1);
  const [username, setUsername] = useState('Aya')

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");



  return (
    <div>
      <Navbar />
      <Header />
      
      <main>


        <input 
  type="text"
  onChange={(e) => setName(e.target.value)}
/>

        <h1>Hello world {num}</h1>
        <button onClick={() => setNum(num + 1)}>next -- </button>
        <button onClick={() => setNum(num - 1)}>back -- </button>

{/* 
        here is the other one  */}
        <button onClick={() => setNum(currentNum => currentNum + 2)}>add</button>

        <h2>Selected Va {username}</h2>

        {/* <input
          type='text'
          placeholder='enter your name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        ></input> */}

        <input 
        name='username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
        ></input>



      </main>

      <Footer />
    </div>
  );
}

export default App;