"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div>Page</div>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </>
  );
};

export default Page;
