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

export interface ReviewProps {
  id: number;
  profileImg: string;
  name: string;
  rating: number;
  message: string;
  postedAt: string; // or Date if you're parsing it to a Date object
  teacherId: number;
  courseId: number;
  userId: number;
}

export interface TeacherCourseProps {
  profile_image: string;
  background_image: string;
  full_name: string;
  full_name_slug: string;
  bio: string;
}

export interface CourseProductProps {
  id: number;
  categoryUID: string;
  courseImage: string;
  name_course: string;
  slug: string;
  price: number;
  discountPrice: number;
  lession: number;
  hours: number;
  stars: number;
  num_review: number;
  isFutured: string;
  teacherId: number;
  teacher_course: TeacherCourseProps;
  review: ReviewProps[];
}
