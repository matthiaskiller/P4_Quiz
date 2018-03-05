
let quizzes = [
  {
    question: "Capital de Italia",
    answer: "Roma"
  },
  {
    question: "Capital de Francia",
    answer: "Paris"
  },
  {
    question: "Capital de España",
    answer: "Madrid"
  },
  {
    question: "Capital de Portugal",
    answer: "Lisboa"
  }
];


exports.count  = () => quizzes.length();

const add = (question, answer) => {

    quizzes.push({
        question: (question || "").trim(),
        answer: (answer || "").trim()
    });
};


exports.update = (id, question, update) => {
    const quiz = quizzes[id];
    if(typeof quiz == "undefined")  {
      throw new Error(`El valor del parámetro id no es vaálido.` );
    }
    quizzes.splice(id, 1, {
      question: (question || "").trim(),
      answer: (answer || "").trim()
    });
};


exports.getAll = () => JSON.parse(JSON.stringify(quizzes));


exports.getByIndex = id => {

    const quiz = quizzes[id];
    if(typeof quiz == "undefined")  {
      throw new Error(`El valor del parámetro id no es vaálido.` );
    }
    return JSON.parse(JSON.stringify(quiz));
};

exports.deleteByIndex = id => {

    const quiz = quizzes[id];
    if(typeof quiz == "undefined")  {
      throw new Error(`El valor del parámetro id no es vaálido.` );
    }
    quizzes.splice(id, 1);
};
