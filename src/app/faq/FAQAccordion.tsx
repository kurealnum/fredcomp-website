"use client";
import CustomAccordionItem from "@/components/CustomAccordionItem";
import { Accordion, AccordionContent } from "@/components/ui/accordion";
import getHash from "@/lib/getHash";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import { useEffect, useState } from "react";
import FAQAccordionSkeleton from "./FAQAccordionSkeleton";

export default function FAQAccordion() {
  const [hash, setHash] = useState<string>("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHash(getHash().slice(1));
    setReady(true);
  }, [hash]);

  if (!ready) {
    return <FAQAccordionSkeleton />;
  }

  return (
    <Accordion type="multiple" defaultValue={[hash]}>
      <CustomAccordionItem
        id="1"
        trigger="When can I join the team as a new student athlete?"
      >
        <p className="mb-2">
          Before each season (January/February and June/July - inquiries are
          welcome at any time as we may be able to accommodate), we first take
          registrations from returning student athletes and then accept new
          student athletes as our coach to student athlete ratio allows (2
          coaches for every 8 student athletes).
        </p>
        <p>
          We keep a waitlist of anyone we cannot immediately accommodate. Your
          student athlete can bypass the waitlist (and allow others to join!) if
          one parent/guardian completes the coach training and{" "}
          <Link href={"/volunteer"}>becomes a volunteer coach</Link>.
        </p>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="2"
        trigger="What does it cost to join the team and to race?"
      >
        <AccordionContent>
          <p className="mb-2">
            Team fees are collected per season (January-June and July-November).
            As of June 2025, team fees are $50 for each student athlete.
          </p>
          <p className="mb-2">
            Additional fees for student athletes who will be racing:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Team jersey (required to race): between $55 and $85 depending on
              the style you choose. Non-racers are not required to purchase a
              jersey, but are welcome to purchase a jersey.
            </li>
            <li>
              Series racing fees: VAHS for the spring season, NICA for the fall
              season. These fees are paid directly to the league and are not
              collected by Fredericksburg Composite MTB Team.
            </li>
          </ul>
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem id="3" trigger="When/where does the team practice?">
        <AccordionContent>
          The team typically rotates practice locations between Mott&apos;s Run
          Reservoir, Locust Shade Park, and the Quarry. Specific times and
          locations are found in the team&apos;s app (Heja) and are not
          published publicly.
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="4"
        trigger="When do Fredericksburg Composite's seasons start and end?"
      >
        <AccordionContent>
          We have two training seasons. The spring season runs from
          approximately March 1 to June 1 and the summer/fall season runs from
          approximately July 1 to November 1. We do hold team rides outside of
          the season that are posted in the team app (Heja); we ride all year
          long weather-permitting.{" "}
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="5"
        trigger="What do I need to be ready for mountain bike season?"
      >
        <AccordionContent>
          <p className="mb-2">
            Make sure your bike is in good working order! We have some awesome
            local shops who have been extremely helpful with bike checks and
            maintenance classes. All our practices and events start with a bike
            check (A,B,C,D,E,F): air, brakes, chain, derailleur, everything
            else, food/fuel for you!):
          </p>
          <ul className="mb-2 list-inside list-disc">
            <li>Do your tires hold air and have plenty of tread?</li>
            <li>Do your brakes work?</li>
            <li>Is your chain clean and lubed?</li>
            <li>Is your derailleur straight and functional?</li>
            <li>Is anything loose, creaking, or otherwise abnormal?</li>
            <li>Do you have water (& food if you need it?)</li>
          </ul>
          <p className="mb-2">
            Don&apos;t worry if you don&apos;t know what these things are or how
            to check them! Our coaches and your teammates are here to help!
          </p>
          <p>
            Check your other gear as well. Does your helmet fit properly
            (replaced every 3 years or after a crash)? Do you have a water
            bottle & water bottle cage or a hydration pack?
          </p>
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="6"
        trigger="Do I need to join the team to ride with the team?"
      >
        <AccordionContent>
          Yes! Being a team member allows riders and parents (who have taken
          coach training) to ride and practice with us. Team fees pay for
          insurance, coach training, league fees, and equipment. We make every
          effort to keep team fees minimal so everyone has the opportunity to
          ride with us! If you would like to sponsor a student athlete, please
          head over to our <Link href={"/donate"}>donate</Link> page!
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="7"
        trigger="What is Heja (pronounced \'Hey-ya\')?"
      >
        <AccordionContent>
          <p className="mb-2">
            Heja is a scheduling and communication app for sports teams. All
            team practices and events will be posted in Heja. Heja has an RSVP
            function: please RSVP whether you will be attending upcoming
            practices and events so coaches can plan for practice! Best practice
            is to RSVP no later than 24 hours before an event as the head coach
            will be creating the ride assignments for coaches and student
            athletes.
          </p>
          <p>
            Heja is also the primary method by which you will be notified of
            practice or event cancellations - so be sure your settings allow you
            to receive updates!
          </p>
        </AccordionContent>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="8"
        trigger="What is a multi-speed mountain bike?"
      >
        <p>
          A bicycle that has multiple gears, also known as a bike with the
          ability to shift. The majority of mountain bikes have gears. If
          you&apos;re confused, stand behind your bike and look towards the
          handlebars. Then, look down at the right side (this is called the
          drive side!) of the rear wheel. If there are multiple gears, you have
          a multi-speed bike!
        </p>
      </CustomAccordionItem>
      <CustomAccordionItem id="9" trigger="What is Fred Comp?">
        <p>Fred Comp is the abbreivation for Fredericksburg Composite.</p>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="loaner-bikes"
        trigger="Does Fred Comp have loaner bikes?"
      >
        <div>
          Yes! Please reach out to us at{" "}
          <CustomLink href="mailto:fredcompmtb@gmail.com">
            FredCompMTB@gmail.com
          </CustomLink>{" "}
          for more information
        </div>
      </CustomAccordionItem>
      <CustomAccordionItem
        id="age-exceptions"
        trigger="My student athlete is < 9 years old. Do you make exceptions?"
      >
        <div>
          Please reach out to us at{" "}
          <CustomLink href="mailto:fredcompmtb@gmail.com">
            fredcompmtb@gmail.com
          </CustomLink>{" "}
          to discuss possible options!
        </div>
      </CustomAccordionItem>
    </Accordion>
  );
}
