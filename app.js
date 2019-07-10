const { argv } = require("./config/yargs");

const { crear } = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crear(argv.descripcion);
    console.log(tarea);
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
