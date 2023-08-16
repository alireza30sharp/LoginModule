
export class IUser {
  id: number = null;
  username: string = null;
  avatar: string = null;
  lastOnlineDate: object = null;
  registerDate: string = null;
  lastLoginDate: object = null;
  roles: string = null;
  introducerId: number = null;
  lastLocation: string = null;
  lastLocationDate: string = null;
  isActive: boolean = null;
  isDeleted: boolean = null;
  displayName: string = null;
  title?: string;
  description?: string;
}

export class ChangePassword{
  oldPassword:string;
  newPassword:string;
  checkPassword:string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
  expire: number;
}