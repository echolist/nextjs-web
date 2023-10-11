import React from 'react'
import styles from "./about.module.css"
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1>My Identity</h1>
      <p>My name is Eko, I am a developer who loves to learn new technology</p>
      </div>
      <div className={styles.item}>
        <h1>Contact Me</h1>
        <form className={styles.form}>
          <input type='text' name='name' placeholder='Your Name' className={styles.input} />
          <input type='email' name='email' placeholder='Your Email' className={styles.input} />
          <textarea cols={30} rows={20} name='message' 
          placeholder='Your Message' 
          className={styles.textArea}>

          </textarea>
          <Button url="" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default About