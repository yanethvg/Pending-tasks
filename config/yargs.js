const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer"
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado o pendiente una tarea"
};

const argv = require("yargs")
  .command("listar", "Imprime en consola una lista de tareas por hacer")
  .command("crear", "Crea una tarea por hacer", {
    descripcion
  })
  .command("actualizar", "actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Elimina una tarea por hacer", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};
