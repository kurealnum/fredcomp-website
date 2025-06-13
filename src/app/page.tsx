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
import LakeWithCoachDave from "@img/lake_with_coachdave.jpg";
import LilyOnBike from "@img/lilyonbike.jpg";
import Carousel1 from "@img/homepage_carousel_1.jpg";
import Carousel2 from "@img/homepage_carousel_2.jpg";
import Carousel3 from "@img/homepage_carousel_3.jpg";
import RowWrap from "@/components/RowWrap";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LoadIn from "@/components/LoadIn";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.fredericksburgmtb.org",
    logo: "https://www.fredericksburgmtb.org/fredcomp_logo.png",
    contactPoint: {
      contactType: "Person",
      email: "fredcompmtb@gmail.com",
      telephone: "+1-540-220-8473",
    },
    name: "Fredericksburg Composite Mountain Bike Team",
    alternateName: "FredComp MTB Team",
    email: "fredcompmtb@gmail.com",
    description:
      "Fredericksburg Composite is a youth/interscholastic mountain biking team in Fredericksburg, Virginia.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      ></script>
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
        <LoadIn>
          <RowWrap maxWidth={1200} id="about-us">
            <div className="w-[90%] max-w-[500px] font-light">
              <p className="mb-3">
                We’re a youth composite mountain biking team located in
                Fredericksburg, Virginia. Our goal is to get more kids on bikes
                and build the foundation for a lifelong enjoyment of mountain
                biking and having fun outdoors.
              </p>
              <p className="mb-3">
                We participate in two racing seasons for student athletes who
                are interested in racing, and we will prepare all student
                athletes of all riding abilities and skill level for the racing
                scene.{" "}
              </p>
              <p className="mb-3">
                That being said, student athletes are not required to race.
                Mountain bike racing is a unique team environment where there
                are no cuts and there is no bench; everyone rides and
                contributes to the team no matter their level of ability,
                fitness, or interest in competition.
              </p>
            </div>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  className="mx-auto w-[90%] max-w-[500px]"
                  src={TeamPhoto}
                  alt="Fredericksburg Composite team photo for the Spring 2025 season"
                  placeholder="blur"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">
                  Fredericksburg Composite team photo for the Spring 2025 season
                </p>
              </TooltipContent>
            </Tooltip>
          </RowWrap>
        </LoadIn>
        <LoadIn>
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
        </LoadIn>
        <LoadIn>
          <RowWrap maxWidth={1200}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  className="mx-auto w-[90%] max-w-[333px]"
                  alt="Lily attemping an awesome wheelie"
                  src={LilyOnBike}
                  placeholder="blur"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">Lily attempting an awesome wheelie</p>
              </TooltipContent>
            </Tooltip>
            <div className="mt-12 mb-16 max-w-[600px]">
              <h1 className="mx-auto mb-2 w-min text-2xl text-nowrap">
                What we&apos;re about
              </h1>
              <ul className="mx-auto mb-8 w-[90vw] max-w-[600px] list-inside list-disc text-center font-light">
                <li>
                  A team culture that is welcoming, safe, and fun for everyone!
                </li>
                <li>Having fun on bikes and helping others do the same</li>
                <li>Improving ourselves, both physically and mentally</li>
              </ul>
            </div>
          </RowWrap>
        </LoadIn>
        <LoadIn>
          <RowWrap maxWidth={1200}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  className="mx-auto w-[90%] max-w-[333px]"
                  alt="Oscar, Donovin, and Scott with Coach Dave in the background"
                  src={LakeWithCoachDave}
                  placeholder="blur"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">
                  Oscar, Donovin, and Scott with Coach Dave in the background
                </p>
              </TooltipContent>
            </Tooltip>
            <div>
              <h1 className="mx-auto mb-2 w-min list-disc text-2xl text-nowrap">
                What you need
              </h1>
              <ul className="mx-auto mb-8 w-[90vw] max-w-[600px] list-inside list-disc text-center font-light">
                <li>
                  <div className="inline-block">
                    <div className="flex flex-row flex-wrap gap-1">
                      <p>
                        A working mountain bike with gears.{" "}
                        <a
                          className="text-secondary hover:underline"
                          href="/faq#loaner-bikes"
                        >
                          But what if I don&apos;t have a bike?
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  Means of carrying water. Water bottles, hydration packs, or a
                  parent!
                </li>
                <li>A positive attitude and a smile!</li>
              </ul>
            </div>
          </RowWrap>
        </LoadIn>
        <LoadIn>
          <div className="mx-auto flex max-w-[1020px] flex-row flex-wrap items-center justify-center gap-8 font-light">
            <p className="w-[95vw] max-w-[600px]">
              Fredericksburg Composite MTB Team and it&apos;s members are
              inclusive, equitable, and respectful to our fellow riders and
              greater community. We stand with all who share these values and do
              not tolerate racism, homophobia, or any other form of hate or
              discrimination. We will continue to work towards inclusivity,
              equity, and diversity as a team. 
            </p>
            <Carousel className="mx-10 w-[70vw] max-w-[300px]">
              <CarouselContent>
                <CarouselItem>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={Carousel1}
                        alt="Crosby (left) and Milo (right) lifting Lucas"
                        className="mx-auto w-[90vw] max-w-[300px]"
                        placeholder="blur"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">
                        Crosby (left) and Milo (right) lifting Lucas
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CarouselItem>
                <CarouselItem>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={Carousel2}
                        alt="Coach Pete with his daughters, Emma (left) and Lily (right)"
                        className="mx-auto w-[90vw] max-w-[300px]"
                        placeholder="blur"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">
                        Coach Pete with his daughters, Emma (left) and Lily
                        (right)
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CarouselItem>
                <CarouselItem>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={Carousel3}
                        alt="(From left to right) Emma C., Brianna, Lily, and Emma S."
                        className="mx-auto w-[90vw] max-w-[300px]"
                        placeholder="blur"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">
                        (From left to right) Emma C., Brianna, Lily, and Emma S.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </LoadIn>
      </div>
    </>
  );
}
