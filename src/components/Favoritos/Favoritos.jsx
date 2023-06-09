import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favoritos.modules.css"


function Favoritos({ myFavorites, onClose }) {

    return (
        <div className={style.container}>
            {
                myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                            origin={origin.name}
                            onClose={onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
        return{
            myFavorites: state.myFavorites
        }
}

export default connect(mapStateToProps, null)(Favoritos)