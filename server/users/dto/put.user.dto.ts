// every time we create a user, regardless of the database, it should have  all this prop
export interface PutUserDto {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  permissionLevel?: number;
}
