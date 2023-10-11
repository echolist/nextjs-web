import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getData(id: string) {
  const res = await fetch(`${process.env.BASE_URL}api/blogs/${id}`, {
    cache: "no-store",
  });
  console.log(`${process.env.BASE_URL}api/blogs${id}`);
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const data = await getData(params.id);
 
  return {
    title: data.title,
  }
}

const BlogPost = async ({ params, searchParams }: Props ) => {
  
  const data = await getData(params.id);

  return (
    <div>
      <div>{data.title}</div>
      <div>{data.desc}</div>
    </div>
  );
};

export default BlogPost;
