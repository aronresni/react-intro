import axios from "axios"
import style from "./Detail.modules.css"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const Detail = (props) => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
    
        <div className={style.contenedor}>
        <Link to="/home">
        <button>Atras</button>
        </Link>
            <h1>Detail</h1>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt={character.name}
            />
        </div>
    )
}

export default Detail  