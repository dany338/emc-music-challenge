export interface IUser {
  id: number;
  role: string;
  name: string;
  alias: string;
  avatarUrl: string;
  notifications: number;
  email: string;
  password: string;
}

class User implements IUser {
  id: number;
  role: string;
  name: string;
  alias: string;
  avatarUrl: string;
  notifications: number;
  email: string;
  password: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.role = user.role;
    this.name = user.name;
    this.alias = user.alias;
    this.avatarUrl = user.avatarUrl;
    this.notifications = user.notifications;
    this.email = user.email;
    this.password = user.password;
  }
}

export default User;