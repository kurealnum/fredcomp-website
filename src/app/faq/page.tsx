import CustomLink from "@/components/CustomLink";
import { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ - FredComp MTB",
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When can I join the team as a new student athlete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before each season (January/February and June/July – inquiries are welcome at any time as we may be able to accommodate), we first take registrations from returning student athletes and then accept new student athletes as our coach to student athlete ratio allows (2 coaches for every 8 student athletes). We keep a waitlist of anyone we cannot immediately accommodate. Your student athlete can bypass the waitlist (and allow others to join!) if one parent/guardian completes the coach training and becomes a volunteer coach.",
        },
      },
      {
        "@type": "Question",
        name: "What does it cost to join the team and to race?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Team fees are $50 per season (January–June and July–November) as of June 2025. Additional racing-related fees include: team jersey ($55–$85 depending on style), and series racing fees (VAHS for spring, NICA for fall) paid directly to the league.",
        },
      },
      {
        "@type": "Question",
        name: "When/where does the team practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The team typically rotates practice locations between Mott’s Run Reservoir, Locust Shade Park, and the Quarry. Specific times and locations are shared privately in the team's app (Heja).",
        },
      },
      {
        "@type": "Question",
        name: "When do Fredericksburg Composite's seasons start and end?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The spring season runs from approximately March 1 to June 1. The summer/fall season runs from approximately July 1 to November 1. Team rides also occur outside of these dates, weather permitting, and are posted in the team app (Heja).",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to be ready for mountain bike season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ensure your bike is in good working order: check air, brakes, chain, derailleur, and overall condition. Make sure you have hydration, food if needed, and that your helmet fits and is up-to-date. Don’t worry—coaches and teammates are available to help with checks and questions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to join the team to ride with the team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Being a team member ensures coverage for insurance, coach training, league fees, and equipment. Team membership is required to participate in practices and rides. Sponsorships are welcome through the donate page.",
        },
      },
      {
        "@type": "Question",
        name: "What is Heja (pronounced 'Hey-ya')?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Heja is a scheduling and communication app used for team practices and events. It allows RSVPs and notifications. Please RSVP at least 24 hours in advance. Enable notifications to receive updates about cancellations or changes.",
        },
      },
      {
        "@type": "Question",
        name: "What is a multi-speed mountain bike?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A multi-speed mountain bike has multiple gears and the ability to shift. Most mountain bikes fall into this category. To check, look at the right (drive) side of the rear wheel for multiple gears.",
        },
      },
      {
        "@type": "Question",
        name: "What is Fred Comp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fred Comp is short for Fredericksburg Composite.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-[94vw] max-w-[800px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      ></script>
      <h1 className="my-8 text-center text-3xl font-light">FAQ</h1>
      <FAQAccordion />
      <div className="text-md mt-6 font-light">
        If you have any other questions, please feel free to send us an email at{" "}
        <CustomLink href="mailto:fredcompmtb@gmail.com">
          FredCompMTB@gmail.com
        </CustomLink>{" "}
        and we&apos;ll happily respond to all inquiries!
      </div>
    </div>
  );
}
