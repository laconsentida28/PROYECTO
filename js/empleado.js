function mostrarDatos(){

    var persona = {
        "nombre": "Midelly",
        "apellidos": "Medina",
        "edad": 31,
        "correo": "midelli1993@gmail.com",
        "telefono": 3184986231,
        "hobbies": ["cocinar", "viajar", "hacer deporte", "canatr"]
    };
    var resultado = "nombre: " + persona.nombre + "\n";
    resultado += "apellidos: "+ persona.apellidos + "\n";
    resultado += "edad: "+ persona.edad + "\n";
    resultado += "correo: "+ persona.correo + "\n";
    resultado += "telefono: "+ persona.telefono + "\n";
    resultado += "hobbies: "+ persona.hobbies + "\n";

    document.getElementById("resultado").textContent = resultado; 
} 