import { answerRepo } from "../../../helpers/answerFunc";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const answers = JSON.stringify(req.body.answers);

      answerRepo.create(answers);
      res.status(201).json({ answers });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
}
