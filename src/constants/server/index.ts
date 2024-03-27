/**
 * Name: API_END_POINTS
 * Desc: The API end points
 */
export const API_END_POINTS = {
  login: '/api/login',
  verifyMobile: '/api/verifyMobile',
  createSubscription: '/api/create-subscription',
  updateSubscription: '/api/update-android-in-app-subscription',
  subscriptionListing: '/api/subscription-plan-list',
};

/**
 * Name: HEADER_KEYS
 * Desc: The headers key params.
 */
export const HEADER_KEYS = {
  Authorization: 'Authorization',
  ContentType: 'Content-Type',
  ApplicationJson: 'application/json',
  Bearer: 'Bearer',
  Accept: 'Accept',
};

/**
 * Name: REDUCER_PATHS
 * Desc: The reducer paths.
 */
export const REDUCER_PATHS = {
  AuthApi: 'authApi',
  subscriptionApi: 'subscriptionApi',
};
