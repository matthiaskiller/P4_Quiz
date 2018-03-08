const model = require('./model');
const {log, biglog, errorlog, colorize} = require('./out');

exports.helpCmd = rl => {
  log("Commandos:");
  log("  h|help - Muestra esta ayuda.");
  log("  list - Listar los quizzes existentes.");
  log("  show <id> - Muestra la pregunta y la respuesta el quiz indicado.");
  log("  add - Añadir un nuevo quiz interactivamente.");
  log("  delete <id> - Borrar el quiz indicado.");
  log("  edit <id> - Editar el quiz indicado.");
  log("  test <id> - Probar el quiz indicado.");
  log("  p|play - Jugar a preguntar aleatoriamente todos los quizzes.");
  log("  credits - Créditos.");
  log("  q|quit - Salir del programa.");
  rl.prompt();
};


exports.listCmd = rl => {
  model.getAll().forEach((quiz, id) => {
    log(`  [${colorize(id, 'magenta')}]: ${quiz.question} `);
  });

  rl.prompt();
};

exports.showCmd = (rl, id) => {
  log('show <id> - Muestra la pregunta y la respuesta el quiz indicado.');
  rl.prompt();
};

exports.addCmd = rl => {
  log('add - Añadir un nuevo quiz interactivamente.');
  rl.prompt();
};

exports.deleteCmd = (rl, id) => {
  log('delete <id> - Borrar el quiz indicado.');
  rl.prompt();
};

exports.editCmd = (rl, id) => {
  log('edit <id> - Editar el quiz indicado.');
  rl.prompt();
};

exports.testCmd = (rl, id) => {
  log('test <id> - Probar el quiz indicado.');
  rl.prompt();
};

exports.playCmd = rl => {
  log('p|play - Jugar a preguntar aleatoriamente todos los quizzes.');
  rl.prompt();
};

exports.creditsCmd = rl => {
  log('Autor de la práctica:');
  log('Matthias Killer','green');
  rl.prompt();
};

exports.quitCmd = rl => {
  rl.close();
};
