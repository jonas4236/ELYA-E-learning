import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ListItemProps } from "@/Types";
import * as React from "react";
import { Link } from "react-router-dom";

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 leading-none transition-all duration-150 border-l-[4px] border-transparent hover:border-l-[4px] outline-none hover:border-[#0e5ddd] hover:bg-slate-200 hover:text-[#0e5ddd]",
              className
            )}
            {...props}
          >
            <div className="text-normal font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground"></p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
export default ListItem;