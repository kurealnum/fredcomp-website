import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingPhoto from "../../public/landingpic.jpg";
import TeamPhoto from "../../public/landing_teamphoto.jpg";

export default function Home() {
  return (
    <>
      <div className="absolute right-0 left-[50%] z-10 w-screen -translate-x-[50%] translate-y-[37vh] overflow-hidden [@media(max-height:700px)]:translate-y-[30vh]">
        <h1 className="w-screen text-center text-4xl text-white text-shadow-lg/25 md:text-5xl lg:text-6xl">
          Fredericksburg Composite Mountain Bike Team
        </h1>
        <Button
          className="relative left-[50%] mt-6 -translate-x-[50%]"
          variant={"secondary"}
        >
          <a href="#about-us">About us</a>
        </Button>
      </div>
      <div className="relative mb-8 h-screen overflow-hidden">
        <Image
          src={LandingPhoto}
          alt=""
          className="ml-[50%] h-screen w-[200vh] max-w-[200vh] -translate-x-[50%] scale-105 overflow-clip opacity-85 blur-md 2xl:scale-150"
        />
      </div>
      <div
        className="mx-auto mb-8 flex flex-row flex-wrap items-center justify-center gap-8"
        id="about-us"
      >
        <div className="w-[90%] max-w-[500px] font-light">
          <p className="mb-3">
            We’re a youth composite mountain biking team located in
            Fredericksburg, Virginia. Our goal is to get more kids on bikes and
            build the foundation for a lifelong enjoyment of riding and having
            fun outdoors.
          </p>
          <p className="mb-3">
            We participate in two racing seasons for student athletes who are
            interested in racing, and we will prepare all student athletes of
            all riding abilities for the racing scene.{" "}
          </p>
          <p className="mb-3">
            That being said, student athletes are not required to race. Mountain
            Bike racing is a unique team environment where there are no cuts and
            there is no bench; everyone rides and contributes to the team no
            matter their ability level or interest in competition.
          </p>
        </div>
        <Image
          className="w-[90%] max-w-[500px]"
          src={TeamPhoto}
          alt="Fredericksburg Composite team photo for the Spring 2025 season"
        />
      </div>
    </>
  );
}
