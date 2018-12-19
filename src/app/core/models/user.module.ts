export interface User {
  uid: string;
  email: string;
  displayName: string;
  roles: Roles;
  username?: string;
}

export interface Roles {
  premium_member?: boolean;
  admin?: boolean;
}
