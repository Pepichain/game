function adivinarNumero() {
    var numero_secreto = Math.floor(Math.random() * 100) + 1;
    var intentos = 0;

    while (true) {
        var intento = parseInt(prompt("Introduce tu suposición (entre 1 y 100):"));

        if (isNaN(intento)) {
            alert("Por favor, introduce un número válido.");
            continue;
        }

        intentos++;

        if (intento < numero_secreto) {
            alert("Demasiado bajo. Intenta nuevamente.");
        } else if (intento > numero_secreto) {
            alert("Demasiado alto. Intenta nuevamente.");
        } else {
            alert("¡Felicidades! ¡Has adivinado el número en " + intentos + " intentos!");
            break;
        }
    }
}
