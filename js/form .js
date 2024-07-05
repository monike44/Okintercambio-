const inputs = document.querySelectorAll(".inputs");
const errorText = document.querySelectorAll(".error-msg");
const confirmButton = document.querySelector("#enviar");

inputs.forEach(input => {
    input.addEventListener("blur", () => {
        input.classList.remove("invalidado");
        input.classList.remove("validado");

        if (input.value === "") {
            input.classList.add("invalidado");
            input.nextElementSibling.classList.add("error-msg-active");
        } else {
            input.classList.add("validado");
            // console.log(input.nextElementSibling);
            input.nextElementSibling.classList.remove("error-msg-active");
        }
    });
});

confirmButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let todosPreenchidos = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
            input.classList.add("invalidado");
            input.nextElementSibling.classList.add("error-msg-active");

        } else {
            input.classList.remove("invalidado");
            input.nextElementSibling.classList.remove("error-msg-active");
        }
    });

    if (todosPreenchidos) {
        $('#myModal').modal('show');

        inputs.forEach(input => {
            input.classList.remove("validado");
            input.classList.remove("invalidado");

            input.value = "";
        });
    } else {
        $('#errorModal').modal('show');
    }
});