"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="primary">Button</Button>
      <div>Page</div>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </>
  );
};

export default Page;
