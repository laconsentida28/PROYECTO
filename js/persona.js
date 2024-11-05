var persona = {
    "nombre": "Midelly",
    "apellidos": "Medina",
    "edad": 31,
    "correo": "midelli1993@gmail.com",
    "telefono": 3184986231,
    "hobbies": ["cocinar", "viajar", "hacer deporte", "canatr"]
}

console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.edad);
console.log(persona.correo);
console.log(persona.telefono);
console.log(persona.hobbies);
// convertir objeti javascript a json
var personajson =JSON.stringify(persona);
console.log(personajson);

// convertir una cadena json a un objeto javascript 

var cadenajson = '{"nombre": "Ana","apellidos":"pulido","edad":"30","correo":"maryinperlaa56@gmail.com","telefono":"330760567,"hobbies":"correr","viajar","comer"}'
var personaobj = JSON.parse(cadenajson);

console.log(personaobj.nombre);
console.log(personaobj.correo);