import RonAndRon from "@img/ron_and_ron.jpg";
import TeamInField from "@img/team_in_field.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center font-light">
      <h1 className="my-8 text-center text-3xl">Volunteer</h1>
      <div className="mb-16 flex w-auto flex-row flex-wrap">
        <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
          <h2 className="text-xl">Volunteer Inquiry</h2>
          <p>
            Please complete{" "}
            <a
              href="https://forms.gle/dkaQjEtzNpb7YLk18"
              className="text-secondary"
            >
              this form
            </a>{" "}
            to inquire about being a general volunteer!
          </p>
          <p>
            We respond to all inquiries and the only criteria for volunteering
            is a positive attitude and a desire to participate in a constructive
            youth development program.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Parking lot volunteer: take attendance on the team roster as
              students arrive at practice and make sure every student signs out
              after practice. 
            </li>
            <li>
              Grants researcher/writer: as we try to sponsor more student
              athletes who otherwise would not financially be able to join the
              team or participate in races, we are always in need of volunteers
              to help find and apply for grants.
            </li>
            <li>
              Sponsorship coordinator: volunteer to help recruit sponsors for
              the team with either cash or gear donations.
            </li>
            <li>
              Photographer: volunteer to take photos at practices and/or races
              and events.
            </li>
          </ul>
        </div>
        <Image
          alt="Coach Ron and his son Ronald"
          src={RonAndRon}
          className="mx-auto w-[94vw] max-w-[500px]"
        />
      </div>
      <div className="flex flex-row flex-wrap items-center">
        <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
          <h2 className="text-center text-xl">Volunteer Coach Inquiry</h2>
          <p>
            Please complete{" "}
            <a
              href="https://forms.gle/PKuLApVavxtu1Uo88"
              className="text-secondary"
            >
              this form
            </a>{" "}
            to inquire about becoming a volunteer coach!
          </p>
          <p>
            Fredericksburg Composite relies upon a 100% volunteer corps of
            coaches. Like most youth sport leagues, we draw our coaches from the
            parent pool and the local community. Most of our coaches are not
            expert-level cyclists or racers, rather they draw from a wide range
            of professional & personal expertise to make the team whole.
          </p>
          <p>
            All Fredericksburg Composite coaches are trained/vetted with
            background checks, abuse awareness, and upper level coaches are
            trained with First Aid and CPR. Basic training consists of a
            background check and about 3 hours of online training courses
            provided by NICA.
          </p>
          <p>
            We require a coach to student athlete ratio of 2:8. The more coaches
            we have, the more student athletes we can bring to the team! 
          </p>
        </div>
        <Image
          alt="Student athletes in the field"
          src={TeamInField}
          className="mx-auto max-h-[333px] w-[94vw] max-w-[500px]"
        />
      </div>
    </div>
  );
}
