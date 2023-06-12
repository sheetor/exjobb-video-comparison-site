import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const answFunc = {
  dbs: prisma,
  createAnswers,
  createComments,
};

async function createAnswers(answers) {
  const savedAnswers = await prisma.userAnswers.create({
    data: answers,
  });
  return savedAnswers;
}
async function createComments(comment){
  const savedAnswers = await prisma.userComments.create({
    data: comment
  })
  return savedAnswers;
}
