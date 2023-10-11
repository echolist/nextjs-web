import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL+"api/blogs", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {data.map((item: any) => (
          <div className={styles.items}>
            <Link href={`/blog/${item.id}`} className={styles.title} key={item.id}>
              {item.title}
            </Link>
            <div className={styles.description}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
