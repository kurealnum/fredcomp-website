export default function HoverLink({ text }: { text: string }) {
  return (
    <p className="group md:text-md relative mx-1 my-2.5 w-max cursor-pointer text-sm">
      <span className="max-sm:group-active:text-accent relative z-10 px-1 text-wrap group-hover:text-white">
        {text}
      </span>
      <span className="bg-accent absolute bottom-0 left-0 z-0 h-[0px] w-full transition-all group-hover:h-full"></span>
    </p>
  );
}
