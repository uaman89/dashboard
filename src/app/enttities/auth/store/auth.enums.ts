export const AUTH_STORE_KEY = 'auth';

export enum AuthType {
  login = '[Auth] Login',
  loginSuccess = '[Auth] User Login Success',
  loginFail = '[Auth] User Login Fail',

  logout = '[Auth] Logout',
  logoutSuccess = '[Auth] Logout Success',
}
