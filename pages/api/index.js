export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
/* import { answFunc } from "../../data/index";


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

  const savedContacts = await answFunc.create(out);
  res.status(201).json(savedContacts);
}
 */