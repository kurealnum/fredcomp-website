import Link from "next/link";

export default function CustomLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <div
      className={
        "group md:text-md text-md relative flex inline w-max cursor-pointer flex-row items-center" +
        " " +
        className
      }
    >
      <Link href={href} className="text-secondary">
        {children}
      </Link>
      <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
    </div>
  );
}
