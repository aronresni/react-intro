import React from "react";
import style from "./Form.modules.css"
import validate from "./validate";


function Form(props) {

    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })


    //creamos otro nuevo estado local como lo pide el ejercicio 4, que se inicialice como objeto vacio

    const [errors, setErrors] = React.useState({
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData,
             [name]: value });

        //le pasamos a setErrors la fumcion validate que hacemos en el otro archivo js
        setErrors(
            //ahora a validate le mandamose el userData que es lo q el usuario ingreso
            validate({
                ...userData,
                [name]: value
            })
        )
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)//saca los datos del userData
    }


    return (
        <div className={style.container}>
        <img src="./" alt="FormImagen"/>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
            />
            <p className={style.error}>{errors.email ? errors.email : null}</p>

            <label>Password: </label>
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
            />
            <p className={style.error}>{errors.password ? errors.password : null}</p>
            <hr />

            <button type="submit">Submit</button>

        </form>
    </div>
    )
}

export default Form;


