import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingPhoto from "@img/landingpic.jpg";
import TeamPhoto from "@img/landing_teamphoto.jpg";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carousel1 from "@img/homepage_carousel_1.jpg";
import Carousel2 from "@img/homepage_carousel_2.jpg";
import Carousel3 from "@img/homepage_carousel_3.jpg";

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
      <div className="flex flex-col gap-16">
        <div
          className="mx-auto flex w-[95vw] max-w-[1200px] flex-row flex-wrap items-center justify-center gap-8"
          id="about-us"
        >
          <div className="w-[90%] max-w-[500px] font-light">
            <p className="mb-3">
              We’re a youth composite mountain biking team located in
              Fredericksburg, Virginia. Our goal is to get more kids on bikes
              and build the foundation for a lifelong enjoyment of riding and
              having fun outdoors.
            </p>
            <p className="mb-3">
              We participate in two racing seasons for student athletes who are
              interested in racing, and we will prepare all student athletes of
              all riding abilities for the racing scene.{" "}
            </p>
            <p className="mb-3">
              That being said, student athletes are not required to race.
              Mountain Bike racing is a unique team environment where there are
              no cuts and there is no bench; everyone rides and contributes to
              the team no matter their ability level or interest in competition.
            </p>
          </div>
          <Image
            className="w-[90%] max-w-[500px]"
            src={TeamPhoto}
            alt="Fredericksburg Composite team photo for the Spring 2025 season"
          />
        </div>
        <div className="mx-auto flex max-w-[470px] flex-row items-center justify-around gap-2">
          <Button variant={"secondary"} className="cursor-pointer">
            <Link href={"/join"}>Join the team</Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer">
            <Link href={"/volunteer"}>Volunteer or Coach</Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer">
            <Link href={"/donate"}>Donate</Link>
          </Button>
        </div>
        <div className="mx-auto mt-12 mb-16 w-[95vw] max-w-[600px]">
          <h1 className="mx-auto mb-2 w-min text-2xl text-nowrap">
            What we&apos;re about
          </h1>
          <ul className="mx-auto mb-8 w-[90%] list-inside list-disc text-center font-light">
            <li>A team culture that is welcoming, safe, and fun!</li>
            <li>Having fun on bikes and helping others do the same</li>
            <li>Improving ourselves, both physically and mentally</li>
          </ul>
          <h1 className="mx-auto mb-2 w-min list-disc text-2xl text-nowrap">
            What you need
          </h1>
          <ul className="mx-auto mb-8 w-[90%] list-inside list-disc text-center font-light">
            <li>
              A working mountain bike with gears. But what if I don&apos;t have
              a bike?
            </li>
            <li>
              Means of carrying water. Water bottles, hydration packs, or a
              parent!
            </li>
            <li>A positive attitude and a smile!</li>
          </ul>
        </div>
        <div className="mx-auto flex max-w-[1020px] flex-row flex-wrap items-center justify-center gap-8 font-light">
          <p className="w-[95vw] max-w-[600px]">
            Fredericksburg Composite MTB Team is inclusive, equitable, and
            respectful to our fellow riders and greater community. We stand with
            all who share these values and do not tolerate racism, homophobia,
            hate, or any other forms of discrimination. We will continue to work
            towards inclusivity, equity, and diversity as a team. 
          </p>
          <Carousel className="mx-10 w-[70vw] max-w-[300px]">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={Carousel1}
                  alt="Crosby (left) and Milo (right) lifting Lucas"
                  className="mx-auto w-[90vw] max-w-[300px]"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Carousel2}
                  alt="Coach Pete with his daughters, Emma (left) and Lily (right)"
                  className="mx-auto w-[90vw] max-w-[300px]"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Carousel3}
                  alt="(From left to right) Emma C., Brianna, Lily, and Emma S."
                  className="mx-auto w-[90vw] max-w-[300px]"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
