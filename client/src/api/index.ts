const URL_SERVER = "http://localhost:3000";

export const server = {
  API_GER_LIST_CATEGORY_COURSE: `${URL_SERVER}/category-course`,
  API_GET_LIST_COURSE_PRODUCT: `${URL_SERVER}/course-product/:uid`,
  API_GET_COURSE_INFO: `${URL_SERVER}/course-info/name/:name`,
  API_GET_COURSE_PRODUCT_UID: `${URL_SERVER}/course-product/single/:param`,
  API_GET_COUNT_ENROLLMENT: `${URL_SERVER}/enrollment/count/:slug`,
  API_GET_INTRODUCE_SECTION_AND_VIDEO: `${URL_SERVER}/course-section/:name`,
};
