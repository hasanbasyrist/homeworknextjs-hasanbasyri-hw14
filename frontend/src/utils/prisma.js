import { PrismaClient } from '@prisma/client';

const prisma =
    global.prisma || new PrismaClient({
        Log: ["query"],
    });
        if(process.env.NODE_ENV != 'production') global.prisma
export { prisma }; 