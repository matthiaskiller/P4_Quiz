const readline = require('readline');

const figlet = require('figlet');
const chalk = require('chalk');

const model = require('./model');

const colorize = (msg, color) => {
    if(typeof color !== "undefined") {
      msg = chalk[color].bold(msg);
    }
    return msg;
};

const log = (msg, color) => {
  console.log(colorize(msg,color));
};


const biglog = (msg, color) => {
  log(figlet.textSync(msg,{horizontalLayout: 'full'}), color);
};

const errorlog = (emsg) => {
  console.log(`${colorize("Error","red")}: ${colorize(colorize(emsg, "red"), "bgYellowBright" )}`);
};

biglog('CORE Quiz', 'green');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: colorize("quiz > ",'blue'),
  completer: (line) => {
    const completions = 'h help list show add delete edit test p play credits q quit'.split(' ');
    const hits = completions.filter((c) => c.startsWith(line));
    // show all completions if none found
    return [hits.length ? hits : completions, line];
}

});

rl.prompt();

rl.on('line', (line) => {

  let args = line.split(" ");
  let cmd = args[0].toLowerCase().trim();

  switch (cmd) {
    case '':
      rl.promt();
      break;

    case 'help':
    case 'h':
      helpCmd();
      break;

    case 'list':
      listCmd();
      break;

    case 'show':
      showCmd(args[1]);
      break;

    case'add':
      addCmd();
      break;

    case 'delete':
      deleteCmd(args[1]);
      break;

    case 'edit':
      editCmd(args[1]);
      break;

    case 'test':
      testCmd(args[1]);
      break;

    case 'play':
    case 'p':
      playCmd();
      break;

    case 'credits':
      creditsCmd();
      break;

    case'q':
    case 'quit':
      quitCmd();
      break;


    default:
      console.log(`Comando desconocido: '${colorize(cmd,'red')}'`);
      console.log(`Use ${colorize('help','green')} para ver todos los comandos disponibles.`);
      rl.prompt();
      break;
  }


})
.on('close', () => {
  console.log('Adios!');
  process.exit(0);
});


const helpCmd = () => {
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


const listCmd = () => {
  log('list - Listar los quizzes existentes.');
  rl.prompt();
};

const showCmd = id => {
  log('show <id> - Muestra la pregunta y la respuesta el quiz indicado.');
  rl.prompt();
};

const addCmd = () => {
  log('add - Añadir un nuevo quiz interactivamente.');
  rl.prompt();
};

const deleteCmd = id => {
  log('delete <id> - Borrar el quiz indicado.');
  rl.prompt();
};

const editCmd = id => {
  log('edit <id> - Editar el quiz indicado.');
  rl.prompt();
};

const testCmd = id => {
  log('test <id> - Probar el quiz indicado.');
  rl.prompt();
};

const playCmd = () => {
  log('p|play - Jugar a preguntar aleatoriamente todos los quizzes.');
  rl.prompt();
};

const creditsCmd = () => {
  log('Autor de la práctica:');
  log('Matthias Killer','green');
  rl.prompt();
};

const quitCmd = () => {
  rl.close();
};
