const { argv } = require("./config/yargs");

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear por hacer");
    break;
  case "listar":
    console.log("listar tareas por hacer");
    break;
  case "actualizar":
    console.log("actualizar una tarea");
    break;
  default:
    console.log("Comando no es reconocido");
}
