/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
} */
import { answFunc } from "../../../data";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "We don't do that here!" });
  }
  const date = new Date();
  const answers = req.body.answers;
  const out = {
    date: date,
    answers: answers,
  };

  const savedContacts = await answFunc.createAnswers(out);
  res.status(201).json(savedContacts);
}
