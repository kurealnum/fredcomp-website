import { Separator } from "./ui/separator";
import Monolith from "@img/monolith.png";
import CMV from "@img/custommetals.png";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <div className="bg-primary mt-8 font-extralight text-white [&_h1]:text-xl">
      <div className="max-w[1000px] flex flex-row flex-wrap justify-center gap-10 py-4">
        <div>
          <h1 className="mx-auto w-min font-normal text-nowrap">
            Helpful Links
          </h1>
          <ul className="flex flex-col *:hover:underline">
            <li>
              <a href="https://github.com/kurealnum/fredcomp-website">
                We&apos;re open source!
              </a>
            </li>
            <li>
              <a href="https://github.com/kurealnum/fredcomp-website/issues">
                Make a feature request
              </a>
            </li>
            <li>
              <Link href={"/volunteer"}>Become a coach</Link>
            </li>
            <li>
              <Link href={"/join"}>Register for the team</Link>
            </li>
            <li>
              <Link href={"/join"}>Pay team fees</Link>
            </li>
            <li>
              <a href="https://www.facebook.com/FredCompMTB/">
                FredComp Official Facebook
              </a>
            </li>
            <li>
              <a href="https://nationalmtb.org/">NICA</a>
            </li>
            <li>
              <a href="https://vahs-sports.com/">VAHS</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mx-auto w-min font-normal text-nowrap">Sponsors</h1>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <Image
                className="w-[300px]"
                src={Monolith}
                alt="Monolith Performance provides high quality nutrition for endurance athletes seeking optimized science-backed products that provide fuel for the extra mile at a price point that allows you to focus on your ride, not your wallet."
              />
            </li>
            <li>
              <Image
                className="w-[250px]"
                src={CMV}
                alt="Custom Metals of Virginia provides exceptional custom metal fabrication to homeowners, architects, and businesses."
              />
            </li>
            <li className="mt-2">
              <CustomLink href={"/donate"}>
                Interested in being a sponsorer?
              </CustomLink>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mx-auto w-min font-normal text-nowrap">Contact us</h1>
          <div className="text-center *:hover:underline">
            <p>
              <a href="mailto:fredcompmtb@gmail.com">fredcompmtb@gmail.com</a>
            </p>
            <p>
              <a href="tel:+15402208473">540-220-8473</a>
            </p>
          </div>
          <div className="mx-auto mt-4 w-[90%] max-w-[240px] text-xs">
            <p className="mb-2">
              Fredericksburg Composite MTB Team is supported by the nonprofit
              501c3 organization Fredericksburg Area Interscholastic Cycling
              Team (EIN 87-2871561).
            </p>
            <p>
              (Legal jargin that states we are legally classified as a
              non-profit, not a club or Nica team)
            </p>
          </div>
        </div>
      </div>
      <Separator className="bg-accent" />
      <div className="flex flex-row flex-wrap justify-center gap-4 py-4">
        <div className="flex flex-row gap-1">
          Website designed & developed by
          <CustomLink href="https://oscargaske.me">Oscar Gaske</CustomLink>
        </div>
        <p>Majority of photos taken by Emily Lumpkins</p>
      </div>
    </div>
  );
}
