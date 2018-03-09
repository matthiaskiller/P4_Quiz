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

  if(typeof id === "undefined") {
    errorlog(`Falta el párametro id.`);
  }
  else {
    try {
      const quiz = model.getByIndex(id);
      log(`  [${colorize(id, 'magenta')}]: ${quiz.question} ${colorize('=>', 'magenta')}  ${quiz.answer}`);
    }
    catch(error) {
      errorlog(error.message)
    }
  }
  rl.prompt();
};

exports.addCmd = rl => {

  rl.question(colorize('Introduzca una pregunta:  ', 'red'), question => {
    rl.question(colorize('Introduzca la repuesta:  ', 'red'), answer => {
      model.add(question, answer);
      log(` ${colorize('Se ha añadido', 'magenta')}: ${question}  ${colorize('=>', 'magenta')} ${answer}`);
      rl.prompt();
    });
  });
};

exports.deleteCmd = (rl, id) => {

  if(typeof id === "undefined") {
    errorlog(`Falta el párametro id.`);
  }
  else {
    try {
      model.deleteByIndex(id);
    }
    catch(error) {
      errorlog(error.message)
    }
  }
  rl.prompt();
};

exports.editCmd = (rl, id) => {

  if(typeof id === "undefined") {
    errorlog(`Falta el párametro id.`);
  }
  else {
    try {
      rl.question(colorize('Introduzca una pregunta:  ', 'red'), question => {
        rl.question(colorize('Introduzca la repuesta:  ', 'red'), answer => {
          model.update(id, question, answer);
          log(` Se ha cambiado el quiz ${colorize(id, 'magenta')} por: ${question}  ${colorize('=>', 'magenta')} ${answer}`);
          rl.prompt();
        });
      });
    }
    catch(error) {
      errorlog(error.message);
      rl.prompt();
    }
  }
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
