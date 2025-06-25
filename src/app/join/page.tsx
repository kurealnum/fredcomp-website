import Link from "next/link";
import TeamPhoto from "@img/lake_teamphoto.jpg";
import EastonAndRonald from "@img/easton_and_ronald.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/CustomLink";
import { Metadata } from "next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LoadIn from "@/components/LoadIn";

export const metadata: Metadata = {
  title: "Join us! - FredComp MTB",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center font-light">
      <h1 className="my-8 text-3xl" id="join">
        Join the team!
      </h1>
      <div className="flex flex-row flex-wrap items-baseline justify-center gap-8">
        <LoadIn>
          <div className="flex max-w-[600px] flex-col">
            <Tooltip>
              <TooltipTrigger>
                <Image
                  alt="Team photo by the lake"
                  className="mx-auto w-[94vw] max-w-[500px] transition-shadow duration-500 ease-out hover:shadow-[0px_0px_14px_2px_rgba(0,_136,_197,_0.7)]"
                  src={TeamPhoto}
                  placeholder="blur"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">Team photo by the lake</p>
              </TooltipContent>
            </Tooltip>
            <h2 className="my-4 text-center text-xl">
              You&apos;re always a good fit for us!
            </h2>
            <div className="mx-auto w-[95%]">
              <p>
                We&apos;d be happy to have you join Fred Comp! We&apos;re
                looking for riders who are:
              </p>
              <ul className="mb-2 list-inside list-disc">
                <li>
                  9 years or older{" "}
                  <CustomLink href="/faq#age-exceptions">
                    (but we do make exceptions!)
                  </CustomLink>
                </li>
                <li>Excited about mountain biking</li>
              </ul>
              <p>
                If you don&apos;t have a working bike, we may be able to provide
                one for you.
              </p>
            </div>
          </div>
        </LoadIn>
        <LoadIn>
          <div className="flex flex-col">
            <Tooltip>
              <TooltipTrigger>
                <Image
                  className="mx-auto max-h-[333px] w-auto transition-shadow duration-500 ease-out hover:shadow-[0px_0px_14px_2px_rgba(0,_136,_197,_0.7)]"
                  alt="Easton carrying Ronald"
                  src={EastonAndRonald}
                  placeholder="blur"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">Easton carrying Ronald</p>
              </TooltipContent>
            </Tooltip>
            <h2 className="my-4 text-center text-xl">
              Student Athlete Inquiry
            </h2>
            <div className="mx-auto w-[95%] max-w-[600px]">
              <div className="mb-2">
                Please use{" "}
                <CustomLink href="https://forms.gle/U3jdPCcdpH2qMc5c6">
                  this form
                </CustomLink>{" "}
                to inquire about your student athlete joining the team!
              </div>
              <p>
                This form is only an inquiry, not means of registration. Note
                that student athletes are not required to have any previous
                experience. The “Experience” field in the form is only present
                to help us gauge which group your student athlete may be best
                suited to join.
              </p>
            </div>
          </div>
        </LoadIn>
      </div>
      <LoadIn>
        <h1 className="my-8 mt-16 text-3xl" id="register">
          Register
        </h1>
        <div className="flex w-[94vw] max-w-[600px] flex-col gap-6">
          <p>
            The Fredericksburg Composite spring season runs from January to
            June, and the fall season runs from July to November. Team group
            rides happen outside of the racing calendar through organized
            practices when weather and daylight allow. We encourage all student
            athletes to try a race series, with VAHS in the spring or NICA in
            the fall.  Registration for both of these racing series is separate
            from Fredericksburg Composite Registration.
          </p>
          <p>Registration closes 30 days after the start of each season.</p>
          <div>
            To register, you must complete the{" "}
            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSdvjKtTGr0g9zjkXMQ9yRNQf6mfrj070iT5wR612iR8KeEPNw/viewform?usp=sf_link">
              registration form.
            </CustomLink>
          </div>
          <p>
            Once your registration is received, the Team Waiver and Code of
            Conduct will be emailed for riders and families to review and
            e-sign.
          </p>
          <p>The registration fee is $50 per season, per student athlete.</p>
        </div>
      </LoadIn>
      <div className="my-4 flex flex-row flex-wrap justify-center gap-4">
        <Button variant={"secondary"}>
          <Link
            href={
              "https://www.google.com/url?q=https%3A%2F%2Fsquare.link%2Fu%2F4V2nVHru&sa=D&sntz=1&usg=AOvVaw3uJ72s6D6L1JJAY5BzTpNH"
            }
          >
            Pay by credit card
          </Link>
        </Button>
        <Button variant={"secondary"}>
          <Link
            href={
              "http://www.google.com/url?q=http%3A%2F%2Fpaypal.me%2FFredCompMTB&sa=D&sntz=1&usg=AOvVaw3sOU_dMG5DCjaXSYAlP7nw"
            }
          >
            Pay with PayPal
          </Link>
        </Button>
      </div>
      <div className="mt-4 flex w-[94vw] max-w-[600px] flex-col gap-6">
        <p>
          If you’re an adult interested in volunteering to be one of our amazing
          coaches and ride volunteers, please contact us and consider{" "}
          <Link href={"/volunteer"}>volunteering</Link>! Your involvement means
          more #KidsOnBikes!
        </p>
      </div>
    </div>
  );
}
