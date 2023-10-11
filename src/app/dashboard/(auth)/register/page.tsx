"use client";
import React, { FormEvent, useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import {
  experimental_useFormState,
  experimental_useFormStatus,
} from "react-dom";
import { register } from "./register";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = experimental_useFormStatus();

  return (
    <button type="submit" className={styles.button} aria-disabled={pending}>
      Register
    </button>
  );
}

const Register = () => {
  const [state, formAction] = experimental_useFormState(register, initialState);
  if(state?.message ==="success")
  {
    redirect(`/dashboard/login/`);
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} action={formAction}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />
        <SubmitButton />
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <Link href="/dasboard/login">Login with your existing account</Link>
    </div>
  );
};

export default Register;
