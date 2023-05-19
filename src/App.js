import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useState } from 'react'; //el use state es para crear estados predeterminados (locales)
import axios from 'axios';
import { Routes, Route } from "react-router-dom";






function App() {

   // hacemos destructuring del estado a continuacion
   const [characters, setCharacters] = useState([])//useState recibe el estado inicial(en este caso el arreglo vacios)

   const onSearch = id => { // 2 => { id: 2 }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
      }
   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <hr />
         <Routes>
            <Route exact path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

            <Route path="/about" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path='/error' element={<Error />} />
         </Routes>
      </div>
   );
}


export default App;

