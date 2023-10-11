
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const prisma = new PrismaClient();
        const articles = await prisma.articles.findMany();
        return new NextResponse(JSON.stringify( articles),{status:200});    
    } catch (error) {
        return new NextResponse("database error",{status:500});    
    }
    
}