function mostrar() {
    var votantes = [];
    var participantes = [
        { nombre: "nacho", contador: 0 },
        { nombre: "julieta", contador: 0 },
        { nombre: "marcos", contador: 0 }
    ];

    do {
        var nombre_votante = prompt("Ingrese nombre del votante: ");

        var edad_votante;
        do {
            edad_votante = prompt("Ingrese edad del votante (mayor a 13 años): ");
        } while (isNaN(edad_votante) || edad_votante < 13);

        var genero_votante;
        do {
            genero_votante = prompt("Ingrese género del votante (masculino, femenino u otro): ").toLowerCase();
        } while (genero_votante != "masculino" && genero_votante != "femenino" && genero_votante != "otro");

        var nombre_participante;
        do {
            nombre_participante = prompt("Ingrese nombre del participante para dar voto positivo: ").toLowerCase();
        } while (nombre_participante != "julieta" && nombre_participante != "marcos" && nombre_participante != "nacho");

        votantes.push({
            nombre: nombre_votante,
            edad: parseInt(edad_votante),
            genero: genero_votante,
            participante: nombre_participante
        });

        var respuesta = confirm("Desea continuar?");
        if (!respuesta) {
            break;
        }
    } while (true);

    votantes.forEach(function (votante) {
        var participante = participantes.find(function (p) {
            return p.nombre === votante.participante;
        });
        participante.contador++;
    });

    var totalVotos = votantes.length;
    var porcentajes = participantes.map(function (participante) {
        return {
            nombre: participante.nombre,
            porcentaje: (participante.contador * 100 / totalVotos).toFixed(2)
        };
    });

    porcentajes.forEach(function (porcentaje) {
        console.log(porcentaje.nombre + " recibió el " + porcentaje.porcentaje + "% de los votos");
    });

    var ganador_gh;
    var maxVotos = Math.max(...participantes.map(function (participante) {
        return participante.contador;
    }));

    var ganadores = participantes.filter(function (participante) {
        return participante.contador === maxVotos;
    });

    if (ganadores.length === 1) {
        ganador_gh = ganadores[0].nombre;
    } else if (ganadores.length === 2) {
        ganador_gh = "Empate entre " + ganadores[0].nombre + " y " + ganadores[1].nombre;
    } else if (ganadores.length === 3) {
        ganador_gh = "Empate entre los tres finalistas";
    } else {
        ganador_gh = "No hay ganador";
    }

    console.log("El nombre del ganador/a del reality es: " + ganador_gh);
    console.log("¡Gracias por votar!");
}
