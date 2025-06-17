# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./image.png)


### Links

- Solution URL: [Solution here](https://github.com/MariaCMontO/newsletter-cmo)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

With this project, I learned how to include javascript interactions, how to add some elements that didn´t exist using document.createElement and I also learned how to show it with appendChild.

```js
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
```

### Continued development

I definitely want to keep developing interfaces with JavaScript functions, in order to make them more interactive. Other important thing i want to keep in mind the diference between width and max-width.

### Useful resources

## Author

- Frontend Mentor - [@MariaCMontO](https://github.com/MariaCMontO)


## Acknowledgments