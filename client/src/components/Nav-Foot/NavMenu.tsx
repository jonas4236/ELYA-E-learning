import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentContainer,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

interface ComponentsProps {
  title: string;
  href: string;
}

const components: ComponentsProps[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
  },
];

export function NavMenu() {
  return (
    <>
      <Link
        to="/"
        className={`${navigationMenuTriggerStyle()} flex justify-center items-center text-center mt-5`}
      >
        Home
      </Link>
      <Link
        to="/"
        className={`${navigationMenuTriggerStyle()} flex justify-center items-center text-center mt-5`}
      >
        About
      </Link>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] bg-white gap-3 z-[99] py-4 md:grid-cols-1 list-none">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      <Link
        to="/"
        className={`${navigationMenuTriggerStyle()} flex justify-center items-center text-center mt-5`}
      >
        Contact
      </Link>
    </>
  );
}
