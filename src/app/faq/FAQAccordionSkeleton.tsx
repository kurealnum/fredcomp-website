"use client";
import { Skeleton } from "@/components/ui/skeleton";
export default function FAQAccordionSkeleton() {
  // Each one of these is a "question"
  const skeletons = [];
  for (let i = 0; i < 11; i++) {
    skeletons.push(
      <Skeleton
        key={i}
        className="bg-primary my-10 h-[24px] w-[94vw] max-w-[800px] opacity-20 shadow-[4px_4px_6px_0px_rgba(0,_0,_0,_0.1)]"
      />,
    );
  }
  return <div className="max-w-[800px]">{skeletons}</div>;
}
