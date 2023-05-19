import { useState } from "react";
import Style from "./SearchBar.modules.css"







function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = event => {
      const { value } = event.target
      setId(value)
   }

   return (
      <div className={Style.contenedor}>
         <input className="input"
            id="search"
            name="search"
            placeholder="Busca el personaje por su ID"
            type='search'
            onChange={handleChange}


         />
         <button className="btn" onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar