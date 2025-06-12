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
  id,
}: {
  children: React.ReactNode;
  maxWidth: number;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={
        "max-w-[" +
        maxWidth +
        "] mx-auto flex w-[94vw] flex-row flex-wrap items-center justify-center gap-8"
      }
    >
      {children}
    </div>
  );
}
