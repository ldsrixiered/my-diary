import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';

function App() {
  const first_name = "Rixie Red";
  const last_name = "Castro";
  const age = 29

  return (
    <div className="App">
      <Header/>
      <main>
        <h1>hello world </h1>
        <p>hi my name is {first_name} {last_name} and I am {age}</p>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
