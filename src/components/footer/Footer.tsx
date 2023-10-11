"use client"
import React from 'react'
import styles from '@/components/footer/footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Eko Listiyono</div> 
      <div>
        <Image  src="/instagram.png" alt="image" 
        width="50" height="50" onClick={()=>window.location.href="https://instagram.com"} />
      </div>
      </div>
  )
}

export default Footer