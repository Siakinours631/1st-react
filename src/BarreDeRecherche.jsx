import { Fragment, useState } from "react";
import data from "./data/annivs.json";

const SearchBar = ({input, color}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  console.log('color', color)
  // operation ternaire

  //  const birthday = searchTerm ? data[searchTerm] : "";

/*
if(searchTerm) {
  birthday = data[searchTerm]
} 
else {
  birthday = ""
}
*/

return (
  <Fragment>
    <input type="text" onChange={handleChange} style={{backgroundColor: color}}/>
    {data[searchTerm] && (searchTerm.startsWith("e") ? (<p>L'anniversaire {searchTerm.startsWith("e") ? "d'" + searchTerm : searchTerm} est le {data[searchTerm]}.</p>) 
    : (<p>L'anniversaire de {searchTerm} est le {data[searchTerm]}.</p>)
    )}
  </Fragment> 
)}



export default SearchBar;

