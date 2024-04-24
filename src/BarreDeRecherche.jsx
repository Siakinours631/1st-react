import { Fragment, useState } from "react"
import users from "./data/annivs.json"

const SearchBar = ({color, couleur}) => {
  const initialState = `${new Date().toLocaleDateString()}`
  

  const [searchTerm, setSearchTerm] = useState(initialState)
  const [searchResult, setSearchResult] = useState()


  const recherche = (e, couleur) => {
    const date = e.target.value

    const userFound = users.find(users => users.date === date)
    if(userFound && date.length === 10)  
    
      {
      setSearchResult(userFound.name)
    }
    else {
        setSearchResult('Aucun anniversaire trouvé à cette date, désolé.')
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
      placeholder={initialState}
      value={searchTerm}
      style={{backgroundColor: color, color: couleur}}
    />
      {(<p>{searchResult}</p>)}
  </Fragment> 
)}

// 0 : injection initialState dans searchTerm (7)
// 1 : react return html value = searchTerm === initialSate === ${new Date().toLocaleDateString()}
// 2 : user change le input, onChange > recherche(24)
// 3 : recherche met a jour searchTerm (10)
// 4 : react return html avec value searchTerm === user input

/*

*/
export default SearchBar
