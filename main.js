const readline = require('readline');

console.log("CORE Quiz");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'quiz> '

});

rl.prompt();

rl.on('line', (line) => {

  switch (line.trim()) {
    case '':
      break;

    case 'help':
    case 'h':
      console.log('Commandos:');
      console.log('  h|help - Muestra esta ayuda.');
      console.log('  list - Listar los quizzes existentes.');
      console.log('  show <id> - Muestra la pregunta y la respuesta el quiz indicado.');
      console.log('  add - Añadir un nuevo quiz interactivamente.');
      console.log('  delete <id> - Borrar el quiz indicado.');
      console.log('  edit <id> - Editar el quiz indicado.');
      console.log('  test <id> - Probar el quiz indicado.');
      console.log('  p|play - Jugar a preguntar aleatoriamente todos los quizzes.');
      console.log('  credits - Créditos.');
      console.log('  q|quit - Salir del programa.');
      break;

    case 'list':
      console.log('list - Listar los quizzes existentes.');
      break;

    case 'show':
      console.log('show <id> - Muestra la pregunta y la respuesta el quiz indicado.');
      break;

    case'add':
      console.log('add - Añadir un nuevo quiz interactivamente.');
      break;

    case 'delete':
      console.log('delete <id> - Borrar el quiz indicado.');
      break;

    case 'edit':
      console.log('edit <id> - Editar el quiz indicado.');
      break;

    case 'test':
      console.log('test <id> - Probar el quiz indicado.');
      break;

    case 'play':
    case 'p':
      console.log('p|play - Jugar a preguntar aleatoriamente todos los quizzes.');
      break;

    case 'credits':
      console.log('Autor de la práctica:');
      console.log('Matthias Killer');
      break;

    case'q':
    case 'quit':
      rl.close();
      break;


    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }


})
.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
