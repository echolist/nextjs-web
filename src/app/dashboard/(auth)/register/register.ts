"use server";

export async function register(prevState: any, data: FormData) {
  const username: string = data.get("username") as string;
  const password: string = data.get("password") as string;
  const email: string = data.get("email") as string;

  try {
    const rest = await fetch(process.env.BASE_URL + "api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });
    if (rest.status == 201) {
      return { message: "success" };
    }
  } catch (error) {
    return { message: "Error" };
  }
}
