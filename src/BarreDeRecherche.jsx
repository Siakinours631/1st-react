import { Fragment, useState } from "react"
import user from "./data/annivs.json"

const SearchBar = ({color, couleur}) => {
  let options = {day: '2-digit', month: '2-digit'}
  const initialState = `${new Date().toLocaleDateString('dafault', options)}`
  const fullDate = `${new Date().toLocaleDateString()}`

  const [searchTerm, setSearchTerm] = useState(initialState)
  const [searchResult, setSearchResult] = useState()


  const recherche = (e) => {
    const date = e.target.value

    const userFound = user.find(user => user.date === date)
      if(userFound)  
        {
          setSearchResult(userFound.name)
        }  
      else {
        setSearchResult('Aucun anniversaire trouvé à cette date, désolé.')
        }
      if(date.length > 5 || date.length < 5)
        {
          setSearchResult('Date invalide')
        }
    
      setSearchTerm(date)
  }


    /*
      if (users[userIndex].date === date) {
        users[userIndex].name 
      }
      else {
        console.log('nothing')
      } 
      // console.log(users[0].date)  index
    
      for (const userIndex in users) {
    console.log(users[userIndex].date)
    */

return (
  <Fragment>
    <input
      onChange={recherche} 
      type="text" 
      placeholder={fullDate}
      value={searchTerm}
      style={{backgroundColor: color, color: couleur}}
    />
    {searchResult && searchResult !== 'Date invalide' && searchResult !== 'Aucun anniversaire trouvé à cette date, désolé.' && 
    (<p>C'est l'anniversaire de {searchResult} aujourd'hui ! Le {searchTerm}</p>)
    }

    {searchResult === 'Aucun anniversaire trouvé à cette date, désolé.' && 
    (<p>{searchResult}</p>)
    }

    {searchResult === 'Date invalide' && (<p>{searchResult}</p>)
    }
   
  </Fragment> 
)}



  /* 
   0 : injection initialState dans searchTerm (7)
    1 : react return html value = searchTerm === initialSate === ${new Date().toLocaleDateString()}
   2 : user change le input, onChange > recherche(24)
   3 : recherche met a jour searchTerm (10)
   4 : react return html avec value searchTerm === user input
  */

export default SearchBar
