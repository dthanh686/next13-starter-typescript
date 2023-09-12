import Link from "next/link";

const Home = () => {
  return (
    <>
      <div>
        <a href="/admin">Admin</a>
      </div>
      <Link href="/admin">Test Link</Link>
    </>
  );
};

export default Home;
