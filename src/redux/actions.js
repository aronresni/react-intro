import { ADD_FAV } from "./types"
import { REMOVE_FAV } from "./types"



export function addFav(character) {
    return {//el objeto probablemente es un objeto como los characters
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav(id) {//le pasamos un id para que borre ese personaje de la pagina
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

//exportando => (addFav removeFav)