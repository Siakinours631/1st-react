import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ProductsList from './ProductsList';
import Texte from './Texte';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      {/*ici je vais mettre un texte au dessus de l'image*/}
        <Texte couleur='red'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button />
          <ProductsList toto='red'>
            <p>
              toto
            </p>
          </ProductsList>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  
          Learn React 
        </a>
      </header> 
    </div> 
  ); 
} 


export default App;
