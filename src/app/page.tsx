import Link from "next/link";
import t from "@/styles/app.module.css";
import d from "@/styles/thanhtd.module.css";

const Home = () => {
  return (
    <>
      <div className={t["red"]}>
        <a className={d["red"]} href="/admin">
          Admin
        </a>
      </div>
      <Link href="/admin">Test Link</Link>
    </>
  );
};

export default Home;
