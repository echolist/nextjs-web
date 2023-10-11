"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import styles from './login.module.css'
import { experimental_useFormState, experimental_useFormStatus } from 'react-dom';
import {login} from './login'

const initialState = {
  message: null,
};


function SubmitButton() {
  const { pending } = experimental_useFormStatus();

  return (
    <button type="submit" className={styles.button} aria-disabled={pending}>
      Login
    </button>
  );
}

const Login = () => {
  const [state, formAction] = experimental_useFormState(login, initialState);
  
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
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />
        <SubmitButton />
      </form>
      <button onClick={()=>{signIn("google")}} >Login With Google</button>
      <button onClick={() => signIn("credentials")}>Sign in</button>
    </div>
  )
}

export default Login