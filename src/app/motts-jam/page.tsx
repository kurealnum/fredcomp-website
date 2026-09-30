import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import LoadIn from "@/components/LoadIn";

export const metadata: Metadata = {
  title: "Mott's Jam Youth Mountain Bike Race - FredComp MTB",
};

const ZEFFY_URL =
  "https://www.zeffy.com/en-US/ticketing/2026-motts-jam-youth-moutain-bike";

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center font-light">
      <h1 className="my-8 text-center text-3xl">Mott&apos;s Jam</h1>
      <LoadIn>
        <div className="mx-auto mb-8 flex w-[95%] max-w-[600px] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-xl">Youth Mountain Bike Race</h2>
          <p>
            Join us for Mott&apos;s Jam, a youth mountain bike race! Register
            below to reserve your spot.
          </p>
          <Button asChild size="lg">
            <a href={ZEFFY_URL} target="_blank" rel="noopener noreferrer">
              Register for Mott&apos;s Jam
            </a>
          </Button>
        </div>
      </LoadIn>
    </div>
  );
}
