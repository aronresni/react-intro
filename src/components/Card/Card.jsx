import { Link } from "react-router-dom";
import style from "./Card.modules.css"



function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.card}>
         <div className="card-details">
            <Link to={`/detail/${id}`}>
               <img className={style.image} src={image} alt={name} />
            </Link>
            <br />
            <button onClick={onClose}>Cerrar</button>
            <h3 className="text-tittle">{name}</h3>
            <p className="text-body">{species}</p>
            <p className="text-body">{gender}</p>
            <p className="text-body">{status}</p>
            <p className="text-body">{origin}</p>
         </div>
      </div>


   );
}

export default Card
