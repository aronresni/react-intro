import './App.css';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'; //el use state es para crear estados predeterminados (locales)
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favoritos from './components/Favoritos/Favoritos';


function App() {

   // hacemos destructuring del estado a continuacion
   const [characters, setCharacters] = useState([])//useState recibe el estado inicial(en este caso el arreglo vacios)


   //ahora una vez creado el estado, usamos esta esctructura para poder controlar el form
      const navigate = useNavigate();


   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';
   

//recibe el userData
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

      //Funcion onSearch sirve para buscar los personajes por el id en el buscador
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

   
   const location = useLocation();
   
   return (//renderizado de la app entera
      <div className='App'>
         {
            //usamos el hooks useLocation que trae un objeto sobre la navegacion (el path)
            location.pathname !== "/"//estamos diciendo que se muestre el navBar siempre y cuando este no este parado en bara
               ? <NavBar onSearch={onSearch} />
               : null
         }
         <hr />
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />} />
            <Route path='/favoritos' element={<Favoritos onClose={onClose}/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path='/error' element={<Error />} />
         </Routes>
      </div>
   );
}


export default App;

