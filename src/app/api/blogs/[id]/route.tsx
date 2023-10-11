
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const GET = async (request : any, { params }: { params: { id: string } }) => {
    try {
        const prisma = new PrismaClient();
        const articles = await prisma.articles.findFirst(
            {
                where: {id : parseInt(params.id)}
            })
        return new NextResponse(JSON.stringify( articles),{status:200});    
    } catch (error) {
        console.log(error)
        return new NextResponse("database error",{status:500});    
    }
    
}