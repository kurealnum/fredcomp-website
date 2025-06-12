import James from "@img/james_through_creek.png";
import CoachSteve from "@img/coachsteve_and_bike.png";
import Image from "next/image";
import RowWrap from "@/components/RowWrap";

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center font-light">
      <h1 className="my-8 text-center text-3xl">Donate</h1>
      <RowWrap maxWidth={1200}>
        <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
          <h2 className="text-center text-xl">
            What would my donation support?
          </h2>
          <p>
            A donation of any dollar mount will be used to purchase & maintain
            team equipment (tents, cones, consumables, and more), to help cover
            the cost of training volunteer coaches, and to cover the cost of
            team insurance!
          </p>
          <p>
            A $50 donation covers the team fees for one student athlete who
            otherwise would not have the resources to join the team!
          </p>
          <p>
            A $275 donation covers the team fees and racing fees for a student
            athlete who would like to race in the fall or spring season!
          </p>
        </div>
        <Image
          className="mx-auto w-[94vw] max-w-[500px]"
          alt="James going through a creek at Blue Ridge School"
          src={James}
        />
      </RowWrap>
      <RowWrap maxWidth={1200} className="mt-12">
        <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4">
          <h2 className="text-center text-xl">Donate gear!</h2>
          <p>
            You can donate your used mountain bike (in good working order) as
            well as new mountain bikes, helmets, mountain bike apparel, and more
            (no used apparel, helmets, water bottles, or hydration packs
            please).{" "}
          </p>
          <p>
            New hydration packs, water bottle cages, and water bottles are an
            essential need and a quick go-to if you want to donate gear. Send us
            an email to inquire about donating.{" "}
          </p>
          <p>
            All donations are tax deductible and will be shared with student
            athletes who need them!
          </p>
        </div>
        <Image
          className="mx-auto w-[94vw] max-w-[500px]"
          alt="Coach steve talking about bike maintenance"
          src={CoachSteve}
        />
      </RowWrap>
      <h1 className="my-8 mt-12 text-center text-3xl">
        Sponsor/partner with us
      </h1>
      <div className="mx-auto mb-8 w-[94vw] max-w-[600px]">
        <p>
          We will graciously accept any form of sponsorship or donation, not
          just money! Sponsorships may come in the form of:
        </p>
        <ul className="list-inside list-disc">
          <li>Donated gear (bikes, helmets, hydration packs, bottles, etc.)</li>
          <li>
            Discounts. For instance, all registered NICA student athletes
            receive a 15% discount from Trek Bikes.
          </li>
          <li>
            Anything else that might help a student athlete on their next ride!
          </li>
        </ul>
      </div>
    </div>
  );
}
