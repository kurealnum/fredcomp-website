import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import HoverLink from "./HoverLink";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavigationMenu className="bg-secondary w-screen max-w-screen flex-row justify-center text-white text-shadow-lg/15 sm:justify-between">
      <div>
        <NavigationMenuLink className="pr-0 max-sm:w-0 max-sm:p-0" href="/">
          <Image src={"/fredcomp_logo.png"} alt="" width={50} height={50} />
        </NavigationMenuLink>
      </div>
      <NavigationMenuList className="flex-row justify-end gap-0">
        <NavigationMenuItem>
          <Link href={"/join"}>
            <HoverLink text="Join The Team" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/volunteer"}>
            <HoverLink text="Volunteer/Coach" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/donate"}>
            <HoverLink text="Donate" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/faq"}>
            <HoverLink text="FAQ" />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
