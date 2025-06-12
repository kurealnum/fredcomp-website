import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function CustomAccordionItem({
  trigger,
  className,
  id,
  triggerClassName,
  contentClassName,
  children,
}: {
  trigger: string;
  id: string;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={id} className={className + " font-light"}>
      <AccordionTrigger
        className={triggerClassName + " text-md cursor-pointer font-normal"}
      >
        {trigger}
      </AccordionTrigger>
      <AccordionContent className={contentClassName}>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
