import Link from "next/link";
import TeamPhoto from "@img/lake_teamphoto.jpg";
import EastonAndRonald from "@img/easton_and_ronald.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/CustomLink";
import { Metadata } from "next";

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
        <div className="flex max-w-[600px] flex-col">
          <Image
            alt="Team photo by the lake"
            className="mx-auto w-[94vw] max-w-[500px]"
            src={TeamPhoto}
          />
          <h2 className="my-4 text-center text-xl">
            You&apos;re always a good fit for us!
          </h2>
          <div className="mx-auto w-[95%]">
            <p>
              We&apos;d be happy to have you join Fred Comp! We&apos;re looking
              for riders who are:
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
        <div className="flex flex-col">
          <Image
            className="mx-auto max-h-[333px] w-auto"
            alt="Easton carrying Ronald"
            src={EastonAndRonald}
          />
          <h2 className="my-4 text-center text-xl">Student Athlete Inquiry</h2>
          <div className="mx-auto w-[95%] max-w-[600px]">
            <div className="mb-2">
              Please use{" "}
              <CustomLink href="https://forms.gle/U3jdPCcdpH2qMc5c6">
                this form
              </CustomLink>{" "}
              to inquire about your student athlete joining the team!
            </div>
            <p>
              This form is only an inquiry, not means of registration. Note that
              student athletes are not required to have any previous experience.
              The “Experience” field in the form is only present to help us
              gauge which group your student athlete may be best suited to join.
            </p>
          </div>
        </div>
      </div>
      <h1 className="my-8 mt-16 text-3xl" id="register">
        Register
      </h1>
      <div className="flex w-[94vw] max-w-[600px] flex-col gap-6">
        <p>
          The Fredericksburg Composite spring season runs from January to June,
          and the fall season runs from July to November. Team group rides
          happen outside of the racing calendar through organized practices when
          weather and daylight allow. We encourage all student athletes to try a
          race series, with VAHS in the spring or NICA in the fall. 
          Registration for both of these racing series is separate from
          Fredericksburg Composite Registration.
        </p>
        <p>
          If you’re an adult interested in volunteering to be one of our amazing
          coaches and ride volunteers, please contact us and consider{" "}
          <Link href={"/volunteer"}>volunteering</Link>! Your involvement means
          more #KidsOnBikes!
        </p>
        <p>To register, you must submit the following:</p>
        <ol className="list-inside list-decimal">
          <li>Registration form</li>
          <li>
            Liability waiver (signed and dated - drop off at a ride/practice,
            mail, or scan and email to fredcompmtb@gmail.com)
          </li>
          <li>
            Code of Conduct (signed and dated - drop off at a ride/practice,
            mail, or scan and email to fredcompmtb@gmail.com)
          </li>
        </ol>
        <p>
          There is a also a registration fee of $50 (per season, per student
          athlete for Fall 2025) that is payable by cash, check, PayPal or
          credit card.
        </p>
      </div>
      <div className="my-4 flex flex-row flex-wrap justify-center gap-4">
        <Button variant={"default"}>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSdvjKtTGr0g9zjkXMQ9yRNQf6mfrj070iT5wR612iR8KeEPNw/viewform?usp=sf_link"
            }
            className="text-white"
          >
            Registration form
          </Link>
        </Button>
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
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        <div className="flex w-[100%] max-w-[600px] flex-col items-center">
          <h3 className="mt-16 mb-2 text-xl font-normal">Liablity Waiver</h3>
          <embed
            className="mx-auto h-[94vw] max-h-[700px] w-[94vw] max-w-[600px]"
            type="application/pdf"
            src="/fredcomp_releaseofclaims.pdf"
          />
        </div>
        <div className="flex w-[100%] max-w-[600px] flex-col items-center">
          <h3 className="mt-16 mb-2 text-xl font-normal">Code of Conduct</h3>
          <embed
            className="mx-auto h-[94vw] max-h-[700px] w-[94vw] max-w-[600px]"
            type="application/pdf"
            src="/fredcomp_codeofconduct.pdf"
          />
        </div>
      </div>
    </div>
  );
}
