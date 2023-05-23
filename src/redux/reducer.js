import { ADD_FAV, REMOVE_FAV } from "./types";

//initial state
const initialState = {
    myFavorites: []
}
//[{1}, {2}, {3}, ...]

export default function reducer(
    state = initialState, //por si no existe le pasamos el initial state
    //la action tiene un type y payload, lo desestructuramos y tomamos los atributos que tiene
    { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,//le pedimos que traiga todo lo que tiene en nuestro estado por buena practica (... los tres puntos se llama spread)
                myFavorites: [...state.myFavorites, payload]//le pedimos que traiga todo lo que tiene en nuestro estado por buena practica           
                //agregamos el payload ya que es un objeto con todos los personajes
            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                fav => fav.id !== Number(payload) // == el doble igual esta prohibido por mala practica
            )
            return {
                ...state,
                myFavorites: filteredFavs
            }
        default:
            return {//lo pasamos como objeto asi crea uno nuevo
                ...state
            }
    }
}