import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute right-0 left-[50%] z-10 w-screen -translate-x-[50%] translate-y-[37vh] overflow-hidden [@media(max-height:700px)]:translate-y-[30vh]">
        <h1 className="w-screen text-center text-4xl text-shadow-lg/25 md:text-5xl lg:text-6xl">
          Fredericksburg Composite Mountain Bike Team
        </h1>
        <Button
          className="relative left-[50%] mt-6 -translate-x-[50%]"
          variant={"secondary"}
        >
          About us
        </Button>
      </div>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={"/landingpic.jpg"}
          width={1503}
          height={762}
          alt=""
          className="ml-[50%] h-screen w-[200vh] max-w-[200vh] -translate-x-[50%] scale-105 overflow-clip opacity-85 blur-md 2xl:scale-150"
        />
      </div>
    </>
  );
}
