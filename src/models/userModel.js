import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = () => {
  return prisma.user.findMany();
};