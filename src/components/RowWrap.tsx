// A component that handles two divs like so:
//
//          div1
// Mobile:
//          div2
//
// Desktop: div1 div2
export default function RowWrap({
  children,
  maxWidth,
  className,
  id,
}: {
  children: React.ReactNode;
  maxWidth: number;
  id?: string;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={
        "max-w-[" +
        maxWidth +
        "px] mx-auto flex w-[94vw] flex-row flex-wrap items-center justify-center gap-8" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
}
