export interface GetListCourseProps {
  category_name: string;
  category_icon: string;
  category_slug: string;
}

export interface NavMenuProps {
  data: GetListCourseProps[];
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}
