export const AUTH_STORE_KEY = 'auth';

export enum AuthType {
  logout = '[Auth] Logout',
  logoutSuccess = '[Auth] Logout Success',
  subscribeForUser = '[Auth] Subscribe for User Changes',
  setUser = '[Auth] Set User',
  loginSuccess = '[Auth] User Login Success',
  loginFail = '[Auth] User Login Fail',
}
