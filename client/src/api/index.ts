const URL_SERVER = "http://localhost:3000";

export const server = {
  API_GER_LIST_CATEGORY_COURSE: `${URL_SERVER}/category-course`,
  API_GET_LIST_COURSE_PRODUCT: `${URL_SERVER}/course-product/:uid`,
  API_GET_COURSE_INFO: `${URL_SERVER}/course-info/name/:name`,
  API_GET_COURSE_PRODUCT_UID: `${URL_SERVER}/course-product/single/:param`,
  API_GET_COUNT_ENROLLMENT: `${URL_SERVER}/enrollment/user/:uid/:c_slug`,
  API_GET_INTRODUCE_SECTION_AND_VIDEO: `${URL_SERVER}/course-section/:name`,
  API_POST_REGISTER: `${URL_SERVER}/user`,
  API_GET_PROFILE: `${URL_SERVER}/user/profile`,
  API_GET_LOGIN: `${URL_SERVER}/auth/login`,
  API_GET_SECTIONVID: `${URL_SERVER}/course-section/:name`,
  API_GET_CHECK_COURSE_VIDEO: `${URL_SERVER}/check-course/vid/:uid/:sid`,
  API_POST_MARK_COMPLETE_COURSE: `${URL_SERVER}/check-course`,
  API_POST_ADD_TO_CART: `${URL_SERVER}/cart`,
  API_DEL_ITEM_IN_CART: `${URL_SERVER}/cart/del/:id/:uid`,
  API_STRIPE_CHECKOUT_SESSION: `${URL_SERVER}/stripe/checkout-session`,
};
