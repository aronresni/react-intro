import { Link } from "react-router-dom";
import style from "./Card.modules.css"
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/types";
import { connect } from "react-redux";
import { useState } from "react";


function Card({ id, name, status, species, gender, origin, image, onClose }) {
   //en estas props ahora voy a tener un objryo con add fav y remove fav

   const [isFav, setIsFav] = useState(false);


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);




   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id)
      } else {
         setIsFav(true); {
            props.addFav(props)
         }
      }

   }


   return (
      <div className={style.card}>
         <div className="card-details">
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <img className={style.image} src={image} alt={name} />
            <br />
            <h3 className="text-tittle">{name}</h3>
            <p className="text-body">{species}</p>
            <p className="text-body">{gender}</p>
            <p className="text-body">{status}</p>
            <p className="text-body">{origin}</p>
            <button onClick={onClose}>Cerrar</button>
            <Link to={`/detail/${id}`}>
               <button>Detail</button>
            </Link>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch({ addFav }),
      removeFav: (id) => dispatch({ removeFav })
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)