import CustomLink from "@/components/CustomLink";
import LoadIn from "@/components/LoadIn";
import RowWrap from "@/components/RowWrap";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RonAndRon from "@img/ron_and_ron.jpg";
import TeamInField from "@img/team_in_field.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Volunteer for FredComp! - FredComp MTB",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center font-light">
      <h1 className="my-8 text-center text-3xl">Volunteer</h1>
      <LoadIn>
        <RowWrap maxWidth={1200}>
          <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
            <h2 className="text-xl">Volunteer Inquiry</h2>
            <div>
              Please complete{" "}
              <CustomLink href="https://forms.gle/dkaQjEtzNpb7YLk18">
                this form
              </CustomLink>{" "}
              to inquire about being a general volunteer!
            </div>
            <p>
              We respond to all inquiries and the only criteria for volunteering
              is a positive attitude and a desire to participate in a
              constructive youth development program (Fredericksburg
              Composite!).
            </p>
            <ul className="list-inside list-disc">
              <li>
                Parking lot volunteer: take attendance on the team roster as
                students arrive at practice and make sure every student signs
                out after practice. 
              </li>
              <li>
                Grants researcher/writer: as we attempt to sponsor more student
                athletes who otherwise would not financially be able to join the
                team or participate in races, we are always in need of
                volunteers to help find and apply for grants.
              </li>
              <li>
                Sponsorship coordinator: volunteer to help recruit sponsors for
                the team with either cash or gear donations.
              </li>
              <li>
                Photographer: volunteer to take photos at practices and/or races
                and other events.
              </li>
            </ul>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Image
                alt="Coach Ron and his son Ronald"
                src={RonAndRon}
                className="mx-auto w-[94vw] max-w-[500px] transition-shadow duration-500 ease-out hover:shadow-[0px_0px_14px_2px_rgba(0,_136,_197,_0.7)]"
                placeholder="blur"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-white">Coach Ron and his son Ronald</p>
            </TooltipContent>
          </Tooltip>
        </RowWrap>
      </LoadIn>
      <LoadIn>
        <RowWrap maxWidth={1200} className="mt-8">
          <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
            <h2 className="text-center text-xl">Volunteer Coach Inquiry</h2>
            <div>
              Please complete{" "}
              <CustomLink href="https://forms.gle/PKuLApVavxtu1Uo88">
                this form
              </CustomLink>{" "}
              to inquire about becoming a volunteer coach!
            </div>
            <p>
              Fredericksburg Composite relies upon a 100% volunteer corps of
              coaches. Like most youth sport leagues, we draw our coaches from
              the parent pool and the local community. Most of our coaches are
              not expert-level cyclists or racers, rather they draw from a wide
              range of professional & personal expertise.
            </p>
            <div>
              All Fredericksburg Composite coaches are trained/vetted with
              background checks, abuse awareness, and upper level coaches are
              trained with First Aid and CPR. Basic training consists of a
              background check and roughly 3 hours of online training courses{" "}
              <CustomLink href="https://nationalmtb.org/coach-education-requirements">
                provided by NICA.
              </CustomLink>
            </div>
            <p>
              We require a coach to student athlete ratio of 2:8. The more
              coaches we have, the more student athletes we can bring to the
              team! 
            </p>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Image
                alt="Student athletes in the field"
                src={TeamInField}
                className="mx-auto max-h-[333px] w-[94vw] max-w-[500px] transition-shadow duration-500 ease-out hover:shadow-[0px_0px_14px_2px_rgba(0,_136,_197,_0.7)]"
                placeholder="blur"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-white">Student athletes in the field</p>
            </TooltipContent>
          </Tooltip>
        </RowWrap>
      </LoadIn>
    </div>
  );
}
