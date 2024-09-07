export interface GetListCourseProps {
  id: number;
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
  postedAt: string;
  teacherId: number;
  courseId: number;
  userId: number;
}

export interface TeacherCourseProps {
  id: number;
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

export interface TagCourseProps {
  id: number;
  tag_name: string;
}

export interface TagProps {
  id: number;
  tag_name: string;
  tag_slug: string;
}

export interface RequirementProps {
  id: number;
  require_name: string;
}

export interface CourseInfoProps {
  id: number;
  courseProductName: string;
  descriptionCourse: string;
  courseIntroduce: string;
  hours: number;
  uploadedAt: string;
  tag_course: TagCourseProps[];
  tag: TagProps[];
  requirement: RequirementProps[];
}

export interface EnrollmentProps {
  id: number;
  userId: number;
  courseId: number;
  course_slug: string;
  enroll_date: string;
}

export interface CourseSection {
  course_product_name: string;
  section_name: string;
  section_description: string;
}

export interface CourseVideo {
  id: number;
  sectionId: number;
  video_title: string;
  video_url: string;
  duration: string;
}
export interface CourseVideoWithOutURL {
  id: number;
  sectionId: number;
  video_title: string;
  duration: string;
}

export interface CourseSectionAndVideo {
  course_product_name: string;
  section_name: string;
  section_description: string;
  course_video: CourseVideoWithOutURL[];
}

export interface UserProps {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password?: string;
  email: string;
  career: string;
  phone: string;
  biography: string;
}
