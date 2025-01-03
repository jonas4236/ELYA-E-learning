import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import { NavMenuProps } from "@/Types";


export function NavMenu({ data }: NavMenuProps) {

  // console.log("data:", data)
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
              {data && data.map((component, idx) => (
                <ListItem
                  key={idx}
                  title={component.category_name}
                  href={`/category-course/${component.category_slug}`}
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