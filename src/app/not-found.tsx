import CustomLink from "@/components/CustomLink";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h2 className="text-xl">Not Found</h2>
      <p className="font-light">
        We couldn&apos;t find the page you were looking for!
      </p>
      <CustomLink href="/">Return home</CustomLink>
    </div>
  );
}
