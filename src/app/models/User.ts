export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  street?: string,
  city?: string,
  state?: string,
  email:string,
  image?:string,
  isOnline?:boolean,
  isHide?:boolean
}