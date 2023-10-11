"use client"
import Link from "next/link";
import React from "react";
import styles from "@/components/navbar/navbar.module.css"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

interface ILinks {
  id: number;
  title: string;
  url: string;
}
const Links: ILinks[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   url: "/contact",
  // },
  // {
  //   id: 2,
  //   title: "Portofolio",
  //   url: "/portofolio",
  // },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Eko Blog</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {Links.map(link=>(
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
        ))}
        <button onClick={()=>console.log("logout")} className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
