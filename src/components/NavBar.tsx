import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="bg-secondary w-screen max-w-screen flex-row justify-between text-white text-shadow-lg/15">
      <NavigationMenuItem>
        <NavigationMenuLink href="/">
          <Image src={"/fredcomp_logo.png"} alt="" width={50} height={50} />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuList className="flex-row justify-end gap-0">
        <NavigationMenuItem>
          <NavigationMenuLink>Join The Team</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Volunteer/Coach</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Donate</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>FAQ</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
