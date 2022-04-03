/**
 * defines error code that can be sent by the server
 * All these codes are taken from the source code of gesapi API
 * @module Errors
 */
// general errors
export const ERR_UNDEFINED = 1;
export const ERR_NETWORK = 2;


// errors for users
export const ERR_USER_INVALID_FIND_LOGIN_REQUEST = 427;
export const ERR_USER_CANNOT_FIND_LOGIN = 428;
export const ERR_USER_INVALID_FIND_USERS_REQUEST = 433;

// errors for jwt authentication
export const ERR_AUTH_NO_TOKEN = 620;
export const ERR_AUTH_NOT_AUTHORIZED = 621;
export const ERR_AUTH_TOKEN_EXPIRED = 622;

export const ERR_AUTH_PASSWORD_NO_MATCH = 629;

