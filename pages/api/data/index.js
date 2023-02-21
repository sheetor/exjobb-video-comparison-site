const fsp = require("fs").promises;

let answers = require("../../../data/answers.json");
export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const userAnswer = JSON.stringify(req.body.answers);
      const newAnswers = {
        id: Date.now(),
        date: Date.now(),
        userAnswers: userAnswer,
      };
      answers.push(newAnswers);
      res.status(201).json(newAnswers);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "error reading data" });
    }
  }
}
