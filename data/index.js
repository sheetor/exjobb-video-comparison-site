import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const answFunc = {
  dbs: prisma,
  create,
};

async function create(answers) {
  const savedAnswers = await prisma.userAnswers.create({
    data: answers,
  });
  return savedAnswers;
}
