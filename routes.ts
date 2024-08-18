/**
 * a list of public routes that are accessible with or without authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",

]

/**
 * a list of routes where if autehnticated, the user will be redirected to DEFAULT_LOGIN_REDIRECT
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * 
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * the default route to redirect to after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"