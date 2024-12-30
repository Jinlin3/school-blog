import Image from "next/image";
import LoginCard from "../components/LoginCard";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl py-5">Home Page</h1>
      <LoginCard />
    </>
  );
}
