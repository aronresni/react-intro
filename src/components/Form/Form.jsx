import React from "react";
import style from "./Form.modules.css"

function Form(props) {
    return (
        <div className={style.form}>
            <form>
                <div className={style.imgcontainer}>
                    <img src="" alt="FormImg"
                    />
                </div>
                <div className={style.formcontainer}>
                    <label form="username">Nombre de Usuario</label>
                    <input type="username" placeholder="Username" />

                    <label form="password" >Contraseña</label>
                    <input type="password" placeholder="Contraseña" />

                    <button type="submit">Submit</button>


                </div>

            </form>





        </div>
    )
}

export default Form;


