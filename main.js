const readline = require('readline');

const figlet = require('figlet');
const chalk = require('chalk');

console.log(chalk.green.bold(
                  figlet.textSync('CORE Quiz', {horizontalLayout: 'full'})
                )
);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'quiz> ',
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
      console.log(`Comando desconocido: '${cmd}'`);
      console.log(`Use 'help' para ver todos los comandos disponibles.`);
      rl.prompt();
      break;
  }


})
.on('close', () => {
  console.log('Adios!');
  process.exit(0);
});


const helpCmd = () => {
  console.log("Commandos:");
  console.log("  h|help - Muestra esta ayuda.");
  console.log("  list - Listar los quizzes existentes.");
  console.log("  show <id> - Muestra la pregunta y la respuesta el quiz indicado.");
  console.log("  add - Añadir un nuevo quiz interactivamente.");
  console.log("  delete <id> - Borrar el quiz indicado.");
  console.log("  edit <id> - Editar el quiz indicado.");
  console.log("  test <id> - Probar el quiz indicado.");
  console.log("  p|play - Jugar a preguntar aleatoriamente todos los quizzes.");
  console.log("  credits - Créditos.");
  console.log("  q|quit - Salir del programa.");
  rl.prompt();
};


const listCmd = () => {
  console.log('list - Listar los quizzes existentes.');
  rl.prompt();
};

const showCmd = id => {
  console.log('show <id> - Muestra la pregunta y la respuesta el quiz indicado.');
  rl.prompt();
};

const addCmd = () => {
  console.log('add - Añadir un nuevo quiz interactivamente.');
  rl.prompt();
};

const deleteCmd = id => {
  console.log('delete <id> - Borrar el quiz indicado.');
  rl.prompt();
};

const editCmd = id => {
  console.log('edit <id> - Editar el quiz indicado.');
  rl.prompt();
};

const testCmd = id => {
  console.log('test <id> - Probar el quiz indicado.');
  rl.prompt();
};

const playCmd = () => {
  console.log('p|play - Jugar a preguntar aleatoriamente todos los quizzes.');
  rl.prompt();
};

const creditsCmd = () => {
  console.log('Autor de la práctica:');
  console.log('Matthias Killer');
  rl.prompt();
};

const quitCmd = () => {
  rl.close();
  rl.prompt();
};
