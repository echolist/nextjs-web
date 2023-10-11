import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface attr {
  text: string;
  url: string;
}

const Button = ({ text, url }: attr) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
