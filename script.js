// Variables
const form = document.getElementById("my-form")
const divForm = document.getElementById("form");
const divSuccess = document.getElementById("success");
const divLabel = document.getElementById("div-label");
const buttonDismiss = document.getElementById("button-dismiss");

//Eventos
form.addEventListener("submit", (e) => {
    //Evitamos que se envie el formulario por default
    e.preventDefault();

    //Extraemos datos
    const email = document.getElementById("email");

    //Validamos
    if (email.value.trim() === '' || !emailValidation(email.value.trim())) {
        //verificar que el mensaje no exista
        const messageExist = document.querySelectorAll(".invalid-message")
        if (messageExist.length===0) {
            //Creamos elemento mensaje
            const message = document.createElement("P");
            message.textContent = "Valid email required";
            message.classList.add("invalid-message");
            divLabel.appendChild(message);
            //Hacemos que se elimine al tiempo
            setTimeout(() => {
                message.remove();
            }, 3000)
        }

        //Modificamos el label
        email.classList.add("invalid-email");
    } else {
        //Escondemos el form y ponemos visible la interfaz de success
        divForm.classList.add("is-hidden");
        divSuccess.classList.add("success-container");
    }
})

buttonDismiss.addEventListener("click", (e) => {

    divSuccess.classList.remove("success-container");
    divSuccess.classList.add("is-hidden");

    divForm.classList.remove("is-hidden");
})

//Funciones auxiliares
const emailValidation = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}