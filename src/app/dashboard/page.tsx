"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const[isloading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async() => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if(!res.ok)
  //     {
  //       setErr(true);
  //     }
  //     setData(await res.json());
  //     setLoading(false);
  //   }
  // },[]);
  const session = useSession();
  console.log(session);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard