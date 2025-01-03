export interface GetListCourseProps {
  id: number;
  category_name: string;
  category_icon: string;
  category_slug: string;
}

export interface EnrollCourseProps {
  id: number;
  userId: number;
  courseId: number;
  slug: string;
  profile_course: string;
  name_course: string;
  instructor: string;
  status: string;
  progress: ProgressProps[];
  review: ReviewProps[];
}

export interface ProgressProps {
  id: number;
  enroll_course_id: number;
  enroll_user_id: number;
  enroll_course_slug: string;
  watched_progress: number;
  course_length: number;
}

export interface GetUserDataProps {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  career: string;
  phone: string;
  profile_img: string;
  biography: string;
}

export interface CartDataProp {
  id: number;
  product_id: number;
  product_img: string;
  product_name: string;
  product_slug: string;
  product_length: string;
  instructor: string;
  price: number;
  Subtotal: number;
  userId: number;
}

export interface CheckCourseProps {
  id: number;
  videoId: number;
  isComplete: string;
  userId: number;
  SectionId: number;
  slug: string;
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
  product_length: string;
  instructor: string;
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

export interface WishlistProps {
  id: number
  userId: number;
  course_img: string;
  course_title: string;
  course_instructor: string;
  course_price: number;
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
  id: number;
  course_product_name: string;
  section_name: string;
  section_description: string;
}

export interface DataCourseProp {
  id: number;
  course_product_name: string;
  section_name: string;
  section_description: string;
  course_video: CourseVideo[];
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