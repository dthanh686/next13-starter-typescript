"use client";
import Link from "next/link";
import t from "@/styles/app.module.css";
import d from "@/styles/thanhtd.module.css";
import TableApp from "@/components/table";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
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
      <TableApp />
    </>
  );
};

export default Home;
