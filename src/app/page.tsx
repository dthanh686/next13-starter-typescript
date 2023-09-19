"use client";
import Link from "next/link";
import t from "@/styles/app.module.css";
import d from "@/styles/thanhtd.module.css";
import TableApp from "@/components/table";

const Home = () => {
  return (
    <>
      <div className={t["red"]}>
        <a className={d["red"]} href="/admin">
          Admin
        </a>
      </div>
      <Link href="/admin">Test Link</Link>
      <TableApp />
    </>
  );
};

export default Home;
