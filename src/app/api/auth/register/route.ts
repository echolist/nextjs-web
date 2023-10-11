import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma, PrismaClient } from "@prisma/client";

export const POST = async (request : Request) => {
    const {username, password, email} = await request.json();
    try {
        const hashPassword = bcrypt.hash(password,5);
        const prisma = new PrismaClient();
        const userName = await prisma.users.findFirst({where: {userName: username }});
        if(userName === null)
        {
            await prisma.users.create(
                {
                    data:{
                        userName: username,
                        password:(await hashPassword).toString(),
                        email: email
                    }
                }
            );
            return new NextResponse("User Has been Created",{
                status : 201
            })
        }
        return new NextResponse("Given username is already exist",{
            status : 402
        })
    } catch (error) {
        let message = "unknown error";
        if(error instanceof Error) message = error.message;
        return new NextResponse(message,{
            status : 500
        })
    }

}