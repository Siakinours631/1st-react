import { Fragment, useState, useEffect } from "react"
import users from "./data/annivs.json"

const SearchBar = ({color, couleur}) => {
  let options = {day: '2-digit', month: '2-digit'}
  const initialState = `${new Date().toLocaleDateString('dafault', options)}`
  const fullDate = `${new Date().toLocaleDateString()}`

  const [searchTerm, setSearchTerm] = useState(initialState)
  const [searchResult, setSearchResult] = useState()
  const [isValid, setValid] = useState(true)
  
  /* 
isTouch     IsValid     searchTerm       searchResult                                                     template
true        true        '25/09'          'kaiss'                                                          l'anniv de kaiss ajd, le 25/09
true        false       'abc'            'Aucun anniversaire trouvé à cette date, désolé.'                pas d'anniv ajd
false       true        '04/09'          'cedric'                                                         l'anniv de ced ajd, le 04/09
false       false       'abc'            'bonjour(initialStateResult)'                                    pas d'anniv ajd

isTouch && isValid && l'anniv de {searchResult} est ajd, le {searchTerm}  
isTouch && !isValid && {searchResult}
!isTouch && isValid && l'anniv de {searchResult} est ajd, le {searchTerm} 
!isTouch && !isValid && {searchResult}


isTouch && !isValid && {searchResult}
!isTouch && !isValid && {searchResult}
isTouch && isValid && l'anniv de {searchResult} est ajd, le {searchTerm}  
!isTouch && isValid && l'anniv de {searchResult} est ajd, le {searchTerm} 
*/
  useEffect(() => {
    const rxDate = /^[0-9]{2}\/[0-9]{2}$/

    if (rxDate.test(searchTerm) === false) {
      setSearchResult('Date invalide')
      setValid(false)
    } else {
      const userFound = users.find(users => users.date === searchTerm)
        if (userFound) {
            setSearchResult(userFound.name)
            setValid(true)
        } else {
          setSearchResult('Aucun anniversaire trouvé à cette date, désolé.')
          setValid(false)
        }
    }
  }, [searchTerm])
  
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
      onChange={(e) => setSearchTerm(e.target?.value)} 
      type="text" 
      placeholder={fullDate}
      value={searchTerm}
      style={{backgroundColor: color, color: couleur}}
    />
    {isValid && 
    (<p>C'est l'anniversaire de {searchResult} aujourd'hui ! Le {searchTerm}</p>)
    }

    {/*searchResult === 'Aucun anniversaire trouvé à cette date, désolé.' && 
    (<p>{searchResult}</p>)
  */}

{!isValid && (<p>{searchResult}</p>)}
   
  </Fragment> 
)}

export default SearchBar
