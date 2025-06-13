"use client";
import { Skeleton } from "@/components/ui/skeleton";
export default function FAQAccordionSkeleton() {
  // Each one of these is a "question"
  const skeletons = [];
  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <Skeleton
        key={i}
        className="bg-primary my-8 h-[24px] w-[94vw] max-w-[800px] opacity-40"
      />,
    );
  }
  return <div className="max-w-[800px]">{skeletons}</div>;
}
