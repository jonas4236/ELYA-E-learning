import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
    title: "ReactJS",
    href: "/course-category/test",
  },
  {
    title: "TypeScript",
    href: "/course-category/test",
  },
  {
    title: "NextJS",
    href: "/course-category/test",
  },
  {
    title: "JavaScript",
    href: "/course-category/test",
  },
  {
    title: "NestJS",
    href: "/course-category/test",
  },
  {
    title: "PHP",
    href: "/course-category/test",
  },
  {
    title: "Rust",
    href: "/course-category/test",
  },
  {
    title: "Golang",
    href: "/course-category/test",
  },
  {
    title: "Assembly",
    href: "/course-category/test",
  },
  {
    title: "NEOVIM",
    href: "/course-category/test",
  },
  {
    title: "VIM",
    href: "/course-category/test",
  },
  {
    title: "UX UI Design",
    href: "/course-category/test",
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
        to="/about"
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
              {components.map((component, idx) => (
                <ListItem
                  key={idx}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      <Link
        to="/contact"
        className={`${navigationMenuTriggerStyle()} flex justify-center items-center text-center mt-5`}
      >
        Contact
      </Link>
    </>
  );
}
