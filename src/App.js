import { useState } from 'react';
import './App.css';
import Button from './Button';
import ProductsList from './ProductsList';
import Texte from './Texte';
import Siakinours from './Siakinours';
import BarreDeRecherche from './BarreDeRecherche'

function App() {
  const [avatarForm, setAvatarForm]= useState('circular')
  return (
    <div className="App">
      <header className="App-header"> 
        <div>
        <BarreDeRecherche input="reda" color="blue" />
        </div>

        <Texte couleur='red'/>
          <div>
            <select defaultValue={avatarForm} onChange={(e)=>{setAvatarForm(e.target.value)}}>
              <option value="rounded">rounded</option>
              <option value="circular">circular</option>
              <option value="square">square</option>
            </select>
            </div>

        <div className='App-logo'>
          <Siakinours forme={avatarForm} />
           </div>  

          <Button />
        <p>
          <ProductsList toto='red'>
              toto
           </ProductsList>
        </p>
        
      </header> 
    </div> 
  ); 
} 


export default App;
