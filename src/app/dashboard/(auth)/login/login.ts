"use server";

import { signIn } from "next-auth/react";

export async function login(prevState: any, data: FormData) {
  const username: string = data.get("username") as string;
  const password: string = data.get("password") as string;
  try {
    console.log("test");
    signIn("credentials", { username, password });
  } catch (error) {
    return { message: "Error" };
  }
}
