import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma, PrismaClient } from "@prisma/client";

export const POST = async (request : Request) => {
    const {username, password} = await request.json();
    try {
        const hashPassword = bcrypt.hash(password,5);
        const prisma = new PrismaClient();
        const userObj = await prisma.users.findFirst({where: {userName: username }});
        console.log(userObj);
        console.log("test");
        if(userObj === null)
        {
            return new NextResponse("Username is not found",{
                status : 400
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password,userObj.password as string);
        if(isPasswordCorrect === true)
        {
            return new NextResponse(JSON.stringify(userObj),{
                status : 200
            })
        }
        else
        {
            return new NextResponse("Invalid Password",{
                status : 400
            })
        }
        
    } catch (error) {
        let message = "unknown error";
        if(error instanceof Error) message = error.message;
        return new NextResponse(message,{
            status : 500
        })
    }

}