const fs = require("fs");

// users in JSON file for simplicity, store in a db for production applications
let answers = require("../data/answers.json");

export const answerRepo = {
  getAll: () => answers,
  create,
};

function create(userAnswers) {
  // generate new user id
  const newAnswers = {
    id: Date.now(),
    date: Date.now(),
    userAnswers: userAnswers,
  };
  // add and save user
  answers.push(newAnswers);
  saveData();
}

function saveData() {
  fs.writeFileSync("../data/answers.json", JSON.stringify(answers, null, 4));
}
