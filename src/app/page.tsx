"use client";
import Link from "next/link";
import t from "@/styles/app.module.css";
import d from "@/styles/thanhtd.module.css";
import TableApp from "@/components/table";
import { useEffect } from "react";
import useSWR from "swr";

const Home = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {/* <div>{data.length}</div> */}
      <div className={t["red"]}>
        <a className={d["red"]} href="/admin">
          Admin
        </a>
      </div>
      <Link href="/admin">Test Link</Link>
      <Link href="/facebook" className="nav-link">
        Facebook
      </Link>
      <Link href="/youtube" className="nav-link">
        Youtube
      </Link>
      <Link href="/tiktok" className="nav-link">
        Tiktok
      </Link>
      <TableApp blogs={data} />
    </>
  );
};

export default Home;
